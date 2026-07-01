# Salem Study System

A source-traceable study system for Salem Nuclear Generating Station NRC RO/SRO exam preparation.

The project combines a large Markdown knowledge base, a static Astro study site, an imported written-exam quiz bank, an account-backed progress/history layer, and a graph-based study map. It is built for serious exam prep: public NRC source material, traceable question metadata, searchable articles, targeted quizzes, review history, and mobile-friendly learner flows.

**Live site:** <https://salem-study-system.vercel.app/>

The former GitHub Pages URL redirects to Vercel for backwards-compatible old links.

## Current scope

The repository contains public/non-proprietary study material only. It does not contain private plant procedures or credentials.

| Area | Current contents |
| --- | --- |
| Wiki articles | ~1,465 Markdown pages under `wiki/` |
| Systems | 54 system articles |
| Tech Specs | 19 Tech Spec articles plus public PDF references |
| Exam/wiki question pages | ~1,135 exam-related Markdown pages (written questions, JPMs, scenarios) |
| Static quiz bank | 898 imported written exam questions (564 quiz-eligible) |
| Quiz years | 2016, 2018, 2019, 2020, 2022, 2023 (quiz-eligible); 2012, 2014, 2015 imported as drafts pending review (2015 has 2 reviewed/edited questions now quiz-eligible) |
| Quiz topics | 295 normalized topic records, including connection-derived EOP/abnormal/procedure/admin filters |
| EOP/abnormal/procedure/admin articles | EOPs, abnormal procedures, normal procedures, surveillance/alarm/admin topics |

