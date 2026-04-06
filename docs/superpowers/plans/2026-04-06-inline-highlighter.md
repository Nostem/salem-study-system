# Inline Highlighter — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an edit mode to the wiki site where selecting text shows a tooltip to apply highlight annotations that commit directly to the markdown source via the GitHub API.

**Architecture:** A single client-side script handles selection detection, tooltip rendering, GitHub API calls (read file, find text, wrap with span, commit), optimistic DOM updates, and toast notifications. An Astro component provides the edit toggle button, token prompt modal, and toast container. The article slug is passed to the client via a data attribute.

**Tech Stack:** Vanilla TypeScript (client-side), GitHub REST API, localStorage for token persistence

---

## File Structure

```
site/src/
  components/
    HighlightToolbar.astro    ← Edit toggle, token modal, toast container (markup only)
  scripts/
    highlighter.ts            ← All client-side logic
  layouts/
    ArticleLayout.astro       ← Modified: add component + data-slug attribute
```

---

### Task 1: HighlightToolbar Component (Markup)

**Files:**
- Create: `site/src/components/HighlightToolbar.astro`

- [ ] **Step 1: Create the component**

Create `site/src/components/HighlightToolbar.astro`:

```astro
---
// Highlight toolbar — edit mode toggle, floating tooltip, token prompt, toast container
// All behavior is in highlighter.ts
---

<!-- Edit mode toggle button (top bar) -->
<button
  id="edit-toggle"
  class="bg-transparent border-none cursor-pointer text-[#6b7280] hover:text-[#c8cdd5] text-sm transition-colors"
  title="Toggle edit mode"
>
  ✎
</button>

<!-- Floating highlight tooltip (hidden by default) -->
<div id="highlight-tooltip" class="fixed z-50 hidden">
  <div class="flex gap-1 bg-[#0d1220] border border-[#1a2035] rounded-lg shadow-2xl p-1.5">
    <button data-highlight="hi" class="px-2.5 py-1 rounded text-[11px] font-medium bg-[rgba(96,165,250,0.15)] text-[#93bbfc] border border-[rgba(96,165,250,0.3)] hover:bg-[rgba(96,165,250,0.25)] cursor-pointer transition-colors">
      Important
    </button>
    <button data-highlight="hi-exam" class="px-2.5 py-1 rounded text-[11px] font-medium bg-[rgba(251,191,36,0.15)] text-[#fde68a] border border-[rgba(251,191,36,0.3)] hover:bg-[rgba(251,191,36,0.25)] cursor-pointer transition-colors">
      Exam
    </button>
    <button data-highlight="hi-trap" class="px-2.5 py-1 rounded text-[11px] font-medium bg-[rgba(248,113,113,0.15)] text-[#fca5a5] border border-[rgba(248,113,113,0.3)] hover:bg-[rgba(248,113,113,0.25)] cursor-pointer transition-colors">
      Trap
    </button>
  </div>
</div>

<!-- Token prompt modal (hidden by default) -->
<div id="token-modal" class="fixed inset-0 z-50 hidden">
  <div class="absolute inset-0 bg-black/60" onclick="document.getElementById('token-modal').classList.add('hidden')"></div>
  <div class="relative mx-auto mt-[20vh] w-full max-w-sm bg-[#0d1220] border border-[#1a2035] rounded-lg shadow-2xl p-6">
    <h3 class="text-sm font-semibold text-[#e0e4ea] mb-1">GitHub Token Required</h3>
    <p class="text-xs text-[#6b7280] mb-4">Enter a personal access token with write access to the repo. Stored in your browser only.</p>
    <input
      id="token-input"
      type="password"
      placeholder="ghp_xxxxxxxxxxxx"
      class="w-full bg-[#111827] border border-[#1a2035] rounded-md px-3 py-2 text-sm text-[#e0e4ea] placeholder-[#6b7280] outline-none focus:border-[#2a6f97] mb-3"
    />
    <div class="flex justify-end gap-2">
      <button id="token-cancel" class="px-3 py-1.5 text-xs text-[#6b7280] bg-transparent border border-[#1a2035] rounded cursor-pointer hover:text-[#c8cdd5]">
        Cancel
      </button>
      <button id="token-save" class="px-3 py-1.5 text-xs text-[#e0e4ea] bg-[#2a6f97] border-none rounded cursor-pointer hover:bg-[#35809e]">
        Save
      </button>
    </div>
  </div>
</div>

<!-- Toast container -->
<div id="toast-container" class="fixed bottom-4 right-4 z-50 flex flex-col gap-2"></div>
```

