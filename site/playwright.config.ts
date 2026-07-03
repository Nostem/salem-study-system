import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: ['ui-test.ts', 'quiz-test.ts', 'quiz-v2-test.ts', 'quiz-v2-play-test.ts', 'quiz-v2-review-test.ts', 'graph-v2-test.ts', 'auth-test.ts', 'contact-test.ts', 'navigation-test.ts', 'history-test.ts', 'study-test.ts'],
  timeout: 30000,
  use: {
    baseURL: 'http://localhost:4321/salem-study-system/',
    // Sandboxed environments with a pre-installed Chromium (and no access to
    // cdn.playwright.dev) can point tests at it instead of downloading.
    launchOptions: process.env.PLAYWRIGHT_CHROMIUM_PATH
      ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH }
      : {},
  },
  webServer: {
    // Serve the already-built dist/ (do NOT rebuild here). CI builds once before the smoke
    // run, and `npm run test:ui:smoke` builds first locally. Rebuilding the ~1500-page site
    // inside the web server was exceeding the start timeout as the site grew.
    command: 'npx astro preview --port 4321',
    port: 4321,
    reuseExistingServer: false,
    timeout: 120000,
    env: {
      PUBLIC_SUPABASE_URL: 'https://local-test.supabase.co',
      PUBLIC_SUPABASE_ANON_KEY: 'playwright-anon-key',
    },
  },
});
