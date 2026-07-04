import type { APIRoute } from 'astro';
import { quizBank } from '../../utils/quiz-data';

// Slim client bank for /quiz/. The full quiz-bank.json was inlined into the
// page HTML (~5.4 MB per visit, parsed on the main thread before first
// render). This endpoint emits only the fields the Quick Quiz client reads,
// as a separately-cacheable static asset fetched at runtime.
export const GET: APIRoute = () => {
  const questions = quizBank.questions.map((question) => ({
    slug: question.slug,
    examYear: question.examYear,
    questionNumber: question.questionNumber,
    track: question.track,
    status: question.status,
    isEdited: question.isEdited,
    isRedacted: question.isRedacted,
    quizEligible: question.quizEligible,
    requiresReference: question.requiresReference,
    acceptedAnswerLabels: question.acceptedAnswerLabels,
    stemText: question.stemText,
    stemHtml: question.stemHtml,
    explanationText: question.explanationText,
    explanationHtml: question.explanationHtml,
    topics: (question.topics ?? []).map((topic) => ({ slug: topic.slug })),
    choices: (question.choices ?? []).map((choice) => ({
      label: choice.label,
      text: choice.text,
    })),
  }));

  return new Response(JSON.stringify({ questions }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
