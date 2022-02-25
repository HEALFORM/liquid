import { Image as ChakraImage, ImageProps } from '@chakra-ui/react'
import React from 'react'

export const Image = ({ children, ...props }: ImageProps) => {
  return <ChakraImage {...props} />
}
