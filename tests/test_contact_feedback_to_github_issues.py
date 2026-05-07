import json
import tempfile
import unittest
from pathlib import Path
from unittest.mock import Mock

from scripts.contact_feedback_to_github_issues import (
    build_issue_body,
    build_issue_title,
    contact_marker,
    process_contact_messages,
)


ROOT = Path(__file__).resolve().parents[1]


class ContactFeedbackToGitHubIssuesTests(unittest.TestCase):
    def test_contact_feedback_schema_allows_archived_status(self):
        initial_migration = (ROOT / "supabase/migrations/20260430_contact_feedback.sql").read_text()
        archive_migration = (ROOT / "supabase/migrations/20260506_contact_feedback_archive_status.sql").read_text()

        self.assertIn("'archived'", initial_migration)
        self.assertIn("'archived'", archive_migration)
        self.assertIn("contact_messages_status_check", archive_migration)

    def test_build_issue_body_redacts_reply_email_and_includes_stable_marker(self):
        row = {
            "id": "11111111-1111-1111-1111-111111111111",
            "category": "bug",
            "name": "A Learner",
            "email": "learner@example.com",
            "page_url": "https://nostem.github.io/salem-study-system/quiz/",
            "message": "The quiz builder did not show my saved attempt.",
            "created_at": "2026-05-06T12:00:00+00:00",
        }

        body = build_issue_body(row)

        self.assertIn("contact_message_id:11111111-1111-1111-1111-111111111111", body)
        self.assertIn("Reply email present: yes", body)
        self.assertNotIn("learner@example.com", body)
        self.assertIn("The quiz builder did not show my saved attempt.", body)
        self.assertIn("https://nostem.github.io/salem-study-system/quiz/", body)

    def test_process_contact_messages_creates_issue_then_archives_with_metadata(self):
        row = {
            "id": "22222222-2222-2222-2222-222222222222",
            "category": "question",
            "name": None,
            "email": None,
            "page_url": None,
            "message": "Can you add more admin procedure questions?",
            "created_at": "2026-05-06T12:00:00+00:00",
            "metadata": {"rate_key": "private-hash"},
        }
        client = Mock()
        client.fetch_new_messages.return_value = [row]
        client.find_issue_by_marker.return_value = None
        client.create_issue.return_value = {"number": 42, "url": "https://github.com/Nostem/salem-study-system/issues/42"}

        report = process_contact_messages(client, repo="Nostem/salem-study-system", apply=True)

        client.create_issue.assert_called_once()
        client.archive_message.assert_called_once()
        archived_id, archived_issue = client.archive_message.call_args.args
        self.assertEqual(archived_id, row["id"])
        self.assertEqual(archived_issue["number"], 42)
        self.assertEqual(report["created_issues"], 1)
        self.assertEqual(report["archived_messages"], 1)

    def test_process_contact_messages_archives_existing_marker_without_duplicate_issue(self):
        row = {
            "id": "33333333-3333-3333-3333-333333333333",
            "category": "feedback",
            "name": None,
            "email": None,
            "message": "Good site.",
            "created_at": "2026-05-06T12:00:00+00:00",
        }
        client = Mock()
        client.fetch_new_messages.return_value = [row]
        client.find_issue_by_marker.return_value = {"number": 99, "url": "https://github.com/Nostem/salem-study-system/issues/99"}

        report = process_contact_messages(client, repo="Nostem/salem-study-system", apply=True)

        client.create_issue.assert_not_called()
        client.archive_message.assert_called_once()
        self.assertEqual(report["existing_issues"], 1)
        self.assertEqual(report["archived_messages"], 1)

    def test_process_contact_messages_dry_run_does_not_create_or_archive(self):
        row = {
            "id": "44444444-4444-4444-4444-444444444444",
            "category": "content_issue",
            "name": None,
            "email": None,
            "message": "A page has a typo.",
            "created_at": "2026-05-06T12:00:00+00:00",
        }
        client = Mock()
        client.fetch_new_messages.return_value = [row]
        client.find_issue_by_marker.return_value = None

        report = process_contact_messages(client, repo="Nostem/salem-study-system", apply=False)

        client.create_issue.assert_not_called()
        client.archive_message.assert_not_called()
        self.assertEqual(report["dry_run_messages"], 1)
        self.assertEqual(report["created_issues"], 0)

    def test_title_is_short_and_categorized(self):
        row = {
            "category": "bug",
            "message": "The quiz builder start button disappears after selecting Admin and 2023. The rest should be truncated.",
        }

        title = build_issue_title(row)

        self.assertTrue(title.startswith("[Contact: bug] "))
        self.assertLessEqual(len(title), 120)


if __name__ == "__main__":
    unittest.main()
