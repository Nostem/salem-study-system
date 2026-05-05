-- Per-user system review tracker for the plant overview.
-- Stores the last time a user marked a wiki article as "reviewed", keyed by
-- article slug (e.g. "systems/reactor-coolant-system"). Used to color-code
-- system tiles by review recency.

create table if not exists public.system_reviews (
  user_id uuid not null references auth.users(id) on delete cascade,
  slug text not null,
  last_reviewed_at timestamptz not null default now(),
  primary key (user_id, slug)
);

create index if not exists system_reviews_user_idx on public.system_reviews (user_id, last_reviewed_at desc);

alter table public.system_reviews enable row level security;

create policy "users read own reviews" on public.system_reviews
  for select to authenticated using (auth.uid() = user_id);

create policy "users upsert own reviews" on public.system_reviews
  for insert to authenticated with check (auth.uid() = user_id);

create policy "users update own reviews" on public.system_reviews
  for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "users delete own reviews" on public.system_reviews
  for delete to authenticated using (auth.uid() = user_id);
