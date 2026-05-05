-- Secret-link account creation support.
-- Accounts can be created without pre-generated invite codes; the backend assigns
-- a unique learner_code for tracking/admin reference.

alter table public.profiles add column if not exists learner_code text;

create unique index if not exists profiles_learner_code_unique
  on public.profiles (learner_code)
  where learner_code is not null;
