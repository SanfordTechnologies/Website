/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove basePath and assetPrefix when using custom domain
  // basePath: process.env.NODE_ENV === 'production' ? '/Website' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/Website/' : '',
}

module.exports = nextConfig 