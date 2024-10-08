/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
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
        hostname: "api.langaracs.ca",
        pathname: "/Images/**"
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com"
      },
      {
        protocol: "https",
        hostname: "api3.langaracs.ca",
        pathname: "/executives/image/**"
      },
    ]
  },
  output: 'standalone'
}

module.exports = nextConfig
