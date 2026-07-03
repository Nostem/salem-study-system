# Full UX + Code + Database Audit — 2026-07-03

Two-phase audit: (1) a browser-harness walkthrough of every major user path,
(2) a code and database review of everything that changed since the
2026-06-10 audit (docs/audit-2026-06-10.md). The live Vercel site is not
reachable from the audit sandbox (egress policy), so the walkthrough drove the
**identical production build** (`vercel.json` build command, `PUBLIC_BASE_PATH=/`)
served via `astro preview`, in Chromium at 1440×900 and 390×844, capturing
screenshots plus console errors, failed requests, and DOM metrics per page.
Anything requiring live Supabase (login success, saving) shows its
network-failure path here; those states were audited from code.

Every finding below was verified against the running page or the source —
review-agent claims that did not survive verification are listed at the end.

---

## Phase 1 — UI/UX walkthrough

### Broken (fix first)

**UX-1. Mobile hamburger is dead on every study-flow page.**
`GlobalHeader.astro:9` hardcodes `onclick="openMobileNav()"`, but the function
is defined in `MobileNav.astro`, which only `ArticleLayout` includes.
On `/study/`, `/quiz/`, `/quiz-v2/*`, `/graph-v2/`, `/history/` the tap throws
`ReferenceError: openMobileNav is not defined` and nothing opens (verified:
screenshot after tap is unchanged). The pill nav row partially mitigates, but a
visible control that does nothing is worse than no control.
*Fix:* mount `MobileNav` from `BaseLayout` (it already hosts the header), or
have GlobalHeader hide the hamburger when no drawer exists.

**UX-2. Search result excerpts render literal `<mark>` tags.**
Pagefind excerpts are HTML (`…<mark>Reactor</mark> <mark>Coolant</mark>…`) but
`SearchModal.astro` assigns them via `textContent`, so every result shows raw
tag soup (screenshot 08). Flagship feature, every query.
*Fix:* split the excerpt on `<mark>`/`</mark>` and build text nodes +
`<mark>` elements (keeps the XSS-safety of textContent; do NOT switch to raw
innerHTML since excerpts derive from article content).

**UX-3. Every article page throws `Highlighter: required elements not found`.**
`highlighter.ts` throws when `#edit-toggle` is absent — which is always (the
toggle was never shipped; the related tests were skipped in June for exactly
this reason). A thrown error on every wiki/tech-spec/exam page load pollutes
the console and aborts the rest of that module.
*Fix:* return early instead of throwing; or remove the maintainer highlighter
from the public bundle entirely (it also ships its UI + script to every
visitor who can never use it).

**UX-4. Guest funnel dead-ends at a login wall.**
`/study/` invites guests ("Browsing as a guest…", big **Start Quick Quiz**,
**Run 10-question set**) but every one of those CTAs lands on the hard
"Log in to use Quick Quiz." wall — while a fully working logged-out practice
mode exists at `/quiz-v2/play/`. A guest's first minute: promise → wall.
*Fix:* on the wall, add "Try a practice set without an account →
/quiz-v2/play/" (and consider pointing guest CTAs there directly). Also:
"Contact / Feedback form" in the wall/login/history copy is plain text —
make it open the feedback modal (`#contact-trigger`).

**UX-5. Mobile header is cramped/broken at 390px.**
Brand text truncates into the ⌘K chip, "Log in" wraps to two lines, and the
⌘K search chip is meaningless on touch (screenshots 14/15).
*Fix:* collapse brand to the mark, replace the ⌘K chip with a search icon on
small screens, prevent button wrap. Also `/systems/…` articles have a 20px
horizontal overflow at 390px (wide table) — the table wrapper needs
`overflow-x: auto` on mobile.

### Confusing (where users get lost)

