import { Button as ChakraButton } from '@chakra-ui/react'
import React, { HTMLAttributes, ReactNode } from 'react'

type ColorScheme = 'gray' | 'blue' | 'seagrass' | 'red'
type Size = 'xs' | 'sm' | 'md' | 'lg'
type Variant = 'ghost' | 'outline' | 'solid' | 'link'

export interface ButtonProps {
  children: ReactNode
  /**
   * Choose from 5 style variants. Default: 'solid'.
   */
  colorScheme: ColorScheme
  /**
   * Choose from 5 style variants. Default: 'solid'.
   */
  variant: Variant
  /**
   * Choose from 4 sizes. Default: 'md'.
   */
  size?: Size
  /**
   * Visually and functionally disable the button.
   */
  isDisabled?: boolean
  /**
   * Stretch the button across the full width of its parent.
   */
  isFullWidth?: boolean
  /**
   * Visually disables the button and shows a loading spinner.
   */
  isLoading?: boolean
}

export const Button = React.forwardRef<HTMLAttributes<any>, ButtonProps>(function Button({ children, ...props }) {
  return <ChakraButton {...props}>{children}</ChakraButton>
})

Button.defaultProps = {
  colorScheme: 'gray',
  size: 'md',
  variant: 'solid',
}
