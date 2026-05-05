// Shared helpers for rendering "last reviewed" recency on the plant overview
// and on system article pages. The bucket thresholds (7d / 30d) are also
// reflected in the plant-overview legend.

export type ReviewBucket = 'fresh' | 'aging' | 'stale' | 'never';

export const REVIEW_BUCKET_COLOR: Record<ReviewBucket, string> = {
  fresh: 'var(--color-mastery-ok)',
  aging: 'var(--color-mastery-mid)',
  stale: 'var(--color-mastery-weak)',
  never: 'var(--color-text-muted)',
};

export const REVIEW_BUCKET_LABEL: Record<ReviewBucket, string> = {
  fresh: 'Reviewed recently',
  aging: 'Review aging',
  stale: 'Review stale',
  never: 'Not reviewed',
};

const DAY_MS = 24 * 60 * 60 * 1000;

export function reviewBucket(lastReviewedAt: string | null | undefined, now = Date.now()): ReviewBucket {
  if (!lastReviewedAt) return 'never';
  const ts = Date.parse(lastReviewedAt);
  if (!Number.isFinite(ts)) return 'never';
  const days = (now - ts) / DAY_MS;
  if (days < 7) return 'fresh';
  if (days < 30) return 'aging';
  return 'stale';
}

export function relativeShort(lastReviewedAt: string | null | undefined, now = Date.now()): string {
  if (!lastReviewedAt) return '—';
  const ts = Date.parse(lastReviewedAt);
  if (!Number.isFinite(ts)) return '—';
  const days = (now - ts) / DAY_MS;
  if (days < 1) return 'today';
  if (days < 7) return `${Math.floor(days)}d`;
  if (days < 30) return `${Math.floor(days / 7)}w`;
  if (days < 365) return `${Math.floor(days / 30)}mo`;
  return `${Math.floor(days / 365)}y`;
}

export function relativeLong(lastReviewedAt: string | null | undefined, now = Date.now()): string {
  if (!lastReviewedAt) return 'Not reviewed yet';
  const ts = Date.parse(lastReviewedAt);
  if (!Number.isFinite(ts)) return 'Not reviewed yet';
  const days = (now - ts) / DAY_MS;
  if (days < 1) return 'Reviewed today';
  if (days < 2) return 'Reviewed 1 day ago';
  if (days < 7) return `Reviewed ${Math.floor(days)} days ago`;
  if (days < 14) return 'Reviewed 1 week ago';
  if (days < 30) return `Reviewed ${Math.floor(days / 7)} weeks ago`;
  if (days < 60) return 'Reviewed 1 month ago';
  if (days < 365) return `Reviewed ${Math.floor(days / 30)} months ago`;
  if (days < 730) return 'Reviewed 1 year ago';
  return `Reviewed ${Math.floor(days / 365)} years ago`;
}
