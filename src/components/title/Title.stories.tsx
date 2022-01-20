import React from 'react'

import { Title, TitleProps } from './Title'

export default {
  title: 'Typography/Title',
  component: Title,
}

export const Base = (args: TitleProps) => <Title {...args}>This is a Title</Title>

const sizes = ['one', 'two', 'three', 'four'] as const

export const Sizes = (args: TitleProps) =>
  sizes.map(s => (
    <Title key={s} {...args} size={s}>
      This is a Title {s}
    </Title>
  ))
