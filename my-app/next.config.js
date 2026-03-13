/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  experimental: { turbo: false },
  outputFileTracingRoot: undefined, // explicitly unset

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://career-test.streamlit.app",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;