**UX-6. Study Map is a 250-card wall.**
Above the fold it's good (topic search, question counts, Practice/Read/Add).
Below: ~15,600px of visually identical cards, systems/EOPs/TS/abnormals/admin
interleaved with no section headers, no collapse, no "top N by weakness".
Choice paralysis is the failure mode for the page whose job is "choose".
*Fix:* group into collapsible sections (Systems / EOPs / Abnormals /
Tech Specs / Procedures / Admin), default-collapsed after the first, keep the
search box sticky.

**UX-7. Article titles render twice.**
Every wiki page shows the title as the page heading and then again as the
first markdown H1 (screenshots 09/10, worse on mobile where "RCS" ×2 spends a
full screen). *Fix:* strip the leading H1 from rendered markdown (the
frontmatter title already drives the heading), or don't render a layout
heading.

**UX-8. The "Connections" mini-graph on dense articles is a hairball.**
On `/systems/reactor-coolant-system/` the local graph renders hundreds of
nodes/edges in a 390px box — pure ink, zero information (screenshot 09). Fine
on small pages (exam question pages look good). *Fix:* cap the local graph to
1-hop neighbors with a node limit (~25) and a "open full map" link.

**UX-9. Home "Concepts — 0 ARTICLES — Open ›" is a shipped dead end.**
*Fix:* hide empty sections (or seed the section).

**UX-10. Two quiz systems are visible and the nav conflates them.**
`/quiz-v2/` self-describes as "COMPATIBILITY BUILDER · legacy" yet the header
pill "Quick Quiz" highlights while you're on it; `/quiz-v2/play/` titles
itself "Practice · preview works without login" while living under the
Quick Quiz pill. Learners can't tell which is the real flow (see also C-1).

**Polish:** "▶ ▶ Show Answer & Explanation" doubles the disclosure glyph
(literal ▶ inside `<summary>`); Google Fonts is a render-blocking external
request (self-host the three families); the legacy `/graph/` page is still
shipped and reachable.

### What's working well

Study hub onboarding ("First 5 minutes" guide, guest banner), the gated-page
messaging on `/quiz/` and `/history/`, login error handling (distinguishes
bad credentials from network failure), theme toggle (no FOUC, persists across
reload), contact modal (auto-attaches page context), tech-spec content design
(LCO callouts, exam-coverage callouts with color-coded times), search
relevance and speed, exam-question pages (clean layout, honest per-distractor
sourcing).

Open-issue cross-check from the walkthrough: **#74** (PDF links to top) still
outstanding — links sit at y≈9,800 of a ~9,900px page; **#75** (scrollbar
size) not addressed; **#8** (answers changeable after answering) confirmed and
root-caused below (C-2).

---

## Phase 2 — Code + database review

### Critical / high

**C-1. Both quiz engines ship the entire question bank on every quiz page.**
Verified in the built artifact: `/quiz/index.html` = **5.4 MB** (whole
`quiz-bank.json` inlined as JSON, parsed synchronously at load);
`/quiz-v2/play/index.html` = **7.8 MB**, with all ~900 questions pre-rendered
as hidden DOM — **66,335 DOM nodes** measured on the play page (also on
`/quiz-v2/` and `/quiz-v2/review/`). A 10-question session pays a ~6–8 MB
download + parse + layout every visit, uncacheable apart from the page.
*Fix (highest-leverage change in the codebase):* serve a slimmed bank as a
hashed static JSON asset fetched at runtime (cacheable), render only the
active session's questions, and drop fields the client never reads. This
collapses UX-10, C-1, and most of the mobile sluggishness at once.

