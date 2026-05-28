/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'candyaisocialskills.com' }],
        destination: 'https://www.candyaisocialskills.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
