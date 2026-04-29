-- Salem Study System quiz/database MVP schema
-- Designed for Supabase Postgres with invite-only beta, per-user progress,
-- source-traceable question records, and aggregate anonymous analytics.

create extension if not exists pgcrypto;

-- Profiles extend auth.users. Keep learner data private through RLS.
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  role text not null default 'learner' check (role in ('learner', 'reviewer', 'admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.invites (
  id uuid primary key default gen_random_uuid(),
  email text,
  code text not null unique,
  invited_by uuid references public.profiles(id),
  accepted_by uuid references public.profiles(id),
  max_uses integer not null default 1 check (max_uses > 0),
  uses_count integer not null default 0 check (uses_count >= 0),
  expires_at timestamptz,
  created_at timestamptz not null default now(),
  accepted_at timestamptz,
  check (uses_count <= max_uses)
);

create table if not exists public.sources (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  source_type text not null check (source_type in ('nrc_exam', 'answer_key', 'operating_test', 'ufsar', 'tech_spec', 'nureg', 'doe_handbook', 'wiki', 'other')),
  ml_number text,
  url text,
  local_path text,
  exam_year integer,
  docket text,
  public_access boolean not null default true,
  created_at timestamptz not null default now(),
  unique (source_type, exam_year, title)
);

create table if not exists public.topics (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  topic_type text not null check (topic_type in ('system', 'tech_spec', 'eop', 'abnormal', 'procedure', 'admin', 'concept', 'ka', 'exam', 'other')),
  wiki_slug text,
  parent_id uuid references public.topics(id),
  created_at timestamptz not null default now()
);

create table if not exists public.questions (
  id uuid primary key default gen_random_uuid(),
  source_id uuid references public.sources(id),

  exam_year integer not null,
  exam_type text not null default 'written' check (exam_type in ('written', 'operating', 'jpm', 'scenario', 'gfe')),
  question_number integer not null,
  track text check (track in ('RO', 'SRO', 'GFE')),
  title text not null,
  slug text not null unique,

  stem_html text,
  stem_text text,
  official_answer_label text check (official_answer_label in ('A', 'B', 'C', 'D') or official_answer_label is null),
  accepted_answer_labels text[] not null default '{}'::text[],
  explanation_html text,
  explanation_text text,

  status text not null default 'active' check (status in ('active', 'draft', 'outdated', 'needs_review', 'retired', 'conflict')),
  is_edited boolean not null default false,
  is_redacted boolean not null default false,
  quiz_eligible boolean not null default true,
  non_quiz_reason text check (non_quiz_reason in ('security_redacted', 'status_draft', 'status_outdated', 'status_needs_review', 'status_conflict', 'status_retired', 'invalid_choice_count', 'missing_markdown') or non_quiz_reason is null),
  edit_note text,
  requires_reference boolean,
  reference_type text check (reference_type in ('none', 'tech_spec', 'procedure', 'eop', 'table', 'chart', 'calculation', 'other') or reference_type is null),

  question_source text,
  cognitive_level text,
  ka_code text,
  ka_statement text,
  ka_importance numeric,
  tier_group text,

  source_pdf_path text,
  wiki_path text,
  raw_yaml_path text,
  audit_status text not null default 'imported' check (audit_status in ('imported', 'auto_checked', 'needs_manual_review', 'verified')),
  verified_at timestamptz,
  verified_by uuid references public.profiles(id),

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  unique (exam_year, exam_type, question_number)
);

create table if not exists public.choices (
  id uuid primary key default gen_random_uuid(),
  question_id uuid not null references public.questions(id) on delete cascade,
  label text not null check (label in ('A', 'B', 'C', 'D')),
  choice_html text,
  choice_text text not null,
  is_correct boolean not null default false,
  explanation_html text,
  explanation_text text,
  created_at timestamptz not null default now(),
  unique (question_id, label)
);

create table if not exists public.question_references (
  id uuid primary key default gen_random_uuid(),
  question_id uuid not null references public.questions(id) on delete cascade,
  source_id uuid references public.sources(id),
  page_number integer,
  section text,
  quote text,
  reference_note text,
  reference_type text not null default 'supporting_basis' check (reference_type in ('question_source', 'answer_key', 'supporting_basis', 'conflict', 'wiki_note')),
  created_at timestamptz not null default now()
);

create table if not exists public.question_topics (
  question_id uuid not null references public.questions(id) on delete cascade,
  topic_id uuid not null references public.topics(id) on delete cascade,
  relationship_type text not null default 'tests' check (relationship_type in ('tests', 'mentions', 'prerequisite', 'reference_basis')),
  primary key (question_id, topic_id, relationship_type)
);

create table if not exists public.question_flags (
  id uuid primary key default gen_random_uuid(),
  question_id uuid not null references public.questions(id) on delete cascade,
  flag_type text not null check (flag_type in ('outdated', 'edited', 'conflict', 'missing_reference', 'metadata_mismatch', 'parse_issue', 'needs_review')),
  note text,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  resolved_at timestamptz,
  resolved_by uuid references public.profiles(id)
);

create table if not exists public.quiz_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  title text,
  quiz_type text not null default 'custom' check (quiz_type in ('custom', 'topic', 'missed', 'weak_area', 'exam_sim', 'global_hard')),
  feedback_mode text not null default 'immediate' check (feedback_mode in ('immediate', 'blind')),
  config jsonb not null default '{}'::jsonb,
  started_at timestamptz not null default now(),
  completed_at timestamptz,
  score numeric,
  created_at timestamptz not null default now()
);

