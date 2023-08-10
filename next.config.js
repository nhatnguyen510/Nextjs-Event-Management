/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.mobifone.vn",
      },
    ],
    domains: ["i.pravatar.cc"],
  },
};

module.exports = nextConfig;
