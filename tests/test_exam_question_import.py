import unittest
from pathlib import Path

from scripts.exam_question_import import (
    audit_question_records,
    build_question_record,
    build_wiki_slug_index,
    collect_question_records,
    load_exam_yaml,
    load_topic_map,
    parse_question_markdown,
    resolve_record_topic_slugs,
    resolve_topic_slug_for_record,
)


ROOT = Path(__file__).resolve().parents[1]


class ExamQuestionImportTests(unittest.TestCase):
    def test_load_exam_yaml_supports_list_root_and_reference_metadata(self):
        questions = load_exam_yaml(ROOT / "data/exams/2018-written-exam.yaml")

        self.assertGreaterEqual(len(questions), 99)
        q11 = next(q for q in questions if q["number"] == 11)
        self.assertEqual(q11["answer"], "A")
        self.assertEqual(q11["type"], "RO")
        self.assertFalse(q11["reference"])
        self.assertIn("4kv", q11["systems"])

    def test_load_exam_yaml_supports_document_with_questions_key(self):
        questions = load_exam_yaml(ROOT / "data/exams/2019-written-exam.yaml")

        self.assertGreaterEqual(len(questions), 100)
        q1 = questions[0]
        self.assertEqual(q1["number"], 1)
        self.assertEqual(q1["answer"], "D")
        self.assertEqual(q1["tech_specs"], ["ts-3-4-4-rcs"])

    def test_parse_question_markdown_preserves_status_reference_choices_and_connections(self):
        parsed = parse_question_markdown(ROOT / "wiki/exams/2018/q35-steam-dump-load-rejection-controller.md")

        self.assertEqual(parsed["year"], 2018)
        self.assertEqual(parsed["number"], 35)
        self.assertEqual(parsed["status"], "active")
        self.assertTrue(parsed["is_edited"])
        self.assertFalse(parsed["requires_reference"])
        self.assertEqual(parsed["official_answer_label"], "C")
        self.assertEqual(len(parsed["choices"]), 4)
        self.assertEqual(parsed["choices"][2]["label"], "C")
        self.assertTrue(parsed["choices"][2]["is_correct"])
        self.assertIn("Steam Dumps", parsed["connections"]["related systems"])
        self.assertIn("2018 NRC Written Exam", parsed["connections"]["related exam"])
        self.assertIn("Steam Dump System", parsed["stem_text"])
        self.assertIn("Ref: NOS05STDUMP-12", parsed["reference_note"])

    def test_parse_question_markdown_marks_outdated_questions(self):
        parsed = parse_question_markdown(ROOT / "wiki/exams/2019/q49-eop-trip-1-immediate-actions.md")

        self.assertEqual(parsed["status"], "outdated")
        self.assertFalse(parsed["is_edited"])
        self.assertFalse(parsed["requires_reference"])
        self.assertEqual(parsed["official_answer_label"], "D")
    def test_parse_question_markdown_handles_multiple_correct_answers(self):
        parsed = parse_question_markdown(ROOT / "wiki/exams/2022/q88-loss-of-control-air-pzr-level.md")

        self.assertEqual(parsed["official_answer_label"], "A")
        self.assertEqual(parsed["accepted_answer_labels"], ["A", "B"])
        self.assertTrue(parsed["choices"][0]["is_correct"])
        self.assertTrue(parsed["choices"][1]["is_correct"])

    def test_build_question_record_merges_yaml_and_markdown_for_db_import(self):
        yaml_question = next(
            q for q in load_exam_yaml(ROOT / "data/exams/2018-written-exam.yaml")
            if q["number"] == 35
        )
        markdown_question = parse_question_markdown(
            ROOT / "wiki/exams/2018/q35-steam-dump-load-rejection-controller.md"
        )

        record = build_question_record(yaml_question, markdown_question)

        self.assertEqual(record["exam_year"], 2018)
        self.assertEqual(record["question_number"], 35)
        self.assertEqual(record["track"], "RO")
        self.assertEqual(record["status"], "active")
        self.assertTrue(record["is_edited"])
        self.assertFalse(record["requires_reference"])
        self.assertEqual(record["official_answer_label"], "C")
        self.assertEqual(record["ka_code"], "041 SDS-K6.03")
        self.assertEqual(record["question_source"], "Bank")
        self.assertEqual(record["topic_slugs"], ["steam-dumps"])
        self.assertIn("steam-dumps", record["topic_slugs"])
        self.assertEqual(len(record["choices"]), 4)

    def test_collect_question_records_exports_one_exam_year(self):
        records = collect_question_records(ROOT, exam_year=2018)

        self.assertGreaterEqual(len(records), 99)
        q35 = next(record for record in records if record["question_number"] == 35)
        self.assertEqual(q35["exam_year"], 2018)
        self.assertEqual(q35["slug"], "q35-steam-dump-load-rejection-controller")
        self.assertEqual(q35["official_answer_label"], "C")
        self.assertEqual(len(q35["choices"]), 4)
        self.assertTrue(all(record["exam_year"] == 2018 for record in records))

    def test_redacted_question_is_not_quiz_eligible(self):
        records = collect_question_records(ROOT, exam_year=2023)
        q85 = next(record for record in records if record["question_number"] == 85)

        self.assertTrue(q85["is_redacted"])
        self.assertFalse(q85["quiz_eligible"])
        self.assertEqual(q85["non_quiz_reason"], "security_redacted")

    def test_audit_question_records_identifies_redacted_question_and_multi_answer_as_review_items(self):
        records = collect_question_records(ROOT, exam_year=2023)
        audit = audit_question_records(records)

        self.assertEqual(audit["total_records"], len(records))
        self.assertNotIn("missing_choices", audit["issue_counts"])
        self.assertIn(
            "q85-sg-overpressure-security-redacted",
            [item["slug"] for item in audit["review_items"] if item["issue"] == "redacted_question_excluded"],
        )

        records = collect_question_records(ROOT, exam_year=2022)
        audit = audit_question_records(records)
        self.assertIn(
            "q88-loss-of-control-air-pzr-level",
            [item["slug"] for item in audit["review_items"] if item["issue"] == "multiple_accepted_answers"],
        )

    def test_audit_question_records_identifies_yaml_markdown_answer_mismatch(self):
        record = {
            "exam_year": 2099,
            "question_number": 1,
            "slug": "q1-answer-mismatch",
            "status": "active",
            "requires_reference": False,
            "yaml_answer_label": "A",
            "markdown_answer_label": "B",
            "official_answer_label": "B",
            "accepted_answer_labels": ["B"],
            "choices": [
                {"label": "A", "is_correct": False},
                {"label": "B", "is_correct": True},
                {"label": "C", "is_correct": False},
                {"label": "D", "is_correct": False},
            ],
            "connections": {},
            "topic_slugs": [],
        }

        audit = audit_question_records([record])

        self.assertEqual(audit["issue_counts"]["yaml_markdown_answer_mismatch"], 1)
        self.assertEqual(audit["issues"][0]["slug"], "q1-answer-mismatch")

    def test_audit_question_records_identifies_unresolved_connection_links(self):
        record = {
            "exam_year": 2099,
            "question_number": 2,
            "slug": "q2-unresolved-link",
            "status": "active",
            "requires_reference": False,
            "yaml_answer_label": "A",
            "markdown_answer_label": "A",
            "official_answer_label": "A",
            "accepted_answer_labels": ["A"],
            "choices": [
                {"label": "A", "is_correct": True},
                {"label": "B", "is_correct": False},
                {"label": "C", "is_correct": False},
                {"label": "D", "is_correct": False},
            ],
            "connections": {"related systems": ["Steam Dumps", "Does Not Exist"]},
            "topic_slugs": [],
        }

        audit = audit_question_records([record], known_wiki_slugs={"steam-dumps"})

        self.assertEqual(audit["issue_counts"]["unresolved_connection"], 1)
        self.assertEqual(audit["issues"][0]["detail"], "Connection link does not resolve: Does Not Exist")

    def test_audit_question_records_identifies_unresolved_topic_slugs(self):
        record = {
            "exam_year": 2099,
            "question_number": 3,
            "slug": "q3-unresolved-topic",
            "status": "active",
            "requires_reference": False,
            "yaml_answer_label": "A",
            "markdown_answer_label": "A",
            "official_answer_label": "A",
            "accepted_answer_labels": ["A"],
            "choices": [
                {"label": "A", "is_correct": True},
                {"label": "B", "is_correct": False},
                {"label": "C", "is_correct": False},
                {"label": "D", "is_correct": False},
            ],
            "connections": {},
            "topic_slugs": ["steam-dumps", "missing-topic"],
        }

        audit = audit_question_records([record], known_wiki_slugs={"steam-dumps"})

        self.assertEqual(audit["issue_counts"]["unresolved_topic_slug"], 1)
        self.assertEqual(audit["issues"][0]["detail"], "Topic slug does not resolve: missing-topic")

    def test_audit_question_records_resolves_topic_slugs_through_topic_map(self):
        record = {
            "exam_year": 2099,
            "question_number": 4,
            "slug": "q4-mapped-topic",
            "status": "active",
            "requires_reference": False,
            "yaml_answer_label": "A",
            "markdown_answer_label": "A",
            "official_answer_label": "A",
            "accepted_answer_labels": ["A"],
            "choices": [
                {"label": "A", "is_correct": True},
                {"label": "B", "is_correct": False},
                {"label": "C", "is_correct": False},
                {"label": "D", "is_correct": False},
            ],
            "connections": {},
            "topic_slugs": ["legacy-feedwater"],
        }

        audit = audit_question_records(
            [record],
            known_wiki_slugs={"feed-and-condensate"},
            topic_map={"legacy-feedwater": {"target_wiki": "Feed & Condensate"}},
        )

        self.assertEqual(audit["issue_counts"], {})

    def test_audit_question_records_resolves_split_topic_slugs_by_question(self):
        record = {
            "exam_year": 2099,
            "question_number": 5,
            "slug": "q5-split-topic",
            "status": "active",
            "requires_reference": False,
            "yaml_answer_label": "A",
            "markdown_answer_label": "A",
            "official_answer_label": "A",
            "accepted_answer_labels": ["A"],
            "choices": [
                {"label": "A", "is_correct": True},
                {"label": "B", "is_correct": False},
                {"label": "C", "is_correct": False},
                {"label": "D", "is_correct": False},
            ],
            "connections": {},
            "topic_slugs": ["broad-legacy-topic"],
        }

        audit = audit_question_records(
            [record],
            known_wiki_slugs={"specific-system"},
            topic_map={
                "broad-legacy-topic": {
                    "status": "needs_split",
                    "question_routes": {"2099-q5": {"target_wiki": "specific-system"}},
                }
            },
        )

        self.assertEqual(audit["issue_counts"], {})

    def test_load_topic_map_reads_controlled_yaml(self):
        topic_map = load_topic_map(ROOT / "data/topic-map.yaml")

        self.assertEqual(topic_map["feed-and-condensate"]["target_wiki"], "feed & condensate")
        self.assertEqual(topic_map["ac-power"]["status"], "needs_split")

    def test_resolve_topic_slug_for_record_maps_direct_legacy_slug(self):
        record = {
            "exam_year": 2099,
            "question_number": 1,
            "slug": "q1-feedwater",
        }

        resolved = resolve_topic_slug_for_record(
            "legacy-feedwater",
            record,
            {"legacy-feedwater": {"target_wiki": "Feed & Condensate"}},
        )

        self.assertEqual(resolved, ["feed-and-condensate"])

    def test_resolve_record_topic_slugs_applies_split_routes_and_additional_topics(self):
        record = {
            "exam_year": 2099,
            "question_number": 93,
            "slug": "q93-cw-bus-loss",
            "topic_slugs": ["electrical-power-systems", "steam-dumps"],
        }
        topic_map = {
            "electrical-power-systems": {
                "status": "needs_split",
                "question_routes": {
                    "2099-q93": {
                        "target_wiki": "4KV",
                        "add_topic_slugs": ["ab-cw-0001-circulating-water-malfunction"],
                    }
                },
            }
        }

        resolved = resolve_record_topic_slugs(record, topic_map)

        self.assertEqual(
            resolved,
            ["4kv", "ab-cw-0001-circulating-water-malfunction", "steam-dumps"],
        )

    def test_collect_question_records_can_emit_resolved_topic_slugs_for_db_export(self):
        records = collect_question_records(ROOT, exam_year=2023, topic_map=load_topic_map(ROOT / "data/topic-map.yaml"))
        q93 = next(record for record in records if record["question_number"] == 93)

        self.assertIn("electrical-power-systems", q93["topic_slugs"])
        self.assertIn("4kv", q93["resolved_topic_slugs"])
        self.assertIn("ab-cw-0001-circulating-water-malfunction", q93["resolved_topic_slugs"])
        self.assertNotIn("electrical-power-systems", q93["resolved_topic_slugs"])

    def test_build_wiki_slug_index_includes_slug_and_title_alias(self):
        slug_index = build_wiki_slug_index(ROOT)

        self.assertIn("steam-dumps", slug_index)
        self.assertIn("condenser-steam-dumps", slug_index)

    def test_build_wiki_slug_index_resolves_ampersand_titles_as_and_slugs(self):
        slug_index = build_wiki_slug_index(ROOT)

        self.assertIn("feed-and-condensate", slug_index)
        self.assertIn("pressurizer-and-prt", slug_index)
        self.assertIn("steam-generator-and-blowdown", slug_index)
        self.assertIn("rx-vessel-and-internals", slug_index)


if __name__ == "__main__":
    unittest.main()
