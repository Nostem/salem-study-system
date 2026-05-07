#!/usr/bin/env python3
"""Promote Salem contact form submissions to GitHub issues and archive them.

The script is intentionally deterministic/idempotent so it can run safely from
Hermes cron. It never includes submitter reply emails in GitHub issue bodies.
"""

from __future__ import annotations

import argparse
import json
import os
import re
import subprocess
import sys
import tempfile
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, Iterable, List, Optional

DEFAULT_REPO = "Nostem/salem-study-system"
DEFAULT_LABEL = "contact-feedback"
CATEGORY_LABEL_PREFIX = "contact"


def contact_marker(message_id: str) -> str:
    return f"contact_message_id:{message_id}"


def _clean_inline(value: Any, default: str = "not provided") -> str:
    if value is None:
        return default
    text = str(value).strip()
    return text if text else default


def _clip(text: str, limit: int) -> str:
    text = " ".join(str(text or "").split())
    if len(text) <= limit:
        return text
    return text[: limit - 1].rstrip() + "…"


def build_issue_title(row: Dict[str, Any]) -> str:
    category = _clean_inline(row.get("category"), "feedback")
    message = _clip(row.get("message") or "Contact form submission", 90)
    title = f"[Contact: {category}] {message}"
    return _clip(title, 120)


def build_issue_body(row: Dict[str, Any]) -> str:
    message_id = str(row["id"])
    category = _clean_inline(row.get("category"), "feedback")
    submitted = _clean_inline(row.get("created_at"), "unknown")
    page_url = _clean_inline(row.get("page_url"))
    name = _clean_inline(row.get("name"))
    email_present = "yes" if _clean_inline(row.get("email"), "") else "no"
    message = str(row.get("message") or "").strip()

    return "\n".join(
        [
            "## Contact Form Submission",
            "",
            f"**Category:** {category}",
            f"**Submitted:** {submitted}",
            f"**Page:** {page_url}",
            "",
            "## Message",
            "",
            message,
            "",
            "## Submitter",
            "",
            f"Name: {name}",
            f"Reply email present: {email_present}",
            "",
            "Reply email is intentionally not copied into this GitHub issue. Check Supabase if a direct reply is needed.",
            "",
            "---",
            "",
            "Source: Salem Study contact form",
            contact_marker(message_id),
            "",
        ]
    )


def build_labels(row: Dict[str, Any]) -> List[str]:
    category = slug_label(_clean_inline(row.get("category"), "feedback"))
    return [DEFAULT_LABEL, f"{CATEGORY_LABEL_PREFIX}:{category}"]


def slug_label(value: str) -> str:
    value = value.lower().strip()
    value = re.sub(r"[^a-z0-9_-]+", "-", value)
    return value.strip("-") or "feedback"


class CommandError(RuntimeError):
    pass


