import { Box, useStyleConfig } from '@chakra-ui/react'
import React, { HTMLAttributes, Ref } from 'react'

type Size = 'one' | 'two'
type Variant = 'highlight' | 'quote' | 'success' | 'error' | 'subtle'

export interface BodyProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * Choose from style sizes.
   */
  size?: Size
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

export const Body = React.forwardRef<HTMLAttributes<any>, BodyProps>(function Body({ children, ...props }) {
  const { size, variant, ...rest } = props
  const styles = useStyleConfig('Body', { size, variant })
  return (
    <Box as={'p'} sx={styles} {...rest}>
      {children}
    </Box>
  )
})

Body.defaultProps = {
  size: 'one',
}
