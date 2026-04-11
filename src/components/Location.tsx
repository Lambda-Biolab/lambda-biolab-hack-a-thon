"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

function useIsDark() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const check = () => {
      const html = document.documentElement;
      const hasDarkClass = html.classList.contains("dark");
      const hasLightClass = html.classList.contains("light");
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(hasDarkClass || (!hasLightClass && systemDark));
    };

    check();

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", check);

    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      mq.removeEventListener("change", check);
      observer.disconnect();
    };
  }, []);

  return isDark;
}

export default function Location() {
  const address = "Riehenstrasse 14, 4058 Basel";
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
  const isDark = useIsDark();

  return (
    <section id="location" className="py-16 md:py-24 px-6">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-t1 tracking-tight">
            Location
          </h2>
          <p className="mt-3 text-base text-t2">
            {address}
          </p>
        </div>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl overflow-hidden border border-edge hover:border-edge-h transition-colors group relative"
        >
          <Image
            src={isDark ? "/photos/map-dark.png" : "/photos/map-light.png"}
            alt={`Map showing ${address}`}
            width={800}
            height={400}
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-transparent group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors flex items-end justify-center pb-4">
            <span className="bg-surface border border-edge rounded-lg px-4 py-2 text-sm font-medium text-t1 shadow-sm flex items-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
              </svg>
              Get Directions
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
