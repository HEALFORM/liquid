const path = require('path')
const { propNames } = require("@chakra-ui/styled-system")
const excludedPropNames = propNames.concat(["as", "apply", "sx", "__css"])
const toPath = _path => path.join(process.cwd(), _path)

// seems there is a current issues with webpack, storybook and Chakra deps
// https://github.com/chakra-ui/chakra-ui/issues/2527#issuecomment-810293915
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-dark-mode'],
  refs: {
    '@chakra-ui/react': {
      disable: true,
    },
  },
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
  typescript: {
    reactDocgenTypescriptOptions: {
      propFilter: (prop) => {
        const isStyledSystemProp = excludedPropNames.includes(prop.name)
        const isHTMLElementProp =
          prop.parent?.fileName.includes("node_modules") ?? false

        return !(isStyledSystemProp || isHTMLElementProp)
      },
    },
  },
}
