import React from 'react'

import { BodyLarge, BodyLargeProps } from './BodyLarge'

const content =
  'An electronic circuit is composed of individual electronic components, such as resistors, transistors, capacitors, inductors and diodes, connected by conductive wires or traces through which electric current can flow.'

export default {
  title: 'Typography/BodyLarge',
  component: BodyLarge,
  argTypes: {
    as: { control: 'text' },
  },
}

export const Base = (args: BodyLargeProps) => <BodyLarge {...args}>{content}</BodyLarge>

const variants = ['highlight', 'quote', 'success', 'error', 'subtle'] as const

export const Variants = (args: BodyLargeProps) =>
  variants.map(variant => (
    <BodyLarge key={variant} {...args} variant={variant}>
      This is a {variant} BodyLarge
    </BodyLarge>
  ))
