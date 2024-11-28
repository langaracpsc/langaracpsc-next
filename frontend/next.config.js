/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['icon-library'],
  },
  env: {
  }, 
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "langaracpsc.github.io",
      //   pathname: "/assets"
      // }, 
      {
        protocol: "https",
        hostname: "via.placeholder.com"
      },
      {
        protocol: "https",
        hostname: "api3.langaracs.ca",
        pathname: "/executives/images/**"
      },
      {
        protocol: "https",
        hostname: "api3.langaracs.ca",
        pathname: "/events/images/**"
      },
    ]
  },
  output: 'standalone'
}

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

// module.exports = withBundleAnalyzer(nextConfig)
module.exports = nextConfig