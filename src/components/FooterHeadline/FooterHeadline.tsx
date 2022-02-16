import { Box, useStyleConfig } from '@chakra-ui/react'
import tokens from '@healform/design-tokens/dist/js/tokens'
import React, { HTMLAttributes } from 'react'

export interface FooterHeadlineProps extends HTMLAttributes<HTMLHeadingElement> {
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

export const FooterHeadline = React.forwardRef<HTMLAttributes<any>, FooterHeadlineProps>(function FooterHeadline({
  children,
  ...props
}) {
  const { noMargin, ...rest } = props
  const styles = useStyleConfig('FooterHeadline')
  return (
    <Box sx={styles} {...rest} mb={noMargin ? '0' : tokens.spacings.sm.value} as={props.as}>
      {children}
    </Box>
  )
})

FooterHeadline.defaultProps = {
  as: 'h3',
}
