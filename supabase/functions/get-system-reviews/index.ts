import { createAdminClient, jsonResponse, requireAllowedOrigin, requirePost, requireUser } from '../_shared/http.ts';
  IMPORT_MARKER

Deno.serve(async (req) => {
  const methodError = requirePost(req);
  if (methodError) return methodError;
  const originError = requireAllowedOrigin(req);
  if (originError) return originError;

  const admin = createAdminClient();
  if (!admin) return jsonResponse({ error: 'server_not_configured' }, 500, req);

  const { error: authError, user } = await requireUser(req, admin);
  if (authError || !user) return authError;

  const { data: reviews, error: reviewsError } = await admin
    .from('system_reviews')
    .select('slug, last_reviewed_at')
    .eq('user_id', user.id);

  if (reviewsError) return jsonResponse({ error: 'review_lookup_failed' }, 500, req);

  const map: Record<string, string> = {};
  for (const row of reviews ?? []) map[row.slug] = row.last_reviewed_at;

  return jsonResponse({ ok: true, reviews: map }, 200, req);
});
