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
import re
import subprocess
import tempfile
from pathlib import Path
from typing import Any, Dict, Iterable, List, Mapping, Tuple


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
    env = os.environ if env is None else env
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


def _canonical(value: Any) -> Any:
    if isinstance(value, list):
        return sorted((_canonical(item) for item in value), key=lambda item: json.dumps(item, sort_keys=True))
    if isinstance(value, dict):
        return {key: _canonical(value[key]) for key in sorted(value)}
    return value


def _project(row: Mapping[str, Any], fields: Iterable[str]) -> Dict[str, Any]:
    return {field: _canonical(row.get(field)) for field in fields}


def _index(rows: Iterable[Mapping[str, Any]], key_fields: Tuple[str, ...]) -> Dict[Tuple[Any, ...], Mapping[str, Any]]:
    indexed: Dict[Tuple[Any, ...], Mapping[str, Any]] = {}
    for row in rows:
        key = tuple(row.get(field) for field in key_fields)
        indexed[key] = row
    return indexed


SYNC_COMPARISON_FIELDS: Dict[str, Tuple[str, ...]] = {
    "sources": ("title", "source_type", "exam_year", "public_access"),
    "topics": ("title", "topic_type", "wiki_slug"),
    "questions": (
        "source_key",
        "exam_year",
        "exam_type",
        "question_number",
        "track",
        "title",
        "stem_text",
        "official_answer_label",
        "accepted_answer_labels",
        "status",
        "is_edited",
        "is_redacted",
        "quiz_eligible",
        "non_quiz_reason",
        "requires_reference",
        "question_source",
        "cognitive_level",
        "ka_code",
        "ka_importance",
        "tier_group",
        "wiki_path",
        "audit_status",
    ),
    "choices": ("choice_html", "choice_text", "is_correct"),
    "question_topics": ("relationship_type",),
    "question_references": ("reference_note", "reference_type"),
}

SYNC_KEY_FIELDS: Dict[str, Tuple[str, ...]] = {
    "sources": ("source_key",),
    "topics": ("slug",),
    "questions": ("slug",),
    "choices": ("question_slug", "label"),
    "question_topics": ("question_slug", "topic_slug", "relationship_type"),
    "question_references": ("question_slug", "source_key", "reference_type", "reference_note"),
}


def _diff_section(
    desired_rows: Iterable[Mapping[str, Any]],
    current_rows: Iterable[Mapping[str, Any]],
    section: str,
) -> Dict[str, Any]:
    key_fields = SYNC_KEY_FIELDS[section]
    compare_fields = SYNC_COMPARISON_FIELDS[section]
    desired = _index(desired_rows, key_fields)
    current = _index(current_rows, key_fields)
    desired_keys = set(desired)
    current_keys = set(current)
    changed_keys = sorted(
        desired_keys & current_keys,
        key=lambda key: json.dumps(key),
    )
    changed = [
        key
        for key in changed_keys
        if _project(desired[key], compare_fields) != _project(current[key], compare_fields)
    ]
    return {
        "new": len(desired_keys - current_keys),
        "changed": len(changed),
        "unchanged": len((desired_keys & current_keys) - set(changed)),
        "missing_from_source": len(current_keys - desired_keys),
        "new_keys": [list(key) for key in sorted(desired_keys - current_keys, key=lambda key: json.dumps(key))[:50]],
        "changed_keys": [list(key) for key in changed[:50]],
        "missing_from_source_keys": [list(key) for key in sorted(current_keys - desired_keys, key=lambda key: json.dumps(key))[:50]],
    }


