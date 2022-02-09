import React from 'react';
import { DocsContainer } from '@storybook/addon-docs';

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
          'Icons'
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
          'FeatureCard',
          'Hr',
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

