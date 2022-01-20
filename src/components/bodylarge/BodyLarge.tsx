import { css } from '@emotion/core'
import isPropValid from '@emotion/is-prop-valid'
import styled from '@emotion/styled'
import theme from '@healform/design-tokens/dist/js/theme'
import React, { forwardRef, HTMLAttributes, Ref } from 'react'

import { AsPropType } from '../../@types/prop-types'

type Variant = 'highlight' | 'quote' | 'success' | 'error' | 'subtle'

export interface BodyLargeProps extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * Choose from style variants.
   */
  variant?: Variant
  /**
   * Render the text using any HTML element.
   */
  as?: AsPropType
  /**
   * The ref to the HTML DOM element.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: Ref<any>
}

const baseStyles = () => css`
  font-weight: ${theme.fonts.fontWeight.regular.value};
  font-size: ${theme.typography.bodyLarge.fontSize.value};
  line-height: ${theme.typography.bodyLarge.lineHeight.value};
  font-family: ${theme.fonts.fontStack.default.value};
`

const variantStyles = ({ variant }: BodyLargeProps) => {
  switch (variant) {
    default: {
      return null
    }
    case 'highlight': {
      return css`
        font-weight: ${theme.fonts.fontWeight.bold.value};
      `
    }
    case 'quote': {
      return css`
        font-style: italic;
        padding-left: ${theme.spacings.lg.value};
        border-left: 2px solid ${theme.colors.primary.value};
      `
    }
    case 'success': {
      return css`
        color: ${theme.colors.success.value};
      `
    }
    case 'error': {
      return css`
        color: ${theme.colors.danger.value};
      `
    }
    case 'subtle': {
      return css`
        color: ${theme.colors.gray['500'].value};
      `
    }
  }
}

// @ts-ignore
const StyledBodyLarge = styled('p', {
  shouldForwardProp: prop => isPropValid(prop as string),
})<BodyLargeProps>(baseStyles, variantStyles)

function getHTMLElement(variant?: Variant): AsPropType {
  if (variant === 'highlight') {
    return 'strong'
  }
  if (variant === 'quote') {
    return 'blockquote'
  }
  return 'p'
}

/**
 * The BodyLarge component is used to present the core textual content
 * to our users.
 */
export const BodyLarge = forwardRef((props: BodyLargeProps, ref?: BodyLargeProps['ref']) => {
  const as = props.as || getHTMLElement(props.variant)
  return <StyledBodyLarge {...props} ref={ref} as={as} />
})

BodyLarge.displayName = 'BodyLarge'
