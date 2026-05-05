import re
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class InviteAuthArtifactTests(unittest.TestCase):
    def test_migration_supports_username_invite_signup_without_email_requirement(self):
        migrations = "\n".join(path.read_text() for path in sorted((ROOT / "supabase/migrations").glob("*.sql")))

        self.assertIn("username", migrations)
        self.assertRegex(migrations, r"alter table\s+public\.profiles\s+add column if not exists username", re.I)
        self.assertRegex(migrations, r"create unique index if not exists profiles_username_lower_unique", re.I)
        self.assertIn("internal_auth_email", migrations)
        self.assertIn("invite_id", migrations)
        self.assertIn("learner_code", migrations)
        self.assertRegex(migrations, r"profiles_learner_code_unique", re.I)
        self.assertIn("code_hash", migrations)
        self.assertRegex(migrations, r"alter table\s+public\.invites\s+alter column code\s+drop not null", re.I)
        self.assertNotRegex(migrations, r"email\s+text\s+not null", re.I)

    def test_edge_functions_create_accounts_without_invite_ids_and_login_by_username_without_exposing_service_role_to_browser(self):
        signup_path = ROOT / "supabase/functions/invite-signup/index.ts"
        login_path = ROOT / "supabase/functions/username-login/index.ts"

        signup = signup_path.read_text()
        login = login_path.read_text()

        self.assertIn("SUPABASE_SERVICE_ROLE_KEY", signup)
        self.assertNotIn("invite_code_required", signup)
        self.assertIn("learner_code", signup)
        self.assertIn("generateLearnerCode", signup)
        self.assertIn("code_hash", signup)
        self.assertIn("admin.createUser", signup)
        self.assertIn("profiles", signup)
        self.assertIn("accepted_by", signup)
        self.assertNotIn("service_role", (ROOT / "site/src/utils/auth-client.ts").read_text().lower())

        self.assertIn("username", login)
        self.assertIn("internal_auth_email", login)
        self.assertIn("signInWithPassword", login)
        self.assertIn("access_token", login)

    def test_submit_quiz_results_function_persists_sessions_attempts_and_user_state(self):
        function_path = ROOT / "supabase/functions/submit-quiz-results/index.ts"
        client_path = ROOT / "site/src/utils/auth-client.ts"

        self.assertTrue(function_path.exists())
        function_source = function_path.read_text()
        client_source = client_path.read_text()

        self.assertIn("SUPABASE_SERVICE_ROLE_KEY", function_source)
        self.assertIn("auth.getUser", function_source)
        self.assertIn("quiz_sessions", function_source)
        self.assertIn("quiz_session_questions", function_source)
        self.assertIn("question_attempts", function_source)
        self.assertIn("user_question_state", function_source)
        self.assertIn("selectedLabel", function_source)
        self.assertIn("is_correct", function_source)
        self.assertNotIn("service_role", client_source.lower())
        self.assertIn("submitQuizResults", client_source)


if __name__ == "__main__":
    unittest.main()
