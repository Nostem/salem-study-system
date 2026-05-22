import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


class FrontendSecurityArtifactTests(unittest.TestCase):
    def test_highlighter_does_not_persist_github_tokens_or_log_selection_context(self):
        source = (ROOT / "site/src/scripts/highlighter.ts").read_text()

        self.assertNotIn("localStorage", source)
        self.assertNotIn("sessionStorage", source)
        self.assertNotIn("console.log('[Highlighter]", source)
        self.assertIn("let githubToken", source)

    def test_inline_json_script_payloads_use_safe_serializer(self):
        pages = [
            "site/src/pages/quiz.astro",
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


if __name__ == "__main__":
    unittest.main()
