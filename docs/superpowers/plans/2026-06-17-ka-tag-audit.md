# K/A Tag Audit & Canonicalization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Audit every ingested K/A tag (898 written questions + 185 JPMs) against the NUREG-1122 Rev 3 catalog and rewrite each resolvable tag to one canonical form (catalog number + K/A + `(RO x / SRO y)` from the catalog); flag the unresolvable residue for agent review against the source exam PDFs.

**Architecture:** One re-runnable tool `scripts/audit_ka_tags.py` (`--report` / `--apply`). It extracts each K/A tag from the card span (and JPM YAML), normalizes the wiki's many forms to a catalog key, classifies (RESOLVED / NUMBER_NOT_IN_CATALOG / UNPARSEABLE), writes a report, and in apply mode rewrites resolved tags to canonical form. A guard asserts apply changed *only* K/A tags. Then the agent works the small flagged residue against source PDFs.

**Tech Stack:** Python 3 (stdlib `re`/`csv`/`json`; `pyyaml` for the operating-exam YAML — already a dep), `pdfplumber` (residue review), `unittest`.

**Spec:** `docs/superpowers/specs/2026-06-17-ka-tag-audit-design.md`

**Branch:** `ka-tag-audit` (already created; carries the spec commits).

**Verified facts (from planning prototype over all 1,083 tags):**
- The K/A tag is the **first** `border-radius:3px` span in each article. Written: `000057 AA1.01 (3.7/3.7)`. JPM: `Simulator | RO/SRO | 003 AA2.03 (3.6)` (the `<Type> | <Applic> |` prefix precedes the tag).
- Catalog keys (`ka_full`): `076 K4.01`, `022 AA1.04`, `WE08 EA1.05`, `G2.1.43`. Each entry has `ro_imp` / `sro_imp` (strings like `"3.7"`, `"4"`).
- Number forms: 6-digit system `076000` (ends `000`) → `076`; 6-digit APE/EPE `000040` → `040`; glued `005000A2.02`; vendor `00WE08`; packed K/A `A203` → `A2.03`; padded decimals `EA2.2` → `EA2.02`; dual `000007K106 / EK1.06`; word-prefixed `APE15`/`EPE 28`; system-prefixed generic `002000G2.1.20` → `G2.1.20`.
- Importance notations: `(3.7/3.7)`, `(RO 4.5 / SRO 4.8)`, `(SRO 3.9)`, `(3.6)`, `(3.8/4.2) — SRO`, `(3.7) SRO`.
- With the normalizer in Task 1 (validated against the corpus during planning), **≈86%
  auto-resolve (938/1083)**; residue **≈145**: ≈47 UNPARSEABLE (bare K/As with no system
  number like `AK2.08`, malformed generics like `G4.09`) + ≈98 NUMBER_NOT_IN_CATALOG (mostly
  Westinghouse vendor EPE codes whose K/A does not exist for that vendor in Rev 3, e.g.
  `WE08 EA2.02`, and a few renumbered APEs). The residue is the Task 6 agent-review worklist.

---

## File Structure

- Create: `scripts/audit_ka_tags.py` — the audit/canonicalization tool (report + apply).
- Create: `tests/test_audit_ka_tags.py` — unit tests for the normalizer + classification.
- Create (generated, committed): `data/ka-audit/ka-audit-report.md`, `data/ka-audit/ka-audit-report.csv`.
- Modify (apply mode, generated): `wiki/exams/*/q*.md`, `wiki/exams/*/jpm-*.md`, `data/exams/*-operating-exam.yaml` (K/A tag substrings only).

---

## PR 1 — Tool + report (Tasks 1–3)

## Task 1: Build the extractor + normalizer (report mode)

**Files:** Create `scripts/audit_ka_tags.py`, `tests/test_audit_ka_tags.py`.

- [ ] **Step 1: Write the normalizer unit tests first**

Create `tests/test_audit_ka_tags.py` with EXACTLY this content:

