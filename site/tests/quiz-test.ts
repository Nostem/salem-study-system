import { expect, type Page, test } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const quizBank = JSON.parse(readFileSync(resolve(__dirname, '../src/data/quiz-bank.json'), 'utf8'));

function isPracticeEligible(question: any): boolean {
  if (question.quizEligible) return true;
  if (question.isRedacted) return false;
  return question.choices.length >= 2 && question.acceptedAnswerLabels.length > 0;
}

function questionsForYear(year: number): any[] {
  return quizBank.questions.filter((question: any) => question.examYear === year && isPracticeEligible(question));
}

function supabaseAuthStorageKey(): string {
  const url = process.env.PUBLIC_SUPABASE_URL || 'https://local-test.supabase.co';
  const projectRef = new URL(url).hostname.split('.')[0];
  return `sb-${projectRef}-auth-token`;
}

async function authenticateQuizUser(page: Page): Promise<void> {
  await page.route('**/functions/v1/quiz-review-queue', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ ok: true, dueSlugs: [], allSlugs: [], states: {} }),
    });
  });
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
  await expect(page.getByRole('heading', { name: /Log in to use Quick Quiz/i })).toBeVisible();
  await expect(page.getByTestId('quiz-login-required').getByRole('link', { name: /Log in/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /Create account/i })).toHaveCount(0);
  await expect(page.getByText(/do not have an account/i)).toBeVisible();
  await expect(page.getByText(/contact site administrator/i)).toBeVisible();
  await expect(page.getByRole('button', { name: /Start quiz/i })).toBeHidden();
});

test('quiz page builds an account-gated quiz from imported questions', async ({ page }) => {
  await authenticateQuizUser(page);
  await page.goto('quiz/');

  await expect(page.getByRole('heading', { name: 'Quick Quiz', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: /View my progress/i })).toHaveAttribute('href', /\/history\/?$/);
  await expect(page.getByTestId('quiz-bank-count')).toContainText('898');

  await page.getByLabel('Exam year').selectOption('2018');
  await page.getByLabel('Question count').fill('3');
  await page.locator('#quiz-mode').selectOption('feedback');
  await page.getByRole('button', { name: /Start quiz/i }).click();

  await expect(page.getByTestId('quiz-session')).toBeVisible();
  await expect(page.getByTestId('question-position')).toContainText('Question 1 of 3');
  await expect(page.getByTestId('question-meta')).toContainText('2018');
  await expect(page.getByRole('button', { name: /^A\./ })).toBeVisible();
});

