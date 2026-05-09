import json
import tempfile
import unittest
from pathlib import Path

from scripts.validate_structured_quiz_bank import main as validator_main, validate_bank


ROOT = Path(__file__).resolve().parents[1]
REAL_BANK = ROOT / "site/src/data/quiz-bank-v2.json"
EXAM_IMAGES = ROOT / "site/public/exam-images"


def _good_question(**overrides):
    question = {
        "schemaVersion": 1,
        "slug": "q01-sample",
        "examYear": 2023,
        "examType": "written",
        "questionNumber": 1,
        "track": "RO",
        "title": "Sample question",
        "status": "draft",
        "quizEligible": True,
        "requiresReference": False,
        "officialAnswerLabel": "A",
        "acceptedAnswerLabels": ["A"],
        "stemBlocks": [{"type": "paragraph", "text": "Stem text."}],
        "choices": [
            {"label": "A", "blocks": [{"type": "paragraph", "text": "alpha"}], "isCorrect": True},
            {"label": "B", "blocks": [{"type": "paragraph", "text": "beta"}], "isCorrect": False},
            {"label": "C", "blocks": [{"type": "paragraph", "text": "gamma"}], "isCorrect": False},
            {"label": "D", "blocks": [{"type": "paragraph", "text": "delta"}], "isCorrect": False},
        ],
        "explanationBlocks": [{"type": "paragraph", "text": "Because A."}],
        "topics": [],
        "sourceRefs": [{"kind": "wiki", "path": "wiki/exams/2023/q01-sample.md", "slug": "q01-sample"}],
        "legacy": {},
    }
    question.update(overrides)
    return question


def _good_bank(questions=None):
    questions = questions if questions is not None else [_good_question()]
    return {
        "schemaVersion": 1,
        "generatedFrom": "site/src/data/quiz-bank.json",
        "summary": {
            "question_count": len(questions),
            "choice_count": sum(len(q.get("choices", [])) for q in questions),
        },
        "topics": [],
        "questions": questions,
    }


class ValidateBankFixtureTests(unittest.TestCase):
    def test_clean_bank_passes(self):
        report = validate_bank(_good_bank())
        self.assertEqual(report.errors, [])
        self.assertEqual(report.warnings, [])

    def test_top_level_required_keys_and_schema_version(self):
        report = validate_bank({})
        joined = "\n".join(report.errors)
        self.assertIn("missing required key", joined)
        self.assertIn("schemaVersion", joined)

    def test_summary_question_count_mismatch(self):
        bank = _good_bank()
        bank["summary"]["question_count"] = 999
        report = validate_bank(bank)
        self.assertTrue(any("question_count" in e for e in report.errors))

    def test_summary_choice_count_mismatch(self):
        bank = _good_bank()
        bank["summary"]["choice_count"] = 1
        report = validate_bank(bank)
        self.assertTrue(any("choice_count" in e for e in report.errors))

    def test_duplicate_slugs_are_errors(self):
        q1 = _good_question(slug="dup-slug")
        q2 = _good_question(slug="dup-slug", questionNumber=2)
        bank = _good_bank([q1, q2])
        report = validate_bank(bank)
        self.assertTrue(any("duplicate slug" in e for e in report.errors))

    def test_invalid_slug_pattern(self):
        bank = _good_bank([_good_question(slug="Bad Slug!")])
        report = validate_bank(bank)
        self.assertTrue(any("must match" in e for e in report.errors))

    def test_official_answer_must_be_in_accepted(self):
        bank = _good_bank(
            [_good_question(officialAnswerLabel="C", acceptedAnswerLabels=["A"])]
        )
        report = validate_bank(bank)
        self.assertTrue(
            any("officialAnswerLabel" in e and "acceptedAnswerLabels" in e for e in report.errors)
        )

    def test_correct_choice_must_match_accepted(self):
        q = _good_question()
        for choice in q["choices"]:
            choice["isCorrect"] = False
        q["choices"][1]["isCorrect"] = True  # B is correct, but accepted=['A']
        bank = _good_bank([q])
        report = validate_bank(bank)
        self.assertTrue(any("do not match acceptedAnswerLabels" in e for e in report.errors))

    def test_dual_correct_with_matching_accepted_labels_passes(self):
        q = _good_question(
            officialAnswerLabel="A",
            acceptedAnswerLabels=["A", "B"],
        )
        q["choices"][0]["isCorrect"] = True
        q["choices"][1]["isCorrect"] = True
        bank = _good_bank([q])
        report = validate_bank(bank)
        self.assertEqual(report.errors, [])

    def test_duplicate_choice_labels_are_errors(self):
        q = _good_question()
        q["choices"][1]["label"] = "A"
        bank = _good_bank([q])
        report = validate_bank(bank)
        self.assertTrue(any("duplicate choice label" in e for e in report.errors))

    def test_unknown_block_type_is_error(self):
        q = _good_question()
        q["stemBlocks"] = [{"type": "video", "src": "x"}]
        bank = _good_bank([q])
        report = validate_bank(bank)
        self.assertTrue(any("unknown block type" in e for e in report.errors))

    def test_image_block_requires_src_and_alt(self):
        q = _good_question()
        q["stemBlocks"] = [{"type": "image", "src": "", "alt": ""}]
        bank = _good_bank([q])
        report = validate_bank(bank, exam_images_dir=None)
        self.assertTrue(any("image.src" in e for e in report.errors))
        self.assertTrue(any("image.alt is empty" in w for w in report.warnings))

    def test_table_row_width_must_match_headers(self):
        q = _good_question()
        q["stemBlocks"] = [
            {
                "type": "table",
                "headers": ["a", "b"],
                "rows": [["1", "2"], ["only-one"]],
            }
        ]
        bank = _good_bank([q])
        report = validate_bank(bank, exam_images_dir=None)
        self.assertTrue(any("row width" in e for e in report.errors))

    def test_redacted_question_with_empty_choices_is_warning_not_error(self):
        q = _good_question(
            slug="q-redacted",
            choices=[],
            officialAnswerLabel="A",
            acceptedAnswerLabels=["A"],
            legacy={"isRedacted": True},
        )
        bank = _good_bank([q])
        report = validate_bank(bank)
        self.assertEqual(report.errors, [])
        self.assertTrue(any("redacted question" in w for w in report.warnings))

    def test_empty_choices_without_redacted_flag_is_error(self):
        q = _good_question(slug="q-no-choices", choices=[])
        bank = _good_bank([q])
        report = validate_bank(bank)
        self.assertTrue(any("choices is empty" in e for e in report.errors))

    def test_source_ref_kind_required(self):
        q = _good_question(sourceRefs=[{"kind": ""}])
        bank = _good_bank([q])
        report = validate_bank(bank)
        self.assertTrue(any("kind missing" in e for e in report.errors))

    def test_wiki_source_ref_requires_path(self):
        q = _good_question(sourceRefs=[{"kind": "wiki"}])
        bank = _good_bank([q])
        report = validate_bank(bank)
        self.assertTrue(any("wiki source ref missing path" in e for e in report.errors))

    def test_image_asset_existence_check(self):
        with tempfile.TemporaryDirectory() as tmpdir:
            images_dir = Path(tmpdir)
            (images_dir / "real.png").write_bytes(b"fake-png")

            q_ok = _good_question(slug="q-img-ok")
            q_ok["stemBlocks"] = [
                {"type": "image", "src": "/salem-study-system/exam-images/real.png", "alt": "ok"}
            ]
            q_bad = _good_question(slug="q-img-missing", questionNumber=2)
            q_bad["stemBlocks"] = [
                {"type": "image", "src": "/salem-study-system/exam-images/missing.png", "alt": "bad"}
            ]
            bank = _good_bank([q_ok, q_bad])
            report = validate_bank(bank, exam_images_dir=images_dir)
            self.assertTrue(any("missing.png" in e for e in report.errors))
            self.assertFalse(any("real.png" in e for e in report.errors))

    def test_image_src_outside_prefix_is_skipped(self):
        with tempfile.TemporaryDirectory() as tmpdir:
            q = _good_question()
            q["stemBlocks"] = [
                {"type": "image", "src": "https://example.com/external.png", "alt": "ext"}
            ]
            bank = _good_bank([q])
            report = validate_bank(bank, exam_images_dir=Path(tmpdir))
            self.assertEqual(report.errors, [])

    def test_image_src_with_path_traversal_is_error(self):
        with tempfile.TemporaryDirectory() as tmpdir:
            q = _good_question()
            q["stemBlocks"] = [
                {
                    "type": "image",
                    "src": "/salem-study-system/exam-images/../secret.png",
                    "alt": "x",
                }
            ]
            bank = _good_bank([q])
            report = validate_bank(bank, exam_images_dir=Path(tmpdir))
            self.assertTrue(any("outside exam-images directory" in e for e in report.errors))


