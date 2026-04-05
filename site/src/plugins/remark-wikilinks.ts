import type { Root, Text } from 'mdast';
import type { Plugin } from 'unified';
import { visit } from 'unist-util-visit';

// Wikilink regex: [[Display Name]]
const WIKILINK_RE = /\[\[([^\]]+)\]\]/g;

interface WikilinkOptions {
  wikilinkMap: Map<string, { slug: string; href: string }>;
  basePath: string;
}

const remarkWikilinks: Plugin<[WikilinkOptions], Root> = (options) => {
  const { wikilinkMap, basePath } = options;

  return (tree: Root) => {
    visit(tree, 'text', (node: Text, index, parent) => {
      if (!parent || index === undefined) return;

      const value = node.value;
      const matches = [...value.matchAll(WIKILINK_RE)];
      if (matches.length === 0) return;

      const children: any[] = [];
      let lastIndex = 0;

      for (const match of matches) {
        const [full, displayName] = match;
        const start = match.index!;

        // Text before the match
        if (start > lastIndex) {
          children.push({ type: 'text', value: value.slice(lastIndex, start) });
        }

        const target = wikilinkMap.get(displayName.toLowerCase());

        if (target) {
          children.push({
            type: 'link',
            url: target.href,
            children: [{ type: 'text', value: displayName }],
            data: {
              hProperties: { class: 'wikilink' },
            },
          });
        } else {
          // Unresolved link — render with broken style
          children.push({
            type: 'html',
            value: `<span class="wikilink-broken" title="Article not found: ${displayName}">${displayName}</span>`,
          });
        }

        lastIndex = start + full.length;
      }

      // Text after last match
      if (lastIndex < value.length) {
        children.push({ type: 'text', value: value.slice(lastIndex) });
      }

      parent.children.splice(index, 1, ...children);
    });
  };
};

export default remarkWikilinks;
