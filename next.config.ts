import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/lambda-biolab-hack-a-thon",
  images: { unoptimized: true },
};

export default nextConfig;
