import type { StructuredQuestion } from '../types/question-blocks';
import {
  DEFAULT_SEED,
  buildQuizSession,
  normalizeFilters,
  type BuildOptions,
  type NormalizedFilters,
  type QuizSession,
  type QuizSessionFilters,
} from './quiz-v2-session.ts';

export type QuizV2SessionSource = 'backend' | 'local-fallback';

export interface CreateQuizV2SessionPayload {
  schemaVersion: 1;
  seed: string;
  filters: NormalizedFilters;
}

export interface CreateQuizV2SessionResponse {
  ok: boolean;
  source: QuizV2SessionSource;
  session: QuizSession;
  warnings?: string[];
}

export interface BuildCreateQuizV2SessionPayloadOptions {
  seed?: string;
}

export function buildCreateQuizV2SessionPayload(
  filters: QuizSessionFilters = {},
  options: BuildCreateQuizV2SessionPayloadOptions = {}
): CreateQuizV2SessionPayload {
  return {
    schemaVersion: 1,
    seed: options.seed ?? DEFAULT_SEED,
    filters: normalizeFilters(filters),
  };
}

export function buildLocalQuizV2SessionResponse(
  questions: readonly StructuredQuestion[],
  payload: CreateQuizV2SessionPayload,
  options: Pick<BuildOptions, 'now'> = {}
): CreateQuizV2SessionResponse {
  return {
    ok: true,
    source: 'local-fallback',
    session: buildQuizSession(questions, payload.filters, {
      seed: payload.seed,
      now: options.now,
    }),
  };
}

export function isCreateQuizV2SessionResponse(value: unknown): value is CreateQuizV2SessionResponse {
  if (!value || typeof value !== 'object') return false;
  const response = value as Partial<CreateQuizV2SessionResponse>;
  if (typeof response.ok !== 'boolean') return false;
  if (response.source !== 'backend' && response.source !== 'local-fallback') return false;
  const session = response.session as Partial<QuizSession> | undefined;
  if (!session || typeof session !== 'object') return false;
  return (
    session.schemaVersion === 1 &&
    typeof session.sessionId === 'string' &&
    session.sessionId.startsWith('qv2-') &&
    (response.source === 'backend'
      ? typeof session.backendSessionId === 'string' && session.backendSessionId.length > 0
      : session.backendSessionId === undefined || typeof session.backendSessionId === 'string') &&
    typeof session.seed === 'string' &&
    Array.isArray(session.questionSlugs) &&
    typeof session.totalEligible === 'number' &&
    Boolean(session.filters)
  );
}

export function assertCreateQuizV2SessionResponse(value: unknown): CreateQuizV2SessionResponse {
  if (!isCreateQuizV2SessionResponse(value)) {
    throw new Error('invalid_quiz_v2_session_response');
  }
  return value;
}

export function hasBackendSession(session: QuizSession): session is QuizSession & { backendSessionId: string } {
  return typeof session.backendSessionId === 'string' && session.backendSessionId.length > 0;
}
