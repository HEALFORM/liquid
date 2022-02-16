import { Box, useStyleConfig } from '@chakra-ui/react'
import React, { HTMLAttributes, Ref } from 'react'

type Variant = 'highlight' | 'quote' | 'success' | 'error' | 'subtle'

export interface BodyLargeProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * Choose from style variants.
   */
  variant?: Variant
  /**
   * The ref to the HTML DOM element.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: Ref<any>
}

export const BodyLarge = React.forwardRef<HTMLAttributes<any>, BodyLargeProps>(function BodyLarge({
  children,
  ...props
}) {
  const { variant, ...rest } = props
  const styles = useStyleConfig('BodyLarge', { variant })
  return (
    <Box as={'p'} sx={styles} {...rest}>
      {children}
    </Box>
  )
})
