/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.mobifone.vn",
      },
    ],
  },
};

module.exports = nextConfig;
