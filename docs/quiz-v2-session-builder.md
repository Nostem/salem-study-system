# Quiz v2 Session Builder (Foundation)

Status: experimental, additive only. Production `/quiz/` and
`site/src/data/quiz-bank.json` are untouched.

## Scope

This milestone adds a pure TypeScript utility,
`site/src/utils/quiz-v2-session.ts`, that turns the structured question bank
(`site/src/data/quiz-bank-v2.json`, exposed via
`site/src/utils/structured-quiz-data.ts`) into a deterministic quiz session
descriptor.

The utility **only generates question selections from existing questions**.
It does not:

- mutate the bank,
- generate or rewrite question text,
- grade answers,
- persist sessions,
- shuffle answer choices.

Choice order is intentionally left untouched at this stage. We can layer a
deterministic per-question choice permutation in a later milestone without
changing the session descriptor format.

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

## Preview surface

`/quiz-v2/` continues to behave exactly as before. When the URL has
`?session=1` (and optionally `?seed=…&count=…&years=2023,2024`), the page
shows a small read-only **session preview** panel listing the deterministic
slug order produced by `buildQuizSession`. The default browse experience and
all existing test selectors are preserved.

## Play surface (experimental, local-only)

`/quiz-v2/play/` is an experimental quiz runner built on top of
`buildQuizSession`. It is `noindex` and **does not** persist anything,
talk to Supabase, call any grading API, or generate question text. All
state — selected answers, current index, reveal — lives in the page only
and is lost on reload.

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

## What this is not

This is foundation only. Out of scope for this milestone:

- session persistence (Supabase or otherwise),
- a graded quiz runner with scoring, retry, or progress tracking,
- choice-order randomization,
- topic filter UI,
- replacing production `/quiz/`.

When those land, they will build on this descriptor — the same `sessionId`
produced today should validate against any future persistence layer.
