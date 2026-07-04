#!/usr/bin/env python3
"""Canonical quiz-data generator.

Regenerates all four derived quiz-data files from the wiki question articles and
validates the result. This is the single source of truth for quiz-data generation —
called by CI, the site's npm prebuild/predev/pretest hooks, and any DB-staging run.

The four generated files are build artifacts (gitignored); they are produced on demand
rather than committed, so they can never drift from source.

The pipeline runs in-process (importing the individual scripts as libraries rather
than shelling out to their CLIs) so the ~1,465 wiki markdown files are read once and
the exam question records are parsed once, then shared across every step.

Pipeline (any step failing, including validation, exits non-zero):
    audit         -> data/quiz-import/audit-all.json
    stage         -> data/quiz-import/supabase-staging-all.json
    build-static  -> site/src/data/quiz-bank.json
    build-struct  -> site/src/data/quiz-bank-v2.json
    validate      (quiz-bank-v2.json against site/public/exam-images)

Usage:
    python3 scripts/build_quiz_data.py
"""
from __future__ import annotations

import json
import os
import sys
import traceback
from pathlib import Path
from typing import Callable

ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from scripts.build_static_quiz_bank import build_quiz_bank, write_quiz_bank
from scripts.build_structured_quiz_bank import build_structured_quiz_bank, write_structured_quiz_bank
from scripts.exam_question_import import (
    _write_json,
    audit_question_records,
    build_supabase_staging_bundle,
    build_wiki_slug_index,
    collect_question_records,
    load_topic_map,
    load_wiki_files,
)
from scripts.validate_structured_quiz_bank import main as validate_quiz_bank

AUDIT = "data/quiz-import/audit-all.json"
STAGING = "data/quiz-import/supabase-staging-all.json"
BANK = "site/src/data/quiz-bank.json"
BANK_V2 = "site/src/data/quiz-bank-v2.json"
EXAM_IMAGES = "site/public/exam-images"


def main() -> int:
    # Run from the repo root with relative paths so every generated file (and every
    # path embedded inside it, e.g. wiki_path) matches the historical CLI output.
    os.chdir(ROOT)

    # Shared single-pass state, filled by the audit step and reused by later steps.
    shared: dict = {}

    def audit() -> int:
        shared["topic_map"] = load_topic_map(Path("data/topic-map.yaml"))
        shared["wiki_files"] = load_wiki_files(".")
        shared["records"] = collect_question_records(".", topic_map=shared["topic_map"])
        payload = audit_question_records(
            shared["records"],
            known_wiki_slugs=build_wiki_slug_index(".", wiki_files=shared["wiki_files"]),
            topic_map=shared["topic_map"],
        )
        _write_json(Path(AUDIT), payload)
        return 0

    def stage() -> int:
        bundle = build_supabase_staging_bundle(
            shared["records"], root=".", wiki_files=shared["wiki_files"]
        )
        _write_json(Path(STAGING), bundle)
        return 0

    def build_static() -> int:
        bank = build_quiz_bank(Path("."), Path(STAGING), wiki_files=shared["wiki_files"])
        write_quiz_bank(bank, ROOT / BANK)
        print(
            json.dumps(
                {
                    "out": BANK,
                    "questions": len(bank["questions"]),
                    "choices": sum(len(question["choices"]) for question in bank["questions"]),
                    "topics": len(bank["topics"]),
                },
                indent=2,
            )
        )
        return 0

    def build_structured() -> int:
        bank = build_structured_quiz_bank(Path(BANK))
        write_structured_quiz_bank(bank, Path(BANK_V2))
        return 0

    def validate() -> int:
        return validate_quiz_bank(["--in", BANK_V2, "--exam-images", EXAM_IMAGES])

    steps: list[tuple[str, Callable[[], int]]] = [
        ("audit", audit),
        ("stage", stage),
        ("build static quiz bank", build_static),
        ("build structured quiz bank", build_structured),
        ("validate", validate),
    ]

    for label, step in steps:
        print(f"[build_quiz_data] {label}…", flush=True)
        try:
            returncode = step()
        except Exception:
            traceback.print_exc()
            returncode = 1
        if returncode != 0:
            print(f"[build_quiz_data] FAILED at: {label}", file=sys.stderr)
            return returncode
    print("[build_quiz_data] OK — all quiz-data files regenerated and validated.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
