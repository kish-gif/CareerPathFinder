/** @type {import('next').NextConfig} */
const nextConfig = {
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