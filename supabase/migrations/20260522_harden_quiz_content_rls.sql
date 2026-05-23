-- Harden learner-visible quiz/source content reads.
-- Keeps reviewer/admin management visibility while preventing ordinary learners
-- from reading redacted, draft, outdated, retired, conflict, or otherwise
-- non-quiz-eligible content through direct Supabase table APIs.

create or replace function public.is_learner_safe_question(question_row public.questions)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select
    question_row.status = 'active'
    and question_row.quiz_eligible is true
    and question_row.is_redacted is false
$$;

-- Replace the broad bootstrap read policies with learner-safe predicates.
drop policy if exists "authenticated read sources" on public.sources;
drop policy if exists "authenticated read questions" on public.questions;
drop policy if exists "authenticated read choices" on public.choices;
drop policy if exists "authenticated read question references" on public.question_references;
drop policy if exists "authenticated read question topics" on public.question_topics;

create policy "authenticated read sources" on public.sources
for select to authenticated
using (
  public.current_role() in ('reviewer', 'admin')
  or exists (
    select 1
    from public.question_references qr
    join public.questions q on q.id = qr.question_id
    where qr.source_id = sources.id
      and public.is_learner_safe_question(q)
  )
);

create policy "authenticated read questions" on public.questions
for select to authenticated
using (
  public.current_role() in ('reviewer', 'admin')
  or public.is_learner_safe_question(questions)
);

create policy "authenticated read choices" on public.choices
for select to authenticated
using (
  public.current_role() in ('reviewer', 'admin')
  or exists (
    select 1
    from public.questions q
    where q.id = question_id
      and public.is_learner_safe_question(q)
  )
);

create policy "authenticated read question references" on public.question_references
for select to authenticated
using (
  public.current_role() in ('reviewer', 'admin')
  or exists (
    select 1
    from public.questions q
    where q.id = question_id
      and public.is_learner_safe_question(q)
  )
);

create policy "authenticated read question topics" on public.question_topics
for select to authenticated
using (
  public.current_role() in ('reviewer', 'admin')
  or exists (
    select 1
    from public.questions q
    where q.id = question_id
      and public.is_learner_safe_question(q)
  )
);
