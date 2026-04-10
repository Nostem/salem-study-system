# Wiki Index Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build `scripts/wiki-index.py` — a SQLite-based query tool that lets the LLM agent efficiently navigate, cross-reference, and conflict-check the wiki.

**Architecture:** Single Python script with subcommands. Parses all `wiki/**/*.md` files, extracts frontmatter, headings, wikilinks, and numeric values, writes to `wiki.db` (SQLite). CLI subcommands query the database. Pre-commit hook rebuilds automatically.

**Tech Stack:** Python 3 stdlib only (sqlite3, re, glob, sys, os, argparse). No external dependencies.

**Spec:** `docs/superpowers/specs/2026-04-09-wiki-index-design.md`

---

### Task 1: Core parser and `rebuild` command with `articles` and `links` tables

**Files:**
- Create: `scripts/wiki-index.py`
- Create: `tests/test_wiki_index.py`

- [ ] **Step 1: Write test for article parsing**

```python
# tests/test_wiki_index.py
import tempfile, os, sqlite3, sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'scripts'))

def make_wiki(tmpdir, files):
    """Create a temporary wiki structure for testing."""
    for relpath, content in files.items():
        fullpath = os.path.join(tmpdir, relpath)
        os.makedirs(os.path.dirname(fullpath), exist_ok=True)
        with open(fullpath, 'w') as f:
            f.write(content)

def test_parse_articles():
    from wiki_index import rebuild_db
    with tempfile.TemporaryDirectory() as tmpdir:
        make_wiki(tmpdir, {
            'wiki/systems/rhr.md': '---\ntitle: RHR\ncategory: systems\nstatus: draft\naliases:\n  - Residual Heat Removal\n  - shutdown cooling\n---\n\n# RHR\n\n## Function\n\nProvides shutdown cooling.\n',
            'wiki/exams/2022/q7-rhr.md': '---\ntitle: "2022 Q7 — RHR Suction"\ncategory: exams\nstatus: draft\naliases:\n  - 2022 Q7\n---\n\n## Connections\n\n- Related systems: [[RHR]]\n',
        })
        db_path = os.path.join(tmpdir, 'wiki.db')
        rebuild_db(os.path.join(tmpdir, 'wiki'), db_path)

        conn = sqlite3.connect(db_path)
        # Check articles table
        rows = conn.execute("SELECT slug, title, category, aliases FROM articles ORDER BY slug").fetchall()
        assert len(rows) == 2
        assert rows[0][0] == 'exams/2022/q7-rhr'
        assert rows[0][1] == '2022 Q7 — RHR Suction'
        assert rows[1][0] == 'systems/rhr'
        assert rows[1][1] == 'RHR'
        assert 'Residual Heat Removal' in rows[1][3]

        # Check links table
        links = conn.execute("SELECT source_slug, target_title, target_slug FROM links").fetchall()
        assert len(links) == 1
        assert links[0][0] == 'exams/2022/q7-rhr'
        assert links[0][1] == 'RHR'
        assert links[0][2] == 'systems/rhr'
        conn.close()
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd /Users/fredm/projects/salem-study-system
python3 -m pytest tests/test_wiki_index.py::test_parse_articles -v
```
Expected: FAIL — `ModuleNotFoundError: No module named 'wiki_index'`

- [ ] **Step 3: Implement `rebuild_db` with articles and links parsing**

