/** @jsxRuntime classic */

/** @jsx jsx */
import { jsx } from '@emotion/react'
import type { PropsOf, Theme } from '@emotion/react'
import styled from '@emotion/styled'
import theme from '@healform/design-tokens/dist/js/theme'
import css from '@styled-system/css'
import { themeGet } from '@styled-system/theme-get'
import { cloneElement, FC, forwardRef, PropsWithoutRef, ReactElement } from 'react'
import { variant as systemVariant } from 'styled-system'

import colors from '../../styles/modules/colors'
import { BASE_FOCUS } from '../../styles/modules/mixins'
import { LiquidFontFamily, LiquidFontSize, LiquidFontWeight } from '../../styles/theme/typography'
import { CssVars } from '../../utils'
import Box, { BoxProps, PolymorphicComponent } from '../primitives/Box'

type Variant =
  | 'primary'
  | 'primaryInverse'
  | 'primaryOutline'
  | 'primaryTransparent'
  | 'secondary'
  | 'secondaryInverse'
  | 'secondaryOutline'
  | 'secondaryTransparent'
  | 'tertiary'
  | 'tertiaryOutline'
  | 'black'
  | 'blackOutline'
  | 'danger'
  | 'dangerOutline'
type VariantSize = 'sm' | 'md' | 'lg'

type HTMLButtonProps = Omit<PropsWithoutRef<PropsOf<'button'>>, 'css'>

export interface ButtonProps extends Omit<BoxProps, keyof HTMLButtonProps>, HTMLButtonProps {
  /**
   * Choose from 14 style variants. Default: 'tertiary'.
   */
  readonly variant?: Variant
  readonly startIcon?: ReactElement
  readonly endIcon?: ReactElement
  readonly variantSize?: VariantSize
  /**
   * Stretch the button across the full width of its parent.
   */
  readonly stretch?: boolean
}

const defaultProps: ButtonProps = {
  variant: 'tertiary',
}

const generateVariant = (color: keyof typeof colors, theme: Theme) => {
  if (color === 'black') {
    return {
      bg: `${color}`,
      [`${CssVars.FocusBorderColor}`]: themeGet(`colors.${color}.300`, 'rgb(66 153 225 / 60%)')({ theme }),

      '&:hover': {
        bg: `gray.800`,
        cursor: 'pointer',
      },
      '&:focus': {
        ...BASE_FOCUS,
      },
      '&:disabled': {
        bg: `${color}.100`,
        color: `${color}.300`,
      },
    }
  }
  if (color === 'gray') {
    return {
      bg: `${color}.100`,
      color: `black`,
      [`${CssVars.FocusBorderColor}`]: themeGet(`colors.${color}.300`, 'rgb(66 153 225 / 60%)')({ theme }),

      '&:hover': {
        bg: `gray.200`,
        cursor: 'pointer',
      },
      '&:focus': {
        ...BASE_FOCUS,
      },
      '&:disabled': {
        bg: `${color}.100`,
        color: `${color}.300`,
      },
    }
  }
  return {
    bg: `${color}.500`,
    [`${CssVars.FocusBorderColor}`]: themeGet(`colors.${color}.300`, 'rgb(66 153 225 / 60%)')({ theme }),

    '&:hover': {
      bg: `${color}.600`,
      cursor: 'pointer',
    },
    '&:focus': {
      ...BASE_FOCUS,
    },
    '&:disabled': {
      bg: `${color}.100`,
      color: `${color}.300`,
    },
  }
}

const generateInverseVariant = (color: keyof typeof colors, theme: Theme) => {
  return {
    bg: `gray.100`,
    color: `${color}.500`,
    [`${CssVars.FocusBorderColor}`]: themeGet(`colors.${color}.300`, 'rgb(66 153 225 / 60%)')({ theme }),

    '&:hover': {
      bg: `gray.200`,
      color: `${color}.600`,
      cursor: 'pointer',
    },
    '&:focus': {
      ...BASE_FOCUS,
    },
    '&:disabled': {
      bg: `${color}.100`,
      color: `${color}.300`,
    },
  }
}