- [ ] **Step 2: Verify build**

```bash
cd /Users/fredm/projects/salem-study-system/site
npx astro build
```

Expected: Build succeeds (component not used yet).

- [ ] **Step 3: Commit**

```bash
git add site/src/components/HighlightToolbar.astro
git commit -m "feat: add HighlightToolbar component markup"
```

---

### Task 2: Wire Component into ArticleLayout

**Files:**
- Modify: `site/src/layouts/ArticleLayout.astro`

- [ ] **Step 1: Read the current ArticleLayout.astro**

Read `/Users/fredm/projects/salem-study-system/site/src/layouts/ArticleLayout.astro`.

- [ ] **Step 2: Add HighlightToolbar import and component**

Add the import at the top with the other imports:

```astro
import HighlightToolbar from '../components/HighlightToolbar.astro';
```

- [ ] **Step 3: Add the edit toggle button to the top bar**

In the `<header>` element, add the edit toggle between the logo and search button. Find the closing `</div>` of the logo link wrapper and add after it but before the search button:

```astro
    </a>
    </div>
    <div class="flex items-center gap-3">
      <HighlightToolbar />
      <button
        id="search-trigger"
```

Wait — the top bar currently has the logo `<div>` on the left and search on the right in a `justify-between` layout. The edit toggle should sit next to the search bar. The cleanest approach: wrap the search button and edit toggle in a flex container on the right side.

Replace the search trigger section (from `<button id="search-trigger"` through the mobile search button) with:

```astro
    <div class="flex items-center gap-2">
      <div id="edit-toggle-wrapper"></div>
      <button
        id="search-trigger"
        class="bg-[#111827] border border-[#1a2035] rounded-md px-3.5 py-1.5 text-xs text-[#6b7280] w-60 text-left cursor-pointer hidden sm:block"
      >
        ⌘K &nbsp;Search articles...
      </button>
      <!-- Mobile search icon -->
      <button id="search-trigger-mobile" class="sm:hidden text-[#6b7280] text-sm bg-transparent border-none cursor-pointer">
        ⌕
      </button>
    </div>
```

