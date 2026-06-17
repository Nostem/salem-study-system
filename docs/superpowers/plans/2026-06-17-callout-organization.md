# Callout Organization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reorganize backfill callouts (`callout-exam`/`callout-jpm`/`callout-scenario`) in 319 wiki articles so each is grouped by subtopic and anchored beneath its applicable subsection (issue #70).

**Architecture:** One-time, LLM-assisted, per-article migration. A throwaway Python guard verifies each edited file is a pure block-reordering (callout-block multiset byte-identical before/after). Rollout is six batched PRs, one per wiki folder. Both ingestion skills get a placement rule so future backfills self-organize. No durable scripts.

**Tech Stack:** Markdown wiki + Astro static site; Python 3 (system `python3`) for the guard; `scripts/check-wikilinks.py`; `npm run build` (Astro).

**Spec:** `docs/superpowers/specs/2026-06-17-callout-organization-design.md`

---

## File Structure

- `scripts/_callout_migration_guard.py` — **NEW, throwaway.** Verifies a file's callout-block multiset is unchanged between `HEAD` and the working tree. Deleted in the final task.
- `wiki/**/*.md` — **MODIFIED.** Backfill callouts repositioned/grouped. Inner HTML of each callout preserved byte-for-byte. Only additions: `**Exam & operating coverage:**` lead-in lines and, for orphans, `## Exam & Operating Coverage` / `###` headings.
- `/Users/fredm/.claude/skills/salem-exam-ingestion/SKILL.md` — **MODIFIED.** Step 5 gains the placement rule.
- `/Users/fredm/.claude/skills/salem-operating-test-ingestion/SKILL.md` — **MODIFIED.** Backfill step gains the placement rule.

**Branch model (per CLAUDE.md):** one branch+PR per batch off latest `main`. Stage exact files only — never `git add .`. The design-spec branch `callout-organization-design` (already pushed) can carry Task 1–3; or fold Tasks 1–3 into PR 1's branch. This plan assumes Tasks 1–3 ship on PR 1's branch.

---

## Task 1: Build the migration guard

**Files:**
- Create: `scripts/_callout_migration_guard.py`

**Branch:** Do Tasks 1–4 on one branch. Create it first:
`git checkout main && git pull --ff-only && git checkout -b callout-org-systems`

The guard extracts every callout `<div>` block (depth-counted over `<div>`/`</div>`, which handles the single nested `callout-label` div) from two versions of a file and asserts the **multiset of block texts is identical**. Position/order changes are allowed; content drops or mutations are not. Non-callout text (lead-ins, new headings) is intentionally ignored — `npm run build` and the wikilink check cover the rest.

- [ ] **Step 1: Write the guard script**

```python
#!/usr/bin/env python3
"""THROWAWAY migration guard for issue #70 (callout reorganization).

Verifies that an edited wiki article changed ONLY the position/order of callout
blocks, never their content. Compares the multiset of callout <div> blocks between
the git HEAD version and the working-tree version of each file.

Delete this script when issue #70 is closed (see plan Task 10).

Usage:
    python3 scripts/_callout_migration_guard.py wiki/systems/foo.md [more.md ...]
Exit 0 = all files OK (pure reordering). Exit 1 = a block was added/removed/mutated.
"""
import subprocess
import sys
from collections import Counter


def extract_callout_blocks(text: str) -> list[str]:
    """Return the full text of each top-level <div class="callout ..."> block.

    Depth-counts <div / </div> so the nested callout-label div does not end a block.
    """
    lines = text.splitlines()
    blocks, cur, depth = [], [], 0
    for line in lines:
        opens = line.count("<div")
        closes = line.count("</div>")
        if depth == 0 and 'class="callout callout-' in line:
            cur = [line]
            depth = opens - closes
            if depth <= 0:  # pathological single-line block
                blocks.append("\n".join(cur))
                cur, depth = [], 0
            continue
        if depth > 0:
            cur.append(line)
            depth += opens - closes
            if depth <= 0:
                blocks.append("\n".join(cur))
                cur, depth = [], 0
    return blocks


def head_version(path: str) -> str:
    return subprocess.run(
        ["git", "show", f"HEAD:{path}"], capture_output=True, text=True, check=True
    ).stdout


def check(path: str) -> bool:
    before = Counter(extract_callout_blocks(head_version(path)))
    with open(path, encoding="utf-8") as fh:
        after = Counter(extract_callout_blocks(fh.read()))
    if before == after:
        print(f"OK   {path}  ({sum(before.values())} callout blocks, unchanged)")
        return True
    removed = before - after
    added = after - before
    print(f"FAIL {path}")
    for blk, n in removed.items():
        print(f"  -- REMOVED/MUTATED ({n}x): {blk.splitlines()[1] if len(blk.splitlines())>1 else blk[:80]}")
    for blk, n in added.items():
        print(f"  ++ ADDED/MUTATED   ({n}x): {blk.splitlines()[1] if len(blk.splitlines())>1 else blk[:80]}")
    return False


def main() -> int:
    ok = True
    for path in sys.argv[1:]:
        ok = check(path) and ok
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
```

