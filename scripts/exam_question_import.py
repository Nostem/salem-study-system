#!/usr/bin/env python3
"""Import helpers for Salem written exam question metadata.

This module is intentionally file-based and side-effect free for now. It converts
existing `data/exams/*.yaml` and `wiki/exams/YYYY/q*.md` content into normalized
records that can later be inserted into Supabase/Postgres.
"""

from __future__ import annotations

import argparse
from collections import Counter
import html
import json
import re
from pathlib import Path
from typing import Any, Dict, List, Tuple

import yaml


FRONTMATTER_RE = re.compile(r"\A---\s*\n(.*?)\n---\s*\n", re.DOTALL)
CHOICE_RE = re.compile(
    r'<div[^>]*>\s*<strong>([A-D])\.</strong>\s*(.*?)</div>',
    re.DOTALL | re.IGNORECASE,
)
CORRECT_RE = re.compile(r"[✓&#10003;]\s*([A-D])(?:\s*&(?:amp;)?\s*([A-D]))?\.\s*(?:Both\s+)?Correct", re.IGNORECASE)
REF_RE = re.compile(r'<div[^>]*>\s*(Ref:.*?)</div>', re.DOTALL | re.IGNORECASE)
QUESTION_PATH_RE = re.compile(r"wiki/exams/(\d{4})/q(\d+)-", re.IGNORECASE)
WIKILINK_RE = re.compile(r"\[\[([^\]]+)\]\]")


def slugify(value: Any) -> str:
    text = str(value or "").strip()
    text = text.split("|", 1)[0].split("#", 1)[0]
    text = html.unescape(text).lower()
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return text.strip("-")


def slug_variants(value: Any) -> set[str]:
    """Return resolver slugs for wiki labels, including ampersand/and variants."""
    text = str(value or "").strip()
    variants = {slugify(text)}
    if "&" in html.unescape(text):
        variants.add(slugify(html.unescape(text).replace("&", " and ")))
    return {slug for slug in variants if slug}


def _strip_doc_marker(text: str) -> str:
    text = text.lstrip("\ufeff")
    if text.startswith("---\n"):
        return text[4:]
    if text.startswith("---\r\n"):
        return text[5:]
    return text


def _sanitize_yaml_placeholders(text: str) -> str:
    # Some corpus rows use bare `?` as an unknown scalar, which PyYAML
    # interprets as YAML syntax rather than a value. Treat it as unknown/null.
    return re.sub(r":\s*\?\s*$", ": null", text, flags=re.MULTILINE)


def load_exam_yaml(path: str | Path) -> List[Dict[str, Any]]:
    """Load an exam YAML file regardless of root shape.

    Some older files are a plain list after a leading YAML document marker. Newer
    files use a mapping with a `questions` key. Return the normalized question
    list without mutating values such as `reference: no`.
    """
    path = Path(path)
    raw = _sanitize_yaml_placeholders(_strip_doc_marker(path.read_text(encoding="utf-8")))
    data = yaml.safe_load(raw)

    if isinstance(data, list):
        questions = data
    elif isinstance(data, dict) and isinstance(data.get("questions"), list):
        questions = data["questions"]
    else:
        raise ValueError(f"Unsupported exam YAML shape in {path}")

    return [dict(q) for q in questions]


def parse_frontmatter(markdown: str) -> Tuple[Dict[str, Any], str]:
    match = FRONTMATTER_RE.match(markdown)
    if not match:
        return {}, markdown
    fm = yaml.safe_load(match.group(1)) or {}
    return dict(fm), markdown[match.end():]


def strip_html(value: str) -> str:
    value = re.sub(r"<br\s*/?>", "\n", value, flags=re.IGNORECASE)
    value = re.sub(r"&bull;", "•", value)
    value = re.sub(r"<[^>]+>", "", value)
    value = html.unescape(value)
    value = re.sub(r"[ \t]+", " ", value)
    value = re.sub(r"\n\s*\n+", "\n\n", value)
    return value.strip()


def _bool_from_frontmatter(value: Any) -> bool | None:
    if value is None:
        return None
    if isinstance(value, bool):
        return value
    text = str(value).strip().lower()
    if text in {"yes", "true", "y", "1"}:
        return True
    if text in {"no", "false", "n", "0"}:
        return False
    return None


