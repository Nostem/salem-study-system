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

test('quiz-v2 play route loads a deterministic session with an explicit count', async ({ page }) => {
  await page.goto('quiz-v2/play/?seed=play-default-test&count=4');

  await expect(page.getByRole('heading', { name: /Quiz v2 Play/i })).toBeVisible();
  await expect(page.getByTestId('qv2p-session-id')).toContainText(/^qv2-[0-9a-f]{8}$/);
  await expect(page.getByTestId('qv2p-session-seed')).toHaveText('play-default-test');
  await expect(page.getByTestId('qv2p-session-count')).toHaveText('4');
  await expect(page.getByTestId('qv2p-session-index')).toHaveText('1');
  await expect(page.getByTestId('qv2p-session-summary')).toContainText('4-question session');
  await expect(page.getByTestId('qv2p-session-debug')).toBeHidden();

  // Exactly one question is visible.
  const visibleDetails = page.locator('.qv2p-detail:not(.hidden)');
  await expect(visibleDetails).toHaveCount(1);

  // Stem and choices render.
  await expect(visibleDetails.locator('[data-testid="qv2p-stem-blocks"]')).toBeVisible();
  await expect(visibleDetails.locator('[data-testid="qv2p-choices"] .qv2p-choice').first()).toBeVisible();

  // Source link points back to the preview page.
  const link = visibleDetails.getByTestId('qv2p-source-link');
  await expect(link).toHaveAttribute('href', /\/quiz-v2\/\?slug=/);
});

test('quiz-v2 play answer selection reveals feedback and disables choices', async ({ page }) => {
  await page.goto('quiz-v2/play/?seed=play-answer-test&count=3');

  const detail = page.locator('.qv2p-detail:not(.hidden)');
  await expect(detail).toHaveCount(1);

  // Feedback hidden before any answer.
  await expect(detail.locator('[data-testid="qv2p-feedback"]')).toBeHidden();

  // Click the first choice.
  const firstChoice = detail.locator('.qv2p-choice').first();
  await firstChoice.click();

  // Feedback now visible with a correct/incorrect status.
  const feedback = detail.locator('[data-testid="qv2p-feedback"]');
  await expect(feedback).toBeVisible();
  await expect(detail.locator('[data-testid="qv2p-feedback-status"]')).toContainText(
    /Correct|Incorrect/
  );

  // First choice should be marked correct OR incorrect (locally evaluated).
  await expect(firstChoice).toHaveClass(/is-(correct|incorrect)/);

  // All choices are now disabled.
  const choices = detail.locator('.qv2p-choice');
  const count = await choices.count();
  for (let i = 0; i < count; i++) {
    await expect(choices.nth(i)).toBeDisabled();
  }
});

test('quiz-v2 play formats explanations as mobile-scannable sections', async ({ page }) => {
  await page.goto('quiz-v2/play/?slugs=q8-pzr-saturation-rcp-restart&count=1&seed=explanation-format');

  const detail = page.locator('.qv2p-detail:not(.hidden)');
  await expect(detail).toHaveCount(1);
  await detail.locator('.qv2p-choice').first().click();

  const explanation = detail.getByTestId('qv2p-explanation-sections');
  await expect(explanation).toBeVisible();
  const cards = explanation.getByTestId('qv2p-explanation-card');
  await expect(cards.first()).toContainText(/Why [A-D] is (correct|wrong)/);
  expect(await cards.count()).toBeGreaterThan(1);
});

test('quiz-v2 play advances to the next question and prev returns to the first', async ({ page }) => {
  await page.goto('quiz-v2/play/?seed=play-nav-test&count=3');

  await expect(page.getByTestId('qv2p-session-index')).toHaveText('1');
  const firstSlug = await page
    .locator('.qv2p-detail:not(.hidden)')
    .getAttribute('data-qv2p-detail');
  expect(firstSlug).toBeTruthy();

  await page.getByTestId('qv2p-next').click();
  await expect(page.getByTestId('qv2p-session-index')).toHaveText('2');
  const secondSlug = await page
    .locator('.qv2p-detail:not(.hidden)')
    .getAttribute('data-qv2p-detail');
  expect(secondSlug).toBeTruthy();
  expect(secondSlug).not.toEqual(firstSlug);

  await page.getByTestId('qv2p-prev').click();
  await expect(page.getByTestId('qv2p-session-index')).toHaveText('1');
  const backToFirst = await page
    .locator('.qv2p-detail:not(.hidden)')
    .getAttribute('data-qv2p-detail');
  expect(backToFirst).toEqual(firstSlug);
});

