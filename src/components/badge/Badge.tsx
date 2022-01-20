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
        py: 1,
        px: 3,
        fontSize: LiquidFontSize.Xs,
      },
      md: {
        py: 1,
        px: 3,
        fontSize: LiquidFontSize.Sm,
      },
      lg: {
        py: 1,
        px: 3,
        fontSize: LiquidFontSize.Md,
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
      borderRadius={LiquidRadius.Xxl}
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
