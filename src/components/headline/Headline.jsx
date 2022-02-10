import { Box, useStyleConfig } from '@chakra-ui/react'
import React from 'react'

export function Headline({ children, ...props }) {
  const { size, variant, ...rest } = props
  const styles = useStyleConfig('Headline', { size, variant })
  return (
    <Box as="h2" sx={styles} {...rest}>
      {children}
    </Box>
  )
}
