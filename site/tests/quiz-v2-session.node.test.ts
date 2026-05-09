import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  DEFAULT_SEED,
  buildQuizSession,
  filterQuestions,
  normalizeFilters,
  questionsForSession,
  seededShuffle,
} from '../src/utils/quiz-v2-session.ts';
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

const fixture: StructuredQuestion[] = [
  makeQ({ slug: 'q1', examYear: 2022, track: 'RO', status: 'verified' }),
  makeQ({ slug: 'q2', examYear: 2022, track: 'SRO', status: 'verified' }),
  makeQ({ slug: 'q3', examYear: 2023, track: 'RO', status: 'draft' }),
  makeQ({ slug: 'q4', examYear: 2023, track: 'RO', status: 'verified', requiresReference: true }),
  makeQ({ slug: 'q5', examYear: 2023, track: 'SRO', status: 'verified', quizEligible: false }),
  makeQ({ slug: 'q6', examYear: 2024, track: 'RO', status: 'verified', topics: [{ slug: 'rcs' }] }),
  makeQ({ slug: 'q7', examYear: 2024, track: 'RO', status: 'verified', topics: ['eccs'] }),
];

test('filterQuestions excludes non-quizEligible by default', () => {
  const out = filterQuestions(fixture);
  assert.ok(!out.some((q) => q.slug === 'q5'));
  assert.equal(out.length, 6);
});

test('filterQuestions can include non-eligible when quizEligibleOnly=false', () => {
  const out = filterQuestions(fixture, { quizEligibleOnly: false });
  assert.equal(out.length, 7);
});

test('filterQuestions filters by year, track, and status', () => {
  const byYear = filterQuestions(fixture, { years: [2023] }).map((q) => q.slug);
  assert.deepEqual(byYear.sort(), ['q3', 'q4']);

  const byTrack = filterQuestions(fixture, { tracks: ['SRO'] }).map((q) => q.slug);
  assert.deepEqual(byTrack.sort(), ['q2']);

  const byStatus = filterQuestions(fixture, { statuses: ['draft'] }).map((q) => q.slug);
  assert.deepEqual(byStatus, ['q3']);
});

test('referenceMode include/exclude/only behaves correctly', () => {
  const include = filterQuestions(fixture, { referenceMode: 'include' }).map((q) => q.slug);
  assert.ok(include.includes('q4'));

  const exclude = filterQuestions(fixture, { referenceMode: 'exclude' }).map((q) => q.slug);
  assert.ok(!exclude.includes('q4'));

  const only = filterQuestions(fixture, { referenceMode: 'only' }).map((q) => q.slug);
  assert.deepEqual(only, ['q4']);
});

test('topicSlugs filter accepts string or {slug} topic shapes', () => {
  const rcs = filterQuestions(fixture, { topicSlugs: ['rcs'] }).map((q) => q.slug);
  assert.deepEqual(rcs, ['q6']);
  const both = filterQuestions(fixture, { topicSlugs: ['rcs', 'eccs'] }).map((q) => q.slug);
  assert.deepEqual(both.sort(), ['q6', 'q7']);
});

test('seededShuffle is deterministic for same seed', () => {
  const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const a = seededShuffle(items, 'seed-1');
  const b = seededShuffle(items, 'seed-1');
  assert.deepEqual(a, b);
});

test('seededShuffle differs across seeds for non-trivial inputs', () => {
  const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const a = seededShuffle(items, 'seed-1');
  const b = seededShuffle(items, 'seed-2');
  assert.notDeepEqual(a, b);
  assert.deepEqual([...a].sort(), [...b].sort());
});

test('seededShuffle does not mutate input', () => {
  const items = ['a', 'b', 'c'];
  const before = [...items];
  seededShuffle(items, 'seed-x');
  assert.deepEqual(items, before);
});

