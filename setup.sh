#!/bin/bash
# Salem Study System — Setup
set -e

echo "══════════════════════════════════════"
echo "  Salem NRC Study System — Setup"
echo "══════════════════════════════════════"
echo ""

# ─── Create directory structure ───
echo "📁 Creating directories..."

# Raw source documents
mkdir -p raw/{ufsar,tech-specs,exams,operating-tests,ergs}

# Compiled wiki (what you study from)
mkdir -p wiki/{systems,tech-specs,exams,eops,concepts,abnormals}

# Scripts
mkdir -p scripts

echo "✅ Directories created"
echo ""

# ─── Create .env if needed ───
if [ ! -f .env ]; then
cat > .env << 'EOF'
# LLM API key (for Cognee, if used later)
LLM_API_KEY=

# HyperBrowser API key (free at https://app.hyperbrowser.ai)
HYPERBROWSER_API_KEY=
EOF
echo "✅ .env created — add API keys if using Cognee or HyperBrowser"
else
echo "⚠️  .env exists, skipping"
fi

# ─── Init git ───
if [ ! -d .git ]; then
  git init -q
  echo "✅ Git initialized"
else
  echo "⚠️  Git already initialized"
fi

echo ""
echo "══════════════════════════════════════"
echo "  ✅ Done! Next steps:"
echo "══════════════════════════════════════"
echo ""
echo "  1. Download your first source doc:"
echo "     ./scripts/dl ML11175A207 tech-specs"
echo ""
echo "  2. Start Claude Code:"
echo "     claude"
echo ""
echo "  3. Tell it:"
echo "     'Read raw/tech-specs/ML11175A207.pdf"
echo "      and compile it into wiki articles'"
echo ""
echo "  That's it. The wiki grows from there."
echo ""
