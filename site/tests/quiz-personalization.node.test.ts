import { test } from 'node:test';
import assert from 'node:assert/strict';
import { personalizeQuestionOrder } from '../src/utils/quiz-personalization.ts';

const now = '2026-05-20T12:00:00.000Z';
const questions = [
  { slug: 'mastered-many' },
  { slug: 'learning-two' },
  { slug: 'unseen-one' },
  { slug: 'due-mastered' },
  { slug: 'missed-not-due' },
  { slug: 'unseen-two' },
];

test('personalizeQuestionOrder prioritizes unseen questions inside a filtered pool', () => {
  const ordered = personalizeQuestionOrder(questions, {
    'mastered-many': { attemptsCount: 6, correctCount: 6, incorrectCount: 0, masteryState: 'mastered', nextReviewAt: '2026-08-01T00:00:00.000Z' },
    'learning-two': { attemptsCount: 2, correctCount: 1, incorrectCount: 1, masteryState: 'learning', nextReviewAt: '2026-06-01T00:00:00.000Z' },
    'due-mastered': { attemptsCount: 4, correctCount: 4, incorrectCount: 0, masteryState: 'mastered', nextReviewAt: '2026-05-19T00:00:00.000Z' },
    'missed-not-due': { attemptsCount: 1, correctCount: 0, incorrectCount: 1, masteryState: 'learning', nextReviewAt: '2026-05-25T00:00:00.000Z' },
  }, { seed: 'cvcs-seed', now });

  assert.deepEqual(ordered.slice(0, 2).map((q) => q.slug).sort(), ['unseen-one', 'unseen-two']);
});

test('personalizeQuestionOrder ranks due or shaky items before missed, learning, and mastered items', () => {
  const ordered = personalizeQuestionOrder(questions, {
    'mastered-many': { attemptsCount: 6, correctCount: 6, incorrectCount: 0, masteryState: 'mastered', nextReviewAt: '2026-08-01T00:00:00.000Z' },
    'learning-two': { attemptsCount: 2, correctCount: 1, incorrectCount: 1, masteryState: 'learning', nextReviewAt: '2026-06-01T00:00:00.000Z' },
    'unseen-one': { attemptsCount: 3, correctCount: 3, incorrectCount: 0, masteryState: 'mastered', nextReviewAt: '2026-07-01T00:00:00.000Z' },
    'unseen-two': { attemptsCount: 2, correctCount: 2, incorrectCount: 0, masteryState: 'mastered', nextReviewAt: '2026-07-01T00:00:00.000Z' },
    'due-mastered': { attemptsCount: 4, correctCount: 4, incorrectCount: 0, masteryState: 'mastered', nextReviewAt: '2026-05-19T00:00:00.000Z' },
    'missed-not-due': { attemptsCount: 1, correctCount: 0, incorrectCount: 1, masteryState: 'learning', nextReviewAt: '2026-05-25T00:00:00.000Z' },
  }, { seed: 'cvcs-seed', now });

  assert.deepEqual(ordered.map((q) => q.slug), [
    'due-mastered',
    'missed-not-due',
    'learning-two',
    'unseen-two',
    'unseen-one',
    'mastered-many',
  ]);
});

test('personalizeQuestionOrder keeps ordering deterministic for a seed', () => {
  const states = {
    'unseen-one': undefined,
    'unseen-two': undefined,
  };
  const first = personalizeQuestionOrder(questions, states, { seed: 'same-seed', now }).map((q) => q.slug);
  const second = personalizeQuestionOrder(questions, states, { seed: 'same-seed', now }).map((q) => q.slug);
  assert.deepEqual(first, second);
});
