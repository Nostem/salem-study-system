import { createClient, type Session, type SupabaseClient } from '@supabase/supabase-js';
import type {
  CreateQuizV2SessionPayload,
  CreateQuizV2SessionResponse,
} from './quiz-v2-backend-session';

export type InviteSignupPayload = {
  inviteCode?: string;
  username: string;
  password: string;
  displayName?: string;
};

export type InviteSignupResponse = {
  ok: boolean;
  username: string;
  learnerCode: string;
};

export type UsernameLoginPayload = {
  username: string;
  password: string;
};

export type UsernameLoginResponse = {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
  user: {
    id: string;
    username: string;
    display_name: string | null;
    role: string;
  };
};

export type SubmitQuizResultsQuestion = {
  slug: string;
  position: number;
  selectedLabel?: string | null;
  selectedOriginalLabel?: string | null;
  choiceOrder?: Record<string, string> | string[] | null;
  timeMs?: number | null;
};

export type ContactFeedbackPayload = {
  category?: string;
  name?: string;
  email?: string;
  message: string;
  pageUrl?: string;
  userAgent?: string;
  website?: string;
};

export type ContactFeedbackResponse = {
  ok: boolean;
  feedbackId: string | null;
};

export type SubmitQuizResultsPayload = {
  quizSessionId?: string;
  source?: 'quiz' | 'quiz-v2';
  title?: string;
  quizType: 'classic' | 'custom' | 'topic' | 'graph' | 'review' | 'missed' | 'weak_area' | 'exam_sim' | 'global_hard';
  feedbackMode: 'immediate' | 'blind';
  completionMode?: 'completed' | 'early';
  filters: Record<string, unknown>;
  questions: SubmitQuizResultsQuestion[];
};

export type SubmitQuizResultsResponse = {
  ok: boolean;
  quizSessionId: string;
  questionsSnapshotted?: number;
  attemptsInserted: number;
  score: number;
};

export type QuizHistoryQuestion = {
  position: number;
  displayTitle: string;
  slug: string;
  track?: string | null;
  selectedLabel?: string | null;
  selectedOriginalLabel?: string | null;
  acceptedLabels: string[];
  acceptedDisplayLabels?: string[];
  isCorrect: boolean;
  status: 'correct' | 'incorrect' | 'unanswered';
  explanationText?: string | null;
  choiceOrder?: Record<string, string> | string[] | null;
};

export type QuizHistorySession = {
  id: string;
  title?: string | null;
  completedAt: string | null;
  feedbackMode: string;
  quizType: string;
  completionMode: 'completed' | 'early';
  score: number;
  scorePercent?: number;
  correctCount: number;
  answeredCount: number;
  totalQuestions: number;
  passStatus: 'pass' | 'fail';
  filterSummary: string;
  source?: string | null;
  replayHref?: string | null;
  reviewMissedHref?: string | null;
  retakeMissedHref?: string | null;
  missedSlugs?: string[];
  questions: QuizHistoryQuestion[];
};

export type QuizHistoryResponse = {
  ok: boolean;
  summary: {
    completedQuizzes: number;
    questionsAnswered: number;
    averageScore: number;
    passCount: number;
    passRate: number;
    lastCompletedAt: string | null;
    overallAccuracy?: number;
    dueReviewCount?: number;
    shakyCount?: number;
    masteredCount?: number;
  };
  weakTopics: Array<{ slug: string; title: string; attempts: number; misses: number; accuracy: number }>;
  sessions: QuizHistorySession[];
};


export type QuizReviewQueueResponse = {
  ok: boolean;
  dueSlugs: string[];
  allSlugs: string[];
  states: Record<string, {
    attemptsCount: number;
    correctCount: number;
    incorrectCount: number;
    lastAttemptAt: string | null;
    lastCorrectAt: string | null;
    masteryState: 'new' | 'learning' | 'shaky' | 'mastered';
    nextReviewAt: string | null;
    updatedAt: string | null;
  }>;
};

