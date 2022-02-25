import React from 'react'

import { Headline, HeadlineProps } from './Headline'

export default {
  title: 'Typography/Headline',
  component: Headline,
  argTypes: {
    size: {
      name: 'Size',
      type: { name: 'string', required: true },
      description: 'Different sizes of text.',
      table: {
        type: { summary: 'one|two|three|four' },
      },
      control: {
        type: 'select',
        options: ['one', 'two', 'three', 'four'],
        labels: {
          one: 'One',
          two: 'Two',
          three: 'Three',
          four: 'Four',
        },
      },
    },
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

export const Base = (args: HeadlineProps) => (
  <Headline {...args} noMargin>
    This is a Headline
  </Headline>
)

const sizes = ['one', 'two', 'three', 'four']

export const Sizes = (args: HeadlineProps) =>
  sizes.map(s => (
    <Headline key={s} {...args} size={s}>
      This is a Headline {s}
    </Headline>
  ))

export const Truncated = (args: HeadlineProps) => (
  <Headline isTruncated {...args} noMargin>
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
  </Headline>
)
