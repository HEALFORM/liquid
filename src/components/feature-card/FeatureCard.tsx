import { css } from '@emotion/react'
import styled from '@emotion/styled'
import theme from '@healform/design-tokens/dist/js/theme'
import { darken } from 'polished'
import React, { forwardRef, HTMLAttributes, Ref } from 'react'

export interface FeatureCardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Choose from 4 style variants. Default: 'neutral'.
   */
  variant?: 'neutral' | 'gradientPrimary' | 'gradientSecondary' | 'gradientMulti'
  /**
   * Set a background image.
   */
  img?: string
  /**
   * The ref to the HTML DOM element
   */
  ref?: Ref<HTMLDivElement>
}

const baseStyles = () => css`
  border-radius: ${theme.radius.xl.value};
  display: inline-block;
  padding: ${theme.spacings.lg.value} ${theme.spacings.xl.value} ${theme.spacings.lg.value} ${theme.spacings.lg.value};
  font-size: 12px;
  line-height: 20px;
  font-weight: ${theme.fonts.fontWeight.semibold.value};
  transition: ${theme.animations.slow.value};
  width: 100%;

  &:hover {
    transform: scale(1.01);
  }
`

const variantStyles = ({
  img = 'https://static.healform.de/__assets/bg-1.svg',
  variant = 'neutral',
}: FeatureCardProps) => {
  switch (variant) {
    default: {
      return null
    }
    case 'neutral': {
      if (img) {
        return css`
          background: url(${img}) right bottom no-repeat, ${darken(0.03, theme.colors.gray['100'].value)};
        `
      } else {
        return css`
          background-color: ${darken(0.03, theme.colors.gray['100'].value)};
        }
      `
      }
    }
    case 'gradientPrimary': {
      if (img) {
        return css`
          color: ${theme.colors.white.value};
          background: url(${img}) right bottom no-repeat,
            linear-gradient(120deg, ${theme.colors.primary.value} 0%, ${theme.colors.primaryDark.value} 99.59%);
        `
      } else {
        return css`
          color: ${theme.colors.white.value};
          background: linear-gradient(
            120deg,
            ${theme.colors.primary.value} 0%,
            ${theme.colors.primaryDark.value} 99.59%
          );
        `
      }
    }
    case 'gradientSecondary': {
      if (img) {
        return css`
          color: ${theme.colors.white.value};
          background: url(${img}) right bottom no-repeat,
            linear-gradient(120deg, ${theme.colors.secondary.value} 0%, ${theme.colors.secondaryDark.value} 99.59%);
        `
      } else {
        return css`
          color: ${theme.colors.white.value};
          background: linear-gradient(
            120deg,
            ${theme.colors.secondary.value} 0%,
            ${theme.colors.secondaryDark.value} 99.59%
          );
        `
      }
    }
    case 'gradientMulti': {
      if (img) {
        return css`
          color: ${theme.colors.white.value};
          background: url(${img}) right bottom no-repeat,
            linear-gradient(80.45deg, ${theme.colors.primary.value} 0%, ${theme.colors.secondary.value} 99.59%);
        `
      } else {
        return css`
          color: ${theme.colors.white.value};
          background: linear-gradient(
            80.45deg,
            ${theme.colors.primary.value} 0%,
            ${theme.colors.secondary.value} 99.59%
          );
        `
      }
    }
  }
}

const StyledFeatureCard = styled('div')<FeatureCardProps>(baseStyles, variantStyles)

/**
 * Lorem Ipsum
 */
export const FeatureCard = forwardRef((props: FeatureCardProps, ref: FeatureCardProps['ref']) => (
  <StyledFeatureCard ref={ref} {...props} />
))

FeatureCard.displayName = 'FeatureCard'
