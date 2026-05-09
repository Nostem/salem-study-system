import type { StructuredQuestion } from '../types/question-blocks';

export type ReferenceMode = 'include' | 'exclude' | 'only';

export interface QuizSessionFilters {
  years?: number[];
  tracks?: string[];
  statuses?: string[];
  topicSlugs?: string[];
  questionSlugs?: string[];
  referenceMode?: ReferenceMode;
  quizEligibleOnly?: boolean;
  count?: number;
}

export interface NormalizedFilters {
  years: number[];
  tracks: string[];
  statuses: string[];
  topicSlugs: string[];
  questionSlugs: string[];
  referenceMode: ReferenceMode;
  quizEligibleOnly: boolean;
  count: number | null;
}

export interface QuizSession {
  schemaVersion: 1;
  sessionId: string;
  seed: string;
  filters: NormalizedFilters;
  questionSlugs: string[];
  totalEligible: number;
  generatedAt?: string;
}

export interface BuildOptions {
  seed?: string;
  now?: () => string;
}

export const DEFAULT_SEED = 'salem-quiz-v2-default';

export function normalizeFilters(filters: QuizSessionFilters = {}): NormalizedFilters {
  const dedupSorted = (arr: readonly string[] | undefined): string[] => {
    if (!arr) return [];
    return [...new Set(arr)].sort();
  };
  const dedupSortedNum = (arr: readonly number[] | undefined): number[] => {
    if (!arr) return [];
    return [...new Set(arr)].sort((a, b) => a - b);
  };
  return {
    years: dedupSortedNum(filters.years),
    tracks: dedupSorted(filters.tracks),
    statuses: dedupSorted(filters.statuses),
    topicSlugs: dedupSorted(filters.topicSlugs),
    questionSlugs: dedupSorted(filters.questionSlugs),
    referenceMode: filters.referenceMode ?? 'include',
    quizEligibleOnly: filters.quizEligibleOnly ?? true,
    count: typeof filters.count === 'number' && filters.count > 0 ? Math.floor(filters.count) : null,
  };
}

function questionTopicSlugs(q: StructuredQuestion): string[] {
  if (!Array.isArray(q.topics)) return [];
  const slugs: string[] = [];
  for (const t of q.topics) {
    if (typeof t === 'string') {
      slugs.push(t);
    } else if (t && typeof t === 'object' && 'slug' in t && typeof (t as { slug: unknown }).slug === 'string') {
      slugs.push((t as { slug: string }).slug);
    }
  }
  return slugs;
}

export function filterQuestions(
  questions: readonly StructuredQuestion[],
  filters: QuizSessionFilters = {}
): StructuredQuestion[] {
  const f = normalizeFilters(filters);
  return questions.filter((q) => {
    if (f.quizEligibleOnly && !q.quizEligible) return false;
    if (f.questionSlugs.length > 0 && !f.questionSlugs.includes(q.slug)) return false;
    if (f.years.length > 0 && !f.years.includes(q.examYear)) return false;
    if (f.tracks.length > 0) {
      const t = q.track ?? '';
      if (!f.tracks.includes(t)) return false;
    }
    if (f.statuses.length > 0 && !f.statuses.includes(q.status)) return false;
    if (f.referenceMode === 'exclude' && q.requiresReference) return false;
    if (f.referenceMode === 'only' && !q.requiresReference) return false;
    if (f.topicSlugs.length > 0) {
      const slugs = questionTopicSlugs(q);
      const hit = f.topicSlugs.some((s) => slugs.includes(s));
      if (!hit) return false;
    }
    return true;
  });
}

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

export function seededShuffle<T>(items: readonly T[], seed: string): T[] {
  const out = [...items];
  const seedFn = xmur3(seed);
  const rand = mulberry32(seedFn());
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function fnv1aHex(str: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, '0');
}

function stableStringify(value: unknown): string {
  if (value === null || typeof value !== 'object') return JSON.stringify(value);
  if (Array.isArray(value)) return '[' + value.map(stableStringify).join(',') + ']';
  const keys = Object.keys(value as Record<string, unknown>).sort();
  const parts = keys.map(
    (k) => JSON.stringify(k) + ':' + stableStringify((value as Record<string, unknown>)[k])
  );
  return '{' + parts.join(',') + '}';
}

export function buildQuizSession(
  questions: readonly StructuredQuestion[],
  filters: QuizSessionFilters = {},
  options: BuildOptions = {}
): QuizSession {
  const seed = options.seed ?? DEFAULT_SEED;
  const normalized = normalizeFilters(filters);
  const eligible = filterQuestions(questions, normalized);
  const sortedSlugs = eligible.map((q) => q.slug).sort();
  const shuffled = seededShuffle(sortedSlugs, seed);
  const limited = normalized.count != null ? shuffled.slice(0, normalized.count) : shuffled;
  const sessionPayload =
    'seed=' + seed +
    '|filters=' + stableStringify(normalized) +
    '|slugs=' + limited.join(',');
  const sessionId = 'qv2-' + fnv1aHex(sessionPayload);
  const session: QuizSession = {
    schemaVersion: 1,
    sessionId,
    seed,
    filters: normalized,
    questionSlugs: limited,
    totalEligible: eligible.length,
  };
  if (options.now) {
    session.generatedAt = options.now();
  }
  return session;
}

export function questionsForSession(
  questions: readonly StructuredQuestion[],
  session: QuizSession
): StructuredQuestion[] {
  const bySlug = new Map(questions.map((q) => [q.slug, q]));
  const out: StructuredQuestion[] = [];
  for (const slug of session.questionSlugs) {
    const q = bySlug.get(slug);
    if (q) out.push(q);
  }
  return out;
}
