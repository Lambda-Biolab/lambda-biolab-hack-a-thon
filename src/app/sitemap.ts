import type { MetadataRoute } from "next";

const SITE_URL = "https://lambda-biolab.github.io/lambda-biolab-hack-a-thon";

// Static export requires dynamic = "force-static" on Metadata Route handlers.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
