import { createAdminClient, jsonResponse, requirePost, requireUser } from '../_shared/http.ts';

function dueRank(state: { mastery_state: string; next_review_at: string | null }): number {
  if (state.mastery_state === 'shaky') return 0;
  if (state.mastery_state === 'learning') return 1;
  if (!state.next_review_at) return 2;
  if (state.mastery_state === 'new') return 3;
  return 4;
}

Deno.serve(async (req) => {
  const methodError = requirePost(req);
  if (methodError) return methodError;

  const admin = createAdminClient();
  if (!admin) return jsonResponse({ error: 'server_not_configured' }, 500);

  const { error: authError, user } = await requireUser(req, admin);
  if (authError || !user) return authError;

  const { data: states, error: stateError } = await admin
    .from('user_question_state')
    .select('question_id, attempts_count, correct_count, incorrect_count, last_attempt_at, last_correct_at, mastery_state, next_review_at, updated_at')
    .eq('user_id', user.id);
  if (stateError) return jsonResponse({ error: 'review_state_lookup_failed' }, 500);

  const questionIds = [...new Set((states ?? []).map((state) => state.question_id).filter(Boolean))];
  if (questionIds.length === 0) {
    return jsonResponse({ ok: true, dueSlugs: [], allSlugs: [], states: {} });
  }

  const { data: questions, error: questionError } = await admin
    .from('questions')
    .select('id, slug')
    .in('id', questionIds)
    .eq('status', 'active')
    .eq('quiz_eligible', true)
    .eq('is_redacted', false);
  if (questionError) return jsonResponse({ error: 'question_lookup_failed' }, 500);

  const slugById = new Map((questions ?? []).map((question) => [question.id, question.slug]));
  const nowMs = Date.now();
  const rows = (states ?? [])
    .map((state) => ({ ...state, slug: slugById.get(state.question_id) }))
    .filter((state): state is typeof state & { slug: string } => typeof state.slug === 'string' && state.slug.length > 0);

  const dueRows = rows
    .filter((state) => !state.next_review_at || Date.parse(state.next_review_at) <= nowMs || state.mastery_state === 'shaky')
    .sort((a, b) => {
      const rankDelta = dueRank(a) - dueRank(b);
      if (rankDelta !== 0) return rankDelta;
      return String(a.next_review_at ?? '').localeCompare(String(b.next_review_at ?? ''));
    });

  const stateBySlug: Record<string, unknown> = {};
  for (const state of rows) {
    stateBySlug[state.slug] = {
      attemptsCount: state.attempts_count,
      correctCount: state.correct_count,
      incorrectCount: state.incorrect_count,
      lastAttemptAt: state.last_attempt_at,
      lastCorrectAt: state.last_correct_at,
      masteryState: state.mastery_state,
      nextReviewAt: state.next_review_at,
      updatedAt: state.updated_at,
    };
  }

  return jsonResponse({
    ok: true,
    dueSlugs: dueRows.map((state) => state.slug),
    allSlugs: rows.map((state) => state.slug),
    states: stateBySlug,
  });
});
