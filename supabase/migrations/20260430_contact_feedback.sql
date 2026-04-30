-- Site-wide contact / feedback submissions.
-- Inserts are handled by the contact-feedback Edge Function with the service role.

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete set null,
  name text,
  email text,
  category text not null default 'feedback' check (category in ('feedback', 'bug', 'question', 'content_issue')),
  page_url text,
  message text not null check (char_length(message) between 10 and 5000),
  user_agent text,
  status text not null default 'new' check (status in ('new', 'reviewed', 'closed', 'spam')),
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  reviewed_at timestamptz,
  reviewed_by uuid references public.profiles(id)
);

create index if not exists contact_messages_created_idx on public.contact_messages (created_at desc);
create index if not exists contact_messages_status_idx on public.contact_messages (status, created_at desc);
create index if not exists contact_messages_user_idx on public.contact_messages (user_id, created_at desc) where user_id is not null;
create index if not exists contact_messages_rate_key_idx on public.contact_messages ((metadata->>'rate_key'), created_at desc);

alter table public.contact_messages enable row level security;

drop policy if exists "Users can read their own contact messages" on public.contact_messages;
drop policy if exists "Admins and reviewers can read contact messages" on public.contact_messages;
drop policy if exists "Admins and reviewers can update contact messages" on public.contact_messages;

create policy "Users can read their own contact messages"
  on public.contact_messages
  for select
  using (auth.uid() = user_id);

create policy "Admins and reviewers can read contact messages"
  on public.contact_messages
  for select
  using (
    exists (
      select 1 from public.profiles
      where profiles.id = auth.uid()
        and profiles.role in ('admin', 'reviewer')
    )
  );

create policy "Admins and reviewers can update contact messages"
  on public.contact_messages
  for update
  using (
    exists (
      select 1 from public.profiles
      where profiles.id = auth.uid()
        and profiles.role in ('admin', 'reviewer')
    )
  )
  with check (
    exists (
      select 1 from public.profiles
      where profiles.id = auth.uid()
        and profiles.role in ('admin', 'reviewer')
    )
  );
