import { createAdminClient, jsonResponse, readJsonBody, requireAllowedOrigin, requirePost, requireUser } from '../_shared/http.ts';
  IMPORT_MARKER

type MarkReviewedBody = { slug?: string };

// Slugs are wiki article paths like "systems/reactor-coolant-system" — keep this
// permissive (a-z, 0-9, dashes, slashes) but strict enough to reject anything
// that looks like a path traversal or arbitrary string.
const SLUG_PATTERN = /^[a-z0-9][a-z0-9/-]{0,127}$/;

Deno.serve(async (req) => {
  const methodError = requirePost(req);
  if (methodError) return methodError;
  const originError = requireAllowedOrigin(req);
  if (originError) return originError;

  const admin = createAdminClient();
  if (!admin) return jsonResponse({ error: 'server_not_configured' }, 500, req);

  const { body, error: bodyError } = await readJsonBody<MarkReviewedBody>(req);
  if (bodyError || !body) return bodyError;

  const slug = typeof body.slug === 'string' ? body.slug.trim().toLowerCase() : '';
  if (!SLUG_PATTERN.test(slug)) return jsonResponse({ error: 'invalid_slug' }, 400, req);

  const { error: authError, user } = await requireUser(req, admin);
  if (authError || !user) return authError;

  const now = new Date().toISOString();
  const { error: upsertError } = await admin
    .from('system_reviews')
    .upsert(
      { user_id: user.id, slug, last_reviewed_at: now },
      { onConflict: 'user_id,slug' }
    );

  if (upsertError) return jsonResponse({ error: 'review_upsert_failed' }, 500, req);

  return jsonResponse({ ok: true, slug, lastReviewedAt: now }, 200, req);
});
