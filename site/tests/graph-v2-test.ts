import { expect, test } from '@playwright/test';

const Q23_ID = 'question:q23-eop-flowchart-symbols-concurrent';

async function openAdvanced(page: import('@playwright/test').Page) {
  const advanced = page.getByTestId('gv2-advanced');
  await expect(advanced).toBeVisible();
  if (!(await advanced.evaluate((el) => (el as HTMLDetailsElement).open))) {
    await advanced.getByText('Explore connections (advanced)').click();
  }
}

test('graph-v2 shows topic-first practice cards by default', async ({ page }) => {
  await page.goto('graph-v2/');

  await expect(page.getByRole('heading', { name: 'Study Map', exact: true })).toBeVisible();
  await expect(page.getByTestId('gv2-topic-search')).toHaveAttribute('placeholder', 'Find a topic');
  await expect(page.getByTestId('gv2-advanced')).not.toHaveAttribute('open', '');

  const cvcsCard = page.getByTestId('gv2-topic-card-topic:chemical-and-volume-control-system');
  await expect(cvcsCard).toBeVisible();
  await expect(cvcsCard).toContainText('CVCS');
  await expect(cvcsCard).toContainText(/\d+ practice question/);
  await expect(cvcsCard.getByRole('link', { name: 'Practice this topic' }))
    .toHaveAttribute('href', /\/quiz-v2\/play\/\?topics=chemical-and-volume-control-system&count=10$/);
  await expect(cvcsCard.getByRole('checkbox', { name: /Add CVCS to combined practice/i })).toBeVisible();

  await page.getByTestId('gv2-topic-search').fill('emergency-core-cooling');
  await expect(page.getByTestId('gv2-topic-card-topic:emergency-core-cooling-systems')).toBeVisible();
  await expect(cvcsCard).toBeHidden();
});

test('graph-v2 combined topic bar rolls topic cards into one topics handoff', async ({ page }) => {
  await page.goto('graph-v2/');

  await page.getByTestId('gv2-topic-card-topic:chemical-and-volume-control-system').getByRole('checkbox').check();
  await expect(page.getByTestId('gv2-combined-bar')).toBeVisible();
  await expect(page.getByTestId('gv2-combined-summary')).toContainText('1 topic');

  await page.getByTestId('gv2-topic-card-topic:emergency-core-cooling-systems').getByRole('checkbox').check();
  await expect(page.getByTestId('gv2-combined-summary')).toContainText(/2 topics · \d+ questions/);
  const combinedPool = Number(await page.getByTestId('gv2-builder-pool').textContent());
  expect(combinedPool).toBeGreaterThan(20);
  await expect(page.getByTestId('gv2-combined-play'))
    .toHaveAttribute('href', /\/quiz-v2\/play\/\?topics=chemical-and-volume-control-system%2Cemergency-core-cooling-systems&count=20$/);
});

test('graph-v2 page loads with counts and exposes Q23 source/topic edges', async ({ page }) => {
  await page.goto('graph-v2/');
  await openAdvanced(page);
  await expect(page.getByTestId('gv2-empty')).toContainText('Select a node above or in the list to view its connections.');

  // Page chrome.
  await expect(page.getByRole('heading', { name: 'Study Map', exact: true })).toBeVisible();

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

  // Question count should match the expanded structured bank size.
  await expect(page.getByTestId('gv2-node-count-question')).toHaveText('898');

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
  await expect(meta).toContainText('yes');
  await expect(page.getByTestId(`gv2-actions-${Q23_ID}`).getByRole('link', { name: /Start study session from this node/i }))
    .toHaveAttribute('href', /\/quiz-v2\/play\/\?slugs=q23-eop-flowchart-symbols-concurrent&count=1$/);
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

  // Topic nodes expose related questions. Newly imported 2016 topics with eligible pools hand off into quiz-v2.
  await page.getByTestId('gv2-focus-neighborhood').uncheck();
  await page.getByTestId('gv2-search').fill('topic:demin-water');
  const importedPracticeTopic = page.locator('[data-testid="gv2-list"] li.gv2-item:not(.hidden)').filter({ hasText: 'Demin Water' }).first();
  await importedPracticeTopic.getByRole('button').click();
  const deminDetail = page.getByTestId('gv2-detail-topic:demin-water');
  await expect(deminDetail).toBeVisible();
  await expect(page.getByTestId('gv2-related-questions-topic:demin-water')).toContainText('2016 Q53');
  await expect(page.getByTestId('gv2-actions-topic:demin-water').getByRole('link', { name: /Start study session from this node/i }))
    .toHaveAttribute('href', /\/quiz-v2\/play\/\?topics=demin-water&count=10$/);

  // Larger topics with eligible practice questions hand off directly into quiz-v2 with the topic filter set.
  await page.getByTestId('gv2-search').fill('topic:pressurizer-level-and-press-control');
  const practiceTopic = page.locator('[data-testid="gv2-list"] li.gv2-item:not(.hidden)').filter({ hasText: 'Pressurizer Level & Press Control' }).first();
  await practiceTopic.getByRole('button').click();
  await expect(page.getByTestId('gv2-actions-topic:pressurizer-level-and-press-control').getByRole('link', { name: /Start study session from this node/i }))
    .toHaveAttribute('href', /\/quiz-v2\/play\/\?topics=pressurizer-level-and-press-control&count=10$/);
  await expect(page.getByTestId('gv2-actions-topic:pressurizer-level-and-press-control')).toContainText('eligible question');

  // Question/source/article nodes can generate a quiz from their explicit eligible related-question pool.
  await page.getByTestId('gv2-search').fill('q8-pzr-saturation-rcp-restart');
  const eligibleQuestion = page.locator('[data-testid="gv2-list"] li.gv2-item:not(.hidden)').filter({ hasText: '2018 Q8' }).first();
  await eligibleQuestion.getByRole('button').click();
  await expect(page.getByTestId('gv2-actions-question:q8-pzr-saturation-rcp-restart').getByRole('link', { name: /Start study session from this node/i }))
    .toHaveAttribute('href', /\/quiz-v2\/play\/\?slugs=q8-pzr-saturation-rcp-restart&count=1$/);
});

