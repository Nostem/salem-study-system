# NRC Reference Documents + K/A Catalog Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Self-host NUREG-1021 and NUREG-1122 on the homepage's Source Documents section, and bring the PWR K/A catalog into the repo (xlsx + generated JSON/CSV) as a reference the exam-ingestion agent validates K/A tags against.

**Architecture:** Download the two PDFs + the K/A xlsx into the repo (`site/public/reference-pdfs/` for web-served files, `data/ka-catalog/` for the authoritative catalog). A small `openpyxl`-based converter turns the xlsx into a keyed JSON and a flat CSV (committed). One new card in `index.astro` links the references. Both ingestion skills gain a K/A-validation step.

**Tech Stack:** Astro (homepage), Python 3 + `openpyxl` (converter), `csv`/`json` stdlib, `pdfplumber` (title verification), `unittest` (catalog guard test).

**Spec:** `docs/superpowers/specs/2026-06-17-nrc-reference-docs-design.md`

**Branch:** `nrc-reference-docs` (already created; carries the spec commit). Single PR.

**Verified facts (from planning):**
- `ML21256A276` → NUREG-1021 Rev 12, *Operator Licensing Examination Standards for Power Reactors* (460 pp, ~4.0 MB).
- `ML20260H083` → NUREG-1122 Rev 3, *Knowledge and Abilities Catalog … PWRs* (522 pp, ~5.7 MB).
- xlsx: one sheet `PWR KA Catalog`, 9421 data rows, header `SYS/E/APE | SYS/E/APE Name | K/A NO. | K/A (CFR) | RO_Imp | SRO_Imp`. Statement is `DELETED` for retired entries; importance 0 for those.
- `openpyxl` is NOT installed in system `python3` or `.venv`.
- `index.astro`: `const base = …BASE_URL…`; Source Documents UFSAR+TechSpecs grid closes at **line 445**; accent token `accent-amber` exists.

---

## File Structure

- Create: `site/public/reference-pdfs/nureg-1021-examination-standards.pdf`
- Create: `site/public/reference-pdfs/nureg-1122-pwr-ka-catalog.pdf`
- Create: `site/public/reference-pdfs/pwr-ka-catalog.xlsx` (web-download copy)
- Create: `data/ka-catalog/pwr-ka-catalog.xlsx` (authoritative source)
- Create: `data/ka-catalog/pwr-ka-catalog.json` (generated, committed)
- Create: `data/ka-catalog/pwr-ka-catalog.csv` (generated, committed)
- Create: `scripts/build_ka_catalog.py` (converter)
- Create: `tests/test_ka_catalog.py` (guards the committed catalog)
- Modify: `requirements-dev.txt` (add `openpyxl`)
- Modify: `site/src/pages/index.astro` (new card after line 445)
- Modify: `README.md` (project structure)
- Modify (global, outside repo): `/Users/fredm/.claude/skills/salem-exam-ingestion/SKILL.md`, `/Users/fredm/.claude/skills/salem-operating-test-ingestion/SKILL.md`

---

## Task 1: Download and place the source files

**Files:** the four binary files above.

- [ ] **Step 1: Download all three documents**

```bash
cd /Users/fredm/projects/salem-study-system
mkdir -p site/public/reference-pdfs data/ka-catalog
curl -sL --max-time 120 -o /tmp/ml21256A276.pdf "https://www.nrc.gov/docs/ML2125/ML21256A276.pdf"
curl -sL --max-time 120 -o /tmp/ml20260H083.pdf "https://www.nrc.gov/docs/ML2026/ML20260H083.pdf"
curl -sL --max-time 120 -o data/ka-catalog/pwr-ka-catalog.xlsx "https://www.nrc.gov/sites/default/files/doc_library/cdn/legacy/reading-rm/doc-collections/nuregs/staff/sr1122/r3/pwr-ka-catalog.xlsx"
```

- [ ] **Step 2: Title-verify each PDF, then place it under its confirmed name**