```python
#!/usr/bin/env python3
"""Wiki index: SQLite-based query tool for LLM wiki maintenance.

Usage:
    wiki-index.py rebuild              Rebuild wiki.db from markdown files
    wiki-index.py refs <term>          Find articles referencing a term
    wiki-index.py conflicts <val> [u]  Find conflicting values
    wiki-index.py coverage [category]  Find coverage gaps
    wiki-index.py sections <slug>      Show article sections with line ranges
    wiki-index.py backlinks <slug>     Find missing reciprocal links
"""

import argparse, glob, os, re, sqlite3, sys

DB_NAME = 'wiki.db'

def parse_frontmatter(content):
    """Extract title, category, status, and aliases from YAML frontmatter."""
    fm = {}
    m = re.match(r'^---\n(.*?)\n---', content, re.DOTALL)
    if not m:
        return fm
    block = m.group(1)
    fm['title'] = ''
    fm['category'] = ''
    fm['status'] = ''
    fm['aliases'] = []

    title_m = re.search(r'^title:\s*["\']?(.+?)["\']?\s*$', block, re.MULTILINE)
    if title_m:
        fm['title'] = title_m.group(1)
    cat_m = re.search(r'^category:\s*(\S+)', block, re.MULTILINE)
    if cat_m:
        fm['category'] = cat_m.group(1)
    stat_m = re.search(r'^status:\s*(\S+)', block, re.MULTILINE)
    if stat_m:
        fm['status'] = stat_m.group(1)

    in_aliases = False
    for line in block.split('\n'):
        if re.match(r'^aliases:', line):
            in_aliases = True
            continue
        if in_aliases:
            am = re.match(r'^\s+-\s+(.+)$', line)
            if am:
                fm['aliases'].append(am.group(1).strip().strip('"').strip("'"))
            else:
                in_aliases = False
    return fm


def parse_links(content):
    """Extract all [[wikilinks]] with line numbers."""
    links = []
    for i, line in enumerate(content.split('\n'), 1):
        # Skip frontmatter
        if i == 1 and line == '---':
            continue
        for m in re.finditer(r'\[\[([^\]|]+)', line):
            links.append((m.group(1).strip(), i))
    return links


def parse_sections(content):
    """Extract headings with levels and line ranges."""
    sections = []
    lines = content.split('\n')
    for i, line in enumerate(lines, 1):
        m = re.match(r'^(#{2,6})\s+(.+)$', line)
        if m:
            level = len(m.group(1))
            heading = m.group(2).strip()
            sections.append({'heading': heading, 'level': level, 'line_start': i, 'line_end': None})

    # Compute line_end: line before next heading of same or higher level
    for idx, sec in enumerate(sections):
        for next_idx in range(idx + 1, len(sections)):
            if sections[next_idx]['level'] <= sec['level']:
                sec['line_end'] = sections[next_idx]['line_start'] - 1
                break
        if sec['line_end'] is None:
            sec['line_end'] = len(lines)
    return sections


def parse_values(content):
    """Extract numeric values with units from tagged spans and callout-exam blocks."""
    values = []
    lines = content.split('\n')

    for i, line in enumerate(lines, 1):
        # Pass 1: tagged values — <span class="val-trip|val-alarm|val-normal">...</span>
        for m in re.finditer(r'<span class="(val-trip|val-alarm|val-normal)">(.*?)</span>', line):
            css_class = m.group(1)
            raw = m.group(2).strip()
            val_m = re.match(r'([<>≥≤~]?\s*\d+\.?\d*)', raw)
            unit_m = re.search(r'(psig|psia|°F|gpm|%|VDC|KW|MW|BTU/lb|cc/hr|amps|steps)', raw, re.IGNORECASE)
            if val_m:
                context_start = max(0, m.start() - 50)
                context_end = min(len(line), m.end() + 50)
                values.append({
                    'value': val_m.group(1).strip(),
                    'unit': unit_m.group(1) if unit_m else '',
                    'css_class': css_class,
                    'line_number': i,
                    'context': line[context_start:context_end].strip(),
                    'parameter': '',
                    'source_ref': '',
                })

        # Pass 2: untagged values in callout-exam blocks
        if 'callout-exam' in line or 'callout callout-exam' in line:
            # Scan following lines until </div></div> for values
            pass  # Handled below

    # Pass 2: extract from callout-exam block content
    in_callout = False
    for i, line in enumerate(lines, 1):
        if 'callout callout-exam' in line:
            in_callout = True
            continue
        if in_callout and '</div>' in line and line.strip() == '</div>':
            in_callout = False
            continue
        if in_callout:
            # Skip lines that are just the label div
            if 'callout-label' in line:
                continue
            # Extract numeric values with units, excluding those already caught by tagged spans
            for m in re.finditer(r'(?<!["\w])(\d+\.?\d*)\s*(psig|psia|°F|gpm|%|VDC|KW|MW|BTU/lb|cc/hr|amps|steps)\b', line, re.IGNORECASE):
                # Check this isn't inside a val-* span (already caught in pass 1)
                span_check = line[max(0, m.start()-40):m.start()]
                if 'val-trip' in span_check or 'val-alarm' in span_check or 'val-normal' in span_check:
                    continue
                context_start = max(0, m.start() - 50)
                context_end = min(len(line), m.end() + 50)
                values.append({
                    'value': m.group(1),
                    'unit': m.group(2),
                    'css_class': None,
                    'line_number': i,
                    'context': line[context_start:context_end].strip(),
                    'parameter': '',
                    'source_ref': '',
                })

    return values


def rebuild_db(wiki_dir, db_path):
    """Parse all wiki articles and rebuild the SQLite database."""
    conn = sqlite3.connect(db_path)
    conn.execute("DROP TABLE IF EXISTS articles")
    conn.execute("DROP TABLE IF EXISTS links")
    conn.execute("DROP TABLE IF EXISTS sections")
    conn.execute("DROP TABLE IF EXISTS [values]")

    conn.execute("""CREATE TABLE articles (
        slug TEXT PRIMARY KEY, title TEXT NOT NULL, category TEXT,
        status TEXT, path TEXT NOT NULL, aliases TEXT)""")
    conn.execute("""CREATE TABLE links (
        source_slug TEXT NOT NULL, target_title TEXT NOT NULL,
        target_slug TEXT, line_number INTEGER)""")
    conn.execute("""CREATE TABLE sections (
        slug TEXT NOT NULL, heading TEXT NOT NULL, level INTEGER NOT NULL,
        line_start INTEGER NOT NULL, line_end INTEGER)""")
    conn.execute("""CREATE TABLE [values] (
        slug TEXT NOT NULL, parameter TEXT, value TEXT NOT NULL,
        unit TEXT, css_class TEXT, source_ref TEXT,
        line_number INTEGER, context TEXT)""")

    # Build title/alias lookup
    articles = {}  # slug -> frontmatter
    title_to_slug = {}  # title -> slug
    alias_to_slug = {}  # alias -> slug

    pattern = os.path.join(wiki_dir, '**', '*.md')
    for filepath in sorted(glob.glob(pattern, recursive=True)):
        with open(filepath) as f:
            content = f.read()

        relpath = os.path.relpath(filepath, wiki_dir)
        slug = relpath.replace('.md', '').replace(os.sep, '/')
        fm = parse_frontmatter(content)
        if not fm.get('title'):
            continue

        articles[slug] = {'path': filepath, 'content': content, 'fm': fm}
        title_to_slug[fm['title']] = slug
        for alias in fm.get('aliases', []):
            alias_to_slug[alias] = slug

    # Insert articles
    for slug, data in articles.items():
        fm = data['fm']
        aliases_str = '|'.join(fm.get('aliases', []))
        rel_path = os.path.relpath(data['path'], os.path.dirname(wiki_dir))
        conn.execute("INSERT INTO articles VALUES (?,?,?,?,?,?)",
                      (slug, fm['title'], fm.get('category', ''), fm.get('status', ''),
                       rel_path, aliases_str))

    # Insert links, sections, values
    for slug, data in articles.items():
        content = data['content']

        # Links
        for target_title, line_num in parse_links(content):
            target_slug = title_to_slug.get(target_title) or alias_to_slug.get(target_title)
            conn.execute("INSERT INTO links VALUES (?,?,?,?)",
                          (slug, target_title, target_slug, line_num))

        # Sections
        for sec in parse_sections(content):
            conn.execute("INSERT INTO sections VALUES (?,?,?,?,?)",
                          (slug, sec['heading'], sec['level'], sec['line_start'], sec['line_end']))

        # Values
        for val in parse_values(content):
            conn.execute("INSERT INTO [values] VALUES (?,?,?,?,?,?,?,?)",
                          (slug, val['parameter'], val['value'], val['unit'],
                           val['css_class'], val['source_ref'], val['line_number'], val['context']))

    conn.commit()

    # Print summary
    art_count = conn.execute("SELECT COUNT(*) FROM articles").fetchone()[0]
    link_count = conn.execute("SELECT COUNT(*) FROM links").fetchone()[0]
    sec_count = conn.execute("SELECT COUNT(*) FROM sections").fetchone()[0]
    val_count = conn.execute("SELECT COUNT(*) FROM [values]").fetchone()[0]
    print(f"Indexed {art_count} articles, {link_count} links, {sec_count} sections, {val_count} values.")
    conn.close()
```

