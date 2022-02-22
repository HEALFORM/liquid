import {Avatar as ChakraAvatar, AvatarProps} from '@chakra-ui/react'
import React from 'react'

export const Avatar = ({ children, ...props }: AvatarProps) => {
  return <ChakraAvatar {...props}></ChakraAvatar>
}
