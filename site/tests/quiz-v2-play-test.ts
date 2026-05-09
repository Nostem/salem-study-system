import { expect, test } from '@playwright/test';

test('quiz-v2 play route loads a deterministic session with an explicit count', async ({ page }) => {
  await page.goto('quiz-v2/play/?seed=play-default-test&count=4');

  await expect(page.getByRole('heading', { name: /Quiz v2 Play/i })).toBeVisible();
  await expect(page.getByTestId('qv2p-session-id')).toContainText(/^qv2-[0-9a-f]{8}$/);
  await expect(page.getByTestId('qv2p-session-seed')).toHaveText('play-default-test');
  await expect(page.getByTestId('qv2p-session-count')).toHaveText('4');
  await expect(page.getByTestId('qv2p-session-index')).toHaveText('1');
  await expect(page.getByTestId('qv2p-session-filters')).toContainText('"count":4');

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
  await expect(page.getByTestId('qv2p-session-filters')).toContainText('"years":[2019]');
  await expect(page.getByTestId('qv2p-session-filters')).toContainText('"tracks":["RO"]');
  await expect(page.getByTestId('qv2p-session-filters')).toContainText('"topicSlugs":["control-rod-drive"]');
  await expect(page.getByTestId('qv2p-session-filters')).toContainText('"referenceMode":"exclude"');
});