- [ ] **Step 4: Run test to verify it passes**

```bash
python3 -m pytest tests/test_wiki_index.py::test_parse_articles -v
```
Expected: PASS

- [ ] **Step 5: Write test for sections parsing**

```python
# Append to tests/test_wiki_index.py
def test_parse_sections():
    from wiki_index import rebuild_db
    with tempfile.TemporaryDirectory() as tmpdir:
        make_wiki(tmpdir, {
            'wiki/systems/rcs.md': '---\ntitle: RCS\ncategory: systems\nstatus: draft\n---\n\n# RCS\n\n## Function\n\nProvides primary coolant.\n\n## Key Components\n\n### Pressurizer\n\nMaintains pressure.\n\n### Steam Generators\n\nTransfer heat.\n\n## Tech Spec LCOs\n\n- TS 3/4.4\n',
        })
        db_path = os.path.join(tmpdir, 'wiki.db')
        rebuild_db(os.path.join(tmpdir, 'wiki'), db_path)

        conn = sqlite3.connect(db_path)
        secs = conn.execute("SELECT heading, level, line_start, line_end FROM sections ORDER BY line_start").fetchall()
        # Should have: Function(2), Key Components(2), Pressurizer(3), Steam Generators(3), Tech Spec LCOs(2)
        assert len(secs) == 5
        assert secs[0] == ('Function', 2, 8, 10)  # ## Function at line 8, ends before ## Key Components
        assert secs[1][0] == 'Key Components'
        assert secs[1][1] == 2
        assert secs[2] == ('Pressurizer', 3, 12, 14)  # ### Pressurizer
        assert secs[3][0] == 'Steam Generators'
        assert secs[3][1] == 3
        assert secs[4][0] == 'Tech Spec LCOs'
        conn.close()
```

