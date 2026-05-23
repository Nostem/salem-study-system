# Salem Study System

A source-traceable study system for Salem Nuclear Generating Station NRC RO/SRO exam preparation.

The project combines a large Markdown knowledge base, a static Astro study site, an imported written-exam quiz bank, an account-backed progress/history layer, and a graph-based study map. It is built for serious exam prep: public NRC source material, traceable question metadata, searchable articles, targeted quizzes, review history, and mobile-friendly learner flows.

**Live site:** <https://nostem.github.io/salem-study-system/>

## Current scope

The repository contains public/non-proprietary study material only. It does not contain private plant procedures or credentials.

| Area | Current contents |
| --- | --- |
| Wiki articles | 1,044 Markdown pages under `wiki/` |
| Systems | 54 system articles |
| Tech Specs | 19 Tech Spec articles plus public PDF references |
| Exam/wiki question pages | 755 exam-related Markdown pages |
| Static quiz bank | 599 imported written exam questions |
| Quiz years | 2016, 2018, 2019, 2020, 2022, 2023 |
| Quiz topics | 80 normalized topic records |
| EOP/abnormal/procedure/admin articles | EOPs, abnormal procedures, normal procedures, surveillance/alarm/admin topics |

Counts change as source material is imported and audited. The static quiz count comes from `site/src/data/quiz-bank.json`.

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
- advanced topic filters for Tech Specs, procedures, abnormal procedures, and targeted pools,
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

My Progress shows saved quiz attempts and review/history data for the logged-in learner. Quiz attempts are saved through Supabase Edge Functions, not direct anonymous browser writes.

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
- it matches at least one selected topic if topics are selected,
- it passes the reference/draft/outdated/edited switches.

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
- `quiz_session_questions` — exact question order snapshot for a session.
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
4. snapshots `quiz_session_questions`,
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
data/exams/
data/quiz-import/
site/src/data/quiz-bank.json
site/src/data/structured-quiz-bank.json
```

The safe rule is: source Markdown/YAML/PDF data is authority, generated artifacts are regenerated from source, and Supabase syncs are done through explicit scripts.

## Project structure

```text
.
├── README.md
├── CLAUDE.md
├── data/
│   ├── exams/                         # YAML exam metadata
│   └── quiz-import/                   # audit/staging/static generated artifacts
├── docs/                              # planning, audits, release notes, architecture docs
├── raw/                               # local source PDFs; generally gitignored
├── scripts/
│   ├── exam_question_import.py        # import/audit/stage exam questions
│   ├── build_static_quiz_bank.py      # generate site/src/data/quiz-bank.json
│   ├── build_structured_quiz_bank.py  # generate structured v2 quiz bank
│   ├── supabase_import_exam.py        # generate/apply/sync Supabase question data
│   ├── wiki_index.py                  # local wiki index/query helper
│   └── contact_feedback_to_github_issues.py
├── site/
│   ├── package.json
│   ├── src/
│   │   ├── components/                # UI components
│   │   ├── data/                      # generated frontend quiz/graph data
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

The function validates origin, method, category, message length, optional reply email, honeypot, and rate limit metadata, then inserts with service-role access.

A separate script can triage feedback into GitHub issues:

```bash
python3 scripts/contact_feedback_to_github_issues.py
```

Public GitHub issues should not expose submitter reply emails. They should only say whether a reply email was present.

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

This runs Astro and Pagefind through the local npm-installed binaries:

```text
npm run build:astro && npm run build:search
```

Use `npm run build:astro` when a check only needs rendered pages and does not need Pagefind search indexing.

### Run Node tests

```bash
cd site
npm run test:node
```

This covers quiz-session generation, backend-session payloads, review logic, FSRS scheduling, and quiz personalization.

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

The normal source-to-static path is:

```bash
python3 scripts/exam_question_import.py audit --out data/quiz-import/audit-all.json
python3 scripts/exam_question_import.py stage --out data/quiz-import/supabase-staging-all.json
python3 scripts/build_static_quiz_bank.py \
  --bundle data/quiz-import/supabase-staging-all.json \
  --out site/src/data/quiz-bank.json
```

When changing source question content, regenerate the relevant artifacts and run importer/static-bank tests before committing. CI enforces this with a generated-data drift guard that reruns the audit, staging, static-bank, structured-bank, and structured-bank validation commands, then fails if those generated files differ from the committed copies.

## Supabase sync and Edge Functions

GitHub Pages deploys the static Astro site only. Supabase migrations and Edge Function deploys are separate.

Typical safe sequence:

1. Load ignored `.env` locally without printing secrets.
2. Apply migrations with `psql "$SUPABASE_DB_URL"` or `npx supabase db query --db-url "$SUPABASE_DB_URL"`.
3. Deploy changed functions with `npx supabase functions deploy <name> --project-ref "$PROJECT_REF"`.
4. Verify expected validation/auth responses without logging credentials.
5. Push frontend/static changes and watch GitHub Pages.

Do not print or commit:

- Supabase DB URLs,
- service-role keys,
- anon keys,
- access tokens,
- private account slugs,
- generated passwords.

## Deployment

The production site deploys to GitHub Pages from `main`.

The deploy workflow needs public Supabase build-time environment values:

- `PUBLIC_SUPABASE_URL` as a GitHub repo variable,
- `PUBLIC_SUPABASE_ANON_KEY` as a GitHub secret.

After pushing to `main`, verify the GitHub Actions Pages run and then smoke-check the live pages:

- <https://nostem.github.io/salem-study-system/study/>
- <https://nostem.github.io/salem-study-system/quiz/>
- <https://nostem.github.io/salem-study-system/graph-v2/>
- <https://nostem.github.io/salem-study-system/history/>

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
