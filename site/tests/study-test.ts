import { expect, test } from '@playwright/test';

const learnerRoutes = [
  { path: 'study/', active: 'Study' },
  { path: 'quiz/', active: 'Quick Quiz' },
  { path: 'quiz-v2/', active: 'Advanced Quiz' },
  { path: 'quiz-v2/play/', active: 'Advanced Quiz' },
  { path: 'quiz-v2/review/', active: 'My Progress' },
  { path: 'graph-v2/', active: 'Advanced Quiz' },
  { path: 'history/', active: 'My Progress' },
];

test('Study presents a three-choice learner hub with Quick, Advanced, and Progress paths', async ({ page }) => {
  await page.goto('study/');

  await expect(page.getByRole('heading', { name: 'Study' })).toBeVisible();
  await expect(page.getByText('Practice NRC exam questions, target weak areas, and track your progress.')).toBeVisible();
  await expect(page.getByTestId('study-auth-status')).toContainText(/Browsing as a guest|Signed in|Progress saving/);

  await expect(page.getByTestId('study-continue-banner')).toBeHidden();
  await expect(page.getByTestId('study-card-quick')).toHaveAttribute('href', /\/quiz\/?$/);
  await expect(page.getByTestId('study-card-advanced-build')).toHaveAttribute('href', /\/quiz-v2\/?$/);
  await expect(page.getByTestId('study-card-advanced-map')).toHaveAttribute('href', /\/graph-v2\/?$/);
  await expect(page.getByTestId('study-card-progress')).toHaveAttribute('href', /\/history\/?$/);

  await expect(page.getByText('Advanced / legacy tools')).toHaveCount(0);
  await expect(page.getByText(/without deciding which quiz engine/i)).toHaveCount(0);

  const eligible = Number(await page.getByTestId('study-eligible-count').textContent());
  expect(eligible).toBeGreaterThan(400);
});

test('Study shows a continue banner when logged-in review is due', async ({ page }) => {
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

  await expect(page.getByTestId('study-auth-status')).toContainText('Signed in');
  await expect(page.getByTestId('study-continue-banner')).toBeVisible();
  await expect(page.getByTestId('study-continue-action')).toHaveAttribute('href', /\/quiz-v2\/review\/?$/);
  await expect(page.getByTestId('study-continue-reason')).toContainText('1 question is due for review');
});

for (const route of learnerRoutes) {
  test(`learner chrome is present on ${route.path}`, async ({ page }) => {
    await page.goto(route.path);

    const nav = page.getByTestId('study-nav');
    await expect(nav).toBeVisible();
    await expect(nav.getByRole('link', { name: /^Study$/ })).toHaveAttribute('href', /\/study\/?$/);
    await expect(nav.getByRole('link', { name: /^Quick Quiz$/ })).toHaveAttribute('href', /\/quiz\/?$/);
    await expect(nav.getByRole('link', { name: /^Advanced Quiz$/ })).toHaveAttribute('href', /\/quiz-v2\/?$/);
    await expect(nav.getByRole('link', { name: /^My Progress$/ })).toHaveAttribute('href', /\/history\/?$/);
    await expect(nav.getByRole('link', { name: route.active })).toHaveAttribute('aria-current', 'page');
  });
}

test('mobile Study keeps the three learner choices clear and full-width', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('study/');

  const quick = page.getByTestId('study-card-quick');
  const advanced = page.getByTestId('study-card-advanced');
  const progress = page.getByTestId('study-card-progress');

  await expect(quick).toBeVisible();
  await expect(advanced).toBeVisible();
  await expect(progress).toBeVisible();
  await expect(quick).toBeInViewport();

  const quickBox = await quick.boundingBox();
  const advancedBox = await advanced.boundingBox();
  const progressBox = await progress.boundingBox();
  expect(quickBox?.width).toBeGreaterThan(300);
  expect(advancedBox?.width).toBeGreaterThan(300);
  expect(progressBox?.width).toBeGreaterThan(300);
});

test('graph-v2 mobile hides advanced filters behind a collapsed panel', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('graph-v2/');

  const panel = page.getByTestId('gv2-mobile-filters');
  await expect(panel).toBeVisible();
  await expect(panel).not.toHaveAttribute('open', /.+/);
  await expect(panel.getByRole('button', { name: /Search and filters/i })).toBeVisible();
});
