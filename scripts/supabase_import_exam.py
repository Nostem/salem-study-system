#!/usr/bin/env python3
"""Prepare Salem quiz staging bundles for Supabase import.

This script intentionally does not connect to Supabase. It validates a staging
bundle and emits transaction-safe SQL that can be run with psql/Supabase SQL
editor after the schema migration has been applied.
"""

from __future__ import annotations

import argparse
import json
import os
from pathlib import Path
from typing import Any, Dict, Iterable, List, Mapping


class ImportReadinessError(ValueError):
    """Raised when a staging bundle cannot be safely imported."""


REQUIRED_BUNDLE_KEYS = (
    "sources",
    "topics",
    "questions",
    "choices",
    "question_references",
    "question_topics",
)

REQUIRED_SCHEMA_OBJECTS = (
    "public.sources",
    "public.topics",
    "public.questions",
    "public.choices",
    "public.question_references",
    "public.question_topics",
)

REQUIRED_ENV_NAMES = ("SUPABASE_DB_URL",)


def load_staging_bundle(path: str | Path) -> Dict[str, Any]:
    with Path(path).open(encoding="utf-8") as handle:
        bundle = json.load(handle)
    validate_staging_bundle(bundle)
    return bundle


def _require_keys(row: Mapping[str, Any], keys: Iterable[str], label: str) -> None:
    missing = [key for key in keys if key not in row]
    if missing:
        raise ImportReadinessError(f"{label} missing keys: {', '.join(missing)}")


def validate_staging_bundle(bundle: Mapping[str, Any]) -> None:
    _require_keys(bundle, REQUIRED_BUNDLE_KEYS, "bundle")

    source_keys = {row.get("source_key") for row in bundle["sources"]}
    topic_slugs = {row.get("slug") for row in bundle["topics"]}
    question_slugs = {row.get("slug") for row in bundle["questions"]}

    if not source_keys:
        raise ImportReadinessError("bundle has no sources")
    if not question_slugs:
        raise ImportReadinessError("bundle has no questions")

    for row in bundle["sources"]:
        _require_keys(row, ("source_key", "title", "source_type", "exam_year", "public_access"), "source row")

    for row in bundle["topics"]:
        _require_keys(row, ("slug", "title", "topic_type", "wiki_slug"), "topic row")

    for row in bundle["questions"]:
        _require_keys(
            row,
            (
                "source_key",
                "exam_year",
                "exam_type",
                "question_number",
                "title",
                "slug",
                "stem_text",
                "accepted_answer_labels",
                "status",
                "is_edited",
                "is_redacted",
                "quiz_eligible",
            ),
            "question row",
        )
        if row.get("source_key") not in source_keys:
            raise ImportReadinessError(f"question {row.get('slug')} references missing source_key {row.get('source_key')}")

    for row in bundle["choices"]:
        _require_keys(row, ("question_slug", "label", "choice_text", "is_correct"), "choice row")
        if row.get("question_slug") not in question_slugs:
            raise ImportReadinessError(f"choice references missing question_slug {row.get('question_slug')}")

    for row in bundle["question_references"]:
        _require_keys(row, ("question_slug", "source_key", "reference_note", "reference_type"), "question reference row")
        if row.get("question_slug") not in question_slugs:
            raise ImportReadinessError(f"reference references missing question_slug {row.get('question_slug')}")
        if row.get("source_key") not in source_keys:
            raise ImportReadinessError(f"reference references missing source_key {row.get('source_key')}")

    for row in bundle["question_topics"]:
        _require_keys(row, ("question_slug", "topic_slug", "relationship_type"), "question topic row")
        if row.get("question_slug") not in question_slugs:
            raise ImportReadinessError(f"question_topic references missing question_slug {row.get('question_slug')}")
        if row.get("topic_slug") not in topic_slugs:
            raise ImportReadinessError(f"question_topic references missing topic_slug {row.get('topic_slug')}")


def _dollar_quote(value: Any, tag: str) -> str:
    text = json.dumps(value, ensure_ascii=False, sort_keys=True)
    marker = f"${tag}$"
    if marker in text:
        raise ImportReadinessError(f"cannot dollar-quote JSON with tag {tag}")
    return f"{marker}{text}{marker}"


