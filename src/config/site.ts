// Single source of truth for URLs, event metadata, org identity, and
// contact links. Consumed by layout.tsx (metadata, JSON-LD), robots.ts,
// sitemap.ts, Footer.tsx, Location.tsx, Register.tsx.
//
// Display copy that lives inside components (hero paragraphs, schedule
// items, track descriptions) is deliberately NOT pulled in here — that
// would couple structured data with presentation and fight editing flow.

export const site = {
  url: "https://hack-basel.lambdabiolab.com",
  name: "Lambda Hack Basel",
  title: "Lambda Hack Basel — May 16–17, 2026",
  description:
    "Five tracks. One basement. Zero gatekeeping. A scrappy hackathon at the intersection of biology, computation, hardware, and everything else.",
  locale: "en_CH",
  ogImagePath: "/og-image.png",

  event: {
    startDate: "2026-05-16T09:00:00+02:00",
    endDate: "2026-05-17T17:00:00+02:00",
    registrationUrl: "https://luma.com/s9p5bntq",
    venue: {
      name: "Lambda Biolab",
      streetAddress: "Riehenstrasse 14",
      postalCode: "4058",
      addressLocality: "Basel",
      addressCountry: "CH",
      coordinates: [47.5602132, 7.5974754] as const,
    },
  },

  org: {
    name: "Lambda Biolab",
    tagline: "Bioengineering everything since 2022",
    foundingYear: "2022",
    website: "https://www.lambconsulting.bio",
    email: "contact@lambconsulting.bio",
    linkedin: "https://ch.linkedin.com/showcase/lambda-biolab/",
    github: "https://github.com/Lambda-Biolab",
    linktree: "https://linktr.ee/lambdabiolab",
  },
} as const;
