import { getCollection } from 'astro:content';
import type { StructuredQuizBank, StructuredQuestion, SourceRef } from '../types/question-blocks';
import type {
  GraphV2Counts,
  GraphV2Data,
  GraphV2Edge,
  GraphV2EdgeType,
  GraphV2Node,
  GraphV2NodeKind,
  WikiArticleInput,
} from '../types/graph-v2';
import quizBankV2Json from '../data/quiz-bank-v2.json';

const WIKILINK_RE = /\[\[([^\]]+)\]\]/g;

/** Stable id for an article node. */
export function articleNodeId(slug: string): string {
  return `article:${slug}`;
}
export function questionNodeId(slug: string): string {
  return `question:${slug}`;
}
export function topicNodeId(slug: string): string {
  return `topic:${slug}`;
}
export function sourceNodeId(kind: string, label: string): string {
  const key = `${kind}:${label}`.toLowerCase().replace(/[^a-z0-9:]+/g, '-').replace(/-+/g, '-');
  return `source:${key}`;
}

/**
 * Build graph v2 data from already-loaded inputs. Pure — no IO. Suitable for
 * unit tests with fixtures.
 */
export function buildGraphV2(
  articles: WikiArticleInput[],
  bank: StructuredQuizBank,
): GraphV2Data {
  const nodes: GraphV2Node[] = [];
  const edges: GraphV2Edge[] = [];
  const nodeIndex = new Map<string, GraphV2Node>();
  const edgeKeys = new Set<string>();
  const titleToSlug = new Map<string, string>();
  const articleSlugIndex = new Map<string, string>();

  function addNode(node: GraphV2Node): GraphV2Node {
    const existing = nodeIndex.get(node.id);
    if (existing) return existing;
    nodeIndex.set(node.id, node);
    nodes.push(node);
    return node;
  }
  function addEdge(edge: GraphV2Edge): void {
    const key = `${edge.type}|${edge.source}|${edge.target}`;
    if (edgeKeys.has(key)) return;
    if (!nodeIndex.has(edge.source) || !nodeIndex.has(edge.target)) return;
    if (edge.source === edge.target) return;
    edgeKeys.add(key);
    edges.push(edge);
  }

  // --- Wiki article nodes ----------------------------------------------------
  for (const article of articles) {
    if (article.id === '_index') continue;
    addNode({
      id: articleNodeId(article.id),
      kind: 'article',
      slug: article.id,
      title: article.title,
      subcategory: article.category,
      connections: 0,
    });
    titleToSlug.set(article.title.toLowerCase(), article.id);
    articleSlugIndex.set(article.id.toLowerCase(), article.id);
    articleSlugIndex.set(article.id.split('/').pop()!.toLowerCase(), article.id);
    for (const alias of article.aliases ?? []) {
      titleToSlug.set(alias.toLowerCase(), article.id);
      articleSlugIndex.set(alias.toLowerCase(), article.id);
    }
  }

  function resolveArticleSlug(slugOrPath: string | undefined): string | undefined {
    if (!slugOrPath) return undefined;
    const cleaned = slugOrPath
      .replace(/^wiki\//, '')
      .replace(/\.md$/, '')
      .toLowerCase();
    return articleSlugIndex.get(cleaned) ?? articleSlugIndex.get(cleaned.split('/').pop() ?? '');
  }

  // --- Wikilink edges --------------------------------------------------------
  for (const article of articles) {
    if (article.id === '_index') continue;
    const matches = (article.body ?? '').matchAll(WIKILINK_RE);
    for (const match of matches) {
      const target = titleToSlug.get(match[1].toLowerCase());
      if (!target || target === article.id) continue;
      addEdge({
        source: articleNodeId(article.id),
        target: articleNodeId(target),
        type: 'wikilink',
      });
    }
  }

  // --- Topic nodes -----------------------------------------------------------
  // Bank-level topics are the canonical list; question-level topics may
  // reference any of them.
  for (const t of bank.topics ?? []) {
    const topic = t as { slug?: string; title?: string; topic_type?: string; wiki_slug?: string };
    if (!topic.slug || !topic.title) continue;
    addNode({
      id: topicNodeId(topic.slug),
      kind: 'topic',
      slug: topic.slug,
      title: topic.title,
      subcategory: topic.topic_type,
      connections: 0,
      meta: { wikiSlug: topic.wiki_slug },
    });
    const articleSlug = resolveArticleSlug(topic.wiki_slug);
    if (articleSlug) {
      addEdge({
        source: topicNodeId(topic.slug),
        target: articleNodeId(articleSlug),
        type: 'topic-wiki',
      });
    }
  }

  // --- Question nodes + per-question edges ----------------------------------
  for (const q of bank.questions) {
    const qNode = addNode(questionNodeIdNode(q));
    for (const t of q.topics ?? []) {
      const topic = t as { slug?: string; title?: string; topicType?: string; wikiSlug?: string };
      if (!topic.slug) continue;
      // Ensure the topic node exists even if not present in bank.topics list.
      if (!nodeIndex.has(topicNodeId(topic.slug))) {
        addNode({
          id: topicNodeId(topic.slug),
          kind: 'topic',
          slug: topic.slug,
          title: topic.title ?? topic.slug,
          subcategory: topic.topicType,
          connections: 0,
          meta: { wikiSlug: topic.wikiSlug },
        });
      }
      addEdge({ source: qNode.id, target: topicNodeId(topic.slug), type: 'tests' });
    }
    for (const ref of q.sourceRefs ?? []) {
      addSourceEdge(qNode.id, ref, resolveArticleSlug, addNode, addEdge);
    }
  }

  // --- Compute connection counts --------------------------------------------
  for (const e of edges) {
    const s = nodeIndex.get(e.source);
    const t = nodeIndex.get(e.target);
    if (s) s.connections++;
    if (t) t.connections++;
  }

  return { nodes, edges, counts: computeCounts(nodes, edges) };
}

function questionNodeIdNode(q: StructuredQuestion): GraphV2Node {
  const trackPart = q.track ? ` ${q.track}` : '';
  return {
    id: questionNodeId(q.slug),
    kind: 'question',
    slug: q.slug,
    title: q.title || `${q.examYear}${trackPart} Q${q.questionNumber}`,
    subcategory: String(q.examYear),
    connections: 0,
    meta: {
      examYear: q.examYear,
      questionNumber: q.questionNumber,
      track: q.track,
      examType: q.examType,
      status: q.status,
    },
  };
}

function addSourceEdge(
  questionId: string,
  ref: SourceRef,
  resolveArticleSlug: (slugOrPath: string | undefined) => string | undefined,
  addNode: (n: GraphV2Node) => GraphV2Node,
  addEdge: (e: GraphV2Edge) => void,
): void {
  if (ref.kind === 'wiki') {
    const articleSlug = resolveArticleSlug(ref.path ?? ref.slug);
    if (!articleSlug) return;
    addEdge({
      source: questionId,
      target: articleNodeId(articleSlug),
      type: 'quiz-source',
    });
    return;
  }
  const label = ref.label || ref.slug || ref.path;
  if (!label) return;
  const id = sourceNodeId(ref.kind, label);
  addNode({
    id,
    kind: 'source',
    slug: id.replace(/^source:/, ''),
    title: label,
    subcategory: ref.kind,
    connections: 0,
  });
  addEdge({ source: questionId, target: id, type: 'sourced-from' });
}

function computeCounts(nodes: GraphV2Node[], edges: GraphV2Edge[]): GraphV2Counts {
  const nodesByKind: Record<GraphV2NodeKind, number> = {
    article: 0,
    question: 0,
    topic: 0,
    source: 0,
  };
  const edgesByType: Record<GraphV2EdgeType, number> = {
    wikilink: 0,
    tests: 0,
    'topic-wiki': 0,
    'quiz-source': 0,
    'sourced-from': 0,
  };
  for (const n of nodes) nodesByKind[n.kind]++;
  for (const e of edges) edgesByType[e.type]++;
  return {
    totalNodes: nodes.length,
    totalEdges: edges.length,
    nodesByKind,
    edgesByType,
  };
}

/** Astro-side entry point. Loads the wiki collection and the bundled bank. */
export async function generateGraphV2Data(): Promise<GraphV2Data> {
  const articles = await getCollection('wiki');
  const wikiInputs: WikiArticleInput[] = articles
    .filter((a) => a.id !== '_index')
    .map((a) => ({
      id: a.id,
      title:
        a.data.title ??
        a.id.split('/').pop()?.replace(/-/g, ' ') ??
        a.id,
      category: a.id.split('/')[0] ?? 'uncategorized',
      body: a.body ?? '',
      aliases: a.data.aliases ?? [],
    }));
  const bank = quizBankV2Json as unknown as StructuredQuizBank;
  return buildGraphV2(wikiInputs, bank);
}
