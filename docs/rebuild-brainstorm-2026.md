# Salem Study System Rebuild Brainstorm — 2026 Direction

> Status: planning / product architecture discussion. This is not an implementation plan yet.

## Product framing

The next version should be a Salem-specific, source-traceable NRC exam prep knowledge base with serious quiz/review functionality.

The knowledge base remains the center of the product. Quiz generation, review, progress, graph exploration, and future study tooling should all orbit the wiki rather than replacing it.

The product should support other Salem candidates, not just one personal workflow, but it does not need to generalize to other plants yet.

## Confirmed decisions

- **Primary users:** other Salem candidates, initially still Salem-specific.
- **Primary surface:** knowledge base first; quiz/review app second.
- **AI tutor:** shelved for now. Do not design the near-term architecture around chat/tutoring.
- **Question generation boundary:** only transform/recombine existing ingested questions for now. Do not generate novel unsourced questions yet.
- **Spaced repetition:** serious FSRS-style review scheduling, not a light “missed questions” list.
- **Graph functionality:** support visual exploration, source/relationship navigation, AI/retrieval readiness later, and study path generation. Weak-area diagnosis is not a current goal.
- **Mobile:** important. Minimum mobile functions are generating/reviewing quizzes and navigating the wiki.
- **Hosting/app architecture:** open to moving the app side if that is the best path. GitHub Pages simplicity is valuable, but not sacred.

## What we know from the current system

The current MVP works and should remain live while the next architecture is designed.

Current strengths:

- Static Astro wiki is fast, durable, and easy to publish.
- Git/GitHub history is useful for content review.
- Supabase Auth/progress foundation exists.
- Quiz builder and generated quiz bank are functional.
- Contact feedback to GitHub issues works.
- Graph view exists and proves relationship browsing has value.
- Tests now cover several important quiz-bank and UI regressions.

Current friction:

- Markdown, static JSON, and Supabase records share canonical responsibility.
- Quiz content parsing is too brittle for rich stems, images, and tables.
- Graph edges are inferred from wikilinks rather than typed domain relationships.
- Quiz generation is mostly frontend/static filtering rather than a learning engine.
- Progress exists, but serious review scheduling does not.
- Mobile behavior is not yet a first-class constraint.
- Source traceability exists, but is not yet a structured workflow across every content object.

## Proposed north star

A Salem candidate opens the knowledge base, studies source-traceable wiki pages, generates quizzes from existing ingested NRC questions, reviews due material through FSRS scheduling, and uses graph/study-path views to understand how systems, EOPs, Tech Specs, concepts, and questions connect.

The system should answer:

- What should I study from the Salem knowledge base?
- What questions can I generate from this topic/source/system/year/status?
- What review items are due today?
- What source material supports this question/explanation?
- What graph slice helps me understand this system, procedure, or exam topic?
- How do I move from a wiki page into a focused quiz or review session?

## Architecture principle

Separate the system into three layers:

1. **Canonical learning data** — typed source documents, wiki nodes, questions, choices, explanations, media, graph edges, and review state.
2. **Learning engine** — quiz session creation, question selection, FSRS scheduling, transformations/recombinations, progress persistence.
3. **Interfaces** — wiki pages, quiz builder, review queue, graph explorer, question browser, admin/review tools.

The current site blends these layers. The rebuild should make them explicit.

## Data model direction

### Source and content objects

Core tables or typed collections should include:

- `sources`
- `source_documents`
- `source_chunks`
- `wiki_nodes`
- `knowledge_edges`
- `questions`
- `question_blocks`
- `choices`
- `choice_blocks`
- `explanations`
- `question_sources`
- `media_assets`
- `tags`
- `question_tags`
- `verification_events`

### Learner objects

- `quiz_sessions`
- `quiz_session_questions`
- `question_attempts`
- `user_question_state`
- `review_items`
- `review_attempts`
- `fsrs_card_state`

### Why this matters

A question should not depend on a lossy `stemText` string plus optional ad hoc `stemHtml`. It should be structured as renderable blocks.

Example:

```json
{
  "stemBlocks": [
    { "type": "paragraph", "text": "When proceeding through the EOP Network..." },
    { "type": "image", "src": "/exam-images/2023-q23-symbol.png", "alt": "Concurrent step symbol" },
    { "type": "paragraph", "text": "What does this symbol denote?" }
  ]
}
```

The Q23 image bug is a concrete reason to move in this direction.

## Quiz and review engine

The quiz/review system should distinguish between quiz modes and review modes.

### Quiz modes

- Exam simulation.
- Year-specific quiz.
- RO/SRO/status-filtered quiz.
- System/topic quiz.
- Tech Spec drill.
- EOP/procedure drill.
- Question browser/manual selection.
- Recombined quiz from existing ingested questions only.

### Review modes

- Daily due review.
- Recently missed.
- Lapsed questions.
- New question acquisition.
- Maintenance review.

### FSRS direction

Use a real FSRS-style state model rather than a simple correct/incorrect count.

Each reviewable item should track at least:

- stability
- difficulty
- retrievability estimate
- due date
- last reviewed time
- review count
- lapse count
- last grade
- response time if available
- source question/version

Initially, review items must map one-to-one with existing whole NRC questions only. Do not create derived microcards in the first FSRS implementation. Later, verified derived microcards can be considered after the question schema and review engine are stable.

## Graph direction

The graph should become semantic and queryable, not only visual.

### Node types

- system
- component
- concept
- procedure
- EOP
- abnormal
- Tech Spec
- setpoint
- alarm
- instrument
- exam question
- source document

### Edge types

- references
- tests
- supports
- requires
- enters
- mitigates
- causes
- trips
- isolates
- verifies
- belongs_to
- prerequisite_for
- related_to

### Graph use cases

- From a wiki page, show connected exam questions.
- From a question, show source basis and related wiki pages.
- From a system, show related Tech Specs, EOPs, and tested questions.
- Generate study paths through graph slices.
- Visualize local neighborhoods instead of only the whole graph.
- Prepare future retrieval/tutor architecture without building the tutor now.

Weak-area diagnosis is intentionally not a current graph requirement.

## Mobile requirements

Mobile does not need full feature parity.

Minimum mobile behavior:

- Navigate wiki articles comfortably.
- Search wiki/question bank.
- Generate a quiz.
- Answer and review quiz questions.
- Complete due FSRS review.
- See simple progress/review status.

Graph mobile behavior can be simplified:

- Local relationship lists.
- Tap-through graph neighborhoods.
- Avoid complex force-directed exploration as the primary mobile graph UI.

## App architecture options

### Option A — Keep Astro plus stronger app islands

Use Astro for the knowledge base and static pages. Add focused React/Svelte islands for quiz, review, graph, and progress. Supabase remains backend.

Pros:

- Lowest disruption.
- Preserves GitHub Pages/static wiki strengths.
- Easier migration from current site.

Cons:

- Dynamic app behavior remains somewhat awkward.
- More client-side complexity.
- Server-side quiz/session generation may require Supabase Edge Functions or a separate API.

### Option B — Split wiki and app

Keep Astro for the knowledge base. Build an authenticated app side separately with Next.js, Remix, or SvelteKit.

Pros:

- Clean separation between durable wiki and interactive learning app.
- Better routing/auth/server behavior for quiz sessions and review scheduling.
- Easier to grow admin/review tools.

Cons:

- More deployment complexity.
- Shared types/content contracts required.
- Need careful UX so wiki and app feel like one product.

### Option C — Full app framework migration

Move the whole product to an app framework.

Pros:

- Unified stack.
- Best dynamic behavior.

Cons:

- Highest rewrite risk.
- Risks losing the simplicity and durability of the current wiki.
- Not necessary yet.

### Current recommendation

Prefer **Option B eventually**, but use **Option A as the migration bridge**.

The current Astro knowledge base should remain live. Build the new canonical data model and app behaviors behind it. If app complexity keeps growing, split the app side once the boundary is obvious.

## Migration strategy

Do not rewrite everything at once.

### Phase 0 — Stabilize current production

- Keep current site live.
- Keep tests green.
- Preserve existing quiz/history/contact functionality.
- Avoid large rewrites until the data model is clear.

### Phase 1 — Structured question model

- Define rich block schema for question stems, choices, explanations, and media.
- Migrate generated quiz bank toward block content.
- Add tests around images, tables, procedure symbols, multiline choices, and source references.
- Keep existing UI rendering compatible during transition.

### Phase 2 — Backend quiz sessions

- Create server/backend-owned quiz sessions.
- Store generated question order, filters, seed, and chosen questions.
- Persist attempts against session/question IDs.
- Keep frontend focused on rendering and submission.

### Phase 3 — FSRS review

- Add review item and FSRS state tables.
- Start with existing questions as review items.
- Add daily due review UI.
- Add simple mobile-first review flow.

### Phase 4 — Semantic graph

- Introduce typed `knowledge_edges`.
- Backfill edges from existing wikilinks and frontmatter.
- Add local graph neighborhoods on wiki pages.
- Keep the D3 global graph as secondary/exploratory.

### Phase 5 — Recombined quizzes

- Build transformations/recombinations from existing ingested questions only.
- Require traceability back to original question/source.
- Add review/admin flags for transformed content.

### Phase 6 — App split if needed

- If Astro islands + Supabase Edge Functions become awkward, split interactive app into a dedicated framework.
- Preserve the Astro wiki as the public/static knowledge base.

## Near-term design questions

1. Should quiz sessions require login, or allow anonymous/local quiz mode with optional sync?
2. Should FSRS review items be exactly whole NRC questions at first? **Decision: yes.** Do not create verified microcards in the first FSRS pass.
3. Should transformed/recombined quizzes be saved as durable question variants, or generated per session and discarded?
4. Should graph edges be editable in an admin UI, markdown frontmatter, or both?
5. Should source chunks live in Supabase, local JSON, or both during the transition?
6. What is the minimum private beta user-management flow for other Salem candidates?
7. Should mobile quiz/review be built as a PWA target from the start?

## Working recommendation

Keep the current Astro wiki as the product center. Rebuild the learning layer underneath it around structured question blocks, backend-created quiz sessions, serious FSRS scheduling, and a semantic graph. Defer AI tutoring until the source/content/graph foundation is reliable enough to ground it safely.
