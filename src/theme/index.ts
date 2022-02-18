import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

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

import tokens from '@healform/design-tokens/dist/js/tokens'

const breakpoints = createBreakpoints({
  base: tokens.breakpoints.xs.value.toString(),
  sm: tokens.breakpoints.sm.value + 'px',
  md: tokens.breakpoints.md.value + 'px',
  lg: tokens.breakpoints.lg.value + 'px',
  xl: tokens.breakpoints.xl.value + 'px',
  '2xl': tokens.breakpoints.xxl.value + 'px',
})

export default extendTheme({
  ...colors,
  ...radii,
  ...space,
  breakpoints,
  components: {
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
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
})