def _normalized_status(frontmatter_status: Any, title: str) -> Tuple[str, bool]:
    raw = str(frontmatter_status or "active").strip().lower()
    title_upper = title.upper()

    is_edited = raw == "edited" or "[EDITED]" in title_upper
    if raw == "edited":
        return "active", True
    if raw in {"outdated", "draft", "needs_review", "retired", "conflict", "active"}:
        return raw, is_edited
    return raw or "active", is_edited


def _parse_identity(path: Path, title: str) -> Tuple[int | None, int | None]:
    normalized = str(path).replace("\\", "/")
    match = QUESTION_PATH_RE.search(normalized)
    if match:
        return int(match.group(1)), int(match.group(2))

    title_match = re.search(r"(20\d{2})\s+Q(\d+)", title)
    if title_match:
        return int(title_match.group(1)), int(title_match.group(2))
    return None, None


def _extract_stem(body: str) -> str:
    # The stem is the first question card text block before the choices block.
    match = re.search(
        r'<div[^>]*font-size:13px[^>]*>\s*(.*?)</div>\s*\n\s*<div[^>]*margin-bottom:14px',
        body,
        re.DOTALL | re.IGNORECASE,
    )
    if match:
        return strip_html(match.group(1))
    return ""


def _extract_choices(body: str, correct_labels: List[str]) -> List[Dict[str, Any]]:
    choices: List[Dict[str, Any]] = []
    for label, choice_html in CHOICE_RE.findall(body):
        label = label.upper()
        choices.append(
            {
                "label": label,
                "choice_html": choice_html.strip(),
                "choice_text": strip_html(choice_html),
                "is_correct": label in correct_labels,
            }
        )
    return choices


def _extract_correct_labels(body: str) -> List[str]:
    match = CORRECT_RE.search(body)
    if match:
        return [label.upper() for label in match.groups() if label]
    # Fallback for text variants where the checkmark entity was already altered.
    match = re.search(r"(?:Correct\.</strong>|Correct\.)", body, re.IGNORECASE)
    if match:
        prefix = body[max(0, match.start() - 40) : match.start()]
        label_match = re.search(r"([A-D])\.\s*$", strip_html(prefix))
        if label_match:
            return [label_match.group(1).upper()]
    return []


def _extract_reference_note(body: str) -> str:
    matches = REF_RE.findall(body)
    if not matches:
        return ""
    return strip_html(matches[-1])


def _is_redacted_question(title: str, body: str) -> bool:
    text = f"{title}\n{strip_html(body)}".lower()
    return "redacted" in text and "security" in text


def _quiz_policy(status: str, is_redacted: bool, choices: List[Dict[str, Any]]) -> Tuple[bool, str | None]:
    if is_redacted:
        return False, "security_redacted"
    if status in {"draft", "outdated", "needs_review", "conflict", "retired"}:
        return False, f"status_{status}"
    if len(choices) != 4:
        return False, "invalid_choice_count"
    return True, None


def _extract_connections(body: str) -> Dict[str, List[str]]:
    connections: Dict[str, List[str]] = {}
    match = re.search(r"^##\s+Connections\s*$(.*?)(?:^##\s+|\Z)", body, re.MULTILINE | re.DOTALL)
    if not match:
        return connections

    for line in match.group(1).splitlines():
        if not line.strip().startswith("-") or ":" not in line:
            continue
        key, rest = line.strip().lstrip("-").split(":", 1)
        key = key.strip().lower()
        links = [link.strip() for link in WIKILINK_RE.findall(rest)]
        if links:
            connections[key] = links
    return connections


