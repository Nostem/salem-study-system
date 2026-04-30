import { expect, type Page, test } from '@playwright/test';

function supabaseAuthStorageKey(): string {
  const url = process.env.PUBLIC_SUPABASE_URL || 'https://local-test.supabase.co';
  const projectRef = new URL(url).hostname.split('.')[0];
  return `sb-${projectRef}-auth-token`;
}

async function authenticateQuizUser(page: Page): Promise<void> {
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

test('quiz page requires login before showing the quiz builder', async ({ page }) => {
  await page.goto('quiz/');

  await expect(page.getByTestId('quiz-login-required')).toBeVisible();
  await expect(page.getByRole('heading', { name: /Log in to use the quiz/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /Log in/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /Create account/i })).toBeVisible();
  await expect(page.getByRole('button', { name: /Start quiz/i })).toBeHidden();
});

test('quiz page builds an account-gated quiz from imported questions', async ({ page }) => {
  await authenticateQuizUser(page);
  await page.goto('quiz/');

  await expect(page.getByRole('heading', { name: /Quiz Builder/i })).toBeVisible();
  await expect(page.getByTestId('quiz-bank-count')).toContainText('499');

  await page.getByLabel('Exam year').selectOption('2018');
  await page.getByLabel('Question count').fill('3');
  await page.getByLabel('Mode').selectOption('feedback');
  await page.getByRole('button', { name: /Start quiz/i }).click();

  await expect(page.getByTestId('quiz-session')).toBeVisible();
  await expect(page.getByTestId('question-position')).toContainText('Question 1 of 3');
  await expect(page.getByTestId('question-meta')).toContainText('2018');
  await expect(page.getByRole('button', { name: /^A\./ })).toBeVisible();
});

test('two-part fill-in markers are highlighted in stems and answer choices', async ({ page }) => {
  await authenticateQuizUser(page);
  await page.goto('quiz/');

  await page.getByLabel('Exam year').selectOption('2018');
  await page.getByLabel('Question count').fill('1');
  await page.getByRole('button', { name: /Start quiz/i }).click();

  const stemBlanks = page.locator('#question-stem .blank');
  await expect(stemBlanks).toHaveCount(2);
  await expect(stemBlanks.first()).toContainText('_(1)_');
  await expect(stemBlanks.nth(1)).toContainText('_(2)_');

  const firstChoiceBlanks = page.locator('#choice-list .quiz-choice').first().locator('.blank');
  await expect(firstChoiceBlanks).toHaveCount(2);
  await expect(firstChoiceBlanks.first()).toContainText('(1)');
  await expect(firstChoiceBlanks.nth(1)).toContainText('(2)');

  const chipStyles = await firstChoiceBlanks.first().evaluate((element) => {
    const styles = window.getComputedStyle(element);
    return {
      backgroundColor: styles.backgroundColor,
      borderRadius: styles.borderRadius,
      color: styles.color,
      display: styles.display,
    };
  });
  expect(chipStyles.backgroundColor).not.toBe('rgba(0, 0, 0, 0)');
  expect(chipStyles.borderRadius).not.toBe('0px');
  expect(chipStyles.display).toBe('inline-block');
});

test('topic filter supports multiple wiki-formatted topic selections without duplicates or abnormal procedures', async ({ page }) => {
  await authenticateQuizUser(page);
  await page.goto('quiz/');

  await expect(page.getByText('Pressurizer Level & Press Control')).toBeVisible();
  await expect(page.getByText('RPS/SSPS')).toBeVisible();

  const topicLabels = await page.getByTestId('topic-filter-list').locator('label span').allTextContents();
  expect(topicLabels.filter((label) => label === 'AFW')).toHaveLength(1);
  expect(topicLabels.filter((label) => label === 'CCW')).toHaveLength(1);
  expect(topicLabels.filter((label) => label === 'Pressurizer & PRT')).toHaveLength(1);
  expect(topicLabels.filter((label) => /Pressurizer And Prt/i.test(label))).toHaveLength(0);
  expect(topicLabels.filter((label) => label === 'TS 3/4.4 — Reactor Coolant System')).toHaveLength(1);
  expect(topicLabels.some((label) => /^AB\./.test(label) || /Abnormal/i.test(label))).toBe(false);

  await page.getByLabel('Pressurizer Level & Press Control').check();
  await page.getByLabel('RPS/SSPS').check();
  await page.getByLabel('Question count').fill('5');
  await page.getByRole('button', { name: /Start quiz/i }).click();

  await expect(page.getByTestId('quiz-session')).toBeVisible();
  await expect(page.getByTestId('question-position')).toContainText(/Question 1 of [1-5]/);
});

test('feedback mode shows immediate right or wrong result after selecting an answer', async ({ page }) => {
  await authenticateQuizUser(page);
  await page.goto('quiz/');

  await page.getByLabel('Exam year').selectOption('2018');
  await page.getByLabel('Question count').fill('1');
  await page.getByLabel('Mode').selectOption('feedback');
  await page.getByRole('button', { name: /Start quiz/i }).click();

  await page.getByRole('button', { name: /^A\./ }).click();
  await expect(page.getByTestId('feedback-panel')).toBeVisible();
  await expect(page.getByTestId('feedback-panel')).toContainText(/Correct|Incorrect/);
  await expect(page.getByTestId('feedback-panel')).toContainText('Full explanation');
  await expect(page.getByTestId('feedback-panel')).toContainText(/Incorrect but plausible|Correct\./);
  await expect(page.getByRole('button', { name: /Review results/i })).toBeVisible();
});

test('completed quiz review submits results for persistent progress tracking', async ({ page }) => {
  await authenticateQuizUser(page);
  const submittedBodies: any[] = [];
  await page.route('**/functions/v1/submit-quiz-results', async (route) => {
    submittedBodies.push(route.request().postDataJSON());
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ ok: true, quizSessionId: '11111111-1111-4111-8111-111111111111', attemptsInserted: 2 }),
    });
  });

  await page.goto('quiz/');
  await page.getByLabel('Exam year').selectOption('2018');
  await page.getByLabel('Question count').fill('2');
  await page.getByLabel('Mode').selectOption('blind');
  await page.getByRole('button', { name: /Start quiz/i }).click();
  await page.getByRole('button', { name: /^A\./ }).click();
  await page.getByRole('button', { name: /Next question/i }).click();
  await page.getByRole('button', { name: /^B\./ }).click();
  await page.getByRole('button', { name: /Review results/i }).click();

  await expect(page.getByTestId('quiz-review')).toBeVisible();
  await expect(page.getByTestId('progress-save-status')).toContainText(/Progress saved/i);
  expect(submittedBodies).toHaveLength(1);
  expect(submittedBodies[0].feedbackMode).toBe('blind');
  expect(submittedBodies[0].questions).toHaveLength(2);
  expect(submittedBodies[0].questions[0]).toMatchObject({ position: 1, selectedLabel: 'A' });
  expect(submittedBodies[0].questions[1]).toMatchObject({ position: 2, selectedLabel: 'B' });
});

test('blind mode withholds scoring until final review', async ({ page }) => {
  await authenticateQuizUser(page);
  await page.goto('quiz/');

  await page.getByLabel('Exam year').selectOption('2018');
  await page.getByLabel('Question count').fill('1');
  await page.getByLabel('Mode').selectOption('blind');
  await page.getByRole('button', { name: /Start quiz/i }).click();

  await page.getByRole('button', { name: /^A\./ }).click();
  await expect(page.getByTestId('feedback-panel')).toBeHidden();
  await page.getByRole('button', { name: /Review results/i }).click();
  await expect(page.getByTestId('quiz-review')).toBeVisible();
  await expect(page.getByTestId('quiz-review')).toContainText(/Score: \d+\/1/);
  const explanation = page.getByTestId('review-explanation').first();
  await expect(explanation).toBeVisible();
  await expect(explanation).toContainText('Full explanation');
  await expect(explanation).toContainText(/Incorrect but plausible|Correct\./);
});