export type SubmitQuestionReviewResponse = {
  ok: boolean;
  slug: string;
  rating: 'again' | 'hard' | 'good' | 'easy';
  nextReviewAt: string;
  masteryState: 'new' | 'learning' | 'shaky' | 'mastered';
  scheduledDays: number;
  fsrsDifficulty: number;
  fsrsStability: number;
};

const supabaseUrl = import.meta.env?.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env?.PUBLIC_SUPABASE_ANON_KEY;

export function hasSupabaseConfig(): boolean {
  return Boolean(supabaseUrl && supabaseAnonKey);
}

// Singleton: createClient() spins up a fresh auth instance with its own
// autoRefreshToken timer. If we recreate the client on every call (e.g. inside
// getCurrentSession()) no refresh timer ever lives long enough to fire, so a
// long-running quiz (≥1 h, default access JWT lifetime) ends with an expired
// token and submitQuizResults throws 'not_authenticated' before reaching the
// Edge Function. Cache one instance for the page lifetime instead.
let cachedClient: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient {
  if (!hasSupabaseConfig()) {
    throw new Error('Missing PUBLIC_SUPABASE_URL or PUBLIC_SUPABASE_ANON_KEY');
  }
  if (cachedClient) return cachedClient;
  cachedClient = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  });
  return cachedClient;
}

// Test/recovery hook: reset the cached client (e.g. after logout, or in tests).
export function resetSupabaseClientForTesting(): void {
  cachedClient = null;
}

function functionUrl(functionName: string): string {
  if (!supabaseUrl) throw new Error('Missing PUBLIC_SUPABASE_URL');
  return `${supabaseUrl.replace(/\/$/, '')}/functions/v1/${functionName}`;
}

export class EdgeFunctionError extends Error {
  readonly code: string;
  readonly status: number;
  readonly details: unknown;

  constructor(code: string, status: number, details: unknown) {
    super(code);
    this.name = 'EdgeFunctionError';
    this.code = code;
    this.status = status;
    this.details = details;
  }
}

export function edgeFunctionErrorCode(data: unknown): string {
  if (!data || typeof data !== 'object') return 'request_failed';
  const record = data as Record<string, unknown>;
  return typeof record.error === 'string' && record.error ? record.error : 'request_failed';
}

