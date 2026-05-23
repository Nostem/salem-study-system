import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.105.1';

export const DEFAULT_CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

export function jsonResponse(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...DEFAULT_CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}

export function optionsResponse(): Response {
  return new Response('ok', { headers: DEFAULT_CORS_HEADERS });
}

export function requirePost(req: Request): Response | null {
  if (req.method === 'OPTIONS') return optionsResponse();
  if (req.method !== 'POST') return jsonResponse({ error: 'method_not_allowed' }, 405);
  return null;
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
      return { body: null, error: jsonResponse({ error: 'invalid_json' }, 400) };
    }
    return { body: body as T, error: null };
  } catch {
    return { body: null, error: jsonResponse({ error: 'invalid_json' }, 400) };
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
  if (!accessToken) return { error: jsonResponse({ error: 'missing_authorization' }, 401), user: null };
  const { data: userData, error: userError } = await admin.auth.getUser(accessToken);
  if (userError || !userData.user) return { error: jsonResponse({ error: 'invalid_authorization' }, 401), user: null };
  return { error: null, user: userData.user };
}
