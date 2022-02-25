import { Box, useStyleConfig } from '@chakra-ui/react'
import React, { HTMLAttributes, ReactNode } from 'react'

export interface FeatureCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  /**
   * Choose from 4 style variants. Default: 'neutral'.
   */
  variant?: 'neutral' | 'gradientPrimary' | 'gradientSecondary' | 'gradientMulti'
}

export const FeatureCard = ({ children, ...props }: FeatureCardProps) => {
  const { variant, ...rest } = props
  const styles = useStyleConfig('FeatureCard', { variant })
  return (
    <Box sx={styles} {...rest}>
      {children}
    </Box>
  )
}

FeatureCard.defaultProps = {
  variant: 'neutral',
}
