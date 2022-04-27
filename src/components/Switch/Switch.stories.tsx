import React from 'react'

import { FormControl, FormLabel } from './../../index'
import { Switch } from './Switch'

export default {
  title: 'Components/Forms/Switch',
  component: Switch,
  argTypes: {
    isChecked: {
      description: 'if switch is checked',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    size: {
      name: 'Size',
      type: { name: 'string', required: true },
      description: 'Different sizes of switch.',
      table: {
        type: { summary: 'sm|md|lg' },
      },
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    isReadOnly: {
      description: 'if switch is read only',
      table: {
        type: { summary: 'bool' },
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
  },
}

export const Base = args => (
  <FormControl display="flex" alignItems="center">
    <FormLabel htmlFor="email-alerts" mb="0">
      Enable email alerts?
    </FormLabel>
    <Switch {...args} id="email-alerts" />
  </FormControl>
)
