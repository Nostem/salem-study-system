import fs from 'node:fs';
import path from 'node:path';

const DIST_DIR = process.env.STATIC_ASSET_CHECK_DIST_DIR
  ? path.resolve(process.env.STATIC_ASSET_CHECK_DIST_DIR)
  : path.resolve(import.meta.dirname, '..', 'dist');
const STATIC_ASSET_RE = /\.(?:pdf|xlsx)(?:$|[?#])/i;
const STATIC_ASSET_DIR_RE = /^\/(?:exam-pdfs|ts-pdfs|reference-pdfs)\//;
const OLD_BASE_STATIC_ASSET_RE = /^\/salem-study-system\/(?:exam-pdfs|ts-pdfs|reference-pdfs)\//;
const URL_ATTR_RE = /\b(?:href|src)\s*=\s*(["'])([^"']+)\1/g;

function normalizeBasePath(raw) {
  if (!raw || raw === '/') return '';
  return `/${raw.replace(/^\/+|\/+$/g, '')}`;
}

function configuredBasePath() {
  const raw = process.env.PUBLIC_BASE_PATH ?? (process.env.VERCEL === '1' || process.env.VERCEL === 'true' ? '/' : '/salem-study-system');
  return normalizeBasePath(raw);
}

function walkHtmlFiles(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walkHtmlFiles(full));
    if (entry.isFile() && entry.name.endsWith('.html')) files.push(full);
  }
  return files;
}

function pagePathForHtml(htmlFile) {
  const relative = path.relative(DIST_DIR, htmlFile).replace(/\\/g, '/');
  if (relative === 'index.html') return '/';
  return `/${relative.replace(/index\.html$/, '')}`;
}

function resolveHrefPath(href, pagePath) {
  try {
    const url = new URL(href, `https://salem.local${pagePath}`);
    if (url.origin !== 'https://salem.local') return null;
    return decodeURI(url.pathname);
  } catch {
    return null;
  }
}

function assetPathForHrefPath(hrefPath, basePath) {
  if (basePath && hrefPath.startsWith(`${basePath}/`)) {
    return hrefPath.slice(basePath.length);
  }
  return hrefPath;
}

if (!fs.existsSync(DIST_DIR)) {
  console.error(`Missing dist directory: ${DIST_DIR}`);
  process.exit(1);
}

const basePath = configuredBasePath();
const rootHostedBuild = basePath === '';
const oldBaseLinks = [];
const wrongBaseLinks = [];
const missingAssets = [];
const checkedAssets = new Set();

for (const htmlFile of walkHtmlFiles(DIST_DIR)) {
  const html = fs.readFileSync(htmlFile, 'utf8');
  const pagePath = pagePathForHtml(htmlFile);

  for (const match of html.matchAll(URL_ATTR_RE)) {
    const href = match[2];
    if (!STATIC_ASSET_RE.test(href)) continue;

    const hrefPath = resolveHrefPath(href, pagePath);
    if (!hrefPath) continue;

    const assetPath = assetPathForHrefPath(hrefPath, basePath);
    const isOwnedAssetLink = STATIC_ASSET_DIR_RE.test(assetPath) || OLD_BASE_STATIC_ASSET_RE.test(hrefPath);
    if (!isOwnedAssetLink) continue;

    if (rootHostedBuild && OLD_BASE_STATIC_ASSET_RE.test(hrefPath)) {
      oldBaseLinks.push(`${path.relative(DIST_DIR, htmlFile)} -> ${href}`);
      continue;
    }

    if (basePath && !hrefPath.startsWith(`${basePath}/`)) {
      wrongBaseLinks.push(`${path.relative(DIST_DIR, htmlFile)} -> ${href} (expected prefix ${basePath}/)`);
      continue;
    }

    if (!STATIC_ASSET_DIR_RE.test(assetPath)) continue;

    const assetFile = path.join(DIST_DIR, assetPath.replace(/^\//, ''));
    checkedAssets.add(assetPath);
    if (!fs.existsSync(assetFile)) {
      missingAssets.push(`${path.relative(DIST_DIR, htmlFile)} -> ${href} (expected ${path.relative(DIST_DIR, assetFile)})`);
    }
  }
}

const noCheckedAssets = checkedAssets.size === 0;

if (oldBaseLinks.length || wrongBaseLinks.length || missingAssets.length || noCheckedAssets) {
  if (oldBaseLinks.length) {
    console.error(`Found ${oldBaseLinks.length} old GitHub Pages base static asset links in a root-hosted build:`);
    for (const item of oldBaseLinks.slice(0, 25)) console.error(`  ${item}`);
    if (oldBaseLinks.length > 25) console.error(`  ... ${oldBaseLinks.length - 25} more`);
  }

  if (wrongBaseLinks.length) {
    console.error(`Found ${wrongBaseLinks.length} static asset links missing the configured base path:`);
    for (const item of wrongBaseLinks.slice(0, 25)) console.error(`  ${item}`);
    if (wrongBaseLinks.length > 25) console.error(`  ... ${wrongBaseLinks.length - 25} more`);
  }

  if (missingAssets.length) {
    console.error(`Found ${missingAssets.length} static asset links without matching built files:`);
    for (const item of missingAssets.slice(0, 25)) console.error(`  ${item}`);
    if (missingAssets.length > 25) console.error(`  ... ${missingAssets.length - 25} more`);
  }

  if (noCheckedAssets) {
    console.error('Found no owned PDF/XLSX asset links to verify.');
  }

  process.exit(1);
}

console.log(`Static asset link check passed: ${checkedAssets.size} unique PDF/XLSX assets referenced.`);