def build_sync_plan(bundle: Mapping[str, Any], db_snapshot: Mapping[str, Any]) -> Dict[str, Any]:
    """Compare a wiki-derived staging bundle with current DB content.

    The plan is intentionally non-destructive: missing rows and removed links are
    reported for review, but apply never deletes learner-progress-related rows.
    """
    validate_staging_bundle(bundle)
    for section in REQUIRED_BUNDLE_KEYS:
        if section not in db_snapshot:
            raise ImportReadinessError(f"db snapshot missing section: {section}")

    sections = {
        section: _diff_section(bundle[section], db_snapshot.get(section, []), section)
        for section in REQUIRED_BUNDLE_KEYS
    }

    desired_questions = _index(bundle["questions"], ("slug",))
    current_questions = _index(db_snapshot.get("questions", []), ("slug",))
    answer_key_changes = []
    for key in sorted(set(desired_questions) & set(current_questions), key=lambda item: json.dumps(item)):
        desired = desired_questions[key]
        current = current_questions[key]
        if _canonical(desired.get("accepted_answer_labels")) != _canonical(current.get("accepted_answer_labels")) or desired.get("official_answer_label") != current.get("official_answer_label"):
            answer_key_changes.append(key[0])

    review_required: List[str] = []
    if sections["questions"]["missing_from_source"]:
        review_required.append("missing_from_source")
    if sections["question_topics"]["missing_from_source"] or sections["question_references"]["missing_from_source"]:
        review_required.append("links_removed_from_source")
    if answer_key_changes:
        review_required.append("answer_key_changes")

    return {
        "summary": bundle.get("summary", {}),
        "sources": sections["sources"],
        "topics": sections["topics"],
        "questions": sections["questions"],
        "choices": sections["choices"],
        "question_topics": sections["question_topics"],
        "question_references": sections["question_references"],
        "links": {
            "question_topics_removed_from_source": sections["question_topics"]["missing_from_source"],
            "question_references_removed_from_source": sections["question_references"]["missing_from_source"],
        },
        "answer_key_changes": answer_key_changes[:50],
        "review_required": review_required,
        "safe_to_apply": not review_required,
        "deletes_performed_by_apply": False,
    }