def generate_import_sql(bundle: Mapping[str, Any]) -> str:
    validate_staging_bundle(bundle)

    sources_json = _dollar_quote(bundle["sources"], "salem_sources")
    topics_json = _dollar_quote(bundle["topics"], "salem_topics")
    questions_json = _dollar_quote(bundle["questions"], "salem_questions")
    choices_json = _dollar_quote(bundle["choices"], "salem_choices")
    references_json = _dollar_quote(bundle["question_references"], "salem_refs")
    question_topics_json = _dollar_quote(bundle["question_topics"], "salem_qtopics")
    summary = json.dumps(bundle.get("summary", {}), sort_keys=True)

    return f"""begin;

-- Salem Study System Supabase import bundle.
-- Generated from staging summary: {summary}
-- Apply supabase/migrations/20260429_quiz_mvp_schema.sql before running this file.

create temp table _salem_sources as
select * from jsonb_to_recordset({sources_json}::jsonb) as x(
  source_key text,
  title text,
  source_type text,
  exam_year integer,
  public_access boolean
);

create temp table _salem_topics as
select * from jsonb_to_recordset({topics_json}::jsonb) as x(
  slug text,
  title text,
  topic_type text,
  wiki_slug text
);

create temp table _salem_questions_raw as
select * from jsonb_to_recordset({questions_json}::jsonb) as x(
  source_key text,
  exam_year integer,
  exam_type text,
  question_number integer,
  track text,
  title text,
  slug text,
  stem_text text,
  official_answer_label text,
  accepted_answer_labels jsonb,
  status text,
  is_edited boolean,
  is_redacted boolean,
  quiz_eligible boolean,
  non_quiz_reason text,
  requires_reference boolean,
  question_source text,
  cognitive_level text,
  ka_code text,
  ka_importance numeric,
  tier_group text,
  wiki_path text,
  audit_status text,
  source_topic_slugs jsonb,
  resolved_topic_slugs jsonb,
  yaml_answer_label text,
  markdown_answer_label text
);

create temp table _salem_choices as
select * from jsonb_to_recordset({choices_json}::jsonb) as x(
  question_slug text,
  label text,
  choice_html text,
  choice_text text,
  is_correct boolean
);

create temp table _salem_question_references as
select * from jsonb_to_recordset({references_json}::jsonb) as x(
  question_slug text,
  source_key text,
  reference_note text,
  reference_type text
);

create temp table _salem_question_topics as
select * from jsonb_to_recordset({question_topics_json}::jsonb) as x(
  question_slug text,
  topic_slug text,
  relationship_type text
);

insert into public.sources (title, source_type, exam_year, public_access)
select title, source_type, exam_year, public_access
from _salem_sources
on conflict (source_type, exam_year, title) do update set
  public_access = excluded.public_access;

insert into public.topics (slug, title, topic_type, wiki_slug)
select slug, title, topic_type, wiki_slug
from _salem_topics
on conflict (slug) do update set
  title = excluded.title,
  topic_type = excluded.topic_type,
  wiki_slug = excluded.wiki_slug;

insert into public.questions (
  source_id,
  exam_year,
  exam_type,
  question_number,
  track,
  title,
  slug,
  stem_text,
  official_answer_label,
  accepted_answer_labels,
  status,
  is_edited,
  is_redacted,
  quiz_eligible,
  non_quiz_reason,
  requires_reference,
  question_source,
  cognitive_level,
  ka_code,
  ka_importance,
  tier_group,
  wiki_path,
  audit_status
)
select
  s.id as source_id,
  q.exam_year,
  q.exam_type,
  q.question_number,
  q.track,
  q.title,
  q.slug,
  q.stem_text,
  q.official_answer_label,
  coalesce(array(select jsonb_array_elements_text(q.accepted_answer_labels)), '{{}}'::text[]),
  q.status,
  q.is_edited,
  q.is_redacted,
  q.quiz_eligible,
  q.non_quiz_reason,
  q.requires_reference,
  q.question_source,
  q.cognitive_level,
  q.ka_code,
  q.ka_importance,
  q.tier_group,
  q.wiki_path,
  q.audit_status
from _salem_questions_raw q
left join _salem_sources ss on ss.source_key = q.source_key
left join public.sources s on s.source_type = ss.source_type and s.exam_year = ss.exam_year and s.title = ss.title
on conflict (slug) do update set
  source_id = excluded.source_id,
  title = excluded.title,
  stem_text = excluded.stem_text,
  official_answer_label = excluded.official_answer_label,
  accepted_answer_labels = excluded.accepted_answer_labels,
  status = excluded.status,
  is_edited = excluded.is_edited,
  is_redacted = excluded.is_redacted,
  quiz_eligible = excluded.quiz_eligible,
  non_quiz_reason = excluded.non_quiz_reason,
  requires_reference = excluded.requires_reference,
  question_source = excluded.question_source,
  cognitive_level = excluded.cognitive_level,
  ka_code = excluded.ka_code,
  ka_importance = excluded.ka_importance,
  tier_group = excluded.tier_group,
  wiki_path = excluded.wiki_path,
  audit_status = excluded.audit_status,
  updated_at = now();

insert into public.choices (question_id, label, choice_html, choice_text, is_correct)
select q.id, c.label, c.choice_html, c.choice_text, c.is_correct
from _salem_choices c
join public.questions q on q.slug = c.question_slug
on conflict (question_id, label) do update set
  choice_html = excluded.choice_html,
  choice_text = excluded.choice_text,
  is_correct = excluded.is_correct;

insert into public.question_topics (question_id, topic_id, relationship_type)
select q.id, t.id, qt.relationship_type
from _salem_question_topics qt
join public.questions q on q.slug = qt.question_slug
join public.topics t on t.slug = qt.topic_slug
on conflict (question_id, topic_id, relationship_type) do nothing;

insert into public.question_references (question_id, source_id, reference_note, reference_type)
select q.id, s.id, r.reference_note, r.reference_type
from _salem_question_references r
join public.questions q on q.slug = r.question_slug
join _salem_sources ss on ss.source_key = r.source_key
join public.sources s on s.source_type = ss.source_type and s.exam_year = ss.exam_year and s.title = ss.title
where not exists (
  select 1
  from public.question_references existing
  where existing.question_id = q.id
    and existing.source_id = s.id
    and existing.reference_type = r.reference_type
    and existing.reference_note is not distinct from r.reference_note
);

-- Import sanity checks. These raise errors before commit if natural-key resolution failed.
do $$
begin
  if (select count(*) from public.questions q join _salem_questions_raw raw on raw.slug = q.slug) <> (select count(*) from _salem_questions_raw) then
    raise exception 'question import count mismatch';
  end if;

  if (select count(*) from public.choices c join public.questions q on q.id = c.question_id join _salem_choices raw on raw.question_slug = q.slug and raw.label = c.label) <> (select count(*) from _salem_choices) then
    raise exception 'choice import count mismatch';
  end if;

  if (select count(*) from public.question_topics qt join public.questions q on q.id = qt.question_id join public.topics t on t.id = qt.topic_id join _salem_question_topics raw on raw.question_slug = q.slug and raw.topic_slug = t.slug and raw.relationship_type = qt.relationship_type) <> (select count(*) from _salem_question_topics) then
    raise exception 'question_topic import count mismatch';
  end if;
end $$;

commit;
"""


