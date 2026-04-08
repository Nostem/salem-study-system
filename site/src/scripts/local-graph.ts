import * as d3 from 'd3';

interface GraphNode {
  id: string;
  title: string;
  category: string;
  slug: string;
  connections: number;
  x?: number;
  y?: number;
  fx?: number | null;
  fy?: number | null;
}

interface GraphEdge {
  source: string | GraphNode;
  target: string | GraphNode;
}

const CATEGORY_COLORS: Record<string, string> = {
  systems: '#60a5fa',
  'tech-specs': '#10b981',
  exams: '#f59e0b',
  eops: '#ef4444',
  concepts: '#a78bfa',
  abnormals: '#6b7280',
};

const data = (window as any).__LOCAL_GRAPH__ as {
  nodes: GraphNode[];
  edges: GraphEdge[];
  currentSlug: string;
} | undefined;

const basePath = (window as any).__LOCAL_GRAPH_BASE__ || '/';

if (data && data.nodes.length > 1) {
  const container = document.getElementById('local-graph');
  if (container) {
    const width = container.clientWidth;
    const height = container.clientHeight || width;

    const svg = d3.select('#local-graph')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const g = svg.append('g');

    // Zoom
    svg.call(
      d3.zoom<SVGSVGElement, unknown>()
        .scaleExtent([0.5, 3])
        .on('zoom', (event) => g.attr('transform', event.transform))
    );

    const simulation = d3.forceSimulation<GraphNode>(data.nodes)
      .force('link', d3.forceLink<GraphNode, GraphEdge>(data.edges).id(d => d.id).distance(60))
      .force('charge', d3.forceManyBody().strength(-120))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(15));

    // Edges
    const link = g.append('g')
      .selectAll('line')
      .data(data.edges)
      .join('line')
      .attr('stroke', '#1a2035')
      .attr('stroke-width', 1);

    // Nodes
    const node = g.append('g')
      .selectAll('circle')
      .data(data.nodes)
      .join('circle')
      .attr('r', (d: GraphNode) => d.id === data.currentSlug ? 8 : 5)
      .attr('fill', (d: GraphNode) => CATEGORY_COLORS[d.category] ?? '#6b7280')
      .attr('stroke', (d: GraphNode) => d.id === data.currentSlug ? '#e0e4ea' : '#0a0e17')
      .attr('stroke-width', (d: GraphNode) => d.id === data.currentSlug ? 2 : 1)
      .style('cursor', 'pointer')
      .on('click', (_event: any, d: GraphNode) => {
        if (d.id !== data.currentSlug) {
          window.location.href = `${basePath}${d.slug}`;
        }
      });

    // Labels — only current article visible by default
    const label = g.append('g')
      .selectAll('text')
      .data(data.nodes)
      .join('text')
      .text((d: GraphNode) => d.title.length > 20 ? d.title.substring(0, 18) + '...' : d.title)
      .attr('font-size', 8)
      .attr('fill', (d: GraphNode) => d.id === data.currentSlug ? '#e0e4ea' : '#6b7280')
      .attr('font-weight', (d: GraphNode) => d.id === data.currentSlug ? '600' : '400')
      .attr('dx', 10)
      .attr('dy', 3)
      .style('pointer-events', 'none')
      .style('opacity', (d: GraphNode) => d.id === data.currentSlug ? 1 : 0);

    // Hover — show labels for hovered node and its connections
    node
      .on('mouseover', (_event: any, d: GraphNode) => {
        const connected = new Set<string>();
        connected.add(d.id);
        data.edges.forEach((e: any) => {
          const src = typeof e.source === 'string' ? e.source : e.source.id;
          const tgt = typeof e.target === 'string' ? e.target : e.target.id;
          if (src === d.id) connected.add(tgt);
          if (tgt === d.id) connected.add(src);
        });
        label.style('opacity', (n: GraphNode) => connected.has(n.id) ? 1 : 0);
        node.attr('opacity', (n: GraphNode) => connected.has(n.id) ? 1 : 0.2);
        link.attr('opacity', (e: any) => {
          const src = typeof e.source === 'string' ? e.source : e.source.id;
          const tgt = typeof e.target === 'string' ? e.target : e.target.id;
          return connected.has(src) && connected.has(tgt) ? 1 : 0.05;
        });
      })
      .on('mouseout', () => {
        label.style('opacity', (n: GraphNode) => n.id === data.currentSlug ? 1 : 0);
        node.attr('opacity', 1);
        link.attr('opacity', 1);
      });

    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node
        .attr('cx', (d: any) => d.x)
        .attr('cy', (d: any) => d.y);

      label
        .attr('x', (d: any) => d.x)
        .attr('y', (d: any) => d.y);
    });
  }
}
