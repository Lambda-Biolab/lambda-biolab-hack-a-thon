# Agent Instructions

Behavioural rules for AI coding agents on this repo.
For technical workflow (setup, commands, PR process), see [CONTRIBUTING.md](CONTRIBUTING.md).
For project overview, see [README.md](README.md).

**Always-loaded session rules**: `.claude/rules/`
— `core-principles.md` (KISS / DRY / YAGNI), `context-management.md` (ACE-FCA), `compound-learning.md` (pattern-promotion path).

## Core rules

- Never assume missing context — ask if uncertain.
- Never hallucinate libraries — only use what's in `package.json`.
- Never delete existing code unless explicitly instructed.
- Prefer editing existing files over creating new ones.
- Keep URLs / event metadata / contact links only in [`src/config/site.ts`](src/config/site.ts). No duplication elsewhere.
- Photos go through `pnpm optimize:photos`. Brand icons live in [`src/components/icons.tsx`](src/components/icons.tsx). See CONTRIBUTING.md for the full pattern list.

## Decision framework

**Priority**: user instructions → AGENTS.md → `.claude/rules/` → project patterns → general best practices.

**Match the requested scope exactly.** No speculative features. If complexity is unclear, ask.

## Escalation

Write to [`AGENT_REQUESTS.md`](AGENT_REQUESTS.md) when:

- User instructions conflict with safety/security.
- Rules contradict each other.
- Required information is completely missing.
- Action would meaningfully change architecture or deploy target.

## Compound learning

When a non-obvious pattern surfaces for the **second** time, add it to [`AGENT_LEARNINGS.md`](AGENT_LEARNINGS.md). On the **third**, promote to `.claude/rules/`. See `.claude/rules/compound-learning.md` for the promotion path.

## Quality gate

Every task, before completion: the full CI stack passes locally (see `CONTRIBUTING.md` → Pre-PR checks). `main` is protected — you cannot bypass.
