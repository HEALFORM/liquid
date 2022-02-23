import { CalendarIcon, DeleteIcon } from '@chakra-ui/icons'
import { Box, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

import { HStack } from './../../index'
import { Button } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    colorScheme: {
      name: 'Color Scheme',
      type: { name: 'string', required: false },
      description: 'Render the `ButtonComponent` in different color schemes.',
      table: {
        type: { summary: 'gray|blue|seagrass|red|orange|yellow|green' },
        defaultValue: { summary: 'gray' },
      },
      control: {
        type: 'select',
        options: ['gray', 'blue', 'seagrass', 'red', 'green'],
      },
    },
    variant: {
      name: 'Variant',
      type: { name: 'string', required: false },
      description: 'Render the `ButtonComponent` in four different variants.',
      table: {
        type: { summary: 'solid|ghost|outline|link' },
        defaultValue: { summary: 'solid' },
      },
      control: {
        type: 'radio',
        options: ['solid', 'ghost', 'outline', 'link'],
      },
    },
    size: {
      name: 'Size',
      type: { name: 'string', required: false },
      description: 'Render the `ButtonComponent` in four different sizes.',
      table: {
        type: { summary: 'xs|sm|md|lg' },
        defaultValue: { summary: 'md' },
      },
      control: {
        type: 'radio',
        options: ['xs', 'sm', 'md', 'lg'],
      },
    },
    isDisabled: {
      name: 'isDisabled',
      type: { name: 'boolean', required: false },
      description: 'Visually and functionally disable the button.',
      table: {
        type: { summary: 'true|false' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    isFullWidth: {
      name: 'isFullWidth',
      type: { name: 'boolean', required: false },
      description: 'Stretch the button across the full width of its parent.',
      table: {
        type: { summary: 'true|false' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    isLoading: {
      name: 'isLoading',
      type: { name: 'boolean', required: false },
      description: 'Visually disables the button and shows a loading spinner.',
      table: {
        type: { summary: 'true|false' },
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
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

const content = 'Termin buchen'

const Template = args => <Button {...args} />

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
      <Button colorScheme={'green'} {...args}>
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

export const CustomStyling = args => (
  <>
    <HStack>
      <Button
        as="a"
        display={{ base: 'none', md: 'inline-flex' }}
        href={'https://healform.de/'}
        target={'_blank'}
        fontSize={'sm'}
        fontWeight={600}
        color="blue"
        bg={'#ff0000'}
        _hover={{
          bg: "blue",
          color: "#ff0000"
        }}
        leftIcon={<CalendarIcon />}
        {...args}
      >
        Jetzt anmelden
      </Button>
      <Button
        as="a"
        display={{ base: 'none', md: 'inline-flex' }}
        href={'https://healform.de/'}
        target={'_blank'}
        fontSize={'xl'}
        fontWeight={600}
        color={useColorModeValue('black', 'white')}
        bg={'transparent'}
        borderRadius={0}
        p={5}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'blackAlpha.800'),
        }}
        leftIcon={<CalendarIcon />}
        {...args}
      >
        Jetzt anmelden
      </Button>
    </HStack>
  </>
)
