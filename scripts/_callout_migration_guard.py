#!/usr/bin/env python3
"""THROWAWAY migration guard for issue #70 (callout reorganization).

Verifies that an edited wiki article changed ONLY the position/order of callout
blocks, never their content. Compares the multiset of callout <div> blocks between
the git HEAD version and the working-tree version of each file.

Delete this script when issue #70 is closed (see plan Task 10).

Usage:
    python3 scripts/_callout_migration_guard.py wiki/systems/foo.md [more.md ...]
Exit 0 = all files OK (pure reordering). Exit 1 = a block was added/removed/mutated.
"""
import subprocess
import sys
from collections import Counter


def extract_callout_blocks(text: str) -> list[str]:
    """Return the full text of each top-level <div class="callout ..."> block.

    Depth-counts <div / </div> so the nested callout-label div does not end a block.
    """
    lines = text.splitlines()
    blocks, cur, depth = [], [], 0
    for line in lines:
        opens = line.count("<div")
        closes = line.count("</div>")
        if depth == 0 and 'class="callout callout-' in line:
            cur = [line]
            depth = opens - closes
            if depth <= 0:  # pathological single-line block
                blocks.append("\n".join(cur))
                cur, depth = [], 0
            continue
        if depth > 0:
            cur.append(line)
            depth += opens - closes
            if depth <= 0:
                blocks.append("\n".join(cur))
                cur, depth = [], 0
    return blocks


def head_version(path: str) -> str:
    return subprocess.run(
        ["git", "show", f"HEAD:{path}"], capture_output=True, text=True, check=True
    ).stdout


def check(path: str) -> bool:
    before = Counter(extract_callout_blocks(head_version(path)))
    with open(path, encoding="utf-8") as fh:
        after = Counter(extract_callout_blocks(fh.read()))
    if before == after:
        print(f"OK   {path}  ({sum(before.values())} callout blocks, unchanged)")
        return True
    removed = before - after
    added = after - before
    print(f"FAIL {path}")
    for blk, n in removed.items():
        print(f"  -- REMOVED/MUTATED ({n}x): {blk.splitlines()[1] if len(blk.splitlines())>1 else blk[:80]}")
    for blk, n in added.items():
        print(f"  ++ ADDED/MUTATED   ({n}x): {blk.splitlines()[1] if len(blk.splitlines())>1 else blk[:80]}")
    return False


def main() -> int:
    ok = True
    for path in sys.argv[1:]:
        ok = check(path) and ok
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
