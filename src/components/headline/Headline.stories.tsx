import React from 'react'

import { Headline, HeadlineProps } from './Headline'

export default {
  title: 'Typography/Headline',
  component: Headline,
}

export const Base = (args: HeadlineProps) => (
  <Headline {...args} noMargin>
    This is a headline
  </Headline>
)

const sizes = ['one', 'two', 'three', 'four'] as const

export const Sizes = (args: HeadlineProps) =>
  sizes.map(s => (
    <Headline key={s} {...args} size={s} noMargin>
      This is a headline {s}
    </Headline>
  ))
