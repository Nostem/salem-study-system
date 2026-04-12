# Graph Phase 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the knowledge graph readable by adding typed/colored edges, edge filtering, exam node demotion, and label-on-hover behavior.

**Architecture:** Parse edge types from existing Connections section prefixes in `graph-data.ts` (zero article edits), pass types through to both D3 renderers (`graph.ts` and `local-graph.ts`), add a filter panel to the graph page.

**Tech Stack:** TypeScript, D3.js, Astro

**Spec:** `docs/superpowers/specs/2026-04-12-graph-phase1-design.md`

---

### Task 1: Add typed edges and deduplication to `graph-data.ts`

**Files:**
- Modify: `site/src/utils/graph-data.ts`

- [ ] **Step 1: Update interfaces**

Add `type` field to `GraphEdge` and `isExam` field to `GraphNode`:

```typescript
interface GraphEdge {
  source: string;
  target: string;
  type: 'system' | 'procedure' | 'eop' | 'tech-spec' | 'exam' | 'inline';
}

interface GraphNode {
  id: string;
  title: string;
  category: string;
  slug: string;
  connections: number;
  isExam: boolean;
}
```

Update the exported `GraphData` interface (unchanged — still `{ nodes: GraphNode[]; edges: GraphEdge[] }`).

- [ ] **Step 2: Add edge type parsing logic**

Add a function to determine edge type from the Connections section context:

```typescript
const EDGE_TYPE_MAP: Record<string, GraphEdge['type']> = {
  'related systems': 'system',
  'related procedures': 'procedure',
  'related abnormals': 'procedure',
  'related eops': 'eop',
  'related tech specs': 'tech-spec',
  'related exam questions': 'exam',
  'related exam': 'exam',
  'related jpms': 'exam',
  'related scenarios': 'exam',
  'related concepts': 'system',
};

function getEdgeType(line: string): GraphEdge['type'] {
  const lower = line.toLowerCase().trim();
  for (const [prefix, type] of Object.entries(EDGE_TYPE_MAP)) {
    if (lower.startsWith(`- ${prefix}:`)) return type;
  }
  return 'inline';
}
```

- [ ] **Step 3: Rewrite edge extraction with type awareness and deduplication**

Replace the current body-wide wikilink scan with a Connections-aware parser:

```typescript
// Replace the existing edge extraction loop with:
for (const article of articles) {
  if (article.id === '_index') continue;
  const body = article.body ?? '';
  const lines = body.split('\n');
  const edgeSet = new Set<string>(); // for deduplication: "source|target"
  
  let inConnections = false;
  let currentLineType: GraphEdge['type'] = 'inline';
  
  for (const line of lines) {
    // Detect Connections section
    if (/^##\s+Connections/.test(line)) {
      inConnections = true;
      continue;
    }
    // Exit Connections on next ## heading
    if (inConnections && /^##\s+/.test(line) && !/^##\s+Connections/.test(line)) {
      inConnections = false;
    }
    
    // Determine edge type for this line
    if (inConnections && line.trim().startsWith('- ')) {
      currentLineType = getEdgeType(line);
    } else if (!inConnections) {
      currentLineType = 'inline';
    }
    
    // Extract wikilinks from this line
    const matches = [...line.matchAll(WIKILINK_RE)];
    for (const match of matches) {
      const displayName = match[1];
      const targetSlug = titleToSlug.get(displayName.toLowerCase());
      if (targetSlug && targetSlug !== article.id) {
        const edgeKey = `${article.id}|${targetSlug}`;
        if (!edgeSet.has(edgeKey)) {
          edgeSet.add(edgeKey);
          edges.push({ source: article.id, target: targetSlug, type: currentLineType });
          connectionCount[article.id] = (connectionCount[article.id] ?? 0) + 1;
          connectionCount[targetSlug] = (connectionCount[targetSlug] ?? 0) + 1;
        }
      }
    }
  }
}
```

- [ ] **Step 4: Add `isExam` flag to node construction**

In the node building loop, add the `isExam` field:

```typescript
nodes.push({
  id: slug,
  title,
  category,
  slug,
  connections: connectionCount[slug] ?? 0,
  isExam: category === 'exams',
});
```

- [ ] **Step 5: Verify with build**

```bash
cd site && npm run build
```

