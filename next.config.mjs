/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep runtime strictly NodeJS; no edge unless explicitly opted-in
  experimental: {},
  reactStrictMode: true,
  poweredByHeader: false,
  output: 'standalone',
};
export default nextConfig;


