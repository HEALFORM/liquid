import React from 'react'

import { SubHeadline, SubHeadlineProps } from './SubHeadline'

export default {
  title: 'Typography/SubHeadline',
  component: SubHeadline,
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
    children: {
      description: 'Inner element or text for element',
      table: {
        type: { summary: 'text|node' },
      },
    },
  },
}

export const Base = (args: SubHeadlineProps) => (
  <SubHeadline {...args} noMargin>
    This is a Sub Headline
  </SubHeadline>
)
