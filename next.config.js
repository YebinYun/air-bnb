/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "*", "cf.bstatic.com", "a0.muscache.com"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
