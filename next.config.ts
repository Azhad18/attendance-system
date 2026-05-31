import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jgrzyurbivmbftumfvsr.supabase.co",
      },
    ],
  },
};

export default nextConfig;