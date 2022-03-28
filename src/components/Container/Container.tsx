import { Box, BoxProps } from "@chakra-ui/react";
import React, { ReactNode } from 'react'

type Size = '4xl' | '5xl' | '6xl' | '7xl' | '8xl'

export interface ContainerProps extends BoxProps {
  children: ReactNode
  /**
   * A Liquid UI headline size. Defaults to `one`.
   */
  size?: Size | string
}

export const Container = ({ children, ...props }: ContainerProps) => {
  const { size } = props
  return (
    <Box maxW={{ base: 'xl', md: size }} mx="auto" px={{ base: '6', md: '8' }}>
      {children}
    </Box>
  )
}

Container.defaultProps = {
  size: '8xl',
}
