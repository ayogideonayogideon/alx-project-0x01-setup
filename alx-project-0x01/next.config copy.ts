import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

export default nextConfig;
module.exports = {
  experimental: {
    allowedDevOrigins: ["http://192.168.125.174:3000"]
}