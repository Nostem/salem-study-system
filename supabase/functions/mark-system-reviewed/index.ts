import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.105.1';

type MarkReviewedBody = { slug?: string };

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

// Slugs are wiki article paths like "systems/reactor-coolant-system" — keep this
// permissive (a-z, 0-9, dashes, slashes) but strict enough to reject anything
// that looks like a path traversal or arbitrary string.
const SLUG_PATTERN = /^[a-z0-9][a-z0-9/-]{0,127}$/;

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return jsonResponse({ error: 'method_not_allowed' }, 405);

  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!supabaseUrl || !serviceRoleKey) return jsonResponse({ error: 'server_not_configured' }, 500);

  const authorization = req.headers.get('Authorization') ?? '';
  const accessToken = authorization.replace(/^Bearer\s+/i, '').trim();
  if (!accessToken) return jsonResponse({ error: 'missing_authorization' }, 401);

  let body: MarkReviewedBody;
  try {
    body = await req.json();
  } catch {
    return jsonResponse({ error: 'invalid_json' }, 400);
  }

  const slug = typeof body.slug === 'string' ? body.slug.trim().toLowerCase() : '';
  if (!SLUG_PATTERN.test(slug)) return jsonResponse({ error: 'invalid_slug' }, 400);

  const admin = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { data: userData, error: userError } = await admin.auth.getUser(accessToken);
  if (userError || !userData.user) return jsonResponse({ error: 'invalid_authorization' }, 401);

  const now = new Date().toISOString();
  const { error: upsertError } = await admin
    .from('system_reviews')
    .upsert(
      { user_id: userData.user.id, slug, last_reviewed_at: now },
      { onConflict: 'user_id,slug' }
    );

  if (upsertError) return jsonResponse({ error: 'review_upsert_failed' }, 500);

  return jsonResponse({ ok: true, slug, lastReviewedAt: now });
});
