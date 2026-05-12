import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  assertCreateQuizV2SessionResponse,
  buildCreateQuizV2SessionPayload,
  buildLocalQuizV2SessionResponse,
  isCreateQuizV2SessionResponse,
} from '../src/utils/quiz-v2-backend-session.ts';
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
    choices: [
      { label: 'A', blocks: [], isCorrect: true },
      { label: 'B', blocks: [], isCorrect: false },
    ],
    explanationBlocks: [],
    topics: over.topics ?? [],
    sourceRefs: [],
    legacy: {},
  };
}

const fixture: StructuredQuestion[] = [
  makeQ({ slug: 'q1', examYear: 2022, track: 'RO' }),
  makeQ({ slug: 'q2', examYear: 2023, track: 'SRO' }),
  makeQ({ slug: 'q3', examYear: 2023, track: 'RO', quizEligible: false }),
  makeQ({ slug: 'q4', examYear: 2024, track: 'RO', topics: [{ slug: 'rcs' }] }),
];

test('buildCreateQuizV2SessionPayload normalizes filters for backend session creation', () => {
  const payload = buildCreateQuizV2SessionPayload(
    { years: [2024, 2022, 2024], tracks: ['SRO', 'RO', 'RO'], count: 2, topicSlugs: ['rcs'] },
    { seed: 'backend-seed' }
  );

  assert.equal(payload.schemaVersion, 1);
  assert.equal(payload.seed, 'backend-seed');
  assert.deepEqual(payload.filters.years, [2022, 2024]);
  assert.deepEqual(payload.filters.tracks, ['RO', 'SRO']);
  assert.deepEqual(payload.filters.topicSlugs, ['rcs']);
  assert.equal(payload.filters.count, 2);
  assert.equal(payload.filters.quizEligibleOnly, true);
});

test('buildLocalQuizV2SessionResponse mirrors backend response shape with deterministic fallback session', () => {
  const payload = buildCreateQuizV2SessionPayload({ count: 2 }, { seed: 'fallback-seed' });
  const response = buildLocalQuizV2SessionResponse(fixture, payload, {
    now: () => '2026-05-09T00:00:00Z',
  });

  assert.equal(response.ok, true);
  assert.equal(response.source, 'local-fallback');
  assert.equal(response.session.seed, 'fallback-seed');
  assert.equal(response.session.questionSlugs.length, 2);
  assert.equal(response.session.totalEligible, 3);
  assert.equal(response.session.generatedAt, '2026-05-09T00:00:00Z');
  assert.equal(isCreateQuizV2SessionResponse(response), true);
});

test('backend response guard rejects malformed sessions', () => {
  assert.equal(isCreateQuizV2SessionResponse({ ok: true, source: 'backend' }), false);
  assert.equal(
    isCreateQuizV2SessionResponse({
      ok: true,
      source: 'backend',
      session: { schemaVersion: 1, sessionId: 'bad', seed: 's', questionSlugs: [], totalEligible: 0, filters: {} },
    }),
    false
  );
  assert.throws(() => assertCreateQuizV2SessionResponse({ ok: true }), /invalid_quiz_v2_session_response/);
});

test('backend response guard requires a persisted backendSessionId for server-created sessions', () => {
  const payload = buildCreateQuizV2SessionPayload({ years: [2024] }, { seed: 'server-seed' });
  const local = buildLocalQuizV2SessionResponse(fixture, payload);

  assert.equal(isCreateQuizV2SessionResponse({ ...local, source: 'backend' as const }), false);

  const serverResponse = {
    ...local,
    source: 'backend' as const,
    session: {
      ...local.session,
      backendSessionId: '00000000-0000-4000-8000-000000000123',
    },
  };

  const parsed = assertCreateQuizV2SessionResponse(serverResponse);
  assert.equal(parsed.source, 'backend');
  assert.equal(parsed.session.backendSessionId, '00000000-0000-4000-8000-000000000123');
  assert.equal(parsed.session.filters.years[0], 2024);
});
