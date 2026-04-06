# Inline Highlighter — Design Spec

## Overview

An edit mode on the wiki site that lets the user select text in any article, choose a highlight type (Important, Exam, Trap), and have it committed directly to the markdown source file via the GitHub API. The highlight appears immediately in the browser (optimistic UI) and a toast confirms the commit. The site auto-rebuilds via GitHub Actions, making the highlight permanent.

## Authentication

- GitHub personal access token stored in browser `localStorage` under key `github-token`
- First time entering edit mode with no token, a prompt appears asking for the token
- Token must have write access to `Nostem/salem-study-system`
- No token = GitHub API calls fail silently, edit mode is effectively gated
- No server-side auth, no environment variables, no token in deployed JS

## UI Components

### Edit Mode Toggle

- Small pencil icon button in the top bar, next to the search bar
- Click toggles edit mode on/off
- When active: icon glows with accent blue color, subtle indicator visible
- When inactive: icon is muted gray, no selection behavior

### Floating Tooltip

- Appears near the text selection when text is selected in edit mode within `.prose`
- Three buttons side by side:
  - **Important** (blue) — applies `hi` class
  - **Exam** (amber) — applies `hi-exam` class
  - **Trap** (red) — applies `hi-trap` class
- Positioned above or below the selection depending on viewport space
- Disappears when selection is cleared or edit mode is toggled off

### Token Prompt

- Simple modal overlay, similar style to the search modal
- Single input field for the GitHub personal access token
- "Save" button stores to `localStorage`
- Only appears on first edit mode activation when no token exists
- Token can be cleared/updated via a small "Settings" link in the edit mode toggle area

### Toast Notifications

- Small notification in bottom-right corner
- States: "Committing..." (with spinner) → "Committed ✓" (green, auto-dismiss after 3s) or "Failed: {reason}" (red, dismiss on click)
- Stacks if multiple highlights made quickly

## Commit Flow

1. User selects text in `.prose` area while edit mode is active
2. User clicks a highlight button on the floating tooltip
3. **Optimistic UI update:** Selected text immediately wrapped with `<span class="hi-exam">` (or chosen class) in the DOM
4. **Read file from GitHub:** `GET /repos/Nostem/salem-study-system/contents/wiki/{slug}.md` — returns base64 content + SHA
5. **Find selected text in markdown:** Search the raw markdown for the exact plain text string from the selection
6. **Wrap the text:** Replace first matching occurrence with `<span class="{class}">selected text</span>`
7. **Commit to GitHub:** `PUT /repos/Nostem/salem-study-system/contents/wiki/{slug}.md` with modified content, SHA, and commit message
8. **Toast confirms:** "Committed ✓" or "Failed: {reason}"
9. **GitHub Actions rebuilds** the site automatically on the push

### Commit Message Format

```
highlight: mark "{first 50 chars of text}..." as {type}
```

Where `{type}` is "important", "exam-tested", or "exam-trap".

## Edge Cases

- **Duplicate text:** If the selected text appears multiple times in the markdown, use surrounding context (30 chars before and after the selection in the rendered text) to locate the correct occurrence in the markdown source
- **Cross-formatting selection:** If the selected text spans across markdown formatting boundaries (bold markers, links, HTML tags), show toast: "Can't highlight across formatted text" and do not commit
- **Already highlighted text:** If the selected text is already inside a `hi`, `hi-exam`, or `hi-trap` span, show toast: "Already highlighted" and do not commit
- **No token:** If edit mode is activated with no token in localStorage, show the token prompt before proceeding
- **API failure:** If the GitHub API returns an error (401, 409 conflict, network error), revert the optimistic DOM change and show toast with the error reason
- **Stale SHA:** If someone else pushed between the read and write (409 conflict), retry once by re-reading the file and re-applying

## Files

```
site/src/
  components/
    HighlightToolbar.astro    ← Edit toggle button, token prompt modal, toast container
  scripts/
    highlighter.ts            ← Selection detection, tooltip rendering/positioning,
                                 GitHub API (read/find/wrap/commit), optimistic DOM update,
                                 toast notifications, localStorage token management
  layouts/
    ArticleLayout.astro       ← Modified: add HighlightToolbar component,
                                 add data-slug attribute to <article> element
```

Two new files, one modified file. No new dependencies. All client-side JavaScript.

## Data Flow

```
User selects text → tooltip appears → user clicks highlight type
  ├→ DOM: wrap selection with <span> immediately (optimistic)
  └→ GitHub API:
       GET file content + SHA
       → find text in markdown
       → wrap with <span class="...">
       → PUT modified content with SHA
       → toast: success/failure
       → if failure: revert DOM change
```

## What Does NOT Change

- Existing highlight CSS classes (`hi`, `hi-exam`, `hi-trap`, callout blocks)
- Markdown file format — highlights are the same `<span>` tags whether added by hand, by me during ingestion, or by this tool
- Build pipeline, deployment, or any server-side code
- Other site features (search, graph, sidebar, TOC)
