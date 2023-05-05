/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true
  },
  images: {
   remotePatterns: [
     {
       protocol: 'https',
       hostname: 'i.gyazo.com',
       port: '',
       pathname: '/**.png',
     },
   ],
 },
}

module.exports = nextConfig
