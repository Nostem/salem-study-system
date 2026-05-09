#!/usr/bin/env python3
"""Validate structured quiz-bank v2 JSON.

Reports schema and data-quality errors with non-zero exit on errors.
This is a guardrail for changes to ``site/src/data/quiz-bank-v2.json`` so
that future generation runs can be caught before any UI work consumes it.

Usage:
    python3 scripts/validate_structured_quiz_bank.py \
        [--in site/src/data/quiz-bank-v2.json] \
        [--exam-images site/public/exam-images] \
        [--image-prefix /salem-study-system/exam-images/] \
        [--strict]

Exit codes:
    0 — no errors (warnings may be present unless ``--strict``)
    1 — one or more errors found (or warnings in ``--strict`` mode)
    2 — invalid invocation / unreadable input
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any, Iterable

SCHEMA_VERSION = 1
KNOWN_BLOCK_TYPES = {"paragraph", "image", "table", "list", "code"}
KNOWN_SOURCE_REF_KINDS = {"wiki", "quiz-bank", "source"}
SLUG_PATTERN = re.compile(r"^[a-z0-9][a-z0-9-]*$")


@dataclass
class ValidationReport:
    errors: list[str] = field(default_factory=list)
    warnings: list[str] = field(default_factory=list)

    def error(self, message: str) -> None:
        self.errors.append(message)

    def warn(self, message: str) -> None:
        self.warnings.append(message)

    @property
    def ok(self) -> bool:
        return not self.errors

    def extend(self, other: "ValidationReport") -> None:
        self.errors.extend(other.errors)
        self.warnings.extend(other.warnings)


def _is_str(value: Any) -> bool:
    return isinstance(value, str)


def _non_empty_str(value: Any) -> bool:
    return isinstance(value, str) and value.strip() != ""


def _validate_block(
    block: Any,
    *,
    where: str,
    report: ValidationReport,
) -> None:
    if not isinstance(block, dict):
        report.error(f"{where}: block is not an object (got {type(block).__name__})")
        return

    block_type = block.get("type")
    if not _is_str(block_type):
        report.error(f"{where}: block.type missing or not a string")
        return
    if block_type not in KNOWN_BLOCK_TYPES:
        report.error(f"{where}: unknown block type {block_type!r}")
        return

    if block_type == "paragraph":
        text = block.get("text")
        if not _is_str(text):
            report.error(f"{where}: paragraph.text must be a string")
        elif text.strip() == "":
            report.warn(f"{where}: paragraph.text is empty")
    elif block_type == "image":
        src = block.get("src")
        alt = block.get("alt")
        if not _non_empty_str(src):
            report.error(f"{where}: image.src missing or empty")
        if not _is_str(alt):
            report.error(f"{where}: image.alt must be a string")
        elif alt.strip() == "":
            report.warn(f"{where}: image.alt is empty (accessibility)")
        caption = block.get("caption")
        if caption is not None and not _is_str(caption):
            report.error(f"{where}: image.caption must be a string when present")
    elif block_type == "table":
        headers = block.get("headers")
        rows = block.get("rows")
        if not isinstance(headers, list) or not all(_is_str(h) for h in headers):
            report.error(f"{where}: table.headers must be a list of strings")
            return
        if not isinstance(rows, list):
            report.error(f"{where}: table.rows must be a list of lists")
            return
        for row_index, row in enumerate(rows):
            row_loc = f"{where}.rows[{row_index}]"
            if not isinstance(row, list) or not all(_is_str(cell) for cell in row):
                report.error(f"{row_loc}: row must be a list of strings")
                continue
            if len(row) != len(headers):
                report.error(
                    f"{row_loc}: row width {len(row)} does not match headers width {len(headers)}"
                )
        if not rows:
            report.warn(f"{where}: table has no rows")
    elif block_type == "list":
        items = block.get("items")
        if not isinstance(items, list) or not all(_is_str(i) for i in items):
            report.error(f"{where}: list.items must be a list of strings")
            return
        if not items:
            report.warn(f"{where}: list has no items")
    elif block_type == "code":
        text = block.get("text")
        if not _is_str(text):
            report.error(f"{where}: code.text must be a string")
        elif text.strip() == "":
            report.warn(f"{where}: code.text is empty")


def _validate_blocks(
    blocks: Any,
    *,
    where: str,
    report: ValidationReport,
) -> None:
    if not isinstance(blocks, list):
        report.error(f"{where}: must be a list of blocks")
        return
    for index, block in enumerate(blocks):
        _validate_block(block, where=f"{where}[{index}]", report=report)


def _collect_image_srcs(blocks: Iterable[Any]) -> list[str]:
    srcs: list[str] = []
    if not isinstance(blocks, list):
        return srcs
    for block in blocks:
        if isinstance(block, dict) and block.get("type") == "image":
            src = block.get("src")
            if isinstance(src, str):
                srcs.append(src)
    return srcs


def _validate_source_refs(refs: Any, *, where: str, report: ValidationReport) -> None:
    if not isinstance(refs, list):
        report.error(f"{where}: sourceRefs must be a list")
        return
    for index, ref in enumerate(refs):
        loc = f"{where}.sourceRefs[{index}]"
        if not isinstance(ref, dict):
            report.error(f"{loc}: source ref must be an object")
            continue
        kind = ref.get("kind")
        if not _non_empty_str(kind):
            report.error(f"{loc}: kind missing or empty")
            continue
        if kind not in KNOWN_SOURCE_REF_KINDS:
            report.warn(f"{loc}: unknown source ref kind {kind!r}")
        if kind == "wiki":
            if not _non_empty_str(ref.get("path")):
                report.error(f"{loc}: wiki source ref missing path")
        elif kind == "source":
            if not _non_empty_str(ref.get("label")):
                report.error(f"{loc}: source ref of kind 'source' missing label")
        elif kind == "quiz-bank":
            if not _non_empty_str(ref.get("label")):
                report.error(f"{loc}: quiz-bank source ref missing label")
        for optional_key in ("path", "slug", "label"):
            value = ref.get(optional_key)
            if value is not None and not _is_str(value):
                report.error(f"{loc}: {optional_key} must be a string when present")


def _validate_question(
    question: Any,
    *,
    index: int,
    report: ValidationReport,
    seen_slugs: dict[str, int],
) -> list[str]:
    """Validate a single question. Returns the list of image srcs referenced."""

    where = f"questions[{index}]"
    image_srcs: list[str] = []

    if not isinstance(question, dict):
        report.error(f"{where}: question is not an object")
        return image_srcs

    slug = question.get("slug")
    slug_label = slug if _is_str(slug) and slug else f"<index {index}>"
    where = f"questions[{index}] ({slug_label})"

    # Identity / metadata
    if question.get("schemaVersion") != SCHEMA_VERSION:
        report.error(
            f"{where}: schemaVersion must be {SCHEMA_VERSION} (got {question.get('schemaVersion')!r})"
        )
    if not _non_empty_str(slug):
        report.error(f"{where}: slug missing or empty")
    else:
        if not SLUG_PATTERN.match(slug):
            report.error(f"{where}: slug {slug!r} must match {SLUG_PATTERN.pattern}")
        if slug in seen_slugs:
            report.error(
                f"{where}: duplicate slug — first seen at questions[{seen_slugs[slug]}]"
            )
        else:
            seen_slugs[slug] = index

    if not isinstance(question.get("examYear"), int):
        report.error(f"{where}: examYear must be an integer")
    if not _non_empty_str(question.get("examType")):
        report.error(f"{where}: examType missing or empty")
    if not isinstance(question.get("questionNumber"), int):
        report.error(f"{where}: questionNumber must be an integer")
    track = question.get("track")
    if track is not None and not _is_str(track):
        report.error(f"{where}: track must be a string or null")
    if not _non_empty_str(question.get("title")):
        report.error(f"{where}: title missing or empty")
    if not _non_empty_str(question.get("status")):
        report.error(f"{where}: status missing or empty")

    for bool_field in ("quizEligible", "requiresReference"):
        if not isinstance(question.get(bool_field), bool):
            report.error(f"{where}: {bool_field} must be a boolean")

    # Answers
    official = question.get("officialAnswerLabel")
    if not _is_str(official):
        report.error(f"{where}: officialAnswerLabel must be a string")
    accepted = question.get("acceptedAnswerLabels")
    if not isinstance(accepted, list) or not all(_is_str(label) for label in accepted):
        report.error(f"{where}: acceptedAnswerLabels must be a list of strings")
        accepted = []
    elif _is_str(official) and official and official not in accepted:
        report.error(
            f"{where}: officialAnswerLabel {official!r} is not in acceptedAnswerLabels {accepted!r}"
        )

    # Stem / explanation blocks
    _validate_blocks(question.get("stemBlocks"), where=f"{where}.stemBlocks", report=report)
    _validate_blocks(
        question.get("explanationBlocks"),
        where=f"{where}.explanationBlocks",
        report=report,
    )
    image_srcs.extend(_collect_image_srcs(question.get("stemBlocks")))
    image_srcs.extend(_collect_image_srcs(question.get("explanationBlocks")))

    # Choices
    is_redacted = bool(question.get("legacy", {}).get("isRedacted")) if isinstance(question.get("legacy"), dict) else False
    choices = question.get("choices")
    if not isinstance(choices, list):
        report.error(f"{where}: choices must be a list")
    else:
        if not choices:
            if is_redacted:
                report.warn(f"{where}: choices is empty (redacted question)")
            else:
                report.error(f"{where}: choices is empty and question is not flagged as redacted")
        labels_seen: dict[str, int] = {}
        correct_labels: list[str] = []
        for c_index, choice in enumerate(choices):
            c_loc = f"{where}.choices[{c_index}]"
            if not isinstance(choice, dict):
                report.error(f"{c_loc}: choice is not an object")
                continue
            label = choice.get("label")
            if not _non_empty_str(label):
                report.error(f"{c_loc}: label missing or empty")
            else:
                if label in labels_seen:
                    report.error(
                        f"{c_loc}: duplicate choice label {label!r} (also at index {labels_seen[label]})"
                    )
                else:
                    labels_seen[label] = c_index
            blocks = choice.get("blocks")
            _validate_blocks(blocks, where=f"{c_loc}.blocks", report=report)
            image_srcs.extend(_collect_image_srcs(blocks))
            is_correct = choice.get("isCorrect")
            if not isinstance(is_correct, bool):
                report.error(f"{c_loc}: isCorrect must be a boolean")
            elif is_correct and _is_str(label) and label:
                correct_labels.append(label)

        # Cross-checks between accepted labels and choices
        if choices and isinstance(accepted, list):
            label_set = set(labels_seen.keys())
            for label in accepted:
                if label not in label_set:
                    report.error(
                        f"{where}: acceptedAnswerLabels entry {label!r} is not a choice label"
                    )
            if set(correct_labels) != set(accepted):
                report.error(
                    f"{where}: choices marked isCorrect={sorted(set(correct_labels))!r} "
                    f"do not match acceptedAnswerLabels={sorted(set(accepted))!r}"
                )

    # Source refs
    _validate_source_refs(question.get("sourceRefs"), where=where, report=report)

    # Topics + legacy shape
    if not isinstance(question.get("topics"), list):
        report.error(f"{where}: topics must be a list")
    if not isinstance(question.get("legacy"), dict):
        report.error(f"{where}: legacy must be an object")

    return image_srcs


def validate_bank(
    bank: Any,
    *,
    exam_images_dir: Path | None = None,
    image_prefix: str = "/salem-study-system/exam-images/",
) -> ValidationReport:
    report = ValidationReport()

    if not isinstance(bank, dict):
        report.error("top-level: quiz bank must be a JSON object")
        return report

    required_keys = ("schemaVersion", "generatedFrom", "summary", "topics", "questions")
    for key in required_keys:
        if key not in bank:
            report.error(f"top-level: missing required key {key!r}")

    if bank.get("schemaVersion") != SCHEMA_VERSION:
        report.error(
            f"top-level: schemaVersion must be {SCHEMA_VERSION} (got {bank.get('schemaVersion')!r})"
        )

    if "generatedFrom" in bank and not _is_str(bank["generatedFrom"]):
        report.error("top-level: generatedFrom must be a string")

    summary = bank.get("summary")
    if not isinstance(summary, dict):
        report.error("top-level: summary must be an object")
        summary = {}

    if not isinstance(bank.get("topics"), list):
        report.error("top-level: topics must be a list")

    questions = bank.get("questions")
    if not isinstance(questions, list):
        report.error("top-level: questions must be a list")
        return report

    # Per-question validation
    seen_slugs: dict[str, int] = {}
    image_srcs: list[tuple[str, str]] = []  # (src, where)
    actual_choice_count = 0
    for index, question in enumerate(questions):
        srcs = _validate_question(
            question, index=index, report=report, seen_slugs=seen_slugs
        )
        for src in srcs:
            image_srcs.append((src, f"questions[{index}]"))
        if isinstance(question, dict) and isinstance(question.get("choices"), list):
            actual_choice_count += len(question["choices"])

    # Summary cross-checks
    declared_qcount = summary.get("question_count")
    if declared_qcount is not None and declared_qcount != len(questions):
        report.error(
            f"summary.question_count {declared_qcount} does not match len(questions) {len(questions)}"
        )
    declared_ccount = summary.get("choice_count")
    if declared_ccount is not None and declared_ccount != actual_choice_count:
        report.error(
            f"summary.choice_count {declared_ccount} does not match summed choice count {actual_choice_count}"
        )

    # Image asset existence (only for srcs under the configured prefix)
    if exam_images_dir is not None:
        for src, where in image_srcs:
            if not src.startswith(image_prefix):
                continue
            relative = src[len(image_prefix):]
            if "/" in relative or ".." in relative or relative == "":
                report.error(
                    f"{where}: image src {src!r} resolves outside exam-images directory"
                )
                continue
            asset_path = exam_images_dir / relative
            if not asset_path.is_file():
                report.error(
                    f"{where}: image asset not found on disk: {asset_path} (referenced as {src})"
                )

    return report


def _format_report(report: ValidationReport, *, strict: bool) -> str:
    lines: list[str] = []
    if report.errors:
        lines.append(f"ERRORS ({len(report.errors)}):")
        for message in report.errors:
            lines.append(f"  - {message}")
    if report.warnings:
        lines.append(f"WARNINGS ({len(report.warnings)}):")
        for message in report.warnings:
            lines.append(f"  - {message}")
    if not report.errors and not report.warnings:
        lines.append("OK: structured quiz bank passed validation")
    elif not report.errors:
        lines.append("OK: no errors" + (" (treated as failure under --strict)" if strict else ""))
    return "\n".join(lines)


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--in",
        dest="input_path",
        default="site/src/data/quiz-bank-v2.json",
        help="Path to quiz-bank-v2.json (default: site/src/data/quiz-bank-v2.json)",
    )
    parser.add_argument(
        "--exam-images",
        dest="exam_images_dir",
        default="site/public/exam-images",
        help="Directory holding exam image assets (default: site/public/exam-images)",
    )
    parser.add_argument(
        "--image-prefix",
        dest="image_prefix",
        default="/salem-study-system/exam-images/",
        help="URL prefix used for local exam images (default: /salem-study-system/exam-images/)",
    )
    parser.add_argument(
        "--strict",
        action="store_true",
        help="Treat warnings as errors",
    )
    parser.add_argument(
        "--no-image-check",
        action="store_true",
        help="Skip image asset existence checks",
    )
    args = parser.parse_args(argv)

    in_path = Path(args.input_path)
    if not in_path.is_file():
        print(f"validate_structured_quiz_bank: input not found: {in_path}", file=sys.stderr)
        return 2

    try:
        bank = json.loads(in_path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:
        print(f"validate_structured_quiz_bank: invalid JSON in {in_path}: {exc}", file=sys.stderr)
        return 2

    exam_images_dir: Path | None = None
    if not args.no_image_check:
        exam_images_dir = Path(args.exam_images_dir)
        if not exam_images_dir.is_dir():
            print(
                f"validate_structured_quiz_bank: exam images directory not found: {exam_images_dir}",
                file=sys.stderr,
            )
            return 2

    report = validate_bank(
        bank,
        exam_images_dir=exam_images_dir,
        image_prefix=args.image_prefix,
    )

    print(_format_report(report, strict=args.strict))

    if report.errors:
        return 1
    if args.strict and report.warnings:
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
