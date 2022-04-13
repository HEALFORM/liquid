import React from 'react'

import { Badge } from './Badge'

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      name: 'Variant',
      type: { name: 'string', required: true },
      description: 'Pass the variant prop and set it to either subtle, solid, or outline to get a different style.',
      table: {
        type: { summary: 'subtle|solid|outline' },
      },
      control: {
        type: 'select',
        options: ['subtle', 'solid', 'outline'],
      },
    },
    colorScheme: {
      name: 'Color Scheme',
      type: { name: 'string', required: true },
      table: {
        type: { summary: 'primary|secondary|blue|seagrass|green|yellow|red|orange|violet|turquoise|gray' },
      },
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'blue',
          'seagrass',
          'green',
          'yellow',
          'red',
          'orange',
          'violet',
          'turquoise',
          'gray',
        ],
      },
    },
  },
}

const Template = args => <Badge {...args} />

export const Base = Template.bind({})
Base.args = { children: 'New' }

const variants = ['subtle', 'solid', 'outline'] as const

export const Variants = args =>
  variants.map(v => (
    <Badge key={v} {...args} variant={v}>
      {v}
    </Badge>
  ))

const colors = ['blue', 'seagrass', 'green', 'yellow', 'red', 'orange', 'violet', 'turquoise', 'gray'] as const

export const ColorSchemes = args =>
  colors.map(c => (
    <Badge key={c} {...args} colorScheme={c}>
      {c}
    </Badge>
  ))
