/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  // Base path for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/sb1-bu2alq5e' : '',
  // Asset prefix for GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sb1-bu2alq5e' : '',
}

module.exports = nextConfig
