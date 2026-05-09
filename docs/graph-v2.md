# Graph v2 preview

Graph v2 is an additive experiment beside the existing `/graph/` page. It does not replace the current D3 wiki-only graph.

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

## Preview route

The experimental route is `/graph-v2/` and is marked `noindex,nofollow`.

For now it renders a searchable/listable preview rather than replacing the production force graph. This keeps the milestone low-risk while verifying that the graph data model is useful and source-traceable.

The known 2023 Q23 regression should show:

- question node: `question:q23-eop-flowchart-symbols-concurrent`
- topic edge to `topic:admin`
- source wiki edge to `article:exams/2023/q23-eop-flowchart-symbols-concurrent`
- source/K/A edges through `sourced-from`

## Non-goals

- No replacement of `/graph/` yet.
- No quiz or review behavior changes.
- No semantic embeddings or weak-area diagnosis yet.
- No generated questions.
