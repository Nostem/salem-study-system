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
    ('auth_rate_limit_attempted_at_idx', 'auth_rate_limit', false,
      ARRAY['attempted_at'], ARRAY[0]::smallint[], NULL::text),
    ('question_attempts_session_question_idx', 'question_attempts', true,
      ARRAY['quiz_session_id', 'question_id'], ARRAY[0, 0]::smallint[], 'quiz_session_id'),
    ('quiz_sessions_user_completed_idx', 'quiz_sessions', false,
      ARRAY['user_id', 'completed_at'], ARRAY[0, 3]::smallint[], 'completed_at')
  ) AS required(index_name, table_name, is_unique, key_columns, key_options, not_null_column)
  LOOP
    IF NOT EXISTS (
      SELECT 1 FROM pg_index i
      JOIN pg_class t ON t.oid = i.indrelid
      JOIN pg_class idx ON idx.oid = i.indexrelid
      JOIN pg_am am ON am.oid = idx.relam
      WHERE i.indexrelid = to_regclass('public.' || expected.index_name)
        AND i.indrelid = to_regclass('public.' || expected.table_name)
        AND t.relkind IN ('r', 'p')
        AND i.indisvalid AND i.indisready AND i.indislive
        AND am.amname = 'btree' AND i.indisunique = expected.is_unique
        AND i.indexprs IS NULL
        AND i.indnkeyatts = cardinality(expected.key_columns)
        AND i.indnatts = i.indnkeyatts
        AND ARRAY(
          SELECT a.attname::text FROM unnest(i.indkey) WITH ORDINALITY AS k(attnum, position)
          JOIN pg_attribute a ON a.attrelid = i.indrelid AND a.attnum = k.attnum
          WHERE NOT a.attisdropped ORDER BY k.position
        ) = expected.key_columns
        -- B-tree indoption bits: 0 = ASC NULLS LAST; 3 = DESC NULLS FIRST.
        AND ARRAY(SELECT unnest(i.indoption)) = expected.key_options
        -- These migrations use only single-column IS NOT NULL predicates (or none).
        -- Deparse the catalog expression, ignoring whitespace/parenthesis formatting;
        -- fail closed on other expressions instead of guessing logical equivalence.
        AND regexp_replace(pg_get_expr(i.indpred, i.indrelid), '[[:space:]()]', '', 'g')
          IS NOT DISTINCT FROM expected.not_null_column || 'ISNOTNULL'
    ) THEN
      RAISE EXCEPTION 'db_gate: missing, invalid, misplaced or wrong-definition index %', expected.index_name;
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
