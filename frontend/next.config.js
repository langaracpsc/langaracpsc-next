/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    APIURL: 'api.langaracs.tech',
    APIKEY: '0tXxZRrOlIV9UOK8ZSr9FIl5A6Ng/xmgX8AsE69PtSlVbSIFET4RXiVYm/6ZBnk1vtgrcmbzzea0aQrGpoiJlg==',
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
        hostname: "api.langaracs.tech",
        pathname: "/Images/**"
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com"
      }
    ]
  }
}

module.exports = nextConfig
