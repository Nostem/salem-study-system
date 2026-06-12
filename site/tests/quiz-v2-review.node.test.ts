import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  buildWholeQuestionReviewQueue,
  nextIntervalDays,
  updateReviewState,
  type ReviewStateBySlug,
} from '../src/utils/quiz-v2-review.ts';
import type { StructuredQuestion } from '../src/types/question-blocks.ts';

function makeQ(over: Partial<StructuredQuestion> & { slug: string }): StructuredQuestion {
  return {
    schemaVersion: 1,
    slug: over.slug,
    examYear: over.examYear ?? 2023,
    examType: over.examType ?? 'written',
    questionNumber: over.questionNumber ?? 1,
    track: over.track ?? 'RO',
    title: over.title ?? 'Test',
    status: over.status ?? 'verified',
    quizEligible: over.quizEligible ?? true,
    requiresReference: over.requiresReference ?? false,
    officialAnswerLabel: 'A',
    acceptedAnswerLabels: ['A'],
    stemBlocks: [],
    choices: [],
    explanationBlocks: [],
    topics: over.topics ?? [],
    sourceRefs: [],
    legacy: {},
  };
}

const questions: StructuredQuestion[] = [
  makeQ({ slug: 'q-new-a' }),
  makeQ({ slug: 'q-due-b' }),
  makeQ({ slug: 'q-later-c' }),
  makeQ({ slug: 'q-ineligible-d', quizEligible: false }),
];

test('buildWholeQuestionReviewQueue defaults to whole NRC questions, not only quizEligible rows', () => {
  const queue = buildWholeQuestionReviewQueue(questions, {}, {}, '2026-05-08T00:00:00.000Z');
  assert.equal(queue.schemaVersion, 1);
  assert.equal(queue.summary.totalEligible, 4);
  assert.equal(queue.summary.newCount, 4);
  assert.equal(queue.summary.dueCount, 0);
  assert.equal(queue.summary.laterCount, 0);
  assert.ok(queue.items.some((item) => item.slug === 'q-ineligible-d'));
});

test('buildWholeQuestionReviewQueue can still narrow to quizEligible rows when requested', () => {
  const queue = buildWholeQuestionReviewQueue(
    questions,
    {},
    { quizEligibleOnly: true },
    '2026-05-08T00:00:00.000Z'
  );
  assert.equal(queue.summary.totalEligible, 3);
  assert.ok(!queue.items.some((item) => item.slug === 'q-ineligible-d'));
});

test('buildWholeQuestionReviewQueue orders due, then new, then later items', () => {
  const states: ReviewStateBySlug = {
    'q-due-b': {
      slug: 'q-due-b',
      attempts: 1,
      correctStreak: 0,
      intervalDays: 0,
      lastRating: 'again',
      lastReviewedAt: '2026-05-07T00:00:00.000Z',
      nextReviewAt: '2026-05-08T00:00:00.000Z',
    },
    'q-later-c': {
      slug: 'q-later-c',
      attempts: 1,
      correctStreak: 1,
      intervalDays: 3,
      lastRating: 'good',
      lastReviewedAt: '2026-05-07T00:00:00.000Z',
      nextReviewAt: '2026-05-10T00:00:00.000Z',
    },
  };
  const queue = buildWholeQuestionReviewQueue(questions, states, {}, '2026-05-08T00:00:00.000Z');
  assert.deepEqual(queue.items.map((item) => item.status), ['due', 'new', 'new', 'later']);
  assert.deepEqual(queue.items.map((item) => item.slug), ['q-due-b', 'q-ineligible-d', 'q-new-a', 'q-later-c']);
  assert.equal(queue.summary.reviewedCount, 2);
});

test('updateReviewState schedules whole-question ratings with durable counters', () => {
  const first = updateReviewState(undefined, 'q-new-a', 'good', '2026-05-08T00:00:00.000Z');
  assert.equal(first.attempts, 1);
  assert.equal(first.correctStreak, 1);
  assert.equal(first.intervalDays, 3);
  assert.equal(first.nextReviewAt, '2026-05-11T00:00:00.000Z');

  const again = updateReviewState(first, 'q-new-a', 'again', '2026-05-09T00:00:00.000Z');
  assert.equal(again.attempts, 2);
  assert.equal(again.correctStreak, 0);
  assert.equal(again.intervalDays, 0);
  assert.equal(again.nextReviewAt, '2026-05-09T00:00:00.000Z');
});

test('nextIntervalDays grows review spacing without creating microcards', () => {
  assert.equal(nextIntervalDays(0, 'again'), 0);
  assert.equal(nextIntervalDays(0, 'hard'), 1);
  assert.equal(nextIntervalDays(1, 'good'), 3);
  assert.equal(nextIntervalDays(3, 'easy'), 12);
});

test('nextIntervalDays recovers from corrupted stored intervals', () => {
  assert.equal(nextIntervalDays(Number.NaN, 'hard'), 1);
  assert.equal(nextIntervalDays(Number.POSITIVE_INFINITY, 'good'), 3);
  assert.equal(nextIntervalDays(-5, 'easy'), 7);
});
