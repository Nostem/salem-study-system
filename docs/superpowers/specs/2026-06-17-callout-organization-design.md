# Callout Organization in Wiki Articles — Design

**Issue:** #70 — wiki articles: exam callouts/backfill are not organized.
**Date:** 2026-06-17
**Status:** Approved (design), pending implementation plan.

## Problem

Backfill callouts (`callout-exam`, `callout-jpm`, `callout-scenario`) accumulate in
wiki articles as unsorted, chronological-by-ingestion piles. Each exam ingestion appends
its cross-references to whatever section was convenient, so over many ingestions a single
generic heading collects a large undifferentiated block.

Worst observed case: `wiki/systems/chemical-and-volume-control-system.md` has **52 backfill
callouts dumped in one block** under `## Tech Spec LCOs`. Other heavy files: ECCS (62),
RPS-SSPS (57), AFW (47), EOP-TRIP-1 (47).

The site renders article markdown straight to HTML via Astro `render()` — there is no
reordering layer. Organization is therefore purely a function of where the `<div>` blocks
sit in the markdown source.

**Scope of impact:** 319 files contain at least one backfill callout.

| Folder | Files | Backfill callouts |
|--------|------:|------------------:|
| systems | 49 | 1190 |
| abnormals | 54 | 400 |
| eops | 38 | 390 |
| procedures | 110 | 321 |
| admin | 51 | 168 |
| tech-specs | 17 | 121 |
| concepts | 0 | 0 |
| **Total** | **319** | **2590** |

## Goal

Per issue #70: each backfill callout should appear **beneath the topically applicable
subsection**, and callouts referring to the same subsection/subtopic should be **grouped
together**.

## Decisions (resolved during brainstorming)

1. **Placement model: Hybrid.** Group same-subtopic callouts together AND anchor each group
   at the end of its matching subsection (not scattered one-by-one, not isolated in a single
   coverage dump).
2. **Execution: migrate now, defer tooling.** One-time LLM-assisted reorganization plus a
   skill update. No new permanent scripts.
3. **Rollout: batched PRs**, one per wiki folder.

## Section 1 — Scope: what moves vs. what stays

**Move (reorganize):** `callout-exam`, `callout-jpm`, `callout-scenario`.

**Leave in place (do not touch):** `callout-important` (LCO), `callout-bases`, `callout-trap`,
and any other reference callouts. These are intrinsic content already authored under the
correct section; the tech-spec articles (e.g. `ts-3-4-4-rcs.md`) confirm this pattern is
already correct.

Articles whose backfill callouts are already well-placed are no-ops.

## Section 2 — Target structure (Hybrid model)

For each backfill callout:

1. **Determine the applicable subsection** by reading the callout *body* (the
   "Exam — 2016 Q28" label does not state the topic; the body does). Match it to an existing
   `##`/`###` heading in the same article.
2. **Group** all backfill callouts that share a subsection, and place that group at the
   **end of the subsection's content** — after the reference prose / `important` / `bases`
   callouts, immediately before the next heading.
3. **Lead-in marker:** prefix each group with a lightweight bolded line
   `**Exam & operating coverage:**` so it reads as a coverage block. No new CSS required.
4. **Within-group order (deterministic):** exam → jpm → scenario; within each type, ascending
   by year, then by question / JPM id.
5. **Orphans** — a callout whose topic matches no existing heading, or an article with flat
   structure — collect into one dedicated `## Exam & Operating Coverage` section placed
   immediately above `## Connections`, internally grouped by subtopic with `###` sub-headings.
   This is also the home for articles that genuinely lack finer structure.

## Section 3 — Execution

One-time, LLM-assisted, **per-article** migration via subagents.

- Each subagent owns exactly **one** article and edits no other file. Unlike exam backfilling
  (which writes shared system/EOP articles and must run sequentially), this migration has **no
  shared-file races**, so subagents may run in **parallel batches** (~6–8 at a time).
- Process **worst offenders first** within each batch (highest backfill-callout count).
- Subagent contract is **block movement only — never content authoring:**
  - Identify the `callout-exam`/`callout-jpm`/`callout-scenario` blocks.
  - Reposition and regroup them per Section 2.
  - **Preserve each callout's inner HTML byte-for-byte** — no rewording, re-summarizing, or
    value changes.
  - The *only* permitted additions are the `**Exam & operating coverage:**` lead-in lines
    and, where orphans require them, the `## Exam & Operating Coverage` / `###` headings.
  - Already-organized articles are no-ops.

## Section 4 — Regression prevention (skill update only)

Update both ingestion skills' backfill steps:

- `salem-exam-ingestion` Step 5 (Backfill).
- `salem-operating-test-ingestion` backfill step.

New rule: *a new backfill callout goes at the end of the topically-matching subsection, joined
to that subsection's existing `**Exam & operating coverage:**` group — never appended to a
generic pile or a catch-all section when a topical subsection exists.*

No new scripts (deferred, per decision 2).

## Section 5 — Verification (per file)

Because the migration is pure intra-file block reordering, it is verified deterministically:

- **Set-equality guard:** extract the full text of every callout block before and after the
  edit; assert the *set is byte-identical* — same blocks, same content, only position/order
  changed. Catches any accidental drop or text mutation. This is a throwaway migration guard,
  not durable tooling.
- `python3 scripts/check-wikilinks.py` → 0 broken.
- `cd site && npm run build` → clean.
- Tool-tag artifact sweep: `grep -rlE "</content>|</invoke>" wiki/` → empty.

Bidirectional links are inherently safe: callouts move *within* their own file, so every
question↔system backlink stays intact. The quiz-bank deploy gate is unaffected — these are
not question articles.

## Section 6 — Rollout (batched PRs)

One PR per folder, ordered by study value and dump severity. Each PR runs the Section 5
verification before opening.

| PR | Folder | Files | Notes |
|----|--------|------:|-------|
| 1 | systems | 49 | Heaviest (1190 callouts); sub-split A–M / N–Z if the diff is too large to review |
| 2 | tech-specs | 17 | |
| 3 | eops | 38 | |
| 4 | abnormals | 54 | |
| 5 | admin | 51 | |
| 6 | procedures | 110 | Most files, lighter per-file |

Skill update (Section 4) ships with PR 1 so all subsequent ingestion follows the new rule.

## Non-goals

- No deterministic organizer script or anchor attributes (explicitly deferred).
- No CSS/component changes; the lead-in marker uses existing bold markdown.
- No changes to question/JPM/scenario *articles* themselves — only the system/tech-spec/
  EOP/procedure/admin/abnormal articles that receive backfills.
- No reorganization of non-backfill callouts (`important`, `bases`, `trap`).
