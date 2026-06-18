#!/usr/bin/env python3
"""THROWAWAY guard for the K/A apply step: assert that --apply changed ONLY the K/A tag
span (and nothing else) in each modified article, vs git HEAD. Delete after the audit.

Usage: python3 scripts/_ka_apply_guard.py <file> [<file> ...]
Exit 0 = every file changed only inside its first border-radius:3px span. Exit 1 otherwise.
"""
import re
import subprocess
import sys

SPAN = re.compile(r'border-radius:3px;">[^<]+</span>')


def blanked(text):
    return SPAN.sub('border-radius:3px;">__KA__</span>', text, count=1)


def head(path):
    return subprocess.run(["git", "show", f"HEAD:{path}"], capture_output=True, text=True).stdout


def main():
    ok = True
    for p in sys.argv[1:]:
        before = blanked(head(p))
        after = blanked(open(p, encoding="utf-8").read())
        if before == after:
            print(f"OK   {p}")
        else:
            ok = False
            print(f"FAIL {p}: change outside the K/A tag span")
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