- [ ] **Step 6: Run test, verify pass**

```bash
python3 -m pytest tests/test_wiki_index.py::test_parse_sections -v
```

- [ ] **Step 7: Write test for value extraction**

```python
# Append to tests/test_wiki_index.py
def test_parse_values():
    from wiki_index import rebuild_db
    with tempfile.TemporaryDirectory() as tmpdir:
        make_wiki(tmpdir, {
            'wiki/systems/rps.md': '---\ntitle: RPS/SSPS\ncategory: systems\nstatus: draft\n---\n\n## Trips\n\nPZR Pressure High trip at <span class="val-trip">2385 psig</span>.\n\n<div class="callout callout-exam">\n<div class="callout-label">Exam — 2022 Q9</div>\nManual trip at 2000 psig to prevent OTDT.\n</div>\n',
        })
        db_path = os.path.join(tmpdir, 'wiki.db')
        rebuild_db(os.path.join(tmpdir, 'wiki'), db_path)

        conn = sqlite3.connect(db_path)
        vals = conn.execute("SELECT value, unit, css_class FROM [values] ORDER BY line_number").fetchall()
        assert len(vals) == 2
        assert vals[0] == ('2385', 'psig', 'val-trip')   # tagged span
        assert vals[1] == ('2000', 'psig', None)          # untagged in callout
        conn.close()
```

