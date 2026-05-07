-- Allow cron pipeline to archive contact messages after creating GitHub issues.

alter table public.contact_messages
  drop constraint if exists contact_messages_status_check;

alter table public.contact_messages
  add constraint contact_messages_status_check
  check (status in ('new', 'reviewed', 'archived', 'closed', 'spam'));
