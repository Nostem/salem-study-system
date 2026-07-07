import assert from 'node:assert/strict';
import test from 'node:test';

import { resolvePagefindAssetDir } from '../scripts/pagefind-assets.mjs';

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