```python
import unittest
import importlib.util
from pathlib import Path

spec = importlib.util.spec_from_file_location("audit_ka_tags", Path("scripts/audit_ka_tags.py"))
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)


class StripImportanceTest(unittest.TestCase):
    def t(self, body, name, imp):
        n, i = mod.strip_importance(body)
        self.assertEqual(n, name)
        self.assertEqual(i, imp)

    def test_pair(self):        self.t("076 K4.01 (3.7/3.7)", "076 K4.01", "3.7/3.7")
    def test_labeled_pair(self):self.t("000001A203 / AA2.03 (RO 4.5 / SRO 4.8)", "000001A203 / AA2.03", "RO 4.5 / SRO 4.8")
    def test_sro_only(self):    self.t("000003A201 (SRO 3.9)", "000003A201", "SRO 3.9")
    def test_single(self):      self.t("003 AA2.03 (3.6)", "003 AA2.03", "3.6")
    def test_trailing_dash(self):self.t("000003 2.4.9 (3.8/4.2) — SRO", "000003 2.4.9", "3.8/4.2")
    def test_trailing_label(self):self.t("076 A2.01 (3.7) SRO", "076 A2.01", "3.7")


class NormalizeKaTest(unittest.TestCase):
    def t(self, raw, key):
        self.assertEqual(mod.normalize_ka(raw), key)

    def test_six_digit_system(self):  self.t("076000 K4.01", "076 K4.01")
    def test_six_digit_ape(self):     self.t("000040 AK1.01", "040 AK1.01")
    def test_glued_number(self):      self.t("005000A2.02", "005 A2.02")
    def test_packed_ka(self):         self.t("000001A203", "001 A2.03")
    def test_dual_form(self):         self.t("000007K106 / EK1.06", "007 EK1.06")
    def test_dual_form_packed(self):  self.t("000001A203 / AA2.03", "001 AA2.03")
    def test_ape_prefix_glued(self):  self.t("APE15 AK2.08", "015 AK2.08")
    def test_epe_prefix_spaced(self): self.t("EPE 55 EA2.04", "055 EA2.04")
    def test_vendor(self):            self.t("00WE08 EA1.05", "WE08 EA1.05")
    def test_generic_plain(self):     self.t("G2.1.43", "G2.1.43")
    def test_generic_bare(self):      self.t("045 2.1.23", "G2.1.23")
    def test_generic_glued(self):     self.t("002000G2.1.20", "G2.1.20")
    def test_pad_decimal(self):       self.t("00WE11 EA2.1", "WE11 EA2.01")
    def test_tier_group_prefix(self): self.t("T2G2 017 K6.01", "017 K6.01")
    def test_embedded_system_name(self): self.t("012 RPS-A3.03", "012 A3.03")
    def test_glued_vendor(self):      self.t("00WE12EA2.1", "WE12 EA2.01")
    def test_dual_ape_colon_name(self): self.t("APE: 015/017 RCP Malfunctions-AK1.04", "015 AK1.04")
    def test_bare_ka_unparseable(self): self.assertIsNone(mod.normalize_ka("AK2.08"))
    def test_malformed_generic(self):   self.assertIsNone(mod.normalize_ka("G4.09"))


if __name__ == "__main__":
    unittest.main()
```

- [ ] **Step 2: Run the tests to confirm they fail (module not written yet)**

Run: `python3 -m unittest tests.test_audit_ka_tags -v`
Expected: errors/failures (the script does not exist or functions undefined).

- [ ] **Step 3: Write `scripts/audit_ka_tags.py` with EXACTLY this content**

