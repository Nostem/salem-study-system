import { createHash } from 'node:crypto';

function trimSlashes(value) {
  return value.replace(/^\/+|\/+$/g, '');
}

function slugPart(value, maxLength) {
  return trimSlashes(String(value).trim().toLowerCase())
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, maxLength);
}

function shortHash(value) {
  return createHash('sha256').update(value).digest('hex').slice(0, 8);
}

export function resolvePagefindAssetDir(env = process.env) {
  const explicit = env.PUBLIC_PAGEFIND_ASSET_DIR?.trim();
  if (explicit) return trimSlashes(explicit);

  const commitSha = env.VERCEL_GIT_COMMIT_SHA?.trim();
  const commitPart = commitSha ? slugPart(commitSha, 8) : '';

  if (commitPart) {
    const deploymentKey =
      env.VERCEL_DEPLOYMENT_ID?.trim() ||
      env.VERCEL_URL?.trim() ||
      env.VERCEL_GIT_COMMIT_REF?.trim() ||
      '';

    return deploymentKey
      ? `pagefind-${commitPart}-${shortHash(deploymentKey)}`
      : `pagefind-${commitPart}`;
  }

  return 'pagefind-current';
}
