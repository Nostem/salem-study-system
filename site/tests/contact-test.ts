import { expect, test } from '@playwright/test';

test('site-wide contact link opens a feedback modal on the homepage', async ({ page }) => {
  await page.goto('');

  await page.getByRole('button', { name: /Contact \/ Feedback/i }).click();

  await expect(page.getByRole('dialog', { name: /Contact and feedback/i })).toBeVisible();
  await expect(page.getByLabel('Category')).toBeVisible();
  await expect(page.getByLabel('Message')).toBeVisible();
  await expect(page.getByLabel('Your name')).toBeVisible();
  await expect(page.getByLabel('Reply email')).toBeVisible();
  await expect(page.getByLabel('Reply address')).toHaveCount(0);
  await expect(page.getByTestId('contact-page-url')).toContainText('/salem-study-system/');
});

test('contact form submits feedback with current page context', async ({ page }) => {
  const submittedBodies: any[] = [];
  await page.route('**/functions/v1/contact-feedback', async (route) => {
    submittedBodies.push(route.request().postDataJSON());
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ ok: true, feedbackId: '44444444-4444-4444-8444-444444444444' }),
    });
  });

  await page.goto('systems/reactor-coolant-system');
  await page.getByRole('button', { name: /Contact \/ Feedback/i }).click();
  await page.getByLabel('Category').selectOption('content_issue');
  await page.getByLabel('Your name').fill('Beta Tester');
  await page.getByLabel('Reply email').fill('tester@example.invalid');
  await page.getByLabel('Message').fill('This page needs a note about a confusing training reference.');
  await page.getByRole('button', { name: /^Send feedback$/i }).click();

  await expect(page.getByRole('dialog', { name: /Contact and feedback/i })).toBeHidden();
  await expect(page.getByTestId('contact-confirmation')).toContainText(/Feedback sent\. Thank you\./i);
  expect(submittedBodies).toHaveLength(1);
  expect(submittedBodies[0]).toMatchObject({
    category: 'content_issue',
    name: 'Beta Tester',
    email: 'tester@example.invalid',
    message: 'This page needs a note about a confusing training reference.',
  });
  expect(submittedBodies[0].pageUrl).toContain('/salem-study-system/systems/reactor-coolant-system');
});
