// Plain-JSON fallback search. Pagefind is the primary search (fast, ranked,
// WASM-backed), but its binary index/WASM assets are served as raw-gzip with
// `no-transform`; some corporate proxies / security appliances ignore that and
// re-encode or block them, which corrupts the WASM and breaks search on those
// networks (while it works fine on other networks / phones). This module powers
// a text-only fallback built from the wiki content that survives such proxies.

export type FallbackEntry = { url: string; title: string; text: string };
export type FallbackResult = { url: string; title: string; excerpt: string };

/**
 * Reduce raw markdown/HTML article source to plain, searchable text: drop code
 * fences, HTML tags, images, and markdown punctuation; unwrap links/wikilinks
 * to their visible text; collapse whitespace.
 */
export function toPlainText(source: string): string {
  return source
    .replace(/```[\s\S]*?```/g, ' ') // fenced code
    .replace(/`[^`]*`/g, ' ') // inline code
    .replace(/<[^>]+>/g, ' ') // html tags
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ') // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // md links -> text
    .replace(/\[\[([^\]|]+)(?:\|([^\]]*))?\]\]/g, (_m, target, label) => label || target) // wikilinks
    .replace(/&[a-z]+;/gi, ' ') // html entities
    .replace(/[#>*_~|`]/g, ' ') // md punctuation
    .replace(/\s+/g, ' ')
    .trim();
}

function buildExcerpt(text: string, tokens: string[]): string {
  const lower = text.toLowerCase();
  let pos = -1;
  let matched = '';
  for (const token of tokens) {
    const i = lower.indexOf(token);
    if (i !== -1 && (pos === -1 || i < pos)) {
      pos = i;
      matched = token;
    }
  }
  if (pos === -1) return text.slice(0, 160);
  const start = Math.max(0, pos - 60);
  const end = Math.min(text.length, pos + matched.length + 110);
  const lead = start > 0 ? '…' : '';
  const tail = end < text.length ? '…' : '';
  const hit = text.slice(pos, pos + matched.length);
  return `${lead}${text.slice(start, pos)}<mark>${hit}</mark>${text.slice(pos + matched.length, end)}${tail}`;
}

/**
 * Rank fallback entries against a query. An entry matches only if every query
 * token appears in its title or text (AND semantics). Title hits are weighted
 * far above body hits so the most relevant article surfaces first.
 */
export function rankFallbackMatches(
  entries: FallbackEntry[],
  query: string,
  limit = 10,
): FallbackResult[] {
  const tokens = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return [];

  const scored: { entry: FallbackEntry; score: number }[] = [];
  for (const entry of entries) {
    const title = entry.title.toLowerCase();
    const text = entry.text.toLowerCase();
    if (!tokens.every((token) => title.includes(token) || text.includes(token))) continue;
    let score = 0;
    for (const token of tokens) {
      if (title.includes(token)) score += 10;
      if (text.includes(token)) score += 1;
    }
    scored.push({ entry, score });
  }

  scored.sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title));
  return scored.slice(0, limit).map(({ entry }) => ({
    url: entry.url,
    title: entry.title,
    excerpt: buildExcerpt(entry.text, tokens),
  }));
}
