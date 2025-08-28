import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['cdn.jsdelivr.net'], // tambahkan domain eksternal
  },
};

export default nextConfig;
