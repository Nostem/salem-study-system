# NRC Reference Documents on Homepage + K/A Catalog for the Agent — Design

**Issue:** #72 — link other sources to homepage (NUREG-1021, NUREG-1122); download the PWR K/A catalog as a reference for the agent.
**Date:** 2026-06-17
**Status:** Approved (design), pending implementation plan.

## Problem / Goal

Two related deliverables:

1. **Homepage reference links.** Surface the two foundational NRC operator-licensing
   documents on the site's homepage Source Documents section:
   - **NUREG-1021** — Operator Licensing Examination Standards for Power Reactors
     (ADAMS `ML21256A276`).
   - **NUREG-1122** — Knowledge & Abilities (K/A) Catalog for Nuclear Power Plant
     Operators: PWRs, Rev 3 (ADAMS `ML20260H083`).
2. **K/A catalog as an agent reference.** Bring the machine-readable PWR K/A catalog
   (`pwr-ka-catalog.xlsx`, NUREG-1122 Rev 3) into the repo in a form the exam-ingestion
   agent can read and validate against. NUREG-1122 already underlies every K/A tag in the
   wiki (K/A appears in 318 articles), so the agent should validate K/A numbers and
   RO/SRO importance ratings against the catalog going forward.

Source URLs (from the issue):
- `https://www.nrc.gov/docs/ML2125/ML21256A276.pdf`
- `https://www.nrc.gov/docs/ML2026/ML20260H083.pdf`
- `https://www.nrc.gov/sites/default/files/doc_library/cdn/legacy/reading-rm/doc-collections/nuregs/staff/sr1122/r3/pwr-ka-catalog.xlsx`

## Decisions (resolved during brainstorming)

1. **Self-host everything.** Download both PDFs and the xlsx into the repo; link locally
   with `target="_blank"` — matches the existing `ts-pdfs`/`exam-pdfs` convention and is
   durable against NRC link-rot.
2. **K/A catalog format:** commit the source `.xlsx` plus a generated lookup-friendly
   `.json` (keyed by K/A id) and a grep-friendly `.csv`.
3. **Wire into the ingestion skills:** future K/A tagging validates the number and
   importance ratings against the catalog.
4. **Homepage placement:** a new card in the existing **Source Documents** section of
   `site/src/pages/index.astro`, as a new row beneath the UFSAR + Tech Specs row.
5. **Web-serve the `.xlsx`** on that card for direct human download (alongside the PDFs).

## Document identification (verify at download — do not assume)

The issue gives two ADAMS accession numbers but not which is which. At download time, open
each PDF and read its title page to confirm the `ML` → NUREG mapping before naming the file.
Expected: `ML21256A276` = NUREG-1021, `ML20260H083` = NUREG-1122. If a title contradicts
this, name by the actual title and note it. Never label a file by assumption.

## Section 1 — File layout

```
site/public/reference-pdfs/
  nureg-1021-examination-standards.pdf   ← downloaded from ML21256A276 (title-verified)
  nureg-1122-pwr-ka-catalog.pdf          ← downloaded from ML20260H083 (title-verified)
  pwr-ka-catalog.xlsx                    ← copy of the source xlsx, web-served for download
data/ka-catalog/
  pwr-ka-catalog.xlsx                    ← source of truth (NUREG-1122 Rev 3)
  pwr-ka-catalog.json                    ← generated: keyed by normalized K/A id
  pwr-ka-catalog.csv                     ← generated: flat, grep-friendly
scripts/
  build_ka_catalog.py                    ← xlsx → json + csv converter (documented utility)
```

- PDFs + the web-download copy of the xlsx live under `site/public/reference-pdfs/`
  (web-served, like `ts-pdfs`). A dedicated `reference-pdfs/` dir keeps NRC references
  distinct from the `ts-pdfs` catch-all.
- The authoritative catalog (xlsx + generated json/csv) lives under `data/ka-catalog/`
  (agent/repo reference, not a web asset). The `site/public` xlsx is a byte-identical copy
  for human download; both come from the same source file.
- Generated `json`/`csv` are **committed** (not gitignored): the xlsx is a fixed NRC
  publication, so the derived files are stable reference data, not volatile build artifacts.

## Section 2 — Homepage references card

Add one card to the Source Documents grid in `site/src/pages/index.astro`, placed as a new
row directly beneath the existing UFSAR + Tech Specs row. Match the existing card markup
(`bg-bg-card border border-border rounded-md p-5`, accent square icon, semibold title) and
link style (`${base}reference-pdfs/<file>` with `target="_blank"`, `text-accent-blue`).

