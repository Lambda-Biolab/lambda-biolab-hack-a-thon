import Image from "next/image";
import { GithubIcon } from "@/components/icons";
import { site } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden">
      {/* Lab background — different images for light/dark */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/photos/lab-user.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-90 dark:opacity-0"
          priority
        />
        <Image
          src="/photos/signal-2025-10-06-025755_002.webp"
          alt=""
          fill
          sizes="100vw"
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
          A two-day hackathon in Basel&apos;s most advanced and affordable DIY Laboratory
        </p>

        <p className="mt-6 text-lg md:text-xl text-t3 max-w-lg mx-auto leading-relaxed">
          Five tracks. Real lab. Open science.
        </p>

        {/* Group 2 — Key Details */}
        <div className="mt-8 inline-flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-0 rounded-lg border border-edge bg-surface backdrop-blur-md px-5 py-3 text-sm text-t1">
          <span>May 16–17, 2026</span>
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
            href={site.org.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-t3 hover:text-t1 transition-colors"
            aria-label="Lambda Biolab on GitHub"
          >
            <GithubIcon />
            <span>{site.org.github.replace(/^https?:\/\//, "")}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
