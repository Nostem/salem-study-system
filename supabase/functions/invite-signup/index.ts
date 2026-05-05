import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.105.1';

type SignupBody = {
  inviteCode?: string;
  username?: string;
  password?: string;
  displayName?: string;
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

function normalizeInviteCode(code: string): string {
  return code.trim().toUpperCase().replace(/\s+/g, '');
}

function normalizeUsername(username: string): string {
  return username.trim().toLowerCase();
}

function isValidUsername(username: string): boolean {
  return /^[a-z0-9_][a-z0-9_-]{2,31}$/.test(username);
}

async function sha256Hex(value: string): Promise<string> {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

function generateLearnerCode(): string {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const bytes = crypto.getRandomValues(new Uint8Array(8));
  const suffix = Array.from(bytes)
    .map((byte) => alphabet[byte % alphabet.length])
    .join('');
  return `SALEM-${suffix}`;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return jsonResponse({ error: 'method_not_allowed' }, 405);

  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!supabaseUrl || !serviceRoleKey) {
    return jsonResponse({ error: 'server_not_configured' }, 500);
  }

  let body: SignupBody;
  try {
    body = await req.json();
  } catch {
    return jsonResponse({ error: 'invalid_json' }, 400);
  }

  const inviteCode = normalizeInviteCode(body.inviteCode ?? '');
  const username = normalizeUsername(body.username ?? '');
  const password = body.password ?? '';
  const displayName = body.displayName?.trim() || username;

  if (!isValidUsername(username)) return jsonResponse({ error: 'invalid_username' }, 400);
  if (password.length < 8) return jsonResponse({ error: 'password_too_short' }, 400);

  const admin = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const code_hash = inviteCode ? await sha256Hex(inviteCode) : null;

  const { data: existingProfile, error: profileLookupError } = await admin
    .from('profiles')
    .select('id')
    .eq('username', username)
    .maybeSingle();

  if (profileLookupError) return jsonResponse({ error: 'profile_lookup_failed' }, 500);
  if (existingProfile) return jsonResponse({ error: 'username_taken' }, 409);

  let invite: {
    id: string;
    code?: string | null;
    code_hash?: string | null;
    max_uses: number;
    uses_count: number;
    expires_at?: string | null;
    revoked_at?: string | null;
  } | null = null;

  if (inviteCode && code_hash) {
    const { data: inviteRow, error: inviteError } = await admin
      .from('invites')
      .select('id, code, code_hash, max_uses, uses_count, expires_at, revoked_at')
      .or(`code_hash.eq.${code_hash},code.eq.${inviteCode}`)
      .maybeSingle();

    if (inviteError) return jsonResponse({ error: 'invite_lookup_failed' }, 500);
    if (!inviteRow) return jsonResponse({ error: 'invalid_invite_code' }, 401);
    if (inviteRow.revoked_at) return jsonResponse({ error: 'invite_revoked' }, 401);
    if (inviteRow.uses_count >= inviteRow.max_uses) return jsonResponse({ error: 'invite_already_used' }, 409);
    if (inviteRow.expires_at && new Date(inviteRow.expires_at).getTime() <= Date.now()) {
      return jsonResponse({ error: 'invite_expired' }, 401);
    }
    invite = inviteRow;
  }

  const internal_auth_email = `${username}.${crypto.randomUUID()}@salem-study.local`;

  const { data: created, error: createError } = await admin.auth.admin.createUser({
    email: internal_auth_email,
    password,
    email_confirm: true,
    user_metadata: { username, display_name: displayName },
  });

  if (createError || !created.user) {
    return jsonResponse({ error: 'auth_user_create_failed' }, 500);
  }

  const userId = created.user.id;
  const learner_code = generateLearnerCode();

  const { error: insertProfileError } = await admin.from('profiles').insert({
    id: userId,
    username,
    internal_auth_email,
    learner_code,
    display_name: displayName,
    role: 'learner',
    invite_id: invite?.id ?? null,
  });

  if (insertProfileError) {
    await admin.auth.admin.deleteUser(userId);
    return jsonResponse({ error: 'profile_create_failed' }, 500);
  }

  if (invite) {
    const { error: updateInviteError } = await admin
      .from('invites')
      .update({
        uses_count: invite.uses_count + 1,
        accepted_by: userId,
        accepted_username: username,
        accepted_at: new Date().toISOString(),
        code_hash: invite.code_hash ?? code_hash,
      })
      .eq('id', invite.id)
      .eq('uses_count', invite.uses_count);

    if (updateInviteError) {
      await admin.from('profiles').delete().eq('id', userId);
      await admin.auth.admin.deleteUser(userId);
      return jsonResponse({ error: 'invite_claim_failed' }, 409);
    }
  }

  return jsonResponse({ ok: true, username, learnerCode: learner_code });
});
