import { test } from 'node:test';
import assert from 'node:assert/strict';
import { normalizeStaticAssetHref, normalizeStaticAssetHtml, normalizeStaticAssetProperties } from '../src/plugins/remark-static-asset-links.ts';

test('normalizeStaticAssetHref strips old GitHub Pages base for Vercel/root builds', () => {
  assert.equal(
    normalizeStaticAssetHref('/salem-study-system/exam-pdfs/2012-written.pdf', '/'),
    '/exam-pdfs/2012-written.pdf'
  );
  assert.equal(
    normalizeStaticAssetHref('/salem-study-system/ts-pdfs/ts-3-4-7-1.pdf#page=3', ''),
    '/ts-pdfs/ts-3-4-7-1.pdf#page=3'
  );
});

test('normalizeStaticAssetHref adds the configured base for base-path builds', () => {
  assert.equal(
    normalizeStaticAssetHref('/exam-pdfs/2012-written.pdf', '/salem-study-system'),
    '/salem-study-system/exam-pdfs/2012-written.pdf'
  );
  assert.equal(
    normalizeStaticAssetHref('/salem-study-system/reference-pdfs/pwr-ka-catalog.xlsx?download=1', '/salem-study-system/'),
    '/salem-study-system/reference-pdfs/pwr-ka-catalog.xlsx?download=1'
  );
});

test('normalizeStaticAssetHref ignores non-Salem static asset URLs', () => {
  assert.equal(normalizeStaticAssetHref('https://example.com/exam-pdfs/file.pdf', '/'), 'https://example.com/exam-pdfs/file.pdf');
  assert.equal(normalizeStaticAssetHref('/salem-study-system/images/diagram.pdf', '/'), '/salem-study-system/images/diagram.pdf');
  assert.equal(normalizeStaticAssetHref('#page=4', '/'), '#page=4');
});

test('normalizeStaticAssetHtml rewrites href and src attributes while preserving quotes', () => {
  const html = `<a href="/salem-study-system/exam-pdfs/2012-written.pdf#page=4">PDF</a><iframe src='/salem-study-system/ts-pdfs/ts-3-4-1-1.pdf'></iframe>`;

  assert.equal(
    normalizeStaticAssetHtml(html, '/'),
    `<a href="/exam-pdfs/2012-written.pdf#page=4">PDF</a><iframe src='/ts-pdfs/ts-3-4-1-1.pdf'></iframe>`
  );
});

test('normalizeStaticAssetProperties rewrites rehype element href and src properties', () => {
  const properties: Record<string, unknown> = {
    href: '/salem-study-system/exam-pdfs/2014-operating.pdf',
    src: '/salem-study-system/ts-pdfs/ts-3-4-4.pdf#page=12',
    title: '/salem-study-system/exam-pdfs/not-a-url.pdf',
  };

  normalizeStaticAssetProperties(properties, '/');

  assert.deepEqual(properties, {
    href: '/exam-pdfs/2014-operating.pdf',
    src: '/ts-pdfs/ts-3-4-4.pdf#page=12',
    title: '/salem-study-system/exam-pdfs/not-a-url.pdf',
  });
});
