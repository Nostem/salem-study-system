# UFSAR System-Article Enrichment — Design

**Issues:** closes #71 ("system wiki articles — need more UFSAR info") via the pipeline
described in #78 ("using ka catalog nureg 1122 with ufsar"). #78 is the *method*; #71 is the *goal*.
**Date:** 2026-06-18
**Status:** Approved (design), pending implementation plan.

## Problem / Goal

The 54 `wiki/systems/*.md` articles are **exam-reconstructed, not UFSAR-grounded**. The major
systems (RCS, ECCS, CVCS) are rich but built almost entirely from exam-question backfill; ~15 are
near-stubs (13–37 lines) and 16 of 54 cite no UFSAR at all. Example: `control-air.md` is ~30 exam
callouts with a one-sentence "Function" and no UFSAR-sourced system description, component list, or
design basis.

Make each system article **UFSAR-grounded**, using the NUREG-1122 Rev 3 K/A catalog
(`data/ka-catalog/pwr-ka-catalog.json`, ingested in #72, audited in #111) as the index of *what an
operator must know* per system. Build one reusable pipeline, prove it on a pilot, then roll out in
per-chapter batches.

## Decisions (resolved during brainstorming)

1. **Driver = the K/A catalog index** (per #78). For a system with a catalog entry, its
   `category: system` K/As (groups K1–K6, A1–A4) are the coverage checklist; each statement's
   specific topic (the text after the final colon) is the thing to find in the UFSAR. The co-numbered
   `AA*/AK*` (APE) K/As are **excluded** — they describe an accident, not the system, and belong to
   abnormal/EOP articles.
2. **Output = structured sections by K/A group** (not atomized callouts). Coherent UFSAR-sourced
   subsections, ordered by group, with existing exam/JPM/scenario callouts **nested under the
   matching subsection** (the issue #70 pattern). This also satisfies #78's "organize into
   subsections" step for the new content.
3. **Rollout = pipeline + pilot first, then per-chapter batches.** De-risk before scaling.
4. **Two enrichment modes**, selected by the crosswalk:
   - **K/A-index-driven** — system has a catalog entry (e.g. CCW 008, SW 076). Sections are driven
     by the K/A checklist.
   - **UFSAR-structure-driven** — system has *no* catalog entry (e.g. Chill Water; not a NUREG-1122
     system). There is no K/A index, so port the UFSAR system description into the template. Still
     UFSAR-grounded; just not K/A-checklisted.
5. **Sourcing priority:** UFSAR first; fall back to **Tech Specs, vendor/system descriptions, and the
   existing exam-bank content** for topics the UFSAR does not cover. Every value is cited to its
   source; nothing is fabricated. A topic found in none of these is recorded as a **gap**, never
   guessed.

## Section 1 — Pipeline components (built once, in Plan 1)

- **UFSAR split.** `raw/ufsar/salem-ufsar.pdf` (124 MB) → per-chapter PDFs `raw/ufsar/ch-NN-*.pdf`
  (raw/ is gitignored), via `.venv/bin/python` + pypdf using the PDF bookmarks. A tracked index
  `data/ufsar/chapter-index.json` records each chapter's title + page range.
- **System ↔ catalog ↔ UFSAR crosswalk** — tracked `data/ufsar/system-map.json`. One row per
  `wiki/systems/*.md`: catalog `system_number` (or `null`), enrichment mode (`ka_index` /
  `ufsar_structure`), and the UFSAR section(s) (e.g. CCW → §9.2.2). Also lists catalog systems with
  **no** wiki article (candidates for new articles, deferred) and **Salem-N/A** catalog systems
  (e.g. 025 Ice Condenser — Salem is large-dry containment). Built programmatically by name match,
  then human-reviewed for correctness (the file is committed, so review is a diff).
- **Per-system K/A index** — `data/ufsar/ka-index/<system>.md`: the system's active
  `category: system` K/As grouped K1–K6 / A1–A4, each with its full statement's specific topic and
  RO/SRO importance. This is the coverage checklist a subagent works from.
- **`salem-ufsar-ingestion` skill** — the spec for enriching ONE system, so batch subagents are
  pointed at the skill file (the project's established pattern; CLAUDE.md "point subagents directly
  at the skill"), not at re-summarized prompts. Encodes the section template, sourcing priority,
  citation format, callout-nesting rule, and the verification checklist.

## Section 2 — Per-article structure

UFSAR-sourced subsections ordered by K/A group; existing callouts nested beneath the matching one:

```
# <System>
## Function & Design Basis        ← UFSAR system description + design bases
## Key Components                 ← UFSAR (pumps, valves, HXs, tanks; capacities, ratings)
## Power Supplies                 ← K2  (electrical sources per component)
## Automatic Features & Setpoints ← A3  (auto starts/isolations + setpoints; cite TS where applicable)
## Design Features & Interlocks   ← K4  (interlocks, permissives, protective features)
## Interconnections & Loads       ← K1/K3 (what it connects to / serves; effect of loss on them)
## Effects of Loss / Malfunction  ← K6  (plant conditions/malfunctions affecting the system)
## Control-Room Operation         ← A4  (manual control, indications, normal/abnormal ops)
   └─ [existing exam/JPM/scenario callouts nested under whichever subsection they match]
## Tech Spec LCOs   ## Related EOPs   ## Exam History   ## Connections   (existing tail, preserved)
```

Subsections with no K/A topics and no UFSAR content are omitted (no empty headers). For
`ufsar_structure` mode (no catalog system), the K/A-group headers are replaced by the UFSAR's own
subsection structure.

## Section 3 — Sourcing & verification (non-negotiable)

- Every value traceable to a **UFSAR §/table**, **TS section (with amendment)**, or — when only the
  exam bank has it — the **exam callout** it came from. No fabrication; no commas in numbers; values
  that disagree across sources STOP and flag (CLAUDE.md conflict rule).
- **Gaps:** a K/A topic absent from UFSAR/TS/descriptions/exam-bank is listed in a per-system
  `data/ufsar/gaps/<system>.md`, never invented.
- **Existing content preserved.** Exam/JPM/scenario callouts are moved (nested), never reworded or
  deleted. Bidirectional links maintained; new cross-refs link both ways.
- **Per-system verification checklist** (in the skill): every new value has a citation;
  `scripts/check-wikilinks.py` clean; no tool-tag artifacts (`grep -rlE "</content>|</invoke>"`);
  `cd site && npm run build` clean; article still renders.
- K/A tags are **not** touched (that was #111); the quiz bank is unaffected (system articles aren't
  question articles), so the quiz deploy gate is a no-op here but is run as a final check.

## Section 4 — Pilot (Plan 1, after the pipeline)

Three Chapter-9 systems, end-to-end, exercising both modes:
- **Component Cooling Water** (008 → §9.2.2) — `ka_index`; has existing callouts to nest (validates
  augment-without-clobber). 73 system K/As.
- **Service Water** (076 → §9.2.1) — `ka_index`; safety-related, 113 system K/As (validates a
  large checklist).
- **Chill Water** (no catalog system → §9.2.x / §9.4) — `ufsar_structure`; thin stub (validates
  build-from-near-zero with no K/A index).

You review the three articles before any rollout.

## Section 5 — Rollout (follow-on plans, one per UFSAR chapter)

Per-chapter batches, each its own plan; subagents pointed at the skill; **run sequentially** (they
nest callouts in shared system files and may touch cross-linked articles). Order roughly: Ch4
reactor, Ch5 RCS/RHR/CVCS/PZR, Ch6 ESF/containment, Ch7 I&C/RPS/NIS, Ch8 electrical, Ch9 auxiliary,
Ch10 steam & power conversion. Each plan ends with the verification checklist and a README/`_index`
update.

## Non-goals

- No new articles for catalog systems that lack one (tracked in the crosswalk, deferred).
- No re-touching of K/A tags (done in #111) or quiz-selection logic.
- No enrichment of abnormal/EOP/admin articles from APE/EPE K/As (a separate effort).
- No reconciliation of Salem-N/A catalog systems (flagged, skipped).
