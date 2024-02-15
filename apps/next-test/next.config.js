const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.NODE_ENV === 'development',
  openAnalyzer: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@breadlee/ui'],
};

module.exports = withBundleAnalyzer(nextConfig);
