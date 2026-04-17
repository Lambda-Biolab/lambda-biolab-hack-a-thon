import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden">
      {/* Lab background — different images for light/dark */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/photos/lab-user.jpg"
          alt=""
          fill
          className="object-cover opacity-90 dark:opacity-0"
          priority
        />
        <Image
          src="/photos/signal-2025-10-06-025755_002.jpeg"
          alt=""
          fill
          className="object-cover opacity-0 dark:opacity-80"
        />
        {/* Gradient overlay to keep text legible without hiding the image */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/20 via-bg/40 to-bg dark:from-bg/20 dark:via-bg/45 dark:to-bg" />
        <div className="absolute inset-0 backdrop-blur-[3px]" />
        {/* Soft radial vignette behind hero text for legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 50% 42%, color-mix(in srgb, var(--color-bg) 92%, transparent), color-mix(in srgb, var(--color-bg) 60%, transparent) 55%, transparent 85%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        {/* Group 1 — Identity + Hook */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-t1 leading-[1.08] tracking-tight">
          Lambda Hack Basel
        </h1>

        <p className="mt-4 text-base md:text-lg text-t2">
          A one-day hackathon in Basel&apos;s most advanced and affordable DIY Laboratory
        </p>

        <p className="mt-6 text-lg md:text-xl text-t3 max-w-lg mx-auto leading-relaxed">
          Five tracks. Real lab. Open science.
        </p>

        {/* Group 2 — Key Details */}
        <div className="mt-8 inline-flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-0 rounded-lg border border-edge bg-surface backdrop-blur-md px-5 py-3 text-sm text-t1">
          <span>May 16, 2026</span>
          <span aria-hidden="true" className="hidden sm:inline text-t3 mx-2.5">/</span>
          <span>Riehenstrasse 14, 4058 Basel</span>
          <span aria-hidden="true" className="hidden sm:inline text-t3 mx-2.5">/</span>
          <span>Free</span>
        </div>

        {/* Group 3 — CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#register"
            className="bg-accent text-accent-t font-medium px-7 py-2.5 rounded-md hover:bg-accent-h transition-colors text-base"
          >
            Register Now
          </a>
          <a
            href="#tracks"
            className="border border-edge text-t1 font-medium px-7 py-2.5 rounded-md hover:border-edge-h transition-colors text-base"
          >
            View Tracks
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center">
          <a
            href="https://github.com/Lambda-Biolab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-t3 hover:text-t1 transition-colors"
            aria-label="Lambda Biolab on GitHub"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-current"
            >
              <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.96 3.21 9.16 7.67 10.65.56.1.77-.24.77-.54 0-.27-.01-1.16-.02-2.11-3.12.68-3.78-1.32-3.78-1.32-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.49-.28-5.11-1.25-5.11-5.54 0-1.22.44-2.22 1.16-3-.12-.29-.5-1.43.11-2.98 0 0 .94-.3 3.09 1.15a10.7 10.7 0 0 1 5.63 0c2.15-1.45 3.09-1.15 3.09-1.15.61 1.55.23 2.69.11 2.98.72.78 1.16 1.78 1.16 3 0 4.3-2.62 5.25-5.12 5.53.4.34.76 1.02.76 2.06 0 1.49-.01 2.69-.01 3.05 0 .3.2.65.78.54 4.45-1.5 7.66-5.7 7.66-10.65C23.25 5.48 18.27.5 12 .5z" />
            </svg>
            <span>github.com/Lambda-Biolab</span>
          </a>
        </div>
      </div>
    </section>
  );
}
