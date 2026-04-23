const contactLinks = [
  {
    href: "https://lambconsulting.bio/lambda-biolab",
    label: "lambconsulting.bio/lambda-biolab",
  },
  {
    href: "https://linktr.ee/lambdabiolab",
    label: "linktr.ee/lambdabiolab",
  },
  {
    href: "mailto:contact@lambconsulting.bio",
    label: "contact@lambconsulting.bio",
  },
  {
    href: "https://github.com/Lambda-Biolab",
    label: "github.com/Lambda-Biolab",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-edge py-8 px-6">
      <div className="mx-auto max-w-4xl flex flex-col gap-4 text-xs text-t3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <span>Lambda Hack Basel &middot; Wild type since 2026</span>
          <span className="font-mono">
            Riehenstrasse 14, 4058 Basel &middot; Switzerland &middot; May 16–17, 2026
          </span>
        </div>
        <nav
          aria-label="Lambda Biolab contact links"
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1"
        >
          {contactLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="hover:text-t1 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
