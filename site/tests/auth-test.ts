import { test, expect } from '@playwright/test';

test('signup page supports invite ID username and password without email field', async ({ page }) => {
  await page.goto('signup/');

  await expect(page.getByRole('heading', { name: 'Create your Salem Study account' })).toBeVisible();
  await expect(page.getByLabel('Invite ID')).toBeVisible();
  await expect(page.getByLabel('Username')).toBeVisible();
  await expect(page.getByLabel('Password')).toBeVisible();
  await expect(page.getByLabel(/Display name/)).toBeVisible();
  await expect(page.getByLabel(/email/i)).toHaveCount(0);
});

test('login page uses username and password instead of email', async ({ page }) => {
  await page.goto('login/');

  await expect(page.getByRole('heading', { name: 'Log in' })).toBeVisible();
  await expect(page.getByLabel('Username')).toBeVisible();
  await expect(page.getByLabel('Password')).toBeVisible();
  await expect(page.getByLabel(/email/i)).toHaveCount(0);
});
