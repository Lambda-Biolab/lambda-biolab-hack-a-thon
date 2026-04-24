import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export const dynamic = "force-static";

// Static lastModified — updated when site content materially changes.
// Build-time new Date() is unstable (drifts with every deploy) and signals
// noise to crawlers; pin to the most recent substantive content change.
const LAST_MODIFIED = "2026-04-23";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
