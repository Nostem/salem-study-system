import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { publicWikiArticles } from '../utils/wiki-content';
import { toPlainText } from '../utils/search-fallback';

// Text-only search index used when Pagefind's WASM/binary assets fail to load
// (e.g. a proxy that ignores `no-transform` and corrupts them). Built from the
// same wiki collection the articles render from, so URLs and titles match.
const BASE = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
const MAX_TEXT = 2000;

export const GET: APIRoute = async () => {
  const articles = publicWikiArticles(await getCollection('wiki'));
  const entries = articles.map((article) => {
    const slug = article.id;
    const title = article.data.title ?? slug.split('/').pop()?.replace(/-/g, ' ') ?? slug;
    const aliases = (article.data.aliases ?? []).join(' ');
    const text = toPlainText(`${aliases} ${article.body ?? ''}`).slice(0, MAX_TEXT);
    return { url: `${BASE}${slug}/`, title, text };
  });

  return new Response(JSON.stringify({ entries }), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
