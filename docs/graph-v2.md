# Study Map / Graph v2

Study Map (`/graph-v2/`) is the learner-facing graph-linked practice route. It remains additive beside the legacy `/graph/` page, but it is no longer only a preview: it is part of the main study loop and can launch Study Builder sessions.

## Purpose

The current graph shows wiki article-to-article wikilinks. That is useful for browsing the knowledge base, but it does not expose how NRC questions connect to topics, source wiki pages, K/A labels, and other quiz-bank source references.

Graph v2 combines:

- wiki article nodes from the Astro content collection
- structured question nodes from `site/src/data/quiz-bank-v2.json`
- topic nodes from the structured quiz bank
- source-reference nodes for imported source labels and K/A labels

## Node IDs

Graph v2 uses stable IDs so future routes, tests, and saved study paths can target nodes without depending on display text.

Examples:

- `article:exams/2023/q23-eop-flowchart-symbols-concurrent`
- `question:q23-eop-flowchart-symbols-concurrent`
- `topic:admin`
- `source:quiz-bank:k-a-w-e01-e02-g2-4-19`

## Edge types

- `wikilink`: article → article from existing wiki links
- `tests`: question → topic
- `topic-wiki`: topic → wiki article when the topic has a resolvable wiki slug
- `quiz-source`: question → source wiki article
- `sourced-from`: question → imported source/K/A label node

## Current route

The route is `/graph-v2/`, surfaced to learners as **Study Map**. It renders a mobile-friendly searchable/listable map instead of forcing the old D3 graph interaction. Selecting nodes shows source relationships, related questions, study actions, and graph-generated quiz pools.

The known 2023 Q23 regression should show:

- question node: `question:q23-eop-flowchart-symbols-concurrent`
- topic edge to `topic:admin`
- source wiki edge to `article:exams/2023/q23-eop-flowchart-symbols-concurrent`
- source/K/A edges through `sourced-from`

## Current boundaries and next layer

- Legacy `/graph/` remains available but is de-emphasized.
- Study Map launches Study Builder via resolved `slugs=` or topic filters; it does not generate new questions.
- The graph uses explicit imported edges today: wikilinks, question-topic tests, topic-wiki links, quiz-source links, and source refs.
- The next semantic layer should add reusable local-path logic, typed study paths, and clearer question-pool explanations before any embedding-based recommendations.
