-- Invite-code username/password beta auth.
-- Keeps learner-facing signup email-free while still using Supabase Auth internally.

create extension if not exists pgcrypto;

alter table public.profiles add column if not exists username text;
alter table public.profiles add column if not exists internal_auth_email text;
alter table public.profiles add column if not exists invite_id uuid references public.invites(id);

create unique index if not exists profiles_username_lower_unique
  on public.profiles (lower(username))
  where username is not null;

create unique index if not exists profiles_internal_auth_email_unique
  on public.profiles (internal_auth_email)
  where internal_auth_email is not null;

alter table public.profiles drop constraint if exists profiles_username_format_check;
alter table public.profiles add constraint profiles_username_format_check
  check (username is null or username ~ '^[a-zA-Z0-9_][a-zA-Z0-9_-]{2,31}$');

alter table public.invites add column if not exists label text;
alter table public.invites add column if not exists code_hash text;
alter table public.invites add column if not exists accepted_username text;
alter table public.invites add column if not exists revoked_at timestamptz;
alter table public.invites add column if not exists notes text;

create unique index if not exists invites_code_hash_unique
  on public.invites (code_hash)
  where code_hash is not null;

create index if not exists invites_available_idx
  on public.invites (expires_at, uses_count, max_uses)
  where revoked_at is null;

-- Existing email column remains nullable for backward compatibility with earlier drafts;
-- beta signup now uses code/code_hash + username instead of requiring email.

create or replace function public.invite_is_available(invite public.invites)
returns boolean
language sql
stable
as $$
  select invite.revoked_at is null
    and invite.uses_count < invite.max_uses
    and (invite.expires_at is null or invite.expires_at > now())
$$;
