-- Shared rate-limit ledger for auth-adjacent edge functions (login, invite signup).
-- Keys are SHA-256 hashes of (scope:ip+ua / scope:username) so we never store the
-- raw identifier. RLS is enabled with no policies because every write/read comes
-- through the service role.
create table if not exists public.auth_rate_limit (
  id bigint generated always as identity primary key,
  scope text not null,
  key_hash text not null,
  attempted_at timestamptz not null default now()
);

create index if not exists auth_rate_limit_scope_key_time_idx
  on public.auth_rate_limit (scope, key_hash, attempted_at desc);

alter table public.auth_rate_limit enable row level security;

-- Trim the ledger on insert so it doesn't grow without bound — the only useful
-- rows are inside the rate-limit window (the longest is ~30 min).
create or replace function public.auth_rate_limit_trim()
returns trigger
language plpgsql
as $$
begin
  delete from public.auth_rate_limit
  where attempted_at < now() - interval '1 day';
  return null;
end;
$$;

drop trigger if exists auth_rate_limit_trim_trg on public.auth_rate_limit;
create trigger auth_rate_limit_trim_trg
  after insert on public.auth_rate_limit
  for each statement execute function public.auth_rate_limit_trim();

-- system_reviews.user_id should reference profiles.id so cascade deletes match
-- every other table; the previous reference at auth.users orphaned rows when a
-- profile was deleted out from under it.
alter table public.system_reviews
  drop constraint if exists system_reviews_user_id_fkey;
alter table public.system_reviews
  add constraint system_reviews_user_id_fkey
  foreign key (user_id) references public.profiles(id) on delete cascade;

-- A retried quiz submission must not double-count attempts. Uniqueness on
-- (quiz_session_id, question_id) lets the edge function detect duplicates and
-- gives Postgres a hard guarantee even if the application logic regresses.
create unique index if not exists question_attempts_session_question_idx
  on public.question_attempts (quiz_session_id, question_id)
  where quiz_session_id is not null;
