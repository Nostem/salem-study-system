# UFSAR System Enrichment — Plan 1: Pipeline + Pilot

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the reusable UFSAR-enrichment pipeline (chapter split, system crosswalk, per-system K/A index, ingestion guide) and prove it end-to-end on three pilot systems (CCW, Service Water, Chill Water).

**Architecture:** Three small deterministic Python scripts produce committed data artifacts under `data/ufsar/` (chapter index, system map, K/A indexes). A committed ingestion guide (`docs/ufsar-system-ingestion-guide.md`) is the spec a subagent follows to enrich one system article from its K/A index + the relevant UFSAR chapter PDF. The pilot applies the guide to two K/A-indexed systems (CCW 008, SW 076) and one system with no catalog entry (Chill Water → UFSAR-structure mode).

**Tech Stack:** Python 3 (system `python3` for catalog/JSON; `.venv/bin/python` + `pypdf` for PDF splitting, per CLAUDE.md), `unittest` (run via `python3 -m unittest discover -s tests -p 'test_*.py'`), Astro site build for the final gate.

**Spec:** `docs/superpowers/specs/2026-06-18-ufsar-system-enrichment-design.md`

**Conventions (from CLAUDE.md / project memory):**
- Never fabricate a value; cite every value to a UFSAR §/table, TS section, or the exam callout it came from. No commas in numeric values (`2485`, not `2,485`).
- `raw/` is gitignored (source PDFs); `data/ufsar/` chapter-index/system-map/ka-index ARE tracked.
- Stage exact files only — never `git add .`. Branch is `ufsar-system-enrichment` (already created).
- Before any commit touching wiki: `grep -rlE "</content>|</invoke>" wiki/` must be empty; `python3 scripts/check-wikilinks.py` clean.

---

### Task 1: UFSAR chapter split

Splits the 2759-page `raw/ufsar/salem-ufsar.pdf` into per-chapter PDFs using its 21 top-level bookmarks, and records page ranges in a tracked index. Page numbers are 0-indexed (pypdf).

**Files:**
- Create: `scripts/split_ufsar.py`
- Create: `tests/test_ufsar_pipeline.py`
- Create (generated, gitignored): `raw/ufsar/ch-NN-*.pdf`
- Create (tracked): `data/ufsar/chapter-index.json`

- [ ] **Step 1: Write the failing test for the page-range helper**

In `tests/test_ufsar_pipeline.py`:
```python
import unittest
import importlib.util
from pathlib import Path

def _load(name, path):
    spec = importlib.util.spec_from_file_location(name, Path(path))
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod

split = _load("split_ufsar", "scripts/split_ufsar.py")


class ChapterRangesTest(unittest.TestCase):
    def test_ranges_use_next_start_as_end(self):
        bm = [("Chapter 1", 21), ("Chapter 2", 46), ("Chapter 3", 227)]
        self.assertEqual(
            split.chapter_ranges(bm, total_pages=300),
            [("Chapter 1", 21, 46), ("Chapter 2", 46, 227), ("Chapter 3", 227, 300)],
        )

    def test_single_bookmark_runs_to_end(self):
        self.assertEqual(split.chapter_ranges([("Chapter 9", 1585)], 1700),
                         [("Chapter 9", 1585, 1700)])
```

- [ ] **Step 2: Run test to verify it fails**

Run: `python3 -m unittest discover -s tests -p 'test_ufsar_pipeline.py' -v`
Expected: FAIL — `ModuleNotFoundError` / `AttributeError: module 'split_ufsar' has no attribute 'chapter_ranges'`.

- [ ] **Step 3: Implement `scripts/split_ufsar.py`**

