#!/bin/bash
set -euo pipefail

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

PLUGIN="superpowers@claude-plugins-official"

if claude plugin list 2>/dev/null | grep -q "^  > ${PLUGIN}$"; then
  exit 0
fi

claude plugin install "${PLUGIN}" >&2
