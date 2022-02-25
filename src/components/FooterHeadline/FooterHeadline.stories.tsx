import React from 'react'

import { FooterHeadline, FooterHeadlineProps } from './FooterHeadline'

export default {
  title: 'Typography/FooterHeadline',
  component: FooterHeadline,
  argTypes: {
    as: {
      name: 'As',
      type: { name: 'string', required: true },
      table: {
        type: { summary: 'h1|h2|h3|h4|h5|h6' },
      },
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      },
    },
    noMargin: {
      name: 'noMargin',
      control: {
        type: 'boolean',
      },
    },
    isTruncated: {
      name: 'isTruncated',
      control: {
        type: 'boolean',
      },
    },
    children: {
      description: 'Inner element or text for element',
      table: {
        type: { summary: 'text|node' },
      },
    },
  },
}

export const Base = (args: FooterHeadlineProps) => (
  <FooterHeadline {...args} noMargin>
    This is a Footer Headline
  </FooterHeadline>
)

export const Truncated = (args: FooterHeadlineProps) => (
  <FooterHeadline isTruncated {...args}>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
  </FooterHeadline>
)