def parse_question_markdown(path: str | Path) -> Dict[str, Any]:
    """Parse one existing wiki exam question article into a DB-ready record."""
    path = Path(path)
    raw = path.read_text(encoding="utf-8")
    frontmatter, body = parse_frontmatter(raw)

    title = str(frontmatter.get("title") or "")
    year, number = _parse_identity(path, title)
    status, is_edited = _normalized_status(frontmatter.get("status"), title)
    requires_reference = _bool_from_frontmatter(frontmatter.get("reference"))
    correct_labels = _extract_correct_labels(body)
    correct_label = correct_labels[0] if correct_labels else None
    choices = _extract_choices(body, correct_labels)
    is_redacted = _is_redacted_question(title, body)
    quiz_eligible, non_quiz_reason = _quiz_policy(status, is_redacted, choices)

    return {
        "year": year,
        "number": number,
        "title": title,
        "slug": path.stem,
        "wiki_path": str(path),
        "status": status,
        "is_edited": is_edited,
        "is_redacted": is_redacted,
        "quiz_eligible": quiz_eligible,
        "non_quiz_reason": non_quiz_reason,
        "requires_reference": requires_reference,
        "official_answer_label": correct_label,
        "accepted_answer_labels": correct_labels,
        "stem_text": _extract_stem(body),
        "choices": choices,
        "reference_note": _extract_reference_note(body),
        "connections": _extract_connections(body),
        "aliases": frontmatter.get("aliases") or [],
    }


def _reference_required_from_yaml(value: Any) -> bool | None:
    if value is None:
        return None
    return _bool_from_frontmatter(value)


def build_question_record(
    yaml_question: Dict[str, Any], markdown_question: Dict[str, Any]
) -> Dict[str, Any]:
    """Merge YAML metadata and parsed markdown into one normalized import record."""
    requires_reference = markdown_question.get("requires_reference")
    if requires_reference is None:
        requires_reference = _reference_required_from_yaml(yaml_question.get("reference"))

    official_answer = markdown_question.get("official_answer_label") or yaml_question.get("answer")
    if official_answer is not None:
        official_answer = str(official_answer).upper()

    yaml_answer = yaml_question.get("answer")
    if yaml_answer is not None:
        yaml_answer = str(yaml_answer).upper()

    markdown_answer = markdown_question.get("official_answer_label")
    if markdown_answer is not None:
        markdown_answer = str(markdown_answer).upper()

    topic_slugs: List[str] = []
    for key in ("systems", "tech_specs"):
        for slug in yaml_question.get(key) or []:
            normalized = slugify(slug)
            if normalized and normalized not in topic_slugs:
                topic_slugs.append(normalized)

    return {
        "exam_year": markdown_question.get("year"),
        "question_number": markdown_question.get("number") or yaml_question.get("number"),
        "title": markdown_question.get("title"),
        "slug": markdown_question.get("slug"),
        "wiki_path": markdown_question.get("wiki_path"),
        "status": markdown_question.get("status") or "active",
        "is_edited": bool(markdown_question.get("is_edited")),
        "is_redacted": bool(markdown_question.get("is_redacted")),
        "quiz_eligible": bool(markdown_question.get("quiz_eligible")),
        "non_quiz_reason": markdown_question.get("non_quiz_reason"),
        "requires_reference": requires_reference,
        "track": yaml_question.get("type"),
        "topic": yaml_question.get("topic"),
        "topic_slugs": topic_slugs,
        "question_source": yaml_question.get("source"),
        "cognitive_level": yaml_question.get("cognitive_level"),
        "ka_code": yaml_question.get("ka"),
        "ka_importance": yaml_question.get("ka_importance"),
        "tier_group": yaml_question.get("tier_group"),
        "official_answer_label": official_answer,
        "yaml_answer_label": yaml_answer,
        "markdown_answer_label": markdown_answer,
        "accepted_answer_labels": markdown_question.get("accepted_answer_labels") or ([official_answer] if official_answer else []),
        "stem_text": markdown_question.get("stem_text"),
        "choices": markdown_question.get("choices") or [],
        "reference_note": markdown_question.get("reference_note") or "",
        "connections": markdown_question.get("connections") or {},
        "aliases": markdown_question.get("aliases") or [],
        "audit_status": "imported",
    }


def _exam_yaml_path(root: Path, exam_year: int) -> Path:
    return root / "data" / "exams" / f"{exam_year}-written-exam.yaml"


def _markdown_path_by_question(root: Path, exam_year: int) -> Dict[int, Path]:
    exam_dir = root / "wiki" / "exams" / str(exam_year)
    paths: Dict[int, Path] = {}
    for path in sorted(exam_dir.glob("q*.md")):
        match = re.match(r"q(\d+)-", path.name, re.IGNORECASE)
        if match:
            paths[int(match.group(1))] = path
    return paths