Expected: clean build. The graph page should still render (types are ignored by the renderers until Task 2).

- [ ] **Step 6: Commit**

```bash
git add site/src/utils/graph-data.ts
git commit -m "feat: typed edges and deduplication in graph-data.ts

Parse edge types from Connections section prefixes (system, procedure,
eop, tech-spec, exam, inline). Deduplicate edges by source+target.
Add isExam flag to nodes. Zero article edits.

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 2: Update full graph page — edge colors, label-on-hover, exam demotion

**Files:**
- Modify: `site/src/scripts/graph.ts`

- [ ] **Step 1: Update interfaces to match graph-data.ts**

```typescript
interface GraphEdge {
  source: string | GraphNode;
  target: string | GraphNode;
  type: 'system' | 'procedure' | 'eop' | 'tech-spec' | 'exam' | 'inline';
}

interface GraphNode {
  id: string;
  title: string;
  category: string;
  slug: string;
  connections: number;
  isExam: boolean;
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
}
```

- [ ] **Step 2: Add edge type color map**

```typescript
const EDGE_COLORS: Record<string, string> = {
  system: '#60a5fa',
  procedure: '#6b7280',
  eop: '#ef4444',
  'tech-spec': '#10b981',
  exam: '#f59e0b',
  inline: '#1a2035',
};
```

- [ ] **Step 3: Apply edge coloring**

Replace the existing edge rendering:

```typescript
const link = g.append('g')
  .selectAll('line')
  .data(data.edges)
  .join('line')
  .attr('stroke', (d: any) => EDGE_COLORS[d.type] ?? '#1a2035')
  .attr('stroke-width', (d: any) => d.type === 'exam' ? 0.5 : 1)
  .attr('stroke-opacity', (d: any) => d.type === 'exam' ? 0.2 : 0.8);
```

- [ ] **Step 4: Demote exam nodes visually**

Update node rendering to handle exam vs structural nodes:

```typescript
const node = g.append('g')
  .selectAll('circle')
  .data(data.nodes)
  .join('circle')
  .attr('r', (d: GraphNode) => d.isExam ? 3 : Math.max(5, Math.min(15, 4 + d.connections * 2)))
  .attr('fill', (d: GraphNode) => CATEGORY_COLORS[d.category] ?? '#6b7280')
  .attr('fill-opacity', (d: GraphNode) => d.isExam ? 0.4 : 1)
  .attr('stroke', '#0a0e17')
  .attr('stroke-width', (d: GraphNode) => d.isExam ? 0.5 : 1.5)
  .style('cursor', 'pointer')
  // ... keep existing click, drag handlers
```

- [ ] **Step 5: Change labels to hover-only (matching local-graph behavior)**

Replace the label creation and hover handlers:

```typescript
// Labels — hidden by default, shown on hover
const label = g.append('g')
  .selectAll('text')
  .data(data.nodes)
  .join('text')
  .text((d: GraphNode) => d.isExam ? '' : d.title)
  .attr('font-size', 10)
  .attr('fill', '#8b95a5')
  .attr('dx', 12)
  .attr('dy', 4)
  .style('pointer-events', 'none')
  .style('opacity', 0);  // Hidden by default
```

Update hover handlers on node:

```typescript
  .on('mouseover', (_event: any, d: GraphNode) => {
    const connected = new Set<string>();
    data.edges.forEach((e: any) => {
      const src = typeof e.source === 'string' ? e.source : e.source.id;
      const tgt = typeof e.target === 'string' ? e.target : e.target.id;
      if (src === d.id) connected.add(tgt);
      if (tgt === d.id) connected.add(src);
    });
    connected.add(d.id);

    node.attr('opacity', (n: GraphNode) => connected.has(n.id) ? 1 : 0.15);
    link.attr('opacity', (e: any) => {
      const src = typeof e.source === 'string' ? e.source : e.source.id;
      const tgt = typeof e.target === 'string' ? e.target : e.target.id;
      return connected.has(src) && connected.has(tgt) ? 1 : 0.05;
    });
    // Show labels for connected non-exam nodes only
    label.style('opacity', (n: GraphNode) => connected.has(n.id) && !n.isExam ? 1 : 0);
  })
  .on('mouseout', () => {
    node.attr('opacity', (n: GraphNode) => n.isExam ? 0.4 : 1);
    link.attr('opacity', (e: any) => {
      const type = (e as any).type ?? 'inline';
      return type === 'exam' ? 0.2 : 0.8;
    });
    label.style('opacity', 0);
  })
