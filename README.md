# Lambda Hack Basel

![Lambda Hack Basel — May 16–17, 2026. Five tracks. Real lab. Open science. By Lambda Biolab.](.github/social-preview.png)

Website for **Lambda Hack Basel** — a scrappy hackathon at the intersection of biology, computation, hardware, and everything else. May 16–17, 2026. By [Lambda Biolab](https://lambconsulting.bio/lambda-biolab).

Live: **[hack-basel.lambdabiolab.com](https://hack-basel.lambdabiolab.com/)**

## Stack

- Next.js 16 (App Router, static export)
- React 19, TypeScript (strict + `noUncheckedIndexedAccess`)
- Tailwind CSS 4
- Leaflet (lazy-loaded for the location map)
- Deployed to GitHub Pages via [`actions/deploy-pages`](https://github.com/actions/deploy-pages)

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## Build

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build                        # regular build (no basePath)
GITHUB_PAGES=true pnpm build      # GitHub Pages static export
```

`GITHUB_PAGES=true` activates:

- `output: "export"` — static HTML/CSS/JS under `out/`

The site is served from the custom domain `hack-basel.lambdabiolab.com` at the origin root, so no `basePath` is set. The `public/CNAME` file pins the custom-domain setting so it survives every deploy. Centralized site metadata (URL, event, org) lives in [`src/config/site.ts`](./src/config/site.ts).

## Maintenance

```bash
pnpm lint:md             # markdownlint on all .md
pnpm lint:md:fix         # auto-fix markdownlint findings
pnpm lint:links          # lychee link check on all .md
pnpm optimize:photos     # re-encode public/photos to WebP via sharp
pnpm generate:og         # regenerate og-image.png + .github/social-preview.png
pnpm audit --prod --audit-level high   # security audit (runs in CI)
```

See [`scripts/README.md`](./scripts/README.md) for the full script inventory and the optional [`claude-seo`](https://github.com/AgriciDaniel/claude-seo) audit installer.

## Layout

```text
src/
  app/
    layout.tsx    # root, metadata, CSP, theme init script
    page.tsx      # home (all sections)
    robots.ts     # /robots.txt
    sitemap.ts    # /sitemap.xml
    icon.png      # Lambda Biolab avatar, served as favicon
  components/
    Nav, Hero, Tracks, LabStrip, Schedule, ResultsRound,
    Location, Rules, Register, Footer
    icons.tsx     # shared brand + generic SVG icon components
  lib/
    asset.ts      # prefix srcs with NEXT_PUBLIC_BASE_PATH
    useIsDark.ts  # theme hook (shared by Hero + Location)
public/
  photos/         # event imagery (WebP; see PHOTOS.md)
  tracks/         # track card icons
scripts/
  optimize-photos.mjs    # sharp pipeline, re-runnable
  generate-og.mjs        # OG + GitHub social preview images
```

## Design

See [`DESIGN.md`](./DESIGN.md) for the design system (Linear-inspired; system light/dark; brand accent `#5e6ad2`).

## Contributing

- Commit style: see [`.gitmessage`](./.gitmessage) — Conventional Commits. Apply locally with `git config commit.template .gitmessage`.
- PR template + issue templates under [`.github/`](./.github/) cover expected checks and categories.
- Site content licensed under [`LICENSE`](./LICENSE) (MIT).
- Photos under `public/photos/` are covered separately — see [`PHOTOS.md`](./PHOTOS.md). Forks: supply your own imagery.

## Deployment

Two workflows cover the lifecycle:

- [`.github/workflows/ci.yml`](./.github/workflows/ci.yml) — runs on every pull request and push to `main`: `tsc --noEmit`, `pnpm lint`, `pnpm lint:md`, `pnpm audit --prod --audit-level high`, `GITHUB_PAGES=true pnpm build`, and lychee link check via `lycheeverse/lychee-action`.
- [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) — runs on push to `main` (and `workflow_dispatch` from any branch): builds and publishes via GitHub Pages (workflow-mode deploy).

## Changelog

Release history and notable changes: [`CHANGELOG.md`](./CHANGELOG.md) (Keep-a-Changelog + SemVer).