test('two-part fill-in markers are highlighted in stems and answer choices', async ({ page }) => {
  await authenticateQuizUser(page);
  // Seed 96 puts 2018 Q1 first under the default filters, which has exactly two blank markers in the stem and first choice.
  await page.goto('quiz/?seed=96');

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

test('quiz stem preserves imported table cell boundaries', async ({ page }) => {
  await authenticateQuizUser(page);
  // Seed 72 puts draft 2018 Q61 first under the default quiz filters.
  await page.goto('quiz/?seed=72');

  await page.getByLabel('Exam year').selectOption('2018');
  await page.getByLabel('Question count').fill('1');
  await expect(page.getByLabel('Include draft imported questions')).toBeChecked();
  await page.getByRole('button', { name: /Start quiz/i }).click();

  await expect(page.getByTestId('question-meta')).toContainText('2018 Q61');
  await expect(page.locator('#question-stem')).toContainText('Time | 10:00 | 10:05 | 10:10 | 10:15');
  await expect(page.locator('#question-stem')).toContainText('2A Control Air Header | 99 psig | 88 psig | 79 psig | 72 psig');
  await expect(page.locator('#question-stem')).toContainText('2B Control Air Header | 103 psig | 93 psig | 85 psig | 79 psig');
  await expect(page.locator('#question-stem')).not.toContainText('Time10:0010:05');
});

test('quiz stem renders source images needed to answer image-based questions', async ({ page }) => {
  await authenticateQuizUser(page);
  // Seed 68 puts draft 2023 Q23 first under the 2023 filter.
  await page.goto('quiz/?seed=68');

  await page.getByLabel('Exam year').selectOption('2023');
  await page.getByLabel('Question count').fill('1');
  await expect(page.getByLabel('Include draft imported questions')).toBeChecked();
  await page.getByRole('button', { name: /Start quiz/i }).click();

  await expect(page.getByTestId('question-meta')).toContainText('2023 Q23');
  const image = page.locator('#question-stem img[alt*="Concurrent Step Symbol"]');
  await expect(image).toBeVisible();
  await expect(image).toHaveAttribute('src', /exam-images\/2023-q23-symbol\.png$/);
  await expect(page.locator('#question-stem')).toContainText('What does the symbol denote?');
});

test('quiz stem preserves blank cells in imported tables', async ({ page }) => {
  await authenticateQuizUser(page);
  // Seed 6 puts draft 2018 Q10 first under the default quiz filters.
  await page.goto('quiz/?seed=6');

  await page.getByLabel('Exam year').selectOption('2018');
  await page.getByLabel('Question count').fill('1');
  await expect(page.getByLabel('Include draft imported questions')).toBeChecked();
  await page.getByRole('button', { name: /Start quiz/i }).click();

  await expect(page.getByTestId('question-meta')).toContainText('2018 Q10');
  await expect(page.locator('#question-stem')).toContainText('CH I | CH II | CH III | CH IV |');
  await expect(page.locator('#question-stem')).toContainText('2PT-455 | 2PT-456 | 2PT-457 | 2PT-474 | 2PT-1648');
  await expect(page.locator('#question-stem')).toContainText('2235 PSIG | 0 PSIG | 2235 PSIG | 2235 PSIG | 2235 PSIG');
  await expect(page.locator('#question-stem')).not.toContainText('CH I | CH II | CH III | CH IV\n2PT-455');
});

test('topic filter keeps common systems simple and moves advanced procedure nodes into organized sections', async ({ page }) => {
  await authenticateQuizUser(page);
  await page.goto('quiz/');

  await expect(page.getByText('Pressurizer Level & Press Control')).toBeVisible();
  await expect(page.getByText('RPS/SSPS')).toBeVisible();

  const topicLabels = await page.getByTestId('topic-filter-list').locator('label span').allTextContents();
  expect(topicLabels.filter((label) => label.startsWith('Admin'))).toHaveLength(1);
  expect(topicLabels.filter((label) => label.startsWith('AFW'))).toHaveLength(1);
  expect(topicLabels.filter((label) => label.startsWith('CCW'))).toHaveLength(1);
  expect(topicLabels.filter((label) => label.startsWith('Pressurizer & PRT'))).toHaveLength(1);
  expect(topicLabels.filter((label) => /Pressurizer And Prt/i.test(label))).toHaveLength(0);

  await expect(page.getByTestId('topic-filter-list')).not.toContainText(/^AB\./);
  await expect(page.getByTestId('advanced-topic-filters')).toBeVisible();
  await expect(page.getByTestId('advanced-topic-filters')).toContainText('Tech Specs');
  await expect(page.getByTestId('advanced-topic-filters')).toContainText('Emergency Operating Procedures');
  await expect(page.getByTestId('advanced-topic-filters')).toContainText('Abnormal Procedures');
  await expect(page.getByTestId('advanced-topic-filters')).toContainText('Operating, admin, and alarm procedures');
  await page.getByTestId('advanced-topic-filters').locator('summary').click();
  await expect(page.getByTestId('advanced-topic-filters')).toContainText('TS 3/4.4 — Reactor Coolant System');
  await expect(page.getByTestId('advanced-topic-filters')).toContainText('AB.CW-0001 — Circulating Water Malfunction');
  await expect(page.getByTestId('advanced-topic-filters')).toContainText('EOP-TRIP-1 — Reactor Trip or Safety Injection');
  await expect(page.getByTestId('advanced-topic-filters')).toContainText('OP-AA-101-111-1003 — Use of Procedures');

  const techSpecTopicListMetrics = await page
    .locator('#tech-spec-topic-title')
    .locator('..')
    .locator('.quiz-topic-list')
    .evaluate((element) => ({
      clientHeight: element.clientHeight,
      overflowY: window.getComputedStyle(element).overflowY,
      scrollHeight: element.scrollHeight,
    }));
  expect(techSpecTopicListMetrics.scrollHeight).toBeGreaterThan(techSpecTopicListMetrics.clientHeight);
  expect(techSpecTopicListMetrics.overflowY).toMatch(/auto|scroll/);

  const procedureCheckboxBox = await page
    .getByLabel(/AB\.CW-0001 — Circulating Water Malfunction/)
    .boundingBox();
  expect(procedureCheckboxBox?.width).toBeLessThanOrEqual(20);
  expect(procedureCheckboxBox?.height).toBeLessThanOrEqual(20);

  await page.getByLabel('Pressurizer Level & Press Control').check();
  await expect(page.locator('#filter-summary')).toContainText(/42 eligible questions/);
  await page.getByLabel('RPS/SSPS').check();
  await expect(page.locator('#filter-summary')).toContainText(/123 eligible questions/);
  await page.getByLabel('Question count').fill('5');
  await page.getByRole('button', { name: /Start quiz/i }).click();

  await expect(page.getByTestId('quiz-session')).toBeVisible();
  await expect(page.getByTestId('question-position')).toContainText(/Question 1 of [1-5]/);
});

test('advanced procedure filters on Quick Quiz can start targeted practice', async ({ page }) => {
  await authenticateQuizUser(page);
  await page.goto('quiz/?seed=1');

  await page.getByTestId('advanced-topic-filters').locator('summary').click();
  await page.getByLabel(/AB\.CW-0001 — Circulating Water Malfunction/).check();
  await page.getByLabel('Question count').fill('5');
  await expect(page.locator('#filter-summary')).toContainText(/4 eligible questions/);
  await page.getByRole('button', { name: /Start quiz/i }).click();

  await expect(page.getByTestId('quiz-session')).toBeVisible();
  await expect(page.getByTestId('question-position')).toContainText('Question 1 of 4');
});

test('advanced EOP and admin procedure filters can start targeted practice', async ({ page }) => {
  await authenticateQuizUser(page);
  await page.goto('quiz/?seed=2');

  await page.getByTestId('advanced-topic-filters').locator('summary').click();
  await page.getByLabel(/EOP-TRIP-1 — Reactor Trip or Safety Injection/).check();
  await expect(page.locator('#filter-summary')).toContainText(/66 eligible questions/);
  await page.getByLabel(/OP-AA-101-111-1003 — Use of Procedures/).check();
  await expect(page.locator('#filter-summary')).toContainText(/4 eligible questions/);
  await page.getByLabel('Question count').fill('3');
  await page.getByRole('button', { name: /Start quiz/i }).click();

  await expect(page.getByTestId('quiz-session')).toBeVisible();
  await expect(page.getByTestId('question-position')).toContainText('Question 1 of 3');
});

test('feedback mode shows immediate right or wrong result after selecting an answer', async ({ page }) => {
  await authenticateQuizUser(page);
  await page.goto('quiz/');

  await page.getByLabel('Exam year').selectOption('2018');
  await page.getByLabel('Question count').fill('1');
  await page.locator('#quiz-mode').selectOption('feedback');
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
  await page.locator('#quiz-mode').selectOption('blind');
  await page.getByRole('button', { name: /Start quiz/i }).click();
  await page.getByRole('button', { name: /^A\./ }).click();
  await page.getByRole('button', { name: /Next question/i }).click();
  await page.getByRole('button', { name: /^B\./ }).click();
  await page.getByRole('button', { name: /Review results/i }).click();

  await expect(page.getByTestId('quiz-review')).toBeVisible();
  await expect(page.locator('#review-score')).toContainText(/\(\d+%\)/);
  await expect(page.locator('#review-score')).toContainText(/PASS|FAIL/);
  await expect(page.getByTestId('progress-save-status')).toContainText(/Progress saved/i);
  expect(submittedBodies).toHaveLength(1);
  expect(submittedBodies[0].source).toBe('quiz');
  expect(submittedBodies[0].quizType).toBe('classic');
  expect(submittedBodies[0].feedbackMode).toBe('blind');
  expect(submittedBodies[0].questions).toHaveLength(2);
  expect(submittedBodies[0].questions[0]).toMatchObject({ position: 1, selectedLabel: 'A' });
  expect(submittedBodies[0].questions[1]).toMatchObject({ position: 2, selectedLabel: 'B' });
});

test('unfinished blind quiz can be resumed after reload with answers and position restored', async ({ page }) => {
  await authenticateQuizUser(page);
  await page.goto('quiz/?seed=96');

  await page.getByLabel('Exam year').selectOption('2018');
  await page.getByLabel('Question count').fill('3');
  await page.locator('#quiz-mode').selectOption('blind');
  await page.getByRole('button', { name: /Start quiz/i }).click();
  await page.getByRole('button', { name: /^A\./ }).click();
  await page.getByRole('button', { name: /Next question/i }).click();
  await expect(page.getByTestId('question-position')).toContainText('Question 2 of 3');

  await page.reload();

  await expect(page.getByTestId('quiz-draft-resume')).toBeVisible();
  await expect(page.getByTestId('quiz-draft-resume')).toContainText('3 questions · 1 answered');
  await page.getByRole('button', { name: /Resume unfinished quiz/i }).click();

  await expect(page.getByTestId('quiz-session')).toBeVisible();
  await expect(page.getByTestId('question-position')).toContainText('Question 2 of 3');
  await page.getByRole('button', { name: /Previous/i }).click();
  await expect(page.locator('#choice-list .quiz-choice-selected')).toContainText(/^A\./);
});

test('blind quiz finish early scores only answered questions and marks unanswered in review', async ({ page }) => {
  await authenticateQuizUser(page);
  const submittedBodies: any[] = [];
  await page.route('**/functions/v1/submit-quiz-results', async (route) => {
    submittedBodies.push(route.request().postDataJSON());
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ ok: true, quizSessionId: '22222222-2222-4222-8222-222222222222', attemptsInserted: 1, score: 1 }),
    });
  });
  page.once('dialog', async (dialog) => {
    expect(dialog.message()).toContain('2 unanswered questions');
    await dialog.accept();
  });

  await page.goto('quiz/?seed=96');
  await page.getByLabel('Exam year').selectOption('2018');
  await page.getByLabel('Question count').fill('3');
  await page.locator('#quiz-mode').selectOption('blind');
  await page.getByRole('button', { name: /Start quiz/i }).click();
  await page.getByRole('button', { name: /^D\./ }).click();
  await page.getByRole('button', { name: /Finish early/i }).click();

  await expect(page.getByTestId('quiz-review')).toBeVisible();
  await expect(page.locator('#review-score')).toContainText('Score: 1/1 (100%) · PASS');
  await expect(page.locator('#review-score')).toContainText('Answered: 1/3');
  await expect(page.getByTestId('quiz-review')).toContainText('Selected: No answer');
  await expect(page.getByTestId('progress-save-status')).toContainText(/Progress saved/i);

  expect(submittedBodies).toHaveLength(1);
  expect(submittedBodies[0].completionMode).toBe('early');
  expect(submittedBodies[0].questions).toHaveLength(3);
  expect(submittedBodies[0].questions.filter((question: any) => question.selectedLabel)).toHaveLength(1);
});

