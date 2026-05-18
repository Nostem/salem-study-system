# Backend deploy notes

The Salem Study System has two separate deploy surfaces:

1. **GitHub Pages / Astro frontend** — deployed by `.github/workflows/deploy.yml` on `main` push or manual dispatch.
2. **Supabase backend** — database migrations and Edge Functions. These are not deployed by the GitHub Pages workflow.

Do not print, commit, or paste real Supabase project refs, DB URLs, service-role keys, anon keys, access tokens, passwords, or raw invite codes into logs or docs.

## Backend deploy checklist

Run these from the repository root with credentials loaded from a local ignored environment file or shell environment.

### 1. Verify local credentials are present without printing values

```bash
test -n "$SUPABASE_ACCESS_TOKEN"
test -n "$SUPABASE_DB_URL"
test -n "$PUBLIC_SUPABASE_ANON_KEY"
```

If any command fails, stop and load credentials safely. Do not echo the values.

### 2. Apply database migrations

Preferred pattern when `psql` is available:

```bash
psql "$SUPABASE_DB_URL" -v ON_ERROR_STOP=1 -f supabase/migrations/<migration>.sql
```

Use the exact migration files needed for the release. Avoid re-running unrelated hand-written SQL unless it is idempotent.

### 3. Deploy Edge Functions

Derive the project ref from the local DB URL in a script without printing it, then deploy only the functions changed in the release:

```bash
npx supabase functions deploy <function-name> --project-ref "$PROJECT_REF"
```

Common function names:

- `invite-signup`
- `username-login`
- `contact-feedback`
- `create-quiz-v2-session`
- `submit-quiz-results`
- `quiz-history`
- `quiz-review-queue`
- `submit-question-review`
- `get-system-reviews`
- `mark-system-reviewed`

### 4. Smoke-check deployed functions

Use minimal invalid payloads and expected validation errors to prove the function is reachable without exposing data.

Example for a public or unauthenticated reachability check:

```bash
curl -sS -X POST "https://<project-ref>.supabase.co/functions/v1/<function-name>" \
  -H "apikey: $PUBLIC_SUPABASE_ANON_KEY" \
  -H "Content-Type: application/json" \
  -d '{}'
```

For authenticated functions, use a real short-lived user JWT from a test account loaded into `$SUPABASE_TEST_USER_JWT`. Do not use the anon key as a bearer token.

```bash
curl -sS -X POST "https://<project-ref>.supabase.co/functions/v1/<function-name>" \
  -H "apikey: $PUBLIC_SUPABASE_ANON_KEY" \
  -H "Authorization: Bearer $SUPABASE_TEST_USER_JWT" \
  -H "Content-Type: application/json" \
  -d '{}'
```

Expected validation errors such as `missing_authorization`, `slug_required`, or `rating_required` are acceptable reachability signals depending on the function and whether a user JWT was supplied. Do not log response bodies that include sensitive details.

### 5. Deploy frontend separately

After backend changes are deployed and smoke-checked, push frontend changes and watch GitHub Pages:

```bash
git push origin main
gh run list --repo Nostem/salem-study-system --branch main --limit 5
gh run watch <run-id> --repo Nostem/salem-study-system --exit-status
```

## Verification gates

Before any release that touches quiz/backend behavior, run:

```bash
python3 -m unittest tests.test_quiz_bank_builder tests.test_structured_quiz_bank_builder tests.test_structured_quiz_bank_validator
cd site
npm run test:node
npm run test:ui:smoke
npm run build
```

The public/source PDFs intentionally remain on the site. Do not remove or externalize them as an optimization step.
