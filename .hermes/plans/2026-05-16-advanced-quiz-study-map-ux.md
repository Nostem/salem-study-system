# Advanced Quiz and Study Map UX Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Make Advanced Quiz and Study Map obvious learner flows: build/select a set, see how many questions match, start practice.

**Architecture:** Keep the current static Astro + client-side URL-param architecture. Move set-building to `/quiz-v2/`, make `/quiz-v2/play/` a focused practice session, and demote graph/database inspection on `/graph-v2/` behind advanced disclosures. No backend rewrite, no new questions, no breaking legacy deep links.

**Tech Stack:** Astro, TypeScript client scripts, Tailwind utility classes, Playwright tests, existing `buildQuizSession()`/`filterQuestions()` utilities.

---

## Product Principle

Every page has one obvious verb, and every selection rolls up into one visible Start action.

- `/quiz-v2/`: Build a focused set → Start practice.
- `/quiz-v2/play/`: Answer questions → Finish and see score.
- `/graph-v2/`: Choose topic(s) → Start topic practice.
- Raw graph terms, seeds, slugs, IDs, JSON, session IDs, backend language, and edge/node counts belong in `details` disclosures, not default learner UI.

---

## Phase 1: Advanced Quiz becomes the builder

### Task 1: Replace the top of `/quiz-v2/` with a real builder hero

**Objective:** Give the page a zero-configuration Start path and a visible live match count.

**Files:**
- Modify: `site/src/pages/quiz-v2.astro`
- Test: `site/tests/quiz-v2-test.ts`

**Implementation notes:**
- Header copy: `Build a focused practice set from the structured question bank, then start.`
- Add primary link/button: `Start practice — 10 random questions` → `${base}quiz-v2/play/?count=10`
- Add builder controls:
  - Topic select or multi-select using learner-facing topics.
  - Exam year select.
  - Count input, default `10`.
  - Advanced options disclosure: track, reference mode.
- Add live roll-up: `N questions match` and primary button label `Start practice — 10 of N`.
- Disable Start if `N === 0` with copy: `No questions match — remove a filter.`
- Use existing `buildQuizSession()` / filtering logic; do not invent a second selection engine.

**Tests:**
- `quiz-v2/` shows heading `Advanced Quiz` and visible `Start practice`.
- Default Start points to `/quiz-v2/play/?count=10` or equivalent.
- Selecting a year/topic updates the Start URL with `years=`/`topics=` and updates match count.
- Zero-match state disables or blocks Start with clear copy.

### Task 2: Move question browsing into a collapsed picker

**Objective:** Keep question inspection available without making it the primary workflow or spoiling answers by default.

**Files:**
- Modify: `site/src/pages/quiz-v2.astro`
- Test: `site/tests/quiz-v2-test.ts`

**Implementation notes:**
- Wrap existing search/list/detail area in `<details>` titled `Choose specific questions`.
- Add checkboxes or `Add` controls to rows.
- Selected questions roll into the same live summary and Start button using `slugs=`.
- Clicking a row can preview stem/choices, but correct answer and explanation are hidden behind `Show answer` / `Answer and explanation` disclosure.
- Move `slug:` and legacy metadata into `Question details` disclosure.

**Tests:**
- `Choose specific questions` is collapsed by default.
- Opening it and selecting a known question updates Start URL with `slugs=<slug>`.
- Official answer/explanation is not visible before opening `Show answer`.

### Task 3: Delete the old `?session=1` preview panel

**Objective:** Remove the confusing fake session builder from `/quiz-v2/`.

**Files:**
- Modify: `site/src/pages/quiz-v2.astro`
- Test: `site/tests/quiz-v2-test.ts`

**Implementation notes:**
- Remove `#qv2-session-panel`, `renderSessionPanel()`, `parseFiltersFromUrl()` only if no longer needed, and visible `Session ID`, `Seed`, `Filters: {}` copy.
- Keep deep-link `?slug=` support for selecting a preview question.
- If `?session=1` is bookmarked, either ignore it gracefully or redirect behavior to normal builder state.

**Tests:**
- Remove assertions expecting `qv2-session-panel`.
- Assert `Session ID`, `Seed`, and raw JSON filters are not visible on `/quiz-v2/`.

---

## Phase 2: Practice page becomes only practice

### Task 4: Remove builder controls from `/quiz-v2/play/`

**Objective:** Stop making users configure a set after they have already entered a session.

**Files:**
- Modify: `site/src/pages/quiz-v2/play.astro`
- Test: `site/tests/quiz-v2-play-test.ts`

**Implementation notes:**
- Remove the `Advanced study options` form and `Apply options` button.
- Replace with a compact set summary: `10 questions · All years · All topics` or derived from URL params.
- Add `Adjust set` link back to `/quiz-v2/` carrying current filters.
- Keep `/quiz-v2/play/?topics=...`, `?slugs=...`, `?years=...`, `?tracks=...`, `?ref=...`, `?count=...`, `?seed=...` support.

**Tests:**
- Update stale heading expectation from `Study Session` to `Practice`.
- Replace `qv2p-builder` test with builder-page test under `quiz-v2-test.ts`.
- Assert `Apply options` is gone from play page.

### Task 5: Demote session/debug/save controls

**Objective:** Put the active question before internals and make saving understandable.

**Files:**
- Modify: `site/src/pages/quiz-v2/play.astro`
- Test: `site/tests/quiz-v2-play-test.ts`

**Implementation notes:**
- Default visible status should be learner-facing: `Question 1 of 10`, set summary, and save status.
- Move `Session ID`, `Seed`, and raw filter JSON into one collapsed `Session details` disclosure.
- Remove or hide default-visible `Retry saving`, `Submit progress`, and `Checking save status…` controls.
- Keep retry behavior only if needed inside troubleshooting details.

