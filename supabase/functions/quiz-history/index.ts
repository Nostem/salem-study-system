import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.105.1';

type QuizSessionRow = {
  id: string;
  title: string | null;
  quiz_type: string;
  feedback_mode: string;
  config: Record<string, unknown> | null;
  completed_at: string | null;
  score: number | string | null;
  quiz_session_questions?: SessionQuestionRow[];
  question_attempts?: AttemptRow[];
};

type SessionQuestionRow = {
  position: number;
  choice_order: Record<string, string> | string[] | null;
  questions: QuestionRow | null;
};

type QuestionRow = {
  id: string;
  slug: string;
  exam_year: number;
  question_number: number;
  track: string | null;
  title: string;
  accepted_answer_labels: string[] | null;
  explanation_text: string | null;
  question_topics?: { topics: TopicRow | null }[];
};

type TopicRow = {
  slug: string;
  title: string;
};

type AttemptRow = {
  question_id: string;
  selected_choice_id: string | null;
  is_correct: boolean;
  submitted_at: string;
  choices: ChoiceRow | null;
};

type ChoiceRow = {
  label: string;
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

function percent(value: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.round(value * 100) / 100;
}

function scorePercent(score: number): number {
  if (!Number.isFinite(score)) return 0;
  return Math.round(score * 100);
}

function passStatus(score: number): 'pass' | 'fail' {
  return score >= 0.8 ? 'pass' : 'fail';
}

function displayTitle(question: QuestionRow): string {
  return `${question.exam_year} Q${question.question_number}`;
}

function normalizeScore(value: number | string | null): number {
  if (typeof value === 'number') return value;
  if (typeof value === 'string') return Number(value);
  return 0;
}

function completionMode(config: Record<string, unknown> | null): 'completed' | 'early' {
  return config?.completionMode === 'early' ? 'early' : 'completed';
}

function filterSummary(session: QuizSessionRow, totalQuestions: number): string {
  const config = session.config ?? {};
  const parts: string[] = [];
  if (typeof config.year === 'number' || typeof config.year === 'string') parts.push(String(config.year));
  if (typeof config.track === 'string' && config.track !== 'all') parts.push(config.track);
  if (typeof config.topic === 'string' && config.topic !== 'all') parts.push(config.topic);
  parts.push(`${totalQuestions} question${totalQuestions === 1 ? '' : 's'}`);
  return parts.join(' · ');
}

function originalLabelFromChoiceOrder(selectedLabel: string | null, choiceOrder: Record<string, string> | string[] | null): string | null {
  if (!selectedLabel) return null;
  if (choiceOrder && !Array.isArray(choiceOrder)) return choiceOrder[selectedLabel] ?? selectedLabel;
  return selectedLabel;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return jsonResponse({ error: 'method_not_allowed' }, 405);

  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!supabaseUrl || !serviceRoleKey) return jsonResponse({ error: 'server_not_configured' }, 500);

  const authorization = req.headers.get('Authorization') ?? '';
  const accessToken = authorization.replace(/^Bearer\s+/i, '').trim();
  if (!accessToken) return jsonResponse({ error: 'missing_authorization' }, 401);

  const admin = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { data: userData, error: userError } = await admin.auth.getUser(accessToken);
  if (userError || !userData.user) return jsonResponse({ error: 'invalid_authorization' }, 401);
  const userId = userData.user.id;

  const { data, error } = await admin
    .from('quiz_sessions')
    .select(`
      id,
      title,
      quiz_type,
      feedback_mode,
      config,
      completed_at,
      score,
      quiz_session_questions(
        position,
        choice_order,
        questions(
          id,
          slug,
          exam_year,
          question_number,
          track,
          title,
          accepted_answer_labels,
          explanation_text,
          question_topics(topics(slug, title))
        )
      ),
      question_attempts(
        question_id,
        selected_choice_id,
        is_correct,
        submitted_at,
        choices(label)
      )
    `)
    .eq('user_id', userId)
    .not('completed_at', 'is', null)
    .order('completed_at', { ascending: false })
    .limit(50);

  if (error) return jsonResponse({ error: 'history_lookup_failed' }, 500);

  const rows = (data ?? []) as unknown as QuizSessionRow[];
  let totalAnswered = 0;
  let totalCorrect = 0;
  const topicStats = new Map<string, { slug: string; title: string; attempts: number; misses: number }>();

  const sessions = rows.map((session) => {
    const sessionQuestions = [...(session.quiz_session_questions ?? [])].sort((a, b) => a.position - b.position);
    const attemptsByQuestion = new Map<string, AttemptRow>();
    for (const attempt of session.question_attempts ?? []) {
      attemptsByQuestion.set(attempt.question_id, attempt);
    }

    const questions = sessionQuestions.map((sessionQuestion) => {
      const question = sessionQuestion.questions;
      if (!question) return null;
      const attempt = attemptsByQuestion.get(question.id);
      const selectedLabel = attempt?.choices?.label ?? null;
      const selectedOriginalLabel = originalLabelFromChoiceOrder(selectedLabel, sessionQuestion.choice_order);
      const isAnswered = Boolean(attempt?.selected_choice_id);
      const isCorrect = Boolean(attempt?.is_correct);
      if (isAnswered) {
        totalAnswered += 1;
        if (isCorrect) totalCorrect += 1;
        for (const link of question.question_topics ?? []) {
          if (!link.topics) continue;
          const current = topicStats.get(link.topics.slug) ?? { slug: link.topics.slug, title: link.topics.title, attempts: 0, misses: 0 };
          current.attempts += 1;
          if (!isCorrect) current.misses += 1;
          topicStats.set(link.topics.slug, current);
        }
      }
      return {
        position: sessionQuestion.position,
        displayTitle: displayTitle(question),
        slug: question.slug,
        track: question.track,
        selectedLabel,
        selectedOriginalLabel,
        acceptedLabels: question.accepted_answer_labels ?? [],
        isCorrect,
        status: isAnswered ? (isCorrect ? 'correct' : 'incorrect') : 'unanswered',
        explanationText: question.explanation_text,
        choiceOrder: sessionQuestion.choice_order,
      };
    }).filter((question): question is NonNullable<typeof question> => question !== null);

    const answeredCount = questions.filter((question) => question.status !== 'unanswered').length;
    const correctCount = questions.filter((question) => question.status === 'correct').length;
    const totalQuestions = questions.length;
    const score = normalizeScore(session.score);

    return {
      id: session.id,
      title: session.title,
      completedAt: session.completed_at,
      feedbackMode: session.feedback_mode,
      quizType: session.quiz_type,
      completionMode: completionMode(session.config),
      score,
      scorePercent: scorePercent(score),
      correctCount,
      answeredCount,
      totalQuestions,
      passStatus: passStatus(score),
      filterSummary: filterSummary(session, totalQuestions),
      questions,
    };
  });

  const completedQuizzes = sessions.length;
  const passCount = sessions.filter((session) => session.passStatus === 'pass').length;
  const averageScore = completedQuizzes > 0 ? sessions.reduce((sum, session) => sum + session.score, 0) / completedQuizzes : 0;
  const weakTopics = [...topicStats.values()]
    .map((topic) => ({ ...topic, accuracy: topic.attempts > 0 ? percent((topic.attempts - topic.misses) / topic.attempts) : 0 }))
    .filter((topic) => topic.misses > 0)
    .sort((a, b) => b.misses - a.misses || a.accuracy - b.accuracy)
    .slice(0, 6);

  return jsonResponse({
    ok: true,
    summary: {
      completedQuizzes,
      questionsAnswered: totalAnswered,
      averageScore: percent(averageScore),
      passCount,
      passRate: completedQuizzes > 0 ? percent(passCount / completedQuizzes) : 0,
      lastCompletedAt: sessions[0]?.completedAt ?? null,
      overallAccuracy: totalAnswered > 0 ? percent(totalCorrect / totalAnswered) : 0,
    },
    weakTopics,
    sessions,
  });
});
