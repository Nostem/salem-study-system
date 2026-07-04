# Deploy the updated edge functions

Remaining manual step from the 2026-07 audit fixes (PRs #133/#134/#135). The
database migrations are already applied via the `db-migrate` workflow; the
`submit-quiz-results` and `quiz-history` edge functions must be redeployed so
the new code (atomic RPC writes, state-zeroing fix, slim v2 snapshots, FSRS
schedule ownership) takes effect. Until then the old function code keeps
working against the migrated DB — nothing breaks, the fixes just aren't live.

## 1. Pull latest main

```bash
cd ~/projects/salem-study-system    # your local clone
git checkout main
git pull origin main
```

## 2. Get your two Supabase values (skip any you already have)

- **Access token:** <https://supabase.com/dashboard/account/tokens> →
  "Generate new token" (any name, e.g. `cli-deploy`). Copy it — it's shown once.
- **Project ref:** the short id in your project's dashboard URL:
  `https://supabase.com/dashboard/project/<THIS-PART>`. (It's also the
  subdomain of your `db.<ref>.supabase.co` DB URL.)

## 3. Deploy the two changed functions

```bash
export SUPABASE_ACCESS_TOKEN="<your token>"

npx supabase functions deploy submit-quiz-results --project-ref "<your ref>"
npx supabase functions deploy quiz-history --project-ref "<your ref>"
```

Each should end with a "Deployed Function" confirmation. (If `npx supabase`
prompts to install the CLI, accept.)

## 4. Verify end-to-end (2 minutes, on the live site)

1. Log in → Quick Quiz → run a short quiz (2–3 questions) → finish → confirm
   **"Progress saved."**
2. Open **My Progress** → the session appears with the right score, and the
   per-question review renders.
3. Answer a question in feedback mode and confirm the choices lock after the
   reveal (issue #8's fix, while you're there).

If step 1 fails with a save error, the most likely cause is a function
deployed before the migration — the migration is already applied, so it
should be clean. If anything looks off, grab the function logs at
*Dashboard → Edge Functions → submit-quiz-results → Logs* and share the
error line.

## 5. Optional (recommended): automate this for next time

Add two repository secrets on GitHub
(*repo → Settings → Secrets and variables → Actions*):

- `SUPABASE_ACCESS_TOKEN` = the token from step 2
- `SUPABASE_PROJECT_REF` = the ref from step 2

Then a `functions-deploy.yml` workflow can auto-deploy any edge function
whose files change on a push to `main` — the same pattern as the
`db-migrate` migration runner, so DB and functions can never drift apart
again (the June migrations sat unapplied for weeks before the 2026-07 audit
caught it).

Once the functions are deployed and verified, this file can be deleted.
