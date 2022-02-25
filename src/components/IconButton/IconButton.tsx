import { IconButton as ChakraIconButton, IconButtonProps } from '@chakra-ui/react'
import React from 'react'

export const IconButton = ({ children, ...props }: IconButtonProps) => {
  return (
    <ChakraIconButton aria-label={props['aria-label']} {...props}>
      {children}
    </ChakraIconButton>
  )
}

IconButton.defaultProps = {
  colorScheme: 'gray',
  size: 'md',
  variant: 'solid',
}
