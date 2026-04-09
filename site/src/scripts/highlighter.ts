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

    const rawSelectedText = selection.toString().trim();
    if (!rawSelectedText) return;
    // Strip list markers that browsers prepend from <ol>/<ul> selections (e.g., "1. ", "2. ", "• ")
    const selectedText = rawSelectedText.replace(/^(\d+\.\s+|[•●◦▪]\s+)/gm, '');

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
      // surroundContents fails if selection crosses node boundaries
      // Use extractContents + insertNode as a more robust alternative
      const contents = range.extractContents();
      span.appendChild(contents);
      range.insertNode(span);
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

    console.log('[Highlighter] Selected text:', JSON.stringify(selectedText));
    console.log('[Highlighter] Context before:', JSON.stringify(contextBefore));
    console.log('[Highlighter] Context after:', JSON.stringify(contextAfter));
    const result = await commitHighlight(slug!, selectedText, highlightClass, token, contextBefore, contextAfter);
    toast.remove();

    if (result === true) {
      showToast('Committed ✓', 'success');
    } else {
      span.outerHTML = span.innerHTML;
      showToast(`Commit failed: ${result}`, 'error');
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
): Promise<true | string> {
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
    if (!getRes.ok) return `API read failed (${getRes.status})`;

    const fileData = await getRes.json();
    const sha = fileData.sha;
    const content = decodeBase64(fileData.content);

    // Build index map for the entire file
    const { text: stripped, map } = buildIndexMap(content);

    // Find the selected text using the map
    const index = findTextInMarkdown(content, selectedText, contextBefore, contextAfter);
    if (index === -1) return `Text not found in source: "${selectedText.substring(0, 40)}..."`;

    // Check if already wrapped in a highlight span in the markdown source
    const before = content.substring(Math.max(0, index - 50), index);
    if (/class="(hi|hi-exam|hi-trap|val-normal|val-alarm|val-trip)">[^<]*$/.test(before)) {
      return 'Already highlighted';
    }

    // Find the end position in the original source
    // Walk forward from index, counting plain text chars, skipping HTML tags
    let endIndex = index;
    let plainChars = 0;
    while (endIndex < content.length && plainChars < selectedText.length) {
      if (content[endIndex] === '<') {
        const closeIdx = content.indexOf('>', endIndex);
        if (closeIdx !== -1) { endIndex = closeIdx + 1; } else { endIndex++; }
      } else {
        plainChars++;
        endIndex++;
      }
    }

    const originalSpan = content.substring(index, endIndex);

    // Check if the span crosses existing highlight tags — reject if so
    const existingHighlights = originalSpan.match(/class="(hi|hi-exam|hi-trap|val-normal|val-alarm|val-trip)"/g);
    if (existingHighlights) {
      return 'Selection crosses existing highlights';
    }

    const wrapped = `<span class="${highlightClass}">${originalSpan}</span>`;
    const newContent = content.substring(0, index) + wrapped + content.substring(endIndex);

    // Commit
    const label = HIGHLIGHT_TYPES[highlightClass] || highlightClass;
    const shortText = selectedText.substring(0, 40).replace(/[\n\r"\\]/g, ' ').trim();
    const message = `highlight: mark as ${label}`;

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

    if (!putRes.ok) return `API write failed (${putRes.status})`;
    return true;
  } catch (e) {
    return `Error: ${e instanceof Error ? e.message : String(e)}`;
  }
}

// --- Index Map: the core of reliable source mapping ---
// Builds a character-level map: indexMap[strippedPos] = originalPos
// This is the approach recommended by W3C Web Annotation / Hypothesis
function buildIndexMap(source: string): { text: string; map: number[] } {
  const map: number[] = [];
  const chars: string[] = [];
  let inTag = false;

  for (let i = 0; i < source.length; i++) {
    if (source[i] === '<' && !inTag) {
      inTag = true;
      continue;
    }
    if (source[i] === '>' && inTag) {
      inTag = false;
      continue;
    }
    if (inTag) continue;

    map.push(i);
    chars.push(source[i]);
  }

  return { text: chars.join(''), map };
}

function normalizeWhitespace(str: string): string {
  return str.replace(/\s+/g, ' ').trim();
}

function findTextInMarkdown(
  markdown: string,
  selectedText: string,
  contextBefore: string = '',
  contextAfter: string = '',
): number {
  // Strategy 1: Direct indexOf on raw markdown (plain text, no HTML involved)
  const directIdx = markdown.indexOf(selectedText);
  if (directIdx !== -1) return directIdx;

  // Strategy 2: Index-mapped search (handles inline HTML)
  // Build the map once, use it for all searches
  const { text: stripped, map } = buildIndexMap(markdown);

  // 2a: Exact match in stripped text
  const results = findAllOccurrences(stripped, selectedText);

  // 2b: If no exact match, try whitespace-normalized
  let normResults: number[] = [];
  if (results.length === 0) {
    const normSelected = normalizeWhitespace(selectedText);
    const normStripped = normalizeWhitespace(stripped);
    const normIdx = normStripped.indexOf(normSelected);
    if (normIdx !== -1) {
      // Map normalized index back to stripped index
      // Walk stripped text normalizing whitespace to find the position
      let normCount = 0;
      let strippedPos = 0;
      let inWs = false;
      // Skip leading whitespace to match trim()
      while (strippedPos < stripped.length && /\s/.test(stripped[strippedPos])) strippedPos++;
      while (strippedPos < stripped.length && normCount < normIdx) {
        if (/\s/.test(stripped[strippedPos])) {
          if (!inWs) { normCount++; inWs = true; }
        } else {
          normCount++;
          inWs = false;
        }
        strippedPos++;
      }
      normResults.push(strippedPos);
    }
  }

  const allResults = results.length > 0 ? results : normResults;
  if (allResults.length === 0) return -1;

  // Disambiguate using prefix/suffix context
  let bestStrippedIdx = allResults[0];
  if (allResults.length > 1) {
    let bestScore = -1;
    for (const idx of allResults) {
      let score = 0;
      if (contextBefore) {
        const before = stripped.substring(Math.max(0, idx - contextBefore.length), idx);
        for (let i = 0; i < Math.min(contextBefore.length, before.length); i++) {
          if (contextBefore[contextBefore.length - 1 - i] === before[before.length - 1 - i]) score++;
          else break;
        }
      }
      if (contextAfter) {
        const after = stripped.substring(idx + selectedText.length, idx + selectedText.length + contextAfter.length);
        for (let i = 0; i < Math.min(contextAfter.length, after.length); i++) {
          if (contextAfter[i] === after[i]) score++;
          else break;
        }
      }
      if (score > bestScore) { bestScore = score; bestStrippedIdx = idx; }
    }
  }

  // Map stripped position back to original source position using the index map
  if (bestStrippedIdx < map.length) {
    return map[bestStrippedIdx];
  }

  return -1;
}

function findAllOccurrences(text: string, search: string): number[] {
  const results: number[] = [];
  let from = 0;
  while (true) {
    const idx = text.indexOf(search, from);
    if (idx === -1) break;
    results.push(idx);
    from = idx + 1;
  }
  return results;
}

// Only normalize invisible Unicode variants — do NOT change visible characters
// like em-dashes, as the source markdown contains them literally
function normalizeQuotes(str: string): string {
  return str
    .replace(/[\u2018\u2019\u201A\u201B]/g, "'")  // curly single quotes → straight
    .replace(/[\u201C\u201D\u201E\u201F]/g, '"');  // curly double quotes → straight
    // NOTE: do NOT convert en-dash/em-dash — they exist literally in the source
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
