/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: false,
   compiler: {
      styledComponents: true,
   },
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'i.gyazo.com',
            port: '',
            pathname: '/**.**',
         },
      ],
   },
   i18n: {
      locales: ['en', 'es'],
      defaultLocale: 'en',
      localeDetection: false,
   },
};

module.exports = nextConfig;