test('quiz-v2 play produces the same question order across reloads for a seed', async ({ page }) => {
  await page.goto('quiz-v2/play/?seed=play-determinism-test&count=4');
  await expect(page.getByTestId('qv2p-session-count')).toHaveText('4');

  const collectOrder = async (): Promise<string[]> => {
    const slugs: string[] = [];
    for (let i = 0; i < 4; i++) {
      const slug = await page
        .locator('.qv2p-detail:not(.hidden)')
        .getAttribute('data-qv2p-detail');
      if (!slug) throw new Error(`no visible question at index ${i}`);
      slugs.push(slug);
      if (i < 3) await page.getByTestId('qv2p-next').click();
    }
    return slugs;
  };

  const firstRun = await collectOrder();
  expect(firstRun).toHaveLength(4);

  await page.reload();
  await expect(page.getByTestId('qv2p-session-count')).toHaveText('4');
  const secondRun = await collectOrder();
  expect(secondRun).toEqual(firstRun);
});

test('quiz-v2 play local builder preserves selected filters in the URL and session', async ({ page }) => {
  await page.goto('quiz-v2/play/');

  await expect(page.getByTestId('qv2p-builder')).toBeVisible();
  await page.getByTestId('qv2p-builder-count').fill('2');
  await page.getByTestId('qv2p-builder-seed').fill('builder-seed');
  await page.getByTestId('qv2p-builder-years').selectOption('2019');
  await page.getByTestId('qv2p-builder-tracks').selectOption('RO');
  await page.getByTestId('qv2p-builder-ref').selectOption('exclude');
  await page.getByTestId('qv2p-builder-topic').selectOption('control-rod-drive');
  await page.getByTestId('qv2p-builder-submit').click();

  await expect(page).toHaveURL(/quiz-v2\/play\/\?seed=builder-seed&count=2&years=2019&tracks=RO&topics=control-rod-drive&ref=exclude$/);
  await expect(page.getByTestId('qv2p-session-seed')).toHaveText('builder-seed');
  await expect(page.getByTestId('qv2p-session-count')).toHaveText('2');
  await expect(page.getByTestId('qv2p-session-summary')).toContainText('2019');
  await expect(page.getByTestId('qv2p-session-summary')).toContainText('RO');
  await expect(page.getByTestId('qv2p-session-summary')).toContainText('control-rod-drive');
  await page.getByTestId('qv2p-session-debug-toggle').click();
  await expect(page.getByTestId('qv2p-session-debug')).toContainText('"referenceMode":"exclude"');
});

test('quiz-v2 play accepts explicit graph-selected question slugs', async ({ page }) => {
  await page.goto('quiz-v2/play/?slugs=q8-pzr-saturation-rcp-restart&count=10&seed=graph-selected-q8');

  await expect(page.getByTestId('qv2p-session-total')).toHaveText('1');
  await expect(page.getByTestId('qv2p-session-count')).toHaveText('1');
  await expect(page.getByTestId('qv2p-session-summary')).toContainText('Graph builder');
  await expect(page.getByTestId('qv2p-session-summary')).toContainText('1 selected question');
  await expect(page.getByTestId('qv2p-session-summary')).not.toContainText('questionSlugs');
  await expect(page.locator('.qv2p-detail:not(.hidden)')).toHaveAttribute('data-qv2p-detail', 'q8-pzr-saturation-rcp-restart');
});

test('quiz-v2 play can create an authenticated backend session', async ({ page }) => {
  await seedAuth(page);

  await page.route('**/functions/v1/create-quiz-v2-session', async (route) => {
    const body = route.request().postDataJSON();
    expect(route.request().headers().authorization).toBe('Bearer playwright-access-token');
    expect(body.schemaVersion).toBe(1);
    expect(body.seed).toBe('backend-ui-test');
    expect(body.filters.count).toBe(2);
    expect(body.filters.years).toEqual([2018]);
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        ok: true,
        source: 'backend',
        session: {
          schemaVersion: 1,
          sessionId: 'qv2-server1234',
          seed: 'backend-ui-test',
          filters: body.filters,
          questionSlugs: ['q8-pzr-saturation-rcp-restart'],
          totalEligible: 1,
          generatedAt: '2026-05-09T00:00:00Z',
        },
      }),
    });
  });

  await page.goto('quiz-v2/play/?seed=backend-ui-test&years=2018&count=2');
  await page.getByTestId('qv2p-create-backend-session').click();

  await expect(page.getByTestId('qv2p-session-source')).toContainText('Backend session');
  await expect(page.getByTestId('qv2p-session-id')).toHaveText('qv2-server1234');
  await expect(page.getByTestId('qv2p-session-count')).toHaveText('1');
  await expect(page.locator('.qv2p-detail:not(.hidden)')).toHaveAttribute('data-qv2p-detail', 'q8-pzr-saturation-rcp-restart');
});
