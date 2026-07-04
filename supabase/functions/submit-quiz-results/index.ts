import { masteryState } from '../_shared/fsrs-whole-question.ts';
import { createAdminClient, jsonResponse, readJsonBody, requireAllowedOrigin, requirePost, requireUser } from '../_shared/http.ts';

type SubmittedQuestion = {
  slug?: string;
  position?: number;
  selectedLabel?: string | null;
  selectedOriginalLabel?: string | null;
  choiceOrder?: unknown;
  timeMs?: number | null;
};

type SubmitQuizBody = {
  quizSessionId?: string;
  source?: string;
  title?: string;
  quizType?: string;
  feedbackMode?: string;
  completionMode?: string;
  filters?: Record<string, unknown>;
  questions?: SubmittedQuestion[];
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
  is_redacted: boolean;
  accepted_answer_labels: string[] | null;
  explanation_text: string | null;
};

type ChoiceRow = {
  id: string;
  question_id: string;
  label: string;
  is_correct: boolean;
};

type QuestionSnapshot = {
  version: 2;
  slug: string;
  examYear: number;
  questionNumber: number;
  track: string | null;
  title: string;
  displayTitle: string;
  status: string;
  quizEligible: boolean;
  isRedacted: boolean;
  acceptedLabels: string[];
  explanationText: string | null;
  selectedLabel: string | null;
  selectedOriginalLabel: string | null;
  isCorrect: boolean;
  choiceOrder: Record<string, string> | string[] | null;
  // Topic slugs let history keep weak-topic stats even after the live
  // question row is deleted. Full choice rows are deliberately NOT stored:
  // history never reads them and they dominated snapshot size (v1).
  topicSlugs: string[];
};

function normalizeFeedbackMode(value: unknown): 'immediate' | 'blind' {
  return value === 'blind' ? 'blind' : 'immediate';
}

function normalizeCompletionMode(value: unknown): 'completed' | 'early' {
  return value === 'early' ? 'early' : 'completed';
}

const QUIZ_TYPES = ['classic', 'custom', 'topic', 'graph', 'review', 'missed', 'weak_area', 'exam_sim', 'global_hard'] as const;
type QuizType = typeof QUIZ_TYPES[number];

const QUIZ_SUBMITTABLE_STATUSES = ['active', 'draft', 'outdated'] as const;

function normalizeQuizType(value: unknown): QuizType | null {
  return typeof value === 'string' && (QUIZ_TYPES as readonly string[]).includes(value) ? value as QuizType : null;
}

function normalizeSelectedLabel(value: unknown): string | null {
  if (typeof value !== 'string') return null;
  const label = value.trim().toUpperCase();
  return /^[A-Z]$/.test(label) ? label : null;
}

function normalizeChoiceOrder(value: unknown): Record<string, string> | string[] | null {
  if (Array.isArray(value)) {
    const labels = value.map(normalizeSelectedLabel).filter((label): label is string => label !== null);
    if (labels.length === 0) return null;
    return [...new Set(labels)];
  }
  if (!value || typeof value !== 'object') return null;
  const normalized: Record<string, string> = {};
  for (const [displayValue, sourceValue] of Object.entries(value as Record<string, unknown>)) {
    const displayLabel = normalizeSelectedLabel(displayValue);
    const sourceLabel = normalizeSelectedLabel(sourceValue);
    if (displayLabel && sourceLabel) normalized[displayLabel] = sourceLabel;
  }
  return Object.keys(normalized).length > 0 ? normalized : null;
}

function originalLabelFromSubmittedChoice(selectedLabel: string | null, selectedOriginalLabel: string | null, choiceOrder: Record<string, string> | string[] | null): string | null {
  if (selectedOriginalLabel) return selectedOriginalLabel;
  if (!selectedLabel) return null;
  if (choiceOrder && !Array.isArray(choiceOrder)) return choiceOrder[selectedLabel] ?? selectedLabel;
  return selectedLabel;
}

function questionSnapshot(
  question: QuestionRow,
  topicSlugs: string[],
  submitted: {
    selectedLabel: string | null;
    selectedOriginalLabel: string | null;
    choiceOrder: Record<string, string> | string[] | null;
    is_correct: boolean;
  }
): QuestionSnapshot {
  return {
    version: 2,
    slug: question.slug,
    examYear: question.exam_year,
    questionNumber: question.question_number,
    track: question.track,
    title: question.title,
    displayTitle: `${question.exam_year} Q${question.question_number}`,
    status: question.status,
    quizEligible: Boolean(question.quiz_eligible),
    isRedacted: Boolean(question.is_redacted),
    acceptedLabels: question.accepted_answer_labels ?? [],
    explanationText: question.explanation_text,
    selectedLabel: submitted.selectedLabel,
    selectedOriginalLabel: submitted.selectedOriginalLabel,
    isCorrect: submitted.is_correct,
    choiceOrder: submitted.choiceOrder,
    topicSlugs,
  };
}

