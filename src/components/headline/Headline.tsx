import { css } from '@emotion/core'
import isPropValid from '@emotion/is-prop-valid'
import styled from '@emotion/styled'
import theme from '@healform/design-tokens/dist/js/theme'
import type { FC, HTMLAttributes } from 'react'

type Size = 'one' | 'two' | 'three' | 'four'

export interface HeadlineProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * A Circuit UI headline size. Defaults to `one`.
   */
  size?: Size
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

const baseStyles = () => css`
  letter-spacing: -0.03em;
  font-weight: ${theme.fonts.fontWeight.bold.value};
  margin-bottom: ${theme.spacings.sm.value};
  font-family: ${theme.fonts.fontStack.special.value};
`

const sizeStyles = ({ size = 'one' }: HeadlineProps) => css`
  font-size: ${theme.typography.headline[size].fontSize.value};
  line-height: ${theme.typography.headline[size].lineHeight.value};
`

const noMarginStyles = ({ noMargin }: HeadlineProps) => {
  if (!noMargin) {
    return null
  }

  return css`
    margin-bottom: 0;
  `
}

/**
 * A flexible headline component capable of rendering any HTML heading element.
 */
export const Headline: FC<HeadlineProps> = styled('h2', {
  shouldForwardProp: prop => isPropValid(prop as string) && prop !== 'size',
})<HeadlineProps>(baseStyles, sizeStyles, noMarginStyles)
