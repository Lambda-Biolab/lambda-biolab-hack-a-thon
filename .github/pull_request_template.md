# Summary

<!-- Brief description of what this PR does and why -->

Closes <!-- #issue-number or N/A -->

## Type of Change

<!-- Commit type must match .gitmessage: feat|fix|build|chore|ci|docs|style|refactor|perf|revert|test -->

- [ ] `feat` — new section, component, or user-visible feature
- [ ] `fix` — bug fix (rendering, a11y, broken link, etc.)
- [ ] `docs` — README, comments, plan files
- [ ] `refactor` — no functional change
- [ ] `ci` — GitHub Actions, deploy workflow
- [ ] `chore` — dependencies, tooling, config
- [ ] `style` — formatting, Tailwind class reordering (no logic change)
- [ ] `perf` — performance (bundle size, TTI, image size)
- [ ] `revert` — reverts a previous commit
- [ ] **Breaking change** — add `!` after commit type, e.g. `feat!:` or `feat(nav)!:`

## Self-Review

- [ ] I reviewed my own diff and removed debug/dead code
- [ ] Commit messages follow [`.gitmessage`](../.gitmessage): `type[(scope)][!]: description`
- [ ] No secrets, tokens, or sensitive data committed

## Testing

- [ ] `pnpm exec tsc --noEmit` passes
- [ ] `pnpm lint` passes
- [ ] `pnpm build` produces `out/` without errors
- [ ] `pnpm audit --prod --audit-level high` clean (if deps changed)
- [ ] Manual smoke in both mobile (≤390px) and desktop viewports
- [ ] Manual smoke in both light and dark theme

## Accessibility & Privacy

- [ ] New images have meaningful `alt` text (or `alt=""` + `aria-hidden` if decorative)
- [ ] New external links use `target="_blank" rel="noopener noreferrer"`
- [ ] No new third-party scripts/trackers/fonts/images outside the allowed CSP origins
- [ ] WCAG AA contrast preserved for any new color tokens
