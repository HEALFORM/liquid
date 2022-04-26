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
        type: { summary: 'one|two|three|four|five|six' },
      },
      control: {
        type: 'select',
        options: ['one', 'two', 'three', 'four', 'five', 'six'],
        labels: {
          one: 'One',
          two: 'Two',
          three: 'Three',
          four: 'Four',
          five: 'Five',
          six: 'Six',
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

const sizes = ['one', 'two', 'three', 'four', 'five', 'six']

export const Sizes = args =>
  sizes.map(s => (
    <Title noMargin key={s} {...args} size={s}>
      This is a Title {s}
    </Title>
  ))

export const isTruncated = args => (
  <>
    <Title as={'h1'} {...args} isTruncated>
      This is a very long title thats going to be truncated because it is too long.
    </Title>
  </>
)

export const withGradient = args => (
  <>
    <Title as={'h1'} size={'one'} bgGradient="linear(to-l, red.600, orange.300)" bgClip="text" {...args}>
      This is a fancy title with gradient.
    </Title>
    <Title as={'h1'} size={'two'} bgGradient="linear(to-l, primary.500, seagrass.400)" bgClip="text" {...args}>
      This is a fancy title with gradient.
    </Title>
    <Title as={'h1'} size={'three'} bgGradient="linear(to-b, turquoise.500, violet.400)" bgClip="text" {...args}>
      This is a fancy title with gradient.
    </Title>
  </>
)
