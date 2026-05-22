-- Align quiz session type constraint with frontend/backend accepted values.

alter table public.quiz_sessions
  drop constraint if exists quiz_sessions_quiz_type_check;

alter table public.quiz_sessions
  add constraint quiz_sessions_quiz_type_check
  check (quiz_type in ('classic', 'custom', 'topic', 'graph', 'review', 'missed', 'weak_area', 'exam_sim', 'global_hard'));
