# Deploy Pipeline Redesign — Design

**Date:** 2026-06-16
**Status:** Approved (pending spec review)

## Problem

The GitHub Pages deploy (`.github/workflows/deploy.yml`) has accumulated redundancy and
brittleness that caused three consecutive deploy failures after recent exam ingestions:

1. **Committed build artifacts + a staleness gate.** Four generated files
   (`site/src/data/quiz-bank.json`, `quiz-bank-v2.json`, `data/quiz-import/audit-all.json`,
   `supabase-staging-all.json`) are committed to git *and* re-verified in CI with
   `git diff --exit-code`. Any source change without a manual regenerate+commit fails the deploy.
   This was the root cause of two of the three failures.
2. **Hardcoded count snapshots.** Python and Playwright tests assert exact question counts
   (`question_count == 599`, per-topic eligible counts) that go stale on every ingestion.
3. **Duplication across jobs.** The `smoke` and `build` jobs each checkout, `setup-node`, and
   `npm ci`; and **each runs its own Astro build** (`smoke` → `build:astro`, `build` → full build).
   Two builds and two installs per deploy.
4. **Non-gating noise in the deploy path.** `npm audit --continue-on-error` runs on every deploy
   but never blocks it.

## Goals

- Eliminate the "forgot to regenerate" failure class structurally.
- Make count-based tests self-updating while still catching real regressions.
- One checkout, one install, one build, one data-generation command — no redundancy.
- Preserve all real safety: data validation, Python/Node unit tests, typecheck, UI smoke.

## Non-Goals

- Changing what the tests *mean* (we keep validation + the same test layers).
- Reworking the quiz/graph features themselves.
- Changing the deploy target (still GitHub Pages from `main`).

## Design

### 1. One canonical data generator

New script **`scripts/build_quiz_data.py`** — a thin orchestrator that runs the existing five
steps in order and exits non-zero if validation fails:

```
audit        -> data/quiz-import/audit-all.json
stage        -> data/quiz-import/supabase-staging-all.json
build-static -> site/src/data/quiz-bank.json
build-struct -> site/src/data/quiz-bank-v2.json
validate     (site/src/data/quiz-bank-v2.json against site/public/exam-images)
```

It is the single source of truth for regenerating quiz data, called by CI, the npm hooks, and any
DB-staging run. No behavior change to the underlying scripts — just one entrypoint instead of five
copy-pasted command lines.

### 2. Generated data → build artifacts

- `git rm --cached` the four generated files and add them to `.gitignore`.
- Add npm lifecycle hooks in `site/package.json` so **local** workflows always have fresh data:
  - `predev`, `prebuild`, and a `pretest:node` / pre-UI hook → run
    `python3 ../scripts/build_quiz_data.py` (from `site/`, the script lives at repo root).
- Result: the **"Verify generated quiz data is current" step and its `git diff --exit-code` gate
  are deleted entirely.** The data is regenerated every run, so it cannot be stale. PR diffs stop
  carrying large regenerated JSON.

**Avoiding double-generation in CI.** CI generates the data **once** via an explicit step (job step
5 below) which is also the validation gate. So that the build step doesn't regenerate a second time
through its `prebuild` hook, the CI build step invokes the no-hook scripts directly
(`npm run build:astro && npm run build:search`) rather than `npm run build`. The `prebuild`/`predev`
hooks therefore serve **local dev only**; CI's explicit step is the single generation. (Equivalently,
a `SKIP_DATA_GEN` guard could short-circuit the hook in CI — pick whichever is simpler at
implementation time.)

**Consideration (resolved):** nothing outside CI consumes `supabase-staging-all.json` from git; a
future DB-staging run regenerates it via `build_quiz_data.py` first.

### 3. Counts derived from data, not hardcoded

- Extract the page's practice-eligibility + per-topic counting logic into one shared module under
  `site/src/utils/` (e.g. `quiz-eligibility.ts`), imported by **both** `quiz.astro` and the
  Playwright tests. Tests compute the expected number from the same `quiz-bank.json` the page
  renders, then assert the UI matches → never stale, still a real UI↔data regression check.
- `tests/test_quiz_bank_builder.py`: assert `summary.question_count == len(bank["questions"])`
  (self-consistent) instead of a hardcoded literal. Keep the specific content assertions
  (topic titles, q82/q73/q23 enrichment) — those are stable and valuable.
- Graph/quiz-v2 bank-count assertions: derive from the loaded bank the same way.

### 4. Workflow: 3 jobs → 2

**Job `verify-build`** (replaces `smoke` + `build`), steps in order:

1. Checkout
2. Setup Node (npm cache) + Setup Python (pip cache)
3. `npm ci` (in `site/`)
4. Install Playwright chromium (cached)
5. **Generate + validate quiz data** — `python3 scripts/build_quiz_data.py`
6. Python unit tests — `python3 -m unittest discover -s tests` (drop `-v`)
7. Node tests — `npm run test:node`
8. Typecheck — `npm run check`
9. **Build once** — `npm run build` (astro + pagefind); consumes the data from step 5
10. UI smoke — Playwright against the step-9 build (a `test:ui:smoke` variant that does **not**
    rebuild). This requires Playwright's `webServer` (in `playwright.config`) to **serve the
    existing `dist/`** (e.g. `astro preview`) instead of building its own copy; confirm/adjust the
    config so the smoke run reuses step 9's build.
11. Upload pages artifact

**Job `deploy`** — `needs: [verify-build]`, unchanged (owns the `github-pages` environment).

### 5. Removed / moved

- **Deleted:** the quiz-data staleness step + `git diff --exit-code`; the duplicate Astro build;
  the duplicate checkout/`npm ci`; the `-v` verbose flag.
- **`npm audit`:** dropped from the deploy path entirely (rely on Dependabot / manual review).

## Trade-offs

- Single sequential job instead of two parallel ones. Net wall-clock is ~unchanged (smoke already
  rebuilt and was the long pole), and we remove a redundant build — likely a small net win.
- Generated data leaves git history. Mitigated by the canonical generator + prebuild hooks; the
  data is fully derived and deterministic.
- The shared eligibility util is a small refactor of `quiz.astro`, but it removes a whole class of
  brittle tests and de-duplicates logic that was effectively copied into the tests.

## Migration / Implementation order

1. Add `scripts/build_quiz_data.py`; confirm it reproduces the current 4 files byte-for-byte.
2. Extract `site/src/utils/quiz-eligibility.ts`; refactor `quiz.astro` to use it; update tests to
   derive counts from it. Verify the previously-failing tests pass.
3. `git rm --cached` the 4 files; add `.gitignore` entries + npm prebuild/predev/pretest hooks.
4. Rewrite `deploy.yml` to the 2-job shape; add `test:ui:smoke` no-rebuild variant.
5. (Optional) `python3 -m unittest` self-consistency for `question_count`.
6. Verify end-to-end locally (run the exact CI command sequence) before opening the PR.

## Verification

- Local dry-run of the full `verify-build` step sequence passes from a clean checkout (artifacts
  absent → generated by hook).
- The 6 previously-failing Playwright tests + 103 Python + 43 Node tests pass.
- A deliberate stale/invalid edit (e.g. break a `✓ Correct.` marker) still fails the validator.
- Deploy succeeds on merge to `main`.
