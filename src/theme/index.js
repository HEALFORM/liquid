import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

import { Divider } from '../components/divider/divider.theme'
import * as colors from './colors'

const breakpoints = createBreakpoints({
  base: '0',
  sm: '375px',
  md: '768px',
  lg: '1024px',
  xl: '1100px',
  '2xl': '1400px',
})

export default extendTheme({
  ...colors,
  breakpoints,
  components: {
    Divider,
  },
})
