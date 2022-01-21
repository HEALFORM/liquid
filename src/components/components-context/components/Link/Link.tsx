import React, { forwardRef, AnchorHTMLAttributes, Ref } from 'react'

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  ref?: Ref<HTMLAnchorElement>
}

/**
 * A barebones Link component that's basically just an `<a>` tag
 */
export const Link = forwardRef(({ children, ...props }: LinkProps, ref: LinkProps['ref']) => (
  <a {...props} ref={ref}>
    {children}
  </a>
))

Link.displayName = 'Link'
