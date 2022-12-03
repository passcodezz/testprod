/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // domains: ["picsum.photos"],
    domains: ["phopautomation.vercel.app"],
  },
};

module.exports = nextConfig;
