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
    const height = 270;

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

    // Labels
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
      .style('pointer-events', 'none');

    // Tooltip on hover
    node.append('title').text((d: GraphNode) => d.title);

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
