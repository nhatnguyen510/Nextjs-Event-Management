/** @type {import('next').NextConfig} */
const nextConfig = {
  modularizeImports: {
    "@mui/material": {
      transform: "@mui/material/{{member}}",
    },
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },

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
