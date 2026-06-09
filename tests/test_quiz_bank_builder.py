import json
import tempfile
import unittest
from pathlib import Path

from scripts.build_static_quiz_bank import build_quiz_bank, write_quiz_bank


ROOT = Path(__file__).resolve().parents[1]


class StaticQuizBankBuilderTests(unittest.TestCase):
    def test_build_quiz_bank_enriches_topics_and_wiki_explanations(self):
        bank = build_quiz_bank(ROOT, ROOT / "data/quiz-import/supabase-staging-all.json")

        self.assertEqual(bank["summary"]["question_count"], 599)
        topic_titles = {topic["slug"]: topic["title"] for topic in bank["topics"]}
        self.assertEqual(topic_titles["pressurizer-level-and-press-control"], "Pressurizer Level & Press Control")
        self.assertEqual(topic_titles["pressurizer-and-prt"], "Pressurizer & PRT")
        self.assertEqual(topic_titles["rps-ssps"], "RPS/SSPS")

        q82 = next(question for question in bank["questions"] if question["slug"] == "q82-pzr-level-channel-fail-high-ts")
        self.assertTrue(q82["isEdited"])
        self.assertEqual(q82["status"], "active")
        self.assertIn("72 hours", q82["explanationText"])
        self.assertIn("TS 3/4.3 — Instrumentation", [topic["title"] for topic in q82["topics"]])

    def test_build_quiz_bank_preserves_stem_images_from_wiki_markdown(self):
        bank = build_quiz_bank(ROOT, ROOT / "data/quiz-import/supabase-staging-all.json")

        q73 = next(question for question in bank["questions"] if question["slug"] == "q73-eop-continuous-caution-definition")
        self.assertIn("exam-images/2022-q73-caution-symbol.png", q73["stemHtml"])
        self.assertIn("Continuous Caution symbol", q73["stemHtml"])
        self.assertIn("The below Caution symbol appears prior to step 1.", q73["stemText"])

        q23 = next(question for question in bank["questions"] if question["slug"] == "q23-eop-flowchart-symbols-concurrent")
        self.assertIn("exam-images/2023-q23-symbol.png", q23["stemHtml"])
        self.assertIn("Concurrent Step Symbol", q23["stemHtml"])
        self.assertIn("What does the symbol denote?", q23["stemText"])

    def test_build_quiz_bank_exposes_admin_topic_from_admin_procedure_connections(self):
        bank = build_quiz_bank(ROOT, ROOT / "data/quiz-import/supabase-staging-all.json")

        self.assertIn("Admin", [topic["title"] for topic in bank["topics"]])
        q78 = next(question for question in bank["questions"] if question["slug"] == "q78-ab-cn-0001-peer-checks-polisher-bypass")
        self.assertIn("Admin", [topic["title"] for topic in q78["topics"]])

    def test_build_quiz_bank_exposes_connection_derived_procedure_filters(self):
        bank = build_quiz_bank(ROOT, ROOT / "data/quiz-import/supabase-staging-all.json")

        topics_by_slug = {topic["slug"]: topic for topic in bank["topics"]}
        self.assertEqual(topics_by_slug["eop-trip-1-reactor-trip-or-si"]["topic_type"], "eop")
        self.assertEqual(topics_by_slug["ab-cw-0001-circulating-water-malfunction"]["topic_type"], "abnormal")
        self.assertEqual(topics_by_slug["op-aa-101-111-1003-use-of-procedures"]["topic_type"], "admin")

        q93 = next(question for question in bank["questions"] if question["slug"] == "q93-cw-bus-loss-circulator-trip")
        q93_topic_titles = [topic["title"] for topic in q93["topics"]]
        self.assertIn("EOP-TRIP-1 — Reactor Trip or Safety Injection", q93_topic_titles)
        self.assertIn("AB.CW-0001 — Circulating Water Malfunction", q93_topic_titles)

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