test('seeded quiz selection is deterministic for same seed and filters', async ({ page }) => {
  await authenticateQuizUser(page);

  const captureSequence = async (seed: number): Promise<string[]> => {
    await page.goto(`quiz/?seed=${seed}`);
    await page.getByLabel('Exam year').selectOption('2018');
    await page.getByLabel('Question count').fill('5');
    await page.locator('#quiz-mode').selectOption('blind');
    await page.getByRole('button', { name: /Start quiz/i }).click();
    const sequence: string[] = [];
    for (let i = 0; i < 5; i++) {
      sequence.push((await page.getByTestId('question-meta').innerText()).trim());
      if (i < 4) await page.getByRole('button', { name: /Next question/i }).click();
    }
    return sequence;
  };

  const first = await captureSequence(12345);
  const second = await captureSequence(12345);
  expect(first).toEqual(second);
  expect(first).toHaveLength(5);
});

test('personalized Quick Quiz prioritizes unseen questions inside the selected filter pool', async ({ page }) => {
  await authenticateQuizUser(page);
  const pool = questionsForYear(2018);
  const targetUnseen = pool[0];
  const states = Object.fromEntries(
    pool
      .filter((question: any) => question.slug !== targetUnseen.slug)
      .map((question: any) => [
        question.slug,
        {
          attemptsCount: 4,
          correctCount: 4,
          incorrectCount: 0,
          masteryState: 'mastered',
          nextReviewAt: '2026-12-01T00:00:00.000Z',
        },
      ])
  );
  await page.route('**/functions/v1/quiz-review-queue', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ ok: true, dueSlugs: [], allSlugs: Object.keys(states), states }),
    });
  });

  await page.goto('quiz/?seed=12345');
  await page.getByLabel('Exam year').selectOption('2018');
  await page.getByLabel('Question count').fill('3');
  await page.getByRole('button', { name: /Start quiz/i }).click();

  await expect(page.getByTestId('question-meta')).toContainText(`2018 Q${targetUnseen.questionNumber}`);
});

