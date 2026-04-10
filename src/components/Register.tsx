"use client";

import { useState } from "react";

const trackOptions = [
  { value: "biology", label: "Biology (Wet Lab)", color: "var(--track-bio)" },
  { value: "computational", label: "Computational / IT", color: "var(--track-compute)" },
  { value: "hardware", label: "Hardware / Robotics", color: "var(--track-hardware)" },
  { value: "byot", label: "Bring Your Own Topic", color: "var(--track-byot)" },
];

export default function Register() {
  const [track, setTrack] = useState("");
  const [hasProject, setHasProject] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section id="register" className="py-16 md:py-24 px-6">
        <div className="mx-auto max-w-md text-center">
          <div className="bg-surface border border-edge rounded-xl p-10">
            <p className="text-accent text-2xl mb-2">&#10003;</p>
            <h3 className="text-lg font-semibold text-t1 mb-1">Payload received.</h3>
            <p className="text-sm text-t2">
              Transformation successful. Screen your inbox for confirmation.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-16 md:py-24 px-6">
      <div className="mx-auto max-w-md">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-t1 tracking-tight">
            Register
          </h2>
          <p className="mt-3 text-sm text-t2">
            Free to attend &middot; Deadline 16 April &middot; ~10 spots
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="bg-surface border border-edge rounded-xl p-6 space-y-5"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-semibold uppercase tracking-wider text-t3 mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Your name"
              className="w-full bg-bg border border-edge rounded-lg px-4 py-2.5 text-sm text-t1 placeholder:text-t3 focus:border-accent transition-colors outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold uppercase tracking-wider text-t3 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full bg-bg border border-edge rounded-lg px-4 py-2.5 text-sm text-t1 placeholder:text-t3 focus:border-accent transition-colors outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-t3 mb-2">
              Track
            </label>
            <div className="space-y-2">
              {trackOptions.map((opt) => (
                <label
                  key={opt.value}
                  className={`flex items-center gap-3 bg-bg border rounded-lg px-4 py-2.5 cursor-pointer transition-colors text-sm ${
                    track === opt.value
                      ? "border-accent"
                      : "border-edge hover:border-edge-h"
                  }`}
                >
                  <input
                    type="radio"
                    name="track"
                    value={opt.value}
                    checked={track === opt.value}
                    onChange={() => {
                      setTrack(opt.value);
                      if (opt.value !== "byot") setHasProject(false);
                    }}
                    className="sr-only"
                    required
                  />
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{
                      backgroundColor:
                        track === opt.value ? opt.color : "var(--color-t3)",
                      opacity: track === opt.value ? 1 : 0.3,
                    }}
                  />
                  <span className={track === opt.value ? "text-t1 font-medium" : "text-t2"}>
                    {opt.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {track === "byot" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-t3">
                  Existing project?
                </span>
                <button
                  type="button"
                  onClick={() => setHasProject(!hasProject)}
                  className={`relative w-9 h-5 rounded-full transition-colors ${
                    hasProject ? "bg-accent" : "bg-edge-h"
                  }`}
                >
                  <span
                    className={`absolute top-[2px] left-[2px] w-4 h-4 bg-bg rounded-full transition-transform ${
                      hasProject ? "translate-x-4" : ""
                    }`}
                  />
                </button>
              </div>

              {hasProject && (
                <div>
                  <label
                    htmlFor="project"
                    className="block text-xs font-semibold uppercase tracking-wider text-t3 mb-2"
                  >
                    Project description
                  </label>
                  <textarea
                    id="project"
                    rows={3}
                    placeholder="What are you working on?"
                    className="w-full bg-bg border border-edge rounded-lg px-4 py-2.5 text-sm text-t1 placeholder:text-t3 focus:border-accent transition-colors outline-none resize-none"
                  />
                </div>
              )}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-accent text-accent-t font-semibold py-3 rounded-lg hover:bg-accent-h transition-colors text-base"
          >
            Register
          </button>

          <p className="text-xs text-t3 text-center">
            We&apos;ll confirm your spot by email.
          </p>
        </form>
      </div>
    </section>
  );
}
