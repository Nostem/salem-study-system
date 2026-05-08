# Structured Question Bank v2

Status: first safe rebuild milestone. This format is generated beside the existing quiz bank and is not wired into the production quiz page yet.

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

The current quiz bank remains production. The structured bank is generated beside it:

```text
site/src/data/quiz-bank.json      # current production input
site/src/data/quiz-bank-v2.json   # experimental structured input
```

No live page should consume v2 until the renderer and tests are proven.

## Builder

Run:

```bash
python3 scripts/build_structured_quiz_bank.py \
  --in site/src/data/quiz-bank.json \
  --out site/src/data/quiz-bank-v2.json
```

The builder must not modify the source quiz bank.
