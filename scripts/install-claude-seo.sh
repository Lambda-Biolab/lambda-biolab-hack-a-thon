#!/usr/bin/env bash
# Install the claude-seo SEO audit plugin for Claude Code.
#
# This is *optional* dev tooling for running SEO/GEO audits against the
# deployed site. It does NOT affect the site build or deploy. Nothing is
# installed into this repo — the plugin lives under ~/.claude/ on your
# machine alongside your other Claude Code plugins.
#
# Preferred install path (inside Claude Code, interactive):
#   /plugin marketplace add AgriciDaniel/claude-seo
#   /plugin install claude-seo@agricidaniel-seo
#
# This script is the non-interactive fallback — pins a specific version,
# clones to a temp dir so you can inspect the source before it runs, and
# delegates to the upstream installer.
#
# Source:  https://github.com/AgriciDaniel/claude-seo
# License: MIT (upstream)
# Usage:   bash scripts/install-claude-seo.sh [--dry-run]
# Pin:     CLAUDE_SEO_TAG=v1.9.0 bash scripts/install-claude-seo.sh

set -euo pipefail

REPO_URL="https://github.com/AgriciDaniel/claude-seo"
TAG="${CLAUDE_SEO_TAG:-v1.9.0}"
DRY_RUN=0

for arg in "$@"; do
  case "$arg" in
    --dry-run) DRY_RUN=1 ;;
    -h|--help)
      sed -n '2,22p' "$0" | sed 's/^# \{0,1\}//'
      exit 0
      ;;
    *) echo "unknown arg: $arg" >&2; exit 2 ;;
  esac
done

command -v git     >/dev/null 2>&1 || { echo "git required" >&2; exit 1; }
command -v python3 >/dev/null 2>&1 || { echo "python3 required" >&2; exit 1; }

echo "claude-seo installer"
echo "  repo: $REPO_URL"
echo "  tag:  $TAG (pinned; override with CLAUDE_SEO_TAG env)"
echo "  dest: ~/.claude/skills/seo + ~/.claude/agents/"
echo

if [ "$DRY_RUN" = "1" ]; then
  echo "[dry-run] would git clone --depth 1 --branch $TAG $REPO_URL and run its install.sh"
  exit 0
fi

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

echo "→ cloning $TAG to $TMP"
git clone --depth 1 --branch "$TAG" "$REPO_URL" "$TMP/claude-seo" >/dev/null 2>&1

echo "→ running upstream install.sh"
bash "$TMP/claude-seo/install.sh"

echo
echo "✓ done. Restart Claude Code to pick up the new skills."
echo "  Try:  claude  →  /seo-audit https://lambda-biolab.github.io/lambda-biolab-hack-a-thon/"
echo "  Uninstall:  bash scripts/uninstall-claude-seo.sh"
