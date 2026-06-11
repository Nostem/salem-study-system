import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.105.1';

const FALLBACK_ALLOWED_ORIGINS = [
  'https://nostem.github.io',
  'http://localhost:4321',
  'http://127.0.0.1:4321',
];

function parseAllowedOrigins(): string[] {
  const raw = Deno.env.get('ALLOWED_ORIGINS');
  if (!raw) return FALLBACK_ALLOWED_ORIGINS;
  const parsed = raw.split(',').map((value) => value.trim()).filter(Boolean);
  return parsed.length > 0 ? parsed : FALLBACK_ALLOWED_ORIGINS;
}

const ALLOWED_ORIGINS = new Set(parseAllowedOrigins());

function originHeader(origin: string | null): string {
  if (origin && ALLOWED_ORIGINS.has(origin)) return origin;
  return 'null';
}

function corsHeaders(origin: string | null): Record<string, string> {
  return {
    'Access-Control-Allow-Origin': originHeader(origin),
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Vary': 'Origin',
  };
}

function originFromInput(input: Request | string | null | undefined): string | null {
  if (!input) return null;
  if (typeof input === 'string') return input;
  return input.headers.get('Origin');
}

export const DEFAULT_CORS_HEADERS = corsHeaders(null);

export function jsonResponse(
  body: Record<string, unknown>,
  status = 200,
  origin: Request | string | null = null,
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders(originFromInput(origin)), 'Content-Type': 'application/json' },
  });
}

export function optionsResponse(origin: Request | string | null = null): Response {
  return new Response('ok', { headers: corsHeaders(originFromInput(origin)) });
}

export function requirePost(req: Request): Response | null {
  if (req.method === 'OPTIONS') return optionsResponse(req);
  if (req.method !== 'POST') return jsonResponse({ error: 'method_not_allowed' }, 405, req);
  return null;
}

export function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return true;
  return ALLOWED_ORIGINS.has(origin);
}

// Returns a 403 response when the request carries an Origin header that's not on
// the allowlist. Origin-less requests (server-to-server, native clients) are
// allowed through since browsers always send Origin on cross-origin POSTs.
export function requireAllowedOrigin(req: Request): Response | null {
  const origin = req.headers.get('Origin');
  if (isAllowedOrigin(origin)) return null;
  return jsonResponse({ error: 'origin_not_allowed' }, 403, req);
}

export function getRequiredEnv(name: string): string | null {
  const value = Deno.env.get(name);
  return value && value.trim() ? value : null;
}

export function bearerToken(req: Request): string | null {
  const authorization = req.headers.get('Authorization') ?? '';
  const accessToken = authorization.replace(/^Bearer\s+/i, '').trim();
  return accessToken || null;
}

export function createAdminClient() {
  const supabaseUrl = getRequiredEnv('SUPABASE_URL');
  const serviceRoleKey = getRequiredEnv('SUPABASE_SERVICE_ROLE_KEY');
  if (!supabaseUrl || !serviceRoleKey) return null;
  return createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

export function createPublicClient() {
  const supabaseUrl = getRequiredEnv('SUPABASE_URL');
  const anonKey = getRequiredEnv('SUPABASE_ANON_KEY');
  if (!supabaseUrl || !anonKey) return null;
  return createClient(supabaseUrl, anonKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

export async function readJsonBody<T>(req: Request): Promise<{ body: T; error: null } | { body: null; error: Response }> {
  try {
    const body = await req.json();
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return { body: null, error: jsonResponse({ error: 'invalid_json' }, 400, req) };
    }
    return { body: body as T, error: null };
  } catch {
    return { body: null, error: jsonResponse({ error: 'invalid_json' }, 400, req) };
  }
}

type AuthUser = { id: string };
type AuthAdminClient = {
  auth: {
    getUser: (jwt: string) => Promise<{ data: { user: AuthUser | null }; error: unknown }>;
  };
};

export async function requireUser(
  req: Request,
  admin: AuthAdminClient
): Promise<{ error: Response; user: null } | { error: null; user: AuthUser }> {
  const accessToken = bearerToken(req);
  if (!accessToken) return { error: jsonResponse({ error: 'missing_authorization' }, 401, req), user: null };
  const { data: userData, error: userError } = await admin.auth.getUser(accessToken);
  if (userError || !userData.user) return { error: jsonResponse({ error: 'invalid_authorization' }, 401, req), user: null };
  return { error: null, user: userData.user };
}

export function requestIp(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  return req.headers.get('cf-connecting-ip') || forwarded || req.headers.get('x-real-ip') || 'unknown';
}

export async function sha256Hex(value: string): Promise<string> {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}
