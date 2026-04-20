# Salem NRC Exam Study System

Personal knowledge base for NRC RO/SRO licensing exam prep at Salem Nuclear Generating Station (Westinghouse 4-Loop PWR). Built using the [Karpathy LLM Knowledge Base](https://x.com/karpathy/status/2039805659525644595) pattern: NRC source documents go into `raw/`, Claude Code compiles them into an interlinked wiki of 725+ markdown articles, which are published as a static study site on GitHub Pages.

**Live site:** [nostem.github.io/salem-study-system](https://nostem.github.io/salem-study-system)

## What's In It

| Category | Count | Description |
|----------|-------|-------------|
| Systems | 54 | One article per plant system (electrical, primary, emergency, control, secondary, auxiliary) |
| Tech Specs | 18 | LCO statements, action tables, surveillance requirements, inline bases |
| NRC Exams | 400 questions | 2019, 2020, 2022, 2023 written exams (75 RO + 25 SRO each) |
| Operating Tests | 3 exams | 2020, 2022, 2023 JPMs and simulator scenarios |
| JPMs | 60 | Job Performance Measures with critical steps and key decision points |
| Simulator Scenarios | 12 | Multi-event scenarios with critical tasks and EOP pathways |
| EOPs | 33 | Emergency operating procedures reconstructed from exam materials |
| Abnormal Procedures | 41 | AB procedures with key entry conditions and operator actions |
| Procedures | 58 | Normal operating, surveillance, and alarm response procedures |
| Admin Procedures | 41 | Administrative controls, rad protection, emergency plan procedures |

Every exam question is backfilled into the system, tech spec, and procedure articles it references, creating a dense cross-reference network for study.

## Site Features

- **Knowledge graph** — D3 force-directed graph showing typed connections between all articles (system, procedure, EOP, tech-spec, exam, inline links). Edge filtering, connection-weighted physics, exam node demotion.
- **Local graph** — Per-article sidebar graph showing immediate connections and neighbors.
- **Full-text search** — Pagefind client-side search across all 726 pages.
- **Collapsible bases** — Tech spec bases sections inline as purple callouts, collapsed by default.
- **Study markup** — Color-coded highlights for exam-tested facts (`hi-exam`), exam traps (`hi-trap`), trip setpoints (`val-trip`), alarm setpoints (`val-alarm`), and normal values (`val-normal`).
- **Dark theme** — Purpose-built for late-night study sessions.

## Project Structure

```
raw/                    Source PDFs from NRC ADAMS (gitignored)
  tech-specs/           Tech specs + bases PDFs
  exams/                NRC exam packages (2012-2023)

wiki/                   Compiled markdown wiki (725+ articles)
  systems/              One article per plant system (54)
  tech-specs/           One article per TS section (18)
  exams/                Exam index + question articles by year
    2019/               100 individual question articles
    2020/               100 individual question articles
    2022/               100 individual question articles
    2023/               100 individual question articles
    scenarios/          Simulator scenario articles
  eops/                 Emergency operating procedures (33)
  abnormals/            Abnormal procedures (41)
  procedures/           Normal ops, surveillance, alarm response (58)
  admin/                Administrative procedures (41)
  _index.md             Master index with all wikilinks

site/                   Astro v6 static site
  src/
    scripts/            D3 graph renderers, highlighter
    components/         Search, sidebar, TOC, graph, mobile nav
    utils/              Wikilink resolution, graph data, aliases
  public/
    exam-pdfs/          Split PDFs per exam, JPM, scenario
    ts-pdfs/            Tech spec and bases PDFs

data/exams/             YAML metadata per exam year
scripts/                Wiki index builder, wikilink checker
CLAUDE.md               Project instructions for Claude Code
```

## How It Works

1. Source documents (NRC ADAMS PDFs) go into `raw/`
2. Claude Code reads the source, extracts entities and relationships
3. Claude creates or updates wiki articles with verbatim content, setpoints, backlinks, and exam callouts
4. Every fact is traceable to its source document
5. The Astro site builds from the wiki markdown and deploys to GitHub Pages on push

The wiki grows incrementally. Two ingestion skills govern the process:
- **salem-exam-ingestion** — Written exam questions with mandatory backfilling
- **salem-operating-test-ingestion** — JPMs and simulator scenarios with green-accented cards

## Tech Stack

- **Wiki:** Markdown with YAML frontmatter, `[[wikilinks]]`, HTML callout blocks
- **Site:** [Astro v6](https://astro.build/) with Tailwind CSS
- **Graph:** [D3.js](https://d3js.org/) force simulation with typed edges
- **Search:** [Pagefind](https://pagefind.app/) client-side search
- **Agent:** [Claude Code](https://claude.ai/claude-code) with custom ingestion skills
- **Hosting:** GitHub Pages (auto-deploys on push to main)
- **Tooling:** `wiki_index.py` SQLite query tool for LLM navigation and conflict checking

## Data Sources

All content compiled from publicly available NRC ADAMS documents. No proprietary procedures.
