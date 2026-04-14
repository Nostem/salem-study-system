import * as d3 from 'd3';

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

interface GraphEdge {
  source: string | GraphNode;
  target: string | GraphNode;
  type: 'system' | 'procedure' | 'eop' | 'tech-spec' | 'exam' | 'inline';
}

const CATEGORY_COLORS: Record<string, string> = {
  systems: '#60a5fa',
  'tech-specs': '#10b981',
  exams: '#f59e0b',
  eops: '#ef4444',
  concepts: '#a78bfa',
  abnormals: '#6b7280',
};

// Subtle edge colors — just enough tint to distinguish, not overpower
const EDGE_COLORS: Record<string, string> = {
  system: '#2a4a6b',
  procedure: '#2a2f36',
  eop: '#4a2020',
  'tech-spec': '#1a3a2a',
  exam: '#3a3020',
  inline: '#1a2035',
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

  // Connection-weighted physics: high-connection nodes repel more strongly,
  // creating natural hub-spoke clusters
  const simulation = d3.forceSimulation<GraphNode>(data.nodes)
    .force('link', d3.forceLink<GraphNode, GraphEdge>(data.edges).id(d => d.id).distance(80))
    .force('charge', d3.forceManyBody<GraphNode>().strength((d: GraphNode) => {
      if (d.isExam) return -30;
      return -100 - (d.connections * 15);
    }))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collision', d3.forceCollide<GraphNode>().radius((d: GraphNode) => {
      if (d.isExam) return 4;
      return 10 + d.connections * 1.5;
    }));

  // Edges
  const link = g.append('g')
    .selectAll('line')
    .data(data.edges)
    .join('line')
    .attr('stroke', (d: any) => EDGE_COLORS[d.type] ?? '#1a2035')
    .attr('stroke-width', (d: any) => d.type === 'exam' ? 0.5 : 1)
    .attr('stroke-opacity', (d: any) => d.type === 'exam' ? 0.15 : 0.4);

  // Nodes
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
        return connected.has(src) && connected.has(tgt) ? 0.6 : 0.03;
      });
      // Show label for ONLY the hovered node (not all connected nodes)
      label.style('opacity', (n: GraphNode) => n.id === d.id && !n.isExam ? 1 : 0);
    })
    .on('mouseout', () => {
      node.attr('opacity', (n: GraphNode) => n.isExam ? 0.4 : 1);
      link.attr('opacity', (e: any) => {
        const type = (e as any).type ?? 'inline';
        return type === 'exam' ? 0.15 : 0.4;
      });
      label.style('opacity', 0);
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

  // Tooltips for all nodes (especially useful for exam nodes which have no label)
  node.append('title').text((d: GraphNode) => d.title);

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
    .style('opacity', 0);

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

  // Edge type filtering
  function applyFilters() {
    const checkboxes = document.querySelectorAll<HTMLInputElement>('[data-edge-type]');
    const hiddenTypes = new Set<string>();
    checkboxes.forEach(cb => {
      if (!cb.checked) hiddenTypes.add(cb.dataset.edgeType!);
    });

    link
      .attr('stroke-opacity', (d: any) => hiddenTypes.has(d.type) ? 0 : (d.type === 'exam' ? 0.15 : 0.4))
      .attr('pointer-events', (d: any) => hiddenTypes.has(d.type) ? 'none' : 'auto');

    // When exam edges hidden, make exam nodes even more transparent
    if (hiddenTypes.has('exam')) {
      node.attr('fill-opacity', (d: GraphNode) => d.isExam ? 0.1 : 1);
    } else {
      node.attr('fill-opacity', (d: GraphNode) => d.isExam ? 0.4 : 1);
    }
  }

  // Attach filter listeners
  document.querySelectorAll('[data-edge-type]').forEach(cb => {
    cb.addEventListener('change', applyFilters);
  });

  // Apply initial state (exam unchecked by default)
  applyFilters();
}
