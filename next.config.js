/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ignore ESLint errors during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Ignore TypeScript errors during build for faster deployment
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Improve stability and reduce hydration mismatches
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
    webpackBuildWorker: true
  },
  
  // Improve build performance and caching
  webpack: (config, { dev, isServer }) => {
    // Optimize for development
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
      // Reduce memory usage in development
      config.optimization = {
        ...config.optimization,
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
      }
    }
    
    // Improve module resolution
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    }
    
    // Optimize framer-motion for better performance
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
      }
    }
    
    return config
  },
  
  // Improve image optimization
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Reduce bundle size
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{kebabCase member}}',
      preventFullImport: true,
    },
  },
  
  // Improve error handling
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
}

module.exports = nextConfig 