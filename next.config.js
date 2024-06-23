const isProd = process.env.NODE_ENV === 'production';

// @ts-check
/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  assetPrefix: isProd ? 'https://ezymaincdn.b-cdn.net' : undefined,
  poweredByHeader: false,
  webpack(config, {isServer}) {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    // react-pdf resolve alias for canvas
    config.resolve.alias.canvas = false;

    return config;
  },
  i18n: {
    // change this also in next-i18next.config.js
    defaultLocale: 'default',
    locales: [
      'default',
      'af',
      'ar',
      'as',
      'az',
      'be',
      'bg',
      'bh',
      'bn',
      'bs',
      'cs',
      'cy',
      'da',
      'de',
      'el',
      'en',
      'es',
      'fa',
      'fi',
      'fo',
      'fr',
      'fy',
      'ga',
      'gu',
      'he',
      'hi',
      'hr',
      'hu',
      'hy',
      'id',
      'io',
      'it',
      'ja',
      'ka',
      'kg',
      'kk',
      'ko',
      'ks',
      'ku',
      'la',
      'lb',
      'lo',
      'lt',
      'ml',
      'mn',
      'mr',
      'my',
      'ne',
      'nl',
      'no',
      'or',
      'pl',
      'pt',
      'ro',
      'ru',
      'sa',
      'sd',
      'si',
      'sk',
      'sm',
      'sn',
      'so',
      'sq',
      'sr',
      'sv',
      'ta',
      'te',
      'th',
      'tr',
      'uk',
      'ur',
      'uz',
      'vi',
      'zh',
    ],
    localeDetection: false,
  },

  //distDir: process.env.BUILD_DIR || '.next',
  images: {
    domains: [
      'letcheck.b-cdn.net',
      'localhost',
      'vz-7671715e-3da.b-cdn.net',
      'images.unsplash.com',
      'www.solidbackgrounds.com',
      'img.youtube.com',
      'vumbnail.com',
      'assetezy.b-cdn.net',
    ],
  },

  compress: false,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    // !! WARN !!
    ignoreDuringBuilds: true,
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  experimental: {
    largePageDataBytes: 450 * 100000,
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|js)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          },
        ],
      },
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