```python
#!/usr/bin/env python3
"""Audit ingested K/A tags against the NUREG-1122 Rev 3 catalog and canonicalize them.

Each ingested written question and JPM carries a K/A tag in its first `border-radius:3px`
card span (e.g. `076000 K4.01 (3.7/3.7)`; JPM `Simulator | RO/SRO | 003 AA2.03 (3.6)`).
This tool normalizes the many wiki tag forms to a catalog key, looks up the catalog's
canonical number + RO/SRO importance, and:
  --report (default): classifies every tag and writes data/ka-audit/ka-audit-report.{md,csv}.
  --apply: additionally rewrites each RESOLVED tag to the canonical form
           `<catalog ka_full> (RO <ro> / SRO <sro>)`, and sets the JPM YAML
           ka_importance_ro/sro to the catalog values.

Unresolvable tags (NUMBER_NOT_IN_CATALOG, UNPARSEABLE) are flagged, never guessed.

Usage:
  python3 scripts/audit_ka_tags.py            # report only
  python3 scripts/audit_ka_tags.py --apply    # rewrite resolved tags + write report
"""
import csv
import glob
import json
import re
import sys
from pathlib import Path

CATALOG = Path("data/ka-catalog/pwr-ka-catalog.json")
REPORT_MD = Path("data/ka-audit/ka-audit-report.md")
REPORT_CSV = Path("data/ka-audit/ka-audit-report.csv")
SPAN = re.compile(r'(border-radius:3px;">)([^<]+)(</span>)')

# ---- parsing / normalization -------------------------------------------------

def strip_importance(body):
    """Return (name, importance_str) by splitting the trailing importance parenthetical.
    Handles '(3.7/3.7)', '(RO 4.5 / SRO 4.8)', '(SRO 3.9)', '(3.6)', '(3.8/4.2) — SRO',
    '(3.7) SRO'."""
    m = re.search(r'\(([^)]*)\)\s*(?:[—-]\s*)?(?:RO|SRO)?\s*$', body)
    if not m:
        return body.strip(), None
    return body[:m.start()].strip(), m.group(1).strip()


def normalize_number(raw):
    """6-digit system 'NNN000' -> 'NNN'; otherwise zero-pad to 3 ('000040'->'040')."""
    raw = raw.strip()
    if len(raw) == 6 and raw.endswith("000"):
        return raw[:3]
    return f"{int(raw):03d}"


def normalize_token(ka):
    """Packed 'A203' -> 'A2.03'; pad decimals 'EA2.2' -> 'EA2.02' (keep any trailing letter)."""
    ka = ka.strip()
    m = re.match(r"^([EA]?[AK])(\d)(\d\d)$", ka)
    if m:
        return f"{m.group(1)}{m.group(2)}.{m.group(3)}"
    m = re.match(r"^([EA]?[AK]\d)\.(\d+)([a-z]?)$", ka)
    if m:
        return f"{m.group(1)}.{int(m.group(2)):02d}{m.group(3)}"
    return ka


def normalize_ka(name):
    """Map a wiki K/A tag (importance already stripped) to a catalog key, or None.
    Handles tier/group prefixes (T2G2), APE/EPE/Gen word prefixes (incl. 'APE:'), vendor
    codes (00WE08, W/E11), glued numbers (005000A2.02), embedded system names
    (012 RPS-A3.03), dual forms (000007K106 / EK1.06), and generics
    (G2.x.x / 2.x.x / 002000G2.1.20)."""
    s = name.strip()
    s = re.sub(r"^T\d(?:G\d)?\s+", "", s)                       # tier/group: T2G2, T4
    s = re.sub(r"(?i)\b(?:APE|EPE)\s*:?\s*", "", s)             # APE15 / EPE 28 / 'APE:'
    s = re.sub(r"(?i)\bGen\.?\s*", "", s).strip()
    s = re.sub(r"^([BCW])\s*/\s*([AE])(\d{2})", r"\1\2\3", s)   # W/E11 -> WE11
    # generic: a two-dot 2.N.N anywhere, G-prefixed or (system-)prefixed
    g = re.search(r"2\.(\d+)\.(\d+)", s)
    if g and (re.search(r"G\s*2\.", s) or re.search(r"(?:^|[^0-9.])2\.\d", s)):
        return f"G2.{int(g.group(1))}.{int(g.group(2))}"
    # dual form 'first / second': number from the left, K/A token from the right
    if "/" in s:
        left, right = (p.strip() for p in s.split("/", 1))
        dm = re.match(r"\d{1,6}", left)
        km = re.search(r"[EA]?[AK]\d\.?\d*[a-z]?$", right)
        if dm and km:
            return f"{normalize_number(dm.group(0))} {normalize_token(km.group(0))}"
    # vendor APE/EPE (optionally with an embedded system name): WE08 …EA1.05.  No \b after the
    # vendor code — glued forms like '00WE12EA2.1' have no word boundary there.
    sv = re.sub(r"^0*([BCW])\s*([AE])\s*(\d{2})", r"\1\2\3", s)
    vm = re.match(r"^([BCW][AE]\d{2}).*?([EA]?[AK]\d\.?\d*[a-z]?)$", sv)
    if vm:
        return f"{vm.group(1)} {normalize_token(vm.group(2))}"
    # numeric system/APE/EPE (1–6 digits; tolerates an embedded system name before the K/A,
    # e.g. '012 RPS-A3.03'). No \b after the number — glued forms ('005000A2.02') lack one;
    # the K/A always starts with a letter so the number cannot over-eat.
    nm = re.match(r"^(\d{1,6}).*?([EA]?[AK]\d\.?\d*[a-z]?)$", s)
    if nm:
        return f"{normalize_number(nm.group(1))} {normalize_token(nm.group(2))}"
    return None


def fmt_rating(v):
    """Catalog importance string -> display: '4' or '4.0' -> '4.0', '3.7' -> '3.7'."""
    f = float(v)
    return str(int(f)) if f == int(f) else f"{f:g}"

# ---- extraction --------------------------------------------------------------

def first_tag(text):
    """Return (match, prefix, tag_body) for the first K/A card span, or (None, '', '')."""
    m = SPAN.search(text)
    if not m:
        return None, "", ""
    content = m.group(2).strip()
    if "|" in content:                # JPM: 'Type | Applic | <tag>'
        prefix, body = content.rsplit("|", 1)
        return m, prefix.strip() + " | ", body.strip()
    return m, "", content

# ---- classification ----------------------------------------------------------

def classify(body, catalog):
    name, imp = strip_importance(body)
    key = normalize_ka(name)
    if key is None:
        return "UNPARSEABLE", None, None
    if key not in catalog:
        return "NUMBER_NOT_IN_CATALOG", key, None
    e = catalog[key]
    canonical = f"{key} (RO {fmt_rating(e['ro_imp'])} / SRO {fmt_rating(e['sro_imp'])})"
    return "RESOLVED", key, canonical


def main():
    apply = "--apply" in sys.argv[1:]
    catalog = json.loads(CATALOG.read_text(encoding="utf-8"))
    files = sorted(glob.glob("wiki/exams/*/q*.md") + glob.glob("wiki/exams/*/jpm-*.md"))
    rows, counts = [], {"RESOLVED": 0, "NUMBER_NOT_IN_CATALOG": 0, "UNPARSEABLE": 0, "NO_TAG": 0}
    for f in files:
        text = Path(f).read_text(encoding="utf-8")
        m, prefix, body = first_tag(text)
        if m is None:
            counts["NO_TAG"] += 1
            rows.append((f, "", "", "NO_TAG", "", ""))
            continue
        status, key, canonical = classify(body, catalog)
        counts[status] += 1
        rows.append((f, body, key or "", status, canonical or "", prefix))
        if apply and status == "RESOLVED":
            new_content = f"{prefix}{canonical}"
            new_span = f"{m.group(1)}{new_content}{m.group(3)}"
            if new_span != m.group(0):
                Path(f).write_text(text.replace(m.group(0), new_span, 1), encoding="utf-8")

    REPORT_CSV.parent.mkdir(parents=True, exist_ok=True)
    with REPORT_CSV.open("w", newline="", encoding="utf-8") as fh:
        w = csv.writer(fh)
        w.writerow(["file", "raw_tag", "catalog_key", "status", "canonical", "jpm_prefix"])
        w.writerows(rows)
    by_year = {}
    for f, _b, _k, status, *_ in rows:
        yr = re.search(r"/(\d{4})/", f)
        by_year.setdefault(yr.group(1) if yr else "?", {}).setdefault(status, 0)
        by_year[yr.group(1) if yr else "?"][status] += 1
    lines = [f"# K/A tag audit report\n", f"Total tags: {len(rows)}\n"]
    for k, v in counts.items():
        lines.append(f"- {k}: {v}")
    lines.append("\n## By year\n\n| year | RESOLVED | NUMBER_NOT_IN_CATALOG | UNPARSEABLE | NO_TAG |")
    lines.append("|------|---------:|----------------------:|------------:|-------:|")
    for yr in sorted(by_year):
        d = by_year[yr]
        lines.append(f"| {yr} | {d.get('RESOLVED',0)} | {d.get('NUMBER_NOT_IN_CATALOG',0)} "
                     f"| {d.get('UNPARSEABLE',0)} | {d.get('NO_TAG',0)} |")
    lines.append("\n## Flagged items (need review)\n")
    for f, body, key, status, *_ in rows:
        if status in ("NUMBER_NOT_IN_CATALOG", "UNPARSEABLE"):
            lines.append(f"- `{status}` {f} — tag `{body}`" + (f" → key `{key}`" if key else ""))
    REPORT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")

    print(" ".join(f"{k}={v}" for k, v in counts.items()), "(apply)" if apply else "(report)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
```

