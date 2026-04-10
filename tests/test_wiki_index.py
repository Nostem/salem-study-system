import tempfile, os, sqlite3, sys, io
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'scripts'))


def make_wiki(tmpdir, files):
    """Create a temporary wiki structure for testing."""
    for relpath, content in files.items():
        fullpath = os.path.join(tmpdir, relpath)
        os.makedirs(os.path.dirname(fullpath), exist_ok=True)
        with open(fullpath, 'w') as f:
            f.write(content)


# --- Task 1 tests ---

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
        assert secs[0] == ('Function', 2, 9, 12)  # ## Function at line 9, ends before ## Key Components at 13
        assert secs[1][0] == 'Key Components'
        assert secs[1][1] == 2
        assert secs[1][2] == 13  # line_start
        assert secs[2] == ('Pressurizer', 3, 15, 18)  # ### Pressurizer at line 15, ends before ### Steam Generators at 19
        assert secs[3][0] == 'Steam Generators'
        assert secs[3][1] == 3
        assert secs[3][2] == 19  # line_start
        assert secs[4][0] == 'Tech Spec LCOs'
        assert secs[4][2] == 23  # line_start
        conn.close()


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


def test_frontmatter_links_skipped():
    """Verify wikilinks inside frontmatter aliases are NOT parsed as links."""
    from wiki_index import parse_links
    content = '---\ntitle: Test\ncategory: systems\naliases:\n  - [[Some Alias]]\n---\n\n## Section\n\n- [[Real Link]]\n'
    links = parse_links(content)
    # Only the real link should be found, not the alias
    assert len(links) == 1
    assert links[0][0] == 'Real Link'


# --- Task 2 tests ---

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
        out = io.StringIO()
        cmd_refs(db_path, 'RHR', out=out)
        output = out.getvalue()
        assert 'systems/eccs' in output  # ECCS links to RHR
        assert 'exams/2022/q7-rhr' in output  # Q7 links to RHR


def test_conflicts():
    with tempfile.TemporaryDirectory() as tmpdir:
        make_wiki(tmpdir, {
            'wiki/systems/rhr.md': '---\ntitle: RHR\ncategory: systems\nstatus: draft\n---\n\n<div class="callout callout-exam">\n<div class="callout-label">Exam</div>\nSuction piping design 450 psig.\n</div>\n',
            'wiki/systems/pzr.md': '---\ntitle: Pressurizer & PRT\ncategory: systems\nstatus: draft\n---\n\nPRT rupture disc at <span class="val-trip">100 psig</span>.\n\n<div class="callout callout-exam">\n<div class="callout-label">Exam</div>\nPRT pressure 450 psig would exceed design.\n</div>\n',
        })
        db_path = os.path.join(tmpdir, 'wiki.db')
        from wiki_index import rebuild_db, cmd_conflicts
        rebuild_db(os.path.join(tmpdir, 'wiki'), db_path)
        out = io.StringIO()
        cmd_conflicts(db_path, '450', 'psig', out=out)
        output = out.getvalue()
        assert 'systems/rhr' in output
        assert 'systems/pzr' in output


def test_sections_cmd():
    with tempfile.TemporaryDirectory() as tmpdir:
        db_path = build_test_wiki(tmpdir)
        from wiki_index import cmd_sections
        out = io.StringIO()
        cmd_sections(db_path, 'systems/rhr', out=out)
        output = out.getvalue()
        assert 'Function' in output
        assert 'Connections' in output


def test_backlinks():
    with tempfile.TemporaryDirectory() as tmpdir:
        db_path = build_test_wiki(tmpdir)
        from wiki_index import cmd_backlinks
        out = io.StringIO()
        cmd_backlinks(db_path, 'systems/rhr', out=out)
        output = out.getvalue()
        # ECCS links to RHR but RHR doesn't link back to ECCS
        assert 'systems/eccs' in output
