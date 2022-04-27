import { extendTheme, useColorModeValue } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import tokens from '@healform/design-tokens/dist/js/tokens'

import { Avatar } from '../components/Avatar/Avatar.theme'
import { Badge } from '../components/Badge/Badge.theme'
import { Body } from '../components/Body/Body.theme'
import { BodyLarge } from '../components/BodyLarge/BodyLarge.theme'
import { Button } from '../components/Button/Button.theme'
import { Divider } from '../components/Divider/Divider.theme'
import { FeatureCard } from '../components/FeatureCard/FeatureCard.theme'
import { FooterHeadline } from '../components/FooterHeadline/FooterHeadline.theme'
import { Headline } from '../components/Headline/Headline.theme'
import { IconButton } from '../components/IconButton/IconButton.theme'
import { Link } from '../components/Link/Link.theme'
import { SubHeadline } from '../components/SubHeadline/SubHeadline.theme'
import { Title } from '../components/Title/Title.theme'
import * as colors from './colors.theme'
import * as radii from './radii.theme'
import * as space from './space.theme'

const breakpoints = createBreakpoints({
  sm: tokens.breakpoints.sm.value + 'px',
  md: tokens.breakpoints.md.value + 'px',
  lg: tokens.breakpoints.lg.value + 'px',
  xl: tokens.breakpoints.xl.value + 'px',
  '2xl': tokens.breakpoints.xxl.value + 'px',
})

const fonts = {
  heading: tokens.fonts.fontStack.heading.value,
  body: tokens.fonts.fontStack.body.value,
  mono: tokens.fonts.fontStack.mono.value,
}

export default extendTheme({
  styles: {
    global: () => ({
      body: {
        color: useColorModeValue('black', 'white'),
      },
    }),
  },
  ...colors,
  ...radii,
  ...space,
  breakpoints,
  fonts,
  components: {
    Avatar,
    Badge,
    Body,
    BodyLarge,
    Button,
    Divider,
    FeatureCard,
    FooterHeadline,
    Headline,
    IconButton,
    Link,
    SubHeadline,
    Title,
  },
  config: {
    cssVarPrefix: 'healform',
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
})
