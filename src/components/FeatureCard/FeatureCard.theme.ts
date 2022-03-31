import { mode } from '@chakra-ui/theme-tools'
import tokens from '@healform/design-tokens/dist/js/tokens'
import { darken } from 'polished'

const imgUrl = 'https://static.healform.de/__assets/bg-1.svg'

export const FeatureCard = {
  baseStyle: {
    borderRadius: tokens.radius.xl.value,
    display: 'inline-block',
    padding: `${tokens.spacings.lg.value} ${tokens.spacings.xl.value} ${tokens.spacings.lg.value} ${tokens.spacings.lg.value}`,
    fontSize: '12px',
    lineHeight: '20px',
    fontWeight: tokens.fonts.fontWeight.semibold.value,
    transition: tokens.animations.slow.value,
    width: '100%',
  },
  variants: {
    neutral: props => ({
      background: mode(
        `url(${imgUrl}) right bottom no-repeat, ${darken(0.03, tokens.colors.gray['50'].value)}`,
        `url(${imgUrl}) right bottom no-repeat, ${darken(0.03, tokens.colors.gray['900'].value)}`,
      )(props),
    }),
    gradientPrimary: {
      background: `url(${imgUrl}) right bottom no-repeat, linear-gradient(80.45deg, ${tokens.colors.primary['500'].value} 0%, ${tokens.colors.primary['700'].value} 99.59%)`,
      color: tokens.colors.white.value,
    },
    gradientSecondary: {
      background: `url(${imgUrl}) right bottom no-repeat, linear-gradient(80.45deg, ${tokens.colors.secondary['500'].value} 0%, ${tokens.colors.secondary['700'].value} 99.59%)`,
      color: tokens.colors.white.value,
    },
    gradientMulti: {
      background: `url(${imgUrl}) right bottom no-repeat, linear-gradient(80.45deg, ${tokens.colors.primary['500'].value} 0%, ${tokens.colors.secondary['500'].value} 99.59%)`,
      color: tokens.colors.white.value,
    },
  },
}
