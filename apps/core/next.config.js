// @ts-check
const NextFederationPlugin = require('@module-federation/nextjs-mf');
const { FederatedTypesPlugin } = require('@module-federation/typescript');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    const federationConfig = {
      name: 'core',
      filename: 'static/chunks/remoteEntry.js',
      exposes: {
        './modules/header': './src/modules/header/index.tsx',
        './modules/footer': './src/modules/footer/index.tsx',
      },
      shared: {},
    };

    config.plugins.push(
      // @ts-ignore
      new NextFederationPlugin(federationConfig),
      new FederatedTypesPlugin({
        federationConfig,
        disableDownloadingRemoteTypes: true,
      }),
    );
    return config;
  },
  transpilePackages: ['@internal/ui'],
};

module.exports = nextConfig;
