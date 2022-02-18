import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Link as ChakraLink } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import React, { HTMLAttributes, ReactNode } from 'react'

export interface LinkProps {
  children: ReactNode
  /**
   * Choose from two variants
   */
  variant?: 'primary' | 'reverse'
  /**
   * If true, the link will open in new tab
   */
  isExternal?: boolean
  /**
   * The destination of url
   */
  href?: string
  rel?: string
  target?: string
}

export const Link = React.forwardRef<HTMLAttributes<any>, LinkProps>(function Link({ children, ...props }) {
  return (
    <ChakraLink isExternal={props.isExternal} {...props}>
      {children}
      {props.isExternal && <ExternalLinkIcon height=".8em" width=".8em" mb="mg0" ml={1} />}
    </ChakraLink>
  )
})

Link.defaultProps = {
  children: PropTypes.node,
  isExternal: false,
  variant: 'primary',
}
