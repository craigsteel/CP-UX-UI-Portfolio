// @ts-check

/**
 * @type {import('next').NextConfig}
 **/

const nextConfig = {
  experimental: {
    urlImports: ["https://themer.sanity.build/"],
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
