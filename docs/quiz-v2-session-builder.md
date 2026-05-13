# Study Builder / Quiz v2 Session Builder

Status: live learner-facing Study Builder. `/quiz-v2/`, `/quiz-v2/play/`, and `/quiz-v2/review/` are part of the current study loop beside Classic Quiz (`/quiz/`). The structured bank remains generated beside `site/src/data/quiz-bank.json`; Classic Quiz is not replaced.

## Scope

This milestone adds a pure TypeScript utility,
`site/src/utils/quiz-v2-session.ts`, that turns the structured question bank
(`site/src/data/quiz-bank-v2.json`, exposed via
`site/src/utils/structured-quiz-data.ts`) into a deterministic quiz session
descriptor.

The utility generates deterministic selections from existing imported NRC questions. It does not mutate the bank or generate/rewrite question text. Grading, account session creation, and history sync are handled by the Study Builder play route and Supabase Edge Functions, not by this pure selection utility.

## Public surface

```ts
import {
  buildQuizSession,
  filterQuestions,
  questionsForSession,
  type QuizSession,
  type QuizSessionFilters,
} from '../utils/quiz-v2-session';
```

### `QuizSessionFilters`

| field              | type                                    | default     | notes                                                              |
| ------------------ | --------------------------------------- | ----------- | ------------------------------------------------------------------ |
| `years`            | `number[]`                              | `[]` = all  | `examYear` whitelist                                               |
| `tracks`           | `string[]`                              | `[]` = all  | matches `track` (e.g. `'RO'`, `'SRO'`); `''` matches missing track |
| `statuses`         | `string[]`                              | `[]` = all  | matches `status`                                                   |
| `topicSlugs`       | `string[]`                              | `[]` = all  | OR-match against `topics[].slug` or string topics                  |
| `referenceMode`    | `'include' \| 'exclude' \| 'only'`      | `'include'` | how to treat `requiresReference: true`                             |
| `quizEligibleOnly` | `boolean`                               | `true`      | skip non-quizable questions                                        |
| `count`            | `number`                                | `null`      | hard cap on returned slugs                                         |

`normalizeFilters` dedupes and sorts list filters so that two equivalent
filter objects always produce the same `sessionId`.

### `QuizSession`

```ts
interface QuizSession {
  schemaVersion: 1;
  sessionId: string;        // 'qv2-' + fnv1a(seed|filters|slugs) hex
  seed: string;
  filters: NormalizedFilters;
  questionSlugs: string[];  // ordered selection
  totalEligible: number;    // pre-count match count
  generatedAt?: string;     // only set when caller provides options.now
}
```

`generatedAt` is **opt-in**: `buildQuizSession` only sets it when the caller
passes `options.now`. This keeps the function pure-by-default so two
`buildQuizSession` calls with the same inputs produce identical sessions —
crucial for tests, caching, and replay.

### Determinism contract

For the same `(questions, filters, seed)` triple, `buildQuizSession` returns
an identical `QuizSession` (same `sessionId`, same `questionSlugs` in the
same order). Determinism guarantees:

1. Filter normalization sorts and dedupes list inputs.
2. Eligible questions are sorted by `slug` before shuffling, so input order
   does not affect output.
3. The shuffle uses a seeded PRNG (xmur3 → mulberry32 Fisher–Yates) — no
   `Math.random` anywhere.
4. `sessionId` is a content hash (FNV-1a 32-bit, hex) over a stable
   stringification of `seed | normalized filters | selected slugs`.

This is what enables future persistence: a `sessionId` is a verifiable
fingerprint of the inputs that produced it.

## Tests

Pure-logic tests live at
`site/tests/quiz-v2-session.node.test.ts` and run on `node:test` with
Node 24's built-in TypeScript stripping. They are **not** Playwright tests —
the file name is excluded from `playwright.config.ts`'s `testMatch`.

```bash
node --test site/tests/quiz-v2-session.node.test.ts
```

Coverage: filter semantics, reference modes, topic slug shapes, shuffle
determinism, sessionId stability, count, default seed, opt-in `generatedAt`,
input-order invariance.

## Study Builder surface

`/quiz-v2/` is the Study Builder entry point. It lets the learner choose targeted filters and launch deterministic sessions. The route still preserves the original preview/debug behavior for deterministic slug order, but the user-facing role is no longer experimental/read-only.

## Play surface

`/quiz-v2/play/` is the Study Builder runner built on top of `buildQuizSession`. It creates account-backed sessions when the learner is logged in, submits graded attempts to Supabase, and feeds My Progress/history. Local page state is still used for immediate interaction, but completed attempts are synchronized through the backend pipeline.

Query params:

| param   | example                | notes                                                              |
| ------- | ---------------------- | ------------------------------------------------------------------ |
| `seed`  | `?seed=foo`            | Forwarded to `buildQuizSession`; defaults to `salem-quiz-v2-default` |
| `count` | `?count=10`            | Hard cap on the session length; defaults to `10`                   |
| `years` | `?years=2022,2023`     | `examYear` whitelist                                               |
| `tracks`| `?tracks=RO,SRO`       | Track whitelist                                                    |
| `ref`   | `?ref=exclude`         | `include` (default) / `exclude` / `only`                           |

UX: one question at a time, click a choice to lock the answer and reveal
the official label and explanation. Prev/Next walk the deterministic slug
order. Each question header includes a `view in preview` link back to
`/quiz-v2/?slug=…` for source-traceable digging.

Playwright coverage lives at `site/tests/quiz-v2-play-test.ts`: route load,
answer selection + reveal, next/prev navigation, and seed determinism
across reloads.

## Current boundaries

- Classic Quiz (`/quiz/`) remains the fast/simple mode.
- Study Builder (`/quiz-v2/`) is the targeted mode and shares history/progress with Classic Quiz.
- The pure session utility remains deterministic and side-effect free; backend persistence belongs in Edge Functions.
- Review Queue uses whole NRC questions, not generated microcards.
- Choice-order randomization can remain layered above the descriptor as long as submitted attempts preserve the original-answer mapping.
