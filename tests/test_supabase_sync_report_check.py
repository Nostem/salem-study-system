import json
import tempfile
import unittest
from pathlib import Path

from scripts.check_supabase_sync_report import check_clean, check_safe_to_apply, main


SECTIONS = ("sources", "topics", "questions", "choices", "question_topics", "question_references")


def clean_section():
    return {"new": 0, "changed": 0, "unchanged": 1, "missing_from_source": 0}


def clean_plan():
    plan = {
        "safe_to_apply": True,
        "review_required": [],
        "answer_key_changes": [],
    }
    for section in SECTIONS:
        plan[section] = clean_section()
    return plan


class SupabaseSyncReportCheckTests(unittest.TestCase):
    def test_safe_to_apply_accepts_safe_report_with_pending_changes(self):
        plan = clean_plan()
        plan["questions"]["changed"] = 2
        report = {"mode": "dry-run", "before": plan}

        self.assertEqual(check_safe_to_apply(report), [])

    def test_safe_to_apply_blocks_review_items_and_answer_key_changes(self):
        plan = clean_plan()
        plan["safe_to_apply"] = False
        plan["review_required"] = ["answer_key_changes"]
        plan["answer_key_changes"] = ["q1-example"]

        issues = check_safe_to_apply({"before": plan})

        self.assertTrue(any("safe_to_apply" in issue for issue in issues))
        self.assertTrue(any("review_required" in issue for issue in issues))
        self.assertTrue(any("answer_key_changes" in issue for issue in issues))

    def test_clean_accepts_apply_report_after_plan(self):
        report = {"mode": "apply", "before": {"safe_to_apply": True}, "after": clean_plan()}

        self.assertEqual(check_clean(report), [])

    def test_clean_rejects_remaining_drift(self):
        plan = clean_plan()
        plan["choices"]["changed"] = 1
        issues = check_clean({"mode": "dry-run", "before": plan})

        self.assertEqual(issues, ["before.choices.changed = 1"])

    def test_cli_returns_failure_for_unsafe_report(self):
        plan = clean_plan()
        plan["safe_to_apply"] = False
        with tempfile.TemporaryDirectory() as tmpdir:
            path = Path(tmpdir) / "report.json"
            path.write_text(json.dumps({"before": plan}), encoding="utf-8")
            self.assertEqual(main([str(path), "--mode", "safe-to-apply"]), 1)


if __name__ == "__main__":
    unittest.main()