create table if not exists public.quiz_session_questions (
  id uuid primary key default gen_random_uuid(),
  quiz_session_id uuid not null references public.quiz_sessions(id) on delete cascade,
  question_id uuid not null references public.questions(id),
  position integer not null,
  choice_order jsonb,
  created_at timestamptz not null default now(),
  unique (quiz_session_id, position),
  unique (quiz_session_id, question_id)
);

create table if not exists public.question_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  quiz_session_id uuid references public.quiz_sessions(id) on delete set null,
  question_id uuid not null references public.questions(id),
  selected_choice_id uuid references public.choices(id),
  is_correct boolean not null,
  time_ms integer check (time_ms >= 0),
  confidence integer check (confidence between 1 and 5),
  submitted_at timestamptz not null default now()
);

create table if not exists public.user_question_state (
  user_id uuid not null references public.profiles(id) on delete cascade,
  question_id uuid not null references public.questions(id) on delete cascade,
  attempts_count integer not null default 0,
  correct_count integer not null default 0,
  incorrect_count integer not null default 0,
  last_attempt_at timestamptz,
  last_correct_at timestamptz,
  flagged boolean not null default false,
  mastery_state text not null default 'new' check (mastery_state in ('new', 'learning', 'shaky', 'mastered')),
  next_review_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key (user_id, question_id)
);

create index if not exists questions_filter_idx on public.questions (status, quiz_eligible, is_edited, requires_reference, track, exam_year);
create index if not exists question_attempts_question_idx on public.question_attempts (question_id, is_correct);
create index if not exists question_attempts_user_idx on public.question_attempts (user_id, submitted_at desc);
create index if not exists question_topics_topic_idx on public.question_topics (topic_id, relationship_type);

-- Aggregate-only analytics views. Apply minimum sample thresholds in queries/UI.
create or replace view public.global_question_stats
with (security_invoker = true) as
select
  q.id as question_id,
  q.exam_year,
  q.question_number,
  q.title,
  q.status,
  q.quiz_eligible,
  q.is_edited,
  q.is_redacted,
  q.requires_reference,
  count(a.id)::integer as attempts,
  count(a.id) filter (where not a.is_correct)::integer as misses,
  count(a.id) filter (where a.is_correct)::integer as correct,
  case when count(a.id) = 0 then null else avg(case when a.is_correct then 1.0 else 0.0 end) end as accuracy
from public.questions q
left join public.question_attempts a on a.question_id = q.id
group by q.id;

create or replace view public.global_topic_stats
with (security_invoker = true) as
select
  t.id as topic_id,
  t.slug,
  t.title,
  t.topic_type,
  count(a.id)::integer as attempts,
  count(a.id) filter (where not a.is_correct)::integer as misses,
  case when count(a.id) = 0 then null else avg(case when a.is_correct then 1.0 else 0.0 end) end as accuracy
