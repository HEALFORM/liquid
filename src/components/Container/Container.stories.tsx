import React from 'react'
import LoremIpsum from 'react-lorem-ipsum'

import { Box } from '../../index'
import { Body } from '../Body'
import { SubHeadline } from '../SubHeadline'
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
    <Body>
      <LoremIpsum />
    </Body>
  </Container>
)

const sizes = ['4xl', '5xl', '6xl', '7xl', '8xl']

export const Sizes = (args: ContainerProps) =>
  sizes.map(s => (
    <Container key={s} {...args} size={s} mb={2}>
      <SubHeadline>Container: {s}</SubHeadline>
      <Box mb={5}>
        <Body>
          <LoremIpsum />
        </Body>
      </Box>
    </Container>
  ))
