import { css } from '@emotion/react'
import styled from '@emotion/styled'
import theme from '@healform/design-tokens/dist/js/theme'
import { FC } from 'react'

type Align = 'left' | 'right'

export interface CardFooterProps {
  /**
   * Direction to align the content. Either left/right
   */
  align?: Align
}

const baseStyles = () => css`
  display: block;
  width: 100%;
  margin-top: ${theme.spacings.sm.value};

  @media (min-width: ${theme.breakpoints.xs.value}px) {
    align-items: center;
    display: flex;
    margin-top: ${theme.spacings.md.value};
  }
`

const alignmentStyles = ({ align = 'right' }: CardFooterProps) =>
  align === 'right' &&
  css`
    @media (min-width: ${theme.breakpoints.xs.value}px) {
      justify-content: flex-end;
    }
  `

/**
 * Footer used in the card component. Used for styling and aligment
 * purposes only.
 */

export const CardFooter: FC<CardFooterProps> = styled('footer')<CardFooterProps>(baseStyles, alignmentStyles)