from public.topics t
join public.question_topics qt on qt.topic_id = t.id
join public.questions q on q.id = qt.question_id
left join public.question_attempts a on a.question_id = q.id
group by t.id;

alter table public.profiles enable row level security;
alter table public.invites enable row level security;
alter table public.sources enable row level security;
alter table public.topics enable row level security;
alter table public.questions enable row level security;
alter table public.choices enable row level security;
alter table public.question_references enable row level security;
alter table public.question_topics enable row level security;
alter table public.question_flags enable row level security;
alter table public.quiz_sessions enable row level security;
alter table public.quiz_session_questions enable row level security;
alter table public.question_attempts enable row level security;
alter table public.user_question_state enable row level security;

-- Helper for admin/reviewer policies.
create or replace function public.current_role()
returns text
language sql
stable
security definer
set search_path = public
as $$
  select role from public.profiles where id = auth.uid()
$$;

-- Public study content is readable by authenticated beta users.
create policy "authenticated read sources" on public.sources for select to authenticated using (true);
create policy "authenticated read topics" on public.topics for select to authenticated using (true);
create policy "authenticated read questions" on public.questions for select to authenticated using (true);
create policy "authenticated read choices" on public.choices for select to authenticated using (true);
create policy "authenticated read question references" on public.question_references for select to authenticated using (true);
create policy "authenticated read question topics" on public.question_topics for select to authenticated using (true);

-- Users can read/update their own profile; admins can read all profiles.
create policy "users read own profile" on public.profiles for select to authenticated using (id = auth.uid() or public.current_role() = 'admin');
create policy "users update own profile" on public.profiles for update to authenticated using (id = auth.uid()) with check (id = auth.uid());

-- Admin/reviewer content management policies.
create policy "reviewers manage sources" on public.sources for all to authenticated using (public.current_role() in ('reviewer', 'admin')) with check (public.current_role() in ('reviewer', 'admin'));
create policy "reviewers manage topics" on public.topics for all to authenticated using (public.current_role() in ('reviewer', 'admin')) with check (public.current_role() in ('reviewer', 'admin'));
create policy "reviewers manage questions" on public.questions for all to authenticated using (public.current_role() in ('reviewer', 'admin')) with check (public.current_role() in ('reviewer', 'admin'));
create policy "reviewers manage choices" on public.choices for all to authenticated using (public.current_role() in ('reviewer', 'admin')) with check (public.current_role() in ('reviewer', 'admin'));
create policy "reviewers manage refs" on public.question_references for all to authenticated using (public.current_role() in ('reviewer', 'admin')) with check (public.current_role() in ('reviewer', 'admin'));
create policy "reviewers manage question topics" on public.question_topics for all to authenticated using (public.current_role() in ('reviewer', 'admin')) with check (public.current_role() in ('reviewer', 'admin'));
create policy "reviewers manage flags" on public.question_flags for all to authenticated using (public.current_role() in ('reviewer', 'admin')) with check (public.current_role() in ('reviewer', 'admin'));
create policy "admins manage invites" on public.invites for all to authenticated using (public.current_role() = 'admin') with check (public.current_role() = 'admin');

-- Users own their quiz sessions, attempts, and progress state.
create policy "users manage own quiz sessions" on public.quiz_sessions for all to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "users read own quiz session questions" on public.quiz_session_questions for select to authenticated using (
  exists (select 1 from public.quiz_sessions s where s.id = quiz_session_id and s.user_id = auth.uid())
);
create policy "users insert own quiz session questions" on public.quiz_session_questions for insert to authenticated with check (
  exists (select 1 from public.quiz_sessions s where s.id = quiz_session_id and s.user_id = auth.uid())
);
create policy "users insert own attempts" on public.question_attempts for insert to authenticated with check (user_id = auth.uid());
create policy "users read own attempts" on public.question_attempts for select to authenticated using (user_id = auth.uid() or public.current_role() = 'admin');
create policy "users manage own state" on public.user_question_state for all to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());
