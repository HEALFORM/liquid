import {Box, HTMLChakraProps, useStyleConfig} from '@chakra-ui/react'
import tokens from '@healform/design-tokens/dist/js/tokens'
import React, { HTMLAttributes, ReactNode } from 'react'
import {BaseTypographyProps} from "../../interface/Typography";

export interface FooterHeadlineProps extends BaseTypographyProps, HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
}

export const FooterHeadline = React.forwardRef<HTMLChakraProps<any>, FooterHeadlineProps>(function FooterHeadline({
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
