# LLM Council Transcript — Search/Query Layer for Salem Study System

**Date:** 2026-04-09
**Question:** Should we add a search/query layer to the Salem Study System wiki? What capabilities would be most valuable for NRC exam studying?

## Framed Question

As a nuclear plant operator's study wiki (339 articles, Astro static site, Pagefind text search, D3 knowledge graph) scales to 500-1000+ articles, what search/query capabilities would be most valuable for NRC exam studying? Options include semantic search, QMD, YAML queries, flashcard generation, spaced repetition, cross-exam pattern analysis, or other approaches. The user is a working nuclear operator — practical study value matters more than technical elegance.

## Advisor Responses

### The Contrarian

The fatal flaw: you're asking about search when the real bottleneck is retrieval under exam pressure, not at a keyboard. NRC exam is closed-book. Pagefind is already good enough. Semantic search adds massive complexity for marginal gain. Spaced repetition on a static site becomes a maintenance trap. The callout-exam blocks are the right primitive but they're trapped in articles. Build a standalone drill mode — sequential, timed, browser-only. When did you last fail to find something versus fail to recall it under pressure?

### The First Principles Thinker

The question being asked is "what search features?" The question that matters is "what makes candidates fail?" NRC exams test recall, not retrieval. You have 177 exam questions — that's a flashcard deck. Build one thing: spaced repetition that surfaces callout-exam blocks as active recall prompts, tracks wrong answers, and requeues them. Pagefind is sufficient for reference. Cross-exam pattern analysis can be done in an afternoon by counting K/A tags.

### The Expansionist

The flashcard angle is undervalued — 177 questions with justifications is a complete Anki deck. Cross-exam K/A frequency analysis is the real goldmine: surface which K/A areas Salem tests repeatedly across 6+ exam years. Question clustering by correct-answer pattern reveals personal weak spots. Better Pagefind metadata tags beat semantic search. The 1000-article milestone is where pattern analysis becomes statistically meaningful.

### The Outsider

The system is invisible to anyone who doesn't already know nuclear ops. NRC exams give scenarios requiring three domains simultaneously — tech spec, system behavior, procedure. Pagefind finds text, not relationships. Most practical: scenario-driven cross-linking in search results. Wrong-answer analysis is highest leverage — surface "what did the exam expect operators to confuse with X?" Spaced repetition is useful but only after you solve retrieval.

### The Executor

Three concrete steps: 1) Anki export script converting callout-exam blocks to Anki-importable format. 2) K/A frequency heatmap — 30-line Python script parsing K/A occurrences across exam years. 3) Pagefind faceted filtering — add data-pagefind-filter attributes for article type, K/A group, exam year. Skip semantic search, QMD, YAML queries. Fix retention first (Anki), study prioritization second (K/A heatmap), search discoverability third (facets).

## Peer Reviews

### Review 1 (Anonymized)
Strongest: E (concrete deliverables). Blind spot: D (scenario-driven cross-linking is vague, knowledge graph already exists). All missed: The callout-exam and hi-exam annotations already exist as structured data — a harvesting script needs zero new authoring.

### Review 2
Strongest: E. Blind spot: A (dismisses search too aggressively — at 1000 articles, finding what to drill IS a bottleneck). All missed: Filtering by annotation type across articles (show all hi-exam spans site-wide).

### Review 3
Strongest: C (hierarchy of needs correct). Blind spot: A (retrieval during study IS valuable — cross-article joins). All missed: Graph traversal queries — surface poorly-connected articles, orphans, coverage gaps.

### Review 4
Strongest: D (multi-domain integration is how NRC questions work). Blind spot: B (treats exam prep as vocabulary memorization). All missed: Wrong-answer drill mode driven by existing four-choice justification content.

### Review 5
Strongest: D (multi-domain integration). Blind spot: B (Pagefind returns articles not answers). All missed: Source traceability queries — verification workflows for knowledge integrity.

## Anonymization Mapping
- Response A = Contrarian
- Response B = First Principles Thinker
- Response C = Expansionist
- Response D = Outsider
- Response E = Executor

## Chairman Verdict

See council-report-20260409-search-query.html for the full formatted verdict.
