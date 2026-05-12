import { expect, type Page, test } from '@playwright/test';

function supabaseAuthStorageKey(): string {
  const url = process.env.PUBLIC_SUPABASE_URL || 'https://local-test.supabase.co';
  const projectRef = new URL(url).hostname.split('.')[0];
  return `sb-${projectRef}-auth-token`;
}

async function seedAuth(page: Page): Promise<void> {
  await page.addInitScript(([storageKey]) => {
    window.localStorage.setItem(
      storageKey,
      JSON.stringify({
        access_token: 'playwright-access-token',
        refresh_token: 'playwright-refresh-token',
        expires_at: Math.floor(Date.now() / 1000) + 3600,
        expires_in: 3600,
        token_type: 'bearer',
        user: {
          id: '00000000-0000-4000-8000-000000000001',
          aud: 'authenticated',
          role: 'authenticated',
          email: 'playwright@example.invalid',
          app_metadata: {},
          user_metadata: { username: 'playwright' },
        },
      })
    );
  }, [supabaseAuthStorageKey()]);
}

test('quiz-v2 review uses whole questions and stores local review ratings', async ({ page }) => {
  await page.goto('quiz-v2/review/');

  await expect(page.getByRole('heading', { name: 'Review Queue', exact: true })).toBeVisible();
  await expect(page.getByText(/whole items/i)).toBeVisible();
  await expect(page.getByTestId('qv2r-mode')).toContainText(/queue/i);
  await expect(page.getByText(/Review missed from history/i)).toBeVisible();
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
  await expect(visibleDetail.getByTestId('qv2r-source-ref-link').first()).toHaveAttribute('href', /\/exams\/\d{4}\//);

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

test('quiz-v2 review shows account empty state when backend has no due reviews', async ({ page }) => {
  await seedAuth(page);
  await page.route('**/functions/v1/quiz-review-queue', async (route) => {
    expect(route.request().headers().authorization).toBe('Bearer playwright-access-token');
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        ok: true,
        dueSlugs: [],
        allSlugs: ['q8-pzr-saturation-rcp-restart'],
        states: {
          'q8-pzr-saturation-rcp-restart': {
            attemptsCount: 3,
            correctCount: 3,
            incorrectCount: 0,
            lastAttemptAt: '2026-05-09T00:00:00Z',
            lastCorrectAt: '2026-05-09T00:00:00Z',
            masteryState: 'mastered',
            nextReviewAt: '2099-01-01T00:00:00Z',
            updatedAt: '2026-05-09T00:00:00Z',
          },
        },
      }),
    });
  });

  await page.goto('quiz-v2/review/');

  await expect(page.getByTestId('qv2r-mode')).toHaveText('Account-persisted due queue');
  await expect(page.getByTestId('qv2r-scope')).toHaveText('0 account-persisted due questions');
  await expect(page.getByTestId('qv2r-current-slug')).toHaveText('—');
  await expect(page.getByTestId('qv2r-empty')).toBeVisible();
  await expect(page.getByTestId('qv2r-empty')).toContainText('No due questions right now.');
  await expect(page.getByTestId('qv2r-total')).toHaveText('0');
  await expect(page.getByTestId('qv2r-new')).toHaveText('0');
});
