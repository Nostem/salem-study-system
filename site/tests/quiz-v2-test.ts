import { expect, test } from '@playwright/test';

test('quiz-v2 page lists structured questions and renders an image stem with source refs', async ({ page }) => {
  await page.goto('quiz-v2/?slug=q23-eop-flowchart-symbols-concurrent');

  await expect(page.getByRole('heading', { name: /Quiz v2 Preview/i })).toBeVisible();
  await expect(page.getByTestId('qv2-bank-count')).toContainText('499');

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

  // Year filter narrows the visible list.
  await page.getByTestId('qv2-year').selectOption('2023');
  const visibleItems = page.locator('[data-testid="qv2-list"] li.qv2-item:not(.hidden)');
  expect(await visibleItems.count()).toBeGreaterThan(0);
  expect(await visibleItems.count()).toBeLessThan(await listItems.count());
});