```python
#!/usr/bin/env python3
"""Split raw/ufsar/salem-ufsar.pdf into per-chapter PDFs using its top-level bookmarks.

Writes raw/ufsar/ch-NN-<slug>.pdf (raw/ is gitignored) and the tracked index
data/ufsar/chapter-index.json. Page numbers are 0-indexed. Re-run only if the source
UFSAR PDF is replaced.

Run with the venv python (pypdf lives there): .venv/bin/python scripts/split_ufsar.py
"""
import json
import re
import sys
from pathlib import Path

SRC = Path("raw/ufsar/salem-ufsar.pdf")
OUT_DIR = Path("raw/ufsar")
INDEX = Path("data/ufsar/chapter-index.json")


def chapter_ranges(bookmarks, total_pages):
    """bookmarks: [(title, start_page), ...] in document order. Return
    [(title, start, end_exclusive)] where end is the next bookmark's start."""
    out = []
    for i, (title, start) in enumerate(bookmarks):
        end = bookmarks[i + 1][1] if i + 1 < len(bookmarks) else total_pages
        out.append((title, start, end))
    return out


def slug(title):
    return re.sub(r"[^a-z0-9]+", "-", title.lower()).strip("-")


def main():
    import pypdf
    reader = pypdf.PdfReader(SRC)
    total = len(reader.pages)
    bookmarks = []
    for item in reader.outline:
        if isinstance(item, list):
            continue
        bookmarks.append((item.title.strip(), reader.get_destination_page_number(item)))
    bookmarks.sort(key=lambda b: b[1])
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    INDEX.parent.mkdir(parents=True, exist_ok=True)
    index = []
    for title, start, end in chapter_ranges(bookmarks, total):
        name = f"ch-{slug(title)}.pdf"
        writer = pypdf.PdfWriter()
        for p in range(start, end):
            writer.add_page(reader.pages[p])
        with (OUT_DIR / name).open("wb") as fh:
            writer.write(fh)
        index.append({"title": title, "start_page": start, "end_page": end, "pdf": name})
    INDEX.write_text(json.dumps(index, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {len(index)} chapter PDFs + {INDEX}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
```

- [ ] **Step 4: Run the unit test to verify it passes**

Run: `python3 -m unittest discover -s tests -p 'test_ufsar_pipeline.py' -v`
Expected: PASS (2 tests). (The helper is pure; importing the module does not require pypdf.)

- [ ] **Step 5: Run the splitter and sanity-check the index**

Run: `.venv/bin/python scripts/split_ufsar.py`
Expected: `wrote 21 chapter PDFs + data/ufsar/chapter-index.json`
Run: `python3 -c "import json;d=json.load(open('data/ufsar/chapter-index.json'));print([x['title'] for x in d if x['title']=='Chapter 9'], [x for x in d if x['title']=='Chapter 9'])"`
Expected: shows `Chapter 9` with `start_page 1585`, `end_page 1828`.

- [ ] **Step 6: Commit**

```bash
git add scripts/split_ufsar.py tests/test_ufsar_pipeline.py data/ufsar/chapter-index.json
git commit -m "feat(ufsar): split UFSAR into per-chapter PDFs + tracked chapter index"
```
(The `raw/ufsar/ch-*.pdf` outputs are gitignored — verify with `git status --short raw/` showing nothing.)

---

### Task 2: System ↔ catalog ↔ UFSAR crosswalk

Emits a draft `system-map.json` linking each `wiki/systems/*.md` to its catalog system number (by name match) and enrichment mode, then the three pilot rows get their UFSAR chapter/section filled by hand. Non-pilot chapter/section cells stay `null` (filled during each rollout plan).

**Files:**
- Create: `scripts/build_system_map.py`
- Modify: `tests/test_ufsar_pipeline.py`
- Create (tracked): `data/ufsar/system-map.json`

- [ ] **Step 1: Write the failing test for catalog matching**

