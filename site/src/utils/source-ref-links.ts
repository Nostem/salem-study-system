import type { SourceRef } from '../types/question-blocks';

export function sourceRefLabel(ref: SourceRef): string {
  return ref.label || ref.slug || ref.path || ref.kind;
}

export function sourceRefHref(ref: SourceRef, base = '/'): string | null {
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  if (ref.kind !== 'wiki') return null;
  const raw = ref.path || ref.slug;
  if (!raw) return null;
  const clean = raw
    .replace(/^\/+/, '')
    .replace(/^wiki\//, '')
    .replace(/\.md$/i, '')
    .replace(/\/index$/i, '');
  if (!clean) return null;
  return `${normalizedBase}${clean}/`;
}
