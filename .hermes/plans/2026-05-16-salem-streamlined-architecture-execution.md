# Salem Streamlined Architecture Execution Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Apply the research recommendations that improve learner UX, search quality, release reliability, quiz/session correctness, and backend maintainability while preserving the current Astro/GitHub Pages + Supabase architecture.

**Architecture:** Keep Astro static site on GitHub Pages, Pagefind static search, and Supabase Auth/Postgres/Edge Functions. Public PDFs remain on the site even though they are large; source-reference speed is a non-negotiable study requirement. Do not migrate hosting or remove source PDFs. Prefer progressive disclosure: learner UI shows one obvious next action; internals stay behind details/debug disclosures.

**Tech Stack:** Astro v6, TypeScript, Tailwind CSS v4, Pagefind, Playwright, Node 24 `node:test`, Python pytest, Supabase Edge Functions, Postgres migrations/RLS, GitHub Actions Pages deploy.

---

## Non-negotiables and scope boundaries

- Keep public/source PDFs available on the site.
- Keep `/study/` as the canonical learner entry point.
- Keep real NRC/imported questions only; do not invent synthetic questions.
- Preserve legacy/deep links where practical:
  - `/quiz/`
  - `/quiz-v2/`
  - `/quiz-v2/play/?topics=...`
  - `/quiz-v2/play/?slugs=...`
  - `/quiz-v2/review/`
  - `/graph-v2/?id=...`
  - `/history/`
- Do not expose secrets, Supabase project refs, DB URLs, tokens, anon keys, service-role keys, passwords, private create-account slug values, or raw invite codes.
- Stage exact files only. Do not use `git add .`.
- Backend deploy is separate from GitHub Pages deploy. Do not assume pushing `main` deploys Supabase migrations/functions.

---

## Phase 1 — Document and release gate foundation

### Task 1: Commit this architecture plan

**Objective:** Preserve the revised recommendations, including the PDF exception.

**Files:**
- Create: `.hermes/plans/2026-05-16-salem-streamlined-architecture-execution.md`
- Modify: `.gitignore` only if needed to intentionally allow this plan path.

**Steps:**
1. Ensure this plan explicitly says public PDFs stay on-site.
2. Confirm no secrets appear in the plan.
3. Stage exact plan file only when committing.

**Verification:**
```bash
git diff -- .hermes/plans/2026-05-16-salem-streamlined-architecture-execution.md
```

### Task 2: Add release-gate scripts

**Objective:** Make the important test commands discoverable and runnable without remembering long command strings.

**Files:**
- Modify: `site/package.json`
- Optionally create: `scripts/release_gate.py` or `scripts/check_release_gate.sh`

**Required scripts:**
- `test:node` — run Node logic tests:
  - `site/tests/quiz-v2-session.node.test.ts`
  - `site/tests/quiz-v2-backend-session.node.test.ts`
  - `site/tests/quiz-v2-review.node.test.ts`
  - `site/tests/quiz-v2-progress.node.test.ts`
  - `site/tests/fsrs-whole-question.node.test.ts`
- `test:ui:smoke` — build and run focused Playwright app/navigation tests.
- `test:quiz` — run node quiz tests plus the root Python quiz-bank tests.

**Recommended commands:**
```json
{
  "test:node": "node --test tests/quiz-v2-session.node.test.ts tests/quiz-v2-backend-session.node.test.ts tests/quiz-v2-review.node.test.ts tests/quiz-v2-progress.node.test.ts tests/fsrs-whole-question.node.test.ts",
  "test:ui:smoke": "npm run build && npx playwright test tests/study-test.ts tests/navigation-test.ts tests/history-test.ts tests/quiz-test.ts tests/quiz-v2-test.ts tests/quiz-v2-play-test.ts tests/quiz-v2-review-test.ts tests/graph-v2-test.ts --reporter=line"
}
```

For `test:quiz`, if cross-directory commands are awkward in npm, create a root script:
```bash
python3 -m pytest tests/test_quiz_bank_builder.py tests/test_structured_quiz_bank_builder.py tests/test_structured_quiz_bank_validator.py -q
cd site && npm run test:node
```

**Verification:**
```bash
cd site
npm run test:node
npm run test:ui:smoke
cd ..
python3 -m pytest tests/test_quiz_bank_builder.py tests/test_structured_quiz_bank_builder.py tests/test_structured_quiz_bank_validator.py -q
```

### Task 3: Add GitHub Actions check job before deploy

