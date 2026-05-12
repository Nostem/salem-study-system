# Navigation/UI/UX audit — dual quiz migration

Date: 2026-05-12
Branch: `feat/dual-quiz-navigation`

## Scope

Full pass focused on the study loop and site navigation after deciding to keep both quiz modes:

- Classic Quiz (`/quiz/`): fast simple reps.
- Study Builder (`/quiz-v2/` and `/quiz-v2/play/`): targeted, source-linked sessions.
- Review Queue (`/quiz-v2/review/`): whole-question retention loop.
- Study Map (`/graph-v2/`): graph-driven strategy and quiz launching.
- My Progress (`/history/`): shared backend history across modes.

## Findings and fixes

### 1. Sidebar exposed only one quiz path

**Issue:** The sidebar had `Quiz Builder` and `My Progress`, while Study Builder, Review Queue, and Graph v2 were not first-class practice routes. Graph v2 was buried at the bottom as `Graph v2 Study Map`.

**Fix:** Added a clear Practice group:

- Classic Quiz
- Study Builder
- Review Queue
- Study Map
- My Progress

Plant Overview remains under Reference. Legacy Graph is still available but labeled as legacy.

### 2. `/quiz/` name conflicted with `/quiz-v2/`

**Issue:** `/quiz/` called itself `Quiz Builder`, which made it unclear how it differs from v2.

**Fix:** Renamed learner-facing copy to `Classic Quiz`, with copy that frames it as the fast/simple account-synced option. Added an `Open Study Builder` link from the header.

### 3. `/quiz-v2/` still sounded experimental/read-only

**Issue:** The page title and copy said `Quiz v2 Preview`, `Experimental`, and `Read-only`, even though the user has validated the flow for migration.

**Fix:** Renamed learner-facing copy to `Study Builder`, removed noindex, and changed copy to emphasize targeted, source-linked practice. Added a Classic Quiz link in the header controls.

### 4. `/quiz-v2/play/` still described itself as experimental/local-only

**Issue:** Header copy said production `/quiz/` was unaffected and the builder text implied local-only behavior, even though backend session creation/submission exists.

**Fix:** Renamed to `Study Builder Play`, removed noindex, and updated copy to explain that backend session creation saves progress into My Progress.

### 5. `/quiz-v2/review/` still sounded experimental

**Issue:** Review page title/copy said `Quiz v2 Review (Experimental)` and framed itself around not touching production `/quiz/`.

**Fix:** Renamed to `Review Queue`, removed noindex, and framed it as the retention leg of the study loop.

### 6. `/graph-v2/` still sounded experimental

**Issue:** Graph page title/copy said `Graph v2 Preview` and `Experimental`, despite now being the study map route.

**Fix:** Renamed to `Study Map`, removed noindex, and reframed it as graph-linked practice launcher.

### 7. Home page did not explain the practice modes

**Issue:** Home navigation had only a generic `Quiz Builder` button and no learner-facing mode choice.

**Fix:** Added a `Choose practice mode` section with three cards:

- Classic Quiz = speed
- Study Builder = precision
- Study Map = strategy

Also added top links to Study Map, Classic Quiz, Study Builder, My Progress, and Plant Overview.

### 8. History did not visually distinguish quiz sources

**Issue:** `/history/` showed quiz type text but did not make the v1/v2 source distinction obvious.

**Fix:** Added mode badges:

- Classic
- Study Builder
- Graph
- Review

Badges appear in the completed quiz table and selected session review panel.

### 9. Backend metadata needed an explicit classic mode

**Issue:** Classic Quiz submitted `quizType: custom`, which made it harder to distinguish from Study Builder custom sessions.

**Fix:** Classic Quiz now submits:

```json
{
  "source": "quiz",
  "title": "Classic Quiz",
  "quizType": "classic"
}
```

Study Builder continues to submit `source: "quiz-v2"`.

## Remaining deliberate choices

- `/quiz/` is kept as Classic Quiz instead of redirecting to v2.
- `/quiz-v2/` route names are kept for compatibility, even though the user-facing label is now Study Builder.
- Legacy Graph remains reachable, but it is de-emphasized because Study Map is now the learner-facing graph route.
- Classic Quiz keeps local draft resume behavior; completed attempts are the shared backend sync priority.
