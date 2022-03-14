/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['phiphenstudios.everlivesolutions.com'],
    // loader: "imgix",
    // path: 'https://everlivesolutions.imgix.net/'
  },  
}

module.exports = nextConfig
