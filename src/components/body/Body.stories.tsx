import React from 'react'

import { Body } from './Body'

export default {
  title: 'Typography/Body',
  component: Body,
  argTypes: {
    size: {
      name: 'Size',
      type: { name: 'string', required: false },
      description: 'Different sizes of text',
      table: {
        type: { summary: 'one|two' },
      },
      control: {
        type: 'radio',
        options: ['one', 'two'],
        labels: {
          one: 'One',
          two: 'Two',
        },
      },
    },
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

const content =
  'An electronic circuit is composed of individual electronic components, such as resistors, transistors,' +
  'capacitors, inductors and diodes, connected by conductive wires or traces through which electric current can flow.'

const Template = args => <Body {...args} />

export const Base = Template.bind({})
Base.args = {
  children: content,
  size: 'one',
}

const sizes = ['one', 'two']
export const Sizes = args =>
  sizes.map(s => (
    <Body key={s} {...args} size={s}>
      This is a body {s}. {content}
    </Body>
  ))

const variants = ['highlight', 'quote', 'success', 'error', 'subtle']

export const Variants = args =>
  variants.map(variant => (
    <Body key={variant} {...args} variant={variant}>
      This is a {variant} body
    </Body>
  ))
