import { css } from '@emotion/react'
import styled from '@emotion/styled'
import theme from '@healform/design-tokens/dist/js/theme'
import { forwardRef, ReactElement, Ref } from 'react'
import React from 'react'

import { Button, ButtonProps } from '../button'

type Action = Omit<ButtonProps, 'variant'>

export interface ButtonGroupProps {
  /**
   * @deprecated Use the `actions` prop instead.
   */
  children?: (ReactElement<ButtonProps> | null | undefined)[] | ReactElement<ButtonProps>
  /**
   * Direction to align the content. Either left/right
   */
  align?: 'left' | 'center' | 'right'
  /**
   * Whether to display buttons inline on mobile.
   */
  inlineMobile?: boolean
  /**
   * The ref to the HTML DOM element.
   */
  ref?: Ref<HTMLDivElement>
  /**
   * Action Buttons
   */
  actions?: {
    primary: Action
    secondary?: Action
  }
}

const getInlineStyles = () => css`
  flex-wrap: wrap;
  > button,
  > a {
    width: auto;

    &:not(:last-child) {
      margin-right: ${theme.spacings.xs.value};
      margin-bottom: 0;
    }
  }
`

const baseStyles = () => css`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;

  > button,
  > a {
    width: 100%;

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xs.value};
    }
  }

  @media (min-width: ${theme.breakpoints.sm.value}px) {
    ${getInlineStyles()};
  }
`

const alignmentMap = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
} as const

const alignmentStyles = ({ align = 'right' }: ButtonGroupProps) => css`
  justify-content: ${alignmentMap[align]};
`

const inlineMobileStyles = ({ inlineMobile = false }: ButtonGroupProps) =>
  inlineMobile &&
  css`
    ${getInlineStyles()}
  `

const actionWrapperStyles = ({ align = 'right' }: ButtonGroupProps) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: ${theme.breakpoints.sm.value}px) {
    flex-direction: row;
    justify-content: ${alignmentMap[align]};
  }
`

const secondaryButtonStyles = () => css`
  margin-right: ${theme.spacings.xs.value};
  @media (max-width: ${theme.breakpoints.sm.value}px) {
    display: none;
  }
`

const SecondaryButton = styled(Button)<ButtonProps>(secondaryButtonStyles)

const tertiaryButtonStyles = () => css`
  margin-top: ${theme.spacings.xs.value};
  @media (min-width: ${theme.breakpoints.sm.value}px) {
    display: none;
  }
`

const TertiaryButton = styled(Button)<ButtonProps>(tertiaryButtonStyles)

const Wrapper = styled('div')<ButtonGroupProps>(baseStyles, alignmentStyles, inlineMobileStyles)

const ActionsWrapper = styled('div')<ButtonGroupProps>(actionWrapperStyles)

/**
 * Groups its Button children into a list and adds margins between.
 */
export const ButtonGroup = forwardRef(
  ({ children, actions, ...props }: ButtonGroupProps, ref: ButtonGroupProps['ref']) => {
    if (actions) {
      return (
        <ActionsWrapper {...props}>
          {actions.secondary && <SecondaryButton {...actions.secondary} variant="secondary" />}

          <Button {...actions.primary} variant="primary" />

          {actions.secondary && <TertiaryButton {...actions.secondary} variant="tertiary" />}
        </ActionsWrapper>
      )
    }
    return (
      <Wrapper {...props} ref={ref}>
        {children}
      </Wrapper>
    )
  },
)

ButtonGroup.displayName = 'ButtonGroup'
