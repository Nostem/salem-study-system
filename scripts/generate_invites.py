#!/usr/bin/env python3
"""Generate high-entropy Salem beta invite codes and SQL seed rows.

This script prints invite codes for the admin to distribute and writes SQL that stores
only SHA-256 hashes in public.invites.code_hash. Do not commit generated invite SQL if
it contains live, undistributed codes.
"""

from __future__ import annotations

import argparse
import hashlib
import secrets
import string
from pathlib import Path

ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"


def generate_code(prefix: str = "SALEM-BETA") -> str:
    parts = []
    for _ in range(2):
        parts.append("".join(secrets.choice(ALPHABET) for _ in range(4)))
    return f"{prefix}-{'-'.join(parts)}"


def code_hash(code: str) -> str:
    normalized = "".join(code.strip().upper().split())
    return hashlib.sha256(normalized.encode("utf-8")).hexdigest()


def sql_quote(value: str) -> str:
    return "'" + value.replace("'", "''") + "'"


def build_invite_sql(codes: list[str], label_prefix: str | None, expires_at: str | None) -> str:
    lines = [
        "begin;",
        "",
        "insert into public.invites (code_hash, label, max_uses, expires_at)",
        "values",
    ]
    rows = []
    for index, code in enumerate(codes, start=1):
        label = f"{label_prefix or 'beta'}-{index:03d}"
        expires_sql = sql_quote(expires_at) if expires_at else "null"
        rows.append(f"  ({sql_quote(code_hash(code))}, {sql_quote(label)}, 1, {expires_sql})")
    lines.append(",\n".join(rows))
    lines.append("on conflict (code_hash) do nothing;")
    lines.append("")
    lines.append("commit;")
    return "\n".join(lines) + "\n"


def main() -> int:
    parser = argparse.ArgumentParser(description="Generate Salem beta invite codes.")
    parser.add_argument("--count", type=int, default=5, help="number of invite codes to generate")
    parser.add_argument("--prefix", default="SALEM-BETA", help="human-readable code prefix")
    parser.add_argument("--label-prefix", default="beta", help="label prefix stored in the invite row")
    parser.add_argument("--expires-at", help="optional timestamptz literal, e.g. 2026-06-01T00:00:00Z")
    parser.add_argument("--out", type=Path, help="write hashed invite SQL to this path")
    args = parser.parse_args()

    if args.count <= 0:
        parser.error("--count must be positive")

    codes = [generate_code(args.prefix) for _ in range(args.count)]

    print("Invite codes to distribute:")
    for code in codes:
        print(code)

    sql = build_invite_sql(codes, args.label_prefix, args.expires_at)
    if args.out:
        args.out.parent.mkdir(parents=True, exist_ok=True)
        args.out.write_text(sql)
        print(f"\nWrote hashed invite SQL to {args.out}")
    else:
        print("\nHashed invite SQL:")
        print(sql)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
