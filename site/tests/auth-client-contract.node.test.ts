import { test } from 'node:test';
import assert from 'node:assert/strict';
import { EdgeFunctionError, edgeFunctionErrorCode } from '../src/utils/auth-client.ts';

test('edgeFunctionErrorCode preserves backend error codes', () => {
  assert.equal(edgeFunctionErrorCode({ error: 'invalid_authorization' }), 'invalid_authorization');
  assert.equal(edgeFunctionErrorCode({ error: 'invalid_quiz_type', detail: 'unsupported' }), 'invalid_quiz_type');
});

test('edgeFunctionErrorCode falls back for malformed responses', () => {
  assert.equal(edgeFunctionErrorCode({ message: 'bad gateway' }), 'request_failed');
  assert.equal(edgeFunctionErrorCode(null), 'request_failed');
});

test('EdgeFunctionError carries status and structured details', () => {
  const details = { error: 'missing_authorization' };
  const error = new EdgeFunctionError('missing_authorization', 401, details);

  assert.equal(error.message, 'missing_authorization');
  assert.equal(error.code, 'missing_authorization');
  assert.equal(error.status, 401);
  assert.equal(error.details, details);
});