test('different seeds produce different question orderings for the same filters', async ({ page }) => {
  await authenticateQuizUser(page);

  const captureFirstQuestionMeta = async (seed: number): Promise<string> => {
    await page.goto(`quiz/?seed=${seed}`);
    await page.getByLabel('Exam year').selectOption('2018');
    await page.getByLabel('Question count').fill('1');
    await page.locator('#quiz-mode').selectOption('blind');
    await page.getByRole('button', { name: /Start quiz/i }).click();
    await expect(page.getByTestId('quiz-session')).toBeVisible();
    return (await page.getByTestId('question-meta').innerText()).trim();
  };

  const samples: string[] = [];
  for (const seed of [1, 2, 3, 4, 5, 6]) {
    samples.push(await captureFirstQuestionMeta(seed));
  }
  expect(new Set(samples).size).toBeGreaterThan(1);
});

test('submit-quiz-results includes the deterministic seed in filters config', async ({ page }) => {
  await authenticateQuizUser(page);
  const submittedBodies: any[] = [];
  await page.route('**/functions/v1/submit-quiz-results', async (route) => {
    submittedBodies.push(route.request().postDataJSON());
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ ok: true, quizSessionId: '11111111-1111-4111-8111-111111111111', attemptsInserted: 1 }),
    });
  });

  await page.goto('quiz/?seed=987654');
  await page.getByLabel('Exam year').selectOption('2018');
  await page.getByLabel('Question count').fill('1');
  await page.locator('#quiz-mode').selectOption('blind');
  await page.getByRole('button', { name: /Start quiz/i }).click();
  await page.getByRole('button', { name: /^A\./ }).click();
  await page.getByRole('button', { name: /Review results/i }).click();
  await expect(page.getByTestId('quiz-review')).toBeVisible();
  await expect(page.getByTestId('progress-save-status')).toContainText(/Progress saved/i);

  expect(submittedBodies).toHaveLength(1);
  expect(submittedBodies[0].filters.seed).toBe(987654);
});