**C-2. Feedback-mode answers never lock (= issue #8).**
`quiz.astro:573` `selectAnswer()` unconditionally overwrites
`state.answers` and re-renders; after "Incorrect" you can click the right
answer and the *saved attempt records the corrected answer*. Corrupts scoring
and the FSRS/mastery signal. *Fix:* in feedback mode, ignore `selectAnswer`
once the question is answered.

**C-3. Cross-set re-submission zeroes learner state (regression from the
June idempotency fix — introduced by that audit's own change).**
`submit-quiz-results/index.ts:394-398` loads existing `user_question_state`
only for the **new** submission's question ids, but the reconcile loop
iterates prior ids too (`:411`). A question present in the prior attempts but
absent from the resubmission gets `existing = undefined` → baselines 0 →
`attempts=0, mastery='new'` written, wiping cumulative state earned in other
sessions. *Fix (one line):* look up
`[...new Set([...questionIds, ...priorAttemptCounts.keys()])]`.

**C-4. quiz-history ships dead snapshot weight.**
`quiz-history/index.ts:233` selects the full `question_snapshot` JSONB —
including every choice's text and per-choice explanations — but its own
snapshot type has no `choices` field and the code never reads them; it also
re-fetches the live `questions` join for the same rows. 50 sessions × N
questions × 4 choices of dead payload per history load, plus double-fetch of
`explanation_text`/`title`. *Fix:* stop storing `choices` in the snapshot
(preferred — shrinks the table too) or select only needed JSON paths.

### Medium

**C-5. Multi-statement submit is not atomic.** On re-submission,
`submit-quiz-results` deletes prior snapshots/attempts *before* inserting new
ones, across ~5 sequential statements with no transaction. A mid-way failure
leaves the session half-written with the prior good data already gone.
*Fix:* move the delete/insert/upsert sequence into one `security definer`
plpgsql RPC so Postgres wraps it in a transaction.

**C-6. Quiz path still clobbers FSRS scheduling.** The June pass unified
*mastery*, but `submit-quiz-results:156` still writes the crude 1/3/14-day
`next_review_at` while leaving FSRS stability/difficulty untouched — quiz
answers perturb the review queue that `submit-question-review` carefully
schedules. *Fix:* pick one owner of `next_review_at` (route quiz results
through the FSRS scheduler as good/again, or don't touch scheduling from the
quiz path when FSRS state exists).

**C-7. Seeded replays aren't reproducible.** `quiz.astro:743-746` always
loads personalization state and applies it even when the URL carries a
`seed`; bucket ordering depends on mastery + `Date.now()`, so a "replay this
exact quiz" link yields different questions later. *Fix:* bypass
personalization when a URL seed is present.

**C-8. The canonical data build reads the whole wiki 3×.**
`build_quiz_data.py` shells out to 5 CLIs; `audit`, `stage`, and
`build-static` each do a full `rglob("*.md")` + read of ~1,465 files, and the
exam-question set is parsed twice (verified rglob sites:
`exam_question_import.py:548,607`, `build_static_quiz_bank.py:47`). This runs
on every CI build, `predev`, and `prebuild`. *Fix:* single in-process
`build_all()` that parses once and threads the indexes through.

**C-9. `split_ufsar.py` silently overwrites chapters on slug collision.**
Two bookmarks that differ only in punctuation produce the same
`ch-<slug>.pdf`; the second write clobbers the first while
`chapter-index.json` still lists both titles pointing at one file — index and
disk silently disagree. *Fix:* dedupe slugs (suffix or bookmark index) and
assert uniqueness before writing.

**C-10. Helper drift across the frontend.** `mulberry32` ×3, `escapeHtml` ×3
(the `history.astro` copy doesn't escape `'` while `quiz.astro` does),
`isPracticeEligible` ×2, base-URL trailing-slash snippet ×~10. This drift is
how C-2-class bugs breed. *Fix:* shared utils module.

### Low (verified, worth batching)

- `copy-pagefind-version.mjs` `rmSync(target)` has no `target !== source`
  guard — a misconfigured `PUBLIC_PAGEFIND_ASSET_DIR=pagefind` deletes the
  pagefind output before copying.
- `build_ka_catalog.py` (trickiest new parser: `derive_ka`,
  `parse_number_name`, vendor recovery) has no unit tests;
  `build_ka_index.py:27` unguarded `.group(1)` can abort the whole build on
  one malformed row.
- `audit_ka_tags.py --apply` rewrites by first-substring-match
  (`content.replace(body, canonical, 1)`) — can hit the wrong pipe segment;
  replace by segment index.
- `auth_rate_limit` trim trigger runs an unindexed `attempted_at` delete on
  every insert (fine at current volume; add an index or move to scheduled
  trim if auth traffic grows).
- Redaction isn't honored for snapshotted history (`isHistorySafeSnapshot`
  can never fire since only non-redacted questions are snapshotted; a later
  redaction doesn't reach stored snapshots). Bounded (RLS-scoped to the user
  who already saw it) but decide deliberately.
- Snapshots omit `question_topics`, so weak-topic stats drop questions whose
  live rows are later deleted.
- Duplicate submitted slugs → opaque 500 (unique-constraint); reject with a
  400 up front.
- `updateSummary` re-filters the whole in-memory bank on every keystroke in
  the count field (debounce); `renderQuestion` re-queries ~8 elements per
  render (cache refs).
- macOS-only default `psql` path in `supabase_import_exam.py`
  (`shutil.which("psql")` instead); hardcoded-path/no-argparse CLI style in
  the new `build_ka_*`/`build_system_map`/`split_ufsar` scripts.
- `history.astro` analytics tiles render as all-`—`/0 when the Edge Function
  omits optional summary fields — indistinguishable from real zeros; hide the
  block instead.

### Database summary

Index coverage for current query patterns is adequate (history list →
`quiz_sessions_user_completed_idx`; prior-attempt lookup → partial unique
`question_attempts_session_question_idx`; state lookups → PK prefix). No RLS
gaps found in new columns/tables; service-role-only write model consistently
enforced. The real DB issues are the snapshot payload/storage (C-4), submit
atomicity (C-5), and the rate-limit trim scan (low). Watch JSONB/TOAST growth
on `quiz_session_questions.question_snapshot` — dropping `choices` from the
snapshot addresses it.

### Verified-good since June

CORS-on-success reflection with `Vary: Origin` is correct across all 12 edge
functions; invite-signup TOCTOU fix + rate limiting hold up; snapshot design
correctly lets history survive question edits/deletion with graceful
fallback; auth session refresh for long quizzes (heartbeat + refresh-within-
60s) is genuinely well done; sync reconcile SQL is transaction-wrapped with
post-apply count assertions; `check-static-asset-links.mjs` has a smart
fail-closed guard.

### Review-agent claims rejected during verification

- "quiz-v2 play shows no choices" — locator artifact of the hidden
  pre-rendered bank; the visible session section has 4 clickable choices.
- ERR_CONNECTION_RESET console errors on every page — sandbox-blocked
  Google Fonts, not a site bug (kept only as the self-host-fonts note).
- Login "connection" error during walkthrough — correct behavior given
  Supabase is unreachable from the sandbox.

---

## Prioritized plan

| # | Item | Effort | Payoff |
|---|------|--------|--------|
| 1 | C-3 one-line state-zeroing fix | XS | stops silent learner-data loss |
| 2 | C-2 lock feedback-mode answers (closes #8) | S | scoring integrity |
| 3 | UX-1 mobile nav + UX-5 mobile header | S | mobile usability |
| 4 | UX-2 search `<mark>` rendering | S | flagship feature polish |
| 5 | UX-3 highlighter throw + drop maintainer UI from public bundle | S | console hygiene, less JS |
| 6 | UX-4 guest-practice escape hatch on login walls | S | first-visit funnel |
| 7 | C-4 drop `choices` from snapshots + slim history select | M | DB size + history load time |
| 8 | C-1 stop shipping the whole bank (fetch slim bank, render session only) | L | biggest perf win site-wide |
| 9 | C-5 atomic submit RPC; C-6 FSRS ownership decision | M | durability + review integrity |
| 10 | UX-6 Study Map grouping; UX-7 duplicate titles; UX-8 local-graph cap | M | findability |
| 11 | C-8 single-pass data build; C-9 split_ufsar dedupe; low batch | M | CI speed + tooling hygiene |

Issues #74 (PDF links to top) and #75 (scrollbar) remain open and are
independent quick wins.