Append to `tests/test_ufsar_pipeline.py`:
```python
sysmap = _load("build_system_map", "scripts/build_system_map.py")


class MatchCatalogSystemTest(unittest.TestCase):
    CATALOG_NAMES = {
        "008": "(SF8 CCW) COMPONENT COOLING WATER SYSTEM",
        "076": "(SF4S SW) SERVICE WATER SYSTEM",
        "002": "(SF2; SF4P RCS) REACTOR COOLANT SYSTEM",
    }

    def m(self, title, aliases):
        return sysmap.match_catalog_system(title, aliases, self.CATALOG_NAMES)

    def test_matches_ccw(self):
        self.assertEqual(self.m("CCW", ["component cooling water"]), "008")

    def test_matches_service_water(self):
        self.assertEqual(self.m("Service Water", ["SW", "service water system"]), "076")

    def test_no_catalog_system_for_chill_water(self):
        self.assertIsNone(self.m("Chill Water", ["chilled water"]))
```

- [ ] **Step 2: Run test to verify it fails**

Run: `python3 -m unittest discover -s tests -p 'test_ufsar_pipeline.py' -v`
Expected: FAIL — `module 'build_system_map' has no attribute 'match_catalog_system'`.

- [ ] **Step 3: Implement `scripts/build_system_map.py`**

```python
#!/usr/bin/env python3
"""Build a draft data/ufsar/system-map.json crosswalking each wiki/systems/*.md to its
NUREG-1122 catalog system number (by name match) and enrichment mode. UFSAR chapter/section
are left null except where pre-seeded; fill them per system during rollout. The committed
file is human-reviewed — this script only drafts it.

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
    block = re.search(r"^aliases:\s*\n((?:\s*-\s*.+\n)+)", text, re.M)
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
```

- [ ] **Step 4: Run the unit test to verify it passes**

Run: `python3 -m unittest discover -s tests -p 'test_ufsar_pipeline.py' -v`
Expected: PASS (5 tests total now).

- [ ] **Step 5: Generate the draft map, then hand-correct the three pilot rows**

Run: `python3 scripts/build_system_map.py`
Expected: `wrote data/ufsar/system-map.json: 54 articles, NN matched to a catalog system`.

Then in `data/ufsar/system-map.json`, set the three pilot rows exactly (verify the matcher gave CCW→008, Service Water→076, Chill Water→null; correct if not):
```json
  { "article": "component-cooling-water.md", "slug": "component-cooling-water",
    "catalog_system": "008", "mode": "ka_index",
    "ufsar_chapter": "Chapter 9", "ufsar_section": "9.2.2", "salem_na": false },
  { "article": "service-water.md", "slug": "service-water",
    "catalog_system": "076", "mode": "ka_index",
    "ufsar_chapter": "Chapter 9", "ufsar_section": "9.2.1", "salem_na": false },
  { "article": "chill-water.md", "slug": "chill-water",
    "catalog_system": null, "mode": "ufsar_structure",
    "ufsar_chapter": "Chapter 9", "ufsar_section": "9.2 (locate chilled-water subsection via the Ch 9 TOC)", "salem_na": false }
```
Spot-check any obviously wrong auto-matches (e.g. an electrical-bus article matched to an unrelated system) and set those `catalog_system` to the correct number or `null` with `mode: "ufsar_structure"`. Mark Salem-N/A catalog systems (none in the pilot; e.g. an ice-condenser article would get `salem_na: true`). Non-pilot `ufsar_chapter`/`ufsar_section` stay `null`.

- [ ] **Step 6: Commit**

```bash
git add scripts/build_system_map.py tests/test_ufsar_pipeline.py data/ufsar/system-map.json
git commit -m "feat(ufsar): system<->catalog<->UFSAR crosswalk (pilot rows resolved)"
```

---

### Task 3: Per-system K/A index generator

For a system with a catalog number, emits a grouped, importance-annotated K/A topic checklist the enrichment subagent works from. Uses only `category: system`, `status: active` K/As.

**Files:**
- Create: `scripts/build_ka_index.py`
- Modify: `tests/test_ufsar_pipeline.py`
- Create (tracked): `data/ufsar/ka-index/<slug>.md` (for every system with a catalog number)

- [ ] **Step 1: Write the failing test for topic extraction**