test('graph-v2 multi-select builder unions eligible pools and links to quiz-v2 play', async ({ page }) => {
  await page.goto('graph-v2/');
  await openAdvanced(page);

  await page.locator('[data-testid="gv2-list"] [data-gv2-builder-toggle="topic:chemical-and-volume-control-system"]').check();

  await expect(page.getByTestId('gv2-builder-count')).toHaveText('1');
  await expect(page.getByTestId('gv2-detail-topic:chemical-and-volume-control-system')).toBeVisible();
  await expect(page.getByTestId('gv2-neighborhood-map-topic:chemical-and-volume-control-system')).toBeVisible();

  await page.locator('[data-testid="gv2-list"] [data-gv2-builder-toggle="topic:emergency-core-cooling-systems"]').check();

  await expect(page.getByTestId('gv2-builder-count')).toHaveText('2');
  await expect(page.getByTestId('gv2-builder-summary')).toContainText('2 nodes selected');
  await expect(page.getByTestId('gv2-builder-tray')).toContainText('CVCS');
  await expect(page.getByTestId('gv2-builder-tray')).toContainText('ECCS');
  await expect(page.getByTestId('gv2-builder-chip')).toHaveCount(2);
  const pool = Number(await page.getByTestId('gv2-builder-pool').textContent());
  expect(pool).toBeGreaterThan(20);

  const play = page.getByTestId('gv2-builder-play');
  await expect(play).not.toHaveClass(/pointer-events-none/);
  await expect(play).toHaveAttribute('href', /\/quiz-v2\/play\/\?slugs=.*&count=20&seed=graph-builder$/);
});

test('graph-v2 polish exposes practice-only filtering, empty state, and deep-linked selection', async ({ page }) => {
  await page.goto('graph-v2/');
  await openAdvanced(page);

  const initialCount = Number(await page.getByTestId('gv2-visible-count').textContent());
  await page.getByTestId('gv2-practice-only').check();
  const practiceCount = Number(await page.getByTestId('gv2-visible-count').textContent());
  expect(practiceCount).toBeGreaterThan(0);
  expect(practiceCount).toBeLessThan(initialCount);

  await page.getByTestId('gv2-search').fill('q85-sg-overpressure-security-redacted');
  await expect(page.getByTestId('gv2-no-results')).toBeVisible();
  await expect(page.getByTestId('gv2-no-results')).toContainText('No graph nodes match');

  await page.getByTestId('gv2-search').fill('q8-pzr-saturation-rcp-restart');
  await page.locator('[data-testid="gv2-list"] li.gv2-item:not(.hidden)').first().getByRole('button').click();
  await expect(page).toHaveURL(/graph-v2\/\?id=question%3Aq8-pzr-saturation-rcp-restart/);

  await page.goto('graph-v2/?id=question%3Aq8-pzr-saturation-rcp-restart');
  await expect(page.getByTestId('gv2-advanced')).toHaveAttribute('open', '');
  await expect(page.getByTestId('gv2-detail-question:q8-pzr-saturation-rcp-restart')).toBeVisible();
  await expect(page.getByTestId('gv2-selected-jump')).toHaveAttribute('href', '#gv2-detail-root');
});