test('answer choices are seeded-shuffled but displayed as A-D with explanations and grading mapped to original choices', async ({ page }) => {
  await authenticateQuizUser(page);
  const submittedBodies: any[] = [];
  await page.route('**/functions/v1/submit-quiz-results', async (route) => {
    submittedBodies.push(route.request().postDataJSON());
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ ok: true, quizSessionId: '33333333-3333-4333-8333-333333333333', attemptsInserted: 1 }),
    });
  });

  await page.goto('quiz/?seed=96');
  await page.getByLabel('Exam year').selectOption('2018');
  await page.getByLabel('Question count').fill('1');
  await page.locator('#quiz-mode').selectOption('blind');
  await page.getByRole('button', { name: /Start quiz/i }).click();
  await expect(page.getByTestId('quiz-session')).toBeVisible();

  const visibleLabels = await page.locator('#choice-list .quiz-choice-label').evaluateAll((nodes) =>
    nodes.map((node) => node.textContent?.replace('.', '').trim())
  );
  expect(visibleLabels).toEqual(['A', 'B', 'C', 'D']);
  await expect(page.locator('#choice-list .quiz-choice').first()).toContainText('(1) at power — (2) is');

  await page.locator('#choice-list .quiz-choice').first().click();
  await page.getByRole('button', { name: /Review results/i }).click();
  await expect(page.getByTestId('quiz-review')).toBeVisible();
  await expect(page.getByTestId('quiz-review')).toContainText('Selected: A · Accepted: D · Incorrect');
  await expect(page.getByTestId('quiz-review')).toContainText('Full explanation');
  await expect(page.getByTestId('progress-save-status')).toContainText(/Progress saved/i);

  expect(submittedBodies).toHaveLength(1);
  expect(submittedBodies[0].questions[0]).toMatchObject({
    position: 1,
    selectedLabel: 'A',
    selectedOriginalLabel: 'D',
    choiceOrder: { A: 'D', B: 'B', C: 'A', D: 'C' },
  });
});

