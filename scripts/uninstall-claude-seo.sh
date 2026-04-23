#!/usr/bin/env bash
# Uninstall the claude-seo plugin. Mirrors upstream uninstall.sh but
# clones at a pinned tag so you can audit it before running.
#
# Usage: bash scripts/uninstall-claude-seo.sh

set -euo pipefail

REPO_URL="https://github.com/AgriciDaniel/claude-seo"
TAG="${CLAUDE_SEO_TAG:-v1.9.0}"

command -v git >/dev/null 2>&1 || { echo "git required" >&2; exit 1; }

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

echo "→ cloning $TAG"
git clone --depth 1 --branch "$TAG" "$REPO_URL" "$TMP/claude-seo" >/dev/null 2>&1

echo "→ running upstream uninstall.sh"
bash "$TMP/claude-seo/uninstall.sh"
