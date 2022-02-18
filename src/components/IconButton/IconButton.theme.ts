import tokens from '@healform/design-tokens/dist/js/tokens'

export const IconButton = {
  baseStyle: {
    borderRadius: tokens.radius.sm.value,
    fontFamily: tokens.fonts.fontStack.special.value,
    fontWeight: tokens.fonts.fontWeight.medium.value,
    _focus: {
      boxShadow: 'none',
    },
  },
}
