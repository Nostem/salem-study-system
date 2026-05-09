import hashlib
import json
import tempfile
import unittest
from pathlib import Path

from scripts.build_structured_quiz_bank import (
    build_structured_quiz_bank,
    html_to_blocks,
    write_structured_quiz_bank,
)


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


class HtmlToBlocksParserTests(unittest.TestCase):
    """Fixture-level tests for the HTML-to-block parser.

    The production corpus does not currently contain tables, lists, or code
    blocks in question HTML, so structured-block fidelity is verified here
    against synthetic fixtures rather than corpus data.
    """

    def test_table_with_thead_emits_table_block(self):
        html = (
            "<p>Given the table:</p>"
            "<table>"
            "<thead><tr><th>Param</th><th>Value</th></tr></thead>"
            "<tbody>"
            "<tr><td>Tavg</td><td>547&deg;F</td></tr>"
            "<tr><td>Pressure</td><td>2235 psig</td></tr>"
            "</tbody>"
            "</table>"
            "<p>Select the correct response.</p>"
        )
        blocks = html_to_blocks(html)
        types = [b["type"] for b in blocks]
        self.assertEqual(types, ["paragraph", "table", "paragraph"])

        table = blocks[1]
        self.assertEqual(table["headers"], ["Param", "Value"])
        self.assertEqual(table["rows"], [["Tavg", "547°F"], ["Pressure", "2235 psig"]])

        self.assertEqual(blocks[0]["text"], "Given the table:")
        self.assertEqual(blocks[2]["text"], "Select the correct response.")

    def test_table_without_th_uses_first_row_as_headers(self):
        html = (
            "<table>"
            "<tr><td>Mode</td><td>Description</td></tr>"
            "<tr><td>1</td><td>Power Operation</td></tr>"
            "<tr><td>3</td><td>Hot Standby</td></tr>"
            "</table>"
        )
        blocks = html_to_blocks(html)
        self.assertEqual(len(blocks), 1)
        self.assertEqual(blocks[0]["type"], "table")
        self.assertEqual(blocks[0]["headers"], ["Mode", "Description"])
        self.assertEqual(blocks[0]["rows"], [["1", "Power Operation"], ["3", "Hot Standby"]])

    def test_table_pads_short_rows_to_header_width(self):
        html = (
            "<table>"
            "<tr><th>A</th><th>B</th><th>C</th></tr>"
            "<tr><td>1</td><td>2</td></tr>"
            "</table>"
        )
        blocks = html_to_blocks(html)
        self.assertEqual(blocks[0]["headers"], ["A", "B", "C"])
        self.assertEqual(blocks[0]["rows"], [["1", "2", ""]])

    def test_unordered_list_emits_list_block(self):
        html = (
            "<p>Required actions:</p>"
            "<ul>"
            "<li>Verify reactor trip</li>"
            "<li>Verify turbine trip</li>"
            "<li>Check AFW flow</li>"
            "</ul>"
        )
        blocks = html_to_blocks(html)
        self.assertEqual([b["type"] for b in blocks], ["paragraph", "list"])
        self.assertEqual(
            blocks[1]["items"],
            ["Verify reactor trip", "Verify turbine trip", "Check AFW flow"],
        )

    def test_ordered_list_emits_list_block(self):
        html = "<ol><li>First</li><li>Second</li></ol>"
        blocks = html_to_blocks(html)
        self.assertEqual(len(blocks), 1)
        self.assertEqual(blocks[0]["type"], "list")
        self.assertEqual(blocks[0]["items"], ["First", "Second"])

    def test_pre_block_emits_code_block(self):
        html = (
            "<p>Sample alarm response:</p>"
            "<pre>IF Tavg &gt; 580 THEN\n  TRIP REACTOR\nEND IF</pre>"
        )
        blocks = html_to_blocks(html)
        self.assertEqual([b["type"] for b in blocks], ["paragraph", "code"])
        self.assertEqual(blocks[1]["text"], "IF Tavg > 580 THEN\n  TRIP REACTOR\nEND IF")

    def test_paragraphs_continue_after_structured_block(self):
        html = (
            "<p>Before</p>"
            "<ul><li>One</li></ul>"
            "<p>Between</p>"
            "<table><tr><th>X</th></tr><tr><td>y</td></tr></table>"
            "<p>After</p>"
        )
        blocks = html_to_blocks(html)
        self.assertEqual(
            [b["type"] for b in blocks],
            ["paragraph", "list", "paragraph", "table", "paragraph"],
        )
        self.assertEqual(blocks[0]["text"], "Before")
        self.assertEqual(blocks[2]["text"], "Between")
        self.assertEqual(blocks[4]["text"], "After")

    def test_image_inside_paragraph_flow_still_emits_image_block(self):
        # Mirrors the 2023 Q23 shape: text + <img> wrapped in a div + more text.
        html = (
            "Before image."
            "<div><img src=\"/foo/bar.png\" alt=\"diagram\"></div>"
            "After image."
        )
        blocks = html_to_blocks(html)
        types = [b["type"] for b in blocks]
        self.assertEqual(types, ["paragraph", "image", "paragraph"])
        self.assertEqual(blocks[1]["src"], "/foo/bar.png")
        self.assertEqual(blocks[1]["alt"], "diagram")

    def test_plain_text_fallback_when_html_empty(self):
        blocks = html_to_blocks(None, "Plain text fallback.")
        self.assertEqual(blocks, [{"type": "paragraph", "text": "Plain text fallback."}])

    def test_empty_html_with_no_fallback_returns_no_blocks(self):
        self.assertEqual(html_to_blocks(""), [])
        self.assertEqual(html_to_blocks("   "), [])


if __name__ == "__main__":
    unittest.main()
