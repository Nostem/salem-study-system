import type { GraphV2Data, GraphV2Edge, GraphV2EdgeType, GraphV2Node } from '../types/graph-v2';

const TOP_ARTICLES = 200;

const edgeOrder: GraphV2EdgeType[] = [
  'wikilink',
  'tests',
  'topic-wiki',
  'quiz-source',
  'sourced-from',
];

const edgeTypeLabels: Record<GraphV2EdgeType, string> = {
  wikilink: 'Wiki link',
  tests: 'Question tests topic',
  'topic-wiki': 'Topic wiki page',
  'quiz-source': 'Question source article',
  'sourced-from': 'Source reference',
};

export type GraphV2DetailEdge = { type: string; nodeId: string; title: string };
export type GraphV2DetailQuestion = { id: string; title: string; kind: string; examYear?: unknown; questionNumber?: unknown };
export type GraphV2DetailPath = {
  label: string;
  quizHref?: string;
  steps: Array<{ nodeId: string; title: string; kind: string; note?: string }>;
};
export type GraphV2DetailData = {
  id: string;
  kind: string;
  subcategory?: string;
  connections: number;
  title: string;
  slug: string;
  openHref?: string;
  quizHref?: string;
  eligibleQuestionCount: number;
  eligibleQuestionSlugs: string[];
  edgeSummary: Array<{ type: string; label: string; count: number }>;
  metaEntries: Array<{ label: string; value: string }>;
  studyPaths: GraphV2DetailPath[];
  relatedQuestions: GraphV2DetailQuestion[];
  relatedQuestionCount: number;
  outgoing: GraphV2DetailEdge[];
  incoming: GraphV2DetailEdge[];
};
export type GraphV2DetailDataById = Record<string, GraphV2DetailData>;

export function renderedGraphV2Nodes(graph: GraphV2Data, topArticles = TOP_ARTICLES): GraphV2Node[] {
  const articleNodes = graph.nodes
    .filter((n) => n.kind === 'article')
    .sort((a, b) => b.connections - a.connections)
    .slice(0, topArticles);
  const otherNodes = graph.nodes.filter((n) => n.kind !== 'article');
  return [...articleNodes, ...otherNodes].sort((a, b) => b.connections - a.connections);
}

