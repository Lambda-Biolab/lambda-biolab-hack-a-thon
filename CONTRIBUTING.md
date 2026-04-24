# Contributing

Technical workflow for humans and AI agents. For behavioural rules specific to AI agents, see [AGENTS.md](AGENTS.md). For stack + commands, see [README.md](README.md). For every maintenance script, see [scripts/README.md](scripts/README.md).

## Stack

Next.js 16 (App Router, static export) · React 19 · TypeScript strict · Tailwind 4 · pnpm 10 · Node 22 · deployed via GitHub Pages (workflow mode) to `hack-basel.lambdabiolab.com`.

## Setup

```bash
pnpm install
pnpm dev   # http://localhost:3000
```

## Pre-PR checks

The full CI stack. All must pass — `main` is protected.

```bash
pnpm exec tsc --noEmit
pnpm lint
pnpm lint:md
pnpm audit --prod --audit-level high
GITHUB_PAGES=true pnpm build
pnpm verify:build   # 19-check post-build acceptance contract
```

For link-checking across markdown: `pnpm lint:links` (requires [`lychee`](https://lychee.cli.rs/); CI uses `lycheeverse/lychee-action`).

## Code patterns

- **Site metadata** (URL, dates, venue, org/contact) — single source in [`src/config/site.ts`](src/config/site.ts). Never hardcode.
- **Image `src`** — always pass through `asset()` from [`src/lib/asset.ts`](src/lib/asset.ts). Honours `NEXT_PUBLIC_BASE_PATH` if we ever re-introduce a basePath.
- **Brand icons** (GitHub, LinkedIn, Linktree, etc.) — named components in [`src/components/icons.tsx`](src/components/icons.tsx). SVG paths sourced from [simpleicons.org](https://simpleicons.org).
- **Theme** — light/dark via `prefers-color-scheme` + pre-hydration script in `layout.tsx`. Shared hook at [`src/lib/useIsDark.ts`](src/lib/useIsDark.ts).
- **Photos** — WebP under `public/photos/`, display sizes via `sizes` prop. Re-optimize with `pnpm optimize:photos` (resizes + re-encodes). See [PHOTOS.md](PHOTOS.md) for reuse terms.
- **TypeScript** — `strict: true` + `noUncheckedIndexedAccess`. Prefer named exports, avoid `any`, drop redundant `as` casts when narrowing is already correct.
- **Design tokens** — see [DESIGN.md](DESIGN.md). Tailwind utility classes preferred; custom tokens in `globals.css`.

## Commit style

[Conventional Commits](https://www.conventionalcommits.org/). Apply the template locally:

```bash
git config commit.template .gitmessage
```

Types: `feat`, `fix`, `docs`, `chore`, `refactor`, `perf`, `test`, `ci`, `style`, `revert`. Scope in parens (`fix(domain): …`). One topic per commit.

## PR process

1. Branch off `main`.
2. Fill out `.github/pull_request_template.md` — tests, a11y, privacy sections matter.
3. Push → CI runs (`.github/workflows/ci.yml`). Must be green to merge.
4. Squash merge. Branch auto-deleted.

## CHANGELOG

[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) + [SemVer](https://semver.org/). Add entries under `## [Unreleased]` for non-trivial changes. Types: `Added`, `Changed`, `Deprecated`, `Removed`, `Fixed`, `Security`.

Trivial changes (typo fixes, formatting, test-only tweaks) don't need an entry.

## Releases

After a batch of merged PRs:

1. Promote `[Unreleased]` → `[X.Y.Z] - YYYY-MM-DD` in `CHANGELOG.md`.
2. Bump `package.json` version to match.
3. Merge via PR.
4. Tag: `git tag -a vX.Y.Z -m "…" <sha> && git push origin vX.Y.Z`.
5. Publish: `gh release create vX.Y.Z --title "…" --notes-file <changelog-section> --latest`.

## Linking

- [README.md](README.md) — project overview, stack, commands, deployment
- [AGENTS.md](AGENTS.md) — AI-agent behavioural rules
- [AGENT_LEARNINGS.md](AGENT_LEARNINGS.md) — accumulated non-obvious patterns
- [AGENT_REQUESTS.md](AGENT_REQUESTS.md) — escalation log
- [scripts/README.md](scripts/README.md) — every maintenance script
- [DESIGN.md](DESIGN.md) — design system
- [PHOTOS.md](PHOTOS.md) — photo reuse terms
- [CHANGELOG.md](CHANGELOG.md) — release history
- [.gitmessage](.gitmessage) — commit-message template
