import tokens from '@healform/design-tokens/dist/js/tokens'

export const FooterHeadline = {
  baseStyle: {
    fontSize: tokens.typography.body.one.fontSize.value,
    color: tokens.colors.gray['500'].value,
    fontFamily: tokens.fonts.fontStack.special.value,
    textTransform: 'uppercase',
    letterSpacing: '0.15rem',
    fontWeight: tokens.fonts.fontWeight.semibold.value,
  },
}
