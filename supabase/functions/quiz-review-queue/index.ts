import { createAdminClient, jsonResponse, requireAllowedOrigin, requirePost, requireUser } from '../_shared/http.ts';

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
  const originError = requireAllowedOrigin(req);
  if (originError) return originError;

  const admin = createAdminClient();
  if (!admin) return jsonResponse({ error: 'server_not_configured' }, 500, req);

  const { error: authError, user } = await requireUser(req, admin);
  if (authError || !user) return authError;

  // Join progress to its learner-safe question in fixed-size pages. The old
  // two-query shape collected every question UUID and sent them through one
  // `.in(...)` filter; high-progress learners could exceed the gateway's URL
  // limit before PostgREST ever ran the question lookup.
  const pageSize = 500;
  const states: Array<{
    question_id: string;
    attempts_count: number;
    correct_count: number;
    incorrect_count: number;
    last_attempt_at: string | null;
    last_correct_at: string | null;
    mastery_state: string;
    next_review_at: string | null;
    updated_at: string;
    questions: { slug: string } | Array<{ slug: string }> | null;
  }> = [];

  for (let pageStart = 0; ; pageStart += pageSize) {
    const { data: page, error: stateError } = await admin
      .from('user_question_state')
      .select(`
        question_id,
        attempts_count,
        correct_count,
        incorrect_count,
        last_attempt_at,
        last_correct_at,
        mastery_state,
        next_review_at,
        updated_at,
        questions!inner(slug)
      `)
      .eq('user_id', user.id)
      .eq('questions.status', 'active')
      .eq('questions.quiz_eligible', true)
      .eq('questions.is_redacted', false)
      .order('question_id', { ascending: true })
      .range(pageStart, pageStart + pageSize - 1);
    if (stateError) return jsonResponse({ error: 'review_state_lookup_failed' }, 500, req);

    const pageRows = (page ?? []) as typeof states;
    states.push(...pageRows);
    if (pageRows.length < pageSize) break;
  }

  const nowMs = Date.now();
  const rows = states
    .map(({ questions, ...state }) => {
      const question = Array.isArray(questions) ? questions[0] : questions;
      return { ...state, slug: question?.slug };
    })
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
  }, 200, req);
});
