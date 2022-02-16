import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

import { Body } from '../components/Body/Body.theme'
import { BodyLarge } from '../components/BodyLarge/BodyLarge.theme'
import { Divider } from '../components/Divider/Divider.theme'
import { Headline } from '../components/Headline/Headline.theme'
import { Title } from '../components/Title/Title.theme'
import * as colors from './colors.theme'
import * as radii from './radii.theme'
import * as space from './space.theme'

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
  ...radii,
  ...space,
  breakpoints,
  components: {
    Body,
    BodyLarge,
    Divider,
    Headline,
    Title,
  },
})