**Objective:** Stop deploying if focused checks fail.

**Files:**
- Modify: `.github/workflows/deploy.yml`

**Implementation notes:**
- Add a `check` job before `build` or fold checks into `build` before artifact upload.
- Keep Pages deploy on `main` push/manual dispatch.
- Use `npm ci` from `site`.
- Run at least:
  - Python quiz/data tests if Python deps are available.
  - `npm run test:node`.
  - `npm run build`.
- Playwright smoke in CI is valuable but can be slower; include focused smoke if runtime is acceptable. If too slow, keep it as a separate manual workflow.

**Verification:**
```bash
git diff -- .github/workflows/deploy.yml
```

---

## Phase 2 — Search quality and accessibility

### Task 4: Scope Pagefind indexing

**Objective:** Search should index meaningful content, not repeated nav/modals/app chrome.

**Files:**
- Modify: `site/src/layouts/ArticleLayout.astro`
- Modify: `site/src/layouts/BaseLayout.astro` or route-level pages if necessary
- Modify: app routes as needed: `study.astro`, `quiz.astro`, `quiz-v2.astro`, `graph-v2.astro`, `history.astro`

**Implementation notes:**
- Add `data-pagefind-body` around article/page primary content.
- Add `data-pagefind-ignore` to:
  - sidebar
  - mobile nav
  - search modal
  - contact modal
  - repeated StudyLayout navigation
  - debug/session details
  - graph inspector controls if not useful for search
- Add metadata where easy:
  - title
  - content section/category
  - exam year for exam pages
  - route type for study pages

**Verification:**
```bash
cd site
npm run build
# Expected: Pagefind warning about missing data-pagefind-body should disappear.
```

### Task 5: Improve search modal accessibility and safe rendering

**Objective:** Make global search safer and more accessible.

**Files:**
- Modify: `site/src/components/SearchModal.astro`
- Test: `site/tests/navigation-test.ts` or new `site/tests/search-test.ts`

**Implementation notes:**
- Add `role="dialog"`, `aria-modal="true"`, and an accessible label.
- Restore focus to the search trigger on close.
- Add basic focus trapping or at least keep focus in the modal while open.
- Build search result DOM nodes with `document.createElement()` instead of template-string `innerHTML`, or escape title/excerpt/url before assigning.
- Preserve Cmd/Ctrl+K and Escape behavior.

**Tests:**
- Open search by button and by keyboard shortcut.
- Search input receives focus.
- Escape closes search.
- First result enter behavior still works if existing tests cover it.

---

## Phase 3 — Advanced Quiz and Practice UX

### Task 6: Make `/quiz-v2/` the real Advanced Quiz builder

**Objective:** Fix the custom-set-to-session gap.

**Files:**
- Modify: `site/src/pages/quiz-v2.astro`
- Test: `site/tests/quiz-v2-test.ts`

**Implementation notes:**
- Add `Start practice — 10 random questions` hero.
- Add builder controls for topic, year, count, and advanced options.
- Show live match count and Start URL.
- Primary CTA label pattern: `Start practice — 10 of N`.
- Use `filterQuestions()`/`buildQuizSession()` rather than adding a parallel engine.
- Keep `?slug=` deep link preview support.

**Tests:**
- Default Start visible and links to play route.
- Topic/year/count update match count and URL.
- Zero-match state is clear.

### Task 7: Collapse question browsing and hide answer reveal by default

**Objective:** Keep source preview available without making it the primary flow or spoiling practice.

**Files:**
- Modify: `site/src/pages/quiz-v2.astro`
- Test: `site/tests/quiz-v2-test.ts`

**Implementation notes:**
- Existing 599-row list moves into `Choose specific questions` disclosure.
- Selected question checkboxes/add buttons roll into the same Start action via `slugs=`.
- Correct answer/explanation goes behind `Show answer` disclosure.
- `slug:` and legacy metadata go behind `Question details`.
- Remove learner-visible `Session ID`, `Seed`, raw JSON, deterministic/backend copy from this page.

**Tests:**
- Picker collapsed by default.
- Selecting known question creates `slugs=` Start URL.
- Official answer hidden until `Show answer` is opened.

### Task 8: Simplify `/quiz-v2/play/` into only Practice

**Objective:** Once a learner enters a session, they should answer questions and finish, not configure filters.

**Files:**
- Modify: `site/src/pages/quiz-v2/play.astro`
- Test: `site/tests/quiz-v2-play-test.ts`