Run:
```bash
python3 - <<'EOF'
import pdfplumber
for tag, p in [("ML21256A276","/tmp/ml21256A276.pdf"),("ML20260H083","/tmp/ml20260H083.pdf")]:
    with pdfplumber.open(p) as pdf:
        print(tag, "->", " ".join((pdf.pages[0].extract_text() or "").split())[:80])
EOF
```
Expected: `ML21256A276 -> NUREG-1021, Rev. 12 Operator Licensing Examination Standards …` and `ML20260H083 -> NUREG-1122, Rev. 3 Knowledge and Abilities Catalog …`. If a title disagrees, STOP and name files by the actual title.

Then place:
```bash
cp /tmp/ml21256A276.pdf site/public/reference-pdfs/nureg-1021-examination-standards.pdf
cp /tmp/ml20260H083.pdf site/public/reference-pdfs/nureg-1122-pwr-ka-catalog.pdf
cp data/ka-catalog/pwr-ka-catalog.xlsx site/public/reference-pdfs/pwr-ka-catalog.xlsx
```

- [ ] **Step 3: Verify files are valid and the xlsx copy is byte-identical**

Run:
```bash
file site/public/reference-pdfs/*.pdf site/public/reference-pdfs/*.xlsx
cmp data/ka-catalog/pwr-ka-catalog.xlsx site/public/reference-pdfs/pwr-ka-catalog.xlsx && echo "xlsx copies identical"
ls -la site/public/reference-pdfs data/ka-catalog
```
Expected: both PDFs report `PDF document`, both xlsx report `Microsoft Excel 2007+`, `xlsx copies identical`, PDF sizes ~4.0 MB / ~5.7 MB, xlsx ~500 KB.

- [ ] **Step 4: Commit**

```bash
git add site/public/reference-pdfs data/ka-catalog/pwr-ka-catalog.xlsx
git commit -m "feat(#72): self-host NUREG-1021, NUREG-1122 PDFs + PWR K/A catalog xlsx"
```

---

## Task 2: Add the openpyxl dependency

**Files:** Modify `requirements-dev.txt`.

- [ ] **Step 1: Inspect the current file**

Run: `cat requirements-dev.txt`
Note the existing format (one package per line).

- [ ] **Step 2: Append openpyxl**

