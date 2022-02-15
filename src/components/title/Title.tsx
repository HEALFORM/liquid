import { Box, useStyleConfig } from '@chakra-ui/react'
import React from 'react'

export function Title({ children, ...props }) {
  const { size, variant, ...rest } = props
  const styles = useStyleConfig('Title', { size, variant })
  return (
    <Box as="h1" sx={styles} {...rest}>
      {children}
    </Box>
  )
}
