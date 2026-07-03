#!/usr/bin/env python3
"""Generate per-system K/A topic checklists (data/ufsar/ka-index/<slug>.md) for every
wiki system article that has a catalog system number in data/ufsar/system-map.json.
Uses only category=system, status=active K/As. The enrichment subagent reads these.

Usage: python3 scripts/build_ka_index.py
"""
import json
import re
import sys
from collections import defaultdict
from pathlib import Path

CATALOG = Path("data/ka-catalog/pwr-ka-catalog.json")
SYS_MAP = Path("data/ufsar/system-map.json")
OUT_DIR = Path("data/ufsar/ka-index")

GROUP_TITLES = {
    "K1": "Interconnections (K1)", "K2": "Power Supplies (K2)",
    "K3": "Effect of Loss on Other Systems (K3)", "K4": "Design Features & Interlocks (K4)",
    "K5": "Operating Concepts (K5)", "K6": "Effect of Conditions/Malfunctions on System (K6)",
    "A1": "Predict/Monitor Parameters (A1)", "A2": "Predict Impacts & Act (A2)",
    "A3": "Automatic Features & Setpoints (A3)", "A4": "Control-Room Operation (A4)",
}


def group_of(ka_no):
    """'K2.02' -> 'K2', 'A3.01' -> 'A3'; None (with a stderr warning) if malformed."""
    m = re.match(r"^([A-Z]+\d)", ka_no)
    if m is None:
        print(f"WARNING: skipping malformed ka_no {ka_no!r}", file=sys.stderr)
        return None
    return m.group(1)


def system_topic(statement):
    """The specific topic = text after the last CFR ')' + ':' in the statement."""
    return re.split(r"\):\s*", statement)[-1].strip()


def fmt_imp(v):
    try:
        f = float(v)
    except (TypeError, ValueError):
        return str(v)
    return str(int(f)) if f == int(f) else f"{f:g}"


def main():
    catalog = json.loads(CATALOG.read_text(encoding="utf-8"))
    rows = json.loads(SYS_MAP.read_text(encoding="utf-8"))
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    written = 0
    for row in rows:
        num = row["catalog_system"]
        if not num:
            continue
        entries = [v for v in catalog.values()
                   if v.get("system_number") == num and v.get("category") == "system"
                   and v.get("status") == "active"]
        by_group = defaultdict(list)
        for v in entries:
            g = group_of(v["ka_no"])
            if g is not None:
                by_group[g].append(v)
        lines = [f"# K/A index — {row['slug']} (catalog system {num})\n",
                 f"UFSAR: {row.get('ufsar_chapter')} {row.get('ufsar_section') or ''}".rstrip(),
                 f"\n{len(entries)} active system K/As. Cover each topic from the UFSAR "
                 "(then TS / system descriptions / exam bank); mark gaps, never guess.\n"]
        for g in sorted(by_group, key=lambda x: (x[0], int(x[1:]))):
            lines.append(f"\n## {GROUP_TITLES.get(g, g)}\n")
            for v in sorted(by_group[g], key=lambda e: e["ka_no"]):
                imp = f"RO {fmt_imp(v['ro_imp'])} / SRO {fmt_imp(v['sro_imp'])}"
                lines.append(f"- **{num} {v['ka_no']}** ({imp}) — {system_topic(v['statement'])}")
        (OUT_DIR / f"{row['slug']}.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
        written += 1
    print(f"wrote {written} K/A index files to {OUT_DIR}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
