import { Meta, Story } from '@storybook/react'
import React from 'react'

import { LiquidTheme } from '../../styles/theme'
import { HStack } from '../layout'
import { Badge, BadgeProps } from './Badge'

const meta: Meta<BadgeProps> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

export const Default: Story<BadgeProps> = args => <Badge {...args} />

Default.args = {
  children: 'Hello Liquid',
}

const colors: Array<keyof LiquidTheme['colors']> = [
  'rose',
  'pink',
  'fuchsia',
  'purple',
  'violet',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'emerald',
  'green',
  'lime',
  'yellow',
  'amber',
  'orange',
  'red',
  'gray',
  'light-blue',
  'warm-gray',
  'true-gray',
  'cool-gray',
  'blue-gray',
]

export const AllColorScheme: Story<BadgeProps> = args => (
  <HStack wrap="wrap" gap={4}>
    {colors.map(color => (
      <Badge key={color} {...args} colorScheme={color}>
        {color}
      </Badge>
    ))}
  </HStack>
)

AllColorScheme.argTypes = {
  colorScheme: { table: { disable: true }, control: { disable: true } },
}
