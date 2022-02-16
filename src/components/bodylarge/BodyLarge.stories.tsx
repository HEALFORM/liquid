import React from 'react'

import { BodyLarge, BodyLargeProps } from './BodyLarge'

const content =
  'An electronic circuit is composed of individual electronic components, such as resistors, transistors, capacitors, inductors and diodes, connected by conductive wires or traces through which electric current can flow.'

export default {
  title: 'Typography/BodyLarge',
  component: BodyLarge,
  argTypes: {
    variant: {
      name: 'Variant',
      type: { name: 'string', required: false },
      description: 'The visual variant.',
      control: {
        type: 'radio',
        options: ['highlight', 'quote', 'success', 'error', 'subtle'],
        labels: {
          highlight: 'Highlight',
          quote: 'Quote',
          success: 'Success',
          error: 'Error',
          subtle: 'Subtle',
        },
      },
    },
    align: {
      name: 'Align',
      type: { name: 'string', required: false },
      description: 'The CSS `text-align` property.',
      table: {
        type: { summary: 'left|center|right' },
      },
      control: {
        type: 'select',
        options: ['left', 'center', 'right'],
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

export const Base = (args: BodyLargeProps) => <BodyLarge {...args}>{content}</BodyLarge>

const variants = ['highlight', 'quote', 'success', 'error', 'subtle'] as const

export const Variants = (args: BodyLargeProps) =>
  variants.map(variant => (
    <BodyLarge key={variant} {...args} variant={variant}>
      This is a {variant} BodyLarge
    </BodyLarge>
  ))
