import quizBankJson from '../data/quiz-bank.json';

export type QuizChoice = {
  label: string;
  text: string;
  html: string;
  isCorrect: boolean;
};

export type QuizTopic = {
  slug: string;
  title: string;
  slugs?: string[];
  count?: number;
  relationshipType?: string;
  topicType?: string | null;
  topic_type?: string | null;
  wikiSlug?: string | null;
};

export type QuizTopicGroupKey = 'primary' | 'techSpecs' | 'eops' | 'abnormals' | 'procedures' | 'other';
export type QuizTopicGroups = Record<QuizTopicGroupKey, QuizTopic[]>;

export type QuizQuestion = {
  slug: string;
  examYear: number;
  examType: string;
  questionNumber: number;
  track?: string | null;
  title?: string | null;
  stemText: string;
  stemHtml?: string;
  officialAnswerLabel?: string | null;
  acceptedAnswerLabels: string[];
  status?: string | null;
  isEdited: boolean;
  isRedacted: boolean;
  quizEligible: boolean;
  nonQuizReason?: string | null;
  requiresReference: boolean;
  questionSource?: string | null;
  cognitiveLevel?: string | null;
  kaCode?: string | null;
  kaImportance?: number | null;
  tierGroup?: string | null;
  wikiPath?: string | null;
  auditStatus?: string | null;
  explanationHtml?: string;
  explanationText?: string;
  choices: QuizChoice[];
  topics: QuizTopic[];
};

export type QuizBank = {
  generatedFrom: string;
  summary: {
    question_count: number;
    choice_count: number;
    topic_count: number;
    question_topic_count: number;
    reference_count: number;
    source_count: number;
    exam_years: number[];
  };
  questions: QuizQuestion[];
  topics: QuizTopic[];
};

export type QuizFilters = {
  examYear?: number | 'all';
  topicSlug?: string | 'all';
  topicSlugs?: string[];
  topicGroups?: Partial<Record<QuizTopicGroupKey | string, string[]>>;
  includeReferenceRequired?: boolean;
  includeOutdated?: boolean;
  includeEdited?: boolean;
  includeDraft?: boolean;
  count?: number;
};

export const quizBank = quizBankJson as QuizBank;

export function isPracticeEligible(question: QuizQuestion): boolean {
  if (question.quizEligible) return true;
  if (question.isRedacted) return false;
  return question.choices.length >= 2 && question.acceptedAnswerLabels.length > 0;
}

export function getExamYears(bank: QuizBank = quizBank): number[] {
  return [...new Set(bank.questions.map((question) => question.examYear))].sort((a, b) => b - a);
}

function isSelectableTopic(topic: QuizTopic): boolean {
  return quizTopicGroup(topic) !== 'other';
}

function topicType(topic: QuizTopic): string {
  return String(topic.topicType ?? topic.topic_type ?? '').toLowerCase();
}

function isProcedureLikeTopic(topic: QuizTopic): boolean {
  const type = topicType(topic);
  const slug = topic.slug.toLowerCase();
  const title = topic.title.toLowerCase();
  return ['procedure'].includes(type)
    || slug.startsWith('ab-')
    || slug.startsWith('op-')
    || slug.startsWith('ad-')
    || slug.startsWith('cc-aa-')
    || slug.startsWith('ep-sa-')
    || slug.startsWith('hu-aa-')
    || slug.startsWith('nc-ep-')
    || slug.startsWith('rp-aa-')
    || slug.startsWith('sa-aa-')
    || slug.startsWith('s2-op-')
    || title.startsWith('ab.')
    || title.startsWith('s2.op')
    || title.startsWith('op-aa')
    || title.startsWith('hu-aa')
    || title.startsWith('rp-aa');
}

function quizTopicGroup(topic: QuizTopic): QuizTopicGroupKey {
  const type = topicType(topic);
  if (type === 'tech_spec' || topic.slug.startsWith('ts-')) return 'techSpecs';
  if (type === 'eop' || topic.slug.startsWith('eop-')) return 'eops';
  if (type === 'abnormal' || topic.slug.startsWith('ab-') || topic.title.toLowerCase().startsWith('ab.')) return 'abnormals';
  if (type === 'admin' && topic.slug !== 'admin') return 'procedures';
  if (isProcedureLikeTopic(topic)) return 'procedures';
  if (type === 'system' || type === 'admin' || type === '') return 'primary';
  return 'other';
}

function topicQuestionSets(bank: QuizBank): Map<string, Set<string>> {
  const counts = new Map<string, Set<string>>();
  for (const question of bank.questions) {
    if (!isPracticeEligible(question) || question.status === 'outdated') continue;
    for (const topic of question.topics) {
      const topicSet = counts.get(topic.slug) ?? new Set<string>();
      topicSet.add(question.slug);
      counts.set(topic.slug, topicSet);
    }
  }
  return counts;
}

