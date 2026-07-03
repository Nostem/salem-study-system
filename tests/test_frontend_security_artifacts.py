import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class FrontendSecurityArtifactTests(unittest.TestCase):
    def test_maintainer_highlighter_stays_out_of_public_bundle(self):
        # The inline highlighter (GitHub-token editing UI) was removed from the
        # public bundle in the 2026-07 audit. Keep it out: reintroducing it
        # ships token-handling code to every visitor.
        self.assertFalse((ROOT / "site/src/scripts/highlighter.ts").exists())
        self.assertFalse((ROOT / "site/src/components/HighlightToolbar.astro").exists())

    def test_inline_json_script_payloads_use_safe_serializer(self):
        # quiz.astro no longer inlines a JSON payload (the bank is fetched);
        # every page that still does must route it through safeInlineJson.
        pages = [
            "site/src/pages/quiz-v2.astro",
            "site/src/pages/quiz-v2/play.astro",
            "site/src/pages/quiz-v2/review.astro",
            "site/src/pages/graph-v2.astro",
        ]
        for page in pages:
            with self.subTest(page=page):
                source = (ROOT / page).read_text()
                self.assertIn("safeInlineJson", source)
                self.assertNotIn("set:html={JSON.stringify", source)

    def test_quiz_page_has_no_inline_bank_payload(self):
        source = (ROOT / "site/src/pages/quiz.astro").read_text()
        self.assertNotIn('type="application/json"', source)
        self.assertNotIn("set:html={JSON.stringify", source)


if __name__ == "__main__":
    unittest.main()
