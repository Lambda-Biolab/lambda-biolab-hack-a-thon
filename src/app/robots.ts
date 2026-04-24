import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export const dynamic = "force-static";

// AI crawlers we explicitly welcome. Most are already covered by
// User-Agent: * (Allow: /), but listing them individually signals
// intent and future-proofs against platforms that flip defaults.
const AI_CRAWLERS = [
  "GPTBot", // OpenAI — ChatGPT web search
  "OAI-SearchBot", // OpenAI — search features
  "ChatGPT-User", // OpenAI — ChatGPT browsing
  "ClaudeBot", // Anthropic — Claude web features
  "anthropic-ai", // Anthropic — Claude training
  "PerplexityBot", // Perplexity
  "Google-Extended", // Google — Gemini & Vertex AI training
  "Applebot-Extended", // Apple — Apple Intelligence
  "CCBot", // Common Crawl (used as AI training corpus)
  "cohere-ai", // Cohere
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS.map((ua) => ({ userAgent: ua, allow: "/" })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