- [ ] **Step 2: Self-test — unchanged file passes**

Run (a file that is committed and not yet edited must report OK with its block count):
```bash
python3 scripts/_callout_migration_guard.py wiki/systems/reactor-coolant-pumps.md
```
Expected: `OK   wiki/systems/reactor-coolant-pumps.md  (NN callout blocks, unchanged)` and exit 0. (NN should equal `grep -c 'class="callout callout-' wiki/systems/reactor-coolant-pumps.md`.)

- [ ] **Step 3: Self-test — mutation fails**

Temporarily mutate one callout body, then run the guard:
```bash
cp wiki/systems/reactor-coolant-pumps.md /tmp/rcp.bak
perl -0pi -e 's/3 gph/3 GPH-MUTATED/' wiki/systems/reactor-coolant-pumps.md
python3 scripts/_callout_migration_guard.py wiki/systems/reactor-coolant-pumps.md; echo "exit=$?"
cp /tmp/rcp.bak wiki/systems/reactor-coolant-pumps.md
```
Expected: `FAIL` with one `REMOVED/MUTATED` and one `ADDED/MUTATED` line, `exit=1`. The restore returns the file to clean.

- [ ] **Step 4: Verify clean working tree after self-tests**

Run: `git status --short wiki/systems/reactor-coolant-pumps.md`
Expected: no output (the file is back to its committed state).

- [ ] **Step 5: Commit**

```bash
git add scripts/_callout_migration_guard.py
git commit -m "chore(#70): add throwaway callout-migration guard"
```

---

## Task 2: Define the canonical per-article migration contract

**Files:** none modified (this task records the reusable subagent prompt used by Tasks 4–9).

This is the exact prompt dispatched to one subagent per article. It is intentionally narrow (block movement only). Reuse verbatim, substituting `{FILE}`.

- [ ] **Step 1: Record the migration contract**

> **Migration contract (one subagent per article):**
>
> You are reorganizing the backfill callouts in a single Salem wiki article: `{FILE}`.
> Read the design spec `docs/superpowers/specs/2026-06-17-callout-organization-design.md` first.
>
> **What to change — ONLY this:**
> 1. Identify every `callout-exam`, `callout-jpm`, and `callout-scenario` block.
> 2. For each, read its BODY (not its label) and decide which existing `##`/`###` heading in
>    THIS file it is topically about.
> 3. Move it to the END of that subsection's content (after the prose / `callout-important` /
>    `callout-bases` / `callout-trap` blocks, immediately before the next heading).
> 4. Group all backfill callouts that share a subsection together, led by one bold line
>    `**Exam & operating coverage:**` placed once above the group.
> 5. Order within a group: exam → jpm → scenario; within each type ascending by year then
>    question/JPM id.
> 6. Orphans (no matching heading, or the article has no usable subsections): put them in one
>    `## Exam & Operating Coverage` section placed immediately ABOVE `## Connections`, grouped
>    by subtopic with `###` sub-headings.
>
> **Hard constraints:**
> - Do NOT alter the inner HTML of any callout — not one character. No rewording, no value
>   edits, no re-summarizing. You are MOVING blocks, not editing them.
> - Do NOT move or modify `callout-important`, `callout-bases`, `callout-trap`, or any
>   non-backfill callout. Leave them where they are.
> - Do NOT touch the `## Connections` section, frontmatter, or reference prose.
> - The only NEW text you may add is the `**Exam & operating coverage:**` lead-in lines and
>   (for orphans only) `## Exam & Operating Coverage` / `###` sub-headings.
> - If the article's backfill callouts are already correctly placed and grouped, make NO change.
>
> **Self-check before returning:** run
> `python3 scripts/_callout_migration_guard.py {FILE}` — it MUST print `OK`. If it prints
> `FAIL`, you mutated or dropped a callout; fix it so every callout block is byte-identical to
> before, only repositioned.

