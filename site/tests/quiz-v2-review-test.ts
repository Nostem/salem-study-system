import { expect, test } from '@playwright/test';

test('quiz-v2 review uses whole questions and stores local review ratings', async ({ page }) => {
  await page.goto('quiz-v2/review/');

  await expect(page.getByRole('heading', { name: /Quiz v2 Review/i })).toBeVisible();
  await expect(page.getByText(/whole-question review/i)).toBeVisible();
  await expect(page.getByTestId('qv2r-total')).toHaveText(/^[1-9]\d*$/);
  await expect(page.getByTestId('qv2r-new')).toHaveText(/^[1-9]\d*$/);

  const firstSlug = await page.getByTestId('qv2r-current-slug').textContent();
  expect(firstSlug).toBeTruthy();
  expect(firstSlug).not.toBe('—');

  const visibleDetail = page.locator('.qv2r-detail:not(.hidden)');
  await expect(visibleDetail).toHaveCount(1);
  await expect(visibleDetail.getByTestId('qv2r-stem-blocks')).toBeVisible();
  await expect(visibleDetail.getByTestId('qv2r-choices')).toBeVisible();
  await expect(visibleDetail.getByTestId('qv2r-answer')).toBeHidden();

  await visibleDetail.getByTestId('qv2r-reveal').click();
  await expect(visibleDetail.getByTestId('qv2r-answer')).toBeVisible();
  await expect(visibleDetail.getByTestId('qv2r-answer-status')).toContainText(/Official answer/);

  await visibleDetail.getByTestId('qv2r-rate-good').click();
  await expect(page.getByTestId('qv2r-reviewed')).toHaveText('1');
  await expect(page.getByTestId('qv2r-progress-percent')).toHaveText(/^\d+(?:\.\d+)?%$/);
  await expect(page.getByTestId('qv2r-total-attempts')).toHaveText('1');
  await expect(page.getByTestId('qv2r-success-rate')).toHaveText('100%');
  await expect(page.getByTestId('qv2r-rating-counts')).toContainText('Good 1');

  const state = await page.evaluate(() => JSON.parse(localStorage.getItem('salem-qv2-review-state-v1') || '{}'));
  expect(Object.keys(state)).toContain(firstSlug?.trim());
  expect(state[firstSlug!.trim()].lastRating).toBe('good');
  expect(state[firstSlug!.trim()].attempts).toBe(1);
});