def generate_sync_snapshot_sql(bundle: Mapping[str, Any]) -> str:
    validate_staging_bundle(bundle)
    scopes = sorted({
        (row["exam_year"], row["exam_type"])
        for row in bundle["questions"]
    })
    scope_json = _dollar_quote([
        {"exam_year": year, "exam_type": exam_type} for year, exam_type in scopes
    ], "salem_sync_scope")
    question_slugs_json = _dollar_quote([
        {"slug": row["slug"]} for row in bundle["questions"]
    ], "salem_sync_question_slugs")

    return f"""
with _salem_sync_scope as (
  select * from jsonb_to_recordset({scope_json}::jsonb) as x(exam_year integer, exam_type text)
), _salem_sync_question_slugs as (
  select * from jsonb_to_recordset({question_slugs_json}::jsonb) as x(slug text)
), scoped_questions as (
  select q.*
  from public.questions q
  join _salem_sync_scope s on s.exam_year = q.exam_year and s.exam_type = q.exam_type
), scoped_sources as (
  select distinct src.*,
    case
      when src.source_type = 'nrc_exam' and src.exam_year is not null then 'nrc-written-' || src.exam_year::text
      else src.source_type || ':' || coalesce(src.exam_year::text, '') || ':' || src.title
    end as source_key
  from public.sources src
  join scoped_questions q on q.source_id = src.id
), scoped_topics as (
  select distinct t.*
  from public.topics t
  join public.question_topics qt on qt.topic_id = t.id
  join scoped_questions q on q.id = qt.question_id
)
select jsonb_pretty(jsonb_build_object(
  'sources', coalesce((
    select jsonb_agg(jsonb_build_object(
      'source_key', source_key,
      'title', title,
      'source_type', source_type,
      'exam_year', exam_year,
      'public_access', public_access
    ) order by source_key) from scoped_sources
  ), '[]'::jsonb),
  'topics', coalesce((
    select jsonb_agg(jsonb_build_object(
      'slug', slug,
      'title', title,
      'topic_type', topic_type,
      'wiki_slug', wiki_slug
    ) order by slug) from scoped_topics
  ), '[]'::jsonb),
  'questions', coalesce((
    select jsonb_agg(jsonb_build_object(
      'source_key', ss.source_key,
      'exam_year', q.exam_year,
      'exam_type', q.exam_type,
      'question_number', q.question_number,
      'track', q.track,
      'title', q.title,
      'slug', q.slug,
      'stem_text', q.stem_text,
      'official_answer_label', q.official_answer_label,
      'accepted_answer_labels', to_jsonb(q.accepted_answer_labels),
      'status', q.status,
      'is_edited', q.is_edited,
      'is_redacted', q.is_redacted,
      'quiz_eligible', q.quiz_eligible,
      'non_quiz_reason', q.non_quiz_reason,
      'requires_reference', q.requires_reference,
      'question_source', q.question_source,
      'cognitive_level', q.cognitive_level,
      'ka_code', q.ka_code,
      'ka_importance', q.ka_importance,
      'tier_group', q.tier_group,
      'wiki_path', q.wiki_path,
      'audit_status', q.audit_status
    ) order by q.slug)
    from scoped_questions q
    left join scoped_sources ss on ss.id = q.source_id
  ), '[]'::jsonb),
  'choices', coalesce((
    select jsonb_agg(jsonb_build_object(
      'question_slug', q.slug,
      'label', c.label,
      'choice_html', c.choice_html,
      'choice_text', c.choice_text,
      'is_correct', c.is_correct
    ) order by q.slug, c.label)
    from public.choices c
    join scoped_questions q on q.id = c.question_id
  ), '[]'::jsonb),
  'question_topics', coalesce((
    select jsonb_agg(jsonb_build_object(
      'question_slug', q.slug,
      'topic_slug', t.slug,
      'relationship_type', qt.relationship_type
    ) order by q.slug, t.slug, qt.relationship_type)
    from public.question_topics qt
    join scoped_questions q on q.id = qt.question_id
    join public.topics t on t.id = qt.topic_id
  ), '[]'::jsonb),
  'question_references', coalesce((
    select jsonb_agg(jsonb_build_object(
      'question_slug', q.slug,
      'source_key', ss.source_key,
      'reference_note', qr.reference_note,
      'reference_type', qr.reference_type
    ) order by q.slug, ss.source_key, qr.reference_type, qr.reference_note)
    from public.question_references qr
    join scoped_questions q on q.id = qr.question_id
    left join scoped_sources ss on ss.id = qr.source_id
  ), '[]'::jsonb)
));
"""


def _redact_process_output(text: str) -> str:
    text = re.sub(r"postgres(?:ql)?://\S+", "postgresql://[REDACTED]", text)
    text = re.sub(r"db\.[a-z0-9]+\.supabase\.co", "db.[REDACTED].supabase.co", text)
    text = re.sub(r"aws-[^\s:@]+\.pooler\.supabase\.com", "aws-[REDACTED].pooler.supabase.com", text)
    text = re.sub(r"postgres\.[a-z0-9]+", "postgres.[REDACTED]", text)
    return text


def _run_psql_sql(sql: str, env: Mapping[str, str], psql_bin: str) -> str:
    db_url = env.get("SUPABASE_DB_URL")
    if not db_url:
        raise ImportReadinessError("SUPABASE_DB_URL is required for live sync")
    proc = subprocess.run(
        [psql_bin, db_url, "-v", "ON_ERROR_STOP=1", "-X", "-q", "-t", "-A", "-c", sql],
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        check=False,
    )
    if proc.returncode != 0:
        raise ImportReadinessError(_redact_process_output(proc.stderr.strip() or proc.stdout.strip()))
    return proc.stdout.strip()


def _run_psql_file(path: Path, env: Mapping[str, str], psql_bin: str) -> None:
    db_url = env.get("SUPABASE_DB_URL")
    if not db_url:
        raise ImportReadinessError("SUPABASE_DB_URL is required for live sync")
    proc = subprocess.run(
        [psql_bin, db_url, "-v", "ON_ERROR_STOP=1", "-X", "-f", str(path)],
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        check=False,
    )
    if proc.returncode != 0:
        raise ImportReadinessError(_redact_process_output(proc.stderr.strip() or proc.stdout.strip()))


