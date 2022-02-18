import { CalendarIcon, DeleteIcon } from '@chakra-ui/icons'
import React from 'react'

import { HStack } from './../../index'
import { Button, ButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
}

const content = 'Termin buchen'

const Template = (args: ButtonProps) => <Button {...args} />

export const Base = Template.bind({})
Base.args = {
  children: content,
}

export const Variants = args => (
  <>
    <HStack>
      <Button variant="solid" {...args}>
        {content}
      </Button>
      <Button variant="ghost" {...args}>
        {content}
      </Button>
      <Button variant="outline" {...args}>
        {content}
      </Button>
      <Button variant="link" {...args}>
        {content}
      </Button>
    </HStack>
  </>
)

export const Sizes = args => (
  <>
    <HStack>
      <Button size={'xs'} {...args}>
        {content}
      </Button>
      <Button size={'sm'} {...args}>
        {content}
      </Button>
      <Button size={'md'} {...args}>
        {content}
      </Button>
      <Button size={'lg'} {...args}>
        {content}
      </Button>
    </HStack>
  </>
)

export const ColorSchemes = args => (
  <>
    <HStack>
      <Button colorScheme={'gray'} {...args}>
        {content}
      </Button>
      <Button colorScheme={'blue'} {...args}>
        {content}
      </Button>
      <Button colorScheme={'seagrass'} {...args}>
        {content}
      </Button>
      <Button colorScheme={'red'} {...args}>
        {content}
      </Button>
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
      <Button isLoading colorScheme="blue" variant="outline" {...args}>
        {content}
      </Button>
      <Button isLoading loadingText="Submitting" colorScheme="blue" variant="outline" {...args}>
        {content}
      </Button>
    </HStack>
  </>
)

export const PrimaryFullWidth = Template.bind({})
PrimaryFullWidth.args = {
  colorScheme: 'blue',
  children: content,
  isFullWidth: true,
}

export const PrimaryWithIcon = Template.bind({})
PrimaryWithIcon.args = {
  colorScheme: 'blue',
  children: content,
  leftIcon: <CalendarIcon />,
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
  children: 'Termin stornieren',
  leftIcon: <DeleteIcon />,
}
