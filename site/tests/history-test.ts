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
    overallAccuracy: 0.67,
    dueReviewCount: 4,
    shakyCount: 1,
    masteredCount: 2,
  },
  weakTopics: [
    { slug: 'pressurizer', title: 'Pressurizer', attempts: 2, misses: 1, accuracy: 0.5 },
  ],
  sessions: [
    {
      id: 'session-pass',
      completedAt: '2026-05-05T06:40:00.000Z',
      feedbackMode: 'blind',
      source: 'quiz-v2',
      quizType: 'custom',
      completionMode: 'completed',
      score: 0.8,
      correctCount: 4,
      answeredCount: 5,
      totalQuestions: 5,
      passStatus: 'pass',
      filterSummary: '2018 · RO · 5 questions',
      replayHref: '/quiz-v2/play/?slugs=q10-rps-pzr-press-channel-failure&count=1&seed=history-replay',
      reviewMissedHref: '/quiz-v2/review/?slugs=q10-rps-pzr-press-channel-failure',
      retakeMissedHref: '/quiz-v2/play/?slugs=q10-rps-pzr-press-channel-failure&count=1&seed=history-missed',
      questions: [
        {
          position: 1,
          displayTitle: '2018 Q10',
          slug: 'q10-rps-pzr-press-channel-failure',
          sourceStatus: 'active',
          selectedLabel: 'A',
          selectedOriginalLabel: 'C',
          acceptedLabels: ['A'],
          acceptedDisplayLabels: ['B'],
          isCorrect: true,
          status: 'correct',
          explanationText: 'Pressurizer channel failure explanation.',
          choiceOrder: { A: 'C', B: 'A', C: 'B', D: 'D' },
        },
        {
          position: 2,
          displayTitle: '2023 Q72',
          slug: 'q72-containment-entry-additional-approval-during-shutdown',
          sourceStatus: 'draft',
          selectedLabel: 'B',
          selectedOriginalLabel: 'D',
          acceptedLabels: ['D'],
          acceptedDisplayLabels: ['B'],
          isCorrect: true,
          status: 'correct',
          explanationText: 'Draft imported questions remain visible in historical review.',
          choiceOrder: { A: 'A', B: 'D', C: 'B', D: 'C' },
        },
      ],
    },
    {
      id: 'session-fail',
      completedAt: '2026-05-04T06:40:00.000Z',
      feedbackMode: 'immediate',
      source: 'quiz',
      quizType: 'classic',
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
  await expect(page.getByTestId('history-login-required').getByRole('link', { name: /Log in/i })).toHaveAttribute('href', /\/salem-study-system\/login\/\?next=%2Fsalem-study-system%2Fhistory%2F$/);
  await expect(page.getByText(/ask the site administrator/i)).toBeVisible();
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
  await expect(page.getByTestId('history-summary')).toContainText('May');

  const table = page.getByTestId('history-sessions');
  await expect(table).toContainText('Score: 4/5 (80%) · PASS');
  await expect(table).toContainText('Score: 1/2 (50%) · FAIL');
  await expect(table).toContainText('Study Builder');
  await expect(table).toContainText('Classic');
  await expect(table).toContainText('Early finish');
  await expect(page.getByTestId('history-weak-topics')).toContainText('Pressurizer');
  await expect(page.getByTestId('history-weak-topics')).toContainText('50%');
  await expect(page.getByTestId('history-weak-topics').getByRole('link', { name: /Practice topic/i })).toHaveAttribute('href', /topics=pressurizer/);
  await expect(page.getByTestId('history-personal-analytics')).toContainText('Overall accuracy');
  await expect(page.getByTestId('history-personal-analytics')).toContainText('67%');
  await expect(page.getByTestId('history-personal-analytics')).toContainText('Due reviews');
  await expect(page.locator('[data-history-analytics="due"]')).toHaveText('4');
  await expect(table.getByRole('link', { name: /^Replay$/i })).toHaveAttribute('href', /\/salem-study-system\/quiz-v2\/play\/\?slugs=q10-rps-pzr-press-channel-failure&count=1&seed=history-replay$/);
  await expect(table.getByRole('link', { name: /^Review missed$/i })).toHaveAttribute('href', /\/salem-study-system\/quiz-v2\/review\/\?slugs=q10-rps-pzr-press-channel-failure$/);
  await expect(table.getByRole('link', { name: /^Quiz missed$/i })).toHaveAttribute('href', /\/salem-study-system\/quiz-v2\/play\/\?slugs=q10-rps-pzr-press-channel-failure&count=1&seed=history-missed$/);

  await table.getByRole('button', { name: /Review session-pass/i }).click();
  await expect(page.getByTestId('history-review')).toBeInViewport();
  await expect(page.getByTestId('history-review')).toContainText('2018 Q10');
  await expect(page.getByTestId('history-review')).toContainText('Selected: A');
  await expect(page.getByTestId('history-review')).toContainText('Original: C');
  await expect(page.getByTestId('history-review')).toContainText('Accepted: B');
  await expect(page.getByTestId('history-review')).toContainText('Original: A');
  await expect(page.getByTestId('history-review')).toContainText('Correct');
  await expect(page.getByTestId('history-review')).toContainText('Study Builder');
  await expect(page.getByTestId('history-review')).toContainText('Pressurizer channel failure explanation.');
  await expect(page.getByTestId('history-review')).toContainText('2023 Q72');
  await expect(page.getByTestId('history-review')).toContainText('Draft imported questions remain visible in historical review.');
  await expect(page.getByTestId('history-review')).toContainText('draft');
  await expect.poll(() => requests.length).toBe(1);
  expect(requests[0].authorization).toBe('Bearer playwright-access-token');
});

test('sidebar keeps Study as the only learner app entry point', async ({ page }) => {
  await page.goto('systems/reactor-coolant-system');

  const sidebar = page.locator('aside[data-sidebar-variant="desktop"]');
  await expect(sidebar.getByTestId('sidebar-study-link')).toHaveAttribute('href', /\/salem-study-system\/study\/?$/);
  await expect(sidebar.getByRole('link', { name: /My Progress/i })).toHaveCount(0);
  await expect(sidebar.getByRole('link', { name: /Classic Quiz/i })).toHaveCount(0);
  await expect(sidebar.getByRole('link', { name: /Study Builder/i })).toHaveCount(0);
  await expect(sidebar.getByRole('link', { name: /Study Map/i })).toHaveCount(0);
  await expect(sidebar.getByText('Advanced tools')).toHaveCount(0);

  const topLinks = await sidebar.locator('nav > div').first().getByRole('link').allTextContents();
  expect(topLinks.map((text) => text.replace(/\s+/g, ' ').trim()).slice(0, 3)).toEqual([
    '⌂ Home',
    '◎ Study',
    '◇ Plant overview',
  ]);
});
