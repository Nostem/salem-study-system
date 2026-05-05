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
  await expect(page.getByRole('link', { name: /Create account/i })).toHaveCount(0);
  await expect(page.getByText(/do not have an account/i)).toBeVisible();
  await expect(page.getByText(/contact site administrator/i)).toBeVisible();
  await expect(page.getByRole('button', { name: /Start quiz/i })).toBeHidden();
});

test('quiz page builds an account-gated quiz from imported questions', async ({ page }) => {
  await authenticateQuizUser(page);
  await page.goto('quiz/');

  await expect(page.getByRole('heading', { name: /Quiz Builder/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /View my progress/i })).toHaveAttribute('href', /\/history\/?$/);
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

test('quiz stem preserves blank cells in imported tables', async ({ page }) => {
  await authenticateQuizUser(page);
  // Seed 132 puts draft 2018 Q10 first under the default quiz filters.
  await page.goto('quiz/?seed=132');

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
  await expect(page.locator('#review-score')).toContainText(/\(\d+%\)/);
  await expect(page.locator('#review-score')).toContainText(/PASS|FAIL/);
  await expect(page.getByTestId('progress-save-status')).toContainText(/Progress saved/i);
  expect(submittedBodies).toHaveLength(1);
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
  await page.getByLabel('Mode').selectOption('blind');
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
  await page.getByLabel('Mode').selectOption('blind');
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
    await page.getByLabel('Mode').selectOption('blind');
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

test('different seeds produce different question orderings for the same filters', async ({ page }) => {
  await authenticateQuizUser(page);

  const captureFirstQuestionMeta = async (seed: number): Promise<string> => {
    await page.goto(`quiz/?seed=${seed}`);
    await page.getByLabel('Exam year').selectOption('2018');
    await page.getByLabel('Question count').fill('1');
    await page.getByLabel('Mode').selectOption('blind');
    await page.getByRole('button', { name: /Start quiz/i }).click();
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
  await page.getByLabel('Mode').selectOption('blind');
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
  await page.getByLabel('Mode').selectOption('blind');
  await page.getByRole('button', { name: /Start quiz/i }).click();

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
  await page.getByLabel('Mode').selectOption('blind');
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
  await page.getByLabel('Mode').selectOption('blind');
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
  await page.getByLabel('Mode').selectOption('blind');
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