- [ ] **Step 8: Run test, verify pass**

```bash
python3 -m pytest tests/test_wiki_index.py::test_parse_values -v
```

- [ ] **Step 9: Commit**

```bash
git add scripts/wiki-index.py tests/test_wiki_index.py
git commit -m "feat: wiki-index.py core parser with rebuild command

- Parse frontmatter, wikilinks, sections, and values from all wiki articles
- Build SQLite database with articles, links, sections, values tables
- Extract tagged values (val-trip/alarm/normal) and untagged values from callout-exam blocks
- 3 passing tests

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 2: CLI subcommands — `refs`, `conflicts`, `coverage`, `sections`, `backlinks`

**Files:**
- Modify: `scripts/wiki-index.py` (add CLI argument parsing and subcommand handlers)
- Modify: `tests/test_wiki_index.py` (add tests for each subcommand)

- [ ] **Step 1: Write test for `refs` subcommand**

```python
# Append to tests/test_wiki_index.py
import subprocess

def build_test_wiki(tmpdir):
    """Shared test wiki for CLI subcommand tests."""
    make_wiki(tmpdir, {
        'wiki/systems/rhr.md': '---\ntitle: RHR\ncategory: systems\nstatus: draft\naliases:\n  - Residual Heat Removal\n---\n\n## Function\n\nResidual heat removal.\n\n<div class="callout callout-exam">\n<div class="callout-label">Exam — 2022 Q7</div>\nRHR suction valves 2RH1/2RH2 interlock at 375 psig.\n</div>\n\n## Connections\n\n- Related exam: [[2022 Q7]]\n',
        'wiki/systems/eccs.md': '---\ntitle: ECCS\ncategory: systems\nstatus: draft\n---\n\n## Function\n\nEmergency core cooling.\n\n## Connections\n\n- Related systems: [[RHR]]\n',
        'wiki/exams/2022/q7-rhr.md': '---\ntitle: "2022 Q7 — RHR Suction"\ncategory: exams\nstatus: draft\naliases:\n  - 2022 Q7\n---\n\n## Connections\n\n- Related systems: [[RHR]]\n- Related exam: [[2022 NRC Written Exam]]\n',
        'wiki/exams/2022-written-exam.md': '---\ntitle: "2022 NRC Written Exam"\ncategory: exams\nstatus: draft\naliases:\n  - 2022 exam\n---\n\n# 2022 NRC Written Exam\n',
    })
    db_path = os.path.join(tmpdir, 'wiki.db')
    from wiki_index import rebuild_db
    rebuild_db(os.path.join(tmpdir, 'wiki'), db_path)
    return db_path


def test_refs():
    with tempfile.TemporaryDirectory() as tmpdir:
        db_path = build_test_wiki(tmpdir)
        from wiki_index import cmd_refs
        import io
        out = io.StringIO()
        cmd_refs(db_path, 'RHR', out=out)
        output = out.getvalue()
        assert 'systems/eccs' in output  # ECCS links to RHR
        assert 'exams/2022/q7-rhr' in output  # Q7 links to RHR
```

- [ ] **Step 2: Write test for `conflicts`**

```python
# Append to tests/test_wiki_index.py
def test_conflicts():
    with tempfile.TemporaryDirectory() as tmpdir:
        make_wiki(tmpdir, {
            'wiki/systems/rhr.md': '---\ntitle: RHR\ncategory: systems\nstatus: draft\n---\n\n<div class="callout callout-exam">\n<div class="callout-label">Exam</div>\nSuction piping design 450 psig.\n</div>\n',
            'wiki/systems/pzr.md': '---\ntitle: Pressurizer & PRT\ncategory: systems\nstatus: draft\n---\n\nPRT rupture disc at <span class="val-trip">100 psig</span>.\n\n<div class="callout callout-exam">\n<div class="callout-label">Exam</div>\nPRT pressure 450 psig would exceed design.\n</div>\n',
        })
        db_path = os.path.join(tmpdir, 'wiki.db')
        from wiki_index import rebuild_db, cmd_conflicts
        rebuild_db(os.path.join(tmpdir, 'wiki'), db_path)
        import io
        out = io.StringIO()
        cmd_conflicts(db_path, '450', 'psig', out=out)
        output = out.getvalue()
        assert 'systems/rhr' in output
        assert 'systems/pzr' in output