**Tests:**
- `Session ID` and `Seed` are not visible by default.
- `Session details` can be opened and still exposes debug info for tests/troubleshooting if needed.

### Task 6: Add a real finish/results state

**Objective:** Advanced Practice should end like a quiz, not as a save-status sentence.

**Files:**
- Modify: `site/src/pages/quiz-v2/play.astro`
- Test: `site/tests/quiz-v2-play-test.ts`

**Implementation notes:**
- Last question button becomes `Finish & see score`.
- Results view shows `Score: X/Y (Z%)` and pass/fail if applicable.
- Per-question review uses collapsed details for stem/selected/correct/explanation.
- Actions: `Practice again`, `Build a new set`, `View My Progress`.
- Saving is passive: `Saved to My Progress` or `Log in to save progress`.

**Tests:**
- Answer all questions in a seeded two-question session.
- Finish shows score and action links.
- Progress save status is passive and does not require pressing `Submit progress`.

---

## Phase 3: Study Map becomes topic-first

### Task 7: Add topic card primary view

**Objective:** Make Study Map usable without understanding graph terms.

**Files:**
- Modify: `site/src/pages/graph-v2.astro`
- Test: `site/tests/graph-v2-test.ts`

**Implementation notes:**
- Build cards from learner-facing topic nodes with `eligibleQuestionCount > 0`.
- Card fields:
  - Topic title.
  - `N practice questions`.
  - Primary link: `Practice this topic` → `/quiz-v2/play/?topics=<slug>&count=10`.
  - Secondary: `Read wiki page` if available.
  - Checkbox: add to combined practice.
- Search placeholder: `Find a topic`.
- Avoid node/edge/slug/id terms in default card view.

**Tests:**
- Topic cards render.
- Known topic card `Pressurizer Level & Press Control` links to `/quiz-v2/play/?topics=pressurizer-level-and-press-control&count=10`.

### Task 8: Add sticky combined-practice bar

**Objective:** Make multi-topic selection clearly roll up into one Start action.

**Files:**
- Modify: `site/src/pages/graph-v2.astro`
- Test: `site/tests/graph-v2-test.ts`

**Implementation notes:**
- When one or more topics are selected, show sticky/mobile-friendly combine bar:
  - `2 topics · N questions`
  - `Start combined practice`
- Emit `/quiz-v2/play/?topics=a,b&count=<min(20,N)>` if possible. Prefer `topics=` for topic cards to keep handoff consistent.
- Reuse existing builder-selection union logic where practical.

**Tests:**
- Selecting two known topics updates count and bar.
- Combined Start URL includes both topic slugs.

### Task 9: Demote graph inspector behind advanced disclosure

**Objective:** Preserve existing graph power tools without making them the learner default.

**Files:**
- Modify: `site/src/pages/graph-v2.astro`
- Test: `site/tests/graph-v2-test.ts`

**Implementation notes:**
- Wrap current node list, Kind/Edge filters, detail panel, outgoing/incoming edges, visual neighborhood, IDs/slugs, counts, and relationship summaries under `<details>` titled `Explore connections (advanced)`.
- Delete the `How to use the Study Map` manual box.
- Existing tests for node/edge behavior should open advanced disclosure first.
- Keep `/graph-v2/?id=...` deep links working by opening the advanced disclosure or showing selected detail if an id param exists.

**Tests:**
- Advanced inspector is collapsed by default on normal load.
- Deep link `?id=question%3A...` still shows the detail or opens inspector.
- Existing edge/source assertions pass after opening inspector.

---

## Phase 4: Study copy cleanup

### Task 10: Adjust Study hub wording for the improved map

**Objective:** Keep `/study/` aligned with the new flows.

**Files:**
- Modify: `site/src/pages/study.astro`
- Test: `site/tests/study-test.ts`

**Implementation notes:**
- Keep Advanced Quiz card structure.
- Consider changing `Open Study Map →` to `Practice by topic →` while still linking to `/graph-v2/`.
- Keep `Build a custom set →` linking to `/quiz-v2/`.

**Tests:**
- Update labels only if changed.

---

## Verification Commands

Run from repo root unless noted.

```bash
cd /Users/fredm/projects/salem-study-system/site
npm run build
npx playwright test tests/quiz-v2-test.ts tests/quiz-v2-play-test.ts tests/graph-v2-test.ts tests/study-test.ts tests/navigation-test.ts --reporter=line
```

If a manual preview is needed, kill port 4321 before Playwright:

```bash
lsof -ti tcp:4321 | xargs kill -9 2>/dev/null || true
```

Manual smoke:

- `/salem-study-system/quiz-v2/`: default Start visible; filters update count; selecting a specific question creates a `slugs=` session link.
- `/salem-study-system/quiz-v2/play/?count=2&seed=smoke`: no builder form; finish shows score.
- `/salem-study-system/graph-v2/`: topic cards visible; topic Practice link opens play; advanced inspector still works.

---

## Risks / Watchouts

- The current `/quiz-v2/play/` test has a stale `Study Session` heading expectation while the page renders `Practice`. Fix test and page wording together.
- Do not remove URL-param compatibility; many graph and history links depend on `topics=`, `slugs=`, `count=`, and `seed=`.
- Keep question answer preview available, but hidden behind a toggle to avoid pre-spoiling practice.
- Avoid a topic-card wall. Sort by eligible question count, provide search, and consider grouping later if needed.
- Do not change Supabase Edge Functions or schema in this pass.
- Do not stage unrelated local files; use exact paths only.
