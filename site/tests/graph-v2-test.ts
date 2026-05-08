import { expect, test } from '@playwright/test';

const Q23_ID = 'question:q23-eop-flowchart-symbols-concurrent';

test('graph-v2 page loads with counts and exposes Q23 source/topic edges', async ({ page }) => {
  await page.goto('graph-v2/');

  // Page chrome.
  await expect(page.getByRole('heading', { name: /Graph v2 Preview/i })).toBeVisible();

  // Total node + edge counts must be positive integers.
  const nodeCount = await page.getByTestId('gv2-node-count').first().textContent();
  const edgeCount = await page.getByTestId('gv2-edge-count').first().textContent();
  expect(Number(nodeCount)).toBeGreaterThan(500);
  expect(Number(edgeCount)).toBeGreaterThan(500);

  // Per-kind counts surface every category in the spec.
  for (const kind of ['article', 'question', 'topic', 'source']) {
    const value = await page.getByTestId(`gv2-node-count-${kind}`).textContent();
    expect(Number(value)).toBeGreaterThan(0);
  }
  // Per-edge-type counts surface every edge type.
  for (const type of ['wikilink', 'tests', 'topic-wiki', 'quiz-source', 'sourced-from']) {
    const value = await page.getByTestId(`gv2-edge-count-${type}`).textContent();
    expect(Number(value)).toBeGreaterThan(0);
  }

  // Question count should match the structured bank size (499).
  await expect(page.getByTestId('gv2-node-count-question')).toHaveText('499');

  // Search for the known Q23 question — only the matching item stays visible.
  await page.getByTestId('gv2-search').fill('q23-eop-flowchart-symbols-concurrent');
  const visibleItems = page.locator('[data-testid="gv2-list"] li.gv2-item:not(.hidden)');
  expect(await visibleItems.count()).toBe(1);
  await expect(visibleItems.first()).toContainText('2023 Q23');

  // Select Q23 — its detail panel is shown with outgoing edges including
  // `tests` (topic), `quiz-source` (wiki), and `sourced-from` (source label).
  await visibleItems.first().getByRole('button').click();
  const detail = page.getByTestId(`gv2-detail-${Q23_ID}`);
  await expect(detail).toBeVisible();
  await expect(page.getByTestId('gv2-empty')).toBeHidden();

  const edges = page.getByTestId(`gv2-edges-${Q23_ID}`);
  await expect(edges).toContainText('[tests]');
  await expect(edges).toContainText('topic:admin');
  await expect(edges).toContainText('[quiz-source]');
  await expect(edges).toContainText('article:exams/2023/q23-eop-flowchart-symbols-concurrent');
  await expect(edges).toContainText('[sourced-from]');
});
