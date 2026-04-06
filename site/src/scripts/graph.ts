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

const data = (window as any).__GRAPH_DATA__;
const basePath = (window as any).__BASE_PATH__ || '/';

if (data && data.nodes.length > 0) {
  const container = document.getElementById('graph')!;
  const width = container.clientWidth;
  const height = container.clientHeight;

  const svg = d3.select('#graph')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', [0, 0, width, height]);

  // Zoom
  const g = svg.append('g');
  svg.call(
    d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.2, 4])
      .on('zoom', (event) => g.attr('transform', event.transform))
  );

  const simulation = d3.forceSimulation<GraphNode>(data.nodes)
    .force('link', d3.forceLink<GraphNode, GraphEdge>(data.edges).id(d => d.id).distance(80))
    .force('charge', d3.forceManyBody().strength(-200))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collision', d3.forceCollide().radius(20));

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
    .attr('r', (d: GraphNode) => Math.max(5, Math.min(15, 4 + d.connections * 2)))
    .attr('fill', (d: GraphNode) => CATEGORY_COLORS[d.category] ?? '#6b7280')
    .attr('stroke', '#0a0e17')
    .attr('stroke-width', 1.5)
    .style('cursor', 'pointer')
    .on('click', (_event: any, d: GraphNode) => {
      window.location.href = `${basePath.endsWith('/') ? basePath : basePath + '/'}${d.slug}`;
    })
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
      label.attr('opacity', (n: GraphNode) => connected.has(n.id) ? 1 : 0.1);
    })
    .on('mouseout', () => {
      node.attr('opacity', 1);
      link.attr('opacity', 1);
      label.attr('opacity', 1);
    })
    .call(d3.drag<SVGCircleElement, GraphNode>()
      .on('start', (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on('drag', (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on('end', (event, d) => {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      })
    );

  // Labels
  const label = g.append('g')
    .selectAll('text')
    .data(data.nodes)
    .join('text')
    .text((d: GraphNode) => d.title)
    .attr('font-size', 10)
    .attr('fill', '#8b95a5')
    .attr('dx', 12)
    .attr('dy', 4)
    .style('pointer-events', 'none');

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
