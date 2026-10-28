import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  // Allows running a second dev server in parallel without fighting over .next
  // e.g. DEV_DIST_DIR=.next-dev2 next dev -p 9003
  distDir: process.env.DEV_DIST_DIR || '.next',
  deploymentId: 'rhm-v2',
  output: 'standalone',
  allowedDevOrigins: [
    '**.run.app',
    '*.run.app',
    '**.google.com',
    '**.googleusercontent.com',
  ],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  poweredByHeader: false,
  compress: true,
  serverExternalPackages: [],
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
  },
  turbopack: {
    // Pin the workspace root to this project. Without it Next may infer a
    // parent directory that also contains a lockfile (e.g. C:\Users\<user>),
    // which breaks file watching and Fast Refresh/HMR module resolution.
    root: process.cwd(),
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=()',
        },
      ],
    },
    {
      source: '/RHM.jpg',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
};

export default nextConfig;
