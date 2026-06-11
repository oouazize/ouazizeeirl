import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.mzstatic.com" },
    ],
  },
  async redirects() {
    return [
      // Old per-app policy URLs (linked from App Store Connect) → universal policy
      {
        source: "/privacy/:slug",
        destination: "/privacy",
        permanent: true,
      },
      // Old per-app detail pages → home catalogue
      {
        source: "/apps/:slug*",
        destination: "/#apps",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
