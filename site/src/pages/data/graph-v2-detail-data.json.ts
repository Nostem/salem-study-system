import { generateGraphV2Data } from '../../utils/graph-v2-data';
import { buildGraphV2DetailData } from '../../utils/graph-v2-detail-data';

export async function GET({ site }: { site?: URL }) {
  const basePath = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : import.meta.env.BASE_URL + '/';
  const base = site ? new URL(basePath, site).pathname : basePath;
  const graph = await generateGraphV2Data();
  const detailData = buildGraphV2DetailData(graph, base);

  return new Response(JSON.stringify(detailData), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}