Then place the `<HighlightToolbar />` component after `<SearchModal />` at the top of the layout (the tooltip, token modal, and toast are fixed-positioned so they don't need to be inside the header).

- [ ] **Step 4: Add data-slug to the article element**

Change the `<article>` tag from:

```astro
      <article class="prose mt-6">
```

to:

```astro
      <article class="prose mt-6" data-slug={slug}>
```

- [ ] **Step 5: Move edit toggle button into the header wrapper**

The `#edit-toggle` button is inside `HighlightToolbar.astro` but needs to appear in the header's right side. Instead, use a script to move it:

Actually, simpler approach — remove the `<button id="edit-toggle">` from HighlightToolbar.astro and put it directly in ArticleLayout.astro's header. Then HighlightToolbar.astro only contains the tooltip, token modal, and toast.

Update `HighlightToolbar.astro` — remove the edit toggle button (first element). It will be placed directly in the layout.

Update `ArticleLayout.astro` header's right side:

```astro
    <div class="flex items-center gap-2">
      <button
        id="edit-toggle"
        class="bg-transparent border-none cursor-pointer text-[#6b7280] hover:text-[#c8cdd5] text-sm transition-colors"
        title="Toggle edit mode"
      >
        ✎
      </button>
      <button
        id="search-trigger"
        class="bg-[#111827] border border-[#1a2035] rounded-md px-3.5 py-1.5 text-xs text-[#6b7280] w-60 text-left cursor-pointer hidden sm:block"
      >
        ⌘K &nbsp;Search articles...
      </button>
      <button id="search-trigger-mobile" class="sm:hidden text-[#6b7280] text-sm bg-transparent border-none cursor-pointer">
        ⌕
      </button>
    </div>
```

- [ ] **Step 6: Add the highlighter script**

Add before the closing `</BaseLayout>` tag:

```astro
  <script src="../scripts/highlighter.ts"></script>
```

- [ ] **Step 7: Verify build**

```bash
cd /Users/fredm/projects/salem-study-system/site
npx astro build
```

Expected: Build succeeds. The script doesn't exist yet so this may warn — create an empty placeholder:

```bash
echo "// highlighter script — implemented in Task 3" > site/src/scripts/highlighter.ts
```

- [ ] **Step 8: Commit**

```bash
git add site/src/layouts/ArticleLayout.astro site/src/components/HighlightToolbar.astro site/src/scripts/highlighter.ts
git commit -m "feat: wire HighlightToolbar into ArticleLayout with data-slug"
```

---

### Task 3: Highlighter Script — Core Logic

**Files:**
- Create: `site/src/scripts/highlighter.ts`

- [ ] **Step 1: Create the highlighter script**

Create `site/src/scripts/highlighter.ts`:

```ts
// Inline Highlighter — edit mode with GitHub API commit
// Handles: selection detection, tooltip positioning, GitHub API (read/modify/commit),
// optimistic DOM update, toast notifications, localStorage token management

const REPO_OWNER = 'Nostem';
const REPO_NAME = 'salem-study-system';
const TOKEN_KEY = 'github-token';
const HIGHLIGHT_TYPES: Record<string, string> = {
  'hi': 'important',
  'hi-exam': 'exam-tested',
  'hi-trap': 'exam-trap',
};

let editMode = false;

// --- DOM References ---

const editToggle = document.getElementById('edit-toggle');
const tooltip = document.getElementById('highlight-tooltip');
const tokenModal = document.getElementById('token-modal');
const tokenInput = document.getElementById('token-input') as HTMLInputElement | null;
const tokenSave = document.getElementById('token-save');
const tokenCancel = document.getElementById('token-cancel');
const toastContainer = document.getElementById('toast-container');
const proseEl = document.querySelector('article.prose') as HTMLElement | null;

if (!editToggle || !tooltip || !tokenModal || !toastContainer || !proseEl) {
  // Not an article page or components missing — bail silently
  throw new Error('Highlighter: required elements not found');
}

const slug = proseEl.dataset.slug;
if (!slug) throw new Error('Highlighter: no data-slug on article element');

// --- Token Management ---

function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

function setToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

function promptForToken(): Promise<string | null> {
  return new Promise((resolve) => {
    tokenModal!.classList.remove('hidden');
    tokenInput!.value = '';
    tokenInput!.focus();

    const onSave = () => {
      const val = tokenInput!.value.trim();
      if (val) {
        setToken(val);
        tokenModal!.classList.add('hidden');
        cleanup();
        resolve(val);
      }
    };

    const onCancel = () => {
      tokenModal!.classList.add('hidden');
      cleanup();
      resolve(null);
    };

    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') onSave();
      if (e.key === 'Escape') onCancel();
    };

    function cleanup() {
      tokenSave!.removeEventListener('click', onSave);
      tokenCancel!.removeEventListener('click', onCancel);
      tokenInput!.removeEventListener('keydown', onKeydown);
    }

    tokenSave!.addEventListener('click', onSave);
    tokenCancel!.addEventListener('click', onCancel);
    tokenInput!.addEventListener('keydown', onKeydown);
  });
}

// --- Toast Notifications ---

function showToast(message: string, type: 'info' | 'success' | 'error'): HTMLElement {
  const colors = {
    info: 'border-[#2a6f97] text-[#9ca3af]',
    success: 'border-[#22c55e] text-[#22c55e]',
    error: 'border-[#f87171] text-[#f87171]',
  };

  const toast = document.createElement('div');
  toast.className = `bg-[#0d1220] border ${colors[type]} rounded-md px-4 py-2 text-xs shadow-lg transition-opacity duration-300`;
  toast.textContent = message;
  toastContainer!.appendChild(toast);

  if (type !== 'info') {
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  return toast;
}

// --- Edit Mode Toggle ---

editToggle.addEventListener('click', async () => {
  if (!editMode) {
    // Entering edit mode — check for token
    let token = getToken();
    if (!token) {
      token = await promptForToken();
      if (!token) return; // User cancelled
    }
    editMode = true;
    editToggle.style.color = '#60a5fa';
    editToggle.style.textShadow = '0 0 8px rgba(96,165,250,0.5)';
  } else {
    editMode = false;
    editToggle.style.color = '';
    editToggle.style.textShadow = '';
    tooltip.classList.add('hidden');
  }
});

// --- Selection Detection & Tooltip ---

document.addEventListener('selectionchange', () => {
  if (!editMode) return;

  const selection = window.getSelection();
  if (!selection || selection.isCollapsed || !selection.toString().trim()) {
    tooltip.classList.add('hidden');
    return;
  }

  // Check if selection is within the prose area
  const range = selection.getRangeAt(0);
  if (!proseEl.contains(range.commonAncestorContainer)) {
    tooltip.classList.add('hidden');
    return;
  }

  // Check if selection spans across existing highlight spans or complex HTML
  const selectedText = selection.toString().trim();
  if (!selectedText) {
    tooltip.classList.add('hidden');
    return;
  }

  // Check if already highlighted
  const parentEl = range.commonAncestorContainer.parentElement;
  if (parentEl && (parentEl.classList.contains('hi') || parentEl.classList.contains('hi-exam') || parentEl.classList.contains('hi-trap'))) {
    tooltip.classList.add('hidden');
    return;
  }

  // Position tooltip above the selection
  const rect = range.getBoundingClientRect();
  const tooltipEl = tooltip.querySelector('div')!;
  const tooltipWidth = 240; // approximate
  let left = rect.left + (rect.width / 2) - (tooltipWidth / 2);
  left = Math.max(8, Math.min(left, window.innerWidth - tooltipWidth - 8));
  let top = rect.top - 44;
  if (top < 8) top = rect.bottom + 8;

  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
  tooltip.classList.remove('hidden');
});

// Hide tooltip on click outside
document.addEventListener('mousedown', (e) => {
  if (!tooltip.contains(e.target as Node) && !(e.target as Element)?.closest('#highlight-tooltip')) {
    // Don't hide immediately — let selection happen first
  }
});

// --- Highlight Buttons ---

tooltip.querySelectorAll('button[data-highlight]').forEach((btn) => {
  btn.addEventListener('click', async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const highlightClass = (btn as HTMLElement).dataset.highlight!;
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) return;

    const selectedText = selection.toString().trim();
    if (!selectedText) return;

    const range = selection.getRangeAt(0);

    // Check for cross-formatting selection
    const fragment = range.cloneContents();
    const tempDiv = document.createElement('div');
    tempDiv.appendChild(fragment);
    const hasNestedElements = tempDiv.querySelector('a, strong, em, code, span[class^="hi"], span[class^="val-"]');
    if (hasNestedElements) {
      showToast("Can't highlight across formatted text", 'error');
      tooltip.classList.add('hidden');
      return;
    }

    // Optimistic DOM update
    const span = document.createElement('span');
    span.className = highlightClass;
    try {
      range.surroundContents(span);
    } catch {
      showToast("Can't highlight this selection", 'error');
      tooltip.classList.add('hidden');
      return;
    }

    selection.removeAllRanges();
    tooltip.classList.add('hidden');

    // Commit to GitHub
    const toast = showToast('Committing...', 'info');
    const token = getToken();
    if (!token) {
      span.outerHTML = span.innerHTML; // revert
      toast.remove();
      showToast('No GitHub token — enter one to save highlights', 'error');
      return;
    }

    const success = await commitHighlight(slug!, selectedText, highlightClass, token);
    toast.remove();

    if (success) {
      showToast('Committed ✓', 'success');
    } else {
      // Revert optimistic update
      span.outerHTML = span.innerHTML;
      showToast('Commit failed — check token permissions', 'error');
    }
  });
});

