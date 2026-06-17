# Callout migration contract (issue #70) — THROWAWAY (delete in plan Task 10)

You reorganize the backfill callouts in ONE Salem wiki article (the file given to you).
Branch `callout-org-systems` (or the batch branch you were told), repo
`/Users/fredm/projects/salem-study-system`. Do NOT switch branches, do NOT commit, do NOT touch
any other file.

A **backfill callout** is an HTML block: `<div class="callout callout-exam">` / `callout-jpm` /
`callout-scenario`, whose first inner line is `<div class="callout-label">…</div>` (e.g.
`Exam — 2018 Q31`, `JPM — 2015 RO-A2`, `Scenario — 2015 #2`), then body text (spans only).
`callout-important` / `callout-bases` / `callout-trap` are NOT backfill callouts — leave them
exactly where they are.

## Do ONLY this
1. Find every backfill callout. For each, read its BODY (not the label) and pick the existing
   `##`/`###` heading in THIS file it is topically about.
2. Move it to the END of that subsection's content (after the prose and after any
   important/bases/trap callouts), immediately before the next heading.
3. Group all backfill callouts that share a subsection together, under ONE bold lead-in line
   `**Exam & operating coverage:**` placed once above the group. Keep one blank line between
   consecutive callout blocks and around the group/headings so markdown renders.
4. Order within a group: exam → jpm → scenario; within each type ascending by year, then by
   question/JPM/scenario number.
5. **Sub-group large groups:** if a section's coverage group exceeds ~8 callouts AND spans
   multiple subtopics, split it into `### <Subtopic>` clusters (each `###` heading followed by
   its callouts in the rule-4 order), placed at the END of the section after the prose. Each
   cluster ≥2 callouts where possible. A coherent group of ≤8 stays a single lead-in block with
   no `###`.
6. **Orphans** (a callout whose topic matches no existing heading): collect into ONE
   `## Exam & Operating Coverage` section placed immediately ABOVE `## Connections`, grouped by
   subtopic with `###` sub-headings. Prefer a real section; use the orphan section sparingly.

## Hard constraints (safety-critical)
- Do NOT alter the inner content of any callout — not one character. No rewording, value edits,
  re-summarizing, or typo fixes. You MOVE blocks verbatim; the only NEW text you add is the
  `**Exam & operating coverage:**` lead-in lines and the `###`/`## Exam & Operating Coverage`
  coverage headings.
- Do NOT modify reference prose/tables, important/bases/trap callouts, YAML frontmatter, or the
  `## Connections` section.
- If the article's backfill callouts are already correctly placed and grouped, make NO change.

## Mandatory self-check
Run (system python3, from the repo root), substituting your file:
`python3 scripts/_callout_migration_guard.py <your file>`
It MUST print a line beginning `OK   …(N callout blocks, unchanged)`. If it prints `FAIL`, you
mutated or dropped a callout — fix until it prints `OK`.

## Report (concise, structured)
STATUS (DONE / DONE_WITH_CONCERNS / BLOCKED); the exact guard output line; how many callouts you
relocated; the sections (and any `###` sub-clusters) that now hold coverage groups, with counts;
whether an orphan section was needed and why; anything ambiguous you had to judge.
