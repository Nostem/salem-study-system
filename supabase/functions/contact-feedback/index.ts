import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.105.1';

type ContactFeedbackBody = {
  category?: string;
  name?: string;
  email?: string;
  message?: string;
  pageUrl?: string;
  userAgent?: string;
  website?: string;
};

const allowedCategories = new Set(['feedback', 'bug', 'question', 'content_issue']);

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

function jsonResponse(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

function cleanText(value: unknown, maxLength: number): string | null {
  if (typeof value !== 'string') return null;
  const normalized = value.trim().replace(/\s+/g, ' ');
  if (!normalized) return null;
  return normalized.slice(0, maxLength);
}

function cleanMessage(value: unknown): string | null {
  if (typeof value !== 'string') return null;
  const normalized = value.trim();
  if (normalized.length < 10 || normalized.length > 5000) return null;
  return normalized;
}

function cleanEmail(value: unknown): string | null {
  const email = cleanText(value, 254);
  if (!email) return null;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : null;
}

function cleanUrl(value: unknown): string | null {
  const raw = cleanText(value, 2048);
  if (!raw) return null;
  try {
    const url = new URL(raw);
    if (!['http:', 'https:'].includes(url.protocol)) return null;
    return url.toString();
  } catch {
    return null;
  }
}

function isAllowedOrigin(value: string | null): boolean {
  if (!value) return true;
  try {
    const origin = new URL(value);
    return ['nostem.github.io', 'localhost', '127.0.0.1'].includes(origin.hostname);
  } catch {
    return false;
  }
}

async function sha256Hex(value: string): Promise<string> {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

function requestIp(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  return req.headers.get('cf-connecting-ip') || forwarded || req.headers.get('x-real-ip') || 'unknown';
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return jsonResponse({ error: 'method_not_allowed' }, 405);
  if (!isAllowedOrigin(req.headers.get('Origin'))) return jsonResponse({ error: 'origin_not_allowed' }, 403);

  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!supabaseUrl || !serviceRoleKey) {
    return jsonResponse({ error: 'server_not_configured' }, 500);
  }

  let body: ContactFeedbackBody;
  try {
    body = await req.json();
  } catch {
    return jsonResponse({ error: 'invalid_json' }, 400);
  }

  // Honeypot: pretend success so basic bots do not get a useful signal.
  if (cleanText(body.website, 200)) {
    return jsonResponse({ ok: true, feedbackId: null });
  }

  const category = typeof body.category === 'string' && allowedCategories.has(body.category) ? body.category : 'feedback';
  const message = cleanMessage(body.message);
  if (!message) return jsonResponse({ error: 'message_required' }, 400);

  const name = cleanText(body.name, 120);
  const email = cleanEmail(body.email);
  if (body.email && !email) return jsonResponse({ error: 'invalid_email' }, 400);
  const pageUrl = cleanUrl(body.pageUrl);
  const userAgent = cleanText(body.userAgent ?? req.headers.get('User-Agent'), 512);

  const admin = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const rateKey = await sha256Hex(`${requestIp(req)}:${userAgent ?? 'unknown'}`);
  const rateWindow = new Date(Date.now() - 10 * 60 * 1000).toISOString();
  const { count: recentCount, error: rateError } = await admin
    .from('contact_messages')
    .select('id', { count: 'exact', head: true })
    .eq('metadata->>rate_key', rateKey)
    .gte('created_at', rateWindow);
  if (rateError) return jsonResponse({ error: 'rate_limit_check_failed' }, 500);
  if ((recentCount ?? 0) >= 3) return jsonResponse({ error: 'rate_limited' }, 429);

  const authorization = req.headers.get('Authorization') ?? '';
  const anonKey = req.headers.get('apikey') ?? '';
  const accessToken = authorization.replace(/^Bearer\s+/i, '').trim();
  let userId: string | null = null;
  if (accessToken && accessToken !== anonKey) {
    const { data } = await admin.auth.getUser(accessToken);
    userId = data.user?.id ?? null;
  }

  const { data: inserted, error: insertError } = await admin
    .from('contact_messages')
    .insert({
      user_id: userId,
      name,
      email,
      category,
      page_url: pageUrl,
      message,
      user_agent: userAgent,
      metadata: { rate_key: rateKey },
    })
    .select('id')
    .single();

  if (insertError || !inserted) return jsonResponse({ error: 'feedback_insert_failed' }, 500);

  return jsonResponse({ ok: true, feedbackId: inserted.id });
});
