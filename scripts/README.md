# scripts/

Scripts in this directory plus the `pnpm` commands that wrap them. None are part of the build or deploy — run manually by maintainers.

## `scripts/` directory

| Script | Purpose | Trigger |
|---|---|---|
| [`optimize-photos.mjs`](./optimize-photos.mjs) | Resize + re-encode `public/photos` and `public/tracks` to WebP via sharp. Idempotent. | `pnpm optimize:photos` — after adding or replacing photos |
| [`generate-og.mjs`](./generate-og.mjs) | Compose the share-card image from the Lambda Biolab avatar + event copy. Outputs `public/og-image.png` (1200×630) and `.github/social-preview.png` (1280×640). | `pnpm generate:og` — after brand / date / copy changes |
| [`install-claude-seo.sh`](./install-claude-seo.sh) | Install the optional [`claude-seo`](https://github.com/AgriciDaniel/claude-seo) audit plugin into your local Claude Code. Pinned to a version tag. | `bash scripts/install-claude-seo.sh` — see [SEO audits](#seo-audits-optional) |
| [`uninstall-claude-seo.sh`](./uninstall-claude-seo.sh) | Remove the claude-seo plugin. | `bash scripts/uninstall-claude-seo.sh` |

## `package.json` scripts

Exposed via `pnpm <name>`:

| Script | What it does |
|---|---|
| `dev` | Start Next.js dev server on `http://localhost:3000` |
| `build` | Production build. Set `GITHUB_PAGES=true` for the static export with basePath |
| `start` | Serve the production build |
| `lint` | ESLint (TypeScript + React + jsx-a11y via `eslint-config-next`) |
| `lint:md` | `markdownlint-cli2` across every `.md` (config: `.markdownlint.json`) |
| `lint:md:fix` | Auto-fix whatever markdownlint can (then re-run `lint:md` to verify) |
| `lint:links` | `lychee` link check across every `.md` (config: `lychee.toml`) |
| `optimize:photos` | See table above |
| `generate:og` | See table above |

## External tools

| Tool | Used by | Install |
|---|---|---|
| [`lychee`](https://lychee.cli.rs/) | `pnpm lint:links` | `cargo install lychee` · or the GitHub Actions [`lychee-action`](https://github.com/lycheeverse/lychee-action) in CI |
| [sharp](https://sharp.pixelplumbing.com/) | `optimize-photos.mjs`, `generate-og.mjs` | Auto-installed as devDep |
| [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2) | `pnpm lint:md` | Auto-installed as devDep |

## SEO audits (optional)

[`claude-seo`](https://github.com/AgriciDaniel/claude-seo) is an MIT-licensed Claude Code plugin for technical + GEO (AI-search) audits of the live site. **Not required to build or deploy** — it installs into your `~/.claude/` alongside other Claude Code plugins, not into this repo.

### Preferred install — inside Claude Code (marketplace)

```text
/plugin marketplace add AgriciDaniel/claude-seo
/plugin install claude-seo@agricidaniel-seo
```

### Non-interactive fallback — shell script

Clones at a pinned tag (so you can audit the source before it runs) and delegates to the upstream installer:

```bash
bash scripts/install-claude-seo.sh             # install (currently pins v1.9.0)
bash scripts/uninstall-claude-seo.sh           # remove
bash scripts/install-claude-seo.sh --dry-run   # preview the git clone command
CLAUDE_SEO_TAG=v1.9.0 bash scripts/install-claude-seo.sh  # override the pin
```

Requires `git` and `python3` (3.10+) on `PATH`. The upstream installer creates a Python venv at `~/.claude/skills/seo/.venv/` and optionally installs Playwright Chromium for screenshot analysis.

### After install

Restart Claude Code, then:

```text
/seo-audit https://lambda-biolab.github.io/lambda-biolab-hack-a-thon/
/seo-geo   https://lambda-biolab.github.io/lambda-biolab-hack-a-thon/
```

Other commands: `/seo-schema`, `/seo-sitemap`, `/seo-plan`, `/seo-hreflang`, `/seo-competitor-pages`, plus the full set documented at [claude-seo.md](https://claude-seo.md/).

### What to skip for this site

Hreflang (single-language), competitor-pages (not a product), and most of the local-SEO + e-commerce extensions don't apply. Stick to `/seo-audit` and `/seo-geo`.
