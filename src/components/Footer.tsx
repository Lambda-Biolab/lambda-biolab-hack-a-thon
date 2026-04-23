import {
  EmailIcon,
  GithubIcon,
  LinkedInIcon,
  LinktreeIcon,
  WebsiteIcon,
} from "@/components/icons";

type ContactLink = {
  href: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const contactLinks: ContactLink[] = [
  {
    href: "https://lambconsulting.bio/lambda-biolab",
    label: "lambconsulting.bio",
    Icon: WebsiteIcon,
  },
  {
    href: "https://linktr.ee/lambdabiolab",
    label: "Linktree",
    Icon: LinktreeIcon,
  },
  {
    href: "https://ch.linkedin.com/showcase/lambda-biolab/",
    label: "LinkedIn",
    Icon: LinkedInIcon,
  },
  {
    href: "mailto:contact@lambconsulting.bio",
    label: "contact@lambconsulting.bio",
    Icon: EmailIcon,
  },
  {
    href: "https://github.com/Lambda-Biolab",
    label: "GitHub",
    Icon: GithubIcon,
  },
];

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
          {contactLinks.map(({ href, label, Icon }) => {
            const isMailto = href.startsWith("mailto:");
            return (
              <a
                key={href}
                href={href}
                target={isMailto ? undefined : "_blank"}
                rel={isMailto ? undefined : "noopener noreferrer"}
                className="inline-flex items-center gap-1.5 hover:text-t1 transition-colors"
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
