import type { StructuredQuestion } from '../types/question-blocks';
import type { ReviewStateBySlug } from './quiz-v2-review.ts';
import { buildWholeQuestionReviewQueue } from './quiz-v2-review.ts';

export interface ReviewProgressTopicStat {
  slug: string;
  title: string;
  totalEligible: number;
  reviewedCount: number;
  dueCount: number;
  totalAttempts: number;
}

export interface ReviewProgressAnalytics {
  schemaVersion: 1;
  generatedAt: string;
  totalEligible: number;
  reviewedQuestions: number;
  unreviewedQuestions: number;
  dueNow: number;
  scheduledLater: number;
  totalReviewAttempts: number;
  successfulLatestRatings: number;
  latestRatingSuccessRate: number | null;
  averageIntervalDays: number | null;
  ratingCounts: Record<'again' | 'hard' | 'good' | 'easy', number>;
  topicStats: ReviewProgressTopicStat[];
}

interface TopicInfo {
  slug: string;
  title: string;
}

function topicInfo(topic: unknown): TopicInfo | null {
  if (typeof topic === 'string' && topic.trim()) return { slug: topic, title: topic };
  if (!topic || typeof topic !== 'object') return null;
  const record = topic as Record<string, unknown>;
  const slug = typeof record.slug === 'string' ? record.slug : '';
  if (!slug) return null;
  const title = typeof record.title === 'string' && record.title.trim() ? record.title : slug;
  return { slug, title };
}

function roundRate(numerator: number, denominator: number): number | null {
  if (denominator <= 0) return null;
  return Math.round((numerator / denominator) * 1000) / 1000;
}

export function buildReviewProgressAnalytics(
  questions: readonly StructuredQuestion[],
  states: ReviewStateBySlug = {},
  nowIso = new Date().toISOString()
): ReviewProgressAnalytics {
  const queue = buildWholeQuestionReviewQueue(questions, states, {}, nowIso);
  const stateEntries = Object.values(states).filter((s) => questions.some((q) => q.slug === s.slug));
  const reviewedSlugs = new Set(stateEntries.map((s) => s.slug));
  const dueSlugs = new Set(queue.items.filter((item) => item.status === 'due').map((item) => item.slug));

  const ratingCounts = { again: 0, hard: 0, good: 0, easy: 0 };
  let totalReviewAttempts = 0;
  let successfulLatestRatings = 0;
  let intervalSum = 0;

  for (const state of stateEntries) {
    ratingCounts[state.lastRating] += 1;
    totalReviewAttempts += state.attempts;
    if (state.lastRating !== 'again') successfulLatestRatings += 1;
    intervalSum += state.intervalDays;
  }

  const topicMap = new Map<string, ReviewProgressTopicStat>();
  for (const question of questions) {
    const state = states[question.slug];
    for (const topic of question.topics ?? []) {
      const info = topicInfo(topic);
      if (!info) continue;
      const stat = topicMap.get(info.slug) ?? {
        slug: info.slug,
        title: info.title,
        totalEligible: 0,
        reviewedCount: 0,
        dueCount: 0,
        totalAttempts: 0,
      };
      stat.totalEligible += 1;
      if (reviewedSlugs.has(question.slug)) stat.reviewedCount += 1;
      if (dueSlugs.has(question.slug)) stat.dueCount += 1;
      stat.totalAttempts += state?.attempts ?? 0;
      topicMap.set(info.slug, stat);
    }
  }

  const topicStats = [...topicMap.values()].sort((a, b) => {
    if (b.dueCount !== a.dueCount) return b.dueCount - a.dueCount;
    if (b.totalAttempts !== a.totalAttempts) return b.totalAttempts - a.totalAttempts;
    if (b.reviewedCount !== a.reviewedCount) return b.reviewedCount - a.reviewedCount;
    return a.title.localeCompare(b.title);
  });

  return {
    schemaVersion: 1,
    generatedAt: queue.generatedAt,
    totalEligible: queue.summary.totalEligible,
    reviewedQuestions: reviewedSlugs.size,
    unreviewedQuestions: Math.max(0, queue.summary.totalEligible - reviewedSlugs.size),
    dueNow: queue.summary.dueCount,
    scheduledLater: queue.summary.laterCount,
    totalReviewAttempts,
    successfulLatestRatings,
    latestRatingSuccessRate: roundRate(successfulLatestRatings, stateEntries.length),
    averageIntervalDays: stateEntries.length > 0 ? Math.round((intervalSum / stateEntries.length) * 10) / 10 : null,
    ratingCounts,
    topicStats,
  };
}