```

- [ ] **Step 6: Add tooltip for exam nodes**

Add a title element so hovering over exam nodes shows the question title:

```typescript
node.append('title')
  .text((d: GraphNode) => d.title);
```

Actually, since we're using `selectAll('circle')`, add tooltip via a separate selection or use the existing mouseover. Simplest approach — add `<title>` as a child:

After the node selection, add:
```typescript
// Tooltips for all nodes (especially useful for exam nodes which have no label)
g.selectAll('circle')
  .data(data.nodes)
  .select(function() { return this; })  // reselect
  .append('title')
  .text((d: GraphNode) => d.title);
```

Actually, SVG circles can't have child `<title>` elements via D3 join this way. Instead, wrap each node in a `<g>` or just append title to the existing circles. The simplest D3 approach:

```typescript
node.each(function(d: GraphNode) {
  d3.select(this).append('title').text(d.title);
});
```

Wait — `node` is a selection of `<circle>` elements, and `<circle>` elements CAN have `<title>` children in SVG. But D3's `.join()` returns the circles, and we need to append inside them. Let me use the standard D3 pattern:

```typescript
// After creating node selection, add tooltips
node.append('title').text((d: GraphNode) => d.title);
```

This works because SVG `<circle>` elements accept `<title>` child elements for native browser tooltips.

- [ ] **Step 7: Wire up edge filter function**

Add a function that reads filter checkboxes and updates edge/node visibility:

```typescript
function applyFilters() {
  const checkboxes = document.querySelectorAll<HTMLInputElement>('[data-edge-type]');
  const hiddenTypes = new Set<string>();
  checkboxes.forEach(cb => {
    if (!cb.checked) hiddenTypes.add(cb.dataset.edgeType!);
  });
  
  link
    .attr('stroke-opacity', (d: any) => hiddenTypes.has(d.type) ? 0 : (d.type === 'exam' ? 0.2 : 0.8))
    .attr('pointer-events', (d: any) => hiddenTypes.has(d.type) ? 'none' : 'auto');
  
  // When exam edges hidden, make exam nodes even more transparent
  if (hiddenTypes.has('exam')) {
    node.attr('fill-opacity', (d: GraphNode) => d.isExam ? 0.1 : 1);
  } else {
    node.attr('fill-opacity', (d: GraphNode) => d.isExam ? 0.4 : 1);
  }
}

// Attach filter listeners after DOM ready
document.querySelectorAll('[data-edge-type]').forEach(cb => {
  cb.addEventListener('change', applyFilters);
});

// Apply initial state (exam unchecked by default)
applyFilters();
```

- [ ] **Step 8: Verify with build**

```bash
cd site && npm run build
```

- [ ] **Step 9: Commit**

```bash
git add site/src/scripts/graph.ts
git commit -m "feat: edge colors, label-on-hover, exam demotion, filter wiring

- Color edges by type (blue=system, gray=procedure, red=eop, green=ts, amber=exam)
- Labels hidden by default, shown on hover (matching local-graph)
- Exam nodes: radius 3, opacity 0.4, no labels
- Wire up filter checkboxes to toggle edge type visibility
- Exam edges hidden by default via applyFilters()

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 3: Add filter panel HTML to graph page

**Files:**
- Modify: `site/src/pages/graph.astro`

- [ ] **Step 1: Add filter panel div**

After the existing legend div (bottom-left), add the filter panel (top-right). Insert before the `<script>` tags:

