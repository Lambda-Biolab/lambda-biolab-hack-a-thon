"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#tracks", label: "Tracks" },
  { href: "#schedule", label: "Schedule" },
  { href: "#results-round", label: "Results" },
  { href: "#rules", label: "Rules" },
  { href: "#register", label: "Register" },
];

type Theme = "system" | "light" | "dark";

function useTheme() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
      document.documentElement.classList.add(saved);
    }
  }, []);

  const cycle = () => {
    const next: Theme = theme === "system" ? "dark" : theme === "dark" ? "light" : "system";
    document.documentElement.classList.remove("dark", "light");
    if (next !== "system") {
      document.documentElement.classList.add(next);
      localStorage.setItem("theme", next);
    } else {
      localStorage.removeItem("theme");
    }
    setTheme(next);
  };

  return { theme, cycle };
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { theme, cycle } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-lg border-b border-edge">
      <div className="mx-auto max-w-4xl flex items-center justify-between px-6 h-14">
        <a href="#" className="flex items-baseline gap-1.5">
          <span className="text-base font-semibold text-t1 tracking-tight">
            Lambda Hack
          </span>
          <span className="text-xs font-mono text-t3 uppercase tracking-wider">
            Basel
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-t2 hover:text-t1 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={cycle}
            className="text-t2 hover:text-t1 transition-colors p-1.5"
            aria-label={`Theme: ${theme}`}
            title={`Theme: ${theme}`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              {theme === "dark" ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              ) : theme === "light" ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              )}
            </svg>
          </button>
          <a
            href="#register"
            className="bg-accent text-accent-t text-sm font-medium px-5 py-1.5 rounded-md hover:bg-accent-h transition-colors"
          >
            Register
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-t1 p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-bg border-t border-edge px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-t2 hover:text-t1 transition-colors py-1"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={cycle}
            className="text-sm font-medium text-t2 hover:text-t1 transition-colors py-1 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              {theme === "dark" ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              ) : theme === "light" ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              )}
            </svg>
            {theme === "dark" ? "Dark" : theme === "light" ? "Light" : "System"}
          </button>
          <a
            href="#register"
            onClick={() => setOpen(false)}
            className="bg-accent text-accent-t text-sm font-medium px-5 py-2 rounded-md text-center mt-1"
          >
            Register
          </a>
        </div>
      )}
    </nav>
  );
}