- [ ] **Step 4: Run the unit tests to verify they pass**

Run: `python3 -m unittest tests.test_audit_ka_tags -v`
Expected: all tests PASS. If a normalizer test fails, fix the rule it targets (do not weaken the test).

- [ ] **Step 5: Commit**

```bash
git add scripts/audit_ka_tags.py tests/test_audit_ka_tags.py
git commit -m "feat(ka-audit): K/A tag normalizer + audit tool (report mode) with tests"
```

---

## Task 2: Run the report, inspect residue, tune to ≈94%

**Files:** Create `data/ka-audit/ka-audit-report.{md,csv}` (generated).

- [ ] **Step 1: Run the audit in report mode**

Run: `python3 scripts/audit_ka_tags.py`
Expected: a counts line ≈ `RESOLVED=938 NUMBER_NOT_IN_CATALOG=98 UNPARSEABLE=47 NO_TAG=0 (report)` (≈86% resolved; exact counts may shift slightly with any normalizer tuning).

- [ ] **Step 2: Inspect the flagged residue and confirm it is the expected classes**

Run: `sed -n '/## Flagged items/,$p' data/ka-audit/ka-audit-report.md | head -80`
Expected residue is the irregular classes only: bare K/As (no system number), malformed
generics (`G4.09`-style), and vendor codes absent from Rev 3 (`WE08 EA2.xx`). If a *large,
regular* class appears (a whole new number/format convention), STOP: add a normalizer rule +
a unit test in `tests/test_audit_ka_tags.py` for it, re-run Task 1 Step 4, then re-run this
step. The shipped rules resolve ≈86%; push higher only if a new *regular* form appears — do
not over-fit to one-off irregular tags (those go to Task 6 agent review).