test('buildQuizSession is deterministic for same seed + filters', () => {
  const a = buildQuizSession(fixture, { years: [2023] }, { seed: 's' });
  const b = buildQuizSession(fixture, { years: [2023] }, { seed: 's' });
  assert.deepEqual(a, b);
  assert.equal(a.sessionId.startsWith('qv2-'), true);
});

test('buildQuizSession sessionId changes when filters change', () => {
  const a = buildQuizSession(fixture, { years: [2023] }, { seed: 's' });
  const b = buildQuizSession(fixture, { years: [2024] }, { seed: 's' });
  assert.notEqual(a.sessionId, b.sessionId);
});

test('buildQuizSession sessionId changes when seed changes', () => {
  const a = buildQuizSession(fixture, {}, { seed: 'seed-A' });
  const b = buildQuizSession(fixture, {}, { seed: 'seed-B' });
  assert.notEqual(a.sessionId, b.sessionId);
});

test('buildQuizSession respects count', () => {
  const s = buildQuizSession(fixture, { count: 3 }, { seed: 's' });
  assert.equal(s.questionSlugs.length, 3);
  assert.equal(s.totalEligible, 6);
});

test('buildQuizSession uses default seed when none supplied', () => {
  const s = buildQuizSession(fixture, { years: [2023] });
  assert.equal(s.seed, DEFAULT_SEED);
});

test('buildQuizSession does not include generatedAt unless now() is provided', () => {
  const noTs = buildQuizSession(fixture, {}, { seed: 's' });
  assert.equal(noTs.generatedAt, undefined);

  const withTs = buildQuizSession(fixture, {}, { seed: 's', now: () => '2026-05-08T00:00:00Z' });
  assert.equal(withTs.generatedAt, '2026-05-08T00:00:00Z');
  // Injected timestamp does not change sessionId.
  assert.equal(withTs.sessionId, noTs.sessionId);
});

test('buildQuizSession is order-independent in input array', () => {
  const reversed = [...fixture].reverse();
  const a = buildQuizSession(fixture, { years: [2024] }, { seed: 's' });
  const b = buildQuizSession(reversed, { years: [2024] }, { seed: 's' });
  assert.deepEqual(a.questionSlugs, b.questionSlugs);
  assert.equal(a.sessionId, b.sessionId);
});

test('normalizeFilters dedupes and sorts arrays', () => {
  const f = normalizeFilters({
    years: [2024, 2022, 2024],
    tracks: ['RO', 'RO', 'SRO'],
    topicSlugs: ['rcs', 'eccs', 'rcs'],
    questionSlugs: ['q7', 'q6', 'q7'],
  });
  assert.deepEqual(f.years, [2022, 2024]);
  assert.deepEqual(f.tracks, ['RO', 'SRO']);
  assert.deepEqual(f.topicSlugs, ['eccs', 'rcs']);
  assert.deepEqual(f.questionSlugs, ['q6', 'q7']);
  assert.equal(f.referenceMode, 'include');
  assert.equal(f.quizEligibleOnly, true);
  assert.equal(f.count, null);
});

test('questionSlugs filter narrows an explicit graph-selected pool', () => {
  const out = filterQuestions(fixture, { questionSlugs: ['q7', 'q6', 'missing'] }).map((q) => q.slug);
  assert.deepEqual(out.sort(), ['q6', 'q7']);

  const session = buildQuizSession(fixture, { questionSlugs: ['q7', 'q6'], count: 10 }, { seed: 'graph-pool' });
  assert.equal(session.totalEligible, 2);
  assert.equal(session.questionSlugs.length, 2);
  assert.deepEqual([...session.questionSlugs].sort(), ['q6', 'q7']);
});

test('questionsForSession returns questions in session order', () => {
  const session = buildQuizSession(fixture, { count: 4 }, { seed: 'order' });
  const qs = questionsForSession(fixture, session);
  assert.deepEqual(qs.map((q) => q.slug), session.questionSlugs);
});
