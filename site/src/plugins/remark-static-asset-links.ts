import type { Root } from 'mdast';
import type { Plugin } from 'unified';
import { visit } from 'unist-util-visit';

const STATIC_ASSET_DIR_PATTERN = '(?:exam-pdfs|ts-pdfs|reference-pdfs)';
const STATIC_ASSET_PATH_RE = new RegExp(`^/(?:salem-study-system/)?(${STATIC_ASSET_DIR_PATTERN})/(.+)$`);
const HTML_URL_ATTR_RE = /(\b(?:href|src)\s*=\s*)(["'])([^"']+)\2/g;

interface StaticAssetLinkOptions {
  basePath: string;
}

function normalizeBasePath(basePath: string): string {
  if (!basePath || basePath === '/') return '';
  return `/${basePath.replace(/^\/+|\/+$/g, '')}`;
}

function splitHref(href: string): { path: string; suffix: string } {
  const marker = href.search(/[?#]/);
  if (marker === -1) return { path: href, suffix: '' };
  return { path: href.slice(0, marker), suffix: href.slice(marker) };
}

/**
 * Normalize Salem-owned static asset links to the current Astro base path.
 *
 * The wiki corpus still contains raw GitHub Pages-era links such as
 * `/salem-study-system/exam-pdfs/...`. Vercel serves the same assets from `/`,
 * while local/GitHub Pages-shaped builds still need the base path. Keeping this
 * as a build-time rewrite avoids mass-editing hundreds of source wiki pages.
 */
export function normalizeStaticAssetHref(href: string, basePath: string): string {
  if (!href || href.startsWith('#') || href.startsWith('//') || /^[a-z][a-z0-9+.-]*:/i.test(href)) {
    return href;
  }

  const { path, suffix } = splitHref(href);
  const match = path.match(STATIC_ASSET_PATH_RE);
  if (!match) return href;

  const normalizedBase = normalizeBasePath(basePath);
  return `${normalizedBase}/${match[1]}/${match[2]}${suffix}`;
}

export function normalizeStaticAssetHtml(html: string, basePath: string): string {
  return html.replace(HTML_URL_ATTR_RE, (_match, prefix: string, quote: string, href: string) => {
    return `${prefix}${quote}${normalizeStaticAssetHref(href, basePath)}${quote}`;
  });
}

export function normalizeStaticAssetProperties(properties: Record<string, unknown>, basePath: string): void {
  for (const attr of ['href', 'src']) {
    const value = properties[attr];
    if (typeof value === 'string') {
      properties[attr] = normalizeStaticAssetHref(value, basePath);
    }
  }
}

const remarkStaticAssetLinks: Plugin<[StaticAssetLinkOptions], Root> = (options) => {
  const basePath = options?.basePath ?? '';

  return (tree: Root) => {
    visit(tree, (node: any) => {
      if ((node.type === 'link' || node.type === 'image' || node.type === 'definition') && typeof node.url === 'string') {
        node.url = normalizeStaticAssetHref(node.url, basePath);
        return;
      }

      if (node.type === 'html' && typeof node.value === 'string') {
        node.value = normalizeStaticAssetHtml(node.value, basePath);
      }
    });
  };
};

export const rehypeStaticAssetLinks: Plugin<[StaticAssetLinkOptions], any> = (options) => {
  const basePath = options?.basePath ?? '';

  return (tree: any) => {
    visit(tree, 'element', (node: any) => {
      if (node.properties) {
        normalizeStaticAssetProperties(node.properties, basePath);
      }
    });
  };
};

export default remarkStaticAssetLinks;