class ValidateBankRealDataTests(unittest.TestCase):
    """Smoke test against the actual generated quiz-bank-v2.json."""

    def test_real_bank_has_no_errors(self):
        if not REAL_BANK.is_file():
            self.skipTest(f"{REAL_BANK} not present")
        bank = json.loads(REAL_BANK.read_text(encoding="utf-8"))
        exam_images_dir = EXAM_IMAGES if EXAM_IMAGES.is_dir() else None
        report = validate_bank(bank, exam_images_dir=exam_images_dir)
        self.assertEqual(
            report.errors,
            [],
            "Real quiz-bank-v2.json should validate cleanly. Errors:\n"
            + "\n".join(report.errors),
        )


class ValidateBankCliTests(unittest.TestCase):
    def _write(self, path: Path, payload) -> None:
        path.write_text(json.dumps(payload), encoding="utf-8")

    def test_cli_returns_zero_for_clean_bank(self):
        with tempfile.TemporaryDirectory() as tmpdir:
            bank_path = Path(tmpdir) / "v2.json"
            self._write(bank_path, _good_bank())
            exit_code = validator_main(
                ["--in", str(bank_path), "--no-image-check"]
            )
            self.assertEqual(exit_code, 0)

    def test_cli_returns_one_for_broken_bank(self):
        with tempfile.TemporaryDirectory() as tmpdir:
            bank_path = Path(tmpdir) / "v2.json"
            broken = _good_bank()
            broken["schemaVersion"] = 99
            self._write(bank_path, broken)
            exit_code = validator_main(
                ["--in", str(bank_path), "--no-image-check"]
            )
            self.assertEqual(exit_code, 1)

    def test_cli_returns_two_for_missing_input(self):
        with tempfile.TemporaryDirectory() as tmpdir:
            missing = Path(tmpdir) / "missing.json"
            exit_code = validator_main(["--in", str(missing), "--no-image-check"])
            self.assertEqual(exit_code, 2)

    def test_cli_strict_mode_treats_warnings_as_errors(self):
        with tempfile.TemporaryDirectory() as tmpdir:
            bank_path = Path(tmpdir) / "v2.json"
            q = _good_question(
                slug="q-redacted",
                choices=[],
                legacy={"isRedacted": True},
            )
            self._write(bank_path, _good_bank([q]))
            normal = validator_main(["--in", str(bank_path), "--no-image-check"])
            strict = validator_main(["--in", str(bank_path), "--no-image-check", "--strict"])
            self.assertEqual(normal, 0)
            self.assertEqual(strict, 1)


if __name__ == "__main__":
    unittest.main()
