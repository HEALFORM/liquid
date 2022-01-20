import { css } from '@emotion/react'
import styled from '@emotion/styled'
import theme from '@healform/design-tokens/dist/js/theme'
import { FC, ReactNode } from 'react'
import React from 'react'

import { ClickEvent } from '../../../../types/events'
import { CloseButton } from './../../../button/CloseButton'

type CloseProps =
  | {
      /**
       * Callback for the close button. If not specified, the button won't
       * be shown.
       */
      onClose?: (event: ClickEvent) => void
      /**
       * Text label for the close button for screen readers.
       * Important for accessibility.
       */
      closeButtonLabel?: string
    }
  | { onClose?: never; closeButtonLabel?: never }

export type CardHeaderProps = {
  /**
   * Headline to be shown.
   */
  children?: ReactNode
} & CloseProps

type ContainerElProps = Pick<CardHeaderProps, 'children'>

const baseStyles = () => css`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${theme.spacings.sm.value};
`

const noHeadlineStyles = ({ children }: ContainerElProps) =>
  Array.isArray(children) &&
  !children[0] &&
  css`
    justify-content: flex-end;
  `

const CardHeaderContainer = styled('header')<ContainerElProps>(baseStyles, noHeadlineStyles)

const closeButtonStyles = () => css`
  margin-top: -${theme.spacings.xs.value};
  margin-right: -${theme.spacings.xxs.value};
  margin-bottom: -${theme.spacings.xs.value};
`

const CardHeaderCloseButton = styled(CloseButton)(closeButtonStyles)

/**
 * Header used in the card component. Used for styling and alignment
 * purposes only.
 */
export const CardHeader: FC<CardHeaderProps> = ({ onClose, children, closeButtonLabel, ...props }) => (
  <CardHeaderContainer {...props}>
    {children}
    {onClose && closeButtonLabel && <CardHeaderCloseButton onClick={onClose} label={closeButtonLabel} />}
  </CardHeaderContainer>
)
