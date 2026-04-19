# Marketing artifacts — public

This directory holds **public-facing** marketing artifacts for Lambda Hack Basel.

| Subdir | What lives here |
|---|---|
| `audit/` | Website audit findings (usability, accessibility, design). Publishing these signals transparency and care. |
| `announcements/` | Event announcement copy, press release, social posts. Public by design. |
| `sponsor/` | Sponsor one-pager, public pitch deck, partnership page. Outward-facing. |
| `research-public/` | Sanitized, fact-checked market research outputs safe to publish (e.g., audience overview, public landscape). |

## What does NOT go here

Anything with any of the following goes in the **private** sibling repo
[lambda-hack-marketing-internal](https://github.com/Lambda-Biolab/lambda-hack-marketing-internal):

- Personally identifiable info (PII) of prospects, partners, or attendees without consent
- Outreach lists with names, emails, LinkedIn URLs
- Budget or financial figures
- Raw / draft market-research output before fact-checking
- Candid competitive analysis (risk of hallucinated or disparaging claims)
- Sponsor-specific internal notes or negotiation drafts
- Any content under active revision with "TBD", placeholder text, or unresolved assertions

## Workflow

1. Run marketing plugins (`market-research`, `docs-generator`) in the **private** repo.
2. Fact-check and sanitize outputs there.
3. Copy finalized, reviewed artifacts into this directory via explicit `cp`.
4. Commit to this public repo.

Once published here, it is public forever (git history is immutable even after delete).
