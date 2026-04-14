import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/lambda-biolab-hack-a-thon" : "",
  images: { unoptimized: true },
};

export default nextConfig;
