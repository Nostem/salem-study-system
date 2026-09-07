"""Real PostgreSQL gates on synthetic fixtures; never connects to a deployed DB."""
import json
import os
from pathlib import Path
import re
import shutil
import subprocess
import tempfile
import unittest

import yaml

ROOT = Path(__file__).resolve().parents[1]
GATE = ROOT / "scripts/verify_db_deploy.sql"
SIGNATURE = "public.replace_quiz_session_writes(uuid,uuid,jsonb,jsonb,jsonb)"
INDEXES = {
    "auth_rate_limit_attempted_at_idx": "auth_rate_limit",
    "question_attempts_session_question_idx": "question_attempts",
    "quiz_sessions_user_completed_idx": "quiz_sessions",
}
FIXTURE = """
DROP SCHEMA public CASCADE;
DROP SCHEMA IF EXISTS other CASCADE;
CREATE SCHEMA public;
CREATE SCHEMA other;
CREATE TABLE public.profiles (id uuid PRIMARY KEY);
CREATE TABLE other.profiles (id uuid PRIMARY KEY);
CREATE TABLE public.system_reviews (
    user_id uuid, other_id uuid,
    CONSTRAINT reviews_user_fk FOREIGN KEY (user_id) REFERENCES public.profiles(id));
CREATE TABLE public.auth_rate_limit (attempted_at timestamptz);
CREATE TABLE public.question_attempts (quiz_session_id uuid, question_id uuid);
CREATE TABLE public.quiz_sessions (user_id uuid, completed_at timestamptz);
CREATE TABLE public.quiz_session_questions (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    created_at timestamptz NOT NULL, question_snapshot jsonb);
CREATE INDEX auth_rate_limit_attempted_at_idx ON public.auth_rate_limit(attempted_at);
CREATE UNIQUE INDEX question_attempts_session_question_idx ON public.question_attempts(quiz_session_id, question_id)
    WHERE quiz_session_id IS NOT NULL;
CREATE INDEX quiz_sessions_user_completed_idx ON public.quiz_sessions(user_id, completed_at DESC)
    WHERE completed_at IS NOT NULL;
CREATE FUNCTION public.replace_quiz_session_writes(uuid,uuid,jsonb,jsonb,jsonb)
RETURNS void LANGUAGE plpgsql AS $$ BEGIN NULL; END $$;
"""


def workflow(name):
    # BaseLoader preserves YAML's `on` key rather than treating it as boolean.
    return yaml.load((ROOT / ".github/workflows" / name).read_text(), Loader=yaml.BaseLoader)


class DatabaseGateTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        candidates = []
        if os.environ.get("PG_BIN"):
            candidates.append(Path(os.environ["PG_BIN"]))
        config = shutil.which("pg_config")
        if config:
            candidates.append(Path(subprocess.check_output([config, "--bindir"], text=True).strip()))
        initdb = shutil.which("initdb")
        if initdb:
            candidates.append(Path(initdb).parent)
        cls.bin = next((p for p in candidates if all(
            (p / tool).is_file() for tool in ("initdb", "pg_ctl", "postgres", "psql")
        )), None)
        if cls.bin is None:
            if os.environ.get("CI") or os.environ.get("DB_GATE_INTEGRATION") == "1":
                raise RuntimeError("PostgreSQL server tools required in CI; set PG_BIN")
            raise unittest.SkipTest("PostgreSQL server tools missing; set PG_BIN")
        # Do not inherit connection settings, passwords, service files or .env.
        cls.env = {k: v for k, v in os.environ.items()
                   if not k.startswith(("PG", "SUPABASE"))}
        cls.env["LC_ALL"] = "C"  # macOS postgres must not initialize threaded locale APIs.
        cls.temp = tempfile.TemporaryDirectory(prefix="salem-db-gate-", dir="/tmp")
        cls.base = Path(cls.temp.name)
        cls.data = cls.base / "data"
        cls.socket = cls.base / "socket"
        cls.socket.mkdir(mode=0o700)
        cls.addClassCleanup(cls.cleanup_cluster)
        cls.run_tool("initdb", "-D", str(cls.data), "-U", "gate_test", "-A", "trust", "--no-locale")
        with (cls.data / "postgresql.conf").open("a") as config:
            config.write("\nlisten_addresses = ''\nunix_socket_directories = '" + str(cls.socket) + "'\n")
        try:
            cls.run_tool("pg_ctl", "-D", str(cls.data), "-l", str(cls.base / "postgres.log"), "-w", "start")
        except subprocess.CalledProcessError as exc:
            raise RuntimeError((cls.base / "postgres.log").read_text()) from exc
        cls.client = [str(cls.bin / "psql"), "-X", "-h", str(cls.socket),
                      "-p", "5432", "-U", "gate_test", "-d", "postgres", "-v", "ON_ERROR_STOP=1"]

    @classmethod
    def run_tool(cls, name, *args):
        return subprocess.run([str(cls.bin / name), *args], env=cls.env,
                              text=True, capture_output=True, check=True, timeout=40)

    @classmethod
    def cleanup_cluster(cls):
        if (cls.data / "postmaster.pid").exists():
            cls.run_tool("pg_ctl", "-D", str(cls.data), "-m", "immediate", "-w", "stop")
        cls.temp.cleanup()

    def sql(self, text, check=True):
        return subprocess.run(self.client, input=text, text=True, capture_output=True,
                              env=self.env, check=check, timeout=40)

    def setUp(self):
        self.sql(FIXTURE)

    def gate(self, snapshots: object = False):
        return subprocess.run(self.client + ["-v", "check_snapshots=" + str(snapshots).lower(),
                                             "-f", str(GATE)],
                              env=self.env, text=True, capture_output=True, timeout=40)

    def test_schema_only_allows_empty_snapshots(self):
        result = self.gate()
        self.assertEqual(result.returncode, 0, result.stderr)

    def test_each_missing_invariant_fails(self):
        cases = {
            "function": "DROP FUNCTION " + SIGNATURE,
            "table": "DROP TABLE public.auth_rate_limit CASCADE",
            "foreign_key": "ALTER TABLE public.system_reviews DROP CONSTRAINT reviews_user_fk",
        }
        cases.update({name: "DROP INDEX public." + name for name in INDEXES})
        for label, mutation in cases.items():
            with self.subTest(invariant=label):
                self.sql(FIXTURE + mutation + ";")
                result = self.gate()
                self.assertNotEqual(result.returncode, 0, result.stdout)

    def test_wrong_function_signature_or_schema_fails(self):
        for replacement in (
            "CREATE FUNCTION public.replace_quiz_session_writes(text) RETURNS void LANGUAGE sql AS 'SELECT';",
            "CREATE FUNCTION public.replace_quiz_session_writes(uuid,uuid,jsonb,jsonb,jsonb) RETURNS integer LANGUAGE sql AS 'SELECT 1';",
            "CREATE FUNCTION other.replace_quiz_session_writes(uuid,uuid,jsonb,jsonb,jsonb) RETURNS void LANGUAGE sql AS 'SELECT';",
        ):
            with self.subTest(replacement=replacement):
                self.sql(FIXTURE + "DROP FUNCTION " + SIGNATURE + ";" + replacement)
                self.assertNotEqual(self.gate().returncode, 0)

    def test_wrong_fk_target_column_schema_or_unvalidated_fails(self):
        for replacement in (
            "FOREIGN KEY (user_id) REFERENCES other.profiles(id)",
            "FOREIGN KEY (other_id) REFERENCES public.profiles(id)",
            "FOREIGN KEY (user_id) REFERENCES public.profiles(id) NOT VALID",
        ):
            with self.subTest(replacement=replacement):
                self.sql(FIXTURE + "ALTER TABLE public.system_reviews DROP CONSTRAINT reviews_user_fk;"
                         "ALTER TABLE public.system_reviews ADD CONSTRAINT wrong_fk " + replacement + ";")
                self.assertNotEqual(self.gate().returncode, 0)
        self.sql(FIXTURE + "ALTER TABLE public.system_reviews SET SCHEMA other;")
        self.assertNotEqual(self.gate().returncode, 0)

    def test_each_index_wrong_table_schema_or_invalid_fails(self):
        for name in INDEXES:
            for mutation in (
                "DROP INDEX public.{0}; CREATE INDEX {0} ON public.profiles(id);".format(name),
                "ALTER TABLE public.{0} SET SCHEMA other;".format(INDEXES[name]),
                "UPDATE pg_index SET indisvalid = false WHERE indexrelid = 'public.{0}'::regclass;".format(name),
            ):
                with self.subTest(index=name, mutation=mutation):
                    self.sql(FIXTURE + mutation)
                    self.assertNotEqual(self.gate().returncode, 0)

    def test_actual_migration_indexes_pass(self):
        migrations = {
            "auth_rate_limit_attempted_at_idx": "20260703_atomic_quiz_submit.sql",
            "question_attempts_session_question_idx": "20260610_auth_rate_limit_and_consistency.sql",
            "quiz_sessions_user_completed_idx": "20260610_quiz_history_index.sql",
        }
        for name, filename in migrations.items():
            sql = (ROOT / "supabase/migrations" / filename).read_text()
            # Execute only the real index statement on synthetic tables, not the migration.
            statements = re.findall(
                r"create\s+(?:unique\s+)?index\s+if\s+not\s+exists\s+" + re.escape(name) + r"\s+[^;]+;",
                sql, re.IGNORECASE,
            )
            self.assertEqual(len(statements), 1)
            self.sql("DROP INDEX public." + name + ";" + statements[0])
        result = self.gate()
        self.assertEqual(result.returncode, 0, result.stderr)

    def test_each_index_wrong_semantics_fails(self):
        cases = {
            "auth_rate_limit_attempted_at_idx": [
                "CREATE UNIQUE INDEX {name} ON public.auth_rate_limit(attempted_at)",
                "CREATE INDEX {name} ON public.auth_rate_limit(attempted_at DESC)",
                "CREATE INDEX {name} ON public.auth_rate_limit(attempted_at) WHERE attempted_at IS NOT NULL",
                "CREATE INDEX {name} ON public.auth_rate_limit USING hash(attempted_at)",
            ],
            "question_attempts_session_question_idx": [
                "CREATE INDEX {name} ON public.question_attempts(quiz_session_id, question_id) WHERE quiz_session_id IS NOT NULL",
                "CREATE UNIQUE INDEX {name} ON public.question_attempts(question_id, quiz_session_id) WHERE quiz_session_id IS NOT NULL",
                "CREATE UNIQUE INDEX {name} ON public.question_attempts(quiz_session_id) INCLUDE (question_id) WHERE quiz_session_id IS NOT NULL",
                "CREATE UNIQUE INDEX {name} ON public.question_attempts(quiz_session_id, question_id) WHERE quiz_session_id IS NULL",
                "CREATE UNIQUE INDEX {name} ON public.question_attempts(quiz_session_id, question_id) WHERE question_id IS NOT NULL",
                "CREATE UNIQUE INDEX {name} ON public.question_attempts(quiz_session_id, question_id) WHERE quiz_session_id IS NOT NULL AND question_id IS NULL",
                "CREATE UNIQUE INDEX {name} ON public.question_attempts(quiz_session_id, question_id)",
            ],
            "quiz_sessions_user_completed_idx": [
                "CREATE INDEX {name} ON public.quiz_sessions(completed_at DESC, user_id) WHERE completed_at IS NOT NULL",
                "CREATE INDEX {name} ON public.quiz_sessions(user_id, completed_at) WHERE completed_at IS NOT NULL",
                "CREATE INDEX {name} ON public.quiz_sessions(user_id, completed_at DESC)",
                "CREATE INDEX {name} ON public.quiz_sessions(user_id, completed_at DESC) WHERE completed_at IS NULL",
            ],
        }
        for name, replacements in cases.items():
            for replacement in replacements:
                with self.subTest(index=name, replacement=replacement):
                    self.sql(FIXTURE + "DROP INDEX public." + name + ";" + replacement.format(name=name) + ";")
                    result = self.gate()
                    self.assertNotEqual(result.returncode, 0, result.stdout + result.stderr)
                    self.assertIn(name, result.stderr)
                    self.assertNotIn("schema_gate=passed", result.stdout + result.stderr)

    def test_empty_or_malformed_snapshot_option_fails(self):
        for value in ("", "not-a-boolean"):
            with self.subTest(value=value):
                result = self.gate(snapshots=value)
                self.assertNotEqual(result.returncode, 0)
                self.assertIn("invalid input syntax for type boolean", result.stderr)
                self.assertNotIn("snapshot_gate=skipped", result.stdout + result.stderr)

    def test_mixed_latest_five_sample_fails_without_leaking(self):
        valid = {"version": 2, "choices": [], "topicSlugs": [], "private": "LEARNER_MARKER"}
        # The older malformed row is excluded; exactly one of the latest five is invalid.
        self.insert_snapshot({**valid, "version": 1})
        for age in range(1, 6):
            self.insert_snapshot({**valid, "version": 1 if age == 3 else 2}, age)
        result = self.gate(snapshots=True)
        self.assertNotEqual(result.returncode, 0)
        self.assertIn("snapshot_sample_count=5 invalid_count=1", result.stdout + result.stderr)
        self.assertNotIn("LEARNER_MARKER", result.stdout + result.stderr)
        self.assertNotIn("2000-01-01", result.stdout + result.stderr)

    def insert_snapshot(self, snapshot, age=0):
        value = "NULL" if snapshot is None else "'" + json.dumps(snapshot).replace("'", "''") + "'::jsonb"
        self.sql("INSERT INTO public.quiz_session_questions(created_at,question_snapshot) VALUES "
                 "('2000-01-01'::timestamptz + " + str(age) + " * interval '1 second'," + value + ");")

    def test_default_schema_gate_does_not_read_snapshots(self):
        self.sql("DROP TABLE public.quiz_session_questions;")
        result = subprocess.run(self.client + ["-f", str(GATE)], env=self.env,
                                capture_output=True, text=True, timeout=40)
        self.assertEqual(result.returncode, 0, result.stderr)

    def test_one_valid_snapshot_passes(self):
        self.insert_snapshot({"version": 2, "choices": [], "topicSlugs": []})
        result = self.gate(snapshots=True)
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertIn("snapshot_sample_count=1", result.stdout + result.stderr)

    def test_snapshot_empty_fails_only_when_requested(self):
        self.assertNotEqual(self.gate(snapshots=True).returncode, 0)
        self.assertEqual(self.gate().returncode, 0)

    def test_valid_snapshot_sample_is_bounded_and_private(self):
        self.insert_snapshot({"version": 1, "private": "LEARNER_MARKER"})
        for age in range(1, 7):
            self.insert_snapshot({"version": 2, "choices": [], "topicSlugs": [],
                                  "private": "LEARNER_MARKER"}, age)
        result = self.gate(snapshots=True)
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertIn("snapshot_sample_count=5", result.stdout + result.stderr)
        self.assertNotIn("LEARNER_MARKER", result.stdout + result.stderr)
        self.assertNotIn("2000-01-01", result.stdout + result.stderr)

    def test_each_malformed_snapshot_fails_without_leaking(self):
        valid = {"version": 2, "choices": [], "topicSlugs": [], "private": "LEARNER_MARKER"}
        cases = [None, {}, [], {**valid, "version": 1}, {**valid, "version": "2"}]
        for field in ("version", "choices", "topicSlugs"):
            cases.append({k: v for k, v in valid.items() if k != field})
            cases.extend({**valid, field: value} for value in (None, {}, "LEARNER_MARKER"))
        for number, snapshot in enumerate(cases):
            with self.subTest(case=number):
                self.sql("TRUNCATE public.quiz_session_questions;")
                self.insert_snapshot(snapshot)
                result = self.gate(snapshots=True)
                self.assertNotEqual(result.returncode, 0)
                self.assertNotIn("LEARNER_MARKER", result.stdout + result.stderr)
                self.assertNotIn("2000-01-01", result.stdout + result.stderr)


