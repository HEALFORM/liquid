import { ButtonGroup as ChakraButtonGroup, ButtonGroupProps } from '@chakra-ui/react'
import React from 'react'

export const ButtonGroup = ({ children, ...props }: ButtonGroupProps) => {
  return <ChakraButtonGroup {...props}>{children}</ChakraButtonGroup>
}