```html
<!-- Edge type filter panel -->
<div class="fixed top-16 right-4 bg-[#0d1220] border border-[#1a2035] rounded-md px-4 py-3 text-[11px] z-10">
  <div class="font-semibold text-[#4b5563] tracking-[1px] uppercase text-[9px] mb-2">Edge Filters</div>
  <div class="flex flex-col gap-1.5">
    <label class="flex items-center gap-2 cursor-pointer">
      <input type="checkbox" data-edge-type="system" checked class="w-3 h-3 accent-[#60a5fa]">
      <span class="w-4 h-0.5 rounded bg-[#60a5fa]"></span>
      <span class="text-[#8b95a5]">Systems</span>
    </label>
    <label class="flex items-center gap-2 cursor-pointer">
      <input type="checkbox" data-edge-type="procedure" checked class="w-3 h-3 accent-[#6b7280]">
      <span class="w-4 h-0.5 rounded bg-[#6b7280]"></span>
      <span class="text-[#8b95a5]">Procedures</span>
    </label>
    <label class="flex items-center gap-2 cursor-pointer">
      <input type="checkbox" data-edge-type="eop" checked class="w-3 h-3 accent-[#ef4444]">
      <span class="w-4 h-0.5 rounded bg-[#ef4444]"></span>
      <span class="text-[#8b95a5]">EOPs</span>
    </label>
    <label class="flex items-center gap-2 cursor-pointer">
      <input type="checkbox" data-edge-type="tech-spec" checked class="w-3 h-3 accent-[#10b981]">
      <span class="w-4 h-0.5 rounded bg-[#10b981]"></span>
      <span class="text-[#8b95a5]">Tech Specs</span>
    </label>
    <label class="flex items-center gap-2 cursor-pointer">
      <input type="checkbox" data-edge-type="exam" class="w-3 h-3 accent-[#f59e0b]">
      <span class="w-4 h-0.5 rounded bg-[#f59e0b]"></span>
      <span class="text-[#8b95a5]">Exam Links</span>
    </label>
    <label class="flex items-center gap-2 cursor-pointer">
      <input type="checkbox" data-edge-type="inline" checked class="w-3 h-3 accent-[#374151]">
      <span class="w-4 h-0.5 rounded bg-[#374151]"></span>
      <span class="text-[#8b95a5]">Inline</span>
    </label>
  </div>
</div>
```

Note: the `exam` checkbox has no `checked` attribute — it defaults to unchecked.

- [ ] **Step 2: Update legend to include procedures and admin categories**

Update the bottom-left legend to add any missing category colors:

```html
<div class="flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-[#6b7280]"></span><span class="text-[#8b95a5]">Procedures</span></div>
<div class="flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-[#6b7280]"></span><span class="text-[#8b95a5]">Admin</span></div>
```

Also remove the "Concepts" entry if it still exists (concepts section was removed from wiki).

- [ ] **Step 3: Verify with build and local preview**

```bash
cd site && npm run build && npm run preview
```

Open `http://localhost:4321/salem-study-system/graph` and verify:
- Filter panel visible top-right with 6 checkboxes
- Exam checkbox unchecked by default
- Toggling checkboxes hides/shows edges of that type
- Labels hidden by default, shown on hover
- Exam nodes small and transparent

- [ ] **Step 4: Commit**

```bash
git add site/src/pages/graph.astro
git commit -m "feat: edge type filter panel on graph page

- 6 edge type checkboxes (system, procedure, eop, tech-spec, exam, inline)
- Exam edges hidden by default (unchecked)
- Updated category legend (added procedures/admin, removed concepts)

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 4: Update local-graph with edge type coloring

**Files:**
- Modify: `site/src/scripts/local-graph.ts`

- [ ] **Step 1: Update interface and add edge colors**

```typescript
interface GraphEdge {
  source: string | GraphNode;
  target: string | GraphNode;
  type: 'system' | 'procedure' | 'eop' | 'tech-spec' | 'exam' | 'inline';
}

const EDGE_COLORS: Record<string, string> = {
  system: '#60a5fa',
  procedure: '#6b7280',
  eop: '#ef4444',
  'tech-spec': '#10b981',
  exam: '#f59e0b',
  inline: '#1a2035',
};
```

- [ ] **Step 2: Apply edge coloring to link rendering**

Replace the existing edge rendering:

```typescript
const link = g.append('g')
  .selectAll('line')
  .data(data.edges)
  .join('line')
  .attr('stroke', (d: any) => EDGE_COLORS[d.type] ?? '#1a2035')
  .attr('stroke-width', 1);
```

- [ ] **Step 3: Verify with build**

```bash
cd site && npm run build
```

- [ ] **Step 4: Commit and push**

```bash
git add site/src/scripts/local-graph.ts
git commit -m "feat: edge type coloring in local-graph

Match full graph edge colors (blue=system, gray=procedure, red=eop,
green=tech-spec, amber=exam).

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
git push
```
