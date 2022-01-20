import { css } from '@emotion/core'
import isPropValid from '@emotion/is-prop-valid'
import styled from '@emotion/styled'
import theme from '@healform/design-tokens/dist/js/theme'
import React, { forwardRef, HTMLAttributes, Ref } from 'react'

import { AsPropType } from '../../@types/prop-types'

type Size = 'one' | 'two'
type Variant = 'highlight' | 'quote' | 'success' | 'error' | 'subtle'

export interface BodyProps extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * Choose from 2 font sizes. Default `one`.
   */
  size?: Size
  /**
   * Choose from style variants.
   */
  variant?: Variant
  /**
   * Remove the default margin below the text.
   */
  noMargin?: boolean
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
  margin-bottom: ${theme.spacings.sm.value};
`

const sizeStyles = ({ size = 'one' }: BodyProps) => css`
  font-size: ${theme.typography.body[size].fontSize.value};
  line-height: ${theme.typography.body[size].lineHeight.value};
`

const variantStyles = ({ variant }: BodyProps) => {
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

const marginStyles = ({ noMargin }: BodyProps) => {
  if (!noMargin) {
    return null
  }

  return css`
    margin-bottom: 0;
  `
}

const StyledBody = styled('p', {
  shouldForwardProp: prop => isPropValid(prop as string) && prop !== 'size',
})<BodyProps>(baseStyles, sizeStyles, variantStyles, marginStyles)

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
 * The Body component is used to present the core textual content
 * to our users.
 */
export const Body = forwardRef((props: BodyProps, ref?: BodyProps['ref']) => {
  const as = props.as || getHTMLElement(props.variant)
  return <StyledBody {...props} ref={ref} as={as} />
})

Body.displayName = 'Body'