```

- [ ] **Step 3: Write test for `sections`**

```python
# Append to tests/test_wiki_index.py
def test_sections_cmd():
    with tempfile.TemporaryDirectory() as tmpdir:
        db_path = build_test_wiki(tmpdir)
        from wiki_index import cmd_sections
        import io
        out = io.StringIO()
        cmd_sections(db_path, 'systems/rhr', out=out)
        output = out.getvalue()
        assert 'Function' in output
        assert 'Connections' in output
```

- [ ] **Step 4: Write test for `backlinks`**

```python
# Append to tests/test_wiki_index.py
def test_backlinks():
    with tempfile.TemporaryDirectory() as tmpdir:
        db_path = build_test_wiki(tmpdir)
        from wiki_index import cmd_backlinks
        import io
        out = io.StringIO()
        cmd_backlinks(db_path, 'systems/rhr', out=out)
        output = out.getvalue()
        # ECCS links to RHR but RHR doesn't link back to ECCS
        assert 'systems/eccs' in output
```

- [ ] **Step 5: Implement all subcommand handlers**

Add these functions to `scripts/wiki-index.py`:

```python
def cmd_refs(db_path, term, out=sys.stdout):
    """Find articles that reference a term (in titles, aliases, or link targets)."""
    conn = sqlite3.connect(db_path)
    results = set()

    # Search link targets
    for row in conn.execute(
        "SELECT DISTINCT source_slug, line_number FROM links WHERE target_title LIKE ? OR target_slug LIKE ?",
        (f'%{term}%', f'%{term}%')
    ):
        results.add((row[0], f'link at line {row[1]}'))

    # Search article titles and aliases
    for row in conn.execute(
        "SELECT slug, title, aliases FROM articles WHERE title LIKE ? OR aliases LIKE ?",
        (f'%{term}%', f'%{term}%')
    ):
        results.add((row[0], f'title/alias match'))

    # Search values
    for row in conn.execute(
        "SELECT slug, value, unit, line_number, context FROM [values] WHERE context LIKE ?",
        (f'%{term}%',)
    ):
        results.add((row[0], f'value at line {row[3]}: {row[4][:80]}'))

    for slug, reason in sorted(results):
        out.write(f'{slug}  ({reason})\n')
    if not results:
        out.write(f'No references found for "{term}"\n')
    conn.close()


def cmd_conflicts(db_path, value, unit=None, out=sys.stdout):
    """Find all occurrences of a numeric value, optionally filtered by unit."""
    conn = sqlite3.connect(db_path)
    if unit:
        rows = conn.execute(
            "SELECT slug, value, unit, css_class, line_number, context FROM [values] WHERE value = ? AND unit = ?",
            (value, unit)
        ).fetchall()
    else:
        rows = conn.execute(
            "SELECT slug, value, unit, css_class, line_number, context FROM [values] WHERE value = ?",
            (value,)
        ).fetchall()

    if not rows:
        out.write(f'No occurrences of {value} {unit or ""} found.\n')
    else:
        out.write(f'Found {len(rows)} occurrences of {value} {unit or ""}:\n')
        for row in sorted(rows):
            tag = f'[{row[3]}]' if row[3] else '[untagged]'
            out.write(f'  {row[0]}:{row[4]}  {tag}  {row[5][:80]}\n')
    conn.close()


