/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Website/' : '',
}

module.exports = nextConfig 