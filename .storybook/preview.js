import React from 'react';
import { DocsContainer } from '@storybook/addon-docs';
import { ThemeProvider} from "../src/index";
import theme from "./theme";
import themeDark from "./themeDark";

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  darkMode: {
    // Override the default dark theme
    dark: { ...themeDark },
    // Override the default light theme
    light: { ...theme },
  },
  options: {
    storySort: {
      order: [
        'Introduction', [
          'Welcome'
        ],
        'Features', [
          'Colors',
          'Icons',
          'Space & Radii'
        ],
        'Typography', [
          'Typography',
          'Title',
          'Headline',
          'FooterHeadline',
          'SubHeadline',
          'Body',
          'BodyLarge',
          'Link',
          'List'
        ],
        'Layout', [
          'Grid',
          'Flex',
          'VStack',
          'HStack',
        ],
        'Components', [
          'Avatar',
          'AvatarGroup',
          'Badge',
          'Button',
          'ButtonGroup',
          'Card',
          'Divider',
          'FeatureCard',
          'Section',
        ],
      ],
    },
  },
  docs: {
    container: ({ children, context }) => (
      <DocsContainer context={context}>
        <ThemeProvider>{children}</ThemeProvider>
      </DocsContainer>
    ),
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];

