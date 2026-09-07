-- Shared, read-only deployment gate. Use psql -X -f (not a SQL API).
\set ON_ERROR_STOP on
\if :{?check_snapshots}
\else
  \set check_snapshots false
\endif

BEGIN READ ONLY;
SET LOCAL statement_timeout = '15s';
SET LOCAL lock_timeout = '5s';
SET LOCAL idle_in_transaction_session_timeout = '15s';
SET LOCAL search_path = pg_catalog;

DO $$
DECLARE
  expected record;
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_proc
    WHERE oid = to_regprocedure('public.replace_quiz_session_writes(uuid,uuid,jsonb,jsonb,jsonb)')
      AND prokind = 'f' AND prorettype = 'void'::regtype AND NOT proretset
  ) THEN
    RAISE EXCEPTION 'db_gate: missing or wrong replace_quiz_session_writes signature';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_class
    WHERE oid = to_regclass('public.auth_rate_limit') AND relkind IN ('r', 'p')
  ) THEN
    RAISE EXCEPTION 'db_gate: missing auth_rate_limit table';
  END IF;

  FOR expected IN SELECT * FROM (VALUES
    ('auth_rate_limit_attempted_at_idx', 'auth_rate_limit'),
    ('question_attempts_session_question_idx', 'question_attempts'),
    ('quiz_sessions_user_completed_idx', 'quiz_sessions')
  ) AS required(index_name, table_name)
  LOOP
    IF NOT EXISTS (
      SELECT 1 FROM pg_index i
      JOIN pg_class t ON t.oid = i.indrelid
      WHERE i.indexrelid = to_regclass('public.' || expected.index_name)
        AND i.indrelid = to_regclass('public.' || expected.table_name)
        AND t.relkind IN ('r', 'p')
        AND i.indisvalid AND i.indisready AND i.indislive
    ) THEN
      RAISE EXCEPTION 'db_gate: missing, invalid or misplaced index %', expected.index_name;
    END IF;
  END LOOP;

  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint c
    JOIN pg_attribute source ON source.attrelid = c.conrelid
      AND source.attname = 'user_id' AND NOT source.attisdropped
    JOIN pg_attribute target ON target.attrelid = c.confrelid
      AND target.attname = 'id' AND NOT target.attisdropped
    WHERE c.contype = 'f' AND c.convalidated
      AND c.conrelid = to_regclass('public.system_reviews')
      AND c.confrelid = to_regclass('public.profiles')
      AND c.conkey = ARRAY[source.attnum]
      AND c.confkey = ARRAY[target.attnum]
  ) THEN
    RAISE EXCEPTION 'db_gate: missing valid system_reviews.user_id FK to public.profiles.id';
  END IF;
  RAISE NOTICE 'schema_gate=passed';
END $$;

-- Validate the option before psql's conditional (invalid booleans must fail).
SELECT :'check_snapshots'::boolean AS check_snapshots \gset
\if :check_snapshots
DO $$
DECLARE
  sample_count integer;
  invalid_count integer;
BEGIN
  -- Stored samples only: this does not invoke or prove current Edge Function code.
  SELECT count(*), count(*) FILTER (WHERE
    (question_snapshot->'version') IS DISTINCT FROM '2'::jsonb
    OR jsonb_typeof(question_snapshot->'choices') IS DISTINCT FROM 'array'
    OR jsonb_typeof(question_snapshot->'topicSlugs') IS DISTINCT FROM 'array'
  ) INTO sample_count, invalid_count
  FROM (
    SELECT question_snapshot FROM public.quiz_session_questions
    ORDER BY created_at DESC, id DESC LIMIT 5
  ) AS recent;
  RAISE NOTICE 'snapshot_sample_count=% invalid_count=%', sample_count, invalid_count;
  IF sample_count = 0 OR invalid_count > 0 THEN
    RAISE EXCEPTION 'db_gate: snapshot sample empty or malformed';
  END IF;
  RAISE NOTICE 'snapshot_gate=passed';
END $$;
\else
\echo snapshot_gate=skipped
\endif
COMMIT;
