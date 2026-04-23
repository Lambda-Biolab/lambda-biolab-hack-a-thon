type IconProps = { className?: string };

// Brand glyphs — paths sourced from simple-icons
// (https://simpleicons.org — community-maintained, matches each brand's
// official monochrome mark). If a brand updates their logo, update the
// path from the same source. Filled with currentColor so they inherit
// the parent's text color and hover transitions.

export function GithubIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${className} fill-current`}
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.96 3.21 9.16 7.67 10.65.56.1.77-.24.77-.54 0-.27-.01-1.16-.02-2.11-3.12.68-3.78-1.32-3.78-1.32-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.49-.28-5.11-1.25-5.11-5.54 0-1.22.44-2.22 1.16-3-.12-.29-.5-1.43.11-2.98 0 0 .94-.3 3.09 1.15a10.7 10.7 0 0 1 5.63 0c2.15-1.45 3.09-1.15 3.09-1.15.61 1.55.23 2.69.11 2.98.72.78 1.16 1.78 1.16 3 0 4.3-2.62 5.25-5.12 5.53.4.34.76 1.02.76 2.06 0 1.49-.01 2.69-.01 3.05 0 .3.2.65.78.54 4.45-1.5 7.66-5.7 7.66-10.65C23.25 5.48 18.27.5 12 .5z" />
    </svg>
  );
}

export function LinkedInIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${className} fill-current`}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function LinktreeIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${className} fill-current`}
      aria-hidden="true"
    >
      <path d="M13.736 5.853l4.005-4.117 2.325 2.381-4.2 4.005h5.909v3.305h-5.937l4.229 4.108-2.325 2.334-5.741-5.769-5.741 5.769-2.325-2.334 4.229-4.108H2.225V8.122h5.909l-4.2-4.005 2.325-2.381 4.005 4.117V0h3.472v5.853zM10.264 16.497h3.472V24h-3.472v-7.503z" />
    </svg>
  );
}

// Generic-concept stroke icons — match the existing Nav/Rules icon style
// (1.5 stroke, currentColor). Not brand marks.

export function WebsiteIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M3 12h18" />
      <path strokeLinecap="round" d="M12 3c2.5 2.4 4 5.8 4 9s-1.5 6.6-4 9" />
      <path strokeLinecap="round" d="M12 3c-2.5 2.4-4 5.8-4 9s1.5 6.6 4 9" />
    </svg>
  );
}

export function EmailIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m3 7 9 6 9-6" />
    </svg>
  );
}
