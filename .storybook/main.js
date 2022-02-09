const path = require('path')
const toPath = _path => path.join(process.cwd(), _path)

// seems there is a current issues with webpack, storybook and Chakra deps
// https://github.com/chakra-ui/chakra-ui/issues/2527#issuecomment-810293915
module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: [
    '@storybook/addon-viewport',
    '@storybook/addon-storysource',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    '@storybook/addon-essentials',
    'storybook-dark-mode',
  ],
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    };
  },
}