def collect_question_records(
    root: str | Path,
    exam_year: int | None = None,
    topic_map: Dict[str, Dict[str, Any]] | None = None,
) -> List[Dict[str, Any]]:
    """Collect normalized records from YAML + markdown for one year or all years."""
    root = Path(root)
    if exam_year is None:
        years = sorted(
            int(match.group(1))
            for path in (root / "data" / "exams").glob("*-written-exam.yaml")
            if (match := re.match(r"(\d{4})-written-exam\.yaml$", path.name))
        )
    else:
        years = [exam_year]

    records: List[Dict[str, Any]] = []
    for year in years:
        yaml_path = _exam_yaml_path(root, year)
        markdown_by_number = _markdown_path_by_question(root, year)
        for yaml_question in load_exam_yaml(yaml_path):
            number = int(yaml_question["number"])
            markdown_path = markdown_by_number.get(number)
            if markdown_path is None:
                markdown_question = {
                    "year": year,
                    "number": number,
                    "title": f"{year} Q{number}",
                    "slug": f"{year}-q{number}",
                    "wiki_path": "",
                    "status": "needs_review",
                    "is_edited": False,
                    "is_redacted": False,
                    "quiz_eligible": False,
                    "non_quiz_reason": "missing_markdown",
                    "requires_reference": None,
                    "official_answer_label": None,
                    "accepted_answer_labels": [],
                    "stem_text": "",
                    "choices": [],
                    "reference_note": "",
                    "connections": {},
                    "aliases": [],
                }
            else:
                markdown_question = parse_question_markdown(markdown_path)
            record = build_question_record(yaml_question, markdown_question)
            if topic_map is not None:
                record["resolved_topic_slugs"] = resolve_record_topic_slugs(record, topic_map)
            records.append(record)
    return records


def load_topic_map(path: str | Path) -> Dict[str, Dict[str, Any]]:
    """Load the controlled legacy topic routing map if present."""
    path = Path(path)
    if not path.exists():
        return {}
    data = yaml.safe_load(path.read_text(encoding="utf-8")) or {}
    mappings = data.get("mappings", data)
    if not isinstance(mappings, dict):
        raise ValueError(f"Topic map must be a mapping: {path}")
    return {slugify(key): (value or {}) for key, value in mappings.items()}


def _record_route_keys(record: Dict[str, Any]) -> set[str]:
    year = record.get("exam_year")
    number = record.get("question_number")
    slug = record.get("slug")
    keys = {str(slug or "")}
    if year and number:
        keys.add(f"{year}-q{number}")
        keys.add(f"{year}-q{int(number):02d}")
    return {key for key in keys if key}


def _route_target_resolves(route: Any, known_wiki_slugs: set[str]) -> bool:
    if isinstance(route, str):
        target = route
    elif isinstance(route, dict):
        target = route.get("target_wiki") or route.get("target_slug")
    else:
        target = None
    if not target:
        return False
    return any(variant in known_wiki_slugs for variant in slug_variants(target))


def _route_target_slugs(route: Any) -> List[str]:
    if isinstance(route, str):
        target = route
        add_topic_slugs: List[Any] = []
    elif isinstance(route, dict):
        target = route.get("target_wiki") or route.get("target_slug")
        add_topic_slugs = route.get("add_topic_slugs") or []
    else:
        target = None
        add_topic_slugs = []

    slugs: List[str] = []
    if target:
        target_variants = sorted(slug_variants(target))
        # Prefer explicit "and" variants for ampersand titles because legacy exam
        # metadata and wiki aliases commonly use spelled-out slugs.
        preferred = next((slug for slug in target_variants if "-and-" in slug), None)
        slugs.append(preferred or (target_variants[0] if target_variants else slugify(target)))

    for extra_slug in add_topic_slugs:
        normalized = slugify(extra_slug)
        if normalized:
            slugs.append(normalized)
    return slugs


