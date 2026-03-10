const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  experimental: { turbo: false },
  outputFileTracingRoot: undefined, // explicitly unset
};
module.exports = nextConfig;