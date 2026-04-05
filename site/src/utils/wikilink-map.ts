import fs from 'node:fs';
import path from 'node:path';
import { ENTITY_ALIASES } from './aliases';

const WIKI_DIR = path.resolve(import.meta.dirname, '../../../wiki');
const FRONTMATTER_RE = /^---\n([\s\S]*?)\n---/;

// Build a map of display name (lowercase) -> { slug, href }
// Scans wiki/ directory with fs so it can be called synchronously at config time
export function buildWikilinkMap(basePath: string): Map<string, { slug: string; href: string }> {
  const map = new Map<string, { slug: string; href: string }>();

  function scanDir(dir: string, prefix: string) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        scanDir(path.join(dir, entry.name), `${prefix}${entry.name}/`);
      } else if (entry.name.endsWith('.md') && entry.name !== '_index.md') {
        const slug = `${prefix}${entry.name.replace(/\.md$/, '')}`;
        const href = `${basePath}/${slug}`;
        const content = fs.readFileSync(path.join(dir, entry.name), 'utf-8');

        // Extract frontmatter
        let title = entry.name.replace(/\.md$/, '').replace(/-/g, ' ');
        let aliases: string[] = [];

        const fmMatch = content.match(FRONTMATTER_RE);
        if (fmMatch) {
          const fm = fmMatch[1];
          const titleMatch = fm.match(/^title:\s*(.+)$/m);
          if (titleMatch) title = titleMatch[1].trim().replace(/^['"]|['"]$/g, '');

          const aliasMatch = fm.match(/^aliases:\s*\n((?:\s+-\s+.+\n?)*)/m);
          if (aliasMatch) {
            aliases = aliasMatch[1]
              .split('\n')
              .map(l => l.replace(/^\s+-\s+/, '').trim().replace(/^['"]|['"]$/g, ''))
              .filter(Boolean);
          }
        }

        // Map by title
        map.set(title.toLowerCase(), { slug, href });

        // Map by slug filename
        const filename = slug.split('/').pop() ?? '';
        map.set(filename.toLowerCase().replace(/-/g, ' '), { slug, href });

        // Map by frontmatter aliases
        for (const alias of aliases) {
          map.set(alias.toLowerCase(), { slug, href });
        }
      }
    }
  }

  scanDir(WIKI_DIR, '');

  // Map by global entity aliases
  for (const [alias, canonical] of Object.entries(ENTITY_ALIASES)) {
    const target = map.get(canonical.toLowerCase());
    if (target) {
      map.set(alias.toLowerCase(), target);
    }
  }

  return map;
}
