module.exports = {
  presets: [
    [
      '@babel/env',
      {
        bugfixes: true,
        shippedProposals: true,
        corejs: 3,
        useBuiltIns: 'entry',
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
  ],
  env: {
    development: {
      plugins: [
        'react-hot-loader/babel',
      ],
    },
    production: {
      plugins: [
        '@babel/plugin-transform-react-constant-elements',
        'transform-react-remove-prop-types',
      ],
    },
    test: {},
  },
};
