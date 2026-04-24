import type { NextConfig } from "next";

// Single deploy target: static export to GitHub Pages, served at the
// custom domain hack-basel.lambdabiolab.com (origin root, no basePath).
// `pnpm dev` ignores `output` and runs the normal dev server.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
