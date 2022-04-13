import { Text as ChakraText, TextProps, useStyleConfig } from '@chakra-ui/react'
import React, { ReactNode, Ref } from 'react'

type Variant = 'highlight' | 'quote' | 'success' | 'error' | 'subtle'

export interface BodyLargeProps extends TextProps {
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

export const BodyLarge = ({ children, ...props }: BodyLargeProps) => {
  const { variant, noMargin, ...rest } = props
  const styles = useStyleConfig('BodyLarge', { variant })
  return (
    <ChakraText as={'p'} sx={styles} {...rest} mb={noMargin ? '0' : '3'}>
      {children}
    </ChakraText>
  )
}
