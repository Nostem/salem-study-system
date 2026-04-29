import { expect, test } from '@playwright/test';

test('quiz page builds a filtered read-only quiz from imported questions', async ({ page }) => {
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

test('topic filter supports multiple wiki-formatted topic selections', async ({ page }) => {
  await page.goto('quiz/');

  await expect(page.getByText('Pressurizer Level & Press Control')).toBeVisible();
  await expect(page.getByText('RPS/SSPS')).toBeVisible();

  await page.getByLabel('Pressurizer Level & Press Control').check();
  await page.getByLabel('RPS/SSPS').check();
  await page.getByLabel('Question count').fill('5');
  await page.getByRole('button', { name: /Start quiz/i }).click();

  await expect(page.getByTestId('quiz-session')).toBeVisible();
  await expect(page.getByTestId('question-position')).toContainText(/Question 1 of [1-5]/);
});

test('feedback mode shows immediate right or wrong result after selecting an answer', async ({ page }) => {
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

test('blind mode withholds scoring until final review', async ({ page }) => {
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