Counts change as source material is imported and audited. The static quiz count comes from `site/src/data/quiz-bank.json` (a regenerated build artifact — see [Regenerating quiz data](#regenerating-quiz-data)).

## Main learner flows

The public navigation intentionally points learners through one study entrypoint.

### Study hub — `/study/`

`/study/` is the canonical learner entry page. It routes to:

- **Quick Quiz** — `/quiz/`
- **Study Map** — `/graph-v2/`
- **My Progress** — `/history/`

Legacy/compatibility routes may still exist, but the primary learner path should stay simple.

### Quick Quiz — `/quiz/`

Quick Quiz is the primary practice interface. It is account-gated because completed attempts are saved to the learner’s progress history.

It supports:

- exam-year filtering,
- topic filtering,
- multi-topic mixed quizzes,
- basic system/admin topic selectors,
- advanced topic filters for Tech Specs, EOPs, abnormal procedures, operating/admin/alarm procedures, and targeted pools,
- reference-required include/exclude behavior,
- draft/outdated/edited question inclusion controls,
- feedback mode with immediate right/wrong explanation,
- blind mode with final scoring and review,
- local unfinished-quiz resume in browser `localStorage`,
- seeded question order for reproducible tests/replays,
- seeded answer-choice shuffling while preserving source-answer grading,
- account-synced progress submission on final review.

### Study Map — `/graph-v2/`

Study Map is a graph/topic-oriented route for exploring systems, procedures, Tech Specs, exam references, and related questions. It can hand off into practice by topic or explicit question pool where eligible questions exist.

### My Progress — `/history/`

My Progress shows saved quiz attempts and review/history data for the logged-in learner. Quiz attempts are saved through Supabase Edge Functions, not direct anonymous browser writes. Historical review uses the saved session/question snapshot, so later edits to question text, accepted answers, or draft/active status do not rewrite what the learner saw when completing the quiz.

### Review flow — `/quiz-v2/review/`

The review queue is the personalized review lane. It reads `user_question_state` and returns due/shaky/learning items. This is separate from a normal filtered Quick Quiz, although Quick Quiz now also uses progress state to personalize within the selected filter pool.

## How Quick Quiz chooses questions

Question generation follows a **filter first, personalize second, randomize within priority groups** model.

### 1. Build the eligible pool

The browser starts from the static quiz bank in:

```text
site/src/data/quiz-bank.json
```

A question is eligible if:

- `quizEligible` is true, or it is a safe fallback item with choices and accepted answers,
- it is not redacted/security-excluded,
- it matches the selected exam year if one is selected,
- it matches selected topics; multiple selections within the same filter group are ORed, while selections across different groups are ANDed,
- it passes the reference/draft/outdated/edited switches. Draft imported questions are included by default and are accepted by the save backend when they have usable choices and a correct answer.

Example: selecting the CVCS filter first narrows the pool to questions tagged with the CVCS topic slugs.

### 2. Load learner progress state

When the learner starts a quiz, Quick Quiz calls the `quiz-review-queue` Edge Function and reads the current learner’s `states` map. That state comes from `public.user_question_state` and includes:

- `attemptsCount`,
- `correctCount`,
- `incorrectCount`,
- `masteryState`,
- `nextReviewAt`,
- last-attempt timestamps.

If the progress lookup fails or returns no state, Quick Quiz falls back to normal seeded-random selection.

### 3. Personalize inside the filtered pool

After filters produce the eligible pool, `site/src/utils/quiz-personalization.ts` orders questions by priority:

1. unseen questions,
2. due or shaky questions,
3. previously missed questions that are not due yet,
4. learning questions,
5. other seen questions,
6. mastered questions last.

Within the same priority and attempt count, ordering is seeded-random so the quiz remains reproducible for tests and replay links.

This means:

```text
Quick Quiz + CVCS filter
= CVCS-only pool first,
  then unseen/due/shaky CVCS questions preferentially,
  then randomization within equivalent buckets.
```

It does **not** invent new questions. It only selects existing imported questions.

### 4. Slice to the requested count

After ordering, the app takes the requested question count. If only 6 eligible questions match a targeted filter and the user asks for 10, the quiz contains 6.

### 5. Shuffle answer choices

Each question’s choices are also shuffled from the quiz seed. The UI still displays choices as `A`, `B`, `C`, `D`, but the app preserves the source/original answer label for grading and persistence.

The submitted payload includes:

- display label selected by the learner,
- original/source label selected,
- display-to-source `choiceOrder`,
- question slug and position,
- elapsed time estimate,
- filters including seed.

## Progress, persistence, and spaced review

Supabase stores account-backed progress.

### Main tables

Important tables include:

- `profiles` — learner/admin profile records linked to Supabase Auth users.
- `questions` — canonical question records synced from the wiki/import pipeline.
- `choices` — source answer choices.
- `topics` and `question_topics` — normalized filter/graph/analytics topics.
- `quiz_sessions` — saved quiz sessions and their filter/config snapshot.
- `quiz_session_questions` — exact question order plus immutable question/answer display snapshots for each saved session.
- `question_attempts` — immutable per-question attempt events.
- `user_question_state` — current learner/question summary and review scheduling state.
- `question_review_events` — whole-question review events used by the review flow.
- `contact_messages` — feedback/contact submissions.

### Result submission

Quick Quiz submits completed results through:

```text
supabase/functions/submit-quiz-results/index.ts
```

The function:

1. validates the learner JWT,
2. resolves submitted question slugs and selected source labels server-side,
3. creates/updates `quiz_sessions`,
4. snapshots `quiz_session_questions` with exact order, choice order, accepted-answer labels, explanations, and selected-label metadata as they existed at completion time,
5. inserts immutable `question_attempts`,
6. upserts `user_question_state`.

The browser never receives service-role credentials.

### Review queue

The review queue uses:

```text
supabase/functions/quiz-review-queue/index.ts
```

It returns due questions where:

- `next_review_at` is missing,
- or `next_review_at <= now`,
- or `mastery_state = 'shaky'`.

Rows are ranked with shaky/learning/due state ahead of lower-priority review items.

### FSRS-style review helper

Whole-question review scheduling logic lives in:

```text
supabase/functions/_shared/fsrs-whole-question.ts
```

It tracks review reps, lapses, difficulty, stability, scheduled days, and next review time. This supports the explicit review lane. Quick Quiz personalization currently uses `user_question_state` priority buckets rather than a full FSRS probability model.

## Knowledge base and source traceability

The wiki lives under `wiki/` and uses Markdown with YAML frontmatter, Obsidian-style `[[wikilinks]]`, and source references. Article categories include:

```text
wiki/systems/
wiki/tech-specs/
wiki/exams/
wiki/eops/
wiki/abnormals/
wiki/procedures/
wiki/admin/
```

Public PDFs and static assets are served from `site/public/`, including exam PDFs, Tech Spec PDFs, and imported question images.

Question import/sync artifacts live under:

```text
data/exams/                          # YAML exam metadata + pdftotext extraction text (tracked)
data/quiz-import/audit-all.json      # gitignored build artifact
data/quiz-import/supabase-staging-all.json  # gitignored build artifact
site/src/data/quiz-bank.json         # gitignored build artifact
site/src/data/quiz-bank-v2.json      # gitignored build artifact (structured)
```

The safe rule is: source Markdown/YAML/PDF data is authority; the four quiz-data files above are **gitignored build artifacts** regenerated from source on demand (never committed); and Supabase syncs are done through explicit scripts.

## Project structure

```text
.
├── README.md
├── CLAUDE.md
├── data/
│   ├── exams/                         # YAML exam metadata + extraction text (tracked)
│   ├── ka-catalog/                    # PWR K/A catalog: pwr-ka-catalog.xlsx (source) + generated .json/.csv (NUREG-1122 Rev 3)
│   ├── ka-audit/                      # K/A tag audit output: ka-audit-report.{md,csv} + human-review.md
│   ├── quiz-import/                   # audit/staging artifacts (gitignored, regenerated)
│   └── ufsar/                         # UFSAR pipeline data: chapter-index, system-map, ka-index/, gaps/
├── docs/
│   ├── ufsar-system-ingestion-guide.md  # step-by-step guide for enriching system articles from UFSAR
│   └── …                              # planning, audits, release notes, architecture docs
├── raw/                               # local source PDFs; gitignored
├── scripts/
│   ├── build_quiz_data.py             # one command: regenerate + validate all 4 quiz-data files
│   ├── exam_question_import.py        # import/audit/stage exam questions
│   ├── build_static_quiz_bank.py      # generate site/src/data/quiz-bank.json
│   ├── build_structured_quiz_bank.py  # generate structured quiz-bank-v2.json
│   ├── validate_structured_quiz_bank.py  # validate the structured bank (CI gate)
│   ├── build_ka_catalog.py            # one-off xlsx→json/csv converter for NUREG-1122; re-run only on new revision
│   ├── audit_ka_tags.py               # normalize ingested K/A tags to the catalog (--report / --apply)
│   ├── supabase_import_exam.py        # generate/apply/sync Supabase question data
│   ├── wiki_index.py                  # local wiki index/query helper
│   ├── contact_feedback_to_github_issues.py
│   ├── split_ufsar.py                 # split UFSAR PDF into per-chapter files for pipeline input
│   ├── build_system_map.py            # build data/ufsar/system-map.json (article↔catalog↔UFSAR crosswalk)
│   └── build_ka_index.py              # build per-system K/A topic index under data/ufsar/ka-index/
├── site/
│   ├── package.json
│   ├── public/
│   │   └── reference-pdfs/            # self-hosted NRC reference PDFs (NUREG-1021, NUREG-1122) + K/A xlsx; linked from homepage
│   ├── scripts/                       # site build helpers, including Pagefind cache-bust copy + static asset link check
│   ├── src/
│   │   ├── components/                # UI components
│   │   ├── data/                      # generated quiz/graph data (quiz-bank*.json gitignored)
│   │   ├── layouts/                   # BaseLayout, StudyLayout, ArticleLayout
│   │   ├── pages/                     # Astro routes
│   │   ├── scripts/                   # browser graph/search/highlight scripts
│   │   ├── types/                     # structured question types
│   │   └── utils/                     # quiz, auth, graph, personalization helpers
│   └── tests/                         # Playwright and Node tests
├── supabase/
│   ├── functions/                     # Edge Functions
│   └── migrations/                    # SQL migrations
├── tests/                             # Python tests for import/build/sync tooling
└── wiki/                              # source Markdown study wiki
```

## Main routes

| Route | Purpose |
| --- | --- |
| `/` | Generated wiki home/index |
| `/study/` | Canonical learner entry point |
| `/quiz/` | Primary Quick Quiz flow |
| `/graph-v2/` | Study Map / topic graph |
| `/history/` | Learner progress/history |
| `/quiz-v2/` | Compatibility Study Builder route |
| `/quiz-v2/play/` | Compatibility Practice runner |
| `/quiz-v2/review/` | Review queue/review practice |
| `/login/` | Learner login |
| private create-account slug | Direct private beta account creation; no public signup link |

## Authentication and beta account model

The site uses Supabase Auth behind a private beta flow.

Learners use username/password UX. Internally, Supabase Auth still needs an email-like identifier, so the app stores generated internal auth emails rather than making learner email a primary user-facing concept.

Current policy:

- The public site shows **Log in**, not public self-serve signup.
- If a learner has no account, the UI directs them to contact the site administrator through Contact / Feedback.
- Private account creation uses a direct-link-only create-account route that can be shared with beta learners without creating a per-user invite code.
- The create-account route is `noindex,nofollow`, excluded from the sitemap, and absent from normal public navigation.
- Invite-code compatibility may remain for legacy or constrained flows, but invite codes are not the default access-control mechanism.

## Contact / feedback workflow

A global Contact / Feedback modal is mounted through `BaseLayout`.

The frontend calls:

```text
supabase/functions/contact-feedback/index.ts
```

The function validates origin, method, category, message length, optional reply email, honeypot, and rate limit metadata, then inserts with service-role access. After the Supabase row is stored, the same Edge Function creates a GitHub issue using the server-side `GITHUB_TOKEN`, records `metadata.github_issue`, sets `status = 'archived'`, and returns success. If GitHub is temporarily unavailable or the token is missing, the feedback row remains `status = 'new'` with `metadata.github_issue_error` so the submission is not lost.

Required Edge Function secrets:

```bash
npx supabase secrets set GITHUB_TOKEN=...
npx supabase secrets set GITHUB_REPO=Nostem/salem-study-system
```

Public GitHub issues must not expose submitter reply emails. They should only say whether a reply email was present and include the hidden `contact_message_id:<uuid>` marker for idempotency/recovery.

The old `scripts/contact_feedback_to_github_issues.py` script is retained only as a manual recovery/backfill tool. It should not run as a recurring cron while direct Edge Function issue creation is enabled.

## Build and test commands

### Install site dependencies

```bash
cd site
npm install
```

### Build the static site

```bash
cd site
npm run build
```

This runs Astro, validates rendered static PDF/XLSX links, and then builds Pagefind through the local npm-installed binaries:

```text
npm run build:astro && npm run check:static-assets && npm run build:search
```

`check:static-assets` scans `dist/**/*.html`, verifies linked exam/Tech Spec/reference PDFs and xlsx files exist in the built output, and rejects stale `/salem-study-system/...` asset links in root-hosted Vercel builds.

`build:search` runs Pagefind and then copies `dist/pagefind` to a cache-busted directory used by the search modal:

- Vercel builds use `dist/pagefind-<commit-sha-prefix>/` from `VERCEL_GIT_COMMIT_SHA`.
- Local builds use `dist/pagefind-current/`.
- `PUBLIC_PAGEFIND_ASSET_DIR` can override the directory when needed.

This prevents a browser from reusing stale/corrupted Pagefind binary assets after a Vercel deploy. Use `npm run build:astro` when a check only needs rendered pages and does not need Pagefind search indexing.

### Run Node tests

```bash
cd site
npm run test:node
```

This covers quiz-session generation, backend-session payloads, review logic, FSRS scheduling, quiz personalization, and static asset link normalization.

### Run frontend type checks

```bash
cd site
npm run check
```

This runs Astro content/type generation followed by TypeScript `tsc --noEmit` against the strict site configuration.

### Run focused UI smoke tests

```bash
cd site
npm run test:ui:smoke
```

### Run the full UI suite

```bash
cd site
npm run test:ui
```

### Install Python tooling dependencies

From the repo root:

```bash
python3 -m pip install -r requirements-dev.txt
```

### Run Python tooling tests

From the repo root:

```bash
python3 -m unittest discover -s tests -v
```

### Common focused checks

```bash
cd site
npx playwright test tests/quiz-test.ts --reporter=line
npx playwright test tests/study-test.ts tests/navigation-test.ts tests/history-test.ts --reporter=line
npx playwright test tests/graph-v2-test.ts --reporter=line
```

If a local preview is already running on port `4321`, Playwright can fail with a port conflict. Kill stale previews before rerunning:

```bash
lsof -ti tcp:4321 | xargs kill -9 2>/dev/null || true
```

## Regenerating quiz data

The four quiz-data files are **build artifacts** (gitignored), regenerated from the wiki question
articles on demand. There is one canonical command:

```bash
cd site && npm run data          # or, from the repo root: python3 scripts/build_quiz_data.py
```

It runs the full pipeline — audit → stage → static bank → structured bank → **validation** — and
(re)writes:

```text
data/quiz-import/audit-all.json
data/quiz-import/supabase-staging-all.json
site/src/data/quiz-bank.json
site/src/data/quiz-bank-v2.json
```

These files are **not committed**. The site's npm `predev`/`prebuild` hooks run the generator
automatically, so `npm run dev` and `npm run build` always have fresh data; CI regenerates and
validates them once in the deploy job. Because they are generated rather than committed, there is
no drift to reconcile — no commit step is needed after changing source question content (just rerun
the generator locally if you want to inspect the output). The `validate` step is the gate that
fails the deploy on real data problems (e.g. a malformed `✓ <LETTER>. Correct.` answer marker).

## Supabase sync and Edge Functions

Vercel deploys the static Astro site. Supabase migrations and Edge Function deploys are separate.

### Question-bank database sync

Question-bank source changes under `wiki/exams/`, `data/exams/`, and topic/import scripts are synchronized to Supabase by the GitHub Actions workflow:

```text
.github/workflows/question-bank-sync.yml
```

Workflow behavior:

- Pull requests run quiz-data generation plus a Supabase sync dry-run only.
- Pushes to `main` run the same dry-run, then apply the sync only when `scripts/check_supabase_sync_report.py --mode safe-to-apply` confirms there are no answer-key changes or manual-review blockers.
- Removed question↔topic / question↔reference links are **not** blockers: apply reconciles them by pruning the orphaned join-table rows (scoped to questions in the bundle; questions and learner-progress rows are never deleted). A whole question missing from source and any answer-key change remain manual-review blockers.
- After applying on `main`, the workflow verifies the apply report and a second dry-run are clean.
- Reports are uploaded as workflow artifacts, including `/tmp/salem-sync-dry-run.json` and `data/quiz-import/audit-all.json`.

Required GitHub Actions secret:

```text
SUPABASE_DB_URL
```

Manual local equivalent:

```bash
python3 scripts/build_quiz_data.py
python3 scripts/supabase_import_exam.py sync \
  --bundle data/quiz-import/supabase-staging-all.json \
  --out /tmp/salem-sync-dry-run.json
python3 scripts/check_supabase_sync_report.py /tmp/salem-sync-dry-run.json --mode safe-to-apply
```

### Manual migrations and Edge Functions

Typical safe sequence for schema/function changes:

1. Load ignored `.env` locally without printing secrets.
2. Apply migrations with `psql "$SUPABASE_DB_URL"` or `npx supabase db query --db-url "$SUPABASE_DB_URL"`.
3. Deploy changed functions with `npx supabase functions deploy <name> --project-ref "$PROJECT_REF"`.
4. Verify expected validation/auth responses without logging credentials.
5. Push frontend/static changes and watch the Vercel deployment.

Do not print or commit:

- Supabase DB URLs,
- service-role keys,
- anon keys,
- access tokens,
- private account slugs,
- generated passwords.

## Deployment

The production site deploys to Vercel from `main`:

- production URL: <https://salem-study-system.vercel.app/>
- Vercel project: `salem-study-system`
- build command: `cd site && npm run build`
- output directory: `site/dist`

Vercel must have these public Supabase environment variables configured for Production and Preview:

- `PUBLIC_SUPABASE_URL`
- `PUBLIC_SUPABASE_ANON_KEY`

`requirements-dev.txt` is installed during Vercel's install step because the Astro build regenerates quiz data with Python (`PyYAML` is required). Do not add direct database URLs to Vercel unless the app grows Vercel server-side code; the current browser app talks to Supabase through the public client and Edge Functions.

GitHub Pages no longer hosts the app. Its workflow publishes only a small redirect artifact so old `https://nostem.github.io/salem-study-system/...` links continue to land on the matching Vercel path.

After pushing to `main`, verify the Vercel deployment and then smoke-check the live pages:

- <https://salem-study-system.vercel.app/study/>
- <https://salem-study-system.vercel.app/quiz/>
- <https://salem-study-system.vercel.app/graph-v2/>
- <https://salem-study-system.vercel.app/history/>

Also check at least one old GitHub Pages deep link redirects to the same path on Vercel.

## Development conventions

- Preserve source traceability. Do not invent facts or questions.
- Keep public/source PDFs available when they are the cited authority.
- Keep `/study/` as the single primary learner entry point.
- Keep `/quiz/` as the primary practice hub.
- Keep advanced/specialized filters organized under disclosures unless they are common learner topics.
- Avoid exposing internal terms like backend, Supabase, v2, seed, session ID, or raw slugs in learner-facing UI unless behind debug/details UI.
- Treat unrelated dirty/untracked files as local/user work. Do not stage them.
- Stage exact files only; do not use `git add .` in this repo.
- After any project change, review this README and update it if behavior, commands, routes, architecture, or deployment steps changed.

## Security notes

- The repo should not contain credentials.
- `.env` files are local and ignored.
- Browser code uses only public Supabase config and learner access tokens.
- Service-role access is restricted to Edge Functions.
- Contact feedback and quiz result writes go through validated Edge Functions.
- Aggregate analytics should not expose private learner performance.

## License / source note

This is a personal study system assembled from publicly available NRC and site-study source material. Verify operationally important facts against current official plant documents and procedures. The study site is not an authority for plant operation.
