import { Heading as ChakraHeading, HeadingProps, useStyleConfig } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

type Size = 'one' | 'two' | 'three' | 'four'

export interface TitleProps extends HeadingProps {
  children: ReactNode
  /**
   * A Liquid UI title size. Defaults to `one`.
   */
  size?: Size | string
  /**
   * Removes the default bottom margin from the title.
   */
  noMargin?: boolean
  /**
   * The HTML heading element to render.
   * Headings should be nested sequentially without skipping any levels.
   * Learn more at https://www.w3.org/WAI/tutorials/page-structure/headings/.
   */
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Title = ({ children, ...props }: TitleProps) => {
  const { size, noMargin, ...rest } = props
  const styles = useStyleConfig('Title', { size })
  return (
    <ChakraHeading sx={styles} {...rest} mb={noMargin ? '0' : '3'} as={props.as}>
      {children}
    </ChakraHeading>
  )
}

Title.defaultProps = {
  size: 'one',
  as: 'h2',
}