def resolve_topic_slug_for_record(
    topic_slug: str,
    record: Dict[str, Any],
    topic_map: Dict[str, Dict[str, Any]] | None = None,
) -> List[str]:
    """Resolve one raw topic slug through direct and per-question mappings."""
    normalized = slugify(topic_slug)
    if not normalized:
        return []

    mapping = (topic_map or {}).get(normalized)
    if not mapping:
        return [normalized]

    for key in _record_route_keys(record):
        route = (mapping.get("question_routes") or {}).get(key)
        if route:
            routed = _route_target_slugs(route)
            return routed or [normalized]

    if mapping.get("status") == "needs_split":
        return [normalized]

    target = mapping.get("target_wiki") or mapping.get("target_slug")
    if target:
        direct = _route_target_slugs(target)
        return direct or [normalized]
    return [normalized]


def resolve_record_topic_slugs(
    record: Dict[str, Any],
    topic_map: Dict[str, Dict[str, Any]] | None = None,
) -> List[str]:
    """Emit stable DB/import topic slugs while preserving source order."""
    resolved: List[str] = []
    for topic_slug in record.get("topic_slugs") or []:
        for candidate in resolve_topic_slug_for_record(topic_slug, record, topic_map):
            if candidate and candidate != "unknown" and candidate not in resolved:
                resolved.append(candidate)
    return resolved


def _topic_map_target_resolves(
    topic_slug: str,
    topic_map: Dict[str, Dict[str, Any]],
    known_wiki_slugs: set[str],
    record: Dict[str, Any],
) -> bool:
    mapping = topic_map.get(slugify(topic_slug)) or {}
    for key in _record_route_keys(record):
        route = (mapping.get("question_routes") or {}).get(key)
        if _route_target_resolves(route, known_wiki_slugs):
            return True
    if mapping.get("status") == "needs_split":
        return False
    target = mapping.get("target_wiki") or mapping.get("target_slug")
    if not target:
        return False
    return any(variant in known_wiki_slugs for variant in slug_variants(target))


def build_wiki_slug_index(root: str | Path) -> set[str]:
    """Build a slug/alias index for resolving Obsidian-style wikilinks."""
    root = Path(root)
    slugs: set[str] = set()
    for path in (root / "wiki").rglob("*.md"):
        slugs.update(slug_variants(path.stem))
        raw = path.read_text(encoding="utf-8")
        frontmatter, _ = parse_frontmatter(raw)
        title = frontmatter.get("title")
        if title:
            slugs.update(slug_variants(title))
        for alias in frontmatter.get("aliases") or []:
            slugs.update(slug_variants(alias))
    return {slug for slug in slugs if slug}


def _add_issue(issues: List[Dict[str, Any]], record: Dict[str, Any], issue: str, detail: str) -> None:
    issues.append(
        {
            "issue": issue,
            "exam_year": record.get("exam_year"),
            "question_number": record.get("question_number"),
            "slug": record.get("slug"),
            "status": record.get("status"),
            "detail": detail,
        }
    )