test('quiz start without a seed override generates a numeric seed in submitted filters', async ({ page }) => {
  await authenticateQuizUser(page);
  const submittedBodies: any[] = [];
  await page.route('**/functions/v1/submit-quiz-results', async (route) => {
    submittedBodies.push(route.request().postDataJSON());
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ ok: true, quizSessionId: '22222222-2222-4222-8222-222222222222', attemptsInserted: 1 }),
    });
  });

  await page.goto('quiz/');
  await page.getByLabel('Exam year').selectOption('2018');
  await page.getByLabel('Question count').fill('1');
  await page.locator('#quiz-mode').selectOption('blind');
  await page.getByRole('button', { name: /Start quiz/i }).click();
  await page.getByRole('button', { name: /^A\./ }).click();
  await page.getByRole('button', { name: /Review results/i }).click();
  await expect(page.getByTestId('quiz-review')).toBeVisible();
  await expect(page.getByTestId('progress-save-status')).toContainText(/Progress saved/i);

  expect(submittedBodies).toHaveLength(1);
  expect(typeof submittedBodies[0].filters.seed).toBe('number');
  expect(Number.isInteger(submittedBodies[0].filters.seed)).toBe(true);
});

test('quiz page shows only exam year and question number, not answer-revealing question titles', async ({ page }) => {
  await authenticateQuizUser(page);
  await page.goto('quiz/?seed=96');

  await page.getByLabel('Exam year').selectOption('2018');
  await page.getByLabel('Question count').fill('1');
  await page.locator('#quiz-mode').selectOption('blind');
  await page.getByRole('button', { name: /Start quiz/i }).click();

  await expect(page.locator('#question-title')).toHaveText('2018 Q1');
  await expect(page.locator('#question-title')).not.toContainText(/RCP|shaft|shear|seal/i);

  await page.getByRole('button', { name: /^A\./ }).click();
  await page.getByRole('button', { name: /Review results/i }).click();
  const reviewQuestionTitle = page.locator('#review-list > div').first().locator('div').first();
  await expect(reviewQuestionTitle).toHaveText('1. 2018 Q1');
  await expect(reviewQuestionTitle).not.toContainText(/RCP|shaft|shear|seal/i);
});

test('blind mode withholds scoring until final review', async ({ page }) => {
  await authenticateQuizUser(page);
  await page.goto('quiz/');

  await page.getByLabel('Exam year').selectOption('2018');
  await page.getByLabel('Question count').fill('1');
  await page.locator('#quiz-mode').selectOption('blind');
  await page.getByRole('button', { name: /Start quiz/i }).click();

  await page.getByRole('button', { name: /^A\./ }).click();
  await expect(page.getByTestId('feedback-panel')).toBeHidden();
  await page.getByRole('button', { name: /Review results/i }).click();
  await expect(page.getByTestId('quiz-review')).toBeVisible();
  await expect(page.getByTestId('quiz-review')).toContainText(/Score: \d+\/1 \(\d+%\) · (PASS|FAIL)/);
  const explanation = page.getByTestId('review-explanation').first();
  await expect(explanation).toBeVisible();
  await expect(explanation).toContainText('Full explanation');
  await expect(explanation).toContainText(/Incorrect but plausible|Correct\./);
});

