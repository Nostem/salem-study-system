import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
FUNCTIONS = ROOT / "supabase/functions"


class EdgeFunctionContractArtifactTests(unittest.TestCase):
    def test_edge_functions_use_shared_http_helpers(self):
        for function_path in sorted(FUNCTIONS.glob("*/index.ts")):
            source = function_path.read_text()
            rel = function_path.relative_to(ROOT).as_posix()
            with self.subTest(function=rel):
                self.assertIn("../_shared/http.ts", source)
                self.assertNotIn("const corsHeaders", source)
                self.assertNotIn("Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')", source)
                self.assertNotIn("authorization.replace(/^Bearer", source)

    def test_shared_http_helper_defines_stable_error_contracts(self):
        source = (FUNCTIONS / "_shared/http.ts").read_text()

        self.assertIn("method_not_allowed", source)
        self.assertIn("missing_authorization", source)
        self.assertIn("invalid_authorization", source)
        self.assertIn("invalid_json", source)
        self.assertIn("createAdminClient", source)
        self.assertIn("createPublicClient", source)
        self.assertIn("persistSession: false", source)
        self.assertIn("typeof body !== 'object'", source)
        self.assertIn("Array.isArray(body)", source)

    def test_quiz_v2_session_function_enforces_learner_safe_question_boundary(self):
        source = (FUNCTIONS / "create-quiz-v2-session/index.ts").read_text()

        self.assertIn(".eq('status', 'active')", source)
        self.assertIn(".eq('quiz_eligible', true)", source)
        self.assertIn(".eq('is_redacted', false)", source)
        self.assertIn("question.status !== 'active'", source)
        self.assertIn("question.is_redacted === true", source)

    def test_review_functions_enforce_learner_safe_question_boundary(self):
        for relative_path in (
            "quiz-review-queue/index.ts",
            "submit-question-review/index.ts",
        ):
            source = (FUNCTIONS / relative_path).read_text()
            with self.subTest(function=relative_path):
                self.assertRegex(source, r"status[\w\W]*active|\.eq\('status',\s*'active'\)")
                self.assertRegex(source, r"quiz_eligible[\w\W]*true|\.eq\('quiz_eligible',\s*true\)")
                self.assertRegex(source, r"is_redacted[\w\W]*(?:!==|===|false)|\.eq\('is_redacted',\s*false\)")

    def test_quiz_review_queue_does_not_put_every_progress_id_in_one_request(self):
        source = (FUNCTIONS / "quiz-review-queue/index.ts").read_text()

        self.assertIn("questions!inner(slug)", source)
        self.assertIn(".order('question_id'", source)
        self.assertIn(".range(pageStart, pageStart + pageSize - 1)", source)
        self.assertNotIn(".in('id', questionIds)", source)

    def test_quiz_history_uses_historical_session_boundary_not_current_practice_pool(self):
        source = (FUNCTIONS / "quiz-history/index.ts").read_text()

        self.assertIn("question_snapshot", source)
        self.assertIn("isHistorySafeQuestion", source)
        self.assertIn("return question.is_redacted !== true", source)
        self.assertNotIn("isLearnerSafeQuestion", source)
        self.assertNotIn("question.status === 'active' && question.quiz_eligible === true", source)
        self.assertIn("sourceStatus", source)

    def test_submit_quiz_results_snapshots_question_answer_state(self):
        source = (FUNCTIONS / "submit-quiz-results/index.ts").read_text()
        migrations = "\n".join(path.read_text() for path in sorted((ROOT / "supabase/migrations").glob("*.sql")))

        self.assertIn("questionSnapshot", source)
        self.assertIn("accepted_answer_labels", source)
        self.assertIn("explanation_text", source)
        self.assertIn("question_snapshot", source)
        self.assertIn("selectedOriginalLabel", source)
        self.assertIn("add column if not exists question_snapshot jsonb", migrations.lower())

    def test_success_responses_preserve_request_origin_for_cors(self):
        for function_path in sorted(FUNCTIONS.glob("*/index.ts")):
            source = function_path.read_text()
            rel = function_path.relative_to(ROOT).as_posix()
            lines = source.splitlines()
            for index, line in enumerate(lines):
                if "return jsonResponse({" not in line:
                    continue
                chunk_lines = []
                for candidate in lines[index:index + 60]:
                    chunk_lines.append(candidate)
                    if ");" in candidate:
                        break
                chunk = "\n".join(chunk_lines)
                if "ok: true" not in chunk:
                    continue
                with self.subTest(function=rel, line=index + 1):
                    self.assertIn(", req", chunk, "successful browser-callable responses must include req so CORS echoes the request Origin")

    def test_submit_question_review_uses_shared_json_body_validation(self):
        source = (FUNCTIONS / "submit-question-review/index.ts").read_text()

        self.assertIn("readJsonBody<{ slug?: unknown; rating?: unknown }>(req)", source)
        self.assertNotIn("await req.json()", source)

    def test_frontend_auth_client_preserves_structured_response_and_error_contracts(self):
        source = (ROOT / "site/src/utils/auth-client.ts").read_text()

        self.assertIn("export class EdgeFunctionError", source)
        self.assertIn("readonly code: string", source)
        self.assertIn("readonly status: number", source)
        self.assertIn("export type InviteSignupResponse", source)
        self.assertRegex(source, r"signupWithInvite\(payload: InviteSignupPayload\): Promise<InviteSignupResponse>")
        self.assertIn("scheduledDays: number", source)
        self.assertIn("fsrsDifficulty: number", source)
        self.assertIn("fsrsStability: number", source)
        self.assertIn("quizType: 'classic'", source)


if __name__ == "__main__":
    unittest.main()
