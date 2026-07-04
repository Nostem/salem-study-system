-- quiz-history edge function lists a user's completed sessions ordered by
-- completed_at desc (limit 50); without this index that is a full scan of
-- quiz_sessions per request.
create index if not exists quiz_sessions_user_completed_idx
  on public.quiz_sessions (user_id, completed_at desc)
  where completed_at is not null;

-- Touched on 2026-07-04: never applied to the live DB; applied via the
-- push-triggered db-migrate workflow.

-- Touched on 2026-07-04: never applied to the live DB; applied via the
-- push-triggered db-migrate workflow.
