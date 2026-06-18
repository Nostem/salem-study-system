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
3. **Canonicalize the whole K/A tag** (revised after planning revealed the tags are
   pervasively *inconsistently formatted*, not just mis-rated). Each tag is rewritten to ONE
   canonical form built from the catalog: the catalog's canonical number + K/A, and the
   catalog's RO/SRO importance, e.g. `076 K4.01 (RO 2.5 / SRO 2.9)`. The human-written K/A
   *statement/description* prose is still left untouched — only the tag (number + ratings) is
   normalized. Because the canonical form always shows both catalog ratings, the earlier
   "JPM single-rating where RO≠SRO" ambiguity dissolves (we always render RO + SRO from the
   catalog).
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

**Normalization — map the wiki's many tag forms to a catalog key.** A planning prototype over
all 1,083 tags found the data is pervasively inconsistent; the normalizer must handle at least:
- 6-digit **system** numbers ending in `000` → 3-digit: `076000 K4.01` → `076 K4.01`;
- 6-digit **APE/EPE** numbers starting `000` → 3-digit: `000040 AK1.01` → `040 AK1.01`;
- numbers **glued** to the K/A: `005000A2.02`, `000007EK2.03`;
- **vendor** APE/EPE codes (Babcock `BA`/`BE`, CE `CA`/`CE`, Westinghouse `WA`/`WE`):
  `00WE08 EA2.2` → `WE08 …`;
- **packed** K/A tokens: `A203` → `A2.03`; and zero-padded decimals: `EA2.2` → `EA2.02`;
- **dual** forms `packed / normalized`: `000001A203 / AA2.03` → use the normalized half + number;
- **generics** in every shape: `G2.1.43`, `2.1.43`, `Gen 2.3.11`, and system-prefixed
  `002000G2.1.20` → `G2.1.20`;
- `APE`/`EPE`/`Gen` word prefixes stripped.

The catalog key (`ka_full`, e.g. `076 K4.01`, `WE08 EA1.05`, `G2.1.43`) is the lookup target and
the canonical number for the rewrite. Anything that does not resolve to a catalog key is
**UNPARSEABLE** — never guessed. The normalizer is built iteratively against the corpus (each
form handled with a documented rule + a unit test) to a target of ≈95% auto-resolution; the
residue is flagged.

**Canonical tag form (the rewrite target):** `<catalog number+K/A> (RO <ro_imp> / SRO <sro_imp>)`,
e.g. `076 K4.01 (RO 2.5 / SRO 2.9)`, using the catalog entry's exact `ro_imp`/`sro_imp`. For JPM
card spans the `<Type> | <Applic> |` prefix is preserved; the JPM YAML `ka_importance_ro/sro` are
set to the catalog values.

## Section 3 — Classification & rewrite policy

Per K/A tag, exactly one of:
- **RESOLVED** — the tag normalizes to a catalog key. In `--apply`, the **whole tag is
  rewritten to the canonical form** (catalog number + K/A + `(RO <ro> / SRO <sro>)`). If the tag
  already equals its canonical form, it is left byte-identical (no-op). This both fixes wrong
  ratings and standardizes the format in one pass.
- **NUMBER_NOT_IN_CATALOG** — the tag normalized to a key that is not in the catalog (typo, a
  K/A genuinely absent from Rev 3, or a vendor entry that does not match). **Flagged**, not
  rewritten.
- **UNPARSEABLE** — the tag could not be normalized to any key (e.g. a bare K/A with no system
  number, a malformed generic like `G4.09`). **Flagged**, not rewritten.

Only the K/A tag itself (the card span text and the JPM YAML `ka_importance_*` values) is
rewritten. The K/A statement/description prose, question stems, answers, justifications, and all
other content are never modified.

## Section 4 — Report & safety

- **Audit report** (committed): a markdown summary (counts by category and by exam year) plus a
  CSV (`data/ka-audit/ka-audit-report.csv`) with one row per importance location: file, item id,
  raw tag, parsed number, parsed RO/SRO, catalog key, catalog RO/SRO, classification, action.
- **Safety guard:** apply mode must change *only* the K/A tag. A check (in the spirit of the
  #70 guard) re-parses each changed file and asserts that everything except the K/A tag span
  text (and the JPM YAML `ka_importance_*` values) is byte-identical to the pre-apply version.
  Then `python3 scripts/check-wikilinks.py` (0 broken) and `cd site && npm run build` (clean) —
  the edits are intra-file tag rewrites with no link impact and do not touch article slugs.
- **Quiz-bank note:** K/A tags are not part of the quiz-bank's correctness data, but the four
  generated quiz files are regenerated and validated per the project's deploy gate as a final
  step if any question article changed.
- **Idempotent:** re-running `--report` after `--apply` shows every `RESOLVED` tag already in
  canonical form (no further changes); only the flagged residue remains.

## Section 5 — Agent review of the flagged residue

After the mechanical apply, the agent works the flagged list (`NUMBER_NOT_IN_CATALOG`,
`UNPARSEABLE`). For each item:
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
