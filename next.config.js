/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
  experimental: {
    scrollRestoration: true,
  },
  compiler: {
    styledComponents: true,
  },
}
