import { expect, test } from '@playwright/test';

test('quiz-v2 page lists structured questions and renders an image stem with source refs', async ({ page }) => {
  await page.goto('quiz-v2/?slug=q23-eop-flowchart-symbols-concurrent');

  await expect(page.getByRole('heading', { name: /Advanced Quiz/i })).toBeVisible();
  await expect(page.getByTestId('qv2-bank-count')).toContainText('599');

  // List rendered (sidebar contains many items).
  const listItems = page.locator('[data-testid="qv2-list"] li.qv2-item');
  await expect(listItems.first()).toBeVisible();
  expect(await listItems.count()).toBeGreaterThan(100);

  // Deep link auto-selects 2023 Q23.
  const detail = page.getByTestId('qv2-detail-q23-eop-flowchart-symbols-concurrent');
  await expect(detail).toBeVisible();
  await expect(page.getByTestId('qv2-empty')).toBeHidden();

  // Image block from the structured stem (the regression this format prevents).
  const image = detail.locator('[data-testid="qv2-stem-blocks"] img');
  await expect(image).toHaveAttribute('src', /2023-q23-symbol\.png$/);
  await expect(image).toHaveAttribute('alt', 'Concurrent Step Symbol');

  // Source refs are visible and traceable.
  const sourceRefs = detail.getByTestId('qv2-source-refs');
  await expect(sourceRefs).toContainText('[wiki]');
  await expect(sourceRefs).toContainText('q23-eop-flowchart-symbols-concurrent');
  await expect(detail.getByTestId('qv2-source-ref-link').first()).toHaveAttribute('href', /\/exams\/2023\/q23-eop-flowchart-symbols-concurrent\/$/);

  // Year filter narrows the visible list.
  await page.getByTestId('qv2-year').selectOption('2023');
  const visibleItems = page.locator('[data-testid="qv2-list"] li.qv2-item:not(.hidden)');
  expect(await visibleItems.count()).toBeGreaterThan(0);
  expect(await visibleItems.count()).toBeLessThan(await listItems.count());
});

test('quiz-v2 session preview shows deterministic seeded question order', async ({ page }) => {
  await page.goto('quiz-v2/?session=1&seed=session-test&count=3');

  const panel = page.getByTestId('qv2-session-panel');
  await expect(panel).toBeVisible();
  await expect(page.getByTestId('qv2-session-id')).toContainText(/^qv2-[0-9a-f]{8}$/);
  await expect(page.getByTestId('qv2-session-seed')).toHaveText('session-test');
  await expect(page.getByTestId('qv2-session-count')).toHaveText('3');
  await expect(page.getByTestId('qv2-session-filters')).toContainText('"count":3');
  await expect(page.getByTestId('qv2-session-filters')).toContainText('"referenceMode":"include"');

  const playLink = page.getByTestId('qv2-session-play-link');
  await expect(playLink).toHaveAttribute('href', /\/quiz-v2\/play\/\?seed=session-test&count=3$/);

  const items = page.locator('#qv2-session-list li');
  await expect(items).toHaveCount(3);
  const firstRun = await items.evaluateAll((nodes) => nodes.map((node) => node.getAttribute('data-slug')));

  await page.reload();
  const secondRun = await page.locator('#qv2-session-list li').evaluateAll((nodes) =>
    nodes.map((node) => node.getAttribute('data-slug'))
  );
  expect(secondRun).toEqual(firstRun);
});
