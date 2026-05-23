import { test } from 'node:test';
import assert from 'node:assert/strict';
import { safeInlineJson } from '../src/utils/safe-json.ts';

test('safeInlineJson escapes HTML-significant characters and script terminators', () => {
  const serialized = safeInlineJson({ text: '</script><img src=x onerror=alert(1)> & text' });

  assert.equal(serialized.includes('</script>'), false);
  assert.equal(serialized.includes('<img'), false);
  assert.equal(serialized.includes('&'), false);
  assert.deepEqual(JSON.parse(serialized), { text: '</script><img src=x onerror=alert(1)> & text' });
});

test('safeInlineJson escapes JavaScript line separators while preserving parse result', () => {
  const value = { text: 'line\u2028separator\u2029paragraph' };
  const serialized = safeInlineJson(value);

  assert.equal(serialized.includes('\u2028'), false);
  assert.equal(serialized.includes('\u2029'), false);
  assert.equal(serialized.includes('\\u2028'), true);
  assert.equal(serialized.includes('\\u2029'), true);
  assert.deepEqual(JSON.parse(serialized), value);
});
