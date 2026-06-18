#!/usr/bin/env python3
"""Build a draft data/ufsar/system-map.json crosswalking each wiki/systems/*.md to its
NUREG-1122 catalog system number (by name match) and enrichment mode. UFSAR chapter/section
are left null except where pre-seeded; fill them per system during rollout. The committed
file is human-reviewed -- this script only drafts it.

Usage: python3 scripts/build_system_map.py
"""
import json
import re
from pathlib import Path

CATALOG = Path("data/ka-catalog/pwr-ka-catalog.json")
SYS_DIR = Path("wiki/systems")
OUT = Path("data/ufsar/system-map.json")

STOP = {"system", "water", "the", "and", "of", "control", "unit", "salem"}


def _tokens(s):
    return {w for w in re.findall(r"[a-z0-9]+", s.lower()) if w not in STOP and len(w) > 2}


def catalog_system_names(catalog):
    names = {}
    for v in catalog.values():
        if v.get("category") == "system" and v.get("system_number"):
            names.setdefault(v["system_number"], v["system_name"].upper())
    return names


def match_catalog_system(title, aliases, catalog_names):
    """Return the catalog system_number whose name shares the most distinctive tokens
    with the article title/aliases, or None if there is no token overlap."""
    want = _tokens(title)
    for a in aliases:
        want |= _tokens(a)
    best, best_score = None, 0
    for num, name in catalog_names.items():
        score = len(want & _tokens(name))
        if score > best_score:
            best, best_score = num, score
    return best if best_score > 0 else None


def front_matter(text):
    title, aliases = "", []
    m = re.search(r"^title:\s*(.+)$", text, re.M)
    if m:
        title = m.group(1).strip().strip('"')
    block = re.search(r"^aliases:\s*\n((?:\s*-\s*(?!--)[^\n]+\n)+)", text, re.M)
    if block:
        aliases = re.findall(r"-\s*(.+)", block.group(1))
    return title, [a.strip() for a in aliases]


def main():
    catalog = json.loads(CATALOG.read_text(encoding="utf-8"))
    names = catalog_system_names(catalog)
    rows = []
    for f in sorted(SYS_DIR.glob("*.md")):
        title, aliases = front_matter(f.read_text(encoding="utf-8"))
        num = match_catalog_system(title or f.stem, aliases, names)
        rows.append({
            "article": f.name,
            "slug": f.stem,
            "catalog_system": num,
            "mode": "ka_index" if num else "ufsar_structure",
            "ufsar_chapter": None,
            "ufsar_section": None,
            "salem_na": False,
        })
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(rows, indent=2) + "\n", encoding="utf-8")
    matched = sum(1 for r in rows if r["catalog_system"])
    print(f"wrote {OUT}: {len(rows)} articles, {matched} matched to a catalog system")
    return 0


if __name__ == "__main__":
    import sys
    sys.exit(main())
