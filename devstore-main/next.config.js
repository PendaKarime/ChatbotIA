/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com'],
  },
  env: {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'https://devstore-roan.vercel.app'
        : 'http://localhost:3000',
  },
}

module.exports = nextConfig
