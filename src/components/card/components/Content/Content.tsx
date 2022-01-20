import isPropValid from '@emotion/is-prop-valid'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import theme from '@healform/design-tokens/dist/js/theme'
import { FC, Ref, HTMLAttributes } from 'react'

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The padding of the card.
   */
  spacing?: 'small' | 'medium'
  /**
   * The ref to the HTML DOM element.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: Ref<any>
}

const baseStyles = () => css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  flex: 1;
`

const spacingStyles = ({ spacing = 'small' }: CardContentProps) => {
  const spacings = {
    small: `
      ${theme.spacings.sm.value};
    `,
    medium: `
      ${theme.spacings.md.value};
    `,
  }
  return css`
    padding: ${spacings[spacing]};
  `
}

export const CardContent: FC<CardContentProps> = styled('div', {
  shouldForwardProp: prop => isPropValid(prop as string) && prop !== 'spacing',
})<CardContentProps>(baseStyles, spacingStyles)
