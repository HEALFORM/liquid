/** @jsxRuntime classic */

/** @jsx jsx */
import { jsx } from '@emotion/react'
import { css } from '@emotion/react'
import theme from '@healform/design-tokens/dist/js/theme'
import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode, Ref } from 'react'

import { ClickEvent } from '../../@types/events'
import { AsPropType } from '../../@types/prop-types'
import { Body, BodyProps } from '../body'
import { useComponents } from '../components-context'

export interface BaseProps extends BodyProps {
  children: ReactNode
  /**
   * Function that's called when the button is clicked.
   */
  onClick?: (event: ClickEvent) => void
  /**
   * The ref to the HTML DOM element, it can be a button an anchor or a span, typed as any for now because of complex js manipulation with styled components
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: Ref<any>
}
type LinkElProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'onClick'>
type ButtonElProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>

export type AnchorProps = BaseProps & LinkElProps & ButtonElProps

const anchorStyles = () => css`
  display: inline-block;
  border-bottom: 1px dotted;
  text-decoration-skip-ink: auto;
  outline: none;
  background: none;
  padding: 0;
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  transition: opacity ${theme.animations.default.value}, color ${theme.animations.default.value},
    background-color ${theme.animations.default.value}, border-color ${theme.animations.default.value};

  &:hover {
    color: ${theme.colors.primary.value};
    cursor: pointer;
  }

  &:active {
    color: ${theme.colors.primaryDark.value};
  }
`

/**
 * The Anchor is used to display a link or button that visually looks like
 * a hyperlink. Based on the Body component, so it also supports its props.
 */
export const Anchor = forwardRef(
  ({ ...props }: AnchorProps, ref?: BaseProps['ref']): ReturnType<any> => {
    const components = useComponents()
    const Link = components.Link as AsPropType

    if (!props.href && !props.onClick) {
      return <Body as="span" {...props} ref={ref} noMargin />
    }

    if (props.href) {
      return <Body {...props} css={anchorStyles} as={Link} ref={ref} noMargin />
    }

    return <Body as="button" {...props} css={anchorStyles} ref={ref} noMargin />
  },
)

Anchor.displayName = 'Anchor'
