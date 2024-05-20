/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    urlImports: ['https://themer.sanity.build/']
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [{ hostname: "cdn.sanity.io" }],
  },
};

module.exports = nextConfig