-- Whole-question FSRS-style review foundation.
-- Keeps one review state row per user/question. No microcards are introduced.

alter table public.user_question_state
  add column if not exists review_reps integer not null default 0 check (review_reps >= 0),
  add column if not exists review_lapses integer not null default 0 check (review_lapses >= 0),
  add column if not exists fsrs_difficulty numeric,
  add column if not exists fsrs_stability numeric,
  add column if not exists scheduled_days integer,
  add column if not exists elapsed_days integer,
  add column if not exists last_review_rating text check (
    last_review_rating in ('again', 'hard', 'good', 'easy') or last_review_rating is null
  ),
  add column if not exists last_reviewed_at timestamptz;

create index if not exists user_question_state_due_idx
  on public.user_question_state (user_id, next_review_at);

create index if not exists user_question_state_mastery_idx
  on public.user_question_state (user_id, mastery_state, next_review_at);

create table if not exists public.question_review_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  question_id uuid not null references public.questions(id) on delete cascade,
  rating text not null check (rating in ('again', 'hard', 'good', 'easy')),
  reviewed_at timestamptz not null default now(),
  elapsed_days integer,
  scheduled_days integer,
  previous_difficulty numeric,
  previous_stability numeric,
  new_difficulty numeric,
  new_stability numeric,
  source text not null default 'review' check (source in ('review', 'quiz_result', 'import', 'manual')),
  created_at timestamptz not null default now()
);

alter table public.question_review_events enable row level security;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public'
      and tablename = 'question_review_events'
      and policyname = 'users read own question review events'
  ) then
    create policy "users read own question review events"
      on public.question_review_events
      for select to authenticated
      using (user_id = auth.uid());
  end if;
end $$;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public'
      and tablename = 'question_review_events'
      and policyname = 'users insert own question review events'
  ) then
    create policy "users insert own question review events"
      on public.question_review_events
      for insert to authenticated
      with check (user_id = auth.uid());
  end if;
end $$;

create index if not exists question_review_events_user_time_idx
  on public.question_review_events (user_id, reviewed_at desc);

create index if not exists question_review_events_question_idx
  on public.question_review_events (question_id, reviewed_at desc);
