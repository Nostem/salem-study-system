import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildQuizSession } from '../src/utils/quiz-v2-session.ts';
import type { StructuredQuestion } from '../src/types/question-blocks.ts';

function makeQuestion(slug: string, topics: string[] = [], examYear = 2019): StructuredQuestion {
  return {
    schemaVersion: 1,
    slug,
    examYear,
    examType: 'written',
    questionNumber: 1,
    track: 'RO',
    title: slug,
    status: 'verified',
    quizEligible: true,
    requiresReference: false,
    officialAnswerLabel: 'A',
    acceptedAnswerLabels: ['A'],
    stemBlocks: [],
    choices: [],
    explanationBlocks: [],
    topics: topics.map((topic) => ({ slug: topic, title: topic })),
    sourceRefs: [],
    legacy: {},
  };
}

const goldenQuestions: StructuredQuestion[] = [
  makeQuestion('q70-xenon-free-core-life-rods-out', ['control-rod-drive']),
  makeQuestion('q8-rod-control-mg-set-lost-trouble-alarm', ['control-rod-drive']),
  makeQuestion('q87-ts-misaligned-rod-reduction-to-50-percent', ['control-rod-drive']),
  makeQuestion('q12-unrelated-topic', ['rps']),
  makeQuestion('q8-pzr-saturation-rcp-restart', ['pressurizer-level-and-press-control'], 2018),
];

test('quiz-v2 session builder preserves golden vector for year/topic/count filters', () => {
  const session = buildQuizSession(
    goldenQuestions,
    {
      years: [2019],
      topicSlugs: ['control-rod-drive'],
      referenceMode: 'include',
      count: 3,
    },
    { seed: 'golden-builder' }
  );

  assert.equal(session.sessionId, 'qv2-62f070f3');
  assert.equal(session.seed, 'golden-builder');
  assert.equal(session.totalEligible, 3);
  assert.deepEqual(session.questionSlugs, [
    'q8-rod-control-mg-set-lost-trouble-alarm',
    'q87-ts-misaligned-rod-reduction-to-50-percent',
    'q70-xenon-free-core-life-rods-out',
  ]);
});

test('quiz-v2 session builder preserves golden vector for explicit graph-selected slugs', () => {
  const session = buildQuizSession(
    goldenQuestions,
    {
      questionSlugs: ['q8-pzr-saturation-rcp-restart'],
      count: 10,
    },
    { seed: 'graph-selected-q8' }
  );

  assert.equal(session.sessionId, 'qv2-fda32bf1');
  assert.equal(session.totalEligible, 1);
  assert.deepEqual(session.questionSlugs, ['q8-pzr-saturation-rcp-restart']);
});
