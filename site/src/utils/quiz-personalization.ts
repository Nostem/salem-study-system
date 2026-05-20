export type QuizPersonalizationState = {
  attemptsCount?: number | null;
  correctCount?: number | null;
  incorrectCount?: number | null;
  masteryState?: string | null;
  nextReviewAt?: string | null;
};

export type QuestionLike = {
  slug: string;
};

export type QuizPersonalizationStates = Record<string, QuizPersonalizationState | undefined>;

export type QuizPersonalizationOptions = {
  seed: string | number;
  now?: string | number | Date;
};

function xmur3(str: string): () => number {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return () => {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return h >>> 0;
  };
}

function mulberry32(seedInt: number): () => number {
  let a = seedInt >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededRandomRank(seed: string | number, slug: string): number {
  return mulberry32(xmur3(`${seed}:${slug}`)())();
}

function numeric(value: unknown): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : 0;
}

function isDue(state: QuizPersonalizationState | undefined, nowMs: number): boolean {
  if (!state?.nextReviewAt) return false;
  const dueMs = Date.parse(state.nextReviewAt);
  return Number.isFinite(dueMs) && dueMs <= nowMs;
}

function priorityBucket(state: QuizPersonalizationState | undefined, nowMs: number): number {
  const attempts = numeric(state?.attemptsCount);
  const correct = numeric(state?.correctCount);
  const incorrect = numeric(state?.incorrectCount);
  const mastery = String(state?.masteryState ?? '').toLowerCase();

  if (!state || attempts <= 0) return 0; // unseen
  if (isDue(state, nowMs) || mastery === 'shaky') return 1; // due / shaky review
  if (incorrect > 0 && incorrect >= correct) return 2; // previously missed, not due yet
  if (mastery === 'learning') return 3;
  if (mastery === 'mastered') return 5;
  return 4;
}

function nowToMs(now: QuizPersonalizationOptions['now']): number {
  if (now instanceof Date) return now.getTime();
  if (typeof now === 'number') return now;
  if (typeof now === 'string') {
    const parsed = Date.parse(now);
    if (Number.isFinite(parsed)) return parsed;
  }
  return Date.now();
}

export function personalizeQuestionOrder<T extends QuestionLike>(
  questions: readonly T[],
  states: QuizPersonalizationStates | null | undefined,
  options: QuizPersonalizationOptions,
): T[] {
  const nowMs = nowToMs(options.now);
  return questions
    .map((question) => {
      const state = states?.[question.slug];
      return {
        question,
        bucket: priorityBucket(state, nowMs),
        attempts: numeric(state?.attemptsCount),
        randomRank: seededRandomRank(options.seed, question.slug),
      };
    })
    .sort((a, b) => {
      if (a.bucket !== b.bucket) return a.bucket - b.bucket;
      if (a.attempts !== b.attempts) return a.attempts - b.attempts;
      return a.randomRank - b.randomRank;
    })
    .map((entry) => entry.question);
}
