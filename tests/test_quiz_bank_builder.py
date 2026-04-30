import json
import tempfile
import unittest
from pathlib import Path

from scripts.build_static_quiz_bank import build_quiz_bank, write_quiz_bank


ROOT = Path(__file__).resolve().parents[1]


class StaticQuizBankBuilderTests(unittest.TestCase):
    def test_build_quiz_bank_enriches_topics_and_wiki_explanations(self):
        bank = build_quiz_bank(ROOT, ROOT / "data/quiz-import/supabase-staging-all.json")

        self.assertEqual(bank["summary"]["question_count"], 499)
        topic_titles = {topic["slug"]: topic["title"] for topic in bank["topics"]}
        self.assertEqual(topic_titles["pressurizer-level-and-press-control"], "Pressurizer Level & Press Control")
        self.assertEqual(topic_titles["pressurizer-and-prt"], "Pressurizer & PRT")
        self.assertEqual(topic_titles["rps-ssps"], "RPS/SSPS")

        q82 = next(question for question in bank["questions"] if question["slug"] == "q82-pzr-level-channel-fail-high-ts")
        self.assertTrue(q82["isEdited"])
        self.assertEqual(q82["status"], "active")
        self.assertIn("72 hours", q82["explanationText"])
        self.assertIn("TS 3/4.3 — Instrumentation", [topic["title"] for topic in q82["topics"]])

    def test_write_quiz_bank_outputs_deterministic_json(self):
        bank = build_quiz_bank(ROOT, ROOT / "data/quiz-import/supabase-staging-2018.json")

        with tempfile.TemporaryDirectory() as tmpdir:
            out = Path(tmpdir) / "quiz-bank.json"
            write_quiz_bank(bank, out)
            written = json.loads(out.read_text(encoding="utf-8"))

        self.assertEqual(written["summary"]["question_count"], 99)
        self.assertEqual(written["generatedFrom"], "data/quiz-import/supabase-staging-2018.json")
        self.assertIn("explanationHtml", written["questions"][0])


if __name__ == "__main__":
    unittest.main()
