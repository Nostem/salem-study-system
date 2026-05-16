import { expect, test } from '@playwright/test';

test('article sidebar exposes the full practice loop directly under home', async ({ page }) => {
  await page.goto('systems/reactor-coolant-system');

  const sidebar = page.locator('aside[data-sidebar-variant="desktop"]');
  await expect(sidebar).toBeVisible();
  await expect(sidebar.getByRole('link', { name: /Home/i })).toBeVisible();
  await expect(sidebar.getByRole('link', { name: /^◎ Study$/i })).toHaveAttribute('href', /\/salem-study-system\/study\/?$/);
  await expect(sidebar.getByRole('link', { name: /My Progress/i })).toHaveAttribute('href', /\/salem-study-system\/history\/?$/);
  await expect(sidebar.getByText('Advanced tools')).toBeVisible();

  const topLinks = await sidebar.locator('nav > div').first().getByRole('link').allTextContents();
  expect(topLinks.map((text) => text.replace(/\s+/g, ' ').trim()).slice(0, 4)).toEqual([
    '⌂ Home',
    '◎ Study',
    '↗ My Progress',
    '◇ Plant overview',
  ]);
});
