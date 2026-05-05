# Quiz Performance History Page — Brainstorm

## Goal
Give each logged-in learner a private place to review quiz history, scores, pass/fail status, weak areas, and old quiz attempts without exposing anyone else's performance.

## Recommended MVP page
Route: `/history/` or `/progress/`.

Sections:

1. **Top summary cards**
   - Quizzes completed
   - Overall accuracy
   - Passing quizzes / total quizzes
   - Last quiz date
   - Questions answered

2. **Recent quiz sessions table**
   - Date/time completed
   - Mode: feedback or blind
   - Quiz type/filter summary
   - Score: `correct/answered`, percentage, PASS/FAIL
   - Question count and answered count
   - Link/button: `Review quiz`

3. **Quiz detail / previous quiz review**
   - Reconstruct from `quiz_sessions`, `quiz_session_questions`, `question_attempts`, `questions`, and `choices`.
   - Show the same review format as the end-of-quiz page:
     - question number
     - selected display label
     - original selected label if needed for audit
     - accepted display label
     - correct/incorrect/unanswered
     - explanation/distractor notes
   - Preserve the stored `choice_order` so old reviews match what the user actually saw.

4. **Weak areas**
   - Most missed topics/systems for the logged-in user.
   - Most missed question statuses/categories.
   - Questions missed more than once.

5. **Retake actions**
   - Retake missed questions from selected quiz.
   - Build quiz from weak topics.
   - Resume general quiz builder with same filters.

## Data model notes
Current tables already support most of this:

- `quiz_sessions.score` stores decimal score.
- `quiz_sessions.config` stores filters, seed, completion mode.
- `quiz_session_questions.choice_order` snapshots the display-to-original choice mapping.
- `question_attempts` stores answered questions.
- `user_question_state` stores current mastery-style summary.

Useful additions for cleaner history queries:

- Add `quiz_sessions.correct_count integer`.
- Add `quiz_sessions.scored_count integer` — denominator used for score. For early finish, this equals answered count.
- Add `quiz_sessions.total_questions integer`.
- Add `quiz_sessions.pass_status text check (pass_status in ('pass', 'fail'))` or compute from score.

These can be computed in SQL from existing data, but storing snapshots makes the history page simpler and prevents future schema/content edits from changing old summaries.

## Recommended first implementation
Do this in two phases:

### Phase 1 — lightweight history page
- Add `getQuizHistory()` to `site/src/utils/auth-client.ts` using Supabase client RLS.
- Query only current user's `quiz_sessions` ordered by `completed_at desc`.
- Display score percentage and PASS/FAIL using `score >= 0.8`.
- Add a placeholder `Review` button disabled or showing "detail view coming next".

### Phase 2 — full quiz reconstruction
- Add `getQuizSessionReview(sessionId)`.
- Query `quiz_session_questions` joined to questions and attempts.
- Rebuild display labels from `choice_order`.
- Render old review using the same review card component/pattern as quiz completion.

## Privacy/security
- RLS must remain the source of truth: users can only read their own `quiz_sessions`, `quiz_session_questions`, `question_attempts`, and `user_question_state`.
- Do not build history from localStorage drafts. Use server-persisted completed sessions only.
- Global analytics should stay aggregate/anonymized with minimum sample thresholds.

## UI recommendation
Keep it simple and useful first:

- Sidebar/nav link: `My Progress` after login-facing quiz flow is stable.
- Page heading: `My Progress`.
- Empty state: `No completed quizzes yet. Start a quiz to build your performance history.`
- Badge language:
  - `PASS` for `>= 80%`
  - `FAIL` for `< 80%`
  - `Early finish` when `config.completionMode === 'early'`

## Open decision
Whether to call it `History`, `My Progress`, or `Performance`.

My preference: **My Progress** for the nav/page title, with a **Quiz History** section inside it. It sounds more useful and less archival.
