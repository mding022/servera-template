import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'servera.dev',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.servera.dev',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;