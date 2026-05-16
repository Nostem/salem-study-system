import { expect, test } from '@playwright/test';

test('homepage routes learners through Study only', async ({ page }) => {
  await page.goto('');

  await expect(page.getByRole('link', { name: /^Study$/i }).first()).toHaveAttribute('href', /\/salem-study-system\/study\/?$/);
  await expect(page.getByRole('link', { name: /Classic Quiz/i })).toHaveCount(0);
  await expect(page.getByRole('link', { name: /Study Builder/i })).toHaveCount(0);
  await expect(page.getByRole('link', { name: /Study Map/i })).toHaveCount(0);
  await expect(page.getByRole('link', { name: /My Progress/i })).toHaveCount(0);
  await expect(page.getByRole('heading', { name: 'Start studying' })).toBeVisible();
});

test('article sidebar exposes Study as the single learner entry point under home', async ({ page }) => {
  await page.goto('systems/reactor-coolant-system');

  const sidebar = page.locator('aside[data-sidebar-variant="desktop"]');
  await expect(sidebar).toBeVisible();
  await expect(sidebar.getByRole('link', { name: /Home/i })).toBeVisible();
  await expect(sidebar.getByRole('link', { name: /^◎ Study$/i })).toHaveAttribute('href', /\/salem-study-system\/study\/?$/);
  await expect(sidebar.getByRole('link', { name: /My Progress/i })).toHaveCount(0);
  await expect(sidebar.getByText('Advanced tools')).toHaveCount(0);
  await expect(sidebar.getByRole('link', { name: /Classic Quiz/i })).toHaveCount(0);
  await expect(sidebar.getByRole('link', { name: /Study Builder/i })).toHaveCount(0);
  await expect(sidebar.getByRole('link', { name: /Study Map/i })).toHaveCount(0);

  const topLinks = await sidebar.locator('nav > div').first().getByRole('link').allTextContents();
  expect(topLinks.map((text) => text.replace(/\s+/g, ' ').trim()).slice(0, 3)).toEqual([
    '⌂ Home',
    '◎ Study',
    '◇ Plant overview',
  ]);
});
