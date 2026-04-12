import { getCollection } from 'astro:content';

interface GraphNode {
  id: string;
  title: string;
  category: string;
  slug: string;
  connections: number;
  isExam: boolean;
}

interface GraphEdge {
  source: string;
  target: string;
  type: 'system' | 'procedure' | 'eop' | 'tech-spec' | 'exam' | 'inline';
}

export interface GraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

const WIKILINK_RE = /\[\[([^\]]+)\]\]/g;

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

export async function generateGraphData(): Promise<GraphData> {
  const articles = await getCollection('wiki');
  const nodes: GraphNode[] = [];
  const edges: GraphEdge[] = [];
  const connectionCount: Record<string, number> = {};

  // Build title → slug lookup
  const titleToSlug = new Map<string, string>();
  for (const article of articles) {
    if (article.id === '_index') continue;
    const title = article.data.title ?? article.id.split('/').pop()?.replace(/-/g, ' ') ?? article.id;
    titleToSlug.set(title.toLowerCase(), article.id);

    for (const alias of article.data.aliases ?? []) {
      titleToSlug.set(alias.toLowerCase(), article.id);
    }
  }

  // Extract edges from wikilinks with type awareness and deduplication
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

  // Build nodes
  for (const article of articles) {
    if (article.id === '_index') continue;
    const slug = article.id;
    const category = slug.split('/')[0] ?? 'uncategorized';
    const title = article.data.title ?? slug.split('/').pop()?.replace(/-/g, ' ') ?? slug;

    nodes.push({
      id: slug,
      title,
      category,
      slug,
      connections: connectionCount[slug] ?? 0,
      isExam: category === 'exams',
    });
  }

  return { nodes, edges };
}
