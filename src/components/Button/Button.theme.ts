import tokens from '@healform/design-tokens/dist/js/tokens'

export const Button = {
  baseStyle: {
    borderRadius: tokens.radius.xl.value,
    fontFamily: tokens.fonts.fontStack.special.value,
    fontWeight: tokens.fonts.fontWeight.medium.value,
    _focus: {
      boxShadow: 'none',
    },
  },
}
