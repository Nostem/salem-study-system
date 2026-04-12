# Graph Phase 1 — Typed Edges, Filtering, Visual Cleanup

**Date:** 2026-04-12
**Status:** Approved

## Goal

Fix the knowledge graph to be readable and useful: deduplicate edges, parse edge types from existing Connections prefixes, add edge coloring and filtering, demote exam nodes visually, and hide labels by default on the full graph page.

## Key Decisions

1. **Zero article edits** — edge types parsed from existing Connections prefix text
2. **Exam nodes stay in force simulation** but render smaller (radius 3), lower opacity (0.4), no labels (tooltip only)
3. **Exam edges hidden by default** in the filter panel — graph loads showing structural connections only
4. **Full graph page labels** adopt local-graph behavior (hidden until hover)
5. **Filter panel** in top-right corner of graph page

## Files Modified

| File | Changes |
|---|---|
| `site/src/utils/graph-data.ts` | Add `type` to `GraphEdge`, add `isExam` to `GraphNode`, parse Connections prefixes, deduplicate edges |
| `site/src/scripts/graph.ts` | Edge coloring by type, label hide-on-hover, exam node demotion, filter panel |
| `site/src/scripts/local-graph.ts` | Edge coloring by type (matches full graph) |
| `site/src/pages/graph.astro` | Filter panel HTML in top-right, update legend |

## Edge Type Parsing

Parse the `## Connections` section line by line. The prefix before the colon determines the edge type for all `[[wikilinks]]` on that line.

| Connections Prefix | Edge Type |
|---|---|
| `Related systems:` | `system` |
| `Related procedures:` | `procedure` |
| `Related EOPs:` | `eop` |
| `Related tech specs:` | `tech-spec` |
| `Related exam questions:`, `Related exam:`, `Related JPMs:`, `Related scenarios:` | `exam` |
| *(any wikilink outside Connections section or unmatched prefix)* | `inline` |

Parsing logic:
1. Find the `## Connections` section in the article body
2. For each line in that section, check if it starts with `- Related [type]:` 
3. Extract all `[[wikilinks]]` on that line and assign the matched type
4. Any `[[wikilinks]]` found BEFORE the Connections section (inline in article body) get type `inline`
5. Normalize variant prefixes: `Related abnormals:` → `procedure`, `Related concepts:` → `system`

## Edge Deduplication

Before pushing an edge, check if an edge with the same `source + target` already exists. If so, skip it (keep the first occurrence). This prevents duplicate edges from articles that mention the same target in both body text and Connections.

## GraphEdge Interface

```typescript
interface GraphEdge {
  source: string;
  target: string;
  type: 'system' | 'procedure' | 'eop' | 'tech-spec' | 'exam' | 'inline';
}
```

## GraphNode Interface

```typescript
interface GraphNode {
  id: string;
  title: string;
  category: string;
  slug: string;
  connections: number;
  isExam: boolean;  // true when category is 'exams'
}
```

## Edge Type Colors

| Type | Color | Notes |
|---|---|---|
| `system` | `#60a5fa` (blue) | System-to-system, system-to-procedure |
| `procedure` | `#6b7280` (gray) | Procedure links |
| `eop` | `#ef4444` (red) | EOP links |
| `tech-spec` | `#10b981` (green) | Tech spec links |
| `exam` | `#f59e0b33` (amber, 20% opacity) | Exam question/JPM/scenario links |
| `inline` | `#1a2035` (dark) | Body text wikilinks |

## Full Graph Page Changes (`graph.ts`)

### Labels
- Default opacity: 0 (hidden)
- On node hover: show labels for hovered node + all connected nodes (opacity 1)
- On mouseout: hide all labels (opacity 0)
- Same behavior as `local-graph.ts` already implements

### Exam Node Demotion
- `isExam` nodes: radius fixed at 3, fill opacity 0.4, stroke-width 0.5
- Non-exam nodes: radius scales with connections (existing formula: `Math.max(5, Math.min(15, 4 + connections * 2))`)
- Exam nodes never show labels (even on hover of the exam node itself — only tooltip with title)

### Filter Panel (top-right)
- Fixed position, same styling as the bottom-left legend
- One checkbox per edge type, labeled with the type name and its color dot
- `exam` checkbox unchecked by default — graph loads without exam edges
- Toggling a checkbox sets opacity 0 or 1 on all edges of that type
- When exam edges are hidden, exam nodes also become more transparent (opacity 0.15) since they're disconnected from visible structure

### Updated Legend (bottom-left)
- Add "Procedures" and "Admin" category colors if they're not already there
- Keep existing category color dots

## Local Graph Changes (`local-graph.ts`)

- Edge stroke color set by type (same color map as full graph)
- No filter panel needed (already scoped to one article)
- No other behavioral changes

## Graph Page HTML (`graph.astro`)

Add filter panel div:
```html
<div class="fixed top-16 right-4 bg-[#0d1220] border border-[#1a2035] rounded-md px-4 py-3 text-[11px] z-10">
  <div class="font-semibold text-[#4b5563] tracking-[1px] uppercase text-[9px] mb-2">Edge Filters</div>
  <div class="flex flex-col gap-1">
    <label class="flex items-center gap-2 cursor-pointer">
      <input type="checkbox" data-edge-type="system" checked class="accent-[#60a5fa]">
      <span class="w-2.5 h-0.5 bg-[#60a5fa] rounded"></span>
      <span class="text-[#8b95a5]">Systems</span>
    </label>
    <!-- repeat for procedure, eop, tech-spec, exam (unchecked), inline -->
  </div>
</div>
```

## Not Building

- No article edits or new linking syntax
- No YAML frontmatter migration
- No asymmetric edge types
- No exam-frequency weighting
- No "no same-category links" rule changes (Phase 2)
