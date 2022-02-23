import { ExternalLinkIcon } from '@chakra-ui/icons'
import { LinkProps, Link as ChakraLink } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import React from 'react'

export const Link = ({ children, ...props }: LinkProps) => {
  return (
    <ChakraLink isExternal={props.isExternal} {...props}>
      {children}
      {props.isExternal && <ExternalLinkIcon height=".8em" width=".8em" mb="mg0" ml={1} />}
    </ChakraLink>
  )
}

Link.defaultProps = {
  children: PropTypes.node,
  isExternal: false,
  variant: 'basic',
}
