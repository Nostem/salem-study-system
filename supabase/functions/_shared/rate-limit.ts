import { sha256Hex } from './http.ts';

type AdminClient = {
  from: (table: string) => {
    insert: (row: Record<string, unknown>) => Promise<{ error: unknown }>;
    select: (columns: string, options?: { count?: 'exact'; head?: boolean }) => {
      eq: (column: string, value: unknown) => {
        gte: (column: string, value: string) => Promise<{ count: number | null; error: unknown }>;
      };
    };
  };
};

export type RateLimitResult =
  | { allowed: true }
  | { allowed: false; retryAfterSeconds: number };

export type RateLimitOptions = {
  scope: string;
  key: string;
  maxAttempts: number;
  windowSeconds: number;
};

export async function checkRateLimit(
  admin: AdminClient,
  { scope, key, maxAttempts, windowSeconds }: RateLimitOptions,
): Promise<RateLimitResult> {
  const keyHash = await sha256Hex(`${scope}:${key}`);
  const windowStart = new Date(Date.now() - windowSeconds * 1000).toISOString();
  const { count, error } = await admin
    .from('auth_rate_limit')
    .select('id', { count: 'exact', head: true })
    .eq('key_hash', keyHash)
    .gte('attempted_at', windowStart);
  if (error) {
    // Fail open: rate limiting is defence-in-depth; a transient lookup failure
    // shouldn't lock real users out of login or signup.
    return { allowed: true };
  }
  if ((count ?? 0) >= maxAttempts) {
    return { allowed: false, retryAfterSeconds: windowSeconds };
  }
  return { allowed: true };
}

export async function recordRateLimitAttempt(
  admin: AdminClient,
  scope: string,
  key: string,
): Promise<void> {
  const keyHash = await sha256Hex(`${scope}:${key}`);
  await admin.from('auth_rate_limit').insert({
    scope,
    key_hash: keyHash,
    attempted_at: new Date().toISOString(),
  });
}
