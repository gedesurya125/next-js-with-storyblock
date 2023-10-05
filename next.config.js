/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com'
      },
      {
        protocol: 'https',
        hostname: 'people.pic1.co'
      }
    ]
  },

  // TODO: Needs to be reomved once we go live - otherwise Google will not index the site
  // Source: https://vercel.com/guides/are-vercel-preview-deployment-indexed-by-search-engines
  //? we should only has one export in next config
  async headers() {
    return [
      {
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex'
          }
        ],
        source: '/:path*'
      }
    ];
  }
};

module.exports = nextConfig;
