-- （選用）白名單：執行後只有名單上的 Email 能註冊。
-- ⚠️ 不要把朋友的 Email 寫進這個檔案（repo 是公開的），名單請另外在 SQL Editor 執行：
--   insert into allowed_emails (email) values ('a@gmail.com'), ('b@gmail.com');
-- 想取消白名單：drop trigger if exists check_allowed_email on auth.users;

-- ── 白名單：只有名單上的 Email 能註冊 ──
create table if not exists public.allowed_emails (email text primary key);
alter table public.allowed_emails enable row level security;   -- 不開任何 policy：網頁端讀不到、改不了

create or replace function public.check_allowed_email() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if not exists (select 1 from public.allowed_emails a where lower(a.email) = lower(new.email)) then
    raise exception 'EMAIL_NOT_INVITED';
  end if;
  return new;
end $$;

drop trigger if exists check_allowed_email on auth.users;
create trigger check_allowed_email before insert on auth.users
  for each row execute function public.check_allowed_email();

