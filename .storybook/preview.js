import React from 'react';
import { DocsContainer } from '@storybook/addon-docs';
import { ThemeProvider} from "../src/index";

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
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
          'Anchor',
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

