import { expect, test } from '@playwright/test';

// Derive the Supabase auth storage key from the build's PUBLIC_SUPABASE_URL (same as the other
// smoke specs) so the mocked session is found regardless of which URL the site was built with.
// Hardcoding it (e.g. 'sb-local-test-auth-token') only worked when the build used that exact URL.
function supabaseAuthStorageKey(): string {
  const url = process.env.PUBLIC_SUPABASE_URL || 'https://local-test.supabase.co';
  return `sb-${new URL(url).hostname.split('.')[0]}-auth-token`;
}

const learnerRoutes = [
  { path: 'study/', active: 'Study' },
  { path: 'quiz/', active: 'Quick Quiz' },
  { path: 'quiz-v2/', active: 'Quick Quiz' },
  { path: 'quiz-v2/play/', active: 'Quick Quiz' },
  { path: 'quiz-v2/review/', active: 'My Progress' },
  { path: 'graph-v2/', active: 'Study Map' },
  { path: 'history/', active: 'My Progress' },
];

test('Study presents one quiz entry plus Study Map and Progress paths', async ({ page }) => {
  await page.goto('study/');

  await expect(page.getByRole('heading', { name: 'Study' })).toBeVisible();
  await expect(page.getByText('Get one real feedback loop')).toBeVisible();
  await expect(page.getByText('Start with 10 questions, read the explanation after each answer, then use missed items as your next rep target. That is the fastest path from browsing to study signal.')).toBeVisible();
  await expect(page.getByTestId('study-auth-status')).toContainText(/Browsing as a guest|Signed in|Progress saving/);

  await expect(page.getByTestId('study-continue-banner')).toBeHidden();
  await expect(page.getByTestId('study-card-quick')).toHaveAttribute('href', /\/quiz\/?$/);
  await expect(page.getByTestId('study-card-map')).toHaveAttribute('href', /\/graph-v2\/?$/);
  await expect(page.getByTestId('study-card-progress')).toHaveAttribute('href', /\/history\/?$/);
  await expect(page.getByText('Advanced Quiz')).toHaveCount(0);

  await expect(page.getByText('Advanced / legacy tools')).toHaveCount(0);
  await expect(page.getByText(/without deciding which quiz engine/i)).toHaveCount(0);

  const eligible = Number(await page.getByTestId('study-eligible-count').textContent());
  expect(eligible).toBeGreaterThan(400);
});

test('Study shows a continue banner when logged-in review is due', async ({ page }) => {
  await page.addInitScript(([storageKey]) => {
    window.localStorage.setItem(
      storageKey,
      JSON.stringify({
        access_token: 'playwright-access-token',
        refresh_token: 'playwright-refresh-token',
        expires_at: Math.floor(Date.now() / 1000) + 3600,
        expires_in: 3600,
        token_type: 'bearer',
        user: { id: '00000000-0000-4000-8000-000000000001', aud: 'authenticated', role: 'authenticated' },
      })
    );
  }, [supabaseAuthStorageKey()]);

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
    await expect(nav.getByRole('link', { name: /^Study Map$/ })).toHaveAttribute('href', /\/graph-v2\/?$/);
    await expect(nav.getByRole('link', { name: /^Advanced Quiz$/ })).toHaveCount(0);
    await expect(nav.getByRole('link', { name: /^My Progress$/ })).toHaveAttribute('href', /\/history\/?$/);
    await expect(nav.getByRole('link', { name: route.active, exact: true })).toHaveAttribute('aria-current', 'page');
  });
}

test('mobile Study keeps the three learner choices clear and full-width', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('study/');

  const quick = page.getByTestId('study-card-quick');
  const map = page.getByTestId('study-card-map');
  const progress = page.getByTestId('study-card-progress');

  await expect(quick).toBeVisible();
  await expect(map).toBeVisible();
  await expect(progress).toBeVisible();
  await quick.scrollIntoViewIfNeeded();
  await expect(quick).toBeInViewport();

  const quickBox = await quick.boundingBox();
  const mapBox = await map.boundingBox();
  const progressBox = await progress.boundingBox();
  expect(quickBox?.width).toBeGreaterThan(300);
  expect(mapBox?.width).toBeGreaterThan(300);
  expect(progressBox?.width).toBeGreaterThan(300);
});

test('graph-v2 mobile keeps topic cards primary and hides advanced filters behind a collapsed panel', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('graph-v2/');

  await expect(page.getByTestId('gv2-topic-browser')).toBeVisible();
  const advanced = page.getByTestId('gv2-advanced');
  await expect(advanced).toBeVisible();
  await expect(advanced).not.toHaveAttribute('open', /.+/);

  await advanced.getByText('Explore connections (advanced)').click();
  const panel = page.getByTestId('gv2-mobile-filters');
  await expect(panel).toBeVisible();
  await expect(panel).not.toHaveAttribute('open', /.+/);
  await expect(panel.getByRole('button', { name: /Search and filters/i })).toBeVisible();
});
