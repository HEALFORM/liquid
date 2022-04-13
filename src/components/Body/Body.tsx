import { Text as ChakraText, TextProps, useStyleConfig } from '@chakra-ui/react'
import React, { ReactNode, Ref } from 'react'

type Size = 'one' | 'two'
type Variant = 'highlight' | 'quote' | 'success' | 'error' | 'subtle'

export interface BodyProps extends TextProps {
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

export const Body = ({ children, ...props }: BodyProps) => {
  const { size, variant, noMargin, ...rest } = props
  const styles = useStyleConfig('Body', { size, variant })
  return (
    <ChakraText as={'p'} sx={styles} {...rest} mb={noMargin ? '0' : '3'}>
      {children}
    </ChakraText>
  )
}

Body.defaultProps = {
  size: 'one',
}
