#!/usr/bin/env python3
"""Validate Salem Supabase question-bank sync reports for CI gates."""
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path
from typing import Any, Mapping

SYNC_SECTIONS = (
    "sources",
    "topics",
    "questions",
    "choices",
    "question_topics",
    "question_references",
)


def load_report(path: str | Path) -> Mapping[str, Any]:
    with Path(path).open(encoding="utf-8") as handle:
        report = json.load(handle)
    if not isinstance(report, dict):
        raise ValueError("sync report must be a JSON object")
    return report


def plan_from_report(report: Mapping[str, Any], key: str) -> Mapping[str, Any]:
    plan = report.get(key)
    if not isinstance(plan, dict):
        raise ValueError(f"sync report missing object: {key}")
    return plan


def check_safe_to_apply(report: Mapping[str, Any]) -> list[str]:
    plan = plan_from_report(report, "before")
    issues: list[str] = []
    if not plan.get("safe_to_apply"):
        issues.append("before.safe_to_apply is not true")
    if plan.get("review_required"):
        issues.append(f"before.review_required is not empty: {plan.get('review_required')}")
    if plan.get("answer_key_changes"):
        issues.append(f"before.answer_key_changes is not empty: {plan.get('answer_key_changes')}")
    return issues


def check_clean_plan(plan: Mapping[str, Any], label: str) -> list[str]:
    issues: list[str] = []
    if plan.get("review_required"):
        issues.append(f"{label}.review_required is not empty: {plan.get('review_required')}")
    if plan.get("answer_key_changes"):
        issues.append(f"{label}.answer_key_changes is not empty: {plan.get('answer_key_changes')}")
    for section in SYNC_SECTIONS:
        section_plan = plan.get(section)
        if not isinstance(section_plan, dict):
            issues.append(f"{label}.{section} missing")
            continue
        for field in ("new", "changed", "missing_from_source"):
            if section_plan.get(field) != 0:
                issues.append(f"{label}.{section}.{field} = {section_plan.get(field)}")
    return issues


def check_clean(report: Mapping[str, Any]) -> list[str]:
    # Apply reports contain `after`; post-apply dry-runs contain only `before`.
    if isinstance(report.get("after"), dict):
        return check_clean_plan(plan_from_report(report, "after"), "after")
    return check_clean_plan(plan_from_report(report, "before"), "before")


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("report", help="Path to a JSON report from scripts/supabase_import_exam.py sync")
    parser.add_argument("--mode", choices=("safe-to-apply", "clean"), required=True)
    args = parser.parse_args(argv)

    try:
        report = load_report(args.report)
        issues = check_safe_to_apply(report) if args.mode == "safe-to-apply" else check_clean(report)
    except Exception as exc:
        print(f"sync report check failed: {exc}", file=sys.stderr)
        return 2

    if issues:
        print("Supabase sync report check failed:", file=sys.stderr)
        for issue in issues:
            print(f"- {issue}", file=sys.stderr)
        return 1

    print(f"Supabase sync report check passed: {args.mode}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
