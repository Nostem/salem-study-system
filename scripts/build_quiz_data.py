#!/usr/bin/env python3
"""Canonical quiz-data generator.

Regenerates all four derived quiz-data files from the wiki question articles and
validates the result. This is the single source of truth for quiz-data generation —
called by CI, the site's npm prebuild/predev/pretest hooks, and any DB-staging run.

The four generated files are build artifacts (gitignored); they are produced on demand
rather than committed, so they can never drift from source.

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

import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

AUDIT = "data/quiz-import/audit-all.json"
STAGING = "data/quiz-import/supabase-staging-all.json"
BANK = "site/src/data/quiz-bank.json"
BANK_V2 = "site/src/data/quiz-bank-v2.json"
EXAM_IMAGES = "site/public/exam-images"

STEPS: list[tuple[str, list[str]]] = [
    ("audit", ["scripts/exam_question_import.py", "audit", "--out", AUDIT]),
    ("stage", ["scripts/exam_question_import.py", "stage", "--out", STAGING]),
    ("build static quiz bank", ["scripts/build_static_quiz_bank.py", "--bundle", STAGING, "--out", BANK]),
    ("build structured quiz bank", ["scripts/build_structured_quiz_bank.py", "--in", BANK, "--out", BANK_V2]),
    ("validate", ["scripts/validate_structured_quiz_bank.py", "--in", BANK_V2, "--exam-images", EXAM_IMAGES]),
]


def main() -> int:
    for label, args in STEPS:
        print(f"[build_quiz_data] {label}…", flush=True)
        result = subprocess.run([sys.executable, *args], cwd=ROOT)
        if result.returncode != 0:
            print(f"[build_quiz_data] FAILED at: {label}", file=sys.stderr)
            return result.returncode
    print("[build_quiz_data] OK — all quiz-data files regenerated and validated.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
