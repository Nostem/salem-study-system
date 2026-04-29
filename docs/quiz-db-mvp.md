# Quiz + Database MVP Plan

## Direction

Keep the current GitHub Pages/Astro deployment for the first private beta and add a managed Supabase backend for accounts, question bank storage, quiz sessions, per-user progress, and aggregate analytics. Move to a private server later only after the quiz/database layer proves itself.

## Why not move hosting first

The immediate risk is not GitHub Pages. The immediate risk is getting the question model, metadata, filters, and progress tracking wrong. Supabase gives us authentication, Postgres, row-level security, and analytics queries without starting a server-maintenance project.

A private server becomes valuable later for server-side rendering, background imports, PDF processing, self-hosted Postgres, admin tools, and hosting multiple related projects.

## Current source material

The first importer uses the existing extracted artifacts:

- `data/exams/*-written-exam.yaml` for structured metadata.
- `wiki/exams/YYYY/q*.md` for frontmatter, question body, choices, explanation blocks, reference notes, and `## Connections` links.
- Source PDFs should still be audited against imported records before marking questions verified.

## Question metadata model

Question status and edit state are deliberately separate.

- `status`: `active`, `draft`, `outdated`, `needs_review`, `retired`, `conflict`
- `is_edited`: true/false
- `is_redacted`: true/false
- `quiz_eligible`: true/false
- `non_quiz_reason`: `security_redacted`, `status_draft`, `status_outdated`, `status_needs_review`, `status_conflict`, `status_retired`, `invalid_choice_count`, `missing_markdown`, or null
- `requires_reference`: true/false/null

This means a question can be active but edited, outdated but not edited, or conflicted and edited. Quiz generation can expose each dimension as a separate filter.

## Default quiz pool

For normal beta users, default to:

- Include `active` questions.
- Include `is_edited = true` questions, visibly labeled.
- Exclude `outdated`, `draft`, `needs_review`, `retired`, and `conflict` unless explicitly opted in.
- Always exclude security-redacted questions from normal quiz pools.
- Include both reference-required and non-reference questions unless the user filters them.

## Quiz modes

Two feedback modes are first-class:

- `immediate`: learner sees right/wrong feedback and explanations after each submitted answer.
- `blind`: learner answers the whole quiz first, then reviews score, missed questions, topic breakdown, and explanations at the end.

Quiz types can be layered on top:

- `custom`
- `topic`
- `missed`
- `weak_area`
- `exam_sim`
- `global_hard`

## Invite-only beta

The schema includes `invites` and `profiles.role` for an invite-only beta.

Initial roles:

- `learner`
- `reviewer`
- `admin`

The app should initially expose signup only through invite links/codes. Admins can create invites.

## Data import path

Initial implementation artifacts:

- `scripts/exam_question_import.py` parses existing YAML and markdown into DB-ready records, including questions with multiple accepted answers.
- `scripts/exam_question_import.py` also applies `data/topic-map.yaml` during export so DB staging records contain both source `topic_slugs` and mapped `resolved_topic_slugs`.
- `data/topic-map.yaml` is the controlled routing map from legacy exam metadata slugs to current wiki/topic slugs, including per-question split routes.
- `tests/test_exam_question_import.py` covers current real files, including `edited`, `outdated`, `reference`, choices, answer labels, connections, topic-map routing, redacted exclusion, full-year collection, and audit behavior.
- `supabase/migrations/20260429_quiz_mvp_schema.sql` defines the initial Postgres schema and RLS policies.

Current importer CLI:

```bash
# Export one exam year as normalized JSON records.
python3 scripts/exam_question_import.py export --exam-year 2018 --out data/quiz-import/2018-written.json

# Audit all written exam records before database import.
python3 scripts/exam_question_import.py audit --out data/quiz-import/audit-all.json

# Build a Supabase staging bundle split into natural-key table rows.
python3 scripts/exam_question_import.py stage --out data/quiz-import/supabase-staging-all.json
```

Current full-corpus audit output:

- `total_records`: 499
- `status_counts`: `active=3`, `draft=493`, `outdated=3`
- `reference_counts`: `False=472`, `True=27`
- `default_quiz_excluded_counts`: `draft=493`, `outdated=3`
- `issue_counts`: none after topic-map routing and redacted-question policy
- `review_counts`: `multiple_accepted_answers=1`, `redacted_question_excluded=1`
- `yaml_markdown_answer_mismatch`: 0 detected in the current corpus
- `unresolved_connection`: 0 detected in the current corpus
- `unresolved_topic_slug`: 0 after `data/topic-map.yaml` direct mappings and per-question split routes

Current Supabase staging/import output:

- `data/quiz-import/supabase-staging-all.json`
  - `question_count`: 499
  - `choice_count`: 1992
  - `source_count`: 5
  - `topic_count`: 78
  - `question_topic_count`: 782
  - `reference_count`: 499
- `data/quiz-import/supabase-staging-2018.json`
  - `question_count`: 99
  - `choice_count`: 396
  - `topic_count`: 46
  - `question_topic_count`: 178
  - `reference_count`: 99

