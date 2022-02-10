import { Box, useStyleConfig } from '@chakra-ui/react'
import React from 'react'

export function Body({ children, ...props }) {
  const { size, variant, ...rest } = props
  const styles = useStyleConfig('Body', { size, variant })
  return (
    <Box as="p" sx={styles} {...rest}>
      {children}
    </Box>
  )
}
