#!/bin/bash
set -euo pipefail

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

MARKETPLACE="superpowers-marketplace"
MARKETPLACE_REPO="obra/superpowers-marketplace"
PLUGIN="superpowers@${MARKETPLACE}"

if claude plugin list 2>/dev/null | grep -q "^  > ${PLUGIN}$"; then
  exit 0
fi

if ! claude plugin marketplace list 2>/dev/null | grep -q "^${MARKETPLACE}\b"; then
  claude plugin marketplace add "${MARKETPLACE_REPO}" >&2
fi

claude plugin install "${PLUGIN}" >&2
