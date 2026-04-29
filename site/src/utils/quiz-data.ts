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
  relationshipType?: string;
  topicType?: string | null;
  topic_type?: string | null;
  wikiSlug?: string | null;
};

export type QuizQuestion = {
  slug: string;
  examYear: number;
  examType: string;
  questionNumber: number;
  track?: string | null;
  title?: string | null;
  stemText: string;
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
  const topicType = String(topic.topicType ?? topic.topic_type ?? '').toLowerCase();
  return !['abnormal', 'procedure'].includes(topicType);
}

export function getQuizTopics(bank: QuizBank = quizBank): QuizTopic[] {
  const used = new Set(bank.questions.flatMap((question) => question.topics.map((topic) => topic.slug)));
  const byTitle = new Map<string, QuizTopic>();

  bank.topics
    .filter((topic) => used.has(topic.slug) && isSelectableTopic(topic))
    .sort((a, b) => a.title.localeCompare(b.title) || a.slug.localeCompare(b.slug))
    .forEach((topic) => {
      const existing = byTitle.get(topic.title);
      if (!existing) {
        byTitle.set(topic.title, { ...topic, slugs: [topic.slug] });
        return;
      }
      existing.slugs = [...new Set([...(existing.slugs || [existing.slug]), topic.slug])].sort();
    });

  return [...byTitle.values()].sort((a, b) => a.title.localeCompare(b.title));
}

export function filterQuizQuestions(filters: QuizFilters = {}, bank: QuizBank = quizBank): QuizQuestion[] {
  const includeReferenceRequired = filters.includeReferenceRequired ?? true;
  const includeOutdated = filters.includeOutdated ?? false;
  const includeEdited = filters.includeEdited ?? true;
  const includeDraft = filters.includeDraft ?? true;
  const selectedTopicSlugs = filters.topicSlugs ?? (filters.topicSlug && filters.topicSlug !== 'all' ? [filters.topicSlug] : []);
  const examYear = filters.examYear ?? 'all';

  const questions = bank.questions.filter((question) => {
    if (!isPracticeEligible(question)) return false;
    if (examYear !== 'all' && question.examYear !== examYear) return false;
    if (!includeReferenceRequired && question.requiresReference) return false;
    if (!includeOutdated && question.status === 'outdated') return false;
    if (!includeDraft && question.status === 'draft') return false;
    if (!includeEdited && question.isEdited) return false;
    if (selectedTopicSlugs.length > 0 && !question.topics.some((topic) => selectedTopicSlugs.includes(topic.slug))) return false;
    return true;
  });

  const count = Math.max(1, Math.min(filters.count ?? questions.length, questions.length || 1));
  return questions.slice(0, count);
}

export function buildQuizSummary(filters: QuizFilters = {}, bank: QuizBank = quizBank): string {
  const matches = filterQuizQuestions({ ...filters, count: bank.questions.length }, bank);
  return `${matches.length} eligible questions match current filters`;
}
