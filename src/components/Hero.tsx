export default function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-40 md:pb-24 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-mono text-t3 uppercase tracking-[0.08em] mb-5">
          18 April 2026 &middot; Basel, Switzerland
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-t1 leading-[1.08] tracking-tight">
          Lambda Hack Basel
        </h1>

        <p className="mt-5 text-lg md:text-xl text-t2 max-w-lg mx-auto leading-relaxed">
          Four tracks. One basement. Zero gatekeeping.
        </p>

        <p className="mt-3 text-sm text-t3">
          Riehenstrasse 6/14 &middot; Free to attend &middot; ~10 spots
        </p>

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
