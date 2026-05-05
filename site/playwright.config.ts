import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: ['ui-test.ts', 'quiz-test.ts', 'auth-test.ts', 'contact-test.ts', 'navigation-test.ts', 'history-test.ts'],
  timeout: 30000,
  use: {
    baseURL: 'http://localhost:4321/salem-study-system/',
  },
  webServer: {
    command: 'npm run build >/tmp/salem-playwright-build.log && npx astro preview --port 4321',
    port: 4321,
    reuseExistingServer: false,
    timeout: 180000,
    env: {
      PUBLIC_SUPABASE_URL: 'https://local-test.supabase.co',
      PUBLIC_SUPABASE_ANON_KEY: 'playwright-anon-key',
    },
  },
});
