# Structured Question Bank v2

Status: current structured quiz-bank source for Study Builder, Review Queue, and Study Map. It is still generated beside the Classic Quiz bank; Classic Quiz (`/quiz/`) remains available and is not replaced.

## Goal

`quiz-bank-v2.json` represents NRC questions as structured renderable blocks instead of plain text plus optional HTML strings.

This protects rich question content such as images, tables, multiline stems, and future media from being flattened or dropped. The 2023 Q23 missing-image regression is the concrete example this format is meant to prevent.

## Non-goals for v2 milestone 1

- Do not replace `/quiz/`.
- Do not replace `site/src/data/quiz-bank.json`.
- Do not create AI-generated questions.
- Do not create microcards.
- Do not implement FSRS yet.
- Do not add an AI tutor.

## Review unit

For the first FSRS implementation, the reviewable unit is one whole ingested NRC question.

Derived microcards can be considered later, but they are intentionally out of scope until the schema and review engine are stable.

## Core shape

Each question has:

- stable identity and exam metadata
- `stemBlocks`
- `choices[].blocks`
- `explanationBlocks`
- `sourceRefs`
- `legacy` fields preserved for migration/debugging

Example stem:

```json
{
  "stemBlocks": [
    { "type": "paragraph", "text": "When proceeding through 2-EOP-TRIP-3, SI Termination, you come across the following symbol at Step 1:" },
    { "type": "image", "src": "/salem-study-system/exam-images/2023-q23-symbol.png", "alt": "Concurrent Step Symbol" },
    { "type": "paragraph", "text": "What does the symbol denote?" }
  ]
}
```

## Block types

Initial block types are deliberately small:

- `paragraph` — normal text.
- `image` — image source, alt text, optional caption.
- `table` — reserved for structured tables.
- `list` — reserved for structured lists.
- `code` — reserved for preformatted/code-like content.

The first builder extracts paragraphs and images from existing quiz-bank fields. Tables/lists can be added as the source examples are audited.

## Source traceability

The builder preserves available source metadata from the existing quiz bank:

- `wikiPath`
- question slug
- `questionSource`
- K/A code and importance
- cognitive level
- tier/group
- audit status

This is not a final source model. It is a bridge format that keeps enough traceability to migrate safely.

## Migration rule

The Classic Quiz bank and structured bank now coexist:

```text
site/src/data/quiz-bank.json      # Classic Quiz / compatibility input
site/src/data/quiz-bank-v2.json   # Study Builder, Review Queue, Study Map input
```

Live v2 routes consume the structured bank. Future imports must keep this file validated before deploy because it now affects learner-facing study flows.

## Builder

Run:

```bash
python3 scripts/build_structured_quiz_bank.py \
  --in site/src/data/quiz-bank.json \
  --out site/src/data/quiz-bank-v2.json
```

The builder must not modify the source quiz bank.

## Validator

`quiz-bank-v2.json` has its own validator so future generation runs can be caught
before any UI work consumes the v2 bank. Run:

```bash
python3 scripts/validate_structured_quiz_bank.py
```

Default arguments check `site/src/data/quiz-bank-v2.json` against the assets in
`site/public/exam-images/` using the URL prefix
`/salem-study-system/exam-images/`. All inputs are configurable:

```bash
python3 scripts/validate_structured_quiz_bank.py \
  --in site/src/data/quiz-bank-v2.json \
  --exam-images site/public/exam-images \
  --image-prefix /salem-study-system/exam-images/
```

Useful flags:

- `--strict` — treat warnings (e.g. empty redacted choices, empty alt text) as errors.
- `--no-image-check` — skip the on-disk image asset check (useful when validating a fixture).

Exit codes:

- `0` — no errors (warnings allowed unless `--strict`).
- `1` — one or more errors found (or warnings under `--strict`).
- `2` — invalid invocation or unreadable input.

What the validator checks today:

- Top-level shape: `schemaVersion`, `generatedFrom`, `summary`, `topics`, `questions`.
- `summary.question_count` and `summary.choice_count` match the actual data.
- Slug uniqueness and pattern (`^[a-z0-9][a-z0-9-]*$`).
- Per-question metadata types (`examYear`, `questionNumber`, `track`, `quizEligible`, …).
- `officialAnswerLabel` ∈ `acceptedAnswerLabels`, and the set of `isCorrect` choices
  matches `acceptedAnswerLabels` exactly (so dual-correct questions are supported).
- Choice labels are unique within a question; empty `choices` is only allowed when
  the question carries `legacy.isRedacted = true`.
- Block shapes by type: `paragraph`, `image`, `table`, `list`, `code`. Unknown
  types are errors.
- Image blocks require non-empty `src` and string `alt` (empty `alt` is a warning).
- Table rows must match header width.
- `sourceRefs[].kind` is required; `wiki` refs require `path`, `source` and
  `quiz-bank` refs require `label`.
- Local image assets resolve under the configured `--exam-images` directory and
  reject path traversal (`..`).
