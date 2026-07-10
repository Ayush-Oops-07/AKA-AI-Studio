-- Run this in Supabase → SQL Editor → New Query

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  business text,
  rating smallint not null check (rating between 1 and 5),
  message text not null,
  created_at timestamptz not null default now()
);

-- Enable Row Level Security
alter table public.reviews enable row level security;

-- Anyone (using the public anon key) can read reviews
create policy "Public can read reviews"
  on public.reviews for select
  using (true);

-- Anyone (using the public anon key) can submit a new review
create policy "Public can insert reviews"
  on public.reviews for insert
  with check (true);

-- Note: there is no public update/delete policy, so once a review is
-- submitted, site visitors cannot edit or delete it. Do that from the
-- Supabase Table Editor if you ever need to moderate/remove a review.
