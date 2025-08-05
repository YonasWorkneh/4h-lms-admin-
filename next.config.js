/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com", "ut.uvt.tn"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
