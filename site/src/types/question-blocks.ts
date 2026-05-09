export type QuestionBlock =
  | ParagraphBlock
  | ImageBlock
  | TableBlock
  | ListBlock
  | CodeBlock;

export interface ParagraphBlock {
  type: 'paragraph';
  text: string;
}

export interface ImageBlock {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
}

export interface TableBlock {
  type: 'table';
  headers: string[];
  rows: string[][];
}

export interface ListBlock {
  type: 'list';
  items: string[];
}

export interface CodeBlock {
  type: 'code';
  text: string;
}

export interface StructuredChoice {
  label: 'A' | 'B' | 'C' | 'D' | string;
  blocks: QuestionBlock[];
  isCorrect: boolean;
}

export interface SourceRef {
  kind: 'wiki' | 'quiz-bank' | 'source' | string;
  path?: string;
  slug?: string;
  label?: string;
}

export interface StructuredQuestion {
  schemaVersion: 1;
  slug: string;
  examYear: number;
  examType: string;
  questionNumber: number;
  track?: string;
  title: string;
  status: string;
  quizEligible: boolean;
  requiresReference: boolean;
  officialAnswerLabel: string;
  acceptedAnswerLabels: string[];
  stemBlocks: QuestionBlock[];
  choices: StructuredChoice[];
  explanationBlocks: QuestionBlock[];
  topics: unknown[];
  sourceRefs: SourceRef[];
  legacy: {
    stemText?: string;
    stemHtml?: string;
    explanationText?: string;
    explanationHtml?: string;
    wikiPath?: string;
    kaCode?: string;
    kaImportance?: number;
    cognitiveLevel?: string;
    tierGroup?: string;
    questionSource?: string;
    auditStatus?: string;
    nonQuizReason?: string;
    isEdited?: boolean;
    isRedacted?: boolean;
  };
}

export interface StructuredQuizBank {
  schemaVersion: 1;
  generatedFrom: string;
  summary: Record<string, unknown>;
  topics: unknown[];
  questions: StructuredQuestion[];
}
