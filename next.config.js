/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  devIndicators: {
    buildActivityPosition: 'bottom-right',
  },
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
      '/binary-clock': { page: '/binary-clock' },
      '/details': { page: '/details' },
      '/dashboard': { page: '/dashboard' },
      ...defaultPathMap,
    }
  },
}

module.exports = nextConfig
