/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "*", "cf.bstatic.com"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
