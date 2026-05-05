import { expect, type Page, test } from '@playwright/test';

function supabaseAuthStorageKey(): string {
  const url = process.env.PUBLIC_SUPABASE_URL || 'https://local-test.supabase.co';
  const projectRef = new URL(url).hostname.split('.')[0];
  return `sb-${projectRef}-auth-token`;
}

async function authenticateHistoryUser(page: Page): Promise<void> {
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

const historyResponse = {
  ok: true,
  summary: {
    completedQuizzes: 2,
    questionsAnswered: 3,
    averageScore: 0.75,
    passCount: 1,
    passRate: 0.5,
    lastCompletedAt: '2026-05-05T06:40:00.000Z',
  },
  weakTopics: [
    { slug: 'pressurizer', title: 'Pressurizer', attempts: 2, misses: 1, accuracy: 0.5 },
  ],
  sessions: [
    {
      id: 'session-pass',
      completedAt: '2026-05-05T06:40:00.000Z',
      feedbackMode: 'blind',
      quizType: 'custom',
      completionMode: 'completed',
      score: 0.8,
      correctCount: 4,
      answeredCount: 5,
      totalQuestions: 5,
      passStatus: 'pass',
      filterSummary: '2018 · RO · 5 questions',
      questions: [
        {
          position: 1,
          displayTitle: '2018 Q10',
          slug: 'q10-rps-pzr-press-channel-failure',
          selectedLabel: 'A',
          selectedOriginalLabel: 'C',
          acceptedLabels: ['A'],
          isCorrect: true,
          status: 'correct',
          explanationText: 'Pressurizer channel failure explanation.',
          choiceOrder: { A: 'C', B: 'A', C: 'B', D: 'D' },
        },
      ],
    },
    {
      id: 'session-fail',
      completedAt: '2026-05-04T06:40:00.000Z',
      feedbackMode: 'immediate',
      quizType: 'custom',
      completionMode: 'early',
      score: 0.5,
      correctCount: 1,
      answeredCount: 2,
      totalQuestions: 4,
      passStatus: 'fail',
      filterSummary: 'Mixed topics · early finish',
      questions: [],
    },
  ],
};

test('history page requires login before showing performance data', async ({ page }) => {
  await page.goto('history/');

  await expect(page.getByTestId('history-login-required')).toBeVisible();
  await expect(page.getByRole('heading', { name: /Log in to view your progress/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /Log in/i })).toHaveAttribute('href', /\/salem-study-system\/login\/?$/);
  await expect(page.getByText(/contact site administrator/i)).toBeVisible();
  await expect(page.getByTestId('history-app')).toHaveClass(/hidden/);
});

test('history page renders summary cards, quiz attempts, weak topics, and prior review detail', async ({ page }) => {
  await authenticateHistoryUser(page);
  const requests: any[] = [];
  await page.route('**/functions/v1/quiz-history', async (route) => {
    requests.push({ authorization: route.request().headers().authorization, body: route.request().postDataJSON() });
    await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(historyResponse) });
  });

  await page.goto('history/');

  await expect(page.getByTestId('history-app')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'My Progress' })).toBeVisible();
  await expect(page.getByTestId('history-summary')).toContainText('2');
  await expect(page.getByTestId('history-summary')).toContainText('75%');
  await expect(page.getByTestId('history-summary')).toContainText('50%');
  await expect(page.getByTestId('history-summary')).toContainText('3');

  const table = page.getByTestId('history-sessions');
  await expect(table).toContainText('Score: 4/5 (80%) · PASS');
  await expect(table).toContainText('Score: 1/2 (50%) · FAIL');
  await expect(table).toContainText('Early finish');
  await expect(page.getByTestId('history-weak-topics')).toContainText('Pressurizer');
  await expect(page.getByTestId('history-weak-topics')).toContainText('50%');

  await table.getByRole('button', { name: /Review session-pass/i }).click();
  await expect(page.getByTestId('history-review')).toContainText('2018 Q10');
  await expect(page.getByTestId('history-review')).toContainText('Selected: A');
  await expect(page.getByTestId('history-review')).toContainText('Original: C');
  await expect(page.getByTestId('history-review')).toContainText('Correct');
  await expect(page.getByTestId('history-review')).toContainText('Pressurizer channel failure explanation.');
  await expect.poll(() => requests.length).toBe(1);
  expect(requests[0].authorization).toBe('Bearer playwright-access-token');
});

test('sidebar includes my progress link after quiz builder', async ({ page }) => {
  await page.goto('systems/reactor-coolant-system');

  const sidebar = page.locator('aside[data-sidebar-variant="desktop"]');
  await expect(sidebar.getByRole('link', { name: /My Progress/i })).toHaveAttribute('href', /\/salem-study-system\/history\/?$/);

  const topLinks = await sidebar.locator('nav > div').first().getByRole('link').allTextContents();
  expect(topLinks.map((text) => text.replace(/\s+/g, ' ').trim()).slice(0, 4)).toEqual([
    '⌂ Home',
    '▣ Quiz Builder',
    '↗ My Progress',
    '◇ Plant overview',
  ]);
});