class WorkflowGateTests(unittest.TestCase):
    def test_live_verification_timeouts_are_step_scoped(self):
        for filename, job_name in (("db-verify.yml", "verify"), ("db-migrate.yml", "apply-migration")):
            with self.subTest(workflow=filename):
                job = workflow(filename)["jobs"][job_name]
                self.assertNotIn("timeout-minutes", job)
                self.assertNotIn("PGCONNECT_TIMEOUT", job.get("env", {}))
                gate = next(step for step in job["steps"]
                            if "scripts/verify_db_deploy.sql" in step.get("run", ""))
                # Keep separate subtests so RED proves both missing limits in both workflows.
                with self.subTest(limit="step"):
                    self.assertEqual(gate.get("timeout-minutes"), "2")
                with self.subTest(limit="connection"):
                    self.assertEqual(gate.get("env", {}).get("PGCONNECT_TIMEOUT"), "10")
                for step in job["steps"]:
                    if step is not gate:
                        self.assertNotIn("PGCONNECT_TIMEOUT", step.get("env", {}))
                        self.assertNotIn("timeout-minutes", step)

    def test_shared_gate_runs_after_migrations_and_manual_snapshot_is_optional(self):
        verify = workflow("db-verify.yml")
        migrate = workflow("db-migrate.yml")
        self.assertNotIn("supabase/migrations/**.sql", verify["on"].get("push", {}).get("paths", []))
        option = verify["on"]["workflow_dispatch"]["inputs"]["check_snapshots"]
        self.assertEqual(option["type"], "boolean")
        self.assertEqual(option["default"], "false")
        for name, config in (("verify", verify), ("apply-migration", migrate)):
            steps = config["jobs"][name]["steps"]
            gates = [(i, step) for i, step in enumerate(steps)
                     if "scripts/verify_db_deploy.sql" in step.get("run", "")]
            self.assertEqual(len(gates), 1)
            position, gate = gates[0]
            self.assertNotEqual(gate.get("continue-on-error"), "true")
            self.assertNotIn("if", gate)  # schema verification is unconditional
            self.assertTrue(any("actions/checkout@" in s.get("uses", "") for s in steps[:position]))
            if name == "apply-migration":
                self.assertTrue(any('done < /tmp/migrations.txt' in s.get("run", "") for s in steps[:position]))
                self.assertIn("check_snapshots=false", gate["run"])
            # Execute the actual workflow shell with a failing psql, not a text-only assertion.
            with tempfile.TemporaryDirectory(prefix="salem-gate-shell-", dir="/tmp") as tmp:
                psql = Path(tmp) / "psql"
                psql.write_text('#!/bin/sh\n[ "$PGCONNECT_TIMEOUT" = "10" ] || exit 38\nexit 37\n')
                psql.chmod(0o700)
                env = {"PATH": tmp + os.pathsep + os.defpath,
                       "SUPABASE_DB_URL": "synthetic-unused", "CHECK_SNAPSHOTS": "false"}
                if "PGCONNECT_TIMEOUT" in gate.get("env", {}):
                    env["PGCONNECT_TIMEOUT"] = gate["env"]["PGCONNECT_TIMEOUT"]
                result = subprocess.run(["bash", "-c", gate["run"]], env=env,
                                        cwd=ROOT, capture_output=True, text=True)
                self.assertEqual(result.returncode, 37, result.stderr)

    def test_pr_ci_has_server_tools_and_no_production_secrets(self):
        config = workflow("db-gate-tests.yml")
        self.assertIn("pull_request", config["on"])
        for event in ("pull_request", "push"):
            with self.subTest(event=event):
                self.assertIn("supabase/migrations/**.sql", config["on"][event]["paths"])
        serialized = json.dumps(config)
        self.assertNotIn("secrets.", serialized)
        self.assertIn("PG_BIN", serialized)
        self.assertIn("postgresql", serialized)
        self.assertIn("test_db_deploy_verification.py", serialized)


if __name__ == "__main__":
    unittest.main()
