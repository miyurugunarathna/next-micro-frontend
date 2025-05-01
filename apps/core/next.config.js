// @ts-check
const NextFederationPlugin = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    const federationConfig = {
      name: 'core',
      filename: 'static/chunks/remoteEntry.js',
      exposes: {
        './modules/header': './src/modules/header/index.tsx',
      },
      shared: {},
    };

    config.plugins.push(
      // @ts-ignore
      new NextFederationPlugin(federationConfig),
    );
    return config;
  },
  transpilePackages: ['@internal/ui'],
};

module.exports = nextConfig;
