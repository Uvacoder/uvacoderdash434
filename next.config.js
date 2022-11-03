/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/binary-clock': { page: '/binary-clock' },
    }
  },
}

module.exports = nextConfig