function nextReviewAt(nowIso: string, correct: number, incorrect: number): string {
  const base = new Date(nowIso);
  const days = incorrect > 0 ? 1 : correct >= 2 ? 14 : 3;
  base.setUTCDate(base.getUTCDate() + days);
  return base.toISOString();
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

  const { body, error: bodyError } = await readJsonBody<SubmitQuizBody>(req);
  if (bodyError || !body) return bodyError;

  const submittedQuestions = (body.questions ?? [])
    .map((question, index) => ({
      slug: String(question.slug ?? '').trim(),
      position: Number.isInteger(question.position) && Number(question.position) > 0 ? Number(question.position) : index + 1,
      selectedLabel: normalizeSelectedLabel(question.selectedLabel),
      selectedOriginalLabel: normalizeSelectedLabel(question.selectedOriginalLabel),
      choiceOrder: normalizeChoiceOrder(question.choiceOrder),
      timeMs: Number.isFinite(question.timeMs) && Number(question.timeMs) >= 0 ? Number(question.timeMs) : null,
    }))
    .filter((question) => question.slug.length > 0)
    .sort((a, b) => a.position - b.position);

  if (submittedQuestions.length === 0) {
    return jsonResponse({ error: 'questions_required' }, 400, req);
  }

  const slugs = [...new Set(submittedQuestions.map((question) => question.slug))];
  if (slugs.length !== submittedQuestions.length) {
    return jsonResponse({ error: 'duplicate_question_slug' }, 400, req);
  }
  const { data: questionRows, error: questionsError } = await admin
    .from('questions')
    .select('id, slug, exam_year, question_number, track, title, status, quiz_eligible, is_redacted, accepted_answer_labels, explanation_text')
    .in('slug', slugs)
    .in('status', [...QUIZ_SUBMITTABLE_STATUSES])
    .eq('is_redacted', false);
  if (questionsError) return jsonResponse({ error: 'question_lookup_failed' }, 500, req);

  const submitCandidateQuestions = (questionRows ?? []) as QuestionRow[];
  const questionBySlug = new Map(submitCandidateQuestions.map((question) => [question.slug, question]));
  const missingSlugs = slugs.filter((slug) => !questionBySlug.has(slug));
  if (missingSlugs.length > 0) return jsonResponse({ error: 'unknown_question_slug', count: missingSlugs.length }, 400, req);

  const questionIds = slugs.map((slug) => questionBySlug.get(slug)!.id);
  const { data: choiceRows, error: choicesError } = await admin
    .from('choices')
    .select('id, question_id, label, is_correct')
    .in('question_id', questionIds);
  if (choicesError) return jsonResponse({ error: 'choice_lookup_failed' }, 500, req);

  const candidateChoices = (choiceRows ?? []) as ChoiceRow[];

  const { data: topicRows, error: topicsError } = await admin
    .from('question_topics')
    .select('question_id, topics(slug)')
    .in('question_id', questionIds);
  if (topicsError) return jsonResponse({ error: 'topic_lookup_failed' }, 500, req);
  const topicSlugsByQuestion = new Map<string, string[]>();
  for (const row of (topicRows ?? []) as Array<{ question_id: string; topics: { slug: string } | null }>) {
    if (!row.topics?.slug) continue;
    const slugsForQuestion = topicSlugsByQuestion.get(row.question_id) ?? [];
    if (!slugsForQuestion.includes(row.topics.slug)) slugsForQuestion.push(row.topics.slug);
    topicSlugsByQuestion.set(row.question_id, slugsForQuestion);
  }

  const choiceByQuestionAndLabel = new Map<string, { id: string; is_correct: boolean }>();
  for (const choice of candidateChoices) {
    choiceByQuestionAndLabel.set(`${choice.question_id}:${String(choice.label).toUpperCase()}`, {
      id: choice.id,
      is_correct: Boolean(choice.is_correct),
    });
  }

  const choiceStatsByQuestion = new Map<string, { choices: number; correct: number }>();
  for (const choice of candidateChoices) {
    const stats = choiceStatsByQuestion.get(choice.question_id) ?? { choices: 0, correct: 0 };
    stats.choices += 1;
    if (choice.is_correct) stats.correct += 1;
    choiceStatsByQuestion.set(choice.question_id, stats);
  }

  const ineligibleQuestionCount = submitCandidateQuestions.filter((question) => {
    if (question.quiz_eligible) return false;
    const stats = choiceStatsByQuestion.get(question.id) ?? { choices: 0, correct: 0 };
    return stats.choices < 2 || stats.correct < 1;
  }).length;
  if (ineligibleQuestionCount > 0) return jsonResponse({ error: 'ineligible_question_slug', count: ineligibleQuestionCount }, 400, req);

  const feedbackMode = normalizeFeedbackMode(body.feedbackMode);
  const completionMode = normalizeCompletionMode(body.completionMode);
  const quizType = normalizeQuizType(body.quizType);
  if (!quizType) return jsonResponse({ error: 'invalid_quiz_type' }, 400, req);
  const now = new Date().toISOString();

  const resolvedQuestions = submittedQuestions.map((question) => {
    const questionId = questionBySlug.get(question.slug)!.id;
    const selectedOriginalLabel = originalLabelFromSubmittedChoice(question.selectedLabel, question.selectedOriginalLabel, question.choiceOrder);
    const choice = selectedOriginalLabel ? choiceByQuestionAndLabel.get(`${questionId}:${selectedOriginalLabel}`) : undefined;
    return {
      ...question,
      selectedOriginalLabel,
      questionId,
      selectedChoiceId: choice?.id ?? null,
      is_correct: Boolean(choice?.is_correct),
    };
  });

  const answeredQuestions = resolvedQuestions.filter((question) => question.selectedChoiceId !== null);
  const scoringQuestions = completionMode === 'early' ? answeredQuestions : resolvedQuestions;
  const correctCount = scoringQuestions.filter((question) => question.is_correct).length;
  const score = scoringQuestions.length > 0 ? correctCount / scoringQuestions.length : 0;

  let session: { id: string };
  const questionsSnapshotted = resolvedQuestions.length;
  const requestedSessionId = typeof body.quizSessionId === 'string' && body.quizSessionId.trim()
    ? body.quizSessionId.trim()
    : null;

  if (requestedSessionId) {
    const { data: existingSession, error: existingSessionError } = await admin
      .from('quiz_sessions')
      .select('id, config')
      .eq('id', requestedSessionId)
      .eq('user_id', userId)
      .single();
    if (existingSessionError || !existingSession) return jsonResponse({ error: 'quiz_session_not_found' }, 404, req);
    const existingConfig = (existingSession.config && typeof existingSession.config === 'object')
      ? existingSession.config as Record<string, unknown>
      : {};
    const { error: updateSessionError } = await admin
      .from('quiz_sessions')
      .update({
        title: body.title ?? 'Quiz v2 generated session',
        quiz_type: quizType,
        feedback_mode: feedbackMode,
        config: {
          ...existingConfig,
          submitted: { ...(body.filters ?? {}), completionMode, source: body.source ?? existingConfig.source ?? 'quiz-v2' },
          completionMode,
        },
        completed_at: now,
        score,
      })
      .eq('id', requestedSessionId)
      .eq('user_id', userId);
    if (updateSessionError) return jsonResponse({ error: 'quiz_session_update_failed' }, 500, req);
    session = { id: requestedSessionId };
  } else {
    const { data: insertedSession, error: sessionError } = await admin
      .from('quiz_sessions')
      .insert({
        user_id: userId,
        title: body.title ?? 'Salem practice quiz',
        quiz_type: quizType,
        feedback_mode: feedbackMode,
        config: { ...(body.filters ?? {}), completionMode, source: body.source ?? 'quiz' },
        completed_at: now,
        score,
      })
      .select('id')
      .single();
    if (sessionError || !insertedSession) return jsonResponse({ error: 'quiz_session_insert_failed' }, 500, req);
    session = insertedSession;
  }

  const snapshotRows = resolvedQuestions.map((question) => {
    const questionRow = questionBySlug.get(question.slug)!;
    return {
      question_id: question.questionId,
      position: question.position,
      choice_order: question.choiceOrder,
      question_snapshot: questionSnapshot(questionRow, topicSlugsByQuestion.get(question.questionId) ?? [], question),
    };
  });

  // Idempotency: a client retry on the same quizSessionId must not double-count.
  // Read any prior question_attempts for this session (read-only here — the
  // atomic RPC below replaces them) and subtract them from the cumulative
  // user_question_state baselines.
  const priorAttemptCounts = new Map<string, { attempts: number; correct: number; incorrect: number }>();
  if (requestedSessionId) {
    const { data: priorAttempts, error: priorAttemptsError } = await admin
      .from('question_attempts')
      .select('question_id, is_correct')
      .eq('quiz_session_id', requestedSessionId)
      .eq('user_id', userId);
    if (priorAttemptsError) return jsonResponse({ error: 'question_attempts_lookup_failed' }, 500, req);
    for (const prior of priorAttempts ?? []) {
      const counts = priorAttemptCounts.get(prior.question_id) ?? { attempts: 0, correct: 0, incorrect: 0 };
      counts.attempts += 1;
      if (prior.is_correct) counts.correct += 1;
      else counts.incorrect += 1;
      priorAttemptCounts.set(prior.question_id, counts);
    }
  }

  const attemptSourceQuestions = completionMode === 'early' ? answeredQuestions : resolvedQuestions;
  const attemptRows = attemptSourceQuestions.map((question) => ({
    question_id: question.questionId,
    selected_choice_id: question.selectedChoiceId,
    is_correct: question.is_correct,
    time_ms: question.timeMs,
    submitted_at: now,
  }));

  // Include prior-attempt question ids: a re-submission with a different
  // question set must reconcile (not zero) state for dropped questions.
  const stateQuestionIds = [...new Set([...questionIds, ...priorAttemptCounts.keys()])];
  const { data: existingStates, error: stateLookupError } = await admin
    .from('user_question_state')
    .select('question_id, attempts_count, correct_count, incorrect_count, last_correct_at, flagged, review_lapses, review_reps, fsrs_stability, next_review_at')
    .eq('user_id', userId)
    .in('question_id', stateQuestionIds);
  if (stateLookupError) return jsonResponse({ error: 'state_lookup_failed' }, 500, req);

  const existingByQuestion = new Map((existingStates ?? []).map((state) => [state.question_id, state]));
  const attemptCounts = new Map<string, { attempts: number; correct: number; incorrect: number }>();
  for (const attempt of attemptRows) {
    const counts = attemptCounts.get(attempt.question_id) ?? { attempts: 0, correct: 0, incorrect: 0 };
    counts.attempts += 1;
    if (attempt.is_correct) counts.correct += 1;
    else counts.incorrect += 1;
    attemptCounts.set(attempt.question_id, counts);
  }

  const touchedQuestionIds = new Set<string>([...attemptCounts.keys(), ...priorAttemptCounts.keys()]);

  const stateRows = [...touchedQuestionIds].map((questionId) => {
    const existing = existingByQuestion.get(questionId);
    const counts = attemptCounts.get(questionId) ?? { attempts: 0, correct: 0, incorrect: 0 };
    const prior = priorAttemptCounts.get(questionId) ?? { attempts: 0, correct: 0, incorrect: 0 };
    const baselineAttempts = Math.max(0, Number(existing?.attempts_count ?? 0) - prior.attempts);
    const baselineCorrect = Math.max(0, Number(existing?.correct_count ?? 0) - prior.correct);
    const baselineIncorrect = Math.max(0, Number(existing?.incorrect_count ?? 0) - prior.incorrect);
    const attemptsCount = baselineAttempts + counts.attempts;
    const correctCountForQuestion = baselineCorrect + counts.correct;
    const incorrectCountForQuestion = baselineIncorrect + counts.incorrect;
    const lapsesForQuestion = Number(existing?.review_lapses ?? 0);
    // FSRS owns scheduling once a question has real review state: quiz answers
    // must not clobber a schedule that submit-question-review computed. Only
    // fall back to the coarse quiz formula for questions FSRS has never seen.
    const hasFsrsSchedule = Number(existing?.review_reps ?? 0) > 0 || existing?.fsrs_stability != null;
    return {
      user_id: userId,
      question_id: questionId,
      attempts_count: attemptsCount,
      correct_count: correctCountForQuestion,
      incorrect_count: incorrectCountForQuestion,
      last_attempt_at: now,
      last_correct_at: counts.correct > 0 ? now : (existing?.last_correct_at ?? null),
      flagged: Boolean(existing?.flagged ?? false),
      mastery_state: masteryState(attemptsCount, correctCountForQuestion, incorrectCountForQuestion, lapsesForQuestion),
      next_review_at: hasFsrsSchedule
        ? (existing?.next_review_at ?? null)
        : nextReviewAt(now, counts.correct, counts.incorrect),
      updated_at: now,
    };
  });

  // All destructive writes happen in one transaction: replace this session's
  // snapshots and attempts, then upsert learner state. A mid-way failure can
  // no longer leave the session half-written with the prior data already gone.
  const { error: writeError } = await admin.rpc('replace_quiz_session_writes', {
    p_user_id: userId,
    p_session_id: session.id,
    p_snapshots: snapshotRows,
    p_attempts: attemptRows,
    p_states: stateRows,
  });
  if (writeError) return jsonResponse({ error: 'quiz_session_write_failed' }, 500, req);

  return jsonResponse({
    ok: true,
    quizSessionId: session.id,
    questionsSnapshotted,
    attemptsInserted: attemptRows.length,
    score,
  }, 200, req);
});
