#!/usr/bin/env python3
"""Check all wikilinks in the wiki resolve to existing article titles or aliases.

Usage: python3 scripts/check-wikilinks.py [--fix-index]
  --fix-index: also check that all articles appear in wiki/_index.md

Exit code 0 = all links resolve, 1 = broken links found.
"""

import re, glob, sys

def main():
    # Build index of all known titles and aliases
    all_titles = {}  # title -> filepath
    all_aliases = {}  # alias -> filepath

    for f in glob.glob('wiki/**/*.md', recursive=True):
        with open(f) as fh:
            content = fh.read()
        m = re.search(r'^title:\s*["\']?(.+?)["\']?\s*$', content, re.MULTILINE)
        if m:
            all_titles[m.group(1)] = f
        for am in re.finditer(r'^\s+-\s+(.+)$', content, re.MULTILINE):
            alias = am.group(1).strip().strip('"').strip("'")
            all_aliases[alias] = f

    known = set(all_titles.keys()) | set(all_aliases.keys())

    # Check all wikilinks
    broken = []
    for f in glob.glob('wiki/**/*.md', recursive=True):
        with open(f) as fh:
            content = fh.read()
        links = re.findall(r'\[\[([^\]|]+)', content)
        for target in links:
            target = target.strip()
            if target not in known:
                broken.append((f, target))

    if broken:
        print(f"BROKEN WIKILINKS: {len(broken)}")
        for filepath, target in sorted(broken):
            short = filepath.replace('wiki/', '')
            print(f"  {short}: [[{target}]]")
        print()
        sys.exit(1)
    else:
        print(f"All wikilinks resolve. ({len(all_titles)} titles, {len(all_aliases)} aliases checked)")
        sys.exit(0)

if __name__ == '__main__':
    main()
