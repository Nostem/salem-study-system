#!/usr/bin/env python3
"""Build the static Astro quiz bank from a Supabase staging bundle.

The wiki question Markdown remains canonical. This script converts the staging
bundle into the frontend shape and enriches it with wiki frontmatter titles and
question explanation HTML/text so `site/src/data/quiz-bank.json` is deterministic.
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path
from typing import Any, Dict, Iterable, List

ROOT_FOR_IMPORTS = Path(__file__).resolve().parents[1]
if str(ROOT_FOR_IMPORTS) not in sys.path:
    sys.path.insert(0, str(ROOT_FOR_IMPORTS))

from scripts.exam_question_import import parse_frontmatter, slugify, strip_html


DEFAULT_BUNDLE = Path("data/quiz-import/supabase-staging-all.json")
DEFAULT_OUT = Path("site/src/data/quiz-bank.json")


def _load_json(path: Path) -> Dict[str, Any]:
    return json.loads(path.read_text(encoding="utf-8"))


def _slug_aliases(value: str) -> set[str]:
    base = slugify(value)
    aliases = {base}
    if "&" in value:
        aliases.add(slugify(value.replace("&", "and")))
    if " and " in value.lower():
        aliases.add(slugify(value.replace(" and ", " & ").replace(" And ", " & ").replace(" AND ", " & ")))
    if "-and-" in base:
        aliases.add(base.replace("-and-", "-"))
    return {alias for alias in aliases if alias}


def _wiki_title_index(root: Path) -> Dict[str, str]:
    titles: Dict[str, str] = {}
    for path in sorted((root / "wiki").rglob("*.md")):
        raw = path.read_text(encoding="utf-8")
        frontmatter, _ = parse_frontmatter(raw)
        title = frontmatter.get("title")
        if not title:
            continue
        title_text = str(title).strip()
        if not title_text:
            continue
        for key in _slug_aliases(path.stem):
            titles[key] = title_text
        for key in _slug_aliases(title_text):
            titles[key] = title_text
        for alias in frontmatter.get("aliases") or []:
            for key in _slug_aliases(str(alias)):
                titles[key] = title_text
    return titles


def _extract_explanation(raw: str) -> tuple[str, str]:
    marker = "<details>"
    start = raw.find(marker)
    if start == -1:
        return "", ""
    end = raw.find("</details>", start)
    if end == -1:
        return "", ""
    details = raw[start : end + len("</details>")]
    div_start = details.find('<div style="margin-top:10px')
    if div_start == -1:
        return "", strip_html(details)
    div_end = details.rfind("</div>")
    if div_end == -1 or div_end < div_start:
        explanation_html = details[div_start:].strip()
    else:
        explanation_html = details[div_start : div_end + len("</div>")].strip()
    return explanation_html, strip_html(explanation_html)


def _question_explanation_index(root: Path, questions: Iterable[Dict[str, Any]]) -> Dict[str, Dict[str, str]]:
    explanations: Dict[str, Dict[str, str]] = {}
    for question in questions:
        rel = question.get("wiki_path")
        slug = question.get("slug")
        if not rel or not slug:
            continue
        path = root / str(rel)
        if not path.exists():
            continue
        raw = path.read_text(encoding="utf-8")
        explanation_html, explanation_text = _extract_explanation(raw)
        explanations[str(slug)] = {
            "explanationHtml": explanation_html,
            "explanationText": explanation_text,
        }
    return explanations


def _camel_question(question: Dict[str, Any]) -> Dict[str, Any]:
    return {
        "slug": question.get("slug"),
        "examYear": question.get("exam_year"),
        "examType": question.get("exam_type"),
        "questionNumber": question.get("question_number"),
        "track": question.get("track"),
        "title": question.get("title"),
        "stemText": question.get("stem_text") or "",
        "officialAnswerLabel": question.get("official_answer_label"),
        "acceptedAnswerLabels": question.get("accepted_answer_labels") or [],
        "status": question.get("status"),
        "isEdited": bool(question.get("is_edited")),
        "isRedacted": bool(question.get("is_redacted")),
        "quizEligible": bool(question.get("quiz_eligible")),
        "nonQuizReason": question.get("non_quiz_reason"),
        "requiresReference": bool(question.get("requires_reference")),
        "questionSource": question.get("question_source"),
        "cognitiveLevel": question.get("cognitive_level"),
        "kaCode": question.get("ka_code"),
        "kaImportance": question.get("ka_importance"),
        "tierGroup": question.get("tier_group"),
        "wikiPath": question.get("wiki_path"),
        "auditStatus": question.get("audit_status"),
    }


def _choice_rows_by_question(choices: Iterable[Dict[str, Any]]) -> Dict[str, List[Dict[str, Any]]]:
    by_question: Dict[str, List[Dict[str, Any]]] = {}
    for choice in choices:
        by_question.setdefault(choice["question_slug"], []).append(
            {
                "label": choice.get("label"),
                "text": choice.get("choice_text") or "",
                "html": choice.get("choice_html") or "",
                "isCorrect": bool(choice.get("is_correct")),
            }
        )
    for rows in by_question.values():
        rows.sort(key=lambda row: row.get("label") or "")
    return by_question


def _topic_rows(bundle_topics: Iterable[Dict[str, Any]], title_index: Dict[str, str]) -> Dict[str, Dict[str, Any]]:
    topics: Dict[str, Dict[str, Any]] = {}
    for topic in bundle_topics:
        slug = topic.get("slug")
        if not slug:
            continue
        wiki_slug = topic.get("wiki_slug") or slug
        title = title_index.get(slugify(wiki_slug)) or title_index.get(slugify(slug)) or topic.get("title") or str(slug).replace("-", " ").title()
        topics[slug] = {
            "slug": slug,
            "title": title,
            "topic_type": topic.get("topic_type"),
            "wiki_slug": wiki_slug,
        }
    return topics


def _topic_links_by_question(question_topics: Iterable[Dict[str, Any]], topics: Dict[str, Dict[str, Any]]) -> Dict[str, List[Dict[str, Any]]]:
    by_question: Dict[str, List[Dict[str, Any]]] = {}
    for link in question_topics:
        question_slug = link.get("question_slug")
        topic_slug = link.get("topic_slug")
        if not question_slug or not topic_slug:
            continue
        base = topics.get(topic_slug)
        if not base:
            continue
        by_question.setdefault(question_slug, []).append(
            {
                "slug": base["slug"],
                "title": base["title"],
                "relationshipType": link.get("relationship_type"),
                "topicType": base.get("topic_type"),
                "wikiSlug": base.get("wiki_slug"),
            }
        )
    for rows in by_question.values():
        rows.sort(key=lambda row: (row.get("title") or "", row.get("slug") or ""))
    return by_question


def build_quiz_bank(root: Path, bundle_path: Path) -> Dict[str, Any]:
    root = root.resolve()
    bundle_path = bundle_path if bundle_path.is_absolute() else root / bundle_path
    bundle = _load_json(bundle_path)
    title_index = _wiki_title_index(root)
    topics_by_slug = _topic_rows(bundle.get("topics", []), title_index)
    choices_by_question = _choice_rows_by_question(bundle.get("choices", []))
    topics_by_question = _topic_links_by_question(bundle.get("question_topics", []), topics_by_slug)
    explanations = _question_explanation_index(root, bundle.get("questions", []))

    questions: List[Dict[str, Any]] = []
    for source_question in sorted(bundle.get("questions", []), key=lambda q: (q.get("exam_year") or 0, q.get("question_number") or 0, q.get("slug") or "")):
        slug = source_question.get("slug")
        question = _camel_question(source_question)
        question.update(explanations.get(slug, {"explanationHtml": "", "explanationText": ""}))
        question["choices"] = choices_by_question.get(slug, [])
        question["topics"] = topics_by_question.get(slug, [])
        questions.append(question)

    rel_bundle = bundle_path.relative_to(root).as_posix() if bundle_path.is_relative_to(root) else bundle_path.as_posix()
    return {
        "generatedFrom": rel_bundle,
        "summary": bundle.get("summary", {}),
        "questions": questions,
        "topics": sorted(topics_by_slug.values(), key=lambda topic: (topic.get("title") or "", topic.get("slug") or "")),
    }


def write_quiz_bank(bank: Dict[str, Any], out_path: Path) -> None:
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps(bank, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def main() -> int:
    parser = argparse.ArgumentParser(description="Build static frontend quiz bank JSON from Supabase staging bundle.")
    parser.add_argument("--root", type=Path, default=Path.cwd())
    parser.add_argument("--bundle", type=Path, default=DEFAULT_BUNDLE)
    parser.add_argument("--out", type=Path, default=DEFAULT_OUT)
    args = parser.parse_args()

    root = args.root.resolve()
    out = args.out if args.out.is_absolute() else root / args.out
    bank = build_quiz_bank(root, args.bundle)
    write_quiz_bank(bank, out)
    print(
        json.dumps(
            {
                "out": out.relative_to(root).as_posix() if out.is_relative_to(root) else out.as_posix(),
                "questions": len(bank["questions"]),
                "choices": sum(len(question["choices"]) for question in bank["questions"]),
                "topics": len(bank["topics"]),
            },
            indent=2,
        )
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
