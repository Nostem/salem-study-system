import { getCollection } from 'astro:content';

interface GraphNode {
  id: string;
  title: string;
  category: string;
  slug: string;
  connections: number;
}

interface GraphEdge {
  source: string;
  target: string;
}

export interface GraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

const WIKILINK_RE = /\[\[([^\]]+)\]\]/g;

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

  // Extract edges from wikilinks in article body
  for (const article of articles) {
    if (article.id === '_index') continue;

    const body = article.body ?? '';
    const matches = [...body.matchAll(WIKILINK_RE)];
    for (const match of matches) {
      const displayName = match[1];
      const targetSlug = titleToSlug.get(displayName.toLowerCase());
      if (targetSlug && targetSlug !== article.id) {
        edges.push({ source: article.id, target: targetSlug });
        connectionCount[article.id] = (connectionCount[article.id] ?? 0) + 1;
        connectionCount[targetSlug] = (connectionCount[targetSlug] ?? 0) + 1;
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
    });
  }

  return { nodes, edges };
}
