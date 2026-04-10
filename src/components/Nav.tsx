"use client";

import { useState } from "react";

const links = [
  { href: "#tracks", label: "Tracks" },
  { href: "#schedule", label: "Schedule" },
  { href: "#register", label: "Register" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

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