**Implementation notes:**
- Remove `Advanced study options` form and `Apply options` button from play page.
- Add compact set summary and `Adjust set` link back to `/quiz-v2/` with current filters.
- Move Session ID, Seed, and filters into collapsed `Session details`.
- Hide/remove default-visible Retry saving/Submit progress/Checking save status.
- Add final results state: score, review, Practice again, Build a new set, My Progress.
- Keep all existing URL params supported.

**Tests:**
- Heading is `Practice`, not stale `Study Session`.
- Builder form no longer visible.
- Debug internals hidden by default.
- Answer all questions in a 2-question session, finish, see score/actions.

---

## Phase 4 — Study Map topic-first UX

### Task 9: Add topic-card primary view

**Objective:** Make Study Map usable without understanding graph terms.

**Files:**
- Modify: `site/src/pages/graph-v2.astro`
- Test: `site/tests/graph-v2-test.ts`

**Implementation notes:**
- Cards from learner-facing topic nodes with eligible questions.
- Card fields:
  - topic title
  - `N practice questions`
  - `Practice this topic`
  - `Read wiki page` when available
  - checkbox/add for combined practice
- Default search placeholder: `Find a topic`.
- Avoid node/edge/id/slug terms in default view.

**Tests:**
- Topic cards visible by default.
- Known topic links to `/quiz-v2/play/?topics=...&count=10`.

### Task 10: Add combined-topic practice bar

**Objective:** Multiple topic selections should visibly roll up into one Start action.

**Files:**
- Modify: `site/src/pages/graph-v2.astro`
- Test: `site/tests/graph-v2-test.ts`

**Implementation notes:**
- Sticky/mobile-friendly bar appears after one selection.
- Text: `2 topics · N questions`.
- CTA: `Start combined practice`.
- Prefer `topics=a,b` handoff for topic cards.

**Tests:**
- Selecting two known topics updates bar/count.
- Start URL includes both topic slugs.

### Task 11: Demote graph inspector

**Objective:** Preserve power-user graph functions without making them the learner default.

**Files:**
- Modify: `site/src/pages/graph-v2.astro`
- Test: `site/tests/graph-v2-test.ts`

**Implementation notes:**
- Wrap current node list, kind/edge filters, details, incoming/outgoing edges, graph counts, IDs/slugs, visual neighborhood under `Explore connections (advanced)`.
- Keep `/graph-v2/?id=...` deep links working. If `id` is present, open the advanced disclosure automatically.
- Delete or shorten the top `How to use Study Map` manual once cards make the flow obvious.

**Tests:**
- Advanced inspector collapsed by default.
- Existing graph assertions pass after opening advanced inspector.
- Deep links still work.

---

## Phase 5 — Data payload and HTML-size cleanup, without removing PDFs

### Task 12: Move large app data toward static JSON where safe

**Objective:** Reduce multi-megabyte HTML for app pages while keeping public PDFs on-site.

**Files:**
- Likely modify: `site/src/pages/quiz-v2.astro`
- Likely modify: `site/src/pages/quiz-v2/play.astro`
- Likely modify: `site/src/pages/quiz-v2/review.astro`
- Likely modify: `site/src/pages/graph-v2.astro`
- Possibly create: `site/public/data/*.json` generation scripts

**Implementation notes:**
- Do this after UX simplification to avoid fighting moving targets.
- Start with `graph-v2` or quiz-v2 session meta, whichever gives the best size reduction with lowest risk.
- Do not remove PDFs.
- Do not break Pagefind or source links.
- Keep build deterministic.

**Verification:**
```bash
cd site
npm run build
python3 - <<'PY'
import os, glob
for p in sorted(glob.glob('dist/**/*.html', recursive=True), key=os.path.getsize, reverse=True)[:10]:
    print(f'{os.path.getsize(p)/1024/1024:.2f} MiB {p}')
PY
```

---

## Phase 6 — Backend hardening and contract tests

### Task 13: Add shared Edge Function helpers

**Objective:** Reduce duplicated auth/CORS/env/client code and make security changes centralized.

**Files:**
- Create: `supabase/functions/_shared/http.ts`
- Create: `supabase/functions/_shared/auth.ts`
- Create: `supabase/functions/_shared/client.ts`
- Modify functions incrementally, one function group at a time.

**Implementation notes:**
- Helpers should cover:
  - `jsonResponse`
  - `corsHeadersFor(req)` with allowed origin support
  - `requireEnv`
  - bearer token parsing
  - `requireUser(req, admin)`
  - `createAdminClient()`
