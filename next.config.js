/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // allow some images
  images: {
    domains: ['m.media-amazon.com'],
  },
}

module.exports = nextConfig
