import { test } from 'node:test';
import assert from 'node:assert/strict';
import { scheduleWholeQuestionReview } from '../../supabase/functions/_shared/fsrs-whole-question.ts';

test('scheduleWholeQuestionReview keeps one whole-question state row and schedules success forward', () => {
  const result = scheduleWholeQuestionReview(null, 'good', '2026-05-12T12:00:00.000Z');

  assert.equal(result.attemptsCount, 1);
  assert.equal(result.correctCount, 1);
  assert.equal(result.incorrectCount, 0);
  assert.equal(result.reviewReps, 1);
  assert.equal(result.reviewLapses, 0);
  assert.equal(result.masteryState, 'learning');
  assert.equal(result.scheduledDays, 7);
  assert.equal(result.nextReviewAt, '2026-05-19T12:00:00.000Z');
  assert.ok(result.fsrsDifficulty > 0);
  assert.ok(result.fsrsStability > 0);
});

test('scheduleWholeQuestionReview records lapses without creating microcard state', () => {
  const result = scheduleWholeQuestionReview({
    attemptsCount: 3,
    correctCount: 3,
    incorrectCount: 0,
    reviewReps: 2,
    reviewLapses: 0,
    fsrsDifficulty: 4,
    fsrsStability: 8,
    lastReviewedAt: '2026-05-10T12:00:00.000Z',
    lastCorrectAt: '2026-05-10T12:00:00.000Z',
  }, 'again', '2026-05-12T12:00:00.000Z');

  assert.equal(result.attemptsCount, 4);
  assert.equal(result.correctCount, 3);
  assert.equal(result.incorrectCount, 1);
  assert.equal(result.reviewReps, 3);
  assert.equal(result.reviewLapses, 1);
  assert.equal(result.elapsedDays, 2);
  assert.equal(result.scheduledDays, 0);
  assert.equal(result.nextReviewAt, '2026-05-12T12:00:00.000Z');
  assert.equal(result.masteryState, 'shaky');
  assert.equal(result.lastCorrectAt, '2026-05-10T12:00:00.000Z');
});