- Start with non-auth or low-risk functions only if refactor risk is high.
- Keep response shapes stable.

**Tests:**
- Add Deno/Node-compatible helper tests if feasible.
- Existing frontend tests should keep passing.

### Task 14: Add backend contract tests or smoke fixtures

**Objective:** Catch request/response drift for Edge Functions.

**Files:**
- Create: `supabase/functions/_shared/*.test.ts` or `site/tests/backend-contract.node.test.ts`
- Possibly add scripts in `site/package.json` or root script.

**Coverage targets:**
- `create-quiz-v2-session` expected payload/response shape.
- `submit-quiz-results` payload validation and choice-order mapping helpers.
- FSRS helper behavior.

**Implementation notes:**
- Avoid real Supabase credentials in tests.
- Prefer pure helper extraction so tests do not need a network/database.

### Task 15: Document backend deploy workflow

**Objective:** Make migrations/functions deployment explicit and separate from Pages deploy.

**Files:**
- Create or modify: `docs/backend-deploy.md`
- Possibly modify: `README.md`

**Must include:**
- GitHub Pages deploy does not deploy Supabase functions/migrations.
- Required commands with placeholders only.
- Secrets must be provided through env/CLI, never printed.
- Verification pattern: expected validation errors from minimal POST prove function reachability.

---

## Phase 7 — Quiz/session correctness and review consistency

### Task 16: Add frontend/backend session golden-vector tests

**Objective:** Prevent drift between frontend session builder and backend session creation logic.

**Files:**
- Create: `site/tests/quiz-v2-session-golden.node.test.ts` or similar
- Possibly create fixtures under `site/tests/fixtures/`
- Possibly refactor pure helpers from Edge Function into shared testable module

**Implementation notes:**
- Fixed seed + filters should produce fixed session ID/slugs.
- If importing Deno Edge Function logic into Node is awkward, duplicate a backend fixture test around extracted pure helper functions.
- This can precede or accompany shared module extraction.

### Task 17: Align quiz-result review scheduling with FSRS/event model

**Objective:** Make persisted review behavior consistent.

**Files:**
- Modify: `supabase/functions/submit-quiz-results/index.ts`
- Modify tests/contracts added above
- Possibly modify: `site/src/utils/quiz-v2-progress.ts` / review copy if user-facing behavior changes

**Implementation notes:**
- `submit-question-review` already uses FSRS-style helper.
- `submit-quiz-results` should create/update review state through a compatible model or record `question_review_events` with `source='quiz_result'`.
- Define correctness-to-rating mapping carefully. Example: correct => `good`; incorrect => `again` or `hard` depending on desired behavior.
- Avoid schema changes unless necessary.

---

## Phase 8 — Final verification and deploy

### Task 18: Run full verification

**Commands:**
```bash
cd /Users/fredm/projects/salem-study-system
python3 -m pytest tests/test_quiz_bank_builder.py tests/test_structured_quiz_bank_builder.py tests/test_structured_quiz_bank_validator.py -q
cd site
npm run test:node
npm run test:ui:smoke
npm run build
```

If backend function code changed, run Deno/type checks if available and document any local Supabase smoke steps separately.

### Task 19: Stage exact files, commit, push, watch Pages deploy

**Commands:**
```bash
git status --short --branch
git diff --stat
# git add exact changed files only
git diff --cached --stat
git commit -m "feat: streamline study architecture and release checks"
git push origin main
gh run list --repo Nostem/salem-study-system --branch main --limit 5
gh run watch <run-id> --repo Nostem/salem-study-system --exit-status
```

**Manual live smoke:**
- `/salem-study-system/study/`
- `/salem-study-system/quiz-v2/`
- `/salem-study-system/quiz-v2/play/?count=2&seed=smoke`
- `/salem-study-system/graph-v2/`
- global search modal
- source PDF links still work

---

## Execution order recommendation

Do not attempt every phase in one huge commit if avoidable. Preferred commits:

1. `docs: add streamlined architecture execution plan`
2. `test: add release gate scripts`
3. `fix: scope Pagefind search content`
4. `feat: streamline advanced quiz practice flow`
5. `feat: make study map topic-first`
6. `perf: reduce app page html payloads`
7. `refactor: share Supabase edge helpers`
8. `test: add quiz session contract coverage`

If time is limited, prioritize phases 1–4 first. They produce the most visible learner improvement and release safety.
