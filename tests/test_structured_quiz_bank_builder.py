import hashlib
import json
import tempfile
import unittest
from pathlib import Path

from scripts.build_structured_quiz_bank import build_structured_quiz_bank, write_structured_quiz_bank


ROOT = Path(__file__).resolve().parents[1]
QUIZ_BANK = ROOT / "site/src/data/quiz-bank.json"


class StructuredQuizBankBuilderTests(unittest.TestCase):
    def test_build_structured_bank_preserves_2023_q23_stem_image(self):
        bank = build_structured_quiz_bank(QUIZ_BANK)

        q23 = next(question for question in bank["questions"] if question["slug"] == "q23-eop-flowchart-symbols-concurrent")
        stem_blocks = q23["stemBlocks"]

        image_blocks = [block for block in stem_blocks if block["type"] == "image"]
        self.assertEqual(len(image_blocks), 1)
        self.assertIn("exam-images/2023-q23-symbol.png", image_blocks[0]["src"])
        self.assertEqual(image_blocks[0]["alt"], "Concurrent Step Symbol")

        paragraph_text = "\n".join(block["text"] for block in stem_blocks if block["type"] == "paragraph")
        self.assertIn("When proceeding through 2-EOP-TRIP-3", paragraph_text)
        self.assertIn("What does the symbol denote?", paragraph_text)

    def test_choices_are_represented_as_blocks(self):
        bank = build_structured_quiz_bank(QUIZ_BANK)

        q23 = next(question for question in bank["questions"] if question["slug"] == "q23-eop-flowchart-symbols-concurrent")
        self.assertEqual([choice["label"] for choice in q23["choices"]], ["A", "B", "C", "D"])
        for choice in q23["choices"]:
            self.assertTrue(choice["blocks"])
            self.assertEqual(choice["blocks"][0]["type"], "paragraph")
        correct = next(choice for choice in q23["choices"] if choice["isCorrect"])
        self.assertEqual(correct["label"], "B")
        self.assertIn("concurrent step", correct["blocks"][0]["text"])

    def test_builder_does_not_modify_source_quiz_bank(self):
        before = hashlib.sha256(QUIZ_BANK.read_bytes()).hexdigest()
        bank = build_structured_quiz_bank(QUIZ_BANK)
        with tempfile.TemporaryDirectory() as tmpdir:
            write_structured_quiz_bank(bank, Path(tmpdir) / "quiz-bank-v2.json")
        after = hashlib.sha256(QUIZ_BANK.read_bytes()).hexdigest()
        self.assertEqual(after, before)

    def test_source_traceability_is_preserved(self):
        bank = build_structured_quiz_bank(QUIZ_BANK)

        q23 = next(question for question in bank["questions"] if question["slug"] == "q23-eop-flowchart-symbols-concurrent")
        self.assertIn("legacy", q23)
        self.assertEqual(q23["legacy"]["wikiPath"], "wiki/exams/2023/q23-eop-flowchart-symbols-concurrent.md")
        self.assertIn("stemHtml", q23["legacy"])
        self.assertTrue(any(ref["kind"] == "wiki" and ref["path"] == q23["legacy"]["wikiPath"] for ref in q23["sourceRefs"]))


if __name__ == "__main__":
    unittest.main()
