import type { NextConfig } from "next";

// GITHUB_PAGES=true activates the static export for the deploy workflow.
// Site is served from the custom domain hack-basel.lambdabiolab.com at
// the origin root — no basePath needed. If we ever revert to the github.io
// project URL, re-add basePath + NEXT_PUBLIC_BASE_PATH together.
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGithubPages && { output: "export" }),
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
  },
};

export default nextConfig;
