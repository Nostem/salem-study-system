import { test, expect } from '@playwright/test';

const secretCreateAccountPath = 'create-account-925e867b3f131dd970800516/';

test('secret create account page supports username and password without invite ID or email field', async ({ page }) => {
  const submittedBodies: any[] = [];
  await page.route('**/functions/v1/invite-signup', async (route) => {
    submittedBodies.push(route.request().postDataJSON());
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ ok: true, username: 'operator_one', learnerCode: 'SALEM-ABC12345' }),
    });
  });

  await page.goto(secretCreateAccountPath);

  await expect(page.getByRole('heading', { name: 'Create your Salem Study account' })).toBeVisible();
  await expect(page.getByLabel('Invite ID')).toHaveCount(0);
  await expect(page.getByLabel('Username')).toBeVisible();
  await expect(page.getByLabel('Password')).toBeVisible();
  await expect(page.getByLabel(/Display name/)).toBeVisible();
  await expect(page.locator('#createAccountForm').getByLabel(/email/i)).toHaveCount(0);

  await page.getByLabel('Username').fill('operator_one');
  await page.getByLabel('Password').fill('password123');
  await page.getByRole('button', { name: /Create account/i }).click();

  await expect.poll(() => submittedBodies.length).toBe(1);
  expect(submittedBodies[0]).toMatchObject({ username: 'operator_one', password: 'password123' });
  expect(submittedBodies[0]).not.toHaveProperty('inviteCode');
});

test('login page uses username and password instead of email', async ({ page }) => {
  await page.goto('login/');

  await expect(page.getByRole('heading', { name: 'Log in' })).toBeVisible();
  await expect(page.getByLabel('Username')).toBeVisible();
  await expect(page.getByLabel('Password')).toBeVisible();
  await expect(page.locator('#loginForm').getByLabel(/email/i)).toHaveCount(0);
  await expect(page.getByRole('link', { name: /Create account/i })).toHaveCount(0);
  await expect(page.getByText(/do not have an account/i)).toBeVisible();
  await expect(page.getByText(/contact site administrator/i)).toBeVisible();
});
