import re
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CONTENT_MIGRATION = ROOT / "supabase/migrations/20260522_harden_quiz_content_rls.sql"
PROGRESS_MIGRATION = ROOT / "supabase/migrations/20260522_harden_quiz_progress_rls.sql"


class SupabaseRlsArtifactTests(unittest.TestCase):
    def read_content_migration(self) -> str:
        self.assertTrue(CONTENT_MIGRATION.exists(), f"missing migration: {CONTENT_MIGRATION}")
        return CONTENT_MIGRATION.read_text()

    def read_progress_migration(self) -> str:
        self.assertTrue(PROGRESS_MIGRATION.exists(), f"missing migration: {PROGRESS_MIGRATION}")
        return PROGRESS_MIGRATION.read_text()

    def test_quiz_content_read_policies_use_learner_safe_predicates(self):
        sql = self.read_content_migration()

        self.assertRegex(sql, r"create\s+or\s+replace\s+function\s+public\.is_learner_safe_question", re.I)
        for table in ("questions", "choices", "question_references", "question_topics", "sources"):
            self.assertRegex(sql, rf"drop\s+policy\s+if\s+exists\s+\"authenticated read {table.replace('_', ' ')}\"\s+on\s+public\.{table}", re.I)

        self.assertRegex(sql, r"status\s*=\s*'active'", re.I)
        self.assertRegex(sql, r"quiz_eligible\s+is\s+true", re.I)
        self.assertRegex(sql, r"is_redacted\s+is\s+false", re.I)
        self.assertRegex(sql, r"public\.current_role\(\)\s+in\s+\('reviewer',\s*'admin'\)", re.I)

    def test_child_content_policies_follow_parent_question_visibility(self):
        sql = self.read_content_migration()

        for table, foreign_key in (
            ("choices", "question_id"),
            ("question_references", "question_id"),
            ("question_topics", "question_id"),
        ):
            pattern = re.compile(rf"create\s+policy\s+\"authenticated read {table.replace('_', ' ')}\".*?on\s+public\.{table}.*?exists\s*\(\s*select\s+1\s+from\s+public\.questions\s+q\s+where\s+q\.id\s*=\s*{foreign_key}\s+and\s+public\.is_learner_safe_question\(q\)", re.I | re.S)
            self.assertRegex(sql, pattern)

        self.assertRegex(sql, r"from\s+public\.question_references\s+qr\s+join\s+public\.questions\s+q\s+on\s+q\.id\s*=\s*qr\.question_id", re.I)
        self.assertRegex(sql, r"qr\.source_id\s*=\s*sources\.id", re.I)

    def test_quiz_progress_policies_are_read_only_for_learners(self):
        sql = self.read_progress_migration()

        for policy in (
            "users manage own quiz sessions",
            "users insert own quiz session questions",
            "users insert own attempts",
            "users manage own state",
        ):
            self.assertRegex(sql, rf"drop\s+policy\s+if\s+exists\s+\"{re.escape(policy)}\"", re.I)

        self.assertRegex(sql, r"create\s+policy\s+\"users read own quiz sessions\"\s+on\s+public\.quiz_sessions\s+for\s+select", re.I)
        self.assertRegex(sql, r"create\s+policy\s+\"users read own state\"\s+on\s+public\.user_question_state\s+for\s+select", re.I)
        self.assertNotRegex(sql, r"for\s+all\s+to\s+authenticated.*public\.quiz_sessions", re.I | re.S)
        self.assertNotRegex(sql, r"for\s+insert\s+to\s+authenticated.*public\.question_attempts", re.I | re.S)

    def test_question_attempt_choice_match_is_enforced(self):
        sql = self.read_progress_migration()

        self.assertRegex(sql, r"create\s+or\s+replace\s+function\s+public\.ensure_attempt_choice_matches_question", re.I)
        self.assertRegex(sql, r"raise\s+exception\s+'selected_choice_id does not belong to question_id'", re.I)
        self.assertRegex(sql, r"create\s+trigger\s+question_attempts_choice_question_guard", re.I)
        self.assertRegex(sql, r"before\s+insert\s+or\s+update\s+on\s+public\.question_attempts", re.I)

    def test_quiz_type_contract_is_aligned(self):
        migrations = "\n".join(path.read_text() for path in sorted((ROOT / "supabase/migrations").glob("*.sql")))
        function_source = (ROOT / "supabase/functions/submit-quiz-results/index.ts").read_text()
        client_source = (ROOT / "site/src/utils/auth-client.ts").read_text()

        expected = ("classic", "custom", "topic", "graph", "review", "missed", "weak_area", "exam_sim", "global_hard")
        for quiz_type in expected:
            self.assertIn(quiz_type, migrations)
            self.assertIn(quiz_type, function_source)
            self.assertIn(quiz_type, client_source)
        self.assertIn("invalid_quiz_type", function_source)
        self.assertRegex(function_source, r"\.eq\('status',\s*'active'\)")
        self.assertRegex(function_source, r"\.eq\('quiz_eligible',\s*true\)")
        self.assertRegex(function_source, r"\.eq\('is_redacted',\s*false\)")


if __name__ == "__main__":
    unittest.main()
