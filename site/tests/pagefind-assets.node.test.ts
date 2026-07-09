import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { resolvePagefindAssetDir } from '../scripts/pagefind-assets.mjs';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '../..');

test('resolvePagefindAssetDir uses explicit override when present', () => {
  assert.equal(
    resolvePagefindAssetDir({ PUBLIC_PAGEFIND_ASSET_DIR: '/custom-pagefind/' }),
    'custom-pagefind',
  );
});

test('resolvePagefindAssetDir makes Vercel asset paths deployment-specific', () => {
  const assetDir = resolvePagefindAssetDir({
    VERCEL_GIT_COMMIT_SHA: 'abcdef1234567890',
    VERCEL_URL: 'salem-study-system-git-main-nostem.vercel.app',
  });

  assert.match(assetDir, /^pagefind-abcdef12-[a-f0-9]{8}$/);
});

test('resolvePagefindAssetDir keeps local builds stable', () => {
  assert.equal(resolvePagefindAssetDir({}), 'pagefind-current');
});

test('pagefind asset headers stay revalidatable (not immutable) and untransformed', () => {
  const vercelConfig = JSON.parse(readFileSync(resolve(repoRoot, 'vercel.json'), 'utf8'));
  const pagefindRules = (vercelConfig.headers ?? []).filter((rule: any) => /pagefind/.test(rule.source));
  assert.ok(pagefindRules.length > 0, 'expected pagefind header rules in vercel.json');

  for (const rule of pagefindRules) {
    const cacheControl = rule.headers.find((h: any) => h.key === 'Cache-Control')?.value ?? '';
    // `immutable` tells browsers to reuse the cached asset even on an explicit
    // reload, which defeats the search modal's "Reload the page" recovery.
    assert.doesNotMatch(cacheControl, /immutable/, `${rule.source} must not be immutable`);
    // Pagefind ships pre-gzipped binaries it decompresses in JS; a proxy that
    // re-encodes them corrupts the WASM/index, so no-transform must stay.
    assert.match(cacheControl, /no-transform/, `${rule.source} must keep no-transform`);
  }
});
