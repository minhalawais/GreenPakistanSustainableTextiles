import type { NextConfig } from "next";

const nextConfig = {
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
  },
  typescript: {
    ignoreBuildErrors: true, // Disable TypeScript errors during build
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};


export default nextConfig;
