import { Box, useStyleConfig } from '@chakra-ui/react'
import tokens from '@healform/design-tokens/dist/js/tokens'
import React, { HTMLAttributes, ReactNode } from 'react'

export interface SubHeadlineProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
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

export const SubHeadline = ({ children, ...props }: SubHeadlineProps) => {
  const { noMargin, ...rest } = props
  const styles = useStyleConfig('SubHeadline')
  return (
    <Box sx={styles} {...rest} mb={noMargin ? '0' : tokens.spacings.sm.value} as={props.as}>
      {children}
    </Box>
  )
}

SubHeadline.defaultProps = {
  as: 'h4',
}