def fetch_db_snapshot(bundle: Mapping[str, Any], env: Mapping[str, str] | None = None, psql_bin: str = "/opt/homebrew/opt/libpq/bin/psql") -> Dict[str, Any]:
    output = _run_psql_sql(generate_sync_snapshot_sql(bundle), env or os.environ, psql_bin)
    try:
        return json.loads(output)
    except json.JSONDecodeError as exc:
        raise ImportReadinessError(f"could not parse psql snapshot JSON: {exc}") from exc


def run_sync(
    bundle: Mapping[str, Any],
    db_snapshot: Mapping[str, Any] | None = None,
    apply: bool = False,
    env: Mapping[str, str] | None = None,
    psql_bin: str = "/opt/homebrew/opt/libpq/bin/psql",
) -> Dict[str, Any]:
    snapshot = db_snapshot or fetch_db_snapshot(bundle, env, psql_bin)
    before = build_sync_plan(bundle, snapshot)
    report: Dict[str, Any] = {"mode": "apply" if apply else "dry-run", "before": before}
    if not apply:
        return report

    with tempfile.NamedTemporaryFile("w", suffix=".sql", delete=False, encoding="utf-8") as handle:
        handle.write(generate_import_sql(bundle))
        temp_sql = Path(handle.name)
    try:
        _run_psql_file(temp_sql, env or os.environ, psql_bin)
    finally:
        temp_sql.unlink(missing_ok=True)

    after_snapshot = fetch_db_snapshot(bundle, env, psql_bin)
    report["after"] = build_sync_plan(bundle, after_snapshot)
    report["applied"] = True
    report["deletes_performed_by_apply"] = False
    return report


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

    sync = subparsers.add_parser("sync", help="Compare a wiki-derived staging bundle with Supabase and optionally apply non-destructive upserts.")
    sync.add_argument("--bundle", required=True, help="Path to supabase-staging-*.json")
    sync.add_argument("--snapshot", help="Optional offline DB snapshot JSON; when omitted, psql reads Supabase")
    sync.add_argument("--out", help="Optional JSON report path")
    sync.add_argument("--apply", action="store_true", help="Apply the generated import/upsert SQL after producing the dry-run plan")
    sync.add_argument("--psql-bin", default="/opt/homebrew/opt/libpq/bin/psql", help="psql binary path for live sync")

    snapshot_sql = subparsers.add_parser("snapshot-sql", help="Generate SQL that returns the current DB content snapshot as JSON.")
    snapshot_sql.add_argument("--bundle", required=True, help="Path to supabase-staging-*.json")
    snapshot_sql.add_argument("--out", help="Optional SQL output path")

    args = parser.parse_args(argv)

    if args.command == "generate-sql":
        bundle = load_staging_bundle(args.bundle)
        _write_text(Path(args.out), generate_import_sql(bundle))
        return 0

    if args.command == "snapshot-sql":
        bundle = load_staging_bundle(args.bundle)
        sql = generate_sync_snapshot_sql(bundle)
        if args.out:
            _write_text(Path(args.out), sql)
        else:
            print(sql)
        return 0

    if args.command == "sync":
        bundle = load_staging_bundle(args.bundle)
        snapshot = None
        if args.snapshot:
            with Path(args.snapshot).open(encoding="utf-8") as handle:
                snapshot = json.load(handle)
        report = run_sync(bundle, db_snapshot=snapshot, apply=args.apply, env=os.environ, psql_bin=args.psql_bin)
        if args.out:
            _write_json(Path(args.out), report)
        else:
            print(json.dumps(report, indent=2, sort_keys=True))
        return 0 if (not args.apply or report.get("applied")) else 1

    report = check_import_readiness(args.schema, args.import_sql, os.environ)
    if args.out:
        _write_json(Path(args.out), report)
    else:
        print(json.dumps(report, indent=2, sort_keys=True))
    return 0 if report["ready"] else 1


if __name__ == "__main__":
    raise SystemExit(main())
