import { Badge as ChakraBadge, BadgeProps } from '@chakra-ui/react'
import React from 'react'

export const Badge = ({ children, ...props }: BadgeProps) => {
  return <ChakraBadge {...props}>{children}</ChakraBadge>
}
