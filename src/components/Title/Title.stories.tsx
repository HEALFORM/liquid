import React from 'react'

import { Title } from './Title'

export default {
  title: 'Typography/Title',
  component: Title,
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

const Template = args => <Title {...args} />

export const Base = Template.bind({})
Base.args = { children: 'This is a Title' }

const sizes = ['one', 'two', 'three', 'four']

export const Sizes = args =>
  sizes.map(s => (
    <Title key={s} {...args} size={s}>
      This is a Title {s}
    </Title>
  ))

export const withGradient = args => (
  <>
    <Title as={'h1'} size={'three'} bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" {...args}>
      This is a fancy title with gradient.
    </Title>
  </>
)
