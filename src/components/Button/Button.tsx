import { Button as ChakraButton } from '@chakra-ui/react'
import React, { FC, HTMLAttributes, SVGProps } from 'react'

type ColorScheme = 'gray' | 'blue' | 'seagrass' | 'red'
type Size = 'xs' | 'sm' | 'md' | 'lg'
type Variant = 'ghost' | 'outline' | 'solid' | 'link'

export interface ButtonProps {
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
  /**
   * Display an icon in addition to the text to help to identify the action.
   */
  icon?: FC<SVGProps<SVGSVGElement>>
}

export const Button = React.forwardRef<HTMLAttributes<any>, ButtonProps>(function Button({ children, ...props }) {
  return (
    <ChakraButton my="mg0" {...props}>
      {children}
    </ChakraButton>
  )
})

Button.defaultProps = {
  colorScheme: 'gray',
  size: 'md',
  variant: 'solid',
}
