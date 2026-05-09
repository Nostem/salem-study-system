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

  // Edge type filter reduces the list to nodes connected by selected graph semantics.
  await page.getByTestId('gv2-search').fill('');
  const unfilteredCount = Number(await page.getByTestId('gv2-visible-count').textContent());
  await page.getByTestId('gv2-edge-type').selectOption('tests');
  const testsEdgeCount = Number(await page.getByTestId('gv2-visible-count').textContent());
  expect(testsEdgeCount).toBeGreaterThan(0);
  expect(testsEdgeCount).toBeLessThan(unfilteredCount);
  await page.getByTestId('gv2-edge-type').selectOption('all');

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

  // The detail panel now acts as a study surface, not just raw edge lists.
  await expect(page.getByTestId(`gv2-summary-${Q23_ID}`)).toContainText('Question tests topic');
  const meta = page.getByTestId(`gv2-meta-${Q23_ID}`);
  await expect(meta).toContainText('Exam');
  await expect(meta).toContainText('2023 written');
  await expect(meta).toContainText('Question');
  await expect(meta).toContainText('23');
  await expect(meta).toContainText('Quiz eligible');
  await expect(meta).toContainText('no');
  await expect(meta).toContainText('Non-quiz reason');
  await expect(meta).toContainText('status_draft');
  await expect(page.getByTestId(`gv2-actions-${Q23_ID}`).getByRole('link', { name: /Open source\/wiki page/i }))
    .toHaveAttribute('href', /\/exams\/2023\/q23-eop-flowchart-symbols-concurrent\/$/);

  // Focus mode keeps the selected question plus directly connected topic/source/article nodes.
  await page.getByTestId('gv2-search').fill('');
  await page.getByTestId('gv2-focus-neighborhood').check();
  const focusedVisible = page.locator('[data-testid="gv2-list"] li.gv2-item:not(.hidden)');
  const focusedCount = Number(await page.getByTestId('gv2-visible-count').textContent());
  expect(focusedCount).toBeGreaterThan(1);
  expect(focusedCount).toBeLessThan(unfilteredCount);
  await expect(focusedVisible.filter({ hasText: '2023 Q23' })).toHaveCount(1);
  await expect(focusedVisible.filter({ hasText: 'Admin' }).first()).toBeVisible();

  // Topic nodes expose related questions. Topics with no eligible v2 practice pool do not show a dead practice link.
  await focusedVisible.filter({ hasText: 'Admin' }).first().getByRole('button').click();
  const adminDetail = page.getByTestId('gv2-detail-topic:admin');
  await expect(adminDetail).toBeVisible();
  await expect(page.getByTestId('gv2-related-questions-topic:admin')).toContainText('2023 Q23');
  await expect(page.getByTestId('gv2-actions-topic:admin')).not.toContainText('Practice this topic');

  // Topics with eligible practice questions hand off directly into quiz-v2 with the topic filter set.
  await page.getByTestId('gv2-focus-neighborhood').uncheck();
  await page.getByTestId('gv2-search').fill('topic:pressurizer-level-and-press-control');
  const practiceTopic = page.locator('[data-testid="gv2-list"] li.gv2-item:not(.hidden)').filter({ hasText: 'Pressurizer Level & Press Control' }).first();
  await practiceTopic.getByRole('button').click();
  await expect(page.getByTestId('gv2-actions-topic:pressurizer-level-and-press-control').getByRole('link', { name: /Practice this topic/i }))
    .toHaveAttribute('href', /\/quiz-v2\/play\/\?topics=pressurizer-level-and-press-control&count=10$/);
});