const generateOutlineVariant = (color: keyof typeof colors, theme: Theme) => {
  if (color === 'black') {
    return {
      boxShadow: `0 0 0 1px inset` + themeGet(`colors.black`)({ theme }),
      color: `black`,
      [`${CssVars.FocusBorderColor}`]: themeGet(`colors.black`, 'rgb(66 153 225 / 60%)')({ theme }),

      '&:hover': {
        boxShadow: `none`,
        bg: `black`,
        color: `white`,
        cursor: 'pointer',
      },
      '&:focus': {
        ...BASE_FOCUS,
      },
      '&:disabled': {
        bg: `${color}.100`,
        color: `${color}.300`,
      },
    }
  }
  if (color === 'gray') {
    return {
      boxShadow: `0 0 0 1px inset` + themeGet(`colors.${color}.100`)({ theme }),
      color: `black`,
      [`${CssVars.FocusBorderColor}`]: themeGet(`colors.${color}.300`, 'rgb(66 153 225 / 60%)')({ theme }),

      '&:hover': {
        boxShadow: `none`,
        bg: `${color}.100`,
        color: `black`,
        cursor: 'pointer',
      },
      '&:focus': {
        ...BASE_FOCUS,
      },
      '&:disabled': {
        bg: `${color}.100`,
        color: `${color}.300`,
      },
    }
  }
  return {
    boxShadow: `0 0 0 1px inset` + themeGet(`colors.${color}.500`)({ theme }),
    color: `${color}.500`,
    [`${CssVars.FocusBorderColor}`]: themeGet(`colors.${color}.300`, 'rgb(66 153 225 / 60%)')({ theme }),

    '&:hover': {
      bg: `${color}.500`,
      color: `white`,
      cursor: 'pointer',
    },
    '&:focus': {
      ...BASE_FOCUS,
    },
    '&:disabled': {
      bg: `${color}.100`,
      color: `${color}.300`,
    },
  }
}

const generateTransparentVariant = (color: keyof typeof colors, theme: Theme) => {
  return {
    color: `${color}.500`,
    [`${CssVars.FocusBorderColor}`]: themeGet(`colors.${color}.300`, 'rgb(66 153 225 / 60%)')({ theme }),

    '&:hover': {
      color: `${color}.500`,
      bg: `gray.100`,
    },
    '&:focus': {
      ...BASE_FOCUS,
    },
    '&:disabled': {
      bg: `${color}.100`,
      color: `${color}.300`,
    },
  }
}

const InnerButton = styled(Box)(
  {
    transition: theme.animations.default.value,
    outline: 'none',
    '&:hover': {
      cursor: 'pointer',
    },
    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
  ({ theme }) =>
    systemVariant<{}, Variant>({
      variants: {
        primary: generateVariant('blue', theme),
        primaryInverse: generateInverseVariant('blue', theme),
        primaryOutline: generateOutlineVariant('blue', theme),
        primaryTransparent: generateTransparentVariant('blue', theme),
        secondary: generateVariant('seagrass', theme),
        secondaryInverse: generateInverseVariant('seagrass', theme),
        secondaryOutline: generateOutlineVariant('seagrass', theme),
        secondaryTransparent: generateTransparentVariant('seagrass', theme),
        tertiary: generateVariant('gray', theme),
        tertiaryOutline: generateOutlineVariant('gray', theme),
        black: generateVariant('black', theme),
        blackOutline: generateOutlineVariant('black', theme),
        danger: generateVariant('red', theme),
        dangerOutline: generateOutlineVariant('red', theme),
      },
    }),
  systemVariant<{}, VariantSize>({
    prop: 'variantSize',
    variants: {
      sm: {
        px: 2,
        py: 1,
        fontSize: LiquidFontSize.Xs,
      },
      md: {
        px: 4,
        py: 2,
        fontSize: LiquidFontSize.Sm,
      },
      lg: {
        px: 8,
        py: 4,
        fontSize: LiquidFontSize.Lg,
      },
    },
  }),
) as PolymorphicComponent<ButtonProps>

export const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, startIcon, endIcon, variant = 'primary', variantSize = 'md', stretch = false, ...props }, ref) => {
    return (
      <InnerButton
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="none"
        borderRadius="full"
        fontFamily={LiquidFontFamily.Heading}
        fontWeight={LiquidFontWeight.Semibold}
        ref={ref}
        as="button"
        color="white"
        variant={variant}
        variantSize={variantSize}
        css={css({
          ...(stretch
            ? {
                width: `100%`,
              }
            : {}),
        })}
        {...props}
      >
        {startIcon && cloneElement(startIcon, { mr: 2 })}
        {children}
        {endIcon && cloneElement(endIcon, { ml: 2 })}
      </InnerButton>
    )
  },
)

Button.defaultProps = defaultProps
export default Button
