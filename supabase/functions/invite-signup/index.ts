import {
  createAdminClient,
  jsonResponse,
  readJsonBody,
  requestIp,
  requireAllowedOrigin,
  requirePost,
  sha256Hex,
} from '../_shared/http.ts';
import { checkRateLimit, recordRateLimitAttempt } from '../_shared/rate-limit.ts';

type SignupBody = {
  inviteCode?: string;
  username?: string;
  password?: string;
  displayName?: string;
};

function normalizeInviteCode(code: string): string {
  return code.trim().toUpperCase().replace(/\s+/g, '');
}

function normalizeUsername(username: string): string {
  return username.trim().toLowerCase();
}

function isValidUsername(username: string): boolean {
  return /^[a-z0-9_][a-z0-9_-]{2,31}$/.test(username);
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
  const methodError = requirePost(req);
  if (methodError) return methodError;
  const originError = requireAllowedOrigin(req);
  if (originError) return originError;

  const admin = createAdminClient();
  if (!admin) return jsonResponse({ error: 'server_not_configured' }, 500, req);

  const { body, error: bodyError } = await readJsonBody<SignupBody>(req);
  if (bodyError || !body) return bodyError;

  const inviteCode = normalizeInviteCode(body.inviteCode ?? '');
  const username = normalizeUsername(body.username ?? '');
  const password = body.password ?? '';
  const displayName = body.displayName?.trim() || username;

  if (!isValidUsername(username)) return jsonResponse({ error: 'invalid_username' }, 400, req);
  if (password.length < 8) return jsonResponse({ error: 'password_too_short' }, 400, req);

  // Rate-limit signup attempts by IP so a single attacker can't brute-force the
  // invite-code space. 10 attempts / hour matches the threshold for a legit user
  // who fat-fingered their invite a few times.
  const ip = requestIp(req);
  const ipLimit = await checkRateLimit(admin, {
    scope: 'invite-signup:ip',
    key: ip,
    maxAttempts: 10,
    windowSeconds: 60 * 60,
  });
  if (!ipLimit.allowed) return jsonResponse({ error: 'rate_limited' }, 429, req);

  const code_hash = inviteCode ? await sha256Hex(inviteCode) : null;

  const { data: existingProfile, error: profileLookupError } = await admin
    .from('profiles')
    .select('id')
    .eq('username', username)
    .maybeSingle();

  if (profileLookupError) return jsonResponse({ error: 'profile_lookup_failed' }, 500, req);
  if (existingProfile) return jsonResponse({ error: 'username_taken' }, 409, req);

  let invite: {
    id: string;
    max_uses: number;
    uses_count: number;
    expires_at?: string | null;
    revoked_at?: string | null;
  } | null = null;

  if (inviteCode && code_hash) {
    // Look up by code_hash only. Legacy plaintext-code rows are not honored —
    // any invite issued before 20260429 needs to be re-issued so code_hash is
    // populated. This removes the path where a leaked plaintext code can be
    // used directly.
    const { data: inviteRow, error: inviteError } = await admin
      .from('invites')
      .select('id, max_uses, uses_count, expires_at, revoked_at')
      .eq('code_hash', code_hash)
      .maybeSingle();

    if (inviteError) return jsonResponse({ error: 'invite_lookup_failed' }, 500, req);
    if (!inviteRow) {
      await recordRateLimitAttempt(admin, 'invite-signup:ip', ip);
      return jsonResponse({ error: 'invalid_invite_code' }, 401, req);
    }
    if (inviteRow.revoked_at) {
      await recordRateLimitAttempt(admin, 'invite-signup:ip', ip);
      return jsonResponse({ error: 'invite_revoked' }, 401, req);
    }
    if (inviteRow.uses_count >= inviteRow.max_uses) {
      return jsonResponse({ error: 'invite_already_used' }, 409, req);
    }
    if (inviteRow.expires_at && new Date(inviteRow.expires_at).getTime() <= Date.now()) {
      await recordRateLimitAttempt(admin, 'invite-signup:ip', ip);
      return jsonResponse({ error: 'invite_expired' }, 401, req);
    }
    invite = inviteRow;
  }

  // Reserve the invite slot BEFORE creating the auth user. This closes the
  // TOCTOU window where two concurrent signups both pass the use-count check
  // and both create auth users, with only one winning the update. The update
  // is conditional on the seen uses_count, so the loser gets zero rows
  // affected — and we bail before touching auth.users.
  if (invite) {
    const { data: claimed, error: claimError } = await admin
      .from('invites')
      .update({ uses_count: invite.uses_count + 1 })
      .eq('id', invite.id)
      .eq('uses_count', invite.uses_count)
      .select('id');
    if (claimError) return jsonResponse({ error: 'invite_claim_failed' }, 500, req);
    if (!claimed || claimed.length === 0) {
      // Another signup just claimed this seat. Report the invite as already
      // used; the client surfaces a deterministic error instead of a stray 409
      // pointing at an orphaned auth row.
      return jsonResponse({ error: 'invite_already_used' }, 409, req);
    }
  }

  const internal_auth_email = `${username}.${crypto.randomUUID()}@salem-study.local`;

  const { data: created, error: createError } = await admin.auth.admin.createUser({
    email: internal_auth_email,
    password,
    email_confirm: true,
    user_metadata: { username, display_name: displayName },
  });

  if (createError || !created.user) {
    // Roll the invite seat back so the slot isn't lost to a transient failure.
    if (invite) {
      await admin
        .from('invites')
        .update({ uses_count: invite.uses_count })
        .eq('id', invite.id)
        .eq('uses_count', invite.uses_count + 1);
    }
    return jsonResponse({ error: 'auth_user_create_failed' }, 500, req);
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
    if (invite) {
      await admin
        .from('invites')
        .update({ uses_count: invite.uses_count })
        .eq('id', invite.id)
        .eq('uses_count', invite.uses_count + 1);
    }
    return jsonResponse({ error: 'profile_create_failed' }, 500, req);
  }

  if (invite) {
    const { error: stampError } = await admin
      .from('invites')
      .update({
        accepted_by: userId,
        accepted_username: username,
        accepted_at: new Date().toISOString(),
      })
      .eq('id', invite.id);
    if (stampError) {
      // The seat was already claimed; the metadata stamp is best-effort. The
      // user record is valid — return success rather than rolling everything
      // back over a non-essential field update.
    }
  }

  return jsonResponse({ ok: true, username, learnerCode: learner_code }, 200, req);
});