def check_import_readiness(
    schema_path: str | Path,
    import_sql_path: str | Path,
    env: Mapping[str, str] | None = None,
) -> Dict[str, Any]:
    env = env or os.environ
    schema_path = Path(schema_path)
    import_sql_path = Path(import_sql_path)
    issues: List[str] = []

    missing_env = [name for name in REQUIRED_ENV_NAMES if not env.get(name)]
    if missing_env:
        issues.append("missing_env")

    schema_text = schema_path.read_text(encoding="utf-8") if schema_path.exists() else ""
    if not schema_text:
        issues.append("schema_missing")
    missing_schema_objects = [obj for obj in REQUIRED_SCHEMA_OBJECTS if obj not in schema_text]
    if missing_schema_objects:
        issues.append("schema_missing_required_objects")

    if not import_sql_path.exists():
        issues.append("import_sql_missing")
    else:
        sql = import_sql_path.read_text(encoding="utf-8")
        if "begin;" not in sql.lower() or "commit;" not in sql.lower():
            issues.append("import_sql_not_transactional")
        if any(name in sql for name in REQUIRED_ENV_NAMES):
            issues.append("import_sql_contains_env_name")

    return {
        "ready": not issues,
        "issues": issues,
        "missing_env": missing_env,
        "required_env": list(REQUIRED_ENV_NAMES),
        "required_schema_objects": list(REQUIRED_SCHEMA_OBJECTS),
        "missing_schema_objects": missing_schema_objects,
        "schema_path": str(schema_path),
        "import_sql_path": str(import_sql_path),
    }


def _write_text(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def _write_json(path: Path, payload: Mapping[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, indent=2, sort_keys=True) + "\n", encoding="utf-8")


def main(argv: List[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Prepare Supabase import SQL from Salem quiz staging bundles.")
    subparsers = parser.add_subparsers(dest="command", required=True)

    generate = subparsers.add_parser("generate-sql", help="Generate transaction-safe SQL from a staging bundle.")
    generate.add_argument("--bundle", required=True, help="Path to supabase-staging-*.json")
    generate.add_argument("--out", required=True, help="Output SQL path")

    check = subparsers.add_parser("check-ready", help="Check local readiness to run an import SQL file.")
    check.add_argument("--schema", default="supabase/migrations/20260429_quiz_mvp_schema.sql")
    check.add_argument("--import-sql", required=True)
    check.add_argument("--out", help="Optional JSON report path")

    args = parser.parse_args(argv)

    if args.command == "generate-sql":
        bundle = load_staging_bundle(args.bundle)
        _write_text(Path(args.out), generate_import_sql(bundle))
        return 0

    report = check_import_readiness(args.schema, args.import_sql, os.environ)
    if args.out:
        _write_json(Path(args.out), report)
    else:
        print(json.dumps(report, indent=2, sort_keys=True))
    return 0 if report["ready"] else 1


if __name__ == "__main__":
    raise SystemExit(main())
