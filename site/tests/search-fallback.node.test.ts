import assert from 'node:assert/strict';
import test from 'node:test';

import { rankFallbackMatches, toPlainText, type FallbackEntry } from '../src/utils/search-fallback.ts';

test('toPlainText strips markdown/html and unwraps links + wikilinks', () => {
  const source = [
    '# Heading',
    'The <span class="hi">CVCS</span> controls **boron**.',
    'See [the RCS](/systems/rcs) and [[chemical-and-volume-control-system|CVCS article]].',
    '```js\nignored code\n```',
  ].join('\n');
  const text = toPlainText(source);
  assert.match(text, /CVCS controls boron/);
  assert.match(text, /the RCS/);
  assert.match(text, /CVCS article/);
  assert.doesNotMatch(text, /<span|\*\*|ignored code|```/);
});

const entries: FallbackEntry[] = [
  { url: '/a/', title: 'Chemical and Volume Control System', text: 'charging and letdown, boron control via the CVCS.' },
  { url: '/b/', title: 'Reactor Coolant System', text: 'the RCS interfaces with CVCS for makeup.' },
  { url: '/c/', title: 'Main Steam', text: 'steam generators and MSIVs.' },
];

test('rankFallbackMatches requires all tokens and ranks title hits first', () => {
  const results = rankFallbackMatches(entries, 'cvcs', 10);
  assert.equal(results.length, 2); // a (title+text) and b (text)
  assert.equal(results[0].url, '/a/'); // title match outranks body-only match
  assert.equal(results[1].url, '/b/');
  assert.doesNotMatch(results.map((r) => r.url).join(), /\/c\//);
});

test('rankFallbackMatches uses AND semantics across tokens', () => {
  assert.equal(rankFallbackMatches(entries, 'cvcs msiv', 10).length, 0);
  const both = rankFallbackMatches(entries, 'rcs cvcs', 10);
  assert.deepEqual(both.map((r) => r.url), ['/b/']);
});

test('rankFallbackMatches marks the matched term in the excerpt', () => {
  const [top] = rankFallbackMatches(entries, 'boron', 10);
  assert.match(top.excerpt, /<mark>boron<\/mark>/);
});

test('rankFallbackMatches returns nothing for an empty query', () => {
  assert.deepEqual(rankFallbackMatches(entries, '   ', 10), []);
});
