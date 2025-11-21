import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mvp.razumly.com",
      },
    ],
  },
};

export default nextConfig;
