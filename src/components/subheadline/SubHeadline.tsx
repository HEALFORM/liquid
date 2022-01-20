import isPropValid from '@emotion/is-prop-valid'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import theme from '@healform/design-tokens/dist/js/theme'
import type { FC, HTMLAttributes } from 'react'

export interface SubHeadlineProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * Removes the default bottom margin from the subheading.
   */
  noMargin?: boolean
  /**
   * The HTML heading element to render. Headings should be nested sequentially
   * without skipping any levels. Learn more at
   * https://www.w3.org/WAI/tutorials/page-structure/headings/.
   */
  as: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const baseStyles = () => css`
  text-transform: uppercase;
  font-weight: ${theme.fonts.fontWeight.bold.value};
  font-size: ${theme.typography.subHeadline.fontSize.value};
  line-height: ${theme.typography.subHeadline.lineHeight.value};
  margin-bottom: ${theme.spacings.sm.value};
  font-family: ${theme.fonts.fontStack.special.value};
`

const noMarginStyles = ({ noMargin }: SubHeadlineProps) => {
  if (!noMargin) {
    return null
  }
  return css`
    margin-bottom: 0;
  `
}

/**
 * A flexible SubHeadline component capable of rendering using any HTML heading
 * element, except h1.
 */
export const SubHeadline: FC<SubHeadlineProps> = styled('h3', {
  shouldForwardProp: prop => isPropValid(prop as string),
})<SubHeadlineProps>(baseStyles, noMarginStyles)
