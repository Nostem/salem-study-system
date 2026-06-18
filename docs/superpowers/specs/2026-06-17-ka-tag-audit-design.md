# K/A Tag Audit Against the NUREG-1122 Catalog — Design

**Requested:** in conversation (follow-on to issue #72, which brought the PWR K/A catalog
into the repo). No GitHub issue yet.
**Date:** 2026-06-17
**Status:** Approved (design), pending implementation plan.

## Problem / Goal

Every ingested exam item carries a K/A tag taken from the source NRC exam: 898 written
questions, 185 JPMs (and 33 scenarios, which mostly do not carry a single K/A). The K/A
*assignment* is authoritative (it comes from the exam) — the goal is to confirm the wiki
**transcribed it accurately**: that the K/A number is a real catalog entry and that the
RO/SRO importance ratings match the canonical catalog values. Where they do not, reconcile
the wiki to the catalog.

The catalog is NUREG-1122 Rev 3 (`data/ka-catalog/pwr-ka-catalog.json` / `.csv`), now in the
repo. The `salem-exam-ingestion` / `salem-operating-test-ingestion` skills were already
updated (issue #72) to validate new K/As against it; this audit is the one-time backfill of
that rule across the already-ingested corpus.

## Decisions (resolved during brainstorming)

1. **Mechanical accuracy audit**, not semantic appropriateness. The K/A *assignment* is taken
   as correct (from the exam); we verify the recorded *number validity* and *importance
   ratings* against the catalog.
2. **Reconcile to the Rev 3 catalog** as ground truth (even where an older exam may have used
   NUREG-1122 Rev 2 — the wiki is made uniform to the single catalog we host).
3. **Fields in scope:** K/A number (validate/normalize) + RO/SRO importance ratings only.
   The human-written K/A statement/description text is left untouched.
4. **Deterministic tool** with a dry-run (report) mode and an apply (fix) mode; no LLM in the
   core. Clear importance mismatches are auto-fixed; everything the tool cannot resolve
   mechanically is flagged.
5. **Flagged residue is agent-reviewed, not dumped:** for each flagged item the agent reviews
   the source exam PDF + the catalog + the item content, determines the correct K/A number and
   importance, and applies the fix manually after verifying. Only items the agent *also* cannot
   determine are flagged for human review.

## Section 1 — Architecture

`scripts/audit_ka_tags.py` — one re-runnable tool, two modes:
- `--report` (default, dry-run): classify every item, write the audit report, change nothing.
- `--apply`: additionally rewrite the importance ratings for `IMPORTANCE_MISMATCH` items.

It loads the catalog JSON, walks the target articles + the operating-exam YAML, extracts each
K/A tag with its importance, normalizes the number to a catalog key, looks it up, classifies,
and (in apply mode) edits only the rating substrings. The core is fully deterministic.

## Section 2 — Extraction & normalization

**Importance lives in three places; the number is validated wherever a tag appears:**
- **Written-question card span** — `<num> <ka> (RO/SRO)` (the small tag span, style includes
  `border-radius:3px`). RO/SRO **pair**.
- **JPM card span** — `… | <num> <ka> (single rating)`. **Single** value.
- **JPM YAML** — `ka_importance_ro` / `ka_importance_sro` in
  `data/exams/*-operating-exam.yaml`. RO/SRO **pair**.

The footer `K/A:` line (number + statement, no rating) is used only to cross-check the number.

**Normalization — map wiki number forms to a catalog key.** Observed wiki forms include
`000057 AA1.01`, `057 AA1.01`, `APE 022 AA1.01`, `EPE 007 EA1.05`, `G2.1.43`, `Gen 2.3.11`,
`045 2.1.23`. Rules:
- strip `APE` / `EPE` / `Gen` prefixes,
- normalize the leading system number to the catalog's 3-digit form (`000057` → `057`),
- route generic `2.x.x` / `Gen 2.x.x` / `G2.x.x` to the `G2.x.x` key,
- the K/A part (`AA1.01`, `EA1.05`, `A1.09`, `2.1.43`) joins the number to form the lookup key
  (e.g. `057 AA1.01`, `G2.1.43`).

Anything that does not resolve to a catalog key is classified **UNPARSEABLE** — never guessed.
The exact regexes/forms are finalized against the corpus during implementation (the tool is
driven by the observed forms, with UNPARSEABLE as the safety net for anything unexpected).

## Section 3 — Classification & fix policy

Per importance location, exactly one of:
- **OK** — number resolves; importance matches the catalog (numeric compare, `4` == `4.0`).
  Counted, untouched.
- **IMPORTANCE_MISMATCH** — number resolves but a rating differs. **Auto-fix in `--apply`:**
  rewrite only the rating substring (the `(RO/SRO)` pair, the JPM single rating, or the YAML
  `ka_importance_*` value) to the catalog value, in the wiki's existing number format.
- **NUMBER_NOT_IN_CATALOG** — the normalized number is not a catalog entry (typo, deleted
  K/A, or a form the tool could not map). **Flagged** (not auto-fixed).
- **UNPARSEABLE** — the tag/rating could not be parsed. **Flagged**.
- **JPM single-rating ambiguity** — the JPM card shows one rating but the catalog's RO ≠ SRO.
  **Flagged** (the tool does not auto-pick which value the single rating should be).

K/A statement text is never modified.

## Section 4 — Report & safety

- **Audit report** (committed): a markdown summary (counts by category and by exam year) plus a
  CSV (`data/ka-audit/ka-audit-report.csv`) with one row per importance location: file, item id,
  raw tag, parsed number, parsed RO/SRO, catalog key, catalog RO/SRO, classification, action.
- **Safety guard:** apply mode must change *only* rating values. A check (in the spirit of the
  #70 guard) re-parses each changed file and asserts that everything except the targeted rating
  substrings/YAML values is byte-identical to the pre-apply version. Then
  `python3 scripts/check-wikilinks.py` (0 broken) and `cd site && npm run build` (clean) — the
  edits are intra-file value changes with no link impact, and do not touch question/JPM
  *articles'* slugs.
- **Quiz-bank note:** importance ratings are not part of the quiz-bank's correctness data, but
  the four generated quiz files are regenerated and validated per the project's deploy gate as a
  final step if any question article changed.
- **Idempotent:** re-running `--report` after `--apply` shows zero `IMPORTANCE_MISMATCH`; only
  the (resolved or human-flagged) residue remains.

## Section 5 — Agent review of the flagged residue

After the mechanical apply, the agent works the flagged list (`NUMBER_NOT_IN_CATALOG`,
`UNPARSEABLE`, JPM single-rating ambiguity). For each item:
1. Read the source exam PDF (`site/public/exam-pdfs/<year>-…pdf`) — the JPM cover / written
   worksheet states the exam's assigned K/A and rating.
2. Cross-check the catalog for the correct entry and RO/SRO importance.
3. If the correct K/A number + importance can be determined, **apply the fix manually**
   (correct the number and/or rating), and re-run the audit to confirm it now classifies OK.
4. If the agent **cannot** determine it confidently (e.g. the source is illegible, or the K/A
   genuinely is not in Rev 3 and no equivalent exists), **flag it for human review** with the
   evidence gathered.

The residual human-review list is the final, minimized output.

## Section 6 — Rollout

- **Phase 1 (tool + report):** build `audit_ka_tags.py`, run `--report`, commit the tool and the
  report. PR #1. (You review the magnitude: how many mismatches, how large the flagged residue.)
- **Phase 2 (apply + residue):** run `--apply`, then agent-review the flagged residue (Section 5),
  commit the fixes. Regenerate/validate quiz data if any question article changed. PR #2 (so the
  value-change diff is reviewable on its own).
- A short human-review list (if any) accompanies PR #2 for the items the agent could not resolve.

## Non-goals

- No semantic re-assessment of whether each K/A is the *right* one for the question (the
  assignment is taken as authoritative; a separate effort if ever wanted).
- No rewriting of K/A statement/description prose.
- No reconciliation to NUREG-1122 Rev 2 (the repo hosts Rev 3; the wiki is made uniform to it).
- No changes to quiz-selection logic, routes, or article slugs.
