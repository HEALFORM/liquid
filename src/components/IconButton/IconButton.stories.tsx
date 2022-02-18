import { CalendarIcon, DeleteIcon } from '@chakra-ui/icons'
import React from 'react'

import { HStack } from './../../index'
import { IconButton, IconButtonProps } from './IconButton'

export default {
  title: 'Components/IconButton',
  component: IconButton,
}

const content = <CalendarIcon />

const Template = (args: IconButtonProps) => <IconButton {...args} />

export const Base = Template.bind({})
Base.args = {
  children: content,
}

export const Variants = args => (
  <>
    <HStack>
      <IconButton variant="solid" {...args}>
        {content}
      </IconButton>
      <IconButton variant="ghost" {...args}>
        {content}
      </IconButton>
      <IconButton variant="outline" {...args}>
        {content}
      </IconButton>
      <IconButton variant="link" {...args}>
        {content}
      </IconButton>
    </HStack>
  </>
)

export const Sizes = args => (
  <>
    <HStack>
      <IconButton size={'xs'} {...args}>
        {content}
      </IconButton>
      <IconButton size={'sm'} {...args}>
        {content}
      </IconButton>
      <IconButton size={'md'} {...args}>
        {content}
      </IconButton>
      <IconButton size={'lg'} {...args}>
        {content}
      </IconButton>
    </HStack>
  </>
)

export const Primary = Template.bind({})
Primary.args = {
  colorScheme: 'blue',
  children: content,
}

export const PrimaryLoading = args => (
  <>
    <HStack>
      <IconButton isLoading colorScheme="blue" variant="outline" {...args}>
        {content}
      </IconButton>
    </HStack>
  </>
)

export const PrimaryRound = Template.bind({})
PrimaryRound.args = {
  colorScheme: 'blue',
  children: content,
  isRound: true,
}

export const PrimaryFullWidth = Template.bind({})
PrimaryFullWidth.args = {
  colorScheme: 'blue',
  children: content,
  isFullWidth: true,
}

export const PrimaryDisabled = Template.bind({})
PrimaryDisabled.args = {
  colorScheme: 'blue',
  children: content,
  isDisabled: true,
}

export const Secondary = Template.bind({})
Secondary.args = {
  colorScheme: 'seagrass',
  children: content,
}

export const Danger = Template.bind({})
Danger.args = {
  colorScheme: 'red',
  children: <DeleteIcon />,
}
