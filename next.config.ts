import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["framer-motion", "lucide-react"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
