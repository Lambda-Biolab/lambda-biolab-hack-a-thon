type IconKey = "website" | "linktree" | "linkedin" | "email" | "github";

const contactLinks: { href: string; label: string; icon: IconKey }[] = [
  {
    href: "https://lambconsulting.bio/lambda-biolab",
    label: "lambconsulting.bio",
    icon: "website",
  },
  {
    href: "https://linktr.ee/lambdabiolab",
    label: "Linktree",
    icon: "linktree",
  },
  {
    href: "https://ch.linkedin.com/showcase/lambda-biolab/",
    label: "LinkedIn",
    icon: "linkedin",
  },
  {
    href: "mailto:contact@lambconsulting.bio",
    label: "contact@lambconsulting.bio",
    icon: "email",
  },
  {
    href: "https://github.com/Lambda-Biolab",
    label: "GitHub",
    icon: "github",
  },
];

const icons: Record<IconKey, React.ReactNode> = {
  website: (
    <svg
      viewBox="0 0 24 24"
      className="w-3.5 h-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M3 12h18" />
      <path
        strokeLinecap="round"
        d="M12 3c2.5 2.4 4 5.8 4 9s-1.5 6.6-4 9"
      />
      <path
        strokeLinecap="round"
        d="M12 3c-2.5 2.4-4 5.8-4 9s1.5 6.6 4 9"
      />
    </svg>
  ),
  email: (
    <svg
      viewBox="0 0 24 24"
      className="w-3.5 h-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m3 7 9 6 9-6" />
    </svg>
  ),
  github: (
    <svg
      viewBox="0 0 24 24"
      className="w-3.5 h-3.5 fill-current"
    >
      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.96 3.21 9.16 7.67 10.65.56.1.77-.24.77-.54 0-.27-.01-1.16-.02-2.11-3.12.68-3.78-1.32-3.78-1.32-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.49-.28-5.11-1.25-5.11-5.54 0-1.22.44-2.22 1.16-3-.12-.29-.5-1.43.11-2.98 0 0 .94-.3 3.09 1.15a10.7 10.7 0 0 1 5.63 0c2.15-1.45 3.09-1.15 3.09-1.15.61 1.55.23 2.69.11 2.98.72.78 1.16 1.78 1.16 3 0 4.3-2.62 5.25-5.12 5.53.4.34.76 1.02.76 2.06 0 1.49-.01 2.69-.01 3.05 0 .3.2.65.78.54 4.45-1.5 7.66-5.7 7.66-10.65C23.25 5.48 18.27.5 12 .5z" />
    </svg>
  ),
  linkedin: (
    <svg
      viewBox="0 0 24 24"
      className="w-3.5 h-3.5 fill-current"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  ),
  linktree: (
    <svg
      viewBox="0 0 24 24"
      className="w-3.5 h-3.5 fill-current"
    >
      <path d="M13.736 5.853l4.005-4.117 2.325 2.381-4.2 4.005h5.909v3.305h-5.937l4.229 4.108-2.325 2.334-5.741-5.769-5.741 5.769-2.325-2.334 4.229-4.108H.225V8.122h5.909l-4.2-4.005L4.259 1.736l4.005 4.117V0h5.472v5.853zM10.264 16.497h3.472V24h-3.472v-7.503z" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="border-t border-edge py-8 px-6">
      <div className="mx-auto max-w-4xl flex flex-col gap-4 text-xs text-t3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <span>
            Lambda Hack Basel &middot; by Lambda Biolab &middot; Bioengineering
            everything since 2022
          </span>
          <span className="font-mono">
            Riehenstrasse 14, 4058 Basel &middot; Switzerland &middot; May 16–17, 2026
          </span>
        </div>
        <nav
          aria-label="Lambda Biolab contact links"
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
        >
          {contactLinks.map((link) => {
            const isMailto = link.href.startsWith("mailto:");
            return (
              <a
                key={link.href}
                href={link.href}
                target={isMailto ? undefined : "_blank"}
                rel={isMailto ? undefined : "noopener noreferrer"}
                className="inline-flex items-center gap-1.5 hover:text-t1 transition-colors"
              >
                <span aria-hidden="true" className="shrink-0">
                  {icons[link.icon]}
                </span>
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