Card content — **NRC Operator Licensing References**:
- `NUREG-1021 — Operator Licensing Examination Standards` → `reference-pdfs/nureg-1021-examination-standards.pdf`
- `NUREG-1122 — PWR K/A Catalog (Rev 3)` → `reference-pdfs/nureg-1122-pwr-ka-catalog.pdf`
- `PWR K/A Catalog (xlsx)` → `reference-pdfs/pwr-ka-catalog.xlsx`

A one-line description under the title notes these are the NRC operator-licensing bases for
the exams and K/A tags in this wiki. No other section of the homepage changes.

## Section 3 — K/A catalog conversion

`scripts/build_ka_catalog.py` reads `data/ka-catalog/pwr-ka-catalog.xlsx` and writes
`pwr-ka-catalog.json` and `pwr-ka-catalog.csv` next to it.

**Per-row record schema** (one row per K/A statement):
```
category        # "system" | "ape" | "epe" | "generic"
system_number   # e.g. "039", "022", "007", or "" for generic
system_name      # e.g. "Main and Reheat Steam System", or "" for generic
ka_id           # the K/A identifier, e.g. "A1.09", "AA1.01", "EA1.05", "2.1.25"
ka_full         # normalized full id used as the JSON key, e.g. "039 A1.09", "G2.1.25"
statement       # verbatim K/A statement text
ro_importance   # RO importance rating, e.g. "3.9"
sro_importance  # SRO importance rating, e.g. "4.2"
tier            # tier/group columns if present in the xlsx (else "")
group
```
- **CSV:** header row + one row per record, columns in the order above.
- **JSON:** object keyed by `ka_full` → the record (minus the redundant key). When the same
  K/A id appears under multiple systems (system-specific K/As), the key includes the system
  number so it stays unique; generic K/As key on `G2.x.x`.
- The exact column mapping is finalized against the actual xlsx headers during
  implementation (the converter reads the header row, it does not hardcode column indexes).
- Dependency: `openpyxl`. Confirm it is importable under the project Python; if not, add it
  to `requirements-dev.txt`. The converter uses the standard library `csv`/`json` for output.
- The converter is a documented one-off utility (run when the catalog is first ingested or
  if NRC publishes a new revision). It is **not** wired into CI or build.

## Section 4 — Wire the catalog into the ingestion skills

Add a K/A-validation step to both skills' K/A-tagging guidance:
- `salem-exam-ingestion` (question-card K/A tag + Connections).
- `salem-operating-test-ingestion` (JPM/scenario K/A metadata).

Rule to add: *When recording a K/A tag, look up the K/A number in
`data/ka-catalog/pwr-ka-catalog.csv` (or `.json`). Confirm the number exists; copy the
exact catalog statement and the RO/SRO importance ratings. If the importance rating or
statement on the source exam document disagrees with the catalog, do not silently pick one —
flag the discrepancy to the user (consistent with the project's conflict-check rule).*

These skill files are global (outside the repo), edited in place; the edit is recorded but
not committed to the repo.

## Section 5 — README + verification

- **README:** add `site/public/reference-pdfs/` and `data/ka-catalog/` (and
  `scripts/build_ka_catalog.py`) to the project-structure section; one line on the K/A
  catalog as the agent's K/A reference. Per CLAUDE.md, update README in the same change.
- **Verification:**
  - Both PDFs download non-empty and open; title pages confirm the NUREG numbers.
  - `data/ka-catalog/pwr-ka-catalog.xlsx` and the `site/public` copy are byte-identical
    (same source download).
  - `build_ka_catalog.py` is deterministic: JSON object size and CSV data-row count both
    equal the xlsx data-row count; spot-check a few known tags (e.g. `G2.1.25`, `039 A1.09`)
    resolve to a statement + RO/SRO ratings.
  - `cd site && npm run build` is clean; the three `reference-pdfs/` files land in `dist`
    and the homepage card links resolve.
  - No quiz-data or wiki-article changes, so the quiz-bank deploy gate and wikilink check
    are unaffected.

## Rollout

A single PR off `main` (one cohesive change): downloaded files + converter + generated
catalog + homepage card + README. Skill edits (global) ship alongside and are noted in the
PR description. The PDFs/xlsx are binary and sizable; the PR notes their sizes.

## Non-goals

- No audit of the K/A tags already on the 318 existing articles against the catalog
  (a larger, separate effort / issue).
- No automated/CI regeneration of the catalog (fixed publication; manual re-run only).
- No new site route or page — just one card in the existing Source Documents section.
- No changes to quiz data, question articles, or the deploy pipeline.
