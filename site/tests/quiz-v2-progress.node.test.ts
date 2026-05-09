import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildReviewProgressAnalytics } from '../src/utils/quiz-v2-progress.ts';
import type { ReviewStateBySlug } from '../src/utils/quiz-v2-review.ts';
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
  makeQ({ slug: 'q-new', topics: [{ slug: 'rcs', title: 'RCS' }] }),
  makeQ({ slug: 'q-due', topics: [{ slug: 'rcs', title: 'RCS' }, { slug: 'admin', title: 'Admin' }] }),
  makeQ({ slug: 'q-later', topics: ['admin'] }),
  makeQ({ slug: 'q-no-topic' }),
];

const states: ReviewStateBySlug = {
  'q-due': {
    slug: 'q-due',
    attempts: 2,
    correctStreak: 0,
    intervalDays: 0,
    lastRating: 'again',
    lastReviewedAt: '2026-05-07T00:00:00.000Z',
    nextReviewAt: '2026-05-08T00:00:00.000Z',
  },
  'q-later': {
    slug: 'q-later',
    attempts: 1,
    correctStreak: 1,
    intervalDays: 3,
    lastRating: 'good',
    lastReviewedAt: '2026-05-07T00:00:00.000Z',
    nextReviewAt: '2026-05-10T00:00:00.000Z',
  },
};

test('buildReviewProgressAnalytics summarizes local whole-question review progress', () => {
  const analytics = buildReviewProgressAnalytics(questions, states, '2026-05-08T00:00:00.000Z');

  assert.equal(analytics.schemaVersion, 1);
  assert.equal(analytics.totalEligible, 4);
  assert.equal(analytics.reviewedQuestions, 2);
  assert.equal(analytics.unreviewedQuestions, 2);
  assert.equal(analytics.dueNow, 1);
  assert.equal(analytics.scheduledLater, 1);
  assert.equal(analytics.totalReviewAttempts, 3);
  assert.equal(analytics.successfulLatestRatings, 1);
  assert.equal(analytics.latestRatingSuccessRate, 0.5);
  assert.equal(analytics.averageIntervalDays, 1.5);
  assert.deepEqual(analytics.ratingCounts, { again: 1, hard: 0, good: 1, easy: 0 });
});

test('buildReviewProgressAnalytics ranks topic stats by due count and activity', () => {
  const analytics = buildReviewProgressAnalytics(questions, states, '2026-05-08T00:00:00.000Z');
  assert.deepEqual(analytics.topicStats.map((topic) => topic.slug), ['admin', 'rcs']);
  assert.deepEqual(analytics.topicStats[0], {
    slug: 'admin',
    title: 'Admin',
    totalEligible: 2,
    reviewedCount: 2,
    dueCount: 1,
    totalAttempts: 3,
  });
  assert.equal(analytics.topicStats[1].title, 'RCS');
  assert.equal(analytics.topicStats[1].reviewedCount, 1);
});

test('buildReviewProgressAnalytics handles no review state without divide-by-zero rates', () => {
  const analytics = buildReviewProgressAnalytics(questions, {}, '2026-05-08T00:00:00.000Z');
  assert.equal(analytics.reviewedQuestions, 0);
  assert.equal(analytics.totalReviewAttempts, 0);
  assert.equal(analytics.latestRatingSuccessRate, null);
  assert.equal(analytics.averageIntervalDays, null);
});
