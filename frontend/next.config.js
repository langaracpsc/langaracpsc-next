/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    APIURL: process.env.APIURL,
    APIKEY: process.env.APIKEY,
    CALENDAR_API_KEY: process.env.CALENDAR_API_KEY,
    CALENDAR_ID: process.env.CALENDAR_ID,
    CALENDAR_BASE_URL: process.env.CALENDAR_BASE_URL,
    CALENDAR_OAUTH_KEY: process.env.CALENDAR_OAUTH_KEY
  }, 
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "langaracpsc.github.io",
        pathname: "/assets"
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com"
      }
    ]
  }
}

module.exports = nextConfig
