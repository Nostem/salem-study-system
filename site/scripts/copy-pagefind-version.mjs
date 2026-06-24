import { cpSync, existsSync, rmSync } from 'node:fs';
import { join } from 'node:path';

function pagefindAssetDir() {
  const explicit = process.env.PUBLIC_PAGEFIND_ASSET_DIR?.trim();
  if (explicit) return explicit.replace(/^\/+|\/+$/g, '');

  const sha = process.env.VERCEL_GIT_COMMIT_SHA?.trim();
  if (sha) return `pagefind-${sha.slice(0, 8)}`;

  return 'pagefind-current';
}

const source = join('dist', 'pagefind');
const target = join('dist', pagefindAssetDir());

if (!existsSync(source)) {
  throw new Error(`Pagefind output not found: ${source}`);
}

rmSync(target, { recursive: true, force: true });
cpSync(source, target, { recursive: true });
console.log(`Copied ${source} -> ${target}`);
