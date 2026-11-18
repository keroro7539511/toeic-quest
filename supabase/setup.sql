-- TOEIC Quest 雲端進度與排行榜（Supabase）
-- 在 Supabase 專案的 SQL Editor 貼上整份執行一次即可。可重複執行。
-- 想限制只有特定 Email 能註冊，再另外執行 supabase/allowlist.sql。

-- ── 每個人的完整進度（只有自己讀寫得到）──
create table if not exists public.progress (
  user_id uuid primary key references auth.users on delete cascade,
  data jsonb not null,
  updated_at timestamptz not null default now()
);
alter table public.progress enable row level security;
drop policy if exists "own progress" on public.progress;
create policy "own progress" on public.progress for all to authenticated
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ── 排行榜（登入的人都看得到，只能改自己那一列）──
create table if not exists public.leaderboard (
  user_id uuid primary key references auth.users on delete cascade,
  nickname text not null check (char_length(nickname) between 1 and 20),
  week_id text,                       -- 本週週一的日期，例如 2026-11-16
  week_xp int not null default 0,
  streak int not null default 0,
  goal_date text,                     -- 最後一次達成每日目標的日期（判斷連續天數是否中斷）
  best_mock int,                      -- 完整模擬考最高總分
  total_correct int not null default 0,
  level int,
  updated_at timestamptz not null default now()
);
alter table public.leaderboard enable row level security;
drop policy if exists "read board" on public.leaderboard;
drop policy if exists "insert own" on public.leaderboard;
drop policy if exists "update own" on public.leaderboard;
create policy "read board" on public.leaderboard for select to authenticated using (true);
create policy "insert own" on public.leaderboard for insert to authenticated with check (auth.uid() = user_id);
create policy "update own" on public.leaderboard for update to authenticated
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ── 權限：新版 Supabase 不會自動開放資料表給網頁，要明確授權給「已登入的人」──
grant usage on schema public to authenticated;
grant select, insert, update on public.progress to authenticated;
grant select, insert, update on public.leaderboard to authenticated;

-- ── 每日挑戰：每天一份題目（第一個打開的人建立，大家共用）──
create table if not exists public.daily_sets (
  day text primary key,                 -- 台灣日期，例如 2026-11-18
  items jsonb not null,                 -- 題目 ID 清單，例如 ["p1:12","p3:4.1",...]
  created_at timestamptz not null default now()
);
alter table public.daily_sets enable row level security;
drop policy if exists "read sets" on public.daily_sets;
drop policy if exists "create sets" on public.daily_sets;
create policy "read sets" on public.daily_sets for select to authenticated using (true);
create policy "create sets" on public.daily_sets for insert to authenticated with check (true);
grant select, insert on public.daily_sets to authenticated;

-- ── 每日挑戰成績：每人每天一筆（只記第一次），不能修改 ──
create table if not exists public.daily_results (
  user_id uuid not null references auth.users on delete cascade,
  day text not null,
  answers jsonb not null,               -- [{id, ok, pick}, ...]
  correct int not null,
  total int not null,
  ms int,                               -- 作答時間（毫秒）
  created_at timestamptz not null default now(),
  primary key (user_id, day)
);
alter table public.daily_results enable row level security;

-- 自己當天做完了沒？（security definer：查詢時不受 RLS 限制，避免政策自我參照）
create or replace function public.did_daily(d text) returns boolean
language sql security definer stable set search_path = public as $$
  select exists (select 1 from public.daily_results where user_id = auth.uid() and day = d)
$$;

drop policy if exists "read results" on public.daily_results;
drop policy if exists "insert own result" on public.daily_results;
-- 看得到：自己的、以前的；今天的要自己也做完才看得到（防暴雷）
create policy "read results" on public.daily_results for select to authenticated using (
  user_id = auth.uid()
  or day < to_char(now() at time zone 'Asia/Taipei', 'YYYY-MM-DD')
  or public.did_daily(day)
);
create policy "insert own result" on public.daily_results for insert to authenticated with check (user_id = auth.uid());
grant select, insert on public.daily_results to authenticated;
