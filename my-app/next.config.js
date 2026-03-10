// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,   // ✅ skip lint errors in production
  },
  typescript: {
    ignoreBuildErrors: true,    // ✅ skip type errors in production
  },
};

module.exports = nextConfig;