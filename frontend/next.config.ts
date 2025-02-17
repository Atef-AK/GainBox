import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Remove unsupported options
  experimental: {
    // Add valid experimental options here (if needed)
  },
  // Use the `appDir` option directly (if supported in your version)
  appDir: './src/app', // Point to the `app` directory inside `src`
};

export default nextConfig;