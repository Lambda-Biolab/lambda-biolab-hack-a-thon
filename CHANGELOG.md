<!-- markdownlint-disable MD024 no-duplicate-heading -->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

**Types of changes**: `Added`, `Changed`, `Deprecated`, `Removed`, `Fixed`, `Security`

## [Unreleased]

### Added

- `src/config/site.ts` — single source of truth for URLs, event metadata, venue coordinates, and org identity/contact links. Consumed by `layout.tsx`, `robots.ts`, `sitemap.ts`, `Footer.tsx`, `Register.tsx`, `Location.tsx`.
- `public/CNAME` — pins the `hack-basel.lambdabiolab.com` custom domain across deploys.
- `scripts/verify-build.mjs` + `pnpm verify:build` — acceptance contract asserting post-build state (canonical URL, OG image, robots/sitemap domain, no basePath leak, CNAME present). Runs in CI as part of the `checks` job.

### Changed

- **Custom domain migration**: site now served from `https://hack-basel.lambdabiolab.com` instead of the GitHub Pages project URL. All canonical / OG / sitemap / robots / JSON-LD URLs updated via the new `site.ts` config.
- `next.config.ts` — removed `basePath` (custom domain serves at origin root); set `NEXT_PUBLIC_BASE_PATH=""`. `GITHUB_PAGES=true` still gates `output: "export"`.
- `public/photos/inside-lab/*` flattened into `public/photos/` and re-compressed to 800w (saves ~430 KB — these images display at ~290px in LabStrip, 1600w was wasteful).

### Fixed

- Scripts and everything else 404'd after the custom-domain switch because `basePath: "/lambda-biolab-hack-a-thon"` was baked into every asset URL. Removing the basePath + pinning CNAME restores all asset loads.

## [1.0.0] - 2026-04-23

First public-ready release of the Lambda Hack Basel event site. Consolidates the site audit, SEO/GEO enablement, and governance baseline.

### Added

- **JSON-LD structured data** (`Event`, `Organization`, `WebSite`) in `layout.tsx` for Google Rich Results and AI search discovery
- **OpenGraph + Twitter card metadata** and `public/og-image.png` (1200×630) generated from the Lambda Biolab avatar
- **`public/llms.txt`** per the emerging AI-crawler content-guidance standard
- **`src/app/robots.ts`** with explicit allows for GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, CCBot, cohere-ai
- **`src/app/sitemap.ts`** with pinned `lastModified` (stable timestamps reduce crawler churn)
- **CSP `<meta>`** and `strict-origin-when-cross-origin` referrer policy in `<head>`
- **`src/lib/asset.ts`** + `NEXT_PUBLIC_BASE_PATH` env threading so `<Image>` srcs get the `/lambda-biolab-hack-a-thon/` prefix under `output: export`
- **`src/lib/useIsDark.ts`** — extracted theme hook reused by `Hero` and `Location`
- **`src/components/icons.tsx`** — shared brand + generic SVG icon components (GitHub, LinkedIn, Linktree, website, email)
- **Pre-hydration theme script** in `layout.tsx` (via `next/script strategy="beforeInteractive"`) eliminating the dark→light→dark FOUC
- **Leaflet map lazy-load** via `IntersectionObserver` with 200px rootMargin; dynamic import for both JS and CSS
- **Lambda Biolab avatar** as `src/app/icon.png` (replaces `create-next-app` default `favicon.ico`)
- **Footer contact row** with icons linking lambconsulting.bio, LinkedIn showcase, Linktree, email, GitHub org
- **LICENSE** (MIT) and `PHOTOS.md` — photo reuse constraints separate from the code grant
- **`.gitmessage`** — conventional-commits template
- **`.github/pull_request_template.md`** adapted from qte77 patterns
- **`.github/ISSUE_TEMPLATE/bug_report.yml`, `feature_request.yml`, `config.yml`** — issue forms with event contact routing
- **`.github/social-preview.png`** (1280×640) uploaded as repo social card
- **`.markdownlint.json`** + **`lychee.toml`** + **`.github/workflows/ci.yml`** — PR-level linting and link-checking
- **`scripts/optimize-photos.mjs`**, **`scripts/generate-og.mjs`**, **`scripts/install-claude-seo.sh`** maintenance scripts; **`scripts/README.md`** documenting all of them
- **`docs/marketing/`** scaffold — public/private boundary policy for marketing artifacts (companion private repo `lambda-hack-marketing-internal`)

### Changed

- **All raster photos (`public/photos/`, `public/tracks/`) → WebP**, resized to 1600w max for photos and 256w for track icons — site drops from ~98 MB to ~7 MB shipped
- **Google Maps "Get Directions" link → OpenStreetMap** (consistent with the existing CARTO/OSM tile basemap)
- **Footer tagline** from `Wild type since 2026` → `by Lambda Biolab · Bioengineering everything since 2022` (correct org founding year)
- **GitHub Actions**: all bumped to Node 24 runtime (`actions/checkout@v6`, `setup-node@v6` with Node 22, `configure-pages@v6`, `upload-pages-artifact@v5`, `deploy-pages@v5`, `pnpm/action-setup@v5`)
- **GitHub Pages source**: legacy `gh-pages` branch mode → workflow mode with `actions/deploy-pages`
- **`tsconfig.json`**: `noUncheckedIndexedAccess: true`
- **`Nav.tsx`**: replaced `useEffect`+`setState` theme init with lazy `useState` initializer (fixes React 19's `react-hooks/set-state-in-effect` lint rule)
- **Every `<Image fill>`**: added mobile-first `sizes` prop
- **CI matrix**: `pnpm audit --prod --audit-level high` runs before build on every deploy
- **README.md**: full rewrite with stack, commands, layout, and governance pointers

### Fixed

- **Image `src` basePath prefix** — `<Image>` with `images.unoptimized: true` emits plain `<img>` whose root-relative path resolves against origin root, breaking every photo on GitHub Pages. Fixed via `asset()` helper
- **GitHub Pages deploy stuck state** — PR-deploy chain was blocked by a stale "in progress" metadata lock in the Pages API; resolved by toggling `build_type: legacy` → `workflow`
- **Linktree SVG path** — inline path had coordinate errors (`H.225` → `H2.225`; `V0h5.472` → `V0h3.472`); replaced with canonical simple-icons path
- **Muted text contrast** — audited against WCAG AA thresholds (no change required, but documented)

### Security

- **CSP meta tag** restricting `default-src` to `self`, `img-src` allowing `https://*.basemaps.cartocdn.com` for map tiles
- **`referrer: strict-origin-when-cross-origin`** — outbound clicks only leak origin
- **Dependency audit** in CI (`pnpm audit --prod --audit-level high`) — currently zero known vulnerabilities

### Removed

- **Default `create-next-app` favicon** (`src/app/favicon.ico`)
- **Unused WebP assets** under `public/photos` and `public/tracks` (33 files, ~4 MB)
- **Legacy `gh-pages` branch** (Pages now served from GitHub Actions workflow)
- **Stale branches** `v1/initial-site` (fully superseded)