Append to `tests/test_ufsar_pipeline.py`:
```python
kaidx = _load("build_ka_index", "scripts/build_ka_index.py")


class SystemTopicTest(unittest.TestCase):
    def t(self, stmt):
        return kaidx.system_topic(stmt)

    def test_topic_after_last_cfr_colon(self):
        self.assertEqual(
            self.t("(008K2.02) Knowledge of electrical power supplies to the following "
                   "(CFR: 41.7): (SF8 CCW) COMPONENT COOLING WATER SYSTEM CCW pumps"),
            "(SF8 CCW) COMPONENT COOLING WATER SYSTEM CCW pumps",
        )

    def test_topic_sentence_form(self):
        self.assertEqual(
            self.t("(008A3.01) Ability to monitor automatic features of the (SF8 CCW) "
                   "COMPONENT COOLING WATER SYSTEM, including (CFR: 41.7 / 45.5): "
                   "Setpoints for normal operations, warnings, and trips that are applicable to the CCWS"),
            "Setpoints for normal operations, warnings, and trips that are applicable to the CCWS",
        )

    def test_group_of_ka_no(self):
        self.assertEqual(kaidx.group_of("K2.02"), "K2")
        self.assertEqual(kaidx.group_of("A3.01"), "A3")
```

- [ ] **Step 2: Run test to verify it fails**

Run: `python3 -m unittest discover -s tests -p 'test_ufsar_pipeline.py' -v`
Expected: FAIL — `module 'build_ka_index' has no attribute 'system_topic'`.

- [ ] **Step 3: Implement `scripts/build_ka_index.py`**

```python
#!/usr/bin/env python3
"""Generate per-system K/A topic checklists (data/ufsar/ka-index/<slug>.md) for every
wiki system article that has a catalog system number in data/ufsar/system-map.json.
Uses only category=system, status=active K/As. The enrichment subagent reads these.

Usage: python3 scripts/build_ka_index.py
"""
import json
import re
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
    """'K2.02' -> 'K2', 'A3.01' -> 'A3'."""
    return re.match(r"^([A-Z]+\d)", ka_no).group(1)


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
            by_group[group_of(v["ka_no"])].append(v)
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
    import sys
    sys.exit(main())
```

- [ ] **Step 4: Run the unit test to verify it passes**

Run: `python3 -m unittest discover -s tests -p 'test_ufsar_pipeline.py' -v`
Expected: PASS (8 tests total).

- [ ] **Step 5: Generate the indexes and eyeball the two pilot files**

Run: `python3 scripts/build_ka_index.py`
Expected: `wrote NN K/A index files to data/ufsar/ka-index`.
Run: `sed -n '1,20p' data/ufsar/ka-index/component-cooling-water.md`
Expected: grouped K/A topics with importances (e.g. `**008 K2.02** (RO 3.9 / SRO 3.9) — ...CCW pumps`).

- [ ] **Step 6: Commit**

```bash
git add scripts/build_ka_index.py tests/test_ufsar_pipeline.py data/ufsar/ka-index/
git commit -m "feat(ufsar): per-system K/A topic-index generator"
```

---

### Task 4: Ingestion guide (`docs/ufsar-system-ingestion-guide.md`)

The spec a subagent follows to enrich ONE system article. Committed in-repo (versioned + PR-reviewable) rather than as a global skill, since it governs the pilot it ships with; subagents are pointed at its absolute path. No code; this is the authored guide.

**Files:**
- Create: `docs/ufsar-system-ingestion-guide.md`

- [ ] **Step 1: Write the guide**

Author `docs/ufsar-system-ingestion-guide.md` containing exactly these sections (write full prose, not placeholders):