test('quiz save failure shows retry UI, preserves the draft, and lets the user recover after re-auth', async ({ page }) => {
  await authenticateQuizUser(page);

  // First submit attempt fails with 401 (simulating an expired access token at quiz end).
  // The page should surface the retry button and the relogin link, and keep the draft.
  let submitCallCount = 0;
  await page.route('**/functions/v1/submit-quiz-results', async (route) => {
    submitCallCount += 1;
    if (submitCallCount === 1) {
      await route.fulfill({
        status: 401,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'invalid_authorization' }),
      });
      return;
    }
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ ok: true, quizSessionId: '44444444-4444-4444-8444-444444444444', attemptsInserted: 1 }),
    });
  });

  await page.goto('quiz/');
  await page.getByLabel('Exam year').selectOption('2018');
  await page.getByLabel('Question count').fill('1');
  await page.locator('#quiz-mode').selectOption('blind');
  await page.getByRole('button', { name: /Start quiz/i }).click();
  await page.getByRole('button', { name: /^A\./ }).click();
  await page.getByRole('button', { name: /Review results/i }).click();

  await expect(page.getByTestId('quiz-review')).toBeVisible();
  await expect(page.getByTestId('progress-save-status')).toContainText(/session expired/i);
  await expect(page.getByTestId('progress-save-actions')).toBeVisible();
  await expect(page.getByTestId('retry-save')).toBeVisible();
  await expect(page.getByTestId('relogin-link')).toBeVisible();

  // Draft must still be in localStorage because the save failed.
  const draftAfterFailure = await page.evaluate(() => window.localStorage.getItem('salem-study-quiz-draft-v1'));
  expect(draftAfterFailure).not.toBeNull();

  // User retries (simulating they logged back in / network recovered).
  await page.getByTestId('retry-save').click();
  await expect(page.getByTestId('progress-save-status')).toContainText(/Progress saved/i);
  await expect(page.getByTestId('progress-save-actions')).toBeHidden();

  // After success, the draft is cleared.
  const draftAfterSuccess = await page.evaluate(() => window.localStorage.getItem('salem-study-quiz-draft-v1'));
  expect(draftAfterSuccess).toBeNull();
  expect(submitCallCount).toBe(2);
});

test('network failure during quiz save shows warn-style retry without forcing re-login', async ({ page }) => {
  await authenticateQuizUser(page);

  let submitCallCount = 0;
  await page.route('**/functions/v1/submit-quiz-results', async (route) => {
    submitCallCount += 1;
    if (submitCallCount === 1) {
      await route.abort('failed');
      return;
    }
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ ok: true, quizSessionId: '55555555-5555-4555-8555-555555555555', attemptsInserted: 1 }),
    });
  });

  await page.goto('quiz/');
  await page.getByLabel('Exam year').selectOption('2018');
  await page.getByLabel('Question count').fill('1');
  await page.locator('#quiz-mode').selectOption('blind');
  await page.getByRole('button', { name: /Start quiz/i }).click();
  await page.getByRole('button', { name: /^A\./ }).click();
  await page.getByRole('button', { name: /Review results/i }).click();

  await expect(page.getByTestId('quiz-review')).toBeVisible();
  await expect(page.getByTestId('progress-save-status')).toContainText(/Could not reach the server/i);
  await expect(page.getByTestId('retry-save')).toBeVisible();
  // Re-login link should stay hidden for network errors; only auth failures need it.
  await expect(page.getByTestId('relogin-link')).toBeHidden();

  await page.getByTestId('retry-save').click();
  await expect(page.getByTestId('progress-save-status')).toContainText(/Progress saved/i);
});

test('starting a new quiz after a failed save preserves the unsaved draft for recovery', async ({ page }) => {
  await authenticateQuizUser(page);

  await page.route('**/functions/v1/submit-quiz-results', async (route) => {
    await route.fulfill({
      status: 401,
      contentType: 'application/json',
      body: JSON.stringify({ error: 'invalid_authorization' }),
    });
  });

  await page.goto('quiz/?seed=96');
  await page.getByLabel('Exam year').selectOption('2018');
  await page.getByLabel('Question count').fill('2');
  await page.locator('#quiz-mode').selectOption('blind');
  await page.getByRole('button', { name: /Start quiz/i }).click();
  await page.getByRole('button', { name: /^A\./ }).click();
  await page.getByRole('button', { name: /Next question/i }).click();
  await page.getByRole('button', { name: /^B\./ }).click();
  await page.getByRole('button', { name: /Review results/i }).click();

  await expect(page.getByTestId('progress-save-status')).toContainText(/session expired/i);

  await page.getByRole('button', { name: /Build another quiz/i }).click();

  // Draft must survive the navigation back to the builder so the user can recover.
  await expect(page.getByTestId('quiz-draft-resume')).toBeVisible();
  await expect(page.getByTestId('quiz-draft-resume')).toContainText('2 questions');
  const draftAfterNewQuiz = await page.evaluate(() => window.localStorage.getItem('salem-study-quiz-draft-v1'));
  expect(draftAfterNewQuiz).not.toBeNull();
});
