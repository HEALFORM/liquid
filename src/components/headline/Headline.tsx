import { Box, useStyleConfig } from '@chakra-ui/react'
import tokens from '@healform/design-tokens/dist/js/tokens'
import React, { HTMLAttributes } from 'react'

type Size = 'one' | 'two' | 'three' | 'four'

export interface HeadlineProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * A Circuit UI headline size. Defaults to `one`.
   */
  size?: Size | string
  /**
   * Removes the default bottom margin from the headline.
   */
  noMargin?: boolean
  /**
   * The HTML heading element to render.
   * Headings should be nested sequentially without skipping any levels.
   * Learn more at https://www.w3.org/WAI/tutorials/page-structure/headings/.
   */
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Headline = React.forwardRef<HTMLAttributes<any>, HeadlineProps>(function Headline({ children, ...props }) {
  const { size, noMargin, ...rest } = props
  const styles = useStyleConfig('Headline', { size })
  console.log('styles:', styles)
  console.log('props:', props)
  console.log('rest:', rest)
  return (
    <Box sx={styles} {...rest} mb={noMargin ? '0' : tokens.spacings.sm.value} as={props.as}>
      {children}
    </Box>
  )
})

Headline.defaultProps = {
  size: 'one',
  as: 'h1',
}
