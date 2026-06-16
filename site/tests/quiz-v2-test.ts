import { expect, test } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const quizBank = JSON.parse(
  readFileSync(resolve(dirname(fileURLToPath(import.meta.url)), '../src/data/quiz-bank.json'), 'utf8'),
);

test('quiz-v2 page lists structured questions and renders an image stem with source refs', async ({ page }) => {
  await page.goto('quiz-v2/?slug=q23-eop-flowchart-symbols-concurrent');

  await expect(page.getByRole('heading', { name: /Quick Quiz advanced builder/i })).toBeVisible();
  await expect(page.getByTestId('qv2-bank-count')).toHaveText(String(quizBank.summary.question_count));
  await expect(page.getByTestId('qv2-builder')).toBeVisible();
  await expect(page.getByTestId('qv2-start-link')).toHaveAttribute('href', /\/quiz-v2\/play\/\?count=10$/);
  await expect(page.getByTestId('qv2-start-link')).toContainText(/Start practice — 10 of \d+/);

  const browser = page.getByTestId('qv2-browser');
  await expect(browser).toHaveJSProperty('open', true);

  // List rendered (picker contains many items).
  const listItems = page.locator('[data-testid="qv2-list"] li.qv2-item');
  await expect(listItems.first()).toBeVisible();
  expect(await listItems.count()).toBeGreaterThan(100);

  // Deep link auto-selects 2023 Q23.
  const detail = page.getByTestId('qv2-detail-q23-eop-flowchart-symbols-concurrent');
  await expect(detail).toBeVisible();
  await expect(page.getByTestId('qv2-empty')).toBeHidden();

  // Image block from the structured stem (the regression this format prevents).
  const image = detail.locator('[data-testid="qv2-stem-blocks"] img');
  await expect(image).toHaveAttribute('src', /2023-q23-symbol\.png$/);
  await expect(image).toHaveAttribute('alt', 'Concurrent Step Symbol');

  // Source refs are visible and traceable.
  const sourceRefs = detail.getByTestId('qv2-source-refs');
  await expect(sourceRefs).toContainText('[wiki]');
  await expect(sourceRefs).toContainText('q23-eop-flowchart-symbols-concurrent');
  await expect(detail.getByTestId('qv2-source-ref-link').first()).toHaveAttribute('href', /\/exams\/2023\/q23-eop-flowchart-symbols-concurrent\/$/);

  // Official answer/explanation are hidden until the Show answer disclosure is opened.
  const answer = detail.getByTestId('qv2-answer-body');
  await expect(answer).toBeHidden();
  await detail.getByTestId('qv2-show-answer').click();
  await expect(answer).toBeVisible();
  await expect(answer).toContainText('Official answer:');

  // Year filter narrows the visible list.
  await page.getByTestId('qv2-year').selectOption('2023');
  const visibleItems = page.locator('[data-testid="qv2-list"] li.qv2-item:not(.hidden)');
  expect(await visibleItems.count()).toBeGreaterThan(0);
  expect(await visibleItems.count()).toBeLessThan(await listItems.count());
});

test('quiz-v2 builder updates match count and start URL from topic, year, count, and selected slugs', async ({ page }) => {
  await page.goto('quiz-v2/');

  const browser = page.getByTestId('qv2-browser');
  await expect(browser).not.toHaveJSProperty('open', true);
  await expect(page.getByText('Session ID')).toHaveCount(0);
  await expect(page.getByText('Session preview')).toHaveCount(0);

  await expect(page.getByTestId('qv2-match-count')).not.toHaveText('0');
  await page.getByTestId('qv2-builder-count').fill('2');
  await page.getByTestId('qv2-builder-year').selectOption('2019');
  await page.getByTestId('qv2-builder-topic').selectOption('control-rod-drive');

  await expect(page.getByTestId('qv2-start-url')).toContainText('/quiz-v2/play/?count=2&years=2019&topics=control-rod-drive');
  await expect(page.getByTestId('qv2-start-link')).toHaveAttribute('href', /\/quiz-v2\/play\/\?count=2&years=2019&topics=control-rod-drive$/);
  await expect(page.getByTestId('qv2-start-link')).toContainText(/Start practice — \d+ of \d+/);

  await browser.click();
  await page.getByTestId('qv2-pick-q8-pzr-saturation-rcp-restart').check();
  await expect(page.getByTestId('qv2-selected-count')).toHaveText('1');
  await expect(page.getByTestId('qv2-start-url')).toContainText('slugs=q8-pzr-saturation-rcp-restart');
  await expect(page.getByTestId('qv2-start-link')).toHaveAttribute('href', /slugs=q8-pzr-saturation-rcp-restart/);
});

test('quiz-v2 builder shows clear zero-match state', async ({ page }) => {
  await page.goto('quiz-v2/');

  await page.getByTestId('qv2-builder-year').selectOption('2023');
  await page.getByTestId('qv2-builder-topic').selectOption('control-rod-drive');

  await expect(page.getByTestId('qv2-match-count')).toHaveText('0');
  await expect(page.getByTestId('qv2-zero-match')).toBeVisible();
  await expect(page.getByTestId('qv2-start-link')).toHaveAttribute('aria-disabled', 'true');
});
