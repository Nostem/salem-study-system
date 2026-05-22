-- Harden direct learner access to quiz/progress write tables.
-- Service-role Edge Functions remain the write path after authenticating the
-- learner JWT; ordinary authenticated clients retain own-progress reads only.

-- Remove broad learner write policies from the bootstrap schema.
drop policy if exists "users manage own quiz sessions" on public.quiz_sessions;
drop policy if exists "users read own quiz session questions" on public.quiz_session_questions;
drop policy if exists "users insert own quiz session questions" on public.quiz_session_questions;
drop policy if exists "users insert own attempts" on public.question_attempts;
drop policy if exists "users read own attempts" on public.question_attempts;
drop policy if exists "users manage own state" on public.user_question_state;

-- Preserve own-progress reads and admin visibility. No insert/update/delete
-- policies are recreated for ordinary authenticated clients.
create policy "users read own quiz sessions" on public.quiz_sessions
for select to authenticated
using (user_id = auth.uid() or public.current_role() = 'admin');

create policy "users read own quiz session questions" on public.quiz_session_questions
for select to authenticated
using (
  exists (
    select 1
    from public.quiz_sessions s
    where s.id = quiz_session_id
      and (s.user_id = auth.uid() or public.current_role() = 'admin')
  )
);

create policy "users read own attempts" on public.question_attempts
for select to authenticated
using (user_id = auth.uid() or public.current_role() = 'admin');

create policy "users read own state" on public.user_question_state
for select to authenticated
using (user_id = auth.uid() or public.current_role() = 'admin');

-- Defense-in-depth: if any future write path inserts question_attempts rows,
-- selected_choice_id must belong to the same question_id. Null selected choices
-- remain valid for unanswered/early-finish attempts.
create or replace function public.ensure_attempt_choice_matches_question()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  if new.selected_choice_id is null then
    return new;
  end if;

  if not exists (
    select 1
    from public.choices c
    where c.id = new.selected_choice_id
      and c.question_id = new.question_id
  ) then
    raise exception 'selected_choice_id does not belong to question_id'
      using errcode = '23514';
  end if;

  return new;
end;
$$;

drop trigger if exists question_attempts_choice_question_guard on public.question_attempts;
create trigger question_attempts_choice_question_guard
before insert or update on public.question_attempts
for each row
execute function public.ensure_attempt_choice_matches_question();
