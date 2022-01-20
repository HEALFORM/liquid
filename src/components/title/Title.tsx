import isPropValid from '@emotion/is-prop-valid'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import theme from '@healform/design-tokens/dist/js/theme'
import type { FC, HTMLAttributes } from 'react'

type Size = 'one' | 'two' | 'three' | 'four'

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * A Circuit UI title size. Defaults to `one`.
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
  font-weight: ${theme.fonts.fontWeight.bold.value};
  letter-spacing: -0.03em;
  margin-bottom: ${theme.spacings.sm.value};
`

const sizeStyles = ({ size = 'one' }: TitleProps) => {
  if (!size) {
    return null
  }

  return css`
    font-size: ${theme.typography.title[size].fontSize.value};
    line-height: ${theme.typography.title[size].lineHeight.value};
  `
}

const noMarginStyles = ({ noMargin }: TitleProps) => {
  if (!noMargin) {
    return null
  }

  return css`
    margin-bottom: 0;
  `
}

/**
 * A flexible title component capable of rendering any HTML heading element.
 */
export const Title: FC<TitleProps> = styled('h2', {
  shouldForwardProp: prop => isPropValid(prop as string) && prop !== 'size',
})<TitleProps>(baseStyles, sizeStyles, noMarginStyles)
