# LLM Council Transcript — Wiki Linking Strategy

**Date:** 2026-04-12
**Question:** How should we restructure the wiki linking strategy for a cleaner knowledge graph?

## Framed Question

How should a 450+ article nuclear study wiki restructure its linking strategy for a cleaner knowledge graph? Current: flat [[wikilinks]] in Connections section, no edge types, "no same-category links" rule suppressing system-system connections. Pain: dense unreadable graph, exam question clustering, no filtering. Serves both human studying and LLM agent maintaining.

## Advisor Responses

### The Contrarian
450 nodes is a content org problem, not a graph problem. Typed edges double cognitive load — LLM will get types wrong. Create parent concept articles as hubs. REMOVE exam questions from graph entirely — they're annotations, not nodes. Fix taxonomy first.

### The First Principles Thinker
Two users need different things (human studying, LLM maintaining). Replace category headers with typed prefixes: depends-on, tested-by. Abolish no-same-category rule (workaround for untyped graphs). Weight edges by exam frequency. Use links as queryable semantic layer.

### The Expansionist
YAML frontmatter links with target/type/weight. Asymmetric edges: RCS "feeds-into" ECCS but ECCS "protects" RCS. Turns graph into causal plant model. D3 filtering, LLM traversal by type, study path mode.

### The Outsider
Kill no-same-category rule. Add inline relation labels like [[ECCS]] (shares-train). Move exam questions out of D3 force simulation — render as sidebar on node hover. Graph shows conceptual layer only; exams are annotations.

### The Executor
The answer is already in the data. Connections category labels ARE edge type metadata — graph-data.ts throws them away. Three steps: parse type from prefix, add type to GraphEdge + color edges, add filter checkboxes. Zero article edits. Monday deliverable.

## Peer Reviews

### Review (combined)
- **Strongest:** Executor (E) — only response that read the actual code. Zero article edits verifiably true.
- **Blind spots:** E assumes Connections prefixes are consistent — they're not. Needs normalization.
- **What ALL five missed:** graph-data.ts has no edge deduplication. Duplicate edges silently inflate node degree. Also no directional connection counting — hub nodes appear artificially large. This is a bug prerequisite to any strategy.

## Anonymization Mapping
- Response A = Contrarian
- Response B = First Principles
- Response C = Expansionist
- Response D = Outsider
- Response E = Executor

## Chairman Verdict

See council-report-20260412-linking-strategy.html for full formatted verdict.

**Summary:** Three phases: (1) Fix graph-data.ts — deduplicate edges, parse existing Connections prefixes as edge types, color-code + add filters, demote exam nodes to annotations. Zero article edits. (2) Kill no-same-category rule, add system↔system links. (3) Richer semantics only if needed. Skip YAML frontmatter migration entirely.
