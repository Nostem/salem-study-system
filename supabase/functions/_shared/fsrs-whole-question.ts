export type ReviewRating = 'again' | 'hard' | 'good' | 'easy';
export type MasteryState = 'new' | 'learning' | 'shaky' | 'mastered';

export type WholeQuestionReviewInput = {
  attemptsCount?: number | null;
  correctCount?: number | null;
  incorrectCount?: number | null;
  reviewReps?: number | null;
  reviewLapses?: number | null;
  fsrsDifficulty?: number | null;
  fsrsStability?: number | null;
  scheduledDays?: number | null;
  lastReviewedAt?: string | null;
  lastCorrectAt?: string | null;
  flagged?: boolean | null;
};

export type WholeQuestionReviewResult = {
  attemptsCount: number;
  correctCount: number;
  incorrectCount: number;
  reviewReps: number;
  reviewLapses: number;
  fsrsDifficulty: number;
  fsrsStability: number;
  scheduledDays: number;
  elapsedDays: number;
  lastReviewRating: ReviewRating;
  lastReviewedAt: string;
  lastAttemptAt: string;
  lastCorrectAt: string | null;
  nextReviewAt: string;
  masteryState: MasteryState;
  flagged: boolean;
  previousDifficulty: number | null;
  previousStability: number | null;
};

const MS_PER_DAY = 24 * 60 * 60 * 1000;
const INITIAL_DIFFICULTY: Record<ReviewRating, number> = { again: 7.5, hard: 6, good: 5, easy: 4 };
const INITIAL_STABILITY: Record<ReviewRating, number> = { again: 0.25, hard: 1, good: 3, easy: 7 };

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function round(value: number): number {
  return Math.round(value * 100) / 100;
}

function elapsedDays(previousIso: string | null | undefined, nowMs: number): number {
  if (!previousIso) return 0;
  const previousMs = Date.parse(previousIso);
  if (!Number.isFinite(previousMs)) return 0;
  return Math.max(0, Math.floor((nowMs - previousMs) / MS_PER_DAY));
}

function scheduledDaysFor(rating: ReviewRating, stability: number, reps: number): number {
  if (rating === 'again') return 0;
  if (rating === 'hard') return Math.max(1, Math.ceil(stability * 0.8));
  if (rating === 'good') return Math.max(reps <= 1 ? 3 : 1, Math.ceil(stability));
  return Math.max(reps <= 1 ? 7 : 1, Math.ceil(stability * 1.5));
}

export function masteryState(attempts: number, correct: number, incorrect: number, lapses: number): MasteryState {
  if (attempts <= 0) return 'new';
  if (lapses > 0 || incorrect > correct) return 'shaky';
  if (attempts >= 3 && correct >= 3 && incorrect === 0) return 'mastered';
  return 'learning';
}

export function scheduleWholeQuestionReview(
  previous: WholeQuestionReviewInput | null | undefined,
  rating: ReviewRating,
  nowIso = new Date().toISOString(),
): WholeQuestionReviewResult {
  const nowMs = Date.parse(nowIso);
  const safeNowIso = Number.isFinite(nowMs) ? new Date(nowMs).toISOString() : new Date().toISOString();
  const safeNowMs = Date.parse(safeNowIso);
  const previousDifficulty = previous?.fsrsDifficulty ?? null;
  const previousStability = previous?.fsrsStability ?? null;
  const reps = Number(previous?.reviewReps ?? 0) + 1;
  const lapses = Number(previous?.reviewLapses ?? 0) + (rating === 'again' ? 1 : 0);
  const elapsed = elapsedDays(previous?.lastReviewedAt ?? null, safeNowMs);

  const baseDifficulty = previousDifficulty ?? INITIAL_DIFFICULTY[rating];
  const difficultyDelta: Record<ReviewRating, number> = { again: 0.9, hard: 0.35, good: -0.15, easy: -0.45 };
  const difficulty = round(clamp(baseDifficulty + difficultyDelta[rating], 1, 10));

  const baseStability = previousStability ?? INITIAL_STABILITY[rating];
  const stability = rating === 'again'
    ? round(Math.max(0.25, baseStability * 0.45))
    : rating === 'hard'
      ? round(Math.max(1, baseStability * 1.2 + 0.5))
      : rating === 'good'
        ? round(Math.max(3, baseStability * 2.2 + Math.min(elapsed, 7) * 0.15))
        : round(Math.max(7, baseStability * 3.2 + Math.min(elapsed, 14) * 0.2));
  const scheduledDays = scheduledDaysFor(rating, stability, reps);
  const nextReviewAt = new Date(safeNowMs + scheduledDays * MS_PER_DAY).toISOString();
  const remembered = rating !== 'again';
  const attempts = Number(previous?.attemptsCount ?? 0) + 1;
  const correct = Number(previous?.correctCount ?? 0) + (remembered ? 1 : 0);
  const incorrect = Number(previous?.incorrectCount ?? 0) + (remembered ? 0 : 1);

  return {
    attemptsCount: attempts,
    correctCount: correct,
    incorrectCount: incorrect,
    reviewReps: reps,
    reviewLapses: lapses,
    fsrsDifficulty: difficulty,
    fsrsStability: stability,
    scheduledDays,
    elapsedDays: elapsed,
    lastReviewRating: rating,
    lastReviewedAt: safeNowIso,
    lastAttemptAt: safeNowIso,
    lastCorrectAt: remembered ? safeNowIso : (previous?.lastCorrectAt ?? null),
    nextReviewAt,
    masteryState: masteryState(attempts, correct, incorrect, lapses),
    flagged: Boolean(previous?.flagged ?? false),
    previousDifficulty,
    previousStability,
  };
}