async function postFunction<T>(functionName: string, body: unknown, accessToken?: string): Promise<T> {
  if (!hasSupabaseConfig()) {
    throw new Error('Supabase is not configured for this build.');
  }

  const response = await fetch(functionUrl(functionName), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${accessToken ?? supabaseAnonKey}`,
    },
    body: JSON.stringify(body),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new EdgeFunctionError(edgeFunctionErrorCode(data), response.status, data);
  }
  return data as T;
}

export async function signupWithInvite(payload: InviteSignupPayload): Promise<InviteSignupResponse> {
  return postFunction<InviteSignupResponse>('invite-signup', payload);
}

export async function loginWithUsername(payload: UsernameLoginPayload): Promise<UsernameLoginResponse> {
  const result = await postFunction<UsernameLoginResponse>('username-login', payload);
  const client = getSupabaseClient();
  await client.auth.setSession({
    access_token: result.access_token,
    refresh_token: result.refresh_token,
  });
  return result;
}

export async function getCurrentSession(): Promise<Session | null> {
  const client = getSupabaseClient();
  const { data } = await client.auth.getSession();
  return data.session;
}

// Returns the freshest possible session. supabase-js getSession() will trigger
// a refresh if the access token has expired, but for long-lived pages (50q
// quiz can easily exceed the 1h access JWT lifetime) we want to force-refresh
// proactively just before a critical write so the Edge Function call doesn't
// fail with 401. Falls back to whatever getSession() returns if refresh fails.
export async function getActiveSession(): Promise<Session | null> {
  const client = getSupabaseClient();
  // Read current session first; if there's no refresh_token there's nothing to do.
  const { data: current } = await client.auth.getSession();
  const session = current.session;
  if (!session?.refresh_token) return session ?? null;

  // Refresh if the access token expires within the next 60 seconds. This is the
  // critical fix for quizzes that outlive the default token lifetime.
  const expiresAt = typeof session.expires_at === 'number' ? session.expires_at : 0;
  const nowSec = Math.floor(Date.now() / 1000);
  if (expiresAt - nowSec > 60) return session;

  try {
    const { data: refreshed } = await client.auth.refreshSession({
      refresh_token: session.refresh_token,
    });
    return refreshed.session ?? session;
  } catch {
    // Refresh failed (network blip, refresh token revoked). Return whatever we
    // have so the caller can decide whether to attempt the write anyway.
    return session;
  }
}

export async function submitQuizResults(payload: SubmitQuizResultsPayload): Promise<SubmitQuizResultsResponse> {
  const session = await getActiveSession();
  if (!session?.access_token) {
    throw new Error('not_authenticated');
  }
  return postFunction<SubmitQuizResultsResponse>('submit-quiz-results', payload, session.access_token);
}

export async function createQuizV2Session(
  payload: CreateQuizV2SessionPayload
): Promise<CreateQuizV2SessionResponse> {
  const session = await getCurrentSession();
  if (!session?.access_token) {
    throw new Error('not_authenticated');
  }
  return postFunction<CreateQuizV2SessionResponse>('create-quiz-v2-session', payload, session.access_token);
}


export async function getQuizReviewQueue(): Promise<QuizReviewQueueResponse> {
  const session = await getCurrentSession();
  if (!session?.access_token) {
    throw new Error('not_authenticated');
  }
  return postFunction<QuizReviewQueueResponse>('quiz-review-queue', {}, session.access_token);
}

export async function submitQuestionReview(payload: { slug: string; rating: 'again' | 'hard' | 'good' | 'easy' }): Promise<SubmitQuestionReviewResponse> {
  const session = await getCurrentSession();
  if (!session?.access_token) {
    throw new Error('not_authenticated');
  }
  return postFunction<SubmitQuestionReviewResponse>('submit-question-review', payload, session.access_token);
}

export async function getQuizHistory(): Promise<QuizHistoryResponse> {
  const session = await getCurrentSession();
  if (!session?.access_token) {
    throw new Error('not_authenticated');
  }
  return postFunction<QuizHistoryResponse>('quiz-history', {}, session.access_token);
}

export type SystemReviewsResponse = {
  ok: boolean;
  reviews: Record<string, string>;
};

export type MarkSystemReviewedResponse = {
  ok: boolean;
  slug: string;
  lastReviewedAt: string;
};

export async function getSystemReviews(): Promise<SystemReviewsResponse> {
  const session = await getCurrentSession();
  if (!session?.access_token) throw new Error('not_authenticated');
  return postFunction<SystemReviewsResponse>('get-system-reviews', {}, session.access_token);
}

export async function markSystemReviewed(slug: string): Promise<MarkSystemReviewedResponse> {
  const session = await getCurrentSession();
  if (!session?.access_token) throw new Error('not_authenticated');
  return postFunction<MarkSystemReviewedResponse>('mark-system-reviewed', { slug }, session.access_token);
}

export async function submitContactFeedback(payload: ContactFeedbackPayload): Promise<ContactFeedbackResponse> {
  let accessToken: string | undefined;
  try {
    const session = await getCurrentSession();
    accessToken = session?.access_token;
  } catch {
    accessToken = undefined;
  }
  return postFunction<ContactFeedbackResponse>('contact-feedback', payload, accessToken);
}

export async function logout(): Promise<void> {
  const client = getSupabaseClient();
  await client.auth.signOut();
  resetSupabaseClientForTesting();
}
