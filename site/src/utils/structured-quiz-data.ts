import quizBankV2Json from '../data/quiz-bank-v2.json';
import type { StructuredQuestion, StructuredQuizBank } from '../types/question-blocks';

export const structuredQuizBank = quizBankV2Json as unknown as StructuredQuizBank;

export function getStructuredQuestions(
  bank: StructuredQuizBank = structuredQuizBank
): StructuredQuestion[] {
  return [...bank.questions].sort((a, b) => {
    if (a.examYear !== b.examYear) return b.examYear - a.examYear;
    if (a.examType !== b.examType) return a.examType.localeCompare(b.examType);
    return a.questionNumber - b.questionNumber;
  });
}

export function getStructuredExamYears(
  bank: StructuredQuizBank = structuredQuizBank
): number[] {
  return [...new Set(bank.questions.map((q) => q.examYear))].sort((a, b) => b - a);
}

export function findStructuredQuestion(
  slug: string,
  bank: StructuredQuizBank = structuredQuizBank
): StructuredQuestion | undefined {
  return bank.questions.find((q) => q.slug === slug);
}

export function questionDisplayLabel(question: StructuredQuestion): string {
  const track = question.track ? ` ${question.track}` : '';
  return `${question.examYear}${track} Q${question.questionNumber}`;
}
