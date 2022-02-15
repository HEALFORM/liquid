import tokens from '@healform/design-tokens/dist/js/tokens'

export const Headline = {
  baseStyle: {
    fontFamily: tokens.fonts.fontStack.special.value,
    fontWeight: tokens.fonts.fontWeight.bold.value,
    letterSpacing: '-0.03em',
  },
  sizes: {
    one: {
      fontSize: tokens.typography.headline.one.fontSize.value,
      lineHeight: tokens.typography.headline.one.lineHeight.value,
    },
    two: {
      fontSize: tokens.typography.headline.two.fontSize.value,
      lineHeight: tokens.typography.headline.two.lineHeight.value,
    },
    three: {
      fontSize: tokens.typography.headline.three.fontSize.value,
      lineHeight: tokens.typography.headline.three.lineHeight.value,
    },
    four: {
      fontSize: tokens.typography.headline.four.fontSize.value,
      lineHeight: tokens.typography.headline.four.lineHeight.value,
    },
  },
}
