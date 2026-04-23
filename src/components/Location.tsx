"use client";

import { useEffect, useRef } from "react";
import type { Map as LeafletMap, TileLayer } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useIsDark } from "@/lib/useIsDark";

const ADDRESS = "Riehenstrasse 14, 4058 Basel";
const COORDS: [number, number] = [47.5602132, 7.5974754];

const TILES = {
  light: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
  dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
};
const ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>';

export default function Location() {
  const mapsUrl = `https://www.openstreetmap.org/directions?to=${COORDS[0]}%2C${COORDS[1]}`;
  const isDark = useIsDark();
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const tileLayerRef = useRef<TileLayer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    let cancelled = false;

    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !containerRef.current) return;

      if (!mapRef.current) {
        mapRef.current = L.map(containerRef.current, {
          center: COORDS,
          zoom: 15,
          scrollWheelZoom: false,
          attributionControl: true,
        });

        const icon = L.divIcon({
          className: "lambda-marker",
          html: '<div class="lambda-marker-dot"></div>',
          iconSize: [16, 16],
          iconAnchor: [8, 8],
        });
        L.marker(COORDS, { icon }).addTo(mapRef.current);
      }

      tileLayerRef.current?.remove();
      tileLayerRef.current = L.tileLayer(isDark ? TILES.dark : TILES.light, {
        attribution: ATTRIBUTION,
        maxZoom: 19,
      }).addTo(mapRef.current);
    })();

    return () => {
      cancelled = true;
    };
  }, [isDark]);

  useEffect(
    () => () => {
      mapRef.current?.remove();
      mapRef.current = null;
      tileLayerRef.current = null;
    },
    []
  );

  return (
    <section id="location" className="py-16 md:py-24 px-6">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-t1 tracking-tight">
            Location
          </h2>
          <p className="mt-3 text-base text-t2">{ADDRESS}</p>
        </div>

        <div className="rounded-xl overflow-hidden border border-edge hover:border-edge-h transition-colors relative">
          <div ref={containerRef} className="h-80 w-full" aria-label={`Map showing ${ADDRESS}`} />
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[400] bg-surface border border-edge rounded-lg px-4 py-2 text-sm font-medium text-t1 shadow-sm flex items-center gap-2 hover:border-edge-h transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
            </svg>
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
