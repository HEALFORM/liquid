import React from 'react'

import { Box, SimpleGrid } from './../../index'
import { Card, CardProps } from './Card'

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    variant: {
      name: 'Variant',
      table: {
        type: { summary: 'default|border|primaryBg|grayBg' },
      },
      control: {
        type: 'select',
        options: ['default', 'border', 'primaryBg', 'grayBg'],
      },
    },
    image: {
      name: 'Card Image',
      control: {
        type: 'text',
      },
    },
    imageRatio: {
      name: 'Image Ratio',
      table: {
        type: { summary: 'square|rectangle' },
      },
      control: {
        type: 'select',
        options: ['square', 'rectangle'],
      },
    },
    title: {
      name: 'Card Title',
      control: {
        type: 'text',
      },
    },
    description: {
      name: 'Card Description',
      control: {
        type: 'text',
      },
    },
    url: {
      name: 'Card URL',
      control: {
        type: 'text',
      },
    },
  },
}

const image = 'https://static.healform.de/__assets/content__facebook/img/og-image_healform-main.jpg'
const title = 'Bumper Plates'
const description = 'Bumper plates are a great way to add a little extra protection to your vehicle.'
const url = 'https://www.healform.de/'
const buttonText = 'Learn More'

export const Base = (args: CardProps) => (
  <Box maxW="400px">
    <Card image={image} title={title} description={description} url={url} buttonText={buttonText} {...args} />
  </Box>
)

const variants = ['default', 'border', 'primaryBg', 'grayBg']

export const Variants = (args: CardProps) => (
  <>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing="5">
      {variants.map(v => (
        <Card
          variant={v}
          key={v}
          image={image}
          title={title}
          description={description}
          url={url}
          buttonText={buttonText}
          {...args}
        />
      ))}
    </SimpleGrid>
  </>
)

export const SquareImage = (args: CardProps) => (
  <Box maxW="400px">
    <Card
      image={image}
      imageRatio="square"
      title={title}
      description={description}
      url={url}
      buttonText={buttonText}
      {...args}
    />
  </Box>
)

export const RectangleImage = (args: CardProps) => (
  <Box maxW="400px">
    <Card
      image={image}
      imageRatio="rectangle"
      title={title}
      description={description}
      url={url}
      buttonText={buttonText}
      {...args}
    />
  </Box>
)

export const TextDescriptionOnly = (args: CardProps) => (
  <Box maxW="400px">
    <Card title={title} description={description} {...args} />
  </Box>
)

export const TextDescriptionButtonOnly = (args: CardProps) => (
  <Box maxW="400px">
    <Card title={title} description={description} url={url} buttonText={buttonText} {...args} />
  </Box>
)

export const ImageTextButtonOnly = (args: CardProps) => (
  <Box maxW="400px">
    <Card image={image} imageRatio="rectangle" title={title} url={url} buttonText={buttonText} {...args} />
  </Box>
)