- [ ] **Step 2: No commit** (documentation step; the contract lives in this plan).

---

## Task 3: Add the placement rule to both ingestion skills

**Files:**
- Modify: `/Users/fredm/.claude/skills/salem-exam-ingestion/SKILL.md` (Step 5 — Backfill)
- Modify: `/Users/fredm/.claude/skills/salem-operating-test-ingestion/SKILL.md` (Step 5 — Backfill)

- [ ] **Step 1: Locate the backfill rules block in salem-exam-ingestion**

Run: `grep -n "Backfill rules" /Users/fredm/.claude/skills/salem-exam-ingestion/SKILL.md`
Expected: a line number for the `**Backfill rules:**` bullet list.

- [ ] **Step 2: Insert the placement rule (salem-exam-ingestion)**

Add this bullet to the `**Backfill rules:**` list (after the existing "If there's a conflict" bullet):

```markdown
- **Placement (issue #70):** Put each new backfill callout at the END of the topically-matching
  `##`/`###` subsection, joined to that subsection's existing `**Exam & operating coverage:**`
  group (create the bold lead-in line if the group does not exist yet). NEVER append callouts to
  a generic pile, the bottom of the article, or a catch-all section when a topical subsection
  exists. Only if no subsection fits, use the article's `## Exam & Operating Coverage` section
  (just above `## Connections`), grouped by subtopic with `###` sub-headings.