Add this line to `requirements-dev.txt` (keep the file's existing sort/style; append if unsorted):
```
openpyxl>=3.1
```

- [ ] **Step 3: Install it**

Run: `python3 -m pip install -r requirements-dev.txt`
Expected: openpyxl installs (or "already satisfied"). Verify: `python3 -c "import openpyxl; print(openpyxl.__version__)"` prints a version.

- [ ] **Step 4: Commit**

```bash
git add requirements-dev.txt
git commit -m "build(#72): add openpyxl for K/A catalog conversion"
```

---

## Task 3: Write the catalog converter

**Files:** Create `scripts/build_ka_catalog.py`.

- [ ] **Step 1: Write the converter**

Create `scripts/build_ka_catalog.py` with EXACTLY this content:

```python
#!/usr/bin/env python3
"""Convert the NUREG-1122 PWR K/A catalog xlsx into agent-friendly JSON + CSV.

Source: data/ka-catalog/pwr-ka-catalog.xlsx (NUREG-1122 Rev 3; single sheet, columns
SYS/E/APE | SYS/E/APE Name | K/A NO. | K/A (CFR) | RO_Imp | SRO_Imp).
Outputs next to the source:
  pwr-ka-catalog.json  -- object keyed by normalized K/A id (ka_full)
  pwr-ka-catalog.csv   -- flat, one row per K/A statement, grep-friendly

Run once after placing the xlsx; re-run only if NRC publishes a new revision.
Requires openpyxl (see requirements-dev.txt).

Usage: python3 scripts/build_ka_catalog.py
"""
import csv
import json
import re
import sys
from pathlib import Path

import openpyxl

SRC = Path("data/ka-catalog/pwr-ka-catalog.xlsx")
OUT_JSON = Path("data/ka-catalog/pwr-ka-catalog.json")
OUT_CSV = Path("data/ka-catalog/pwr-ka-catalog.csv")
EXPECTED_HEADER = ["SYS/E/APE", "SYS/E/APE Name", "K/A NO.", "K/A (CFR)", "RO_Imp", "SRO_Imp"]
FIELDS = ["ka_full", "category", "system_number", "system_name",
          "ka_no", "statement", "ro_imp", "sro_imp", "status"]


def categorize(ka_no: str) -> str:
    s = ka_no.strip().upper()
    if s.startswith(("EA", "EK")):
        return "epe"
    if s.startswith(("AA", "AK")):
        return "ape"
    if s.startswith("G2"):
        return "generic"
    if re.match(r"^[AK]\d", s):
        return "system"
    return "other"


def parse_number_name(name):
    """Split the 'SYS/E/APE Name' cell into (system_number, system_name).

    '003 (SF4P RCP) REACTOR COOLANT PUMP SYSTEM'      -> ('003', '(SF4P RCP) REACTOR ...')
    '000008 (APE 8) Pressurizer Vapor Space Accident' -> ('008', '(APE 8) Pressurizer ...')
    'G2.1 CONDUCT OF OPERATIONS'                       -> ('G2.1', 'CONDUCT OF OPERATIONS')
    """
    name = ("" if name is None else str(name)).strip()
    m = re.match(r"^(G2\.\d+|\d{3,6})\s+(.*)$", name)
    if not m:
        return "", name
    num, rest = m.group(1), m.group(2).strip()
    if num.startswith("G2."):
        return num, rest
    return f"{int(num):03d}", rest


def status_of(statement: str) -> str:
    s = statement.strip().upper()
    if s == "DELETED":
        return "deleted"
    if "MOVED TO" in s:
        return "moved"
    return "active"


def make_ka_full(system_number: str, ka_no: str) -> str:
    if system_number.startswith("G2."):
        return ka_no.strip()                       # e.g. "G2.1.1"
    if system_number:
        return f"{system_number} {ka_no.strip()}"  # e.g. "003 A1.01", "008 AA1.01", "007 EA1.02a"
    return ka_no.strip()


def main() -> int:
    if not SRC.exists():
        print(f"ERROR: {SRC} not found", file=sys.stderr)
        return 1
    ws = openpyxl.load_workbook(SRC, read_only=True, data_only=True).active
    it = ws.iter_rows(values_only=True)
    header = [("" if h is None else str(h).strip()) for h in next(it)]
    if header != EXPECTED_HEADER:
        print(f"ERROR: unexpected header: {header!r}", file=sys.stderr)
        return 1

    records = []
    for raw in it:
        if raw is None or all(c is None for c in raw):
            continue
        _code, name, ka_no, statement, ro, sro = (list(raw) + [None] * 6)[:6]
        ka_no = ("" if ka_no is None else str(ka_no)).strip()
        if not ka_no:
            continue
        statement = ("" if statement is None else str(statement)).strip()
        system_number, system_name = parse_number_name(name)
        records.append({
            "ka_full": make_ka_full(system_number, ka_no),
            "category": categorize(ka_no),
            "system_number": system_number,
            "system_name": system_name,
            "ka_no": ka_no,
            "statement": statement,
            "ro_imp": "" if ro is None else str(ro),
            "sro_imp": "" if sro is None else str(sro),
            "status": status_of(statement),
        })

    records.sort(key=lambda r: (r["category"], r["ka_full"]))

    OUT_CSV.parent.mkdir(parents=True, exist_ok=True)
    with OUT_CSV.open("w", newline="", encoding="utf-8") as fh:
        w = csv.DictWriter(fh, fieldnames=FIELDS)
        w.writeheader()
        w.writerows(records)

    by_key, collisions = {}, []
    for rec in records:
        k = rec["ka_full"]
        if k in by_key:
            collisions.append(k)
        by_key[k] = {f: rec[f] for f in FIELDS if f != "ka_full"}
    OUT_JSON.write_text(json.dumps(by_key, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    print(f"rows={len(records)} json_keys={len(by_key)} collisions={len(collisions)}")
    if collisions:
        print("WARNING collisions (first 10):", sorted(set(collisions))[:10], file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
```

- [ ] **Step 2: Run the converter**

Run: `python3 scripts/build_ka_catalog.py`
Expected: a line like `rows=9421 json_keys=<N> collisions=<small>` and exit 0. (Row count should be ~9421; collisions should be 0 or a small number — if large, investigate before continuing.)

- [ ] **Step 3: Spot-check the output**

Run:
```bash
python3 - <<'EOF'
import json
d = json.load(open("data/ka-catalog/pwr-ka-catalog.json"))
print("keys:", len(d))
print("G2.1.1:", d["G2.1.1"]["category"], d["G2.1.1"]["ro_imp"], d["G2.1.1"]["sro_imp"], d["G2.1.1"]["statement"][:40])
print("003 A1.01:", d["003 A1.01"]["category"], d["003 A1.01"]["statement"][:40])
cats = {}
for v in d.values(): cats[v["category"]] = cats.get(v["category"],0)+1
print("categories:", cats)
EOF
grep -m2 'G2.1.25' data/ka-catalog/pwr-ka-catalog.csv
```
Expected: `G2.1.1` is `generic` with RO `3.8` / SRO `4.2` and statement starting "CONDUCT OF OPERATIONS"; `003 A1.01` is `system` mentioning "RCP vibration"; categories include `system`, `ape`, `epe`, `generic` (and possibly `other`).

- [ ] **Step 4: Commit converter only (generated files committed in Task 4)**

```bash
git add scripts/build_ka_catalog.py
git commit -m "feat(#72): add PWR K/A catalog xlsx->json/csv converter"
```

---

## Task 4: Generate and commit the catalog JSON/CSV

**Files:** `data/ka-catalog/pwr-ka-catalog.json`, `data/ka-catalog/pwr-ka-catalog.csv` (already produced in Task 3 Step 2).

- [ ] **Step 1: Confirm both files exist and are non-trivial**

Run: `wc -l data/ka-catalog/pwr-ka-catalog.csv && python3 -c "import json;print(len(json.load(open('data/ka-catalog/pwr-ka-catalog.json'))))"`
Expected: CSV has ~9422 lines (header + rows); JSON key count printed (several thousand).

- [ ] **Step 2: Commit the generated catalog**

```bash
git add data/ka-catalog/pwr-ka-catalog.json data/ka-catalog/pwr-ka-catalog.csv
git commit -m "feat(#72): generate committed PWR K/A catalog json + csv"
```

---

## Task 5: Add the catalog guard test

**Files:** Create `tests/test_ka_catalog.py`.

- [ ] **Step 1: Write the test**

Create `tests/test_ka_catalog.py` with EXACTLY this content:

```python
import csv
import json
import unittest
from pathlib import Path

JSON_PATH = Path("data/ka-catalog/pwr-ka-catalog.json")
CSV_PATH = Path("data/ka-catalog/pwr-ka-catalog.csv")


class KACatalogTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.data = json.loads(JSON_PATH.read_text(encoding="utf-8"))
        with CSV_PATH.open(encoding="utf-8") as fh:
            cls.rows = list(csv.DictReader(fh))

    def test_nonempty(self):
        self.assertGreater(len(self.data), 5000)
        self.assertGreaterEqual(len(self.rows), len(self.data))

    def test_categories_present(self):
        cats = {v["category"] for v in self.data.values()}
        self.assertTrue({"system", "ape", "epe", "generic"} <= cats)

    def test_known_generic(self):
        e = self.data["G2.1.1"]
        self.assertEqual(e["category"], "generic")
        self.assertIn("CONDUCT OF OPERATIONS", e["statement"])
        self.assertAlmostEqual(float(e["ro_imp"]), 3.8)
        self.assertAlmostEqual(float(e["sro_imp"]), 4.2)

    def test_known_system(self):
        e = self.data["003 A1.01"]
        self.assertEqual(e["category"], "system")
        self.assertIn("RCP vibration", e["statement"])

    def test_csv_columns(self):
        self.assertEqual(
            list(self.rows[0].keys()),
            ["ka_full", "category", "system_number", "system_name",
             "ka_no", "statement", "ro_imp", "sro_imp", "status"],
        )


if __name__ == "__main__":
    unittest.main()
```

- [ ] **Step 2: Run the test**

Run: `python3 -m unittest tests.test_ka_catalog -v`
Expected: all tests PASS. (If `test_known_generic`/`test_known_system` fail, the converter's normalization or the committed data is wrong — fix before continuing.)

- [ ] **Step 3: Run the whole suite to confirm nothing else broke**

Run: `python3 -m unittest discover -s tests`
Expected: OK.

- [ ] **Step 4: Commit**

```bash
git add tests/test_ka_catalog.py
git commit -m "test(#72): guard committed PWR K/A catalog json/csv"
```

---

## Task 6: Add the homepage references card

**Files:** Modify `site/src/pages/index.astro` (insert after the Source Documents grid closes, currently line 445).

- [ ] **Step 1: Confirm the insertion point**

Run: `sed -n '443,448p' site/src/pages/index.astro`
Expected: lines `</div>` / `</div>` / `</div>` (closing the UFSAR+TechSpecs grid) then a blank line then `<!-- EXAM YEAR CARDS -->`. Insert the new card on the blank line between the grid's closing `</div>` and the `<!-- EXAM YEAR CARDS -->` comment.

- [ ] **Step 2: Insert the new card**

After the line `    </div>` that closes the `grid grid-cols-1 lg:grid-cols-2 gap-3 mb-6` block (the third consecutive `</div>`, immediately before the blank line preceding `<!-- EXAM YEAR CARDS -->`), insert:

```jsx
    <!-- NRC Operator Licensing References -->
    <div class="bg-bg-card border border-border rounded-md p-5 mb-6">
      <div class="flex items-center gap-2 mb-2">
        <span class="text-accent-amber text-sm">&#9638;</span>
        <span class="text-text-primary text-sm font-semibold">NRC Operator Licensing References</span>
      </div>
      <p class="text-text-muted text-[11px] mb-3 leading-relaxed">The NRC bases for the operator licensing exams and the K/A tags used throughout this wiki.</p>
      <div class="flex flex-col gap-0.5">
        <a href={`${base}reference-pdfs/nureg-1021-examination-standards.pdf`} target="_blank" class="block text-accent-blue text-[11px] no-underline hover:underline py-0.5 leading-tight">NUREG-1021 (Rev 12) &mdash; Operator Licensing Examination Standards</a>
        <a href={`${base}reference-pdfs/nureg-1122-pwr-ka-catalog.pdf`} target="_blank" class="block text-accent-blue text-[11px] no-underline hover:underline py-0.5 leading-tight">NUREG-1122 (Rev 3) &mdash; PWR Knowledge &amp; Abilities (K/A) Catalog</a>
        <a href={`${base}reference-pdfs/pwr-ka-catalog.xlsx`} target="_blank" class="block text-accent-blue text-[11px] no-underline hover:underline py-0.5 leading-tight">PWR K/A Catalog &mdash; machine-readable (xlsx)</a>
      </div>
    </div>
```

- [ ] **Step 3: Type-check and build**

Run: `cd site && npm run check && npm run build:astro && cd ..`
Expected: type check passes; build completes (`1475 page(s) built` or current count) with no errors.

- [ ] **Step 4: Confirm the assets shipped to dist and links are correct**

Run:
```bash
ls site/dist/reference-pdfs/
grep -o 'reference-pdfs/[a-z0-9-]*\.\(pdf\|xlsx\)' site/dist/index.html | sort -u
```
Expected: the three files are in `dist/reference-pdfs/`, and `index.html` references all three (with the `BASE_URL` prefix).

- [ ] **Step 5: Commit**

```bash
git add site/src/pages/index.astro
git commit -m "feat(#72): add NRC reference docs card to homepage Source Documents"
```

---

## Task 7: Wire the catalog into the ingestion skills

**Files:** Modify the two global skill files (outside the repo).

- [ ] **Step 1: Locate the K/A guidance in the written-exam skill**

Run: `grep -n "K/A" /Users/fredm/.claude/skills/salem-exam-ingestion/SKILL.md | head`
Identify the section that describes recording the K/A tag on a question card / in Connections.

- [ ] **Step 2: Add the validation rule (salem-exam-ingestion)**

Add this paragraph to that K/A guidance:

```markdown
**K/A validation against the catalog (issue #72):** When recording a K/A tag, look up the
K/A number in `data/ka-catalog/pwr-ka-catalog.csv` (or `pwr-ka-catalog.json`, keyed by id
e.g. `003 A1.01`, `008 AA1.01`, `007 EA1.02`, `G2.1.25`). Confirm the number exists and copy
the **exact** catalog statement and the RO/SRO importance ratings. If the importance rating
or statement on the source exam document disagrees with the catalog, do NOT silently choose
one — flag the discrepancy to the user (per the conflict-check rule). The catalog is
NUREG-1122 Rev 3; its PDF and a machine-readable xlsx are linked on the site homepage.
```

- [ ] **Step 3: Add the same rule to the operating-test skill**

Run: `grep -n "K/A" /Users/fredm/.claude/skills/salem-operating-test-ingestion/SKILL.md | head`
Add the identical paragraph (verbatim from Step 2) to its JPM/scenario K/A-metadata guidance.

- [ ] **Step 4: Record (no repo commit — these are global files)**

These skill files live outside the repo and are not committed here. Note in the PR description that both ingestion skills were updated with the K/A-catalog validation rule.

---

## Task 8: README update, final verification, and PR

**Files:** Modify `README.md`.

- [ ] **Step 1: Add the new paths to the README project structure**

Run: `grep -n "site/public\|data/\|project structure\|## Project" README.md | head`
In the project-structure / repo-layout section, add entries describing:
- `site/public/reference-pdfs/` — self-hosted NRC reference PDFs (NUREG-1021, NUREG-1122) + machine-readable K/A xlsx, linked from the homepage Source Documents section.
- `data/ka-catalog/` — authoritative PWR K/A catalog: source `pwr-ka-catalog.xlsx` plus generated `pwr-ka-catalog.json` (keyed by K/A id) and `pwr-ka-catalog.csv` (flat); the agent's K/A reference.
- `scripts/build_ka_catalog.py` — one-off converter (xlsx → json/csv); re-run only on a new NUREG-1122 revision.

Match the README's existing list/table style.

- [ ] **Step 2: Full verification sweep**

Run:
```bash
cd /Users/fredm/projects/salem-study-system
python3 -m unittest discover -s tests          # includes test_ka_catalog
cd site && npm run check && npm run build:astro && cd ..
ls site/dist/reference-pdfs/
```
Expected: tests OK; type check + build clean; three reference files in `dist`.

- [ ] **Step 3: Commit the README**

```bash
git add README.md
git commit -m "docs(#72): document reference-pdfs + data/ka-catalog in README"
```

- [ ] **Step 4: Push and open the PR**

```bash
git push -u origin nrc-reference-docs
gh pr create --base main --title "Link NRC reference docs to homepage + K/A catalog for the agent (#72)" --body "$(cat <<'EOF'
Closes #72.

## Homepage
New "NRC Operator Licensing References" card in the Source Documents section linking self-hosted:
- NUREG-1021 Rev 12 — Operator Licensing Examination Standards (PDF)
- NUREG-1122 Rev 3 — PWR K/A Catalog (PDF + machine-readable xlsx)

## K/A catalog for the agent
- `data/ka-catalog/pwr-ka-catalog.xlsx` (source) + generated `pwr-ka-catalog.json` (keyed by K/A id) and `.csv` (flat), via `scripts/build_ka_catalog.py` (~9.4k rows; system/APE/EPE/generic).
- `tests/test_ka_catalog.py` guards the committed catalog (runs in CI).
- Both ingestion skills (global) updated to validate K/A numbers + RO/SRO importance against the catalog.

## Notes
- Binary assets: NUREG-1021 ~4.0 MB, NUREG-1122 ~5.7 MB, xlsx ~0.5 MB (×2: data + web copy).
- No quiz-data, question-article, or pipeline changes; quiz-bank gate unaffected.

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

---

## Notes for the executor

- **Binary files in git:** the PDFs/xlsx are committed directly (the project already commits PDFs under `site/public/{exam-pdfs,ts-pdfs}`). Total added ~10 MB — acceptable and consistent with convention.
- **`other` category:** a minority of catalog rows have unusual `K/A NO.` values and fall in `category: "other"`. That is expected; the four main categories must all be present (asserted by the test).
- **Determinism:** the converter sorts records, so re-running produces identical json/csv (clean `git diff`). If a re-run shows a diff, something upstream changed.
- **CI does not run the converter** — it only runs the unittest (reads committed json/csv) and the Astro build. `openpyxl` is dev-only.
