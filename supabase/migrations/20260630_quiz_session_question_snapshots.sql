-- Preserve the question/answer state shown to a learner at quiz completion.
-- quiz-history falls back to current question rows for older sessions, but new
-- submissions write immutable display/answer metadata here so later edits to
-- the question bank do not rewrite historical review screens.
alter table public.quiz_session_questions
  add column if not exists question_snapshot jsonb not null default '{}'::jsonb;