```

- [ ] **Step 3: Insert the same rule in salem-operating-test-ingestion**

Run: `grep -n "Backfill" /Users/fredm/.claude/skills/salem-operating-test-ingestion/SKILL.md`
Add the identical bullet (verbatim from Step 2) to its Step 5 backfill rules.

- [ ] **Step 4: Commit**

```bash
git add /Users/fredm/.claude/skills/salem-exam-ingestion/SKILL.md /Users/fredm/.claude/skills/salem-operating-test-ingestion/SKILL.md
git commit -m "docs(skills): callout placement rule for backfills (#70)"
```
Note: these skill files are outside the repo working tree. If `git add` reports them as outside the repository, commit them in their own home instead; they are global skills, not repo files. Record that they were updated.

---

## Per-batch procedure (used by Tasks 4–9)

Each batch is one folder = one branch + one PR off the latest `main`. The procedure:

1. Branch: `git checkout main && git pull && git checkout -b callout-org-<folder>`.
   (PR 1 / `systems` also carries Tasks 1–3.)
2. Build the worst-first file list for the folder:
   `for f in wiki/<folder>/*.md; do printf "%s %s\n" "$(grep -c 'class=\"callout callout-\(exam\|jpm\|scenario\)' "$f")" "$f"; done | sort -rn | awk '$1>0'`
3. Dispatch subagents using the Task 2 contract, one per file (parallel batches of ~6–8),
   worst-first. Each subagent self-checks with the guard.
4. After each wave, run the guard over the whole folder:
   `python3 scripts/_callout_migration_guard.py wiki/<folder>/*.md`
   Every line must be `OK`. Investigate any `FAIL` before continuing.
5. `python3 scripts/check-wikilinks.py` → 0 broken.
6. `grep -rlE "</content>|</invoke>" wiki/<folder>` → empty (tool-tag sweep).
7. `cd site && npm run build` → clean; then `cd ..`.
8. Stage exact files: `git add wiki/<folder>` (plus Tasks 1–3 files on PR 1). Never `git add .`.
9. Commit + push + open PR to `main` with a body summarizing files touched and callouts moved.
10. After merge, rebase the next batch onto fresh `main`.

---

## Task 4: PR 1 — systems (49 files, 1190 callouts) + Tasks 1–3

**Files:** `wiki/systems/*.md`, plus Task 1 + Task 3 files.

- [ ] **Step 1: Confirm branch**

The `callout-org-systems` branch was created in Task 1 and already carries the guard (Task 1) and the skill placement rule (Task 3). Verify: `git branch --show-current` → `callout-org-systems`.

**Sub-split option (per spec §6):** if the final `wiki/systems` diff is too large to review in one PR, split into two PRs by filename — `wiki/systems/[a-m]*.md` then `wiki/systems/[n-z]*.md` — each running Steps 4–7 on its own branch.

- [ ] **Step 2: Generate the worst-first list**
```bash
for f in wiki/systems/*.md; do printf "%s %s\n" "$(grep -c 'class="callout callout-\(exam\|jpm\|scenario\)' "$f")" "$f"; done | sort -rn | awk '$1>0'
```
Expected: `chemical-and-volume-control-system.md` (~52 dump), `emergency-core-cooling-systems.md`, `rps-ssps.md`, … at the top.

- [ ] **Step 3: Migrate, worst-first, in parallel waves of ~6–8**

Dispatch the Task 2 contract per file. Each subagent must end with a passing guard self-check.

- [ ] **Step 4: Folder-wide guard**
```bash
python3 scripts/_callout_migration_guard.py wiki/systems/*.md
```
Expected: every line `OK`, exit 0.

- [ ] **Step 5: Link + artifact + build checks**
```bash
python3 scripts/check-wikilinks.py
grep -rlE "</content>|</invoke>" wiki/systems || echo "no tool-tag artifacts"
cd site && npm run build && cd ..
```
Expected: 0 broken links; no artifacts; build clean.

- [ ] **Step 6: Spot-review one heavy file by eye**

Open `wiki/systems/chemical-and-volume-control-system.md` and confirm the former 52-callout dump is now distributed under topical headings with `**Exam & operating coverage:**` lead-ins. Confirm reference prose and `callout-important`/`callout-bases` are untouched.

- [ ] **Step 7: Commit + push + PR**
```bash
git add wiki/systems scripts/_callout_migration_guard.py
git commit -m "refactor(#70): organize backfill callouts under subsections — systems"
git push -u origin callout-org-systems
gh pr create --base main --title "Organize backfill callouts — systems (#70)" --body "$(cat <<'EOF'
Part 1/6 of issue #70. Reorganizes exam/jpm/scenario callouts in wiki/systems into
subtopic groups anchored under their applicable subsections. Pure block movement —
verified by scripts/_callout_migration_guard.py (callout-block multiset byte-identical).
Also adds the migration guard and the skill placement rule.

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

---

## Task 5: PR 2 — tech-specs (17 files, 121 callouts)

**Files:** `wiki/tech-specs/*.md`.

- [ ] **Step 1: Branch** `git checkout main && git pull --ff-only && git checkout -b callout-org-tech-specs`
- [ ] **Step 2: Worst-first list**
```bash
for f in wiki/tech-specs/*.md; do printf "%s %s\n" "$(grep -c 'class="callout callout-\(exam\|jpm\|scenario\)' "$f")" "$f"; done | sort -rn | awk '$1>0'
```
- [ ] **Step 3: Migrate per Task 2 contract (waves of ~6–8).** Note: many tech-spec articles are already well-organized (e.g. `ts-3-4-4-rcs.md`) and should be no-ops.
- [ ] **Step 4: Guard** `python3 scripts/_callout_migration_guard.py wiki/tech-specs/*.md` → all `OK`.
- [ ] **Step 5: Checks** `python3 scripts/check-wikilinks.py` (0 broken); `grep -rlE "</content>|</invoke>" wiki/tech-specs || echo none`; `cd site && npm run build && cd ..` (clean).
- [ ] **Step 6: Commit + push + PR**
```bash
git add wiki/tech-specs
git commit -m "refactor(#70): organize backfill callouts under subsections — tech-specs"
git push -u origin callout-org-tech-specs
gh pr create --base main --title "Organize backfill callouts — tech-specs (#70)" --body "Part 2/6 of #70. Pure block movement, guard-verified.

🤖 Generated with [Claude Code](https://claude.com/claude-code)"
```

---

## Task 6: PR 3 — eops (38 files, 390 callouts)

**Files:** `wiki/eops/*.md`.

- [ ] **Step 1: Branch** `git checkout main && git pull --ff-only && git checkout -b callout-org-eops`
- [ ] **Step 2: Worst-first list**
```bash
for f in wiki/eops/*.md; do printf "%s %s\n" "$(grep -c 'class="callout callout-\(exam\|jpm\|scenario\)' "$f")" "$f"; done | sort -rn | awk '$1>0'
```
- [ ] **Step 3: Migrate per Task 2 contract (waves of ~6–8).**
- [ ] **Step 4: Guard** `python3 scripts/_callout_migration_guard.py wiki/eops/*.md` → all `OK`.
- [ ] **Step 5: Checks** `python3 scripts/check-wikilinks.py`; `grep -rlE "</content>|</invoke>" wiki/eops || echo none`; `cd site && npm run build && cd ..`.
- [ ] **Step 6: Commit + push + PR**
```bash
git add wiki/eops
git commit -m "refactor(#70): organize backfill callouts under subsections — eops"
git push -u origin callout-org-eops
gh pr create --base main --title "Organize backfill callouts — eops (#70)" --body "Part 3/6 of #70. Pure block movement, guard-verified.

🤖 Generated with [Claude Code](https://claude.com/claude-code)"
```

---

## Task 7: PR 4 — abnormals (54 files, 400 callouts)

**Files:** `wiki/abnormals/*.md`.

- [ ] **Step 1: Branch** `git checkout main && git pull --ff-only && git checkout -b callout-org-abnormals`
- [ ] **Step 2: Worst-first list**
```bash
for f in wiki/abnormals/*.md; do printf "%s %s\n" "$(grep -c 'class="callout callout-\(exam\|jpm\|scenario\)' "$f")" "$f"; done | sort -rn | awk '$1>0'
```
- [ ] **Step 3: Migrate per Task 2 contract (waves of ~6–8).**
- [ ] **Step 4: Guard** `python3 scripts/_callout_migration_guard.py wiki/abnormals/*.md` → all `OK`.
- [ ] **Step 5: Checks** `python3 scripts/check-wikilinks.py`; `grep -rlE "</content>|</invoke>" wiki/abnormals || echo none`; `cd site && npm run build && cd ..`.
- [ ] **Step 6: Commit + push + PR**
```bash
git add wiki/abnormals
git commit -m "refactor(#70): organize backfill callouts under subsections — abnormals"
git push -u origin callout-org-abnormals
gh pr create --base main --title "Organize backfill callouts — abnormals (#70)" --body "Part 4/6 of #70. Pure block movement, guard-verified.

🤖 Generated with [Claude Code](https://claude.com/claude-code)"
```

---

## Task 8: PR 5 — admin (51 files, 168 callouts)

**Files:** `wiki/admin/*.md`.

- [ ] **Step 1: Branch** `git checkout main && git pull --ff-only && git checkout -b callout-org-admin`
- [ ] **Step 2: Worst-first list**
```bash
for f in wiki/admin/*.md; do printf "%s %s\n" "$(grep -c 'class="callout callout-\(exam\|jpm\|scenario\)' "$f")" "$f"; done | sort -rn | awk '$1>0'
```
- [ ] **Step 3: Migrate per Task 2 contract (waves of ~6–8).**
- [ ] **Step 4: Guard** `python3 scripts/_callout_migration_guard.py wiki/admin/*.md` → all `OK`.
- [ ] **Step 5: Checks** `python3 scripts/check-wikilinks.py`; `grep -rlE "</content>|</invoke>" wiki/admin || echo none`; `cd site && npm run build && cd ..`.
- [ ] **Step 6: Commit + push + PR**
```bash
git add wiki/admin
git commit -m "refactor(#70): organize backfill callouts under subsections — admin"
git push -u origin callout-org-admin
gh pr create --base main --title "Organize backfill callouts — admin (#70)" --body "Part 5/6 of #70. Pure block movement, guard-verified.

🤖 Generated with [Claude Code](https://claude.com/claude-code)"
```

---

## Task 9: PR 6 — procedures (110 files, 321 callouts)

**Files:** `wiki/procedures/*.md`.

- [ ] **Step 1: Branch** `git checkout main && git pull --ff-only && git checkout -b callout-org-procedures`
- [ ] **Step 2: Worst-first list**
```bash
for f in wiki/procedures/*.md; do printf "%s %s\n" "$(grep -c 'class="callout callout-\(exam\|jpm\|scenario\)' "$f")" "$f"; done | sort -rn | awk '$1>0'
```
- [ ] **Step 3: Migrate per Task 2 contract (waves of ~6–8).** 110 files — expect several waves.
- [ ] **Step 4: Guard** `python3 scripts/_callout_migration_guard.py wiki/procedures/*.md` → all `OK`.
- [ ] **Step 5: Checks** `python3 scripts/check-wikilinks.py`; `grep -rlE "</content>|</invoke>" wiki/procedures || echo none`; `cd site && npm run build && cd ..`.
- [ ] **Step 6: Commit + push + PR**
```bash
git add wiki/procedures
git commit -m "refactor(#70): organize backfill callouts under subsections — procedures"
git push -u origin callout-org-procedures
gh pr create --base main --title "Organize backfill callouts — procedures (#70)" --body "Part 6/6 of #70. Pure block movement, guard-verified.

🤖 Generated with [Claude Code](https://claude.com/claude-code)"
```

---

## Task 10: Remove the throwaway guard and close the issue

**Files:**
- Delete: `scripts/_callout_migration_guard.py`

- [ ] **Step 1: Branch** `git checkout main && git pull --ff-only && git checkout -b callout-org-cleanup`
- [ ] **Step 2: Remove the guard** `git rm scripts/_callout_migration_guard.py`
- [ ] **Step 3: Confirm no references remain** `grep -rn "_callout_migration_guard" . --include=*.md --include=*.yml --include=*.py | grep -v docs/superpowers || echo "no stray references"`
- [ ] **Step 4: README sweep (per CLAUDE.md):** review `README.md`; the callout reorg does not change scope/counts/commands, so likely no edit — confirm and note.
- [ ] **Step 5: Commit + push + PR**
```bash
git add -A
git commit -m "chore(#70): remove throwaway callout-migration guard"
git push -u origin callout-org-cleanup
gh pr create --base main --title "Remove callout-migration guard; close #70" --body "Final step of #70. Removes the throwaway guard now that all six batches are merged. Closes #70.

🤖 Generated with [Claude Code](https://claude.com/claude-code)"
```
- [ ] **Step 6: After merge,** confirm issue #70 auto-closed (or `gh issue close 70`).

---

## Notes for the executor

- **System `python3`** for the guard (no third-party imports; stdlib only).
- **Quiz-bank gate is irrelevant** here — no question articles change, so the four generated quiz files stay untouched. Do not regenerate them.
- **If a subagent reports a `FAIL`** it could not resolve, do not merge that file; re-dispatch with the diff so it restores the mutated callout verbatim from `HEAD`.
- **Already-organized files are expected no-ops** — a wave producing zero diffs for some files is normal, especially in tech-specs.
