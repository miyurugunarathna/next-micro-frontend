// @ts-check
const NextFederationPlugin = require('@module-federation/nextjs-mf');
const { FederatedTypesPlugin } = require('@module-federation/typescript');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, option) {
    const { isServer } = option;

    const federationConfig = {
      name: 'shell',
      filename: 'static/chunks/remoteEntry.js',
      remotes: {
        core: `core@http://localhost:3001/_next/static/${
          isServer ? 'ssr' : 'chunks'
        }/remoteEntry.js`,
      },
      shared: {},
    };

    config.plugins.push(
      // @ts-ignore
      new NextFederationPlugin(federationConfig),
      new FederatedTypesPlugin({ federationConfig }),
    );
    return config;
  },
  transpilePackages: ['@internal/ui'],
};

module.exports = nextConfig;
