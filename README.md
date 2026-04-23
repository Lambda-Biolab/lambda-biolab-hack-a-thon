# Lambda Hack Basel

![Lambda Hack Basel — May 16–17, 2026. Five tracks. Real lab. Open science. By Lambda Biolab.](.github/social-preview.png)

Website for **Lambda Hack Basel** — a scrappy hackathon at the intersection of biology, computation, hardware, and everything else. May 16–17, 2026. By [Lambda Biolab](https://lambconsulting.bio/lambda-biolab).

Live: **[lambda-biolab.github.io/lambda-biolab-hack-a-thon](https://lambda-biolab.github.io/lambda-biolab-hack-a-thon/)**

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
- `basePath: "/lambda-biolab-hack-a-thon"` — prefix all URLs
- `NEXT_PUBLIC_BASE_PATH` — used by `src/lib/asset.ts` to prefix `<Image>` srcs

## Maintenance

```bash
pnpm optimize:photos     # re-encode public/photos to WebP via sharp
pnpm audit --prod --audit-level high   # security audit (runs in CI)
```

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

Pushes to `main` trigger [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml), which builds and publishes via GitHub Pages (workflow-mode). Manual dispatches (Actions → "Deploy to GitHub Pages" → "Run workflow") can target any branch.
