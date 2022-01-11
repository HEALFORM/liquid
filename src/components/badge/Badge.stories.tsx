import { Meta, Story } from '@storybook/react'
import React from 'react'

import { LiquidTheme } from '../../styles/theme'
import { HStack } from '../layout'
import { Badge, BadgeProps } from './Badge'

const meta: Meta<BadgeProps> = {
  title: 'Library/Badge',
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
  'blue',
  'seagrass',
  'violet',
  'yellow',
  'turquoise',
  'orange',
  'green',
  'red',
  'gray',
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