function mergeTopicsByTitle(topics: QuizTopic[], questionSets: Map<string, Set<string>> = new Map()): QuizTopic[] {
  const byTitle = new Map<string, QuizTopic>();
  const titleQuestionSets = new Map<string, Set<string>>();
  topics
    .sort((a, b) => a.title.localeCompare(b.title) || a.slug.localeCompare(b.slug))
    .forEach((topic) => {
      const titleSet = titleQuestionSets.get(topic.title) ?? new Set<string>();
      for (const questionSlug of questionSets.get(topic.slug) ?? []) titleSet.add(questionSlug);
      titleQuestionSets.set(topic.title, titleSet);
      const existing = byTitle.get(topic.title);
      if (!existing) {
        byTitle.set(topic.title, { ...topic, slugs: [topic.slug], count: titleSet.size });
        return;
      }
      existing.slugs = [...new Set([...(existing.slugs || [existing.slug]), topic.slug])].sort();
      existing.count = titleSet.size;
    });
  return [...byTitle.values()].sort((a, b) => a.title.localeCompare(b.title));
}

export function getQuizTopics(bank: QuizBank = quizBank): QuizTopic[] {
  const used = new Set(bank.questions.flatMap((question) => question.topics.map((topic) => topic.slug)));
  return mergeTopicsByTitle(bank.topics.filter((topic) => used.has(topic.slug) && isSelectableTopic(topic)), topicQuestionSets(bank));
}

export function getQuizTopicGroups(bank: QuizBank = quizBank): QuizTopicGroups {
  const used = new Set(bank.questions.flatMap((question) => question.topics.map((topic) => topic.slug)));
  const questionSets = topicQuestionSets(bank);
  const grouped: QuizTopicGroups = {
    primary: [],
    techSpecs: [],
    eops: [],
    abnormals: [],
    procedures: [],
    other: [],
  };
  for (const topic of bank.topics) {
    if (!used.has(topic.slug)) continue;
    grouped[quizTopicGroup(topic)].push(topic);
  }
  return {
    primary: mergeTopicsByTitle(grouped.primary, questionSets),
    techSpecs: mergeTopicsByTitle(grouped.techSpecs, questionSets),
    eops: mergeTopicsByTitle(grouped.eops, questionSets),
    abnormals: mergeTopicsByTitle(grouped.abnormals, questionSets),
    procedures: mergeTopicsByTitle(grouped.procedures, questionSets),
    other: mergeTopicsByTitle(grouped.other, questionSets),
  };
}

export function filterQuizQuestions(filters: QuizFilters = {}, bank: QuizBank = quizBank): QuizQuestion[] {
  const includeReferenceRequired = filters.includeReferenceRequired ?? true;
  const includeOutdated = filters.includeOutdated ?? false;
  const includeEdited = filters.includeEdited ?? true;
  const includeDraft = filters.includeDraft ?? true;
  const selectedTopicGroups = Object.values(filters.topicGroups ?? {}).filter((slugs): slugs is string[] => Array.isArray(slugs) && slugs.length > 0);
  const selectedTopicSlugs = filters.topicSlugs ?? (filters.topicSlug && filters.topicSlug !== 'all' ? [filters.topicSlug] : []);
  const examYear = filters.examYear ?? 'all';

  const questions = bank.questions.filter((question) => {
    if (!isPracticeEligible(question)) return false;
    if (examYear !== 'all' && question.examYear !== examYear) return false;
    if (!includeReferenceRequired && question.requiresReference) return false;
    if (!includeOutdated && question.status === 'outdated') return false;
    if (!includeDraft && question.status === 'draft') return false;
    if (!includeEdited && question.isEdited) return false;
    const questionTopicSlugs = new Set(question.topics.map((topic) => topic.slug));
    if (selectedTopicGroups.length > 0) {
      if (!selectedTopicGroups.every((slugs) => slugs.some((slug) => questionTopicSlugs.has(slug)))) return false;
    } else if (selectedTopicSlugs.length > 0 && !selectedTopicSlugs.some((slug) => questionTopicSlugs.has(slug))) return false;
    return true;
  });

  const count = Math.max(1, Math.min(filters.count ?? questions.length, questions.length || 1));
  return questions.slice(0, count);
}

export function buildQuizSummary(filters: QuizFilters = {}, bank: QuizBank = quizBank): string {
  const matches = filterQuizQuestions({ ...filters, count: bank.questions.length }, bank);
  return `${matches.length} eligible questions match current filters`;
}
