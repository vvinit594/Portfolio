import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "codewithvini.tech" }],
        destination: "https://www.codewithvini.tech/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
