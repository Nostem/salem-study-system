import type { StructuredQuestion } from '../types/question-blocks';
import { filterQuestions, type QuizSessionFilters } from './quiz-v2-session.ts';

export type ReviewRating = 'again' | 'hard' | 'good' | 'easy';

export interface ReviewQuestionState {
  slug: string;
  attempts: number;
  correctStreak: number;
  intervalDays: number;
  lastRating: ReviewRating;
  lastReviewedAt: string;
  nextReviewAt: string;
}

export type ReviewStateBySlug = Record<string, ReviewQuestionState>;

export interface ReviewQueueItem {
  slug: string;
  status: 'new' | 'due' | 'later';
  nextReviewAt: string | null;
}

export interface ReviewQueueSummary {
  totalEligible: number;
  newCount: number;
  dueCount: number;
  laterCount: number;
  reviewedCount: number;
}

export interface ReviewQueue {
  schemaVersion: 1;
  generatedAt: string;
  items: ReviewQueueItem[];
  summary: ReviewQueueSummary;
}

const MS_PER_DAY = 24 * 60 * 60 * 1000;

function parseTime(value: string | null | undefined): number | null {
  if (!value) return null;
  const ts = Date.parse(value);
  return Number.isFinite(ts) ? ts : null;
}

function addDays(nowMs: number, days: number): string {
  return new Date(nowMs + days * MS_PER_DAY).toISOString();
}

export function nextIntervalDays(previous: number, rating: ReviewRating): number {
  if (rating === 'again') return 0;
  if (rating === 'hard') return Math.max(1, Math.ceil(previous * 1.2));
  if (rating === 'good') return Math.max(3, Math.ceil(previous * 2.5));
  return Math.max(7, Math.ceil(previous * 4));
}

export function updateReviewState(
  previous: ReviewQuestionState | undefined,
  slug: string,
  rating: ReviewRating,
  nowIso = new Date().toISOString()
): ReviewQuestionState {
  const nowMs = Date.parse(nowIso);
  const safeNowMs = Number.isFinite(nowMs) ? nowMs : Date.now();
  const intervalDays = nextIntervalDays(previous?.intervalDays ?? 0, rating);
  const success = rating !== 'again';
  return {
    slug,
    attempts: (previous?.attempts ?? 0) + 1,
    correctStreak: success ? (previous?.correctStreak ?? 0) + 1 : 0,
    intervalDays,
    lastRating: rating,
    lastReviewedAt: new Date(safeNowMs).toISOString(),
    nextReviewAt: addDays(safeNowMs, intervalDays),
  };
}

export function buildWholeQuestionReviewQueue(
  questions: readonly StructuredQuestion[],
  states: ReviewStateBySlug = {},
  filters: QuizSessionFilters = {},
  nowIso = new Date().toISOString()
): ReviewQueue {
  const nowMs = parseTime(nowIso) ?? Date.now();
  const eligible = filterQuestions(questions, { ...filters, quizEligibleOnly: filters.quizEligibleOnly ?? false });
  const items: ReviewQueueItem[] = eligible.map((q) => {
    const state = states[q.slug];
    if (!state) return { slug: q.slug, status: 'new', nextReviewAt: null };
    const dueMs = parseTime(state.nextReviewAt);
    const status = dueMs == null || dueMs <= nowMs ? 'due' : 'later';
    return { slug: q.slug, status, nextReviewAt: state.nextReviewAt };
  });

  items.sort((a, b) => {
    const rank = { due: 0, new: 1, later: 2 } as const;
    if (rank[a.status] !== rank[b.status]) return rank[a.status] - rank[b.status];
    if (a.status === 'later' && b.status === 'later') {
      return (parseTime(a.nextReviewAt) ?? 0) - (parseTime(b.nextReviewAt) ?? 0);
    }
    return a.slug.localeCompare(b.slug);
  });

  const newCount = items.filter((item) => item.status === 'new').length;
  const dueCount = items.filter((item) => item.status === 'due').length;
  const laterCount = items.filter((item) => item.status === 'later').length;
  return {
    schemaVersion: 1,
    generatedAt: new Date(nowMs).toISOString(),
    items,
    summary: {
      totalEligible: eligible.length,
      newCount,
      dueCount,
      laterCount,
      reviewedCount: Object.keys(states).length,
    },
  };
}
