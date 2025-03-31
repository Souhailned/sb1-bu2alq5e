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
  
  // The basePath will be automatically set by GitHub Pages action
  // This ensures it works both locally and on GitHub Pages
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
}

module.exports = nextConfig