def _sorted_audit_items(items: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    return sorted(items, key=lambda item: (item.get("exam_year") or 0, item.get("question_number") or 0, item["issue"]))


def audit_question_records(
    records: List[Dict[str, Any]],
    known_wiki_slugs: set[str] | None = None,
    topic_map: Dict[str, Dict[str, Any]] | None = None,
) -> Dict[str, Any]:
    """Return deterministic import audit counts and review-needed issues."""
    issues: List[Dict[str, Any]] = []
    review_items: List[Dict[str, Any]] = []
    status_counts = Counter(str(record.get("status") or "unknown") for record in records)
    reference_counts = Counter(str(record.get("requires_reference")) for record in records)
    default_quiz_excluded_counts = Counter(
        str(record.get("status") or "unknown")
        for record in records
        if record.get("status") in {"outdated", "needs_review", "conflict", "retired", "draft"}
    )

    topic_map = topic_map or {}

    for record in records:
        choices = record.get("choices") or []
        accepted = record.get("accepted_answer_labels") or []
        official = record.get("official_answer_label")
        choice_labels = {choice.get("label") for choice in choices}
        correct_choice_labels = {choice.get("label") for choice in choices if choice.get("is_correct")}

        if not choices:
            if record.get("is_redacted") or record.get("non_quiz_reason") == "security_redacted":
                _add_issue(review_items, record, "redacted_question_excluded", "Security-redacted public question is excluded from normal quiz pools.")
            else:
                _add_issue(issues, record, "missing_choices", "Question has no parsed answer choices.")
        elif len(choices) != 4:
            _add_issue(issues, record, "unexpected_choice_count", f"Expected 4 choices, found {len(choices)}.")

        if not official:
            _add_issue(issues, record, "missing_official_answer", "Question has no official answer label.")
        if not accepted:
            _add_issue(issues, record, "missing_accepted_answers", "Question has no accepted answer labels.")
        if len(accepted) > 1:
            _add_issue(review_items, record, "multiple_accepted_answers", f"Accepted labels: {accepted}.")
        for label in accepted:
            if choices and label not in choice_labels:
                _add_issue(issues, record, "accepted_answer_without_choice", f"Accepted label {label} has no matching choice.")
        if choices and accepted and correct_choice_labels != set(accepted):
            _add_issue(issues, record, "correct_choice_mismatch", f"Correct choices {sorted(correct_choice_labels)} != accepted {accepted}.")

        yaml_answer = record.get("yaml_answer_label")
        markdown_answer = record.get("markdown_answer_label")
        if yaml_answer and markdown_answer and yaml_answer not in accepted:
            _add_issue(
                issues,
                record,
                "yaml_markdown_answer_mismatch",
                f"YAML answer {yaml_answer} is not among markdown accepted answers {accepted}.",
            )

        if known_wiki_slugs is not None:
            for topic_slug in record.get("topic_slugs") or []:
                normalized_topic_slug = slugify(topic_slug)
                if normalized_topic_slug == "unknown":
                    continue
                if normalized_topic_slug in known_wiki_slugs:
                    continue
                if _topic_map_target_resolves(normalized_topic_slug, topic_map, known_wiki_slugs, record):
                    continue
                _add_issue(issues, record, "unresolved_topic_slug", f"Topic slug does not resolve: {topic_slug}")

            for links in (record.get("connections") or {}).values():
                for link in links:
                    if slugify(link) not in known_wiki_slugs:
                        _add_issue(issues, record, "unresolved_connection", f"Connection link does not resolve: {link}")

        if record.get("requires_reference") is None:
            _add_issue(issues, record, "missing_reference_flag", "Question has no explicit reference flag.")

    issue_counts = Counter(issue["issue"] for issue in issues)
    review_counts = Counter(item["issue"] for item in review_items)
    return {
        "total_records": len(records),
        "status_counts": dict(sorted(status_counts.items())),
        "reference_counts": dict(sorted(reference_counts.items())),
        "default_quiz_excluded_counts": dict(sorted(default_quiz_excluded_counts.items())),
        "issue_counts": dict(sorted(issue_counts.items())),
        "review_counts": dict(sorted(review_counts.items())),
        "issues": _sorted_audit_items(issues),
        "review_items": _sorted_audit_items(review_items),
    }


def _write_json(path: Path, payload: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, indent=2, sort_keys=True) + "\n", encoding="utf-8")


def main(argv: List[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Export and audit Salem exam question imports.")
    parser.add_argument("command", choices=["export", "audit"])
    parser.add_argument("--root", default=".", help="Project root. Defaults to current directory.")
    parser.add_argument("--exam-year", type=int, help="Limit to one exam year.")
    parser.add_argument("--out", help="Write JSON output to this path. Defaults to stdout.")
    parser.add_argument("--topic-map", default="data/topic-map.yaml", help="Controlled topic map for audit resolution.")
    args = parser.parse_args(argv)

    topic_map_path = Path(args.root) / args.topic_map
    topic_map = load_topic_map(topic_map_path)
    records = collect_question_records(args.root, exam_year=args.exam_year, topic_map=topic_map)
    if args.command == "export":
        payload: Any = records
    else:
        payload = audit_question_records(
            records,
            known_wiki_slugs=build_wiki_slug_index(args.root),
            topic_map=topic_map,
        )

    if args.out:
        _write_json(Path(args.out), payload)
    else:
        print(json.dumps(payload, indent=2, sort_keys=True))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
