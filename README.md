# Salem NRC Exam Study System

Personal knowledge base for NRC RO/SRO licensing exam prep at Salem Nuclear Generating Station.

Built using the [Karpathy LLM Knowledge Base](https://x.com/karpathy/status/2039805659525644595) pattern:
source docs → `raw/` → LLM compiles → `wiki/` of interlinked markdown.

## Quick Start

```bash
chmod +x setup.sh scripts/*
./setup.sh
./scripts/batch-dl              # download confirmed ADAMS docs
claude                          # start Claude Code
```

Then tell Claude: *"Read raw/tech-specs/ML11175A207.pdf and compile it into wiki articles"*

## Structure

```
raw/          ← Source PDFs from NRC ADAMS (gitignored)
wiki/         ← Compiled markdown wiki (what you study from)
  systems/    ← One article per plant system
  tech-specs/ ← One article per TS section
  exams/      ← Exam analysis by year
  eops/       ← Reconstructed EOP knowledge
  concepts/   ← Cross-cutting topics
scripts/      ← Download helpers
CLAUDE.md     ← Project context (Claude Code reads this automatically)
```

## Workflow

1. Add a source doc to `raw/`
2. Tell Claude Code: "file this to our wiki"
3. Claude creates/updates wiki articles with summaries, values, and backlinks
4. Review, correct, mark verified
5. Study from the wiki

The wiki grows incrementally. Each new doc gets easier.

## Data Sources

All content from publicly available NRC ADAMS documents. No proprietary procedures.