- `data/quiz-import/import-2018-written.sql`
  - transaction-safe SQL for importing the 2018 written exam into Supabase/Postgres
  - upserts `sources`, `topics`, `questions`, and `choices`
  - inserts `question_topics` idempotently through resolved UUID joins
  - inserts `question_references` only when the same question/source/type/note does not already exist
- `supabase/.env.example`
  - documents the required `SUPABASE_DB_URL` environment variable without committing credentials

The staging bundle uses natural keys (`source_key`, `question_slug`, `topic_slug`) so a later Supabase upsert script can resolve UUID foreign keys without committing credentials or connecting to a live database during export.

## Wiki-to-database sync workflow

The wiki and exam YAML remain the canonical editing surface. Supabase is the generated quiz/progress backend. To publish wiki changes to Supabase, rebuild the staging bundle, run a dry-run sync, review the plan, then apply the non-destructive upsert.

```bash
# Rebuild from current wiki/exam source files.
python3 scripts/exam_question_import.py audit --out data/quiz-import/audit-all.json
python3 scripts/exam_question_import.py stage --out data/quiz-import/supabase-staging-all.json

# Dry-run against Supabase. This reports new/changed/missing rows and performs no writes.
python3 scripts/supabase_import_exam.py sync \
  --bundle data/quiz-import/supabase-staging-all.json \
  --out /tmp/salem-sync-dry-run.json

# Apply only after reviewing the dry-run output.
python3 scripts/supabase_import_exam.py sync \
  --bundle data/quiz-import/supabase-staging-all.json \
  --apply \
  --out /tmp/salem-sync-apply.json
```

Sync safety rules:

- `sync` never deletes questions, choices, references, topics, or user progress.
- Wiki rows missing from a future bundle are reported as `missing_from_source` for review instead of being deleted.
- Removed topic/reference links are reported for review instead of being deleted automatically.
- Answer-key changes are called out separately in `answer_key_changes`.
- `deletes_performed_by_apply` is always `false` for the current pipeline.
- Slug collisions across exam years are disambiguated in staging before database import. Current known collision: 2020 Q29 becomes `2020-q29-charging-pump-power-supplies`, preserving the already-imported 2018 Q29 slug.

Latest live sync result:

- 499 questions in sync
- 1,992 choices in sync
- 78 topics in sync
- 782 question-topic links in sync
- 499 question references in sync
- `review_required`: none

Known review items:

- `wiki/exams/2022/q88-loss-of-control-air-pzr-level.md` has multiple accepted answers: `A` and `B`. This is supported by `accepted_answer_labels` and choice-level `is_correct`, but remains visible in review output.
- `wiki/exams/2023/q85-sg-overpressure-security-redacted.md` is security-redacted and excluded from normal quiz pools with `quiz_eligible=false` and `non_quiz_reason=security_redacted`.
- Legacy topic slugs are now routed through `data/topic-map.yaml`. Broad legacy groups use per-question `question_routes` instead of global mappings.

Import readiness commands:

```bash
# Rebuild the 2018 staging bundle if source data changes.
python3 scripts/exam_question_import.py stage --exam-year 2018 --out data/quiz-import/supabase-staging-2018.json

# Generate the transaction-safe import SQL from the staging bundle.
python3 scripts/supabase_import_exam.py generate-sql \
  --bundle data/quiz-import/supabase-staging-2018.json \
  --out data/quiz-import/import-2018-written.sql

# Check local readiness. This only reports missing env names, never secret values.
python3 scripts/supabase_import_exam.py check-ready \
  --import-sql data/quiz-import/import-2018-written.sql

# After applying the schema migration and exporting SUPABASE_DB_URL, import with psql.
# Do not paste or commit the real connection string.
psql "$SUPABASE_DB_URL" -v ON_ERROR_STOP=1 -f supabase/migrations/20260429_quiz_mvp_schema.sql
psql "$SUPABASE_DB_URL" -v ON_ERROR_STOP=1 -f data/quiz-import/import-2018-written.sql
```

Next importer step:

1. Use the `sync` dry-run/apply workflow whenever wiki or exam YAML source changes.
2. Decide whether current markdown `draft` should remain excluded by default or be promoted after automated/source audit.
3. Build quiz selection from the `questions`, `choices`, `topics`, and `question_topics` tables.

## Source PDF audit

Do not mark imported questions as verified just because they parse. Use `audit_status`:

- `imported`
- `auto_checked`
- `needs_manual_review`
- `verified`

Manual review priority:

1. `outdated`, `conflict`, `needs_review`, and `edited` questions.
2. Questions with missing/mismatched metadata.
3. Questions requiring references.
4. Questions where parser output has fewer than four choices or no answer label.

## Analytics targets

The schema includes aggregate views for:

- global question stats
- global topic stats

These enable:

- most missed questions
- most missed systems
- most missed Tech Specs
- lowest accuracy topics
- high-confusion questions

The UI should apply minimum sample sizes before showing global conclusions.
