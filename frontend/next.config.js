/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    APIURL: process.env.APIURL,
    APIKEY: process.env.APIKEY
  }
}

module.exports = nextConfig
