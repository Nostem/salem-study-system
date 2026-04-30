import { createClient, type Session, type SupabaseClient } from '@supabase/supabase-js';

export type InviteSignupPayload = {
  inviteCode: string;
  username: string;
  password: string;
  displayName?: string;
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
  title?: string;
  quizType?: 'custom' | 'topic' | 'missed' | 'weak_area' | 'exam_sim' | 'global_hard';
  feedbackMode: 'immediate' | 'blind';
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

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

export function hasSupabaseConfig(): boolean {
  return Boolean(supabaseUrl && supabaseAnonKey);
}

export function getSupabaseClient(): SupabaseClient {
  if (!hasSupabaseConfig()) {
    throw new Error('Missing PUBLIC_SUPABASE_URL or PUBLIC_SUPABASE_ANON_KEY');
  }

  return createClient(supabaseUrl, supabaseAnonKey);
}

function functionUrl(functionName: string): string {
  if (!supabaseUrl) throw new Error('Missing PUBLIC_SUPABASE_URL');
  return `${supabaseUrl.replace(/\/$/, '')}/functions/v1/${functionName}`;
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
    const message = typeof data.error === 'string' ? data.error : 'request_failed';
    throw new Error(message);
  }
  return data as T;
}

export async function signupWithInvite(payload: InviteSignupPayload): Promise<void> {
  await postFunction('invite-signup', payload);
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

export async function submitQuizResults(payload: SubmitQuizResultsPayload): Promise<SubmitQuizResultsResponse> {
  const session = await getCurrentSession();
  if (!session?.access_token) {
    throw new Error('not_authenticated');
  }
  return postFunction<SubmitQuizResultsResponse>('submit-quiz-results', payload, session.access_token);
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
}
