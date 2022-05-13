import React from 'react'

import { Box } from './../../index'
import { ImageCard, ImageCardProps } from './ImageCard'

export default {
  title: 'Components/ImageCard',
  component: ImageCard,
  argTypes: {
    image: {
      name: 'Card Image',
      control: {
        type: 'text',
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
    buttonText: {
      name: 'Card Button Text',
      control: {
        type: 'text',
      },
    },
  },
}

const image = 'https://static.healform.de/__assets/content__facebook/img/og-image_healform-main.jpg'
const keyword = 'Neu'
const title = 'Bumper Plates'
const description = 'Bumper plates are a great way to add a little extra protection to your vehicle.'
const url = 'https://www.healform.de/'
const buttonText = 'Learn More'

export const Base = (args: ImageCardProps) => (
  <Box maxW="400px">
    <ImageCard
      image={image}
      keyword={keyword}
      title={title}
      description={description}
      url={url}
      buttonText={buttonText}
      {...args}
    />
  </Box>
)
