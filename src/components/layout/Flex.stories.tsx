import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Text } from '../typography'
import Flex, { FlexProps } from './Flex'

const meta: Meta = {
  title: 'Layout/Flex',
  component: Flex,
  parameters: {
    layout: 'centered',
    controls: { disable: true },
  },
}

export default meta

export const Default: Story<FlexProps> = () => (
  <Flex color="black" spacing={4} p={4} bg="gray.100" align="center">
    <Text>Hello</Text>
    <Text>Everybody</Text>
    <Flex spacing={4} p={4} bg="gray.200" direction="column">
      <Text>I am Liquid</Text>
      <Text>I am Fischl</Text>
    </Flex>
  </Flex>
)
