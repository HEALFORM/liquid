import React from 'react'

import { Body, BodyProps } from './Body'

const content =
  'An electronic circuit is composed of individual electronic components, such as resistors, transistors, capacitors, inductors and diodes, connected by conductive wires or traces through which electric current can flow.'

export default {
  title: 'Typography/Body',
  component: Body,
  argTypes: {
    as: { control: 'text' },
  },
}

export const Base = (args: BodyProps) => <Body {...args}>{content}</Body>

const sizes = ['one', 'two'] as const

export const Sizes = (args: BodyProps) =>
  sizes.map(s => (
    <Body key={s} {...args} size={s}>
      This is a body {s}. {content}
    </Body>
  ))

const variants = ['highlight', 'quote', 'success', 'error', 'subtle'] as const

export const Variants = (args: BodyProps) =>
  variants.map(variant => (
    <Body key={variant} {...args} variant={variant}>
      This is a {variant} body
    </Body>
  ))
