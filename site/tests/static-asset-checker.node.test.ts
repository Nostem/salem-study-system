import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const siteRoot = path.resolve(import.meta.dirname, '..');
const checkerPath = path.join(siteRoot, 'scripts', 'check-static-asset-links.mjs');

function makeDist(html: string): string {
  const dist = fs.mkdtempSync(path.join(os.tmpdir(), 'salem-static-assets-'));
  fs.mkdirSync(path.join(dist, 'exam-pdfs'), { recursive: true });
  fs.writeFileSync(path.join(dist, 'exam-pdfs', 'sample.pdf'), 'pdf');
  fs.writeFileSync(path.join(dist, 'index.html'), html);
  return dist;
}

function runChecker(dist: string, publicBasePath: string) {
  return spawnSync(process.execPath, [checkerPath], {
    cwd: siteRoot,
    encoding: 'utf8',
    env: {
      ...process.env,
      STATIC_ASSET_CHECK_DIST_DIR: dist,
      PUBLIC_BASE_PATH: publicBasePath,
      VERCEL: publicBasePath === '/' ? '1' : '',
    },
  });
}

test('static asset checker rejects old GitHub Pages asset hrefs in root-hosted builds', () => {
  const dist = makeDist('<a href="/salem-study-system/exam-pdfs/sample.pdf">PDF</a>');
  const result = runChecker(dist, '/');

  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /old GitHub Pages base static asset links/);
});

test('static asset checker rejects root asset hrefs in base-path builds', () => {
  const dist = makeDist('<a href="/exam-pdfs/sample.pdf">PDF</a>');
  const result = runChecker(dist, '/salem-study-system');

  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /missing the configured base path/);
});

test('static asset checker accepts correctly based asset hrefs in base-path builds', () => {
  const dist = makeDist('<a href="/salem-study-system/exam-pdfs/sample.pdf#page=2">PDF</a>');
  const result = runChecker(dist, '/salem-study-system');

  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /Static asset link check passed: 1 unique/);
});

test('static asset checker fails when no owned PDF/XLSX links were verified', () => {
  const dist = makeDist('<a href="/images/not-owned.pdf">PDF</a>');
  const result = runChecker(dist, '/');

  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /no owned PDF\/XLSX asset links/i);
});