1. **Inputs.** The article `wiki/systems/<slug>.md`; its row in `data/ufsar/system-map.json` (mode, catalog system, UFSAR chapter/section); for `ka_index` mode, `data/ufsar/ka-index/<slug>.md`; the chapter PDF named in `data/ufsar/chapter-index.json` (read it with the Read tool's `pages:` for the section's page range, located via the chapter's own TOC on its first pages); Tech Spec articles under `wiki/tech-specs/`; the existing exam callouts already in the article.

2. **Sourcing priority & citation format.** UFSAR § first → Tech Specs (with amendment) → vendor/system descriptions → existing exam-bank callouts. Every value cites its source inline, e.g. `(UFSAR §9.2.2)`, `(UFSAR Table 9.2-1)`, `(TS 3/4.7.3, Amend 312)`, or `(see Exam — 2014 Q31)`. NEVER fabricate; no commas in numbers; if two sources disagree, STOP and flag to the human.

3. **`ka_index` mode — section structure.** Build/extend these subsections in this order, each covering its K/A-index group's topics: `## Function & Design Basis`, `## Key Components`, `## Power Supplies` (K2), `## Automatic Features & Setpoints` (A3), `## Design Features & Interlocks` (K4), `## Interconnections & Loads` (K1/K3), `## Effects of Loss / Malfunction` (K6), `## Control-Room Operation` (A4). Omit a subsection if it has neither K/A topics nor UFSAR content. Keep `## Tech Spec LCOs`, `## Related EOPs`, `## Exam History`, `## Connections` (existing tail).

4. **`ufsar_structure` mode.** No K/A index. Port the UFSAR section's own structure (function, design bases, components, operation, safety evaluation) into `## Function & Design Basis` + `## Key Components` + `## Operation` + tail. Same citation rules.

5. **Preserve existing content (issue #70 pattern).** Existing `callout-exam`/`callout-jpm`/`callout-scenario` blocks are MOVED verbatim under the matching new subsection (e.g. CCW's "Surge Tank & Vent Valve" callouts nest under `## Design Features & Interlocks`). Never reword or delete a callout. Preserve all existing `### sub-subsections`.

6. **Gaps.** A K/A topic answered by none of the sources is appended to `data/ufsar/gaps/<slug>.md` (one bullet: `K/A — topic — what was checked`), never invented.

7. **CSS classes.** Reuse the project's: `val-trip`/`val-alarm`/`val-normal` for setpoint values, `hi`/`hi-exam`/`hi-trap` for emphasis, `callout callout-exam`/`-jpm`/`-scenario` for the preserved callouts (see any existing system article).

8. **Per-system verification checklist** (the subagent runs before reporting done): every new value has an inline citation; `grep -rlE "</content>|</invoke>" wiki/systems/<slug>.md` empty; `python3 scripts/check-wikilinks.py` clean; new cross-links are bidirectional (target article links back); `cd site && npm run build` clean; the article still renders (no broken HTML).

- [ ] **Step 2: Verify the guide is self-contained**

Run: `grep -nE "TBD|TODO|\\.\\.\\.|placeholder" docs/ufsar-system-ingestion-guide.md`
Expected: no matches.

- [ ] **Step 3: Commit**

```bash
git add docs/ufsar-system-ingestion-guide.md
git commit -m "docs(ufsar): system-enrichment ingestion guide"
```

---

### Task 5: Pilot — enrich Component Cooling Water (008, `ka_index`)

Applies the guide to `wiki/systems/component-cooling-water.md` using `data/ufsar/ka-index/component-cooling-water.md` and the Chapter 9 PDF (§9.2.2). This is a content task verified by gates, not unit tests.

**Files:**
- Modify: `wiki/systems/component-cooling-water.md`
- Possibly create: `data/ufsar/gaps/component-cooling-water.md`
- Possibly modify: linked articles (for bidirectional backlinks only)

- [ ] **Step 1: Dispatch the enrichment subagent**

Dispatch a subagent with: "Read the ingestion guide at `/Users/fredm/projects/salem-study-system/docs/ufsar-system-ingestion-guide.md` and enrich `wiki/systems/component-cooling-water.md` (mode `ka_index`, catalog system 008, UFSAR §9.2.2). Work from the K/A index `data/ufsar/ka-index/component-cooling-water.md` and the Chapter 9 PDF (`raw/ufsar/ch-chapter-9.pdf`, page range from `data/ufsar/chapter-index.json`; locate §9.2.2 via the chapter TOC). Follow every rule in the guide; preserve all existing callouts by nesting them under the matching new subsection. Run the guide's verification checklist before reporting." Provide no other context — the guide is the spec.

- [ ] **Step 2: Verify citations and preserved callouts**

Run: `grep -c "callout-label" wiki/systems/component-cooling-water.md`
Expected: ≥ the pre-enrichment count (run `git show HEAD:wiki/systems/component-cooling-water.md | grep -c callout-label` to compare — callouts are preserved, not dropped).
Run: `grep -cE "UFSAR §|UFSAR Table|TS [0-9]" wiki/systems/component-cooling-water.md`
Expected: ≥ 5 new UFSAR/TS citations.

- [ ] **Step 3: Run the gates**

Run: `grep -rlE "</content>|</invoke>" wiki/systems/component-cooling-water.md` → empty.
Run: `python3 scripts/check-wikilinks.py` → "All wikilinks resolve."
Run: `cd site && npm run build` → completes with no error.

- [ ] **Step 4: Commit**

```bash
git add wiki/systems/component-cooling-water.md data/ufsar/gaps/component-cooling-water.md
git commit -m "feat(ufsar): enrich CCW from UFSAR 9.2.2 (K/A-indexed)"
```
(Stage any linked article that gained a backlink, individually.)

---

### Task 6: Pilot — enrich Service Water (076, `ka_index`)

Same as Task 5 for `wiki/systems/service-water.md` (catalog system 076, UFSAR §9.2.1).

- [ ] **Step 1: Dispatch the enrichment subagent**

Same dispatch as Task 5, Step 1, but for `service-water.md`, mode `ka_index`, catalog system 076, UFSAR §9.2.1, K/A index `data/ufsar/ka-index/service-water.md`.

- [ ] **Step 2: Verify citations and preserved callouts**

Run: `git show HEAD:wiki/systems/service-water.md | grep -c callout-label` then `grep -c callout-label wiki/systems/service-water.md` — second ≥ first.
Run: `grep -cE "UFSAR §|UFSAR Table|TS [0-9]" wiki/systems/service-water.md` — ≥ 5.

- [ ] **Step 3: Run the gates**

Run: `grep -rlE "</content>|</invoke>" wiki/systems/service-water.md` → empty.
Run: `python3 scripts/check-wikilinks.py` → clean.
Run: `cd site && npm run build` → clean.

- [ ] **Step 4: Commit**

```bash
git add wiki/systems/service-water.md data/ufsar/gaps/service-water.md
git commit -m "feat(ufsar): enrich Service Water from UFSAR 9.2.1 (K/A-indexed)"
```

---

### Task 7: Pilot — enrich Chill Water (no catalog, `ufsar_structure`)

Applies the guide's `ufsar_structure` mode to the 39-line stub `wiki/systems/chill-water.md`. No K/A index; structure follows the UFSAR's own chilled-water subsection.

- [ ] **Step 1: Dispatch the enrichment subagent**

Dispatch: "Read `/Users/fredm/projects/salem-study-system/docs/ufsar-system-ingestion-guide.md` and enrich `wiki/systems/chill-water.md` (mode `ufsar_structure`, NO catalog system). There is no K/A index — port the UFSAR chilled-water subsection (Chapter 9 PDF `raw/ufsar/ch-chapter-9.pdf`; locate the chilled-water subsection via the Ch 9 TOC) into the article per the guide's `ufsar_structure` rules. Preserve the existing JPM callouts by nesting them. Run the verification checklist." 

- [ ] **Step 2: Verify**

Run: `git show HEAD:wiki/systems/chill-water.md | grep -c callout-label` then `grep -c callout-label wiki/systems/chill-water.md` — second ≥ first (the 3 JPM callouts preserved).
Run: `grep -cE "UFSAR §|UFSAR Table" wiki/systems/chill-water.md` — ≥ 3 (the stub gains real UFSAR content).
Run: `wc -l wiki/systems/chill-water.md` — substantially more than 39 lines.

- [ ] **Step 3: Run the gates**

Run: `grep -rlE "</content>|</invoke>" wiki/systems/chill-water.md` → empty.
Run: `python3 scripts/check-wikilinks.py` → clean.
Run: `cd site && npm run build` → clean.

- [ ] **Step 4: Commit**

```bash
git add wiki/systems/chill-water.md data/ufsar/gaps/chill-water.md
git commit -m "feat(ufsar): enrich Chill Water from UFSAR (structure mode, no K/A index)"
```

---

### Task 8: Finalize pilot — docs, index, full verification

- [ ] **Step 1: Update the homepage index and README**

In `wiki/_index.md`: if the three pilot systems' descriptions changed materially, no link changes are needed (articles already linked) — confirm they still appear. In `README.md`: add the new artifacts to the file-tree section: `data/ufsar/` (chapter-index, system-map, ka-index, gaps), `scripts/split_ufsar.py`, `scripts/build_system_map.py`, `scripts/build_ka_index.py`, `docs/ufsar-system-ingestion-guide.md`. Match the existing README tree style.

- [ ] **Step 2: Full verification sweep**

Run: `python3 -m unittest discover -s tests -p 'test_*.py'` → all OK.
Run: `grep -rlE "</content>|</invoke>" wiki/` → empty.
Run: `python3 scripts/check-wikilinks.py` → clean.
Run: `cd site && npm run build` → clean.
Run the quiz deploy gate (system articles aren't question articles, so expect no diff):
```bash
python3 scripts/exam_question_import.py audit  --out data/quiz-import/audit-all.json
python3 scripts/exam_question_import.py stage  --out data/quiz-import/supabase-staging-all.json
python3 scripts/build_static_quiz_bank.py     --bundle data/quiz-import/supabase-staging-all.json --out site/src/data/quiz-bank.json
python3 scripts/build_structured_quiz_bank.py --in site/src/data/quiz-bank.json --out site/src/data/quiz-bank-v2.json
python3 scripts/validate_structured_quiz_bank.py --in site/src/data/quiz-bank-v2.json --exam-images site/public/exam-images
git diff --exit-code -- site/src/data/quiz-bank.json site/src/data/quiz-bank-v2.json
```
Expected: validate prints "OK: no errors"; the `git diff --exit-code` is clean (no quiz change).

- [ ] **Step 3: Commit and open the PR**

```bash
git add README.md wiki/_index.md
git commit -m "docs(ufsar): record pipeline artifacts in README; finalize pilot"
git push -u origin ufsar-system-enrichment
gh pr create --title "UFSAR system enrichment — pipeline + pilot (CCW/SW/Chill Water)" \
  --body "Builds the UFSAR-enrichment pipeline (chapter split, system crosswalk, K/A index, ingestion guide) and applies it to three pilot systems. Closes the first slice of #71/#78. Per-chapter rollout follows in subsequent plans."
```

- [ ] **Step 4: Report pilot results for review**

Summarize for the human: lines added per pilot article, citation counts, any gaps recorded in `data/ufsar/gaps/`, and confirm callouts preserved. Pause for approval before scaling to the per-chapter rollout (separate plans).

---

## Notes for the rollout plans (not part of Plan 1)

Each subsequent plan handles one UFSAR chapter: fill the `ufsar_chapter`/`ufsar_section` cells for that chapter's systems in `system-map.json`, then dispatch one enrichment subagent per system **sequentially** (they nest callouts in shared files and may add backlinks to cross-linked articles). Reuse Tasks 5–8's structure. Defer new articles for catalog systems lacking one, and skip `salem_na` systems.
