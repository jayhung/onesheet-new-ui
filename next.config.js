const nextConfig = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const config = {
    experimental: {},
    eslint: {
      dirs: ['app'], // only run ESLint on these dirs during production builds (next build)
    },
    outputFileTracing: true,
    reactStrictMode: true,
    trailingSlash: true,
    webpack: (config, options) => {
      const rule = config.module.rules
        .find(rule => rule.oneOf)
        .oneOf.find(
          r =>
            // Find the global CSS loader
            r.issuer && r.issuer.include && r.issuer.include.includes('_app')
        );

      return config;
    },
    images: {
      dangerouslyAllowSVG: true,
      contentDispositionType: 'attachment',
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'tailwindui.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  };
  return config;
};

module.exports = nextConfig;
