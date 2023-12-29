/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    APIURL: process.env.APIURL,
    APIKEY: process.env.APIKEY
  }, 
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "langaracpsc.github.io",
        pathname: "/assets"
      }
    ]
  }
}

module.exports = nextConfig
