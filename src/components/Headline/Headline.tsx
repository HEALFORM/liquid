import { Box, useStyleConfig } from '@chakra-ui/react'
import tokens from '@healform/design-tokens/dist/js/tokens'
import React, { HTMLAttributes, ReactNode } from 'react'
import {BaseTypographyProps} from "../../interface/Typography";

type Size = 'one' | 'two' | 'three' | 'four'

export interface HeadlineProps extends BaseTypographyProps, HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  /**
   * A Liquid UI headline size. Defaults to `one`.
   */
  size?: Size | string
}

export const Headline = React.forwardRef<HTMLAttributes<any>, HeadlineProps>(function Headline({ children, ...props }) {
  const { size, noMargin, ...rest } = props
  const styles = useStyleConfig('Headline', { size })
  return (
    <Box sx={styles} {...rest} mb={noMargin ? '0' : tokens.spacings.sm.value} as={props.as}>
      {children}
    </Box>
  )
})

Headline.defaultProps = {
  size: 'one',
  as: 'h2',
}
