import { expect, test } from '@playwright/test';

test('article sidebar includes quiz builder link directly under home', async ({ page }) => {
  await page.goto('systems/reactor-coolant-system');

  const sidebar = page.locator('aside[data-sidebar-variant="desktop"]');
  await expect(sidebar).toBeVisible();
  await expect(sidebar.getByRole('link', { name: /Home/i })).toBeVisible();
  await expect(sidebar.getByRole('link', { name: /Quiz Builder/i })).toHaveAttribute('href', /\/salem-study-system\/quiz\/?$/);

  const topLinks = await sidebar.locator('nav > div').first().getByRole('link').allTextContents();
  expect(topLinks.map((text) => text.replace(/\s+/g, ' ').trim()).slice(0, 3)).toEqual([
    '⌂ Home',
    '▣ Quiz Builder',
    '◇ Plant overview',
  ]);
});
