import {HTMLChakraProps, IconButton as ChakraIconButton} from '@chakra-ui/react'
import React from 'react'

type ColorScheme = 'gray' | 'blue' | 'seagrass' | 'red'
type Size = 'xs' | 'sm' | 'md' | 'lg'
type Variant = 'ghost' | 'outline' | 'solid' | 'link'

export interface IconButtonProps {
  /**
   * The icon to be used in the button.
   * @type React.ReactElement
   */
  icon?: React.ReactElement;
  /**
   * A11y: A label that describes the button
   */
  "aria-label": string;
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
   * If `true`, the button will be perfectly round. Else, it'll be slightly round
   */
  isRound?: boolean
  /**
   * Visually disables the button and shows a loading spinner.
   */
  isLoading?: boolean
}

export const IconButton = React.forwardRef<HTMLChakraProps<any>, IconButtonProps>(function IconButton({ children, ...props }) {
  return (
    <ChakraIconButton aria-label={props["aria-label"]} {...props}>
      {children}
    </ChakraIconButton>
  )
})

IconButton.defaultProps = {
  colorScheme: 'gray',
  size: 'md',
  variant: 'solid',
}
