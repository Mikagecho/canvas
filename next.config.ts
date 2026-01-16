import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/canvas',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
