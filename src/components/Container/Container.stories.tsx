import React from 'react'
import LoremIpsum from 'react-lorem-ipsum'

import { Box } from '../../index'
import { Headline } from '../Headline'
import { Container, ContainerProps } from './Container'

export default {
  title: 'Layout/Container',
  component: Container,
  argTypes: {
    size: {
      name: 'Size',
      type: { name: 'string', required: true },
      description: 'Different sizes of container.',
      table: {
        type: { summary: '4xl|5xl|6xl|7xl|8xl' },
      },
      control: {
        type: 'select',
        options: ['4xl', '5xl', '6xl', '7xl', '8xl'],
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

export const Base = (args: ContainerProps) => (
  <Container {...args}>
    <LoremIpsum />
  </Container>
)

const sizes = ['4xl', '5xl', '6xl', '7xl', '8xl']

export const Sizes = (args: ContainerProps) =>
  sizes.map(s => (
    <Container key={s} {...args} size={s} mb={2}>
      <Headline size={'two'}>Container: {s}</Headline>
      <Box mb={5}>
        <LoremIpsum />
      </Box>
    </Container>
  ))
