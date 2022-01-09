import React, { FC, forwardRef } from 'react'
import { variant } from 'styled-system'

import { useMultipleColorScheme } from '../../hooks/useColorScheme'
import { LiquidRadius } from '../../styles/theme'
import { LiquidFontFamily, LiquidFontSize, LiquidFontWeight } from '../../styles/theme/typography'
import { BoxPropsOf, liquid } from '../primitives'
import { ColorSchemable } from '../types'

type VariantSize = 'sm' | 'md' | 'lg'

export interface BadgeProps extends BoxPropsOf<'span'>, ColorSchemable {
  readonly variantSize?: VariantSize
}

const variants = [
  variant<unknown, VariantSize>({
    prop: 'variantSize',
    variants: {
      sm: {
        py: 0,
        px: 1,
        fontSize: LiquidFontSize.Xs,
      },
      md: {
        p: 1,
        fontSize: LiquidFontSize.Md,
      },
      lg: {
        px: 2,
        py: 1,
        fontSize: LiquidFontSize.Lg,
      },
    },
  }),
]

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(({ children, colorScheme = 'blue', ...props }, ref) => {
  const styles = useMultipleColorScheme({
    bg: { colorScheme, shading: 100, fallback: 'transparent' },
    color: { colorScheme, shading: 600, fallback: 'text' },
  })
  return (
    <liquid.span
      {...styles}
      _variants={variants}
      fontWeight={LiquidFontWeight.Semibold}
      borderRadius={LiquidRadius.Md}
      fontFamily={LiquidFontFamily.Body}
      ref={ref}
      {...props}
    >
      {children}
    </liquid.span>
  )
}) as FC<BadgeProps>

Badge.defaultProps = {
  colorScheme: 'blue',
  variantSize: 'md',
}

Badge.displayName = 'Badge'
