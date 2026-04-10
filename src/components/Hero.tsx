export default function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-40 md:pb-24 px-6">
      <div className="mx-auto max-w-4xl text-center">
        {/* Group 1 — Identity + Hook */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-t1 leading-[1.08] tracking-tight">
          Lambda Hack Basel
        </h1>

        <p className="mt-4 text-base md:text-lg text-t2">
          A one-day hackathon in Basel&apos;s most advanced and affordable DIY Laboratory
        </p>

        <p className="mt-6 text-lg md:text-xl text-t3 max-w-lg mx-auto leading-relaxed">
          Four tracks. One basement. Zero gatekeeping.
        </p>

        <p className="mt-4 text-sm text-t3 max-w-md mx-auto">
          Insert your idea. We&apos;ll provide the backbone.
        </p>

        {/* Group 2 — Key Details */}
        <div className="mt-8 inline-flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-0 rounded-lg border border-edge bg-surface px-5 py-3 text-sm text-t2">
          <span>18 April 2026</span>
          <span aria-hidden="true" className="hidden sm:inline text-t3 mx-2.5">/</span>
          <span>Riehenstrasse 6/14, Basel</span>
          <span aria-hidden="true" className="hidden sm:inline text-t3 mx-2.5">/</span>
          <span>Free &middot; ~10 spots</span>
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
      </div>
    </section>
  );
}