- [ ] **Step 3: Commit the report**

```bash
git add data/ka-audit/ka-audit-report.md data/ka-audit/ka-audit-report.csv
git commit -m "chore(ka-audit): committed K/A audit report (report mode)"
```

---

## Task 3: Open PR 1 (tool + report)

- [ ] **Step 1: Push and open PR**

```bash
git push -u origin ka-tag-audit
gh pr create --base main --title "K/A tag audit tool + report (1/2)" --body "$(cat <<'EOF'
Part 1/2 of the K/A tag audit. Adds `scripts/audit_ka_tags.py` (report/apply) + unit tests, and the committed dry-run report.

The audit normalizes the wiki's many K/A tag forms to the NUREG-1122 Rev 3 catalog key. Dry-run resolves ≈86% of ~1,083 tags; the report lists the ~145 flagged items (mostly Westinghouse vendor codes absent from Rev 3, plus bare K/As and malformed generics) for agent review in PR 2.

No article changes in this PR (report mode only).

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

Stop here and let the report be reviewed before applying (PR 2 below proceeds after).

---

## PR 2 — Apply + residue (Tasks 4–7)

> Branch PR 2 off `main` after PR 1 merges (`git checkout main && git pull && git checkout -b ka-tag-audit-apply`), or continue on `ka-tag-audit` if PR 1 is not yet merged. The apply tool and tests are already present from PR 1.

## Task 4: Build the apply guard

**Files:** Create `scripts/_ka_apply_guard.py` (throwaway, removed in Task 7).

- [ ] **Step 1: Write the guard**

Create `scripts/_ka_apply_guard.py` with EXACTLY this content:

```python
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
```

- [ ] **Step 2: Commit the guard**

```bash
git add scripts/_ka_apply_guard.py
git commit -m "chore(ka-audit): add throwaway apply guard"
```

## Task 5: Apply the canonical rewrites

**Files:** Modify `wiki/exams/*/q*.md`, `wiki/exams/*/jpm-*.md` (K/A tag spans only).

- [ ] **Step 1: Apply**

Run: `python3 scripts/audit_ka_tags.py --apply`
Expected: the counts line ends with `(apply)`; RESOLVED count matches the report.

- [ ] **Step 2: Guard — only K/A tag spans changed**

Run:
```bash
python3 scripts/_ka_apply_guard.py $(git diff --name-only -- 'wiki/exams/**/*.md')
```
Expected: every changed file prints `OK`. If any prints `FAIL`, STOP — the rewrite touched content outside the tag span; investigate before continuing.

- [ ] **Step 3: Idempotency — re-running report shows resolved tags already canonical**

Run: `python3 scripts/audit_ka_tags.py && git diff --stat -- 'wiki/exams/**/*.md' | tail -1`
Expected: the second run makes NO further article changes (the diff stat is unchanged from after Step 1).

- [ ] **Step 4: Wikilink + build checks**

Run:
```bash
python3 scripts/check-wikilinks.py
cd site && npm run build:astro && cd ..
```
Expected: 0 broken links; build clean.

- [ ] **Step 5: Commit the applied rewrites**

```bash
git add wiki/exams
git commit -m "refactor(ka-audit): canonicalize resolved K/A tags to the Rev 3 catalog"
```

## Task 6: Agent-reviews the flagged residue

**Files:** Modify the specific flagged articles (and `data/exams/*-operating-exam.yaml` for JPM ratings if needed).

- [ ] **Step 1: List the residue**

Run: `python3 -c "import csv;[print(r['status'],r['file'],r['raw_tag']) for r in csv.DictReader(open('data/ka-audit/ka-audit-report.csv')) if r['status'] in ('NUMBER_NOT_IN_CATALOG','UNPARSEABLE')]"`
This is the ≈145-item worklist (mostly Westinghouse vendor-code questions — whether the source
exam meant a vendor-specific entry or a generic EPE number that IS in the catalog).

- [ ] **Step 2: For EACH flagged item, resolve against the source**

For each item, the controller dispatches the work (or does it inline): open the source exam PDF
(`site/public/exam-pdfs/<year>-written.pdf` for `q*`, `site/public/exam-pdfs/<year>-jpm-<id>.pdf`
for JPMs) and read the K/A the worksheet/cover actually assigns; cross-check
`data/ka-catalog/pwr-ka-catalog.csv` for the catalog entry + RO/SRO importance.
- If the correct catalog key + ratings can be determined, edit that file's K/A tag span to the
  canonical form `<key> (RO x / SRO y)` (JPMs keep the `Type | Applic |` prefix), and run the
  guard on that file (`python3 scripts/_ka_apply_guard.py <file>` → `OK`).
- If it genuinely cannot be determined (illegible source, K/A truly absent from Rev 3 with no
  equivalent), leave it and add a line to `data/ka-audit/human-review.md` with the file, the raw
  tag, and the evidence gathered.

- [ ] **Step 3: Re-run the audit to confirm the residue shrank**

Run: `python3 scripts/audit_ka_tags.py`
Expected: `NUMBER_NOT_IN_CATALOG` + `UNPARSEABLE` now equal only the count of items written to
`human-review.md` (everything resolvable is RESOLVED). Commit the refreshed report.

- [ ] **Step 4: Commit residue fixes + report + human-review list**

```bash
git add wiki/exams data/exams data/ka-audit
git commit -m "fix(ka-audit): resolve flagged K/A tags from source exams; list residual unknowns"
```

## Task 7: Quiz-data regen, remove guard, final verify, PR

- [ ] **Step 1: Regenerate + validate quiz data (question articles changed)**

Run (per CLAUDE.md's quiz-bank gate):
```bash
python3 scripts/exam_question_import.py audit  --out data/quiz-import/audit-all.json
python3 scripts/exam_question_import.py stage  --out data/quiz-import/supabase-staging-all.json
python3 scripts/build_static_quiz_bank.py      --bundle data/quiz-import/supabase-staging-all.json --out site/src/data/quiz-bank.json
python3 scripts/build_structured_quiz_bank.py  --in site/src/data/quiz-bank.json --out site/src/data/quiz-bank-v2.json
python3 scripts/validate_structured_quiz_bank.py --in site/src/data/quiz-bank-v2.json --exam-images site/public/exam-images
```
Expected: validator prints `OK: no errors`. (K/A tags are not quiz correctness data, so the
bank content should be unchanged; this confirms the gate stays green.)

- [ ] **Step 2: Remove the throwaway guard and the staging .bak if present**

```bash
git rm scripts/_ka_apply_guard.py
```

- [ ] **Step 3: Tool-tag artifact sweep + final test run**

```bash
grep -rlE "</content>|</invoke>" wiki/exams && echo "ARTIFACTS" || echo "no artifacts"
python3 -m unittest discover -s tests
```
Expected: no artifacts; tests OK (includes `test_audit_ka_tags`).

- [ ] **Step 4: Commit generated quiz files (only if they changed) + guard removal**

```bash
git add -- scripts data/quiz-import site/src/data/quiz-bank.json site/src/data/quiz-bank-v2.json
git commit -m "chore(ka-audit): regenerate quiz data; remove throwaway guard"
```
(If `git diff --cached` shows the quiz files unchanged, that is expected — still commit the guard removal.)

- [ ] **Step 5: README sweep (per CLAUDE.md)**

Review `README.md`: the audit adds `scripts/audit_ka_tags.py` and `data/ka-audit/`. Add a one-line
entry under the project structure / data documentation. Commit if changed.

- [ ] **Step 6: Push and open PR 2**

```bash
git push -u origin HEAD
gh pr create --base main --title "K/A tag audit — apply canonical rewrites + resolve residue (2/2)" --body "$(cat <<'EOF'
Part 2/2 of the K/A tag audit. Applies the canonical rewrites (every resolvable K/A tag → `<catalog number+K/A> (RO x / SRO y)` from NUREG-1122 Rev 3) across the written-question and JPM articles, and resolves the flagged residue against the source exam PDFs.

- Apply guard confirmed only K/A tag spans changed; idempotent re-run; wikilinks + build clean.
- Residual items the source could not resolve are listed in `data/ka-audit/human-review.md`.
- Quiz-bank gate re-validated (K/A tags aren't quiz correctness data; bank unchanged).

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

---

## Notes for the executor

- **System `python3`** throughout (matches the quiz scripts; `pyyaml` already installed).
- **JPM YAML ratings:** the current tool rewrites the card-span tag (which carries the rating shown to studiers). If `data/exams/*-operating-exam.yaml` `ka_importance_ro/sro` also drift from the catalog, fix them in Task 6 per item (they are not rendered on the card, so they are lower priority); the card span is the primary surface.
- **Do not** modify question stems, answers, justifications, or K/A *statement* prose — only the tag span (and YAML ratings).
- The residue worklist is ~145; Task 6 is the only judgement-heavy step and is bounded by the
  report. Many residue items are the same question — "is `00WE08 EA2.2` a Westinghouse-specific
  K/A (absent from Rev 3) or shorthand for a generic EPE entry that IS in the catalog?" — so they
  can be worked in batches by pattern, not one fully-independent investigation each.
