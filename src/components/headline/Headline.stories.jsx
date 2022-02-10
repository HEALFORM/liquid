import React from 'react'

import { Headline } from './Headline'

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
    children: {
      description: 'Inner element or text for element',
      table: {
        type: { summary: 'text|node' },
      },
    },
  },
}

const Template = args => <Headline {...args} />

export const Base = Template.bind({})
Base.args = { children: 'Cryocenter', size: 'one' }

const sizes = ['one', 'two', 'three', 'four']

export const Sizes = args =>
  sizes.map(s => (
    <Headline key={s} {...args} size={s}>
      This is a Headline {s}
    </Headline>
  ))