class ContactGitHubClient:
    def __init__(self, repo: str, psql_bin: str = "psql", db_url: Optional[str] = None):
        self.repo = repo
        self.psql_bin = psql_bin
        self.db_url = db_url or os.environ.get("SUPABASE_DB_URL")
        if not self.db_url:
            raise CommandError("SUPABASE_DB_URL is required")

    def _run(self, command: List[str], *, input_text: Optional[str] = None) -> str:
        result = subprocess.run(
            command,
            input=input_text,
            text=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            check=False,
        )
        if result.returncode != 0:
            stderr = result.stderr.strip().replace(self.db_url or "", "[REDACTED]")
            raise CommandError(f"Command failed: {command[0]} exited {result.returncode}: {stderr}")
        return result.stdout

    def _psql_json(self, sql: str) -> Any:
        wrapper = f"select coalesce(jsonb_agg(row_to_json(q)), '[]'::jsonb) from ({sql}) q;"
        output = self._run(
            [
                self.psql_bin,
                self.db_url,
                "-v",
                "ON_ERROR_STOP=1",
                "-qAt",
                "-c",
                wrapper,
            ]
        )
        text = output.strip() or "[]"
        return json.loads(text)

    def _psql_exec_file(self, sql: str) -> None:
        with tempfile.NamedTemporaryFile("w", suffix=".sql", delete=False) as fh:
            fh.write(sql)
            path = fh.name
        try:
            self._run([self.psql_bin, self.db_url, "-v", "ON_ERROR_STOP=1", "-q", "-f", path])
        finally:
            Path(path).unlink(missing_ok=True)

    def fetch_new_messages(self, limit: int = 25) -> List[Dict[str, Any]]:
        sql = f"""
            select id::text, user_id::text, name, email, category, page_url, message,
                   user_agent, status, metadata, created_at::text
            from public.contact_messages
            where status = 'new'
            order by created_at asc
            limit {int(limit)}
        """
        return list(self._psql_json(sql))

    def find_issue_by_marker(self, marker: str) -> Optional[Dict[str, Any]]:
        query = f"repo:{self.repo} {marker} in:body"
        output = self._run(
            [
                "gh",
                "issue",
                "list",
                "--repo",
                self.repo,
                "--state",
                "all",
                "--search",
                query,
                "--json",
                "number,url,title",
                "--limit",
                "1",
            ]
        )
        items = json.loads(output or "[]")
        return items[0] if items else None

    def ensure_labels(self, labels: List[str]) -> None:
        colors = {
            DEFAULT_LABEL: "0e8a16",
        }
        for label in labels:
            color = colors.get(label, "5319e7")
            description = "Imported from Salem Study contact form" if label == DEFAULT_LABEL else "Contact form category"
            self._run(
                [
                    "gh",
                    "label",
                    "create",
                    label,
                    "--repo",
                    self.repo,
                    "--color",
                    color,
                    "--description",
                    description,
                    "--force",
                ]
            )

    def create_issue(self, row: Dict[str, Any]) -> Dict[str, Any]:
        title = build_issue_title(row)
        body = build_issue_body(row)
        row_labels = build_labels(row)
        self.ensure_labels(row_labels)
        labels = ",".join(row_labels)
        output = self._run(
            [
                "gh",
                "issue",
                "create",
                "--repo",
                self.repo,
                "--title",
                title,
                "--body",
                body,
                "--label",
                labels,
            ]
        ).strip()
        match = re.search(r"/issues/(\d+)", output)
        return {"number": int(match.group(1)) if match else None, "url": output, "title": title}

    def archive_message(self, message_id: str, issue: Dict[str, Any]) -> None:
        issue_payload = {
            "number": issue.get("number"),
            "url": issue.get("url"),
            "archived_at": datetime.now(timezone.utc).isoformat(),
        }
        # Use dollar-quoted literals for UUID and JSON generated locally.
        sql = f"""
            update public.contact_messages
               set status = 'archived',
                   reviewed_at = now(),
                   metadata = coalesce(metadata, '{{}}'::jsonb)
                              || jsonb_build_object('github_issue', $issue${json.dumps(issue_payload)}$issue$::jsonb)
             where id = $id${message_id}$id$::uuid
               and status = 'new';
        """
        self._psql_exec_file(sql)


def process_contact_messages(client: Any, repo: str, apply: bool, limit: int = 25) -> Dict[str, Any]:
    rows = client.fetch_new_messages(limit=limit)
    report: Dict[str, Any] = {
        "repo": repo,
        "apply": apply,
        "new_messages": len(rows),
        "dry_run_messages": 0,
        "created_issues": 0,
        "existing_issues": 0,
        "archived_messages": 0,
        "failures": [],
        "issues": [],
    }

    for row in rows:
        message_id = str(row["id"])
        marker = contact_marker(message_id)
        try:
            existing = client.find_issue_by_marker(marker)
            if existing:
                report["existing_issues"] += 1
                issue = existing
            elif apply:
                issue = client.create_issue(row)
                report["created_issues"] += 1
            else:
                report["dry_run_messages"] += 1
                report["issues"].append({"message_id": message_id, "title": build_issue_title(row), "dry_run": True})
                continue

            if apply:
                client.archive_message(message_id, issue)
                report["archived_messages"] += 1
            report["issues"].append({"message_id": message_id, "issue": issue})
        except Exception as exc:  # keep processing other submissions
            report["failures"].append({"message_id": message_id, "error": str(exc)})

    return report


def default_psql_bin() -> str:
    env_value = os.environ.get("PSQL_BIN")
    if env_value:
        return env_value
    homebrew_psql = Path("/opt/homebrew/opt/libpq/bin/psql")
    if homebrew_psql.exists():
        return str(homebrew_psql)
    return "psql"


def parse_args(argv: Optional[Iterable[str]] = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--repo", default=DEFAULT_REPO)
    parser.add_argument("--limit", type=int, default=25)
    parser.add_argument("--apply", action="store_true", help="Create issues and archive rows. Default is dry-run.")
    parser.add_argument("--psql-bin", default=default_psql_bin())
    parser.add_argument("--out", help="Optional JSON report path")
    return parser.parse_args(argv)


def main(argv: Optional[Iterable[str]] = None) -> int:
    args = parse_args(argv)
    client = ContactGitHubClient(repo=args.repo, psql_bin=args.psql_bin)
    report = process_contact_messages(client, repo=args.repo, apply=args.apply, limit=args.limit)
    rendered = json.dumps(report, indent=2, sort_keys=True)
    if args.out:
        Path(args.out).write_text(rendered + "\n", encoding="utf-8")
    print(rendered)
    return 1 if report["failures"] else 0


if __name__ == "__main__":
    raise SystemExit(main())
