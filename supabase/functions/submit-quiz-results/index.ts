import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.105.1';

type SubmittedQuestion = {
  slug?: string;
  position?: number;
  selectedLabel?: string | null;
  timeMs?: number | null;
};

type SubmitQuizBody = {
  title?: string;
  quizType?: string;
  feedbackMode?: string;
  filters?: Record<string, unknown>;
  questions?: SubmittedQuestion[];
};

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

function jsonResponse(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}

function normalizeFeedbackMode(value: unknown): 'immediate' | 'blind' {
  return value === 'blind' ? 'blind' : 'immediate';
}

function normalizeQuizType(value: unknown): 'custom' | 'topic' | 'missed' | 'weak_area' | 'exam_sim' | 'global_hard' {
  const allowed = new Set(['custom', 'topic', 'missed', 'weak_area', 'exam_sim', 'global_hard']);
  return typeof value === 'string' && allowed.has(value) ? value as ReturnType<typeof normalizeQuizType> : 'custom';
}

function normalizeSelectedLabel(value: unknown): string | null {
  if (typeof value !== 'string') return null;
  const label = value.trim().toUpperCase();
  return /^[A-Z]$/.test(label) ? label : null;
}

function masteryState(attempts: number, correct: number, incorrect: number): 'new' | 'learning' | 'shaky' | 'mastered' {
  if (attempts <= 0) return 'new';
  if (attempts >= 2 && correct >= 2 && incorrect === 0) return 'mastered';
  if (incorrect > correct) return 'shaky';
  return 'learning';
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return jsonResponse({ error: 'method_not_allowed' }, 405);

  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!supabaseUrl || !serviceRoleKey) {
    return jsonResponse({ error: 'server_not_configured' }, 500);
  }

  const authorization = req.headers.get('Authorization') ?? '';
  const accessToken = authorization.replace(/^Bearer\s+/i, '').trim();
  if (!accessToken) return jsonResponse({ error: 'missing_authorization' }, 401);

  let body: SubmitQuizBody;
  try {
    body = await req.json();
  } catch {
    return jsonResponse({ error: 'invalid_json' }, 400);
  }

  const submittedQuestions = (body.questions ?? [])
    .map((question, index) => ({
      slug: String(question.slug ?? '').trim(),
      position: Number.isInteger(question.position) && Number(question.position) > 0 ? Number(question.position) : index + 1,
      selectedLabel: normalizeSelectedLabel(question.selectedLabel),
      timeMs: Number.isFinite(question.timeMs) && Number(question.timeMs) >= 0 ? Number(question.timeMs) : null,
    }))
    .filter((question) => question.slug.length > 0)
    .sort((a, b) => a.position - b.position);

  if (submittedQuestions.length === 0) {
    return jsonResponse({ error: 'questions_required' }, 400);
  }

  const admin = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { data: userData, error: userError } = await admin.auth.getUser(accessToken);
  if (userError || !userData.user) return jsonResponse({ error: 'invalid_authorization' }, 401);
  const userId = userData.user.id;

  const slugs = [...new Set(submittedQuestions.map((question) => question.slug))];
  const { data: questionRows, error: questionsError } = await admin
    .from('questions')
    .select('id, slug')
    .in('slug', slugs);
  if (questionsError) return jsonResponse({ error: 'question_lookup_failed' }, 500);

  const questionBySlug = new Map((questionRows ?? []).map((question) => [question.slug, question]));
  const missingSlugs = slugs.filter((slug) => !questionBySlug.has(slug));
  if (missingSlugs.length > 0) return jsonResponse({ error: 'unknown_question_slug', count: missingSlugs.length }, 400);

  const questionIds = submittedQuestions.map((question) => questionBySlug.get(question.slug)!.id);
  const { data: choiceRows, error: choicesError } = await admin
    .from('choices')
    .select('id, question_id, label, is_correct')
    .in('question_id', questionIds);
  if (choicesError) return jsonResponse({ error: 'choice_lookup_failed' }, 500);

  const choiceByQuestionAndLabel = new Map<string, { id: string; is_correct: boolean }>();
  for (const choice of choiceRows ?? []) {
    choiceByQuestionAndLabel.set(`${choice.question_id}:${String(choice.label).toUpperCase()}`, {
      id: choice.id,
      is_correct: Boolean(choice.is_correct),
    });
  }

  const feedbackMode = normalizeFeedbackMode(body.feedbackMode);
  const quizType = normalizeQuizType(body.quizType);
  const now = new Date().toISOString();

  const resolvedQuestions = submittedQuestions.map((question) => {
    const questionId = questionBySlug.get(question.slug)!.id;
    const choice = question.selectedLabel ? choiceByQuestionAndLabel.get(`${questionId}:${question.selectedLabel}`) : undefined;
    return {
      ...question,
      questionId,
      selectedChoiceId: choice?.id ?? null,
      is_correct: Boolean(choice?.is_correct),
    };
  });

  const correctCount = resolvedQuestions.filter((question) => question.is_correct).length;
  const score = correctCount / resolvedQuestions.length;

  const { data: session, error: sessionError } = await admin
    .from('quiz_sessions')
    .insert({
      user_id: userId,
      title: body.title ?? 'Salem practice quiz',
      quiz_type: quizType,
      feedback_mode: feedbackMode,
      config: body.filters ?? {},
      completed_at: now,
      score,
    })
    .select('id')
    .single();
  if (sessionError || !session) return jsonResponse({ error: 'quiz_session_insert_failed' }, 500);

  const { error: sessionQuestionsError } = await admin.from('quiz_session_questions').insert(
    resolvedQuestions.map((question) => ({
      quiz_session_id: session.id,
      question_id: question.questionId,
      position: question.position,
      choice_order: null,
    }))
  );
  if (sessionQuestionsError) return jsonResponse({ error: 'quiz_session_questions_insert_failed' }, 500);

  const { data: attempts, error: attemptsError } = await admin
    .from('question_attempts')
    .insert(
      resolvedQuestions.map((question) => ({
        user_id: userId,
        quiz_session_id: session.id,
        question_id: question.questionId,
        selected_choice_id: question.selectedChoiceId,
        is_correct: question.is_correct,
        time_ms: question.timeMs,
        submitted_at: now,
      }))
    )
    .select('id, question_id, is_correct');
  if (attemptsError) return jsonResponse({ error: 'question_attempts_insert_failed' }, 500);

  const { data: existingStates, error: stateLookupError } = await admin
    .from('user_question_state')
    .select('question_id, attempts_count, correct_count, incorrect_count, flagged')
    .eq('user_id', userId)
    .in('question_id', questionIds);
  if (stateLookupError) return jsonResponse({ error: 'state_lookup_failed' }, 500);

  const existingByQuestion = new Map((existingStates ?? []).map((state) => [state.question_id, state]));
  const attemptCounts = new Map<string, { attempts: number; correct: number; incorrect: number }>();
  for (const attempt of attempts ?? []) {
    const counts = attemptCounts.get(attempt.question_id) ?? { attempts: 0, correct: 0, incorrect: 0 };
    counts.attempts += 1;
    if (attempt.is_correct) counts.correct += 1;
    else counts.incorrect += 1;
    attemptCounts.set(attempt.question_id, counts);
  }

  const stateRows = [...attemptCounts.entries()].map(([questionId, counts]) => {
    const existing = existingByQuestion.get(questionId);
    const attemptsCount = Number(existing?.attempts_count ?? 0) + counts.attempts;
    const correctCountForQuestion = Number(existing?.correct_count ?? 0) + counts.correct;
    const incorrectCountForQuestion = Number(existing?.incorrect_count ?? 0) + counts.incorrect;
    return {
      user_id: userId,
      question_id: questionId,
      attempts_count: attemptsCount,
      correct_count: correctCountForQuestion,
      incorrect_count: incorrectCountForQuestion,
      last_attempt_at: now,
      last_correct_at: counts.correct > 0 ? now : null,
      flagged: Boolean(existing?.flagged ?? false),
      mastery_state: masteryState(attemptsCount, correctCountForQuestion, incorrectCountForQuestion),
      updated_at: now,
    };
  });

  if (stateRows.length > 0) {
    const { error: upsertStateError } = await admin
      .from('user_question_state')
      .upsert(stateRows, { onConflict: 'user_id,question_id' });
    if (upsertStateError) return jsonResponse({ error: 'user_question_state_upsert_failed' }, 500);
  }

  return jsonResponse({
    ok: true,
    quizSessionId: session.id,
    questionsSnapshotted: resolvedQuestions.length,
    attemptsInserted: attempts?.length ?? 0,
    score,
  });
});
