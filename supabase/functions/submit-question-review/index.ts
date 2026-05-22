import { scheduleWholeQuestionReview, type ReviewRating } from '../_shared/fsrs-whole-question.ts';
import { createAdminClient, jsonResponse, readJsonBody, requirePost, requireUser } from '../_shared/http.ts';

function normalizeRating(value: unknown): ReviewRating | null {
  return value === 'again' || value === 'hard' || value === 'good' || value === 'easy' ? value : null;
}

Deno.serve(async (req) => {
  const methodError = requirePost(req);
  if (methodError) return methodError;

  const admin = createAdminClient();
  if (!admin) return jsonResponse({ error: 'server_not_configured' }, 500);

  const { error: authError, user } = await requireUser(req, admin);
  if (authError || !user) return authError;

  const { body, error: bodyError } = await readJsonBody<{ slug?: unknown; rating?: unknown }>(req);
  if (bodyError) return bodyError;

  const slug = typeof body.slug === 'string' ? body.slug.trim() : '';
  const rating = normalizeRating(body.rating);
  if (!slug) return jsonResponse({ error: 'slug_required' }, 400);
  if (!rating) return jsonResponse({ error: 'rating_required' }, 400);

  const { data: question, error: questionError } = await admin
    .from('questions')
    .select('id, slug')
    .eq('slug', slug)
    .eq('status', 'active')
    .eq('quiz_eligible', true)
    .eq('is_redacted', false)
    .single();
  if (questionError || !question) return jsonResponse({ error: 'question_not_found' }, 404);

  const { data: existing, error: lookupError } = await admin
    .from('user_question_state')
    .select('attempts_count, correct_count, incorrect_count, last_correct_at, flagged, review_reps, review_lapses, fsrs_difficulty, fsrs_stability, scheduled_days, last_reviewed_at')
    .eq('user_id', user.id)
    .eq('question_id', question.id)
    .maybeSingle();
  if (lookupError) return jsonResponse({ error: 'review_state_lookup_failed' }, 500);

  const review = scheduleWholeQuestionReview({
    attemptsCount: existing?.attempts_count,
    correctCount: existing?.correct_count,
    incorrectCount: existing?.incorrect_count,
    reviewReps: existing?.review_reps,
    reviewLapses: existing?.review_lapses,
    fsrsDifficulty: existing?.fsrs_difficulty,
    fsrsStability: existing?.fsrs_stability,
    scheduledDays: existing?.scheduled_days,
    lastReviewedAt: existing?.last_reviewed_at,
    lastCorrectAt: existing?.last_correct_at,
    flagged: existing?.flagged,
  }, rating);

  const row = {
    user_id: user.id,
    question_id: question.id,
    attempts_count: review.attemptsCount,
    correct_count: review.correctCount,
    incorrect_count: review.incorrectCount,
    last_attempt_at: review.lastAttemptAt,
    last_correct_at: review.lastCorrectAt,
    flagged: review.flagged,
    mastery_state: review.masteryState,
    next_review_at: review.nextReviewAt,
    review_reps: review.reviewReps,
    review_lapses: review.reviewLapses,
    fsrs_difficulty: review.fsrsDifficulty,
    fsrs_stability: review.fsrsStability,
    scheduled_days: review.scheduledDays,
    elapsed_days: review.elapsedDays,
    last_review_rating: review.lastReviewRating,
    last_reviewed_at: review.lastReviewedAt,
    updated_at: review.lastReviewedAt,
  };

  const { error: upsertError } = await admin
    .from('user_question_state')
    .upsert(row, { onConflict: 'user_id,question_id' });
  if (upsertError) return jsonResponse({ error: 'review_state_upsert_failed' }, 500);

  const { error: eventError } = await admin
    .from('question_review_events')
    .insert({
      user_id: user.id,
      question_id: question.id,
      rating,
      reviewed_at: review.lastReviewedAt,
      elapsed_days: review.elapsedDays,
      scheduled_days: review.scheduledDays,
      previous_difficulty: review.previousDifficulty,
      previous_stability: review.previousStability,
      new_difficulty: review.fsrsDifficulty,
      new_stability: review.fsrsStability,
      source: 'review',
    });
  if (eventError) return jsonResponse({ error: 'review_event_insert_failed' }, 500);

  return jsonResponse({
    ok: true,
    slug,
    rating,
    nextReviewAt: row.next_review_at,
    masteryState: row.mastery_state,
    scheduledDays: review.scheduledDays,
    fsrsDifficulty: review.fsrsDifficulty,
    fsrsStability: review.fsrsStability,
  });
});
