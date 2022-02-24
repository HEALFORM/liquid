import { Box, useStyleConfig } from '@chakra-ui/react'
import tokens from '@healform/design-tokens/dist/js/tokens'
import React, { HTMLAttributes, ReactNode, Ref } from 'react'

type Size = 'one' | 'two'
type Variant = 'highlight' | 'quote' | 'success' | 'error' | 'subtle'

export interface BodyProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  /**
   * Choose from style variants.
   */
  variant?: Variant
  /**
   * Choose from style sizes.
   */
  size?: Size
  /**
   * Removes the default bottom margin from the title.
   */
  noMargin?: boolean
  /**
   * The ref to the HTML DOM element.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: Ref<any>
}

export const Body = React.forwardRef<HTMLAttributes<any>, BodyProps>(function Body({ children, ...props }) {
  const { size, variant, noMargin, ...rest } = props
  const styles = useStyleConfig('Body', { size, variant })
  return (
    <Box as={'p'} sx={styles} {...rest} mb={noMargin ? '0' : tokens.spacings.sm.value}>
      {children}
    </Box>
  )
})

Body.defaultProps = {
  size: 'one',
}
