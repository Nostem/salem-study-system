// Inline Highlighter — edit mode with GitHub API commit
const REPO_OWNER = 'Nostem';
const REPO_NAME = 'salem-study-system';
const TOKEN_KEY = 'github-token';
const HIGHLIGHT_TYPES: Record<string, string> = {
  'hi': 'important',
  'hi-exam': 'exam-tested',
  'hi-trap': 'exam-trap',
  'val-normal': 'normal-operating',
  'val-alarm': 'alarm-setpoint',
  'val-trip': 'trip-setpoint',
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
  // Not an article page or components missing — bail
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
    let token = getToken();
    if (!token) {
      token = await promptForToken();
      if (!token) return;
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

  const range = selection.getRangeAt(0);
  if (!proseEl.contains(range.commonAncestorContainer)) {
    tooltip.classList.add('hidden');
    return;
  }

  const selectedText = selection.toString().trim();
  if (!selectedText) {
    tooltip.classList.add('hidden');
    return;
  }

  // Check if already highlighted — walk up ancestors to catch nested spans
  const highlightClasses = ['hi', 'hi-exam', 'hi-trap', 'val-normal', 'val-alarm', 'val-trip'];
  let ancestor: Element | null = range.commonAncestorContainer.parentElement;
  while (ancestor && ancestor !== proseEl) {
    if (highlightClasses.some(c => ancestor!.classList.contains(c))) {
      showToast('Already highlighted', 'error');
      tooltip.classList.add('hidden');
      return;
    }
    ancestor = ancestor.parentElement;
  }

  // Position tooltip below the selection (so it doesn't block the highlighted text)
  const rect = range.getBoundingClientRect();
  const tooltipWidth = 240;
  const tooltipHeight = 76;
  let left = rect.left + (rect.width / 2) - (tooltipWidth / 2);
  left = Math.max(8, Math.min(left, window.innerWidth - tooltipWidth - 8));
  let top = rect.bottom + 8;
  // If not enough room below, put it above with enough clearance
  if (top + tooltipHeight > window.innerHeight - 8) {
    top = rect.top - tooltipHeight - 8;
  }

  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
  tooltip.classList.remove('hidden');
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

    // Capture surrounding context BEFORE optimistic DOM update
    // This helps disambiguate when the same text appears multiple times
    const textNode = range.startContainer;
    const fullText = textNode.textContent || '';
    const contextBefore = fullText.substring(Math.max(0, range.startOffset - 30), range.startOffset);
    const contextAfter = fullText.substring(range.endOffset, Math.min(fullText.length, range.endOffset + 30));

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
      span.outerHTML = span.innerHTML;
      toast.remove();
      showToast('No GitHub token — enter one to save highlights', 'error');
      return;
    }

    const success = await commitHighlight(slug!, selectedText, highlightClass, token, contextBefore, contextAfter);
    toast.remove();

    if (success) {
      showToast('Committed ✓', 'success');
    } else {
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
  contextBefore: string = '',
  contextAfter: string = '',
): Promise<boolean> {
  const filePath = `wiki/${slug}.md`;
  const apiBase = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`;
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
  };

  try {
    // Read current file
    const getRes = await fetch(apiBase, { headers });
    if (!getRes.ok) return false;

    const fileData = await getRes.json();
    const sha = fileData.sha;
    const content = decodeBase64(fileData.content);

    // Find the selected text in the markdown using surrounding context to disambiguate
    const index = findTextInMarkdown(content, selectedText, contextBefore, contextAfter);
    if (index === -1) return false;

    // Check if already wrapped in a highlight span in the markdown source
    const before = content.substring(Math.max(0, index - 50), index);
    if (/class="(hi|hi-exam|hi-trap|val-normal|val-alarm|val-trip)">[^<]*$/.test(before)) {
      return false; // Already highlighted in source
    }

    // Wrap with highlight span
    const wrapped = `<span class="${highlightClass}">${selectedText}</span>`;
    const newContent = content.substring(0, index) + wrapped + content.substring(index + selectedText.length);

    // Commit
    const label = HIGHLIGHT_TYPES[highlightClass] || highlightClass;
    const shortText = selectedText.length > 50 ? selectedText.substring(0, 50) + '...' : selectedText;
    const message = `highlight: mark "${shortText}" as ${label}`;

    const putRes = await fetch(apiBase, {
      method: 'PUT',
      headers,
      body: JSON.stringify({
        message,
        content: encodeBase64(newContent),
        sha,
      }),
    });

    if (putRes.status === 409) {
      // Stale SHA — retry once
      return commitHighlight(slug, selectedText, highlightClass, token, contextBefore, contextAfter);
    }

    return putRes.ok;
  } catch {
    return false;
  }
}

function findTextInMarkdown(markdown: string, selectedText: string, contextBefore: string = '', contextAfter: string = ''): number {
  // Strip HTML tags from markdown for plain text matching (handles already-highlighted text)
  const stripped = markdown.replace(/<[^>]+>/g, '');

  // Find all occurrences of the selected text in the stripped version
  const occurrences: number[] = [];
  let searchFrom = 0;
  while (true) {
    const idx = stripped.indexOf(selectedText, searchFrom);
    if (idx === -1) break;
    occurrences.push(idx);
    searchFrom = idx + 1;
  }

  if (occurrences.length === 0) return -1;

  // If only one occurrence, find its position in the original markdown
  if (occurrences.length === 1) {
    return findOriginalIndex(markdown, stripped, occurrences[0], selectedText);
  }

  // Multiple occurrences — use context to disambiguate
  let bestIdx = occurrences[0];
  let bestScore = -1;

  for (const idx of occurrences) {
    let score = 0;
    if (contextBefore) {
      const beforeInStripped = stripped.substring(Math.max(0, idx - contextBefore.length), idx);
      // Count matching characters from the end of contextBefore
      for (let i = 0; i < Math.min(contextBefore.length, beforeInStripped.length); i++) {
        if (contextBefore[contextBefore.length - 1 - i] === beforeInStripped[beforeInStripped.length - 1 - i]) {
          score++;
        } else {
          break;
        }
      }
    }
    if (contextAfter) {
      const afterInStripped = stripped.substring(idx + selectedText.length, idx + selectedText.length + contextAfter.length);
      for (let i = 0; i < Math.min(contextAfter.length, afterInStripped.length); i++) {
        if (contextAfter[i] === afterInStripped[i]) {
          score++;
        } else {
          break;
        }
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestIdx = idx;
    }
  }

  return findOriginalIndex(markdown, stripped, bestIdx, selectedText);
}

function findOriginalIndex(markdown: string, stripped: string, strippedIdx: number, selectedText: string): number {
  // Map stripped index back to original markdown index
  // Walk through the original markdown, skipping HTML tags, counting plain text chars
  let plainCount = 0;
  let i = 0;
  while (i < markdown.length && plainCount < strippedIdx) {
    if (markdown[i] === '<') {
      // Skip HTML tag
      const closeIdx = markdown.indexOf('>', i);
      if (closeIdx !== -1) {
        i = closeIdx + 1;
      } else {
        i++;
      }
    } else {
      plainCount++;
      i++;
    }
  }

  // Verify the text matches at this position (it might span across tags)
  // Try direct match first
  if (markdown.substring(i, i + selectedText.length) === selectedText) {
    return i;
  }

  // If not a direct match (text might have HTML tags interspersed), fall back to indexOf from this region
  const nearbyStart = Math.max(0, i - 20);
  const nearbyEnd = Math.min(markdown.length, i + selectedText.length + 100);
  const nearbyIdx = markdown.indexOf(selectedText, nearbyStart);
  if (nearbyIdx !== -1 && nearbyIdx < nearbyEnd) {
    return nearbyIdx;
  }

  return -1;
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Base64 helpers that handle UTF-8 properly
function decodeBase64(encoded: string): string {
  const binary = atob(encoded.replace(/\n/g, ''));
  const bytes = Uint8Array.from(binary, c => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function encodeBase64(text: string): string {
  const bytes = new TextEncoder().encode(text);
  const binary = Array.from(bytes, b => String.fromCharCode(b)).join('');
  return btoa(binary);
}