export function createGraphV2DetailHelpers(graph: GraphV2Data, base: string) {
  const nodeById = new Map(graph.nodes.map((n) => [n.id, n]));
  const edgesBySource = new Map<string, GraphV2Edge[]>();
  const edgesByTarget = new Map<string, GraphV2Edge[]>();
  const edgeTypesByNode = new Map<string, Set<string>>();
  const neighborsByNode = new Map<string, Set<string>>();

  for (const e of graph.edges) {
    if (!edgesBySource.has(e.source)) edgesBySource.set(e.source, []);
    if (!edgesByTarget.has(e.target)) edgesByTarget.set(e.target, []);
    edgesBySource.get(e.source)!.push(e);
    edgesByTarget.get(e.target)!.push(e);
    if (!edgeTypesByNode.has(e.source)) edgeTypesByNode.set(e.source, new Set());
    if (!edgeTypesByNode.has(e.target)) edgeTypesByNode.set(e.target, new Set());
    edgeTypesByNode.get(e.source)!.add(e.type);
    edgeTypesByNode.get(e.target)!.add(e.type);
    if (!neighborsByNode.has(e.source)) neighborsByNode.set(e.source, new Set());
    if (!neighborsByNode.has(e.target)) neighborsByNode.set(e.target, new Set());
    neighborsByNode.get(e.source)!.add(e.target);
    neighborsByNode.get(e.target)!.add(e.source);
  }

  function articleHref(slug: string): string {
    return `${base}${slug.replace(/^\//, '')}/`;
  }

  function nodeHref(node: GraphV2Node): string | undefined {
    if (node.kind === 'article') return articleHref(node.slug);
    if (node.kind === 'question') {
      const sourceEdge = (edgesBySource.get(node.id) ?? []).find((e) => e.type === 'quiz-source');
      const source = sourceEdge ? nodeById.get(sourceEdge.target) : undefined;
      return source?.kind === 'article' ? articleHref(source.slug) : undefined;
    }
    if (node.kind === 'topic') {
      const topicArticleEdge = (edgesBySource.get(node.id) ?? []).find((e) => e.type === 'topic-wiki');
      const article = topicArticleEdge ? nodeById.get(topicArticleEdge.target) : undefined;
      return article?.kind === 'article' ? articleHref(article.slug) : undefined;
    }
    return undefined;
  }

  function eligibleQuestionsFor(node: GraphV2Node): GraphV2Node[] {
    if (node.kind === 'question') {
      return node.meta?.quizEligible === true ? [node] : [];
    }
    return relatedQuestionsFor(node.id).filter((q) => q.meta?.quizEligible === true);
  }

  function practiceHref(node: GraphV2Node): string | undefined {
    const eligibleQuestions = eligibleQuestionsFor(node);
    if (eligibleQuestions.length === 0) return undefined;
    if (node.kind === 'topic') {
      return `${base}quiz-v2/play/?topics=${encodeURIComponent(node.slug)}&count=10`;
    }
    const slugs = eligibleQuestions
      .slice(0, 50)
      .map((q) => q.slug)
      .filter(Boolean)
      .join(',');
    if (!slugs) return undefined;
    const count = Math.min(10, eligibleQuestions.length);
    return `${base}quiz-v2/play/?slugs=${encodeURIComponent(slugs)}&count=${count}`;
  }

  function edgeSummaryFor(nodeId: string): Array<{ type: string; label: string; count: number }> {
    const counts = new Map<string, number>();
    for (const edge of [...(edgesBySource.get(nodeId) ?? []), ...(edgesByTarget.get(nodeId) ?? [])]) {
      counts.set(edge.type, (counts.get(edge.type) ?? 0) + 1);
    }
    return edgeOrder
      .map((type) => ({ type, label: edgeTypeLabels[type], count: counts.get(type) ?? 0 }))
      .filter((entry) => entry.count > 0);
  }

  function relatedQuestionsFor(nodeId: string): GraphV2Node[] {
    const questionIds = new Set<string>();
    const seedNode = nodeById.get(nodeId);
    const collectDirectQuestions = (id: string): void => {
      for (const edge of [...(edgesBySource.get(id) ?? []), ...(edgesByTarget.get(id) ?? [])]) {
        const source = nodeById.get(edge.source);
        const target = nodeById.get(edge.target);
        if (source?.kind === 'question') questionIds.add(source.id);
        if (target?.kind === 'question') questionIds.add(target.id);
      }
    };

    collectDirectQuestions(nodeId);

    // Article pages are often linked to the canonical topic node via topic-wiki
    // rather than directly to question nodes. Follow that one semantic hop so
    // system/source articles like CVCS, AFW, and exam pages can build real quiz
    // pools instead of showing a selected count with zero eligible questions.
    if (seedNode?.kind === 'article') {
      for (const edge of edgesByTarget.get(nodeId) ?? []) {
        if (edge.type !== 'topic-wiki') continue;
        const topic = nodeById.get(edge.source);
        if (topic?.kind === 'topic') collectDirectQuestions(topic.id);
      }
    }

    return [...questionIds]
      .map((id) => nodeById.get(id))
      .filter((node): node is GraphV2Node => !!node && node.id !== nodeId)
      .sort((a, b) => {
        const ay = Number(a.meta?.examYear ?? 0);
        const by = Number(b.meta?.examYear ?? 0);
        const aq = Number(a.meta?.questionNumber ?? 0);
        const bq = Number(b.meta?.questionNumber ?? 0);
        return by - ay || aq - bq || a.title.localeCompare(b.title);
      });
  }

  function metaEntriesFor(node: GraphV2Node): Array<{ label: string; value: string }> {
    if (node.kind !== 'question') return [];
    const meta = node.meta ?? {};
    const entries: Array<{ label: string; value: unknown }> = [
      { label: 'Exam', value: `${meta.examYear ?? '—'} ${meta.examType ?? ''}`.trim() },
      { label: 'Question', value: meta.questionNumber },
      { label: 'Track', value: meta.track },
      { label: 'Status', value: meta.status },
      { label: 'Quiz eligible', value: meta.quizEligible === true ? 'yes' : 'no' },
      { label: 'Reference required', value: meta.requiresReference === true ? 'yes' : 'no' },
      { label: 'Accepted answer', value: Array.isArray(meta.acceptedAnswerLabels) ? meta.acceptedAnswerLabels.join(', ') : undefined },
      { label: 'K/A', value: meta.kaCode },
      { label: 'K/A importance', value: meta.kaImportance },
      { label: 'Cognitive level', value: meta.cognitiveLevel },
      { label: 'Tier/group', value: meta.tierGroup },
      { label: 'Source', value: meta.questionSource },
      { label: 'Audit', value: meta.auditStatus },
      { label: 'Non-quiz reason', value: meta.nonQuizReason },
    ];
    return entries
      .filter((entry) => entry.value !== undefined && entry.value !== null && String(entry.value).trim() !== '')
      .map((entry) => ({ label: entry.label, value: String(entry.value) }));
  }

  function graphEdgeRowsFor(nodeId: string, direction: 'outgoing' | 'incoming'): GraphV2DetailEdge[] {
    const edges = direction === 'outgoing' ? (edgesBySource.get(nodeId) ?? []) : (edgesByTarget.get(nodeId) ?? []);
    return edges.slice(0, 60).map((e) => {
      const relatedNodeId = direction === 'outgoing' ? e.target : e.source;
      const relatedNode = nodeById.get(relatedNodeId);
      return {
        type: e.type,
        nodeId: relatedNodeId,
        title: relatedNode?.title ?? relatedNodeId,
      };
    });
  }

  function compactNodeStep(nodeId: string, note?: string): { nodeId: string; title: string; kind: string; note?: string } | null {
    const node = nodeById.get(nodeId);
    if (!node) return null;
    return { nodeId, title: node.title, kind: node.kind, note };
  }

  function localStudyPathsFor(node: GraphV2Node): GraphV2DetailPath[] {
    const paths: GraphV2DetailPath[] = [];
    const pushPath = (label: string, nodeIds: Array<[string, string?]>, quizHref?: string): void => {
      const steps = nodeIds.map(([id, note]) => compactNodeStep(id, note)).filter((step): step is { nodeId: string; title: string; kind: string; note?: string } => Boolean(step));
      if (steps.length >= 2) paths.push({ label, steps, quizHref });
    };

    if (node.kind === 'topic') {
      const articleEdge = (edgesBySource.get(node.id) ?? []).find((e) => e.type === 'topic-wiki');
      const question = eligibleQuestionsFor(node)[0];
      if (articleEdge && question) pushPath('Read the wiki page, then quiz this topic', [[articleEdge.target, 'read'], [node.id, 'topic'], [question.id, 'practice pool']], practiceHref(node));
    }

    if (node.kind === 'article') {
      const topicEdges = (edgesByTarget.get(node.id) ?? []).filter((e) => e.type === 'topic-wiki');
      for (const topicEdge of topicEdges.slice(0, 5)) {
        const topic = nodeById.get(topicEdge.source);
        const question = topic ? eligibleQuestionsFor(topic)[0] : undefined;
        if (question) pushPath('Article → topic → exam question', [[node.id, 'read'], [topicEdge.source, 'topic'], [question.id, 'practice']], topic ? practiceHref(topic) : undefined);
      }
    }

    if (node.kind === 'question') {
      const topicEdge = (edgesBySource.get(node.id) ?? []).find((e) => e.type === 'tests');
      const sourceEdge = (edgesBySource.get(node.id) ?? []).find((e) => e.type === 'quiz-source');
      if (sourceEdge && topicEdge) pushPath('Source article → topic → question', [[sourceEdge.target, 'source'], [topicEdge.target, 'topic'], [node.id, 'question']], practiceHref(node));
      else if (topicEdge) pushPath('Topic → question', [[topicEdge.target, 'topic'], [node.id, 'question']], practiceHref(node));
    }

    return paths.slice(0, 5);
  }

  function buildDetailData(nodes: GraphV2Node[]): GraphV2DetailDataById {
    return Object.fromEntries(nodes.map((n) => {
      const eligibleQuestions = eligibleQuestionsFor(n);
      const relatedQuestions = relatedQuestionsFor(n.id);
      return [n.id, {
        id: n.id,
        kind: n.kind,
        subcategory: n.subcategory,
        connections: n.connections,
        title: n.title,
        slug: n.slug,
        openHref: nodeHref(n),
        quizHref: practiceHref(n),
        eligibleQuestionCount: eligibleQuestions.length,
        edgeSummary: edgeSummaryFor(n.id),
        metaEntries: metaEntriesFor(n),
        eligibleQuestionSlugs: eligibleQuestions.map((q) => q.slug),
        studyPaths: localStudyPathsFor(n),
        relatedQuestions: relatedQuestions.slice(0, 12).map((q) => ({
          id: q.id,
          title: q.title,
          kind: q.kind,
          examYear: q.meta?.examYear,
          questionNumber: q.meta?.questionNumber,
        })),
        relatedQuestionCount: relatedQuestions.length,
        outgoing: graphEdgeRowsFor(n.id, 'outgoing'),
        incoming: graphEdgeRowsFor(n.id, 'incoming'),
      }];
    }));
  }

  return {
    nodeById,
    edgeTypesByNode,
    neighborsByNode,
    nodeHref,
    eligibleQuestionsFor,
    practiceHref,
    buildDetailData,
  };
}

export function buildGraphV2DetailData(graph: GraphV2Data, base: string): GraphV2DetailDataById {
  const helpers = createGraphV2DetailHelpers(graph, base);
  return helpers.buildDetailData(renderedGraphV2Nodes(graph));
}
