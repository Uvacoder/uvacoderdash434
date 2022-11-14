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
      ...defaultPathMap,
    }
  },
}

module.exports = nextConfig
