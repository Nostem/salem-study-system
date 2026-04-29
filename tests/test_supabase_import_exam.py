import json
import os
import tempfile
import unittest
from pathlib import Path

from scripts.supabase_import_exam import (
    ImportReadinessError,
    check_import_readiness,
    generate_import_sql,
    load_staging_bundle,
)

ROOT = Path(__file__).resolve().parents[1]


class SupabaseImportExamTests(unittest.TestCase):
    def test_generate_import_sql_contains_transactional_upserts_and_uuid_resolution(self):
        bundle = load_staging_bundle(ROOT / "data/quiz-import/supabase-staging-2018.json")

        sql = generate_import_sql(bundle)

        self.assertTrue(sql.startswith("begin;"))
        self.assertTrue(sql.rstrip().endswith("commit;"))
        self.assertIn("insert into public.sources", sql)
        self.assertIn("on conflict (source_type, exam_year, title) do update", sql)
        self.assertIn("insert into public.topics", sql)
        self.assertIn("on conflict (slug) do update", sql)
        self.assertIn("insert into public.questions", sql)
        self.assertIn("left join public.sources s", sql)
        self.assertIn("source_id", sql)
        self.assertIn("on conflict (slug) do update", sql)
        self.assertIn("insert into public.choices", sql)
        self.assertIn("on conflict (question_id, label) do update", sql)
        self.assertIn("insert into public.question_topics", sql)
        self.assertIn("on conflict (question_id, topic_id, relationship_type) do nothing", sql)
        self.assertIn("insert into public.question_references", sql)
        self.assertIn("where not exists", sql.lower())
        self.assertIn("q35-steam-dump-load-rejection-controller", sql)
        self.assertIn("nrc-written-2018", sql)
        self.assertNotIn("SUPABASE_SERVICE_ROLE_KEY", sql)
        self.assertNotIn("SUPABASE_DB_URL", sql)

    def test_generate_import_sql_rejects_bundle_with_unresolved_question_topic(self):
        bundle = {
            "summary": {"question_count": 1},
            "sources": [{"source_key": "nrc-written-2099", "title": "2099 NRC Written Exam", "source_type": "nrc_exam", "exam_year": 2099, "public_access": True}],
            "topics": [],
            "questions": [{"source_key": "nrc-written-2099", "exam_year": 2099, "exam_type": "written", "question_number": 1, "title": "Bad", "slug": "q1-bad", "stem_text": "Bad", "accepted_answer_labels": ["A"], "status": "active", "is_edited": False, "is_redacted": False, "quiz_eligible": True}],
            "choices": [{"question_slug": "q1-bad", "label": "A", "choice_text": "A", "is_correct": True}],
            "question_references": [],
            "question_topics": [{"question_slug": "q1-bad", "topic_slug": "missing-topic", "relationship_type": "tests"}],
        }

        with self.assertRaises(ImportReadinessError):
            generate_import_sql(bundle)

    def test_check_import_readiness_validates_schema_and_environment_names_without_leaking_values(self):
        with tempfile.TemporaryDirectory() as tmp:
            sql_path = Path(tmp) / "import.sql"
            env = {}
            report = check_import_readiness(
                schema_path=ROOT / "supabase/migrations/20260429_quiz_mvp_schema.sql",
                import_sql_path=sql_path,
                env=env,
            )

        self.assertFalse(report["ready"])
        self.assertIn("SUPABASE_DB_URL", report["missing_env"])
        self.assertNotIn("postgresql://example.invalid/db", json.dumps(report))
        self.assertIn("public.questions", report["required_schema_objects"])
        self.assertIn("import_sql_missing", report["issues"])


if __name__ == "__main__":
    unittest.main()
