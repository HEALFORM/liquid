import { Box, useStyleConfig } from '@chakra-ui/react'
import tokens from '@healform/design-tokens/dist/js/tokens'
import React, { HTMLAttributes, ReactNode, Ref } from "react";

type Variant = 'highlight' | 'quote' | 'success' | 'error' | 'subtle'

export interface BodyLargeProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  /**
   * Choose from style variants.
   */
  variant?: Variant
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

export const BodyLarge = React.forwardRef<HTMLAttributes<any>, BodyLargeProps>(function BodyLarge({
  children,
  ...props
}) {
  const { variant, noMargin, ...rest } = props
  const styles = useStyleConfig('BodyLarge', { variant })
  return (
    <Box as={'p'} sx={styles} {...rest} mb={noMargin ? '0' : tokens.spacings.sm.value}>
      {children}
    </Box>
  )
})
