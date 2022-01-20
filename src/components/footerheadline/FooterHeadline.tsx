import isPropValid from '@emotion/is-prop-valid'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import theme from '@healform/design-tokens/dist/js/theme'
import { FC, HTMLAttributes } from 'react'

export interface FooterHeadlineProps extends HTMLAttributes<HTMLHeadingElement> {
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
  font-size: ${theme.typography.body.one.fontSize.value};
  color: ${theme.colors.gray['400'].value};
  font-family: ${theme.fonts.fontStack.special.value};
  text-transform: uppercase;
  margin-bottom: ${theme.spacings.sm.value};
  letter-spacing: 0.15rem;
  font-weight: ${theme.fonts.fontWeight.semibold.value};
`

const noMarginStyles = ({ noMargin }: FooterHeadlineProps) => {
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
export const FooterHeadline: FC<FooterHeadlineProps> = styled('h3', {
  shouldForwardProp: prop => isPropValid(prop as string),
})<FooterHeadlineProps>(baseStyles, noMarginStyles)
