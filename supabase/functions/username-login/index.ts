import {
  createAdminClient,
  createPublicClient,
  jsonResponse,
  readJsonBody,
  requestIp,
  requireAllowedOrigin,
  requirePost,
} from '../_shared/http.ts';
import { checkRateLimit, recordRateLimitAttempt } from '../_shared/rate-limit.ts';

type LoginBody = {
  username?: string;
  password?: string;
};

function normalizeUsername(username: string): string {
  return username.trim().toLowerCase();
}

Deno.serve(async (req) => {
  const methodError = requirePost(req);
  if (methodError) return methodError;
  const originError = requireAllowedOrigin(req);
  if (originError) return originError;

  const admin = createAdminClient();
  const publicClient = createPublicClient();
  if (!admin || !publicClient) return jsonResponse({ error: 'server_not_configured' }, 500, req);

  const { body, error: bodyError } = await readJsonBody<LoginBody>(req);
  if (bodyError || !body) return bodyError;

  const username = normalizeUsername(body.username ?? '');
  const password = body.password ?? '';
  if (!username || !password) return jsonResponse({ error: 'username_and_password_required' }, 400, req);

  // Rate-limit per username (the credential being targeted) and per IP (to limit
  // burst sprays across many usernames). Both must be under their thresholds.
  const ip = requestIp(req);
  const usernameLimit = await checkRateLimit(admin, {
    scope: 'username-login:username',
    key: username,
    maxAttempts: 10,
    windowSeconds: 15 * 60,
  });
  if (!usernameLimit.allowed) return jsonResponse({ error: 'rate_limited' }, 429, req);
  const ipLimit = await checkRateLimit(admin, {
    scope: 'username-login:ip',
    key: ip,
    maxAttempts: 50,
    windowSeconds: 15 * 60,
  });
  if (!ipLimit.allowed) return jsonResponse({ error: 'rate_limited' }, 429, req);

  const { data: profile, error: profileError } = await admin
    .from('profiles')
    .select('id, username, display_name, role, internal_auth_email')
    .eq('username', username)
    .maybeSingle();

  if (profileError) return jsonResponse({ error: 'profile_lookup_failed' }, 500, req);
  if (!profile?.internal_auth_email) {
    await recordRateLimitAttempt(admin, 'username-login:username', username);
    await recordRateLimitAttempt(admin, 'username-login:ip', ip);
    return jsonResponse({ error: 'invalid_login' }, 401, req);
  }

  const { data: sessionData, error: signInError } = await publicClient.auth.signInWithPassword({
    email: profile.internal_auth_email,
    password,
  });

  if (signInError || !sessionData.session) {
    await recordRateLimitAttempt(admin, 'username-login:username', username);
    await recordRateLimitAttempt(admin, 'username-login:ip', ip);
    return jsonResponse({ error: 'invalid_login' }, 401, req);
  }

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
  }, 200, req);
});
