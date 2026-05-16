import { expect, test } from '@playwright/test';

test('Study is the simple learner entry point with preview and canonical actions', async ({ page }) => {
  await page.goto('study/');

  await expect(page.getByRole('heading', { name: 'Study' })).toBeVisible();
  await expect(page.getByText('Start here. Pick up review work')).toBeVisible();
  await expect(page.getByTestId('study-auth-status')).toContainText(/Preview mode|Logged in/);

  await expect(page.getByTestId('study-primary-action')).toHaveAttribute('href', /\/quiz-v2\/play\/\?count=10&seed=study-start$/);
  await expect(page.getByTestId('study-card-review')).toHaveAttribute('href', /\/quiz-v2\/review\/?$/);
  await expect(page.getByTestId('study-card-practice')).toHaveAttribute('href', /\/quiz-v2\/play\/\?count=10&seed=study-start$/);
  await expect(page.getByTestId('study-card-map')).toHaveAttribute('href', /\/graph-v2\/?$/);
  await expect(page.getByTestId('study-card-progress')).toHaveAttribute('href', /\/history\/?$/);

  const eligible = Number(await page.getByTestId('study-eligible-count').textContent());
  expect(eligible).toBeGreaterThan(400);
  await expect(page.getByText('Advanced / legacy tools')).toBeVisible();
});

test('Study redirects the primary action to review when logged-in review is due', async ({ page }) => {
  await page.addInitScript(() => {
    window.localStorage.setItem(
      'sb-local-test-auth-token',
      JSON.stringify({
        access_token: 'playwright-access-token',
        refresh_token: 'playwright-refresh-token',
        expires_at: Math.floor(Date.now() / 1000) + 3600,
        expires_in: 3600,
        token_type: 'bearer',
        user: { id: '00000000-0000-4000-8000-000000000001', aud: 'authenticated', role: 'authenticated' },
      })
    );
  });

  await page.route('**/functions/v1/quiz-review-queue', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ ok: true, dueSlugs: ['q8-pzr-saturation-rcp-restart'], allSlugs: [], states: {} }),
    });
  });

  await page.goto('study/');

  await expect(page.getByTestId('study-auth-status')).toContainText('Logged in');
  await expect(page.getByTestId('study-primary-action')).toHaveAttribute('href', /\/quiz-v2\/review\/?$/);
  await expect(page.getByTestId('study-primary-reason')).toContainText('1 question due for review');
});
