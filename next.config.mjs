/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep runtime strictly NodeJS; no edge unless explicitly opted-in
  experimental: {},
  reactStrictMode: true,
  poweredByHeader: false,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: '**.fractionaldemand.com',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: '**.up.railway.app',
        pathname: '/uploads/**',
      },
    ],
  },
};
export default nextConfig;


