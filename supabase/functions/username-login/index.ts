import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.105.1';

type LoginBody = {
  username?: string;
  password?: string;
};

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

function normalizeUsername(username: string): string {
  return username.trim().toLowerCase();
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return jsonResponse({ error: 'method_not_allowed' }, 405);

  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  const anonKey = Deno.env.get('SUPABASE_ANON_KEY');
  if (!supabaseUrl || !serviceRoleKey || !anonKey) {
    return jsonResponse({ error: 'server_not_configured' }, 500);
  }

  let body: LoginBody;
  try {
    body = await req.json();
  } catch {
    return jsonResponse({ error: 'invalid_json' }, 400);
  }

  const username = normalizeUsername(body.username ?? '');
  const password = body.password ?? '';
  if (!username || !password) return jsonResponse({ error: 'username_and_password_required' }, 400);

  const admin = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { data: profile, error: profileError } = await admin
    .from('profiles')
    .select('id, username, display_name, role, internal_auth_email')
    .eq('username', username)
    .maybeSingle();

  if (profileError) return jsonResponse({ error: 'profile_lookup_failed' }, 500);
  if (!profile?.internal_auth_email) return jsonResponse({ error: 'invalid_login' }, 401);

  const publicClient = createClient(supabaseUrl, anonKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { data: sessionData, error: signInError } = await publicClient.auth.signInWithPassword({
    email: profile.internal_auth_email,
    password,
  });

  if (signInError || !sessionData.session) return jsonResponse({ error: 'invalid_login' }, 401);

  return jsonResponse({
    access_token: sessionData.session.access_token,
    refresh_token: sessionData.session.refresh_token,
    expires_in: sessionData.session.expires_in,
    token_type: sessionData.session.token_type,
    user: {
      id: profile.id,
      username: profile.username,
      display_name: profile.display_name,
      role: profile.role,
    },
  });
});
