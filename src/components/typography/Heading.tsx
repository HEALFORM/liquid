import React, { FC, forwardRef } from 'react'
import { ResponsiveValue } from 'styled-system'

import { LiquidFontSize } from '../../styles/theme/typography'
import { jsxInnerText } from '../../utils/jsx'
import Box, { BoxOwnProps } from '../primitives/Box'

export enum LiquidHeadingSize {
  Xl = 'xl',
  Lg = 'lg',
  Md = 'md',
  Sm = 'sm',
  Xs = 'xs',
}

type Size = 'xl' | 'lg' | 'md' | 'sm' | 'xs'

const sizes: { [Key in Size]: ResponsiveValue<string | LiquidFontSize> } = {
  xl: [LiquidFontSize.Xl3, null, LiquidFontSize.Xl4],
  lg: [LiquidFontSize.Xl, null, LiquidFontSize.Xl2],
  md: LiquidFontSize.Xl,
  sm: LiquidFontSize.Md,
  xs: LiquidFontSize.Sm,
}

type Props = Omit<BoxOwnProps, 'size' | 'as'> & {
  readonly as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  readonly size?: LiquidHeadingSize | Size
  readonly truncate?: number
}

const Heading: FC<Props> = forwardRef<HTMLHeadingElement, Props>(
  ({ children, truncate, size = 'xl', as = 'h2', ...rest }, ref) => {
    let content = children
    const innerText = jsxInnerText(content)
    if (truncate && innerText.length > truncate) {
      content = `${innerText.slice(0, truncate)}…`
    }
    return (
      <Box
        ref={ref}
        lineHeight="shorter"
        fontWeight="bold"
        fontFamily="heading"
        as={as}
        fontSize={sizes[size]}
        {...rest}
      >
        {content}
      </Box>
    )
  },
)

Heading.displayName = 'Heading'

export default Heading
