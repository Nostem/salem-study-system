# Wiki Index (wiki-index.py) Design

**Date:** 2026-04-09
**Status:** Approved

## Goal

Build a SQLite-based query layer (`scripts/wiki-index.py`) that lets the LLM agent efficiently navigate, cross-reference, and conflict-check the growing wiki (~339 articles, scaling to 1000+) without grepping hundreds of files. The consumer is Claude Code, not a human.

## Key Decisions

1. **SQLite** — not graph DB, not MCP, not QMD. Zero dependencies beyond Python stdlib.
2. **Ephemeral database** — `wiki.db` at project root, always regenerated from markdown source. Added to `.gitignore`.
3. **Value extraction** — index both tagged values (`val-trip`/`val-alarm`/`val-normal` spans) and regex-extracted numeric values with units from `callout-exam` blocks.
4. **Section line ranges** — store heading start/end lines so the agent can read targeted sections.
5. **Pre-commit rebuild** — `wiki-index.py rebuild` runs before `check-wikilinks.py` in the commit flow. Index is always fresh at commit time.
6. **Two scripts coexist** — `check-wikilinks.py` stays as the lightweight validator. `wiki-index.py` is the query tool. They share no code.
7. **CLAUDE.md mandate** — agent must run `refs` and `conflicts` queries before creating or modifying articles.

## Database Schema

### `articles` — one row per wiki article

| Column | Type | Description |
|--------|------|-------------|
| slug | TEXT PK | Relative path without .md (e.g., "systems/rps-ssps") |
| title | TEXT | From frontmatter |
| category | TEXT | From frontmatter (systems, exams, eops, abnormals, etc.) |
| status | TEXT | draft, verified |
| path | TEXT | Full relative path (e.g., "wiki/systems/rps-ssps.md") |
| aliases | TEXT | Pipe-delimited aliases |

### `links` — one row per wikilink occurrence

| Column | Type | Description |
|--------|------|-------------|
| source_slug | TEXT | Article containing the link |
| target_title | TEXT | Raw `[[link text]]` |
| target_slug | TEXT | Resolved slug (NULL if broken) |
| line_number | INTEGER | Line number in source file |

### `sections` — one row per heading, with line ranges

| Column | Type | Description |
|--------|------|-------------|
| slug | TEXT | Article slug |
| heading | TEXT | Heading text (e.g., "Key Permissive Interlocks") |
| level | INTEGER | 2 for ##, 3 for ###, etc. |
| line_start | INTEGER | Line number of the heading |
| line_end | INTEGER | Line before next heading of same or higher level (NULL for last) |

### `values` — extracted numeric values with context

| Column | Type | Description |
|--------|------|-------------|
| slug | TEXT | Article slug |
| parameter | TEXT | Best-effort label from surrounding context |
| value | TEXT | Numeric value as string (e.g., "2385") |
| unit | TEXT | Extracted unit: psig, °F, gpm, %, psia, VDC, KW, etc. |
| css_class | TEXT | val-trip, val-alarm, val-normal, or NULL for untagged |
| source_ref | TEXT | Nearby source citation (TS section, UFSAR ref) if detectable |
| line_number | INTEGER | Line number in source file |
| context | TEXT | ~100 chars surrounding the value for review |

### Value extraction strategy

1. **First pass (high confidence):** Extract from `<span class="val-trip|val-alarm|val-normal">` tags. Parse the value and unit from the span content.
2. **Second pass (broader):** Regex-extract numeric patterns with units (`\d+\.?\d*\s*(psig|°F|gpm|%|psia|VDC|KW|MW|BTU/lb|cc/hr)`) from `callout-exam` blocks only. These are noisier but catch untagged values.
3. **Parameter label:** Best-effort extraction from nearby text — preceding bold label, table column header, or the callout-label text.

## CLI Subcommands

All commands output plain text, one result per line, grep-friendly. No JSON.

### `rebuild`

```
python3 scripts/wiki-index.py rebuild
```

Walk `wiki/**/*.md`, parse frontmatter, headings, wikilinks, and values. Drop and recreate all tables. Print summary: "Indexed N articles, N links, N sections, N values."

### `refs <term>`

```
python3 scripts/wiki-index.py refs "RHR"
```

Search article titles, aliases, link targets, and value parameters for the term. Return slug, section, and line number for each match. Use before backfilling to find existing references.

### `conflicts <value> [unit]`

```
python3 scripts/wiki-index.py conflicts 175 °F
```

Search the `values` table for matching value+unit. Return every occurrence with slug, context, source_ref, and css_class. Use before adding a new setpoint to check for disagreements.

### `coverage [category]`

```
python3 scripts/wiki-index.py coverage systems
```

For system articles: list those with zero `callout-exam` blocks, missing standard sections (Function, Connections). For exam questions: list those with no backfill in any target article. Optional category filter.

### `sections <slug>`

```
python3 scripts/wiki-index.py sections systems/rcs
```

Print the heading tree with line ranges. Agent uses this to target a specific section for reading/editing without loading the full article.

### `backlinks <slug>`

```
python3 scripts/wiki-index.py backlinks systems/rhr
```

Show articles that link TO this slug but are not linked FROM it (missing reciprocal links). Queryable per-article.

## Integration

### Pre-commit hook

Add `python3 scripts/wiki-index.py rebuild` to run before `check-wikilinks.py`. Rebuild ensures `wiki.db` is fresh. The two scripts are independent — `check-wikilinks.py` is the validator (exit 0/1), `wiki-index.py` is the query tool.

### CLAUDE.md addition

Under Quality Rules:

> Before creating or modifying any wiki article, run:
> - `python3 scripts/wiki-index.py refs <system-or-topic>` — check for existing content
> - `python3 scripts/wiki-index.py conflicts <value> <unit>` — check for value disagreements
>
> This is not optional.

### Exam ingestion skill update

Add to conflict check step (Step 2): "Run `wiki-index.py refs` and `wiki-index.py conflicts` for each system and setpoint in the batch."

### .gitignore

Add `wiki.db` — generated artifact, not source.

## File Structure

```
scripts/
  wiki-index.py          ← New: ~250 lines, the indexer + CLI
  check-wikilinks.py     ← Existing: unchanged, stays as validator
wiki.db                  ← Generated: SQLite database (gitignored)
```

## Not Building

- MCP server — unnecessary, shell commands are sufficient
- Graph database — overkill for 1000 nodes
- Semantic/AI search — vocabulary is narrow and precise
- FTS5 — SQLite LIKE with indexes handles 1000 articles fine
- Multi-plant schema — premature by two orders of magnitude
- Custom SRS/flashcards — different concern, not a query layer
