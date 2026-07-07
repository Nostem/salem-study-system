import { cpSync, existsSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';

import { resolvePagefindAssetDir } from './pagefind-assets.mjs';

const assetDir = resolvePagefindAssetDir();
const source = join('dist', 'pagefind');
const target = join('dist', assetDir);

if (!assetDir || resolve(target) === resolve(source)) {
  throw new Error(
    `Refusing to remove pagefind source: target "${target}" resolves to the source "${source}" (check PUBLIC_PAGEFIND_ASSET_DIR)`,
  );
}

if (!existsSync(source)) {
  throw new Error(`Pagefind output not found: ${source}`);
}

rmSync(target, { recursive: true, force: true });
cpSync(source, target, { recursive: true });
console.log(`Copied ${source} -> ${target}`);
