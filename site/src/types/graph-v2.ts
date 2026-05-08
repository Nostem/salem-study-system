/**
 * Graph v2 data shape.
 *
 * Additive over the existing wiki-only graph (`site/src/utils/graph-data.ts`).
 * Combines wiki articles with structured quiz bank entities (questions, topics,
 * source refs) so a single graph can show how exam questions connect back to
 * wiki content, K/A codes, and source-bank labels.
 *
 * Stable id format: `<kind>:<key>`. Keys are slugs where available, otherwise
 * a normalized label. IDs are preserved across runs so URLs / tests can target
 * specific nodes.
 */

export type GraphV2NodeKind = 'article' | 'question' | 'topic' | 'source';

export type GraphV2EdgeType =
  | 'wikilink'        // article → article (existing wiki graph)
  | 'tests'           // question → topic
  | 'topic-wiki'      // topic → article (topic.wikiSlug pointer)
  | 'quiz-source'     // question → article (sourceRefs[].kind === 'wiki')
  | 'sourced-from';   // question → source (sourceRefs[].kind === 'source' | 'quiz-bank')

export interface GraphV2Node {
  id: string;
  kind: GraphV2NodeKind;
  /** human label */
  title: string;
  /** stable secondary key (slug or normalized label) */
  slug: string;
  /** sub-category for color/grouping */
  subcategory?: string;
  /** computed degree */
  connections: number;
  /** opaque metadata for the UI */
  meta?: Record<string, unknown>;
}

export interface GraphV2Edge {
  source: string;
  target: string;
  type: GraphV2EdgeType;
}

export interface GraphV2Counts {
  totalNodes: number;
  totalEdges: number;
  nodesByKind: Record<GraphV2NodeKind, number>;
  edgesByType: Record<GraphV2EdgeType, number>;
}

export interface GraphV2Data {
  nodes: GraphV2Node[];
  edges: GraphV2Edge[];
  counts: GraphV2Counts;
}

/** Minimal input shape for the wiki side of the graph (decoupled from Astro). */
export interface WikiArticleInput {
  id: string;
  title: string;
  category: string;
  body: string;
  aliases?: string[];
}