def cmd_coverage(db_path, category=None, out=sys.stdout):
    """Find articles missing exam callouts or standard sections."""
    conn = sqlite3.connect(db_path)
    cat_filter = "WHERE a.category = ?" if category else ""
    params = (category,) if category else ()

    # Articles with no exam callouts linking to them
    query = f"""
        SELECT a.slug, a.title FROM articles a
        {cat_filter}
        AND a.slug NOT IN (
            SELECT DISTINCT target_slug FROM links
            WHERE source_slug LIKE 'exams/%' AND target_slug IS NOT NULL
        )
        ORDER BY a.slug
    """
    rows = conn.execute(query, params).fetchall()
    if rows:
        out.write(f'Articles with no exam question links ({len(rows)}):\n')
        for row in rows:
            out.write(f'  {row[0]}  ({row[1]})\n')

    # System articles missing Function or Connections sections
    if not category or category == 'systems':
        for required in ['Function', 'Connections']:
            missing = conn.execute("""
                SELECT a.slug, a.title FROM articles a
                WHERE a.category = 'systems'
                AND a.slug NOT IN (
                    SELECT slug FROM sections WHERE heading = ?
                )
                ORDER BY a.slug
            """, (required,)).fetchall()
            if missing:
                out.write(f'\nSystem articles missing "{required}" section ({len(missing)}):\n')
                for row in missing:
                    out.write(f'  {row[0]}  ({row[1]})\n')
    conn.close()


def cmd_sections(db_path, slug, out=sys.stdout):
    """Show article structure with line ranges."""
    conn = sqlite3.connect(db_path)
    rows = conn.execute(
        "SELECT heading, level, line_start, line_end FROM sections WHERE slug = ? ORDER BY line_start",
        (slug,)
    ).fetchall()
    if not rows:
        out.write(f'No sections found for "{slug}"\n')
    else:
        for heading, level, start, end in rows:
            indent = '  ' * (level - 2)
            out.write(f'{indent}{heading}  (lines {start}-{end})\n')
    conn.close()


def cmd_backlinks(db_path, slug, out=sys.stdout):
    """Find articles that link TO this slug but are not linked FROM it."""
    conn = sqlite3.connect(db_path)
    # Get the article's title and aliases for matching
    art = conn.execute("SELECT title, aliases FROM articles WHERE slug = ?", (slug,)).fetchone()
    if not art:
        out.write(f'Article "{slug}" not found.\n')
        conn.close()
        return

    names = {art[0]}
    if art[1]:
        names.update(art[1].split('|'))

    # Find articles that link to any of this article's names
    placeholders = ','.join('?' * len(names))
    inbound = conn.execute(
        f"SELECT DISTINCT source_slug FROM links WHERE target_slug = ? OR target_title IN ({placeholders})",
        (slug, *names)
    ).fetchall()
    inbound_slugs = {row[0] for row in inbound}

    # Find articles this article links to
    outbound = conn.execute(
        "SELECT DISTINCT target_slug FROM links WHERE source_slug = ? AND target_slug IS NOT NULL",
        (slug,)
    ).fetchall()
    outbound_slugs = {row[0] for row in outbound}

    # Missing reciprocal = inbound but not outbound
    missing = inbound_slugs - outbound_slugs - {slug}
    if missing:
        out.write(f'Missing reciprocal links from {slug} to ({len(missing)}):\n')
        for s in sorted(missing):
            out.write(f'  {s}\n')
    else:
        out.write(f'All backlinks are reciprocal for {slug}.\n')
    conn.close()
```

- [ ] **Step 6: Add CLI argument parser and main**

```python
# Add to bottom of scripts/wiki-index.py

