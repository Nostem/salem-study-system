import { createAdminClient, jsonResponse, requireAllowedOrigin, requirePost, requireUser } from '../_shared/http.ts';

type QuestionSnapshot = {
  version?: number;
  slug?: string;
  examYear?: number;
  questionNumber?: number;
  track?: string | null;
  title?: string | null;
  displayTitle?: string;
  status?: string;
  quizEligible?: boolean;
  isRedacted?: boolean;
  acceptedLabels?: string[];
  explanationText?: string | null;
  selectedLabel?: string | null;
  selectedOriginalLabel?: string | null;
  isCorrect?: boolean;
  choiceOrder?: Record<string, string> | string[] | null;
};

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
  question_snapshot?: QuestionSnapshot | null;
  questions: QuestionRow | null;
};

type QuestionRow = {
  id: string;
  slug: string;
  exam_year: number;
  question_number: number;
  track: string | null;
  title: string;
  status: string;
  quiz_eligible: boolean;
  is_redacted: boolean | null;
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

function snapshotDisplayTitle(snapshot: QuestionSnapshot): string {
  if (typeof snapshot.displayTitle === 'string' && snapshot.displayTitle.trim()) return snapshot.displayTitle;
  if (typeof snapshot.examYear === 'number' && typeof snapshot.questionNumber === 'number') {
    return `${snapshot.examYear} Q${snapshot.questionNumber}`;
  }
  return typeof snapshot.slug === 'string' ? snapshot.slug : 'Saved question';
}

function hasSnapshotData(snapshot: QuestionSnapshot | null | undefined): snapshot is QuestionSnapshot {
  return Boolean(snapshot && typeof snapshot === 'object' && typeof snapshot.slug === 'string' && snapshot.slug.length > 0);
}

function isHistorySafeSnapshot(snapshot: QuestionSnapshot): boolean {
  return snapshot.isRedacted !== true;
}

function isHistorySafeQuestion(question: QuestionRow): boolean {
  return question.is_redacted !== true;
}

function normalizeScore(value: number | string | null): number {
  if (typeof value === 'number') return value;
  if (typeof value === 'string') return Number(value);
  return 0;
}

function completionMode(config: Record<string, unknown> | null): 'completed' | 'early' {
  return config?.completionMode === 'early' ? 'early' : 'completed';
}

function arraySummary(value: unknown, label: string): string | null {
  if (!Array.isArray(value) || value.length === 0) return null;
  return `${label}: ${value.map(String).join(', ')}`;
}

function filterSummary(session: QuizSessionRow, totalQuestions: number): string {
  const config = session.config ?? {};
  const filters = config.filters && typeof config.filters === 'object'
    ? config.filters as Record<string, unknown>
    : config;
  const parts: string[] = [];
  if (config.source === 'quiz-v2') parts.push('Quiz v2');
  if (typeof config.year === 'number' || typeof config.year === 'string') parts.push(String(config.year));
  if (typeof config.track === 'string' && config.track !== 'all') parts.push(config.track);
  if (typeof config.topic === 'string' && config.topic !== 'all') parts.push(config.topic);
  for (const part of [
    arraySummary(filters.years, 'years'),
    arraySummary(filters.tracks, 'tracks'),
    arraySummary(filters.topicSlugs, 'topics'),
  ]) {
    if (part) parts.push(part);
  }
  parts.push(`${totalQuestions} question${totalQuestions === 1 ? '' : 's'}`);
  return parts.join(' · ');
}

function replayHref(questionSlugs: string[], seed: unknown): string | null {
  if (questionSlugs.length === 0) return null;
  const params = new URLSearchParams();
  params.set('slugs', questionSlugs.join(','));
  params.set('count', String(questionSlugs.length));
  params.set('seed', typeof seed === 'string' && seed ? seed : 'history-replay');
  return `/quiz-v2/play/?${params.toString()}`;
}

function reviewHref(questionSlugs: string[]): string | null {
  if (questionSlugs.length === 0) return null;
  const params = new URLSearchParams();
  params.set('slugs', questionSlugs.join(','));
  return `/quiz-v2/review/?${params.toString()}`;
}

function missedQuizHref(questionSlugs: string[]): string | null {
  if (questionSlugs.length === 0) return null;
  const params = new URLSearchParams();
  params.set('slugs', questionSlugs.join(','));
  params.set('count', String(questionSlugs.length));
  params.set('seed', 'history-missed');
  return `/quiz-v2/play/?${params.toString()}`;
}

function sessionSource(config: Record<string, unknown> | null): string | null {
  if (typeof config?.source === 'string') return config.source;
  const submitted = config?.submitted;
  if (submitted && typeof submitted === 'object' && !Array.isArray(submitted)) {
    const source = (submitted as Record<string, unknown>).source;
    if (typeof source === 'string') return source;
  }
  return null;
}

function originalLabelFromChoiceOrder(selectedLabel: string | null, choiceOrder: Record<string, string> | string[] | null): string | null {
  if (!selectedLabel) return null;
  if (choiceOrder && !Array.isArray(choiceOrder)) return choiceOrder[selectedLabel] ?? selectedLabel;
  return selectedLabel;
}

function displayLabelFromChoiceOrder(originalLabel: string, choiceOrder: Record<string, string> | string[] | null): string {
  if (!choiceOrder || Array.isArray(choiceOrder)) return originalLabel;
  for (const [displayLabel, sourceLabel] of Object.entries(choiceOrder)) {
    if (sourceLabel === originalLabel) return displayLabel;
  }
  return originalLabel;
}

Deno.serve(async (req) => {
  const methodError = requirePost(req);
  if (methodError) return methodError;
  const originError = requireAllowedOrigin(req);
  if (originError) return originError;

  const admin = createAdminClient();
  if (!admin) return jsonResponse({ error: 'server_not_configured' }, 500, req);

  const { error: authError, user } = await requireUser(req, admin);
  if (authError || !user) return authError;
  const userId = user.id;

  const { data: stateRows, error: stateError } = await admin
    .from('user_question_state')
    .select('mastery_state, next_review_at')
    .eq('user_id', userId);
  if (stateError) return jsonResponse({ error: 'state_lookup_failed' }, 500, req);

  const now = Date.now();
  const dueReviewCount = (stateRows ?? []).filter((state) => state.next_review_at && Date.parse(state.next_review_at) <= now).length;
  const shakyCount = (stateRows ?? []).filter((state) => state.mastery_state === 'shaky').length;
  const masteredCount = (stateRows ?? []).filter((state) => state.mastery_state === 'mastered').length;

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
        question_snapshot,
        questions(
          id,
          slug,
          exam_year,
          question_number,
          track,
          title,
          status,
          quiz_eligible,
          is_redacted,
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

  if (error) return jsonResponse({ error: 'history_lookup_failed' }, 500, req);

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
      const snapshot = hasSnapshotData(sessionQuestion.question_snapshot) ? sessionQuestion.question_snapshot : null;
      if (snapshot) {
        if (!isHistorySafeSnapshot(snapshot)) return null;
      } else {
        if (!question) return null;
        if (!isHistorySafeQuestion(question)) return null;
      }

      const attempt = question ? attemptsByQuestion.get(question.id) : undefined;
      const choiceOrder = snapshot?.choiceOrder ?? sessionQuestion.choice_order;
      const selectedLabel = snapshot?.selectedLabel ?? attempt?.choices?.label ?? null;
      const selectedOriginalLabel = snapshot?.selectedOriginalLabel ?? originalLabelFromChoiceOrder(selectedLabel, choiceOrder);
      const isAnswered = Boolean(snapshot?.selectedLabel || snapshot?.selectedOriginalLabel || attempt?.selected_choice_id);
      const isCorrect = Boolean(snapshot?.isCorrect ?? attempt?.is_correct);
      if (isAnswered) {
        totalAnswered += 1;
        if (isCorrect) totalCorrect += 1;
        for (const link of question?.question_topics ?? []) {
          if (!link.topics) continue;
          const current = topicStats.get(link.topics.slug) ?? { slug: link.topics.slug, title: link.topics.title, attempts: 0, misses: 0 };
          current.attempts += 1;
          if (!isCorrect) current.misses += 1;
          topicStats.set(link.topics.slug, current);
        }
      }
      const acceptedLabels = snapshot?.acceptedLabels ?? question?.accepted_answer_labels ?? [];
      const acceptedDisplayLabels = acceptedLabels.map((label) => displayLabelFromChoiceOrder(label, choiceOrder));
      return {
        position: sessionQuestion.position,
        displayTitle: snapshot ? snapshotDisplayTitle(snapshot) : displayTitle(question!),
        slug: snapshot?.slug ?? question!.slug,
        track: snapshot?.track ?? question?.track ?? null,
        sourceStatus: snapshot?.status ?? question?.status ?? null,
        selectedLabel,
        selectedOriginalLabel,
        acceptedLabels,
        acceptedDisplayLabels,
        isCorrect,
        status: isAnswered ? (isCorrect ? 'correct' : 'incorrect') : 'unanswered',
        explanationText: snapshot?.explanationText ?? question?.explanation_text ?? null,
        choiceOrder,
      };
    }).filter((question): question is NonNullable<typeof question> => question !== null);

    const answeredCount = questions.filter((question) => question.status !== 'unanswered').length;
    const correctCount = questions.filter((question) => question.status === 'correct').length;
    const slugs = questions.map((question) => question.slug);
    const missedSlugs = questions.filter((question) => question.status !== 'correct').map((question) => question.slug);
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
      source: sessionSource(session.config),
      replayHref: replayHref(slugs, session.config?.seed),
      reviewMissedHref: reviewHref(missedSlugs),
      retakeMissedHref: missedQuizHref(missedSlugs),
      missedSlugs,
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
      dueReviewCount,
      shakyCount,
      masteredCount,
    },
    weakTopics,
    sessions,
  });
});
