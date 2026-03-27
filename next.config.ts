import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
      {
        protocol: 'https',
        hostname: 'uncommon-starfish-163.convex.cloud',
      },
      {
        protocol: 'https',
        hostname: 'gemini.google.com',
      },
    ],
  },
};

export default nextConfig;
