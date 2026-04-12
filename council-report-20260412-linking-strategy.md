# Council Verdict: Wiki Linking Strategy

*April 12, 2026 — 5 advisors, 5 peer reviews, 1 chairman synthesis*

---

## Bottom Line

> **Kill the "no same-category links" rule.** Parse edge types from existing Connections prefixes. Demote exam questions from graph nodes to annotations. Three phases, each independently shippable.
>
> **Skip:** YAML frontmatter migration. Too expensive for the payoff.

---

## Advisor Alignment

| Advisor | Position | Alignment |
|---|---|---|
| **Contrarian** | Fix taxonomy, remove exam nodes | Partially aligned |
| **First Principles** | Typed edges, semantic layer | Aligned |
| **Expansionist** | YAML links, causal model | Good ideas, too expensive |
| **Outsider** | Inline labels, exam sidebar | Aligned |
| **Executor** | Parse existing prefixes, zero edits | Aligned |

---

## Where the Council Agrees

- **Kill the "no same-category links" rule.** Every advisor wants it gone. It was a bandage for an untyped graph. With filterable edge types, system-to-system links (RCS-Pressurizer, ECCS-RHR) become essential, not noise.
- **Exam questions are polluting the graph.** Whether called "annotations" or "a different layer," exam nodes belong in a secondary view — not competing for D3 force-simulation space with plant systems.
- **Edge deduplication is missing.** Every peer reviewer caught this: `graph-data.ts` pushes duplicate edges silently, inflating node degree and visual density. This is a bug, not a design question.

---

## Where the Council Clashes

### Cost of change

**Executor:** Zero article edits — parse existing Connections prefixes. True but incomplete; prefixes are inconsistent.

**First Principles + Expansionist:** New schema (typed prefixes or YAML frontmatter) — richer semantics but 450+ file edits.

**Contrarian:** Taxonomy reform first — intellectually correct but blocks all progress.

**Resolution:** Executor's approach works *now* with a normalization pass. Richer schemas become Phase 2 only if Phase 1 proves insufficient.

---

## The Recommendation

### Phase 1 — Fix the graph engine (zero article edits)

1. **Deduplicate edges** in `graph-data.ts`. Visibly reduces clutter immediately.
2. **Parse edge types** from existing Connections prefixes ("Related systems:", "Related EOPs:", etc.). Normalize ~15 variants to ~6 canonical types.
3. **Color-code edges** by type + **add filter checkboxes** to graph UI.
4. **Demote exam question nodes** from force simulation. Render as count badge or sidebar on parent node hover.

### Phase 2 — Kill the rule, add missing links

1. **Abolish** "no same-category links" rule in CLAUDE.md and memory.
2. **Add system-to-system links** where plant topology demands (RCS-Pressurizer, ECCS-RHR, AFW-SG, etc.).
3. **Normalize** any inconsistent Connections prefixes found in Phase 1.

### Phase 3 — Richer semantics (only if needed)

1. Asymmetric relation labels inline: `[[ECCS]] (trains-with)`. Controlled vocabulary enforced by wikilink check.
2. Exam-frequency weighting on edges — for study-path mode.

**Skip entirely:** YAML frontmatter link migration. Cost-to-benefit ratio is terrible for a single-user wiki maintained by an LLM agent.

---

## The One Thing to Do First

Open `site/src/utils/graph-data.ts`. Add edge deduplication and parse edge types from existing Connections prefixes. That single file change — touching zero wiki articles — fixes the bug every reviewer spotted, enables filtering, and proves out the strategy before committing to any article edits.

---

## Full Advisor Responses

<details>
<summary>The Contrarian</summary>

450 nodes is a content org problem, not a graph problem. Typed edges double cognitive load. Create parent concept articles as hubs. REMOVE exam questions from graph — they're annotations, not nodes. Strip them and graph drops to 200 readable nodes. Fix taxonomy first.
</details>

<details>
<summary>The First Principles Thinker</summary>

Two users need different things. Replace headers with typed prefixes (depends-on, tested-by). Abolish no-same-category rule. Weight edges by exam frequency. Use links as queryable semantic layer, not navigation decoration.
</details>

<details>
<summary>The Expansionist</summary>

YAML frontmatter links with target/type/weight. Asymmetric edges: RCS "feeds-into" ECCS, ECCS "protects" RCS. Turns graph into causal plant model. D3 filtering, study paths via prerequisite edges.
</details>

<details>
<summary>The Outsider</summary>

Kill no-same-category rule. Add inline relation labels. Move exam questions out of D3 force simulation — render as sidebar on hover. Graph shows conceptual layer only; exams are annotations.
</details>

<details>
<summary>The Executor</summary>

Connections prefixes ARE edge type metadata — graph-data.ts throws them away. Three steps: parse types, color edges, add filters. Zero article edits. Monday deliverable.
</details>

---

## Peer Review Highlights

**Strongest:** Executor (E) — only response that read the actual code. Zero article edits verifiably true.

**Key blind spot:** Connections prefixes are inconsistent across articles ("Related systems" vs "Related exam" vs "Related scenarios"). Needs normalization.

**What ALL five missed:** `graph-data.ts` has no edge deduplication. Duplicate edges silently inflate node degree and density. Also no directional connection counting — hub nodes appear artificially large. This is a bug prerequisite to any strategy working.

---

*Council convened April 12, 2026. Question: "How should we restructure the wiki linking strategy for a cleaner knowledge graph?"*
