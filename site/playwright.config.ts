import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: ['ui-test.ts', 'quiz-test.ts', 'auth-test.ts'],
  timeout: 30000,
  use: {
    baseURL: 'http://localhost:4321/salem-study-system/',
  },
  webServer: {
    command: 'npx astro preview --port 4321',
    port: 4321,
    reuseExistingServer: false,
    timeout: 10000,
  },
});