// --- GitHub API ---

async function commitHighlight(
  slug: string,
  selectedText: string,
  highlightClass: string,
  token: string,
): Promise<boolean> {
  const filePath = `wiki/${slug}.md`;
  const apiBase = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`;
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
  };

  try {
    // Step 1: Read current file
    const getRes = await fetch(apiBase, { headers });
    if (!getRes.ok) return false;

    const fileData = await getRes.json();
    const sha = fileData.sha;
    const content = atob(fileData.content.replace(/\n/g, ''));

    // Step 2: Find the selected text in the markdown
    const index = findTextInMarkdown(content, selectedText);
    if (index === -1) return false;

    // Step 3: Wrap with highlight span
    const wrapped = `<span class="${highlightClass}">${selectedText}</span>`;
    const newContent = content.substring(0, index) + wrapped + content.substring(index + selectedText.length);

    // Step 4: Commit
    const label = HIGHLIGHT_TYPES[highlightClass] || highlightClass;
    const shortText = selectedText.length > 50 ? selectedText.substring(0, 50) + '...' : selectedText;
    const message = `highlight: mark "${shortText}" as ${label}`;

    const putRes = await fetch(apiBase, {
      method: 'PUT',
      headers,
      body: JSON.stringify({
        message,
        content: btoa(unescape(encodeURIComponent(newContent))),
        sha,
      }),
    });

    if (putRes.status === 409) {
      // Stale SHA — retry once
      return commitHighlight(slug, selectedText, highlightClass, token);
    }

    return putRes.ok;
  } catch {
    return false;
  }
}

function findTextInMarkdown(markdown: string, selectedText: string): number {
  // Direct match first
  const directIndex = markdown.indexOf(selectedText);
  if (directIndex !== -1) return directIndex;

  // Try matching ignoring extra whitespace (markdown may have different spacing)
  const normalized = selectedText.replace(/\s+/g, '\\s+');
  const regex = new RegExp(escapeRegex(selectedText).replace(/\s+/g, '\\s+'));
  const match = regex.exec(markdown);
  if (match) return match.index;

  return -1;
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
```

- [ ] **Step 2: Verify build**

```bash
cd /Users/fredm/projects/salem-study-system/site
npx astro build
```

Expected: Build succeeds with no errors.

- [ ] **Step 3: Commit**

```bash
git add site/src/scripts/highlighter.ts
git commit -m "feat: add highlighter script — selection, tooltip, GitHub API commit, toast"
```

---

### Task 4: Update Playwright Tests

**Files:**
- Modify: `site/tests/ui-test.ts`

- [ ] **Step 1: Append highlighter tests**

Read the current `site/tests/ui-test.ts`. Append after the last test:

```ts
// --- 6. Inline Highlighter ---

test('edit toggle button is visible', async ({ page }) => {
  await page.goto(BASE + 'systems/reactor-coolant-system/');
  await page.waitForLoadState('networkidle');

  const toggle = page.locator('#edit-toggle');
  await expect(toggle).toBeVisible();
});

test('article element has data-slug attribute', async ({ page }) => {
  await page.goto(BASE + 'systems/reactor-coolant-system/');
  await page.waitForLoadState('networkidle');

  const article = page.locator('article.prose');
  const slug = await article.getAttribute('data-slug');
  expect(slug).toBe('systems/reactor-coolant-system');
});

test('highlight tooltip is hidden by default', async ({ page }) => {
  await page.goto(BASE + 'systems/reactor-coolant-system/');
  await page.waitForLoadState('networkidle');

  const tooltip = page.locator('#highlight-tooltip');
  await expect(tooltip).toBeHidden();
});

test('token modal is hidden by default', async ({ page }) => {
  await page.goto(BASE + 'systems/reactor-coolant-system/');
  await page.waitForLoadState('networkidle');

  const modal = page.locator('#token-modal');
  await expect(modal).toBeHidden();
});

test('edit toggle activates edit mode styling', async ({ page }) => {
  await page.goto(BASE + 'systems/reactor-coolant-system/');
  await page.waitForLoadState('networkidle');

  // Set a fake token so edit mode doesn't prompt
  await page.evaluate(() => localStorage.setItem('github-token', 'fake-token'));

  const toggle = page.locator('#edit-toggle');
  await toggle.click();

  // Toggle should have accent color
  const color = await toggle.evaluate(el => el.style.color);
  expect(color).toBe('rgb(96, 165, 250)');

  // Click again to deactivate
  await toggle.click();
  const colorAfter = await toggle.evaluate(el => el.style.color);
  expect(colorAfter).toBe('');
});

test('token modal appears when no token stored', async ({ page }) => {
  await page.goto(BASE + 'systems/reactor-coolant-system/');
  await page.waitForLoadState('networkidle');

  // Clear any existing token
  await page.evaluate(() => localStorage.removeItem('github-token'));

  const toggle = page.locator('#edit-toggle');
  await toggle.click();

  const modal = page.locator('#token-modal');
  await expect(modal).toBeVisible();

  // Cancel
  await page.locator('#token-cancel').click();
  await expect(modal).toBeHidden();
});
```

- [ ] **Step 2: Run the full test suite**

```bash
cd /Users/fredm/projects/salem-study-system/site
npm run test:ui
```

Expected: All tests pass including the new highlighter tests.

- [ ] **Step 3: Commit**

```bash
git add site/tests/ui-test.ts
git commit -m "feat: add Playwright tests for inline highlighter UI"
```

---

### Task 5: Final Build, Verify, Push

- [ ] **Step 1: Run full build**

```bash
cd /Users/fredm/projects/salem-study-system/site
npm run build
```

Expected: Clean build.

- [ ] **Step 2: Run full test suite**

```bash
npm run test:ui
```

Expected: All tests pass.

- [ ] **Step 3: Push**

```bash
cd /Users/fredm/projects/salem-study-system
git push
```

- [ ] **Step 4: Test on deployed site**

After GitHub Actions deploys (~1 min), visit https://nostem.github.io/salem-study-system/systems/reactor-coolant-system

1. Click the ✎ edit toggle — should prompt for GitHub token (first time)
2. Enter a GitHub PAT with repo write access
3. Select some text in the article
4. Tooltip should appear with Important / Exam / Trap buttons
5. Click one — text highlights immediately, toast shows "Committing..." then "Committed ✓"
6. Check GitHub repo — new commit with highlight should appear
7. After rebuild, the highlight persists on page reload
