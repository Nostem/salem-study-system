-- Atomic write path for submit-quiz-results.
--
-- The edge function previously ran update/delete/insert/upsert as ~5 separate
-- statements; on a re-submission the prior snapshots/attempts were deleted
-- before the new rows were inserted, so a mid-way failure left the session
-- half-written with the prior good data already gone. This RPC wraps the
-- destructive sequence in one transaction. The function still computes all
-- rows (snapshots, attempts, reconciled learner state) — this only replaces
-- the write phase.
create or replace function public.replace_quiz_session_writes(
  p_user_id uuid,
  p_session_id uuid,
  p_snapshots jsonb,
  p_attempts jsonb,
  p_states jsonb
) returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if not exists (
    select 1 from public.quiz_sessions s
    where s.id = p_session_id and s.user_id = p_user_id
  ) then
    raise exception 'quiz session % not found for user', p_session_id;
  end if;

  delete from public.quiz_session_questions
  where quiz_session_id = p_session_id;

  insert into public.quiz_session_questions (quiz_session_id, question_id, position, choice_order, question_snapshot)
  select
    p_session_id,
    (r->>'question_id')::uuid,
    (r->>'position')::integer,
    nullif(r->'choice_order', 'null'::jsonb),
    r->'question_snapshot'
  from jsonb_array_elements(coalesce(p_snapshots, '[]'::jsonb)) as r;

  delete from public.question_attempts
  where quiz_session_id = p_session_id and user_id = p_user_id;

  insert into public.question_attempts (user_id, quiz_session_id, question_id, selected_choice_id, is_correct, time_ms, submitted_at)
  select
    p_user_id,
    p_session_id,
    (r->>'question_id')::uuid,
    (r->>'selected_choice_id')::uuid,
    (r->>'is_correct')::boolean,
    (r->>'time_ms')::integer,
    (r->>'submitted_at')::timestamptz
  from jsonb_array_elements(coalesce(p_attempts, '[]'::jsonb)) as r;

  -- Quiz-path state upsert. FSRS columns (review_reps, fsrs_*, scheduled/
  -- elapsed days, last_review_*) are deliberately not touched here — the
  -- review flow owns them.
  insert into public.user_question_state (
    user_id, question_id, attempts_count, correct_count, incorrect_count,
    last_attempt_at, last_correct_at, flagged, mastery_state, next_review_at, updated_at
  )
  select
    p_user_id,
    (r->>'question_id')::uuid,
    (r->>'attempts_count')::integer,
    (r->>'correct_count')::integer,
    (r->>'incorrect_count')::integer,
    (r->>'last_attempt_at')::timestamptz,
    (r->>'last_correct_at')::timestamptz,
    (r->>'flagged')::boolean,
    r->>'mastery_state',
    (r->>'next_review_at')::timestamptz,
    (r->>'updated_at')::timestamptz
  from jsonb_array_elements(coalesce(p_states, '[]'::jsonb)) as r
  on conflict (user_id, question_id) do update set
    attempts_count = excluded.attempts_count,
    correct_count = excluded.correct_count,
    incorrect_count = excluded.incorrect_count,
    last_attempt_at = excluded.last_attempt_at,
    last_correct_at = excluded.last_correct_at,
    flagged = excluded.flagged,
    mastery_state = excluded.mastery_state,
    next_review_at = excluded.next_review_at,
    updated_at = excluded.updated_at;
end;
$$;

revoke execute on function public.replace_quiz_session_writes(uuid, uuid, jsonb, jsonb, jsonb) from public;
revoke execute on function public.replace_quiz_session_writes(uuid, uuid, jsonb, jsonb, jsonb) from anon;
revoke execute on function public.replace_quiz_session_writes(uuid, uuid, jsonb, jsonb, jsonb) from authenticated;

-- The auth_rate_limit trim trigger deletes on a bare attempted_at predicate;
-- the existing (scope, key_hash, attempted_at) index cannot serve it, so every
-- login/signup insert sequential-scanned the ledger.
create index if not exists auth_rate_limit_attempted_at_idx
  on public.auth_rate_limit (attempted_at);