def main():
    parser = argparse.ArgumentParser(description='Wiki index: SQLite query tool for wiki maintenance')
    sub = parser.add_subparsers(dest='command')

    sub.add_parser('rebuild', help='Rebuild wiki.db from markdown files')

    p_refs = sub.add_parser('refs', help='Find articles referencing a term')
    p_refs.add_argument('term', help='Term to search for')

    p_conf = sub.add_parser('conflicts', help='Find conflicting values')
    p_conf.add_argument('value', help='Numeric value to search for')
    p_conf.add_argument('unit', nargs='?', default=None, help='Unit (psig, °F, gpm, etc.)')

    p_cov = sub.add_parser('coverage', help='Find coverage gaps')
    p_cov.add_argument('category', nargs='?', default=None, help='Filter by category')

    p_sec = sub.add_parser('sections', help='Show article sections with line ranges')
    p_sec.add_argument('slug', help='Article slug (e.g., systems/rcs)')

    p_bl = sub.add_parser('backlinks', help='Find missing reciprocal links')
    p_bl.add_argument('slug', help='Article slug')

    args = parser.parse_args()

    # Determine paths
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(script_dir)
    wiki_dir = os.path.join(project_root, 'wiki')
    db_path = os.path.join(project_root, DB_NAME)

    if args.command == 'rebuild':
        rebuild_db(wiki_dir, db_path)
    elif args.command == 'refs':
        cmd_refs(db_path, args.term)
    elif args.command == 'conflicts':
        cmd_conflicts(db_path, args.value, args.unit)
    elif args.command == 'coverage':
        cmd_coverage(db_path, args.category)
    elif args.command == 'sections':
        cmd_sections(db_path, args.slug)
    elif args.command == 'backlinks':
        cmd_backlinks(db_path, args.slug)
    else:
        parser.print_help()
        sys.exit(1)


if __name__ == '__main__':
    main()
```

- [ ] **Step 7: Run all tests**

```bash
python3 -m pytest tests/test_wiki_index.py -v
```
Expected: all tests pass

- [ ] **Step 8: Smoke test against the real wiki**

```bash
python3 scripts/wiki-index.py rebuild
python3 scripts/wiki-index.py refs "RHR"
python3 scripts/wiki-index.py conflicts 175 °F
python3 scripts/wiki-index.py coverage systems
python3 scripts/wiki-index.py sections systems/rcs
python3 scripts/wiki-index.py backlinks systems/rhr
```

Verify output is sensible: refs should find multiple articles, conflicts should find the RCP bearing temp, coverage should list stub systems with no exam links, sections should show RCS heading tree, backlinks should find any missing reciprocals.

- [ ] **Step 9: Commit**

```bash
git add scripts/wiki-index.py tests/test_wiki_index.py
git commit -m "feat: wiki-index.py CLI subcommands

- refs: reverse lookup for articles referencing a term
- conflicts: find all occurrences of a numeric value
- coverage: find articles missing exam callouts or sections
- sections: show article heading tree with line ranges
- backlinks: find missing reciprocal links

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
```

---

### Task 3: Integration — .gitignore, CLAUDE.md, pre-commit hook

**Files:**
- Modify: `.gitignore`
- Modify: `CLAUDE.md`

- [ ] **Step 1: Add wiki.db to .gitignore**

Append `wiki.db` to `.gitignore`.

- [ ] **Step 2: Add query mandate to CLAUDE.md**

Add under `## Quality Rules`:

```markdown
## Wiki Index Queries
Before creating or modifying any wiki article, run:
- `python3 scripts/wiki-index.py refs <system-or-topic>` — check for existing content
- `python3 scripts/wiki-index.py conflicts <value> <unit>` — check for value disagreements

To rebuild the index: `python3 scripts/wiki-index.py rebuild`
To see article structure: `python3 scripts/wiki-index.py sections <slug>`
To find missing backlinks: `python3 scripts/wiki-index.py backlinks <slug>`
```

- [ ] **Step 3: Verify pre-commit integration works**

Run the full flow manually:

```bash
python3 scripts/wiki-index.py rebuild
python3 scripts/check-wikilinks.py
cd site && npm run build
```

All three should succeed.

- [ ] **Step 4: Commit and push**

```bash
git add .gitignore CLAUDE.md
git commit -m "chore: integrate wiki-index.py — gitignore wiki.db, add CLAUDE.md query mandate

Co-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>"
git push
```
