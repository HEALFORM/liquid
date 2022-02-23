import { Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'

import { Avatar } from './Avatar'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      name: 'Size',
      type: { name: 'string', required: true },
      description: 'Different sizes of text.',
      table: {
        type: { summary: '2xs|xs|sm|md|lg|xl|2xl' },
      },
      control: {
        type: 'select',
        options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      },
    },
    name: {
      name: 'Name',
      type: { name: 'string', required: false },
      description:
        'The name of the person in the avatar. - if src has loaded, the name will be used as the alt attribute of the img - If src is not loaded, the name will be used to create the initials.',
    },
    src: {
      name: 'src',
      type: { name: 'string', required: false },
      description: 'The image url of the Avatar.',
    },
  },
  resetArgs: true,
}

export const Base = args => <Avatar {...args} />

export const Variants = () => (
  <>
    <Wrap>
      <WrapItem>
        <Avatar size="2xs" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      </WrapItem>
      <WrapItem>
        <Avatar size="xs" name="Kola Tioluwani" src="https://bit.ly/tioluwani-kolawole" />{' '}
      </WrapItem>
      <WrapItem>
        <Avatar size="sm" name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />{' '}
      </WrapItem>
      <WrapItem>
        <Avatar size="md" name="Ryan Florence" src="https://bit.ly/ryan-florence" />{' '}
      </WrapItem>
      <WrapItem>
        <Avatar size="lg" name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />{' '}
      </WrapItem>
      <WrapItem>
        <Avatar size="xl" name="Christian Nwamba" src="https://bit.ly/code-beast" />{' '}
      </WrapItem>
      <WrapItem>
        <Avatar size="2xl" name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />{' '}
      </WrapItem>
    </Wrap>
  </>
)
