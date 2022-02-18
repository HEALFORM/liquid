import { IconButton as ChakraIconButton } from '@chakra-ui/react'
import React, { HTMLAttributes } from 'react'

type ColorScheme = 'gray' | 'blue' | 'seagrass' | 'red'
type Size = 'xs' | 'sm' | 'md' | 'lg'
type Variant = 'ghost' | 'outline' | 'solid' | 'link'

export interface IconButtonProps {
  /**
   * A label that describes the button.
   */
  ariaLabel: string
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
   * If true, the button will be perfectly round. Else, it'll be slightly round.
   */
  isRound?: boolean
  /**
   * Visually disables the button and shows a loading spinner.
   */
  isLoading?: boolean
}

export const IconButton = React.forwardRef<HTMLAttributes<any>, IconButtonProps>(function IconButton({ children, ...props }) {
  return (
    <ChakraIconButton aria-label={props.ariaLabel} {...props}>
      {children}
    </ChakraIconButton>
  )
})

IconButton.defaultProps = {
  colorScheme: 'gray',
  size: 'md',
  variant: 'solid',
}
