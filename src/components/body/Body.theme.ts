import tokens from '@healform/design-tokens/dist/js/tokens'

export const Body = {
  baseStyle: {
    fontWeight: tokens.fonts.fontWeight.regular.value,
    marginBottom: tokens.spacings.sm.value,
  },
  sizes: {
    one: {
      fontSize: tokens.typography.body.one.fontSize.value,
      lineHeight: tokens.typography.body.one.lineHeight.value,
    },
    two: {
      fontSize: tokens.typography.body.two.fontSize.value,
      lineHeight: tokens.typography.body.two.lineHeight.value,
    },
  },
  variants: {
    highlight: {
      fontWeight: tokens.fonts.fontWeight.bold.value,
    },
    quote: {
      fontStyle: 'italic',
      paddingLeft: tokens.spacings.lg.value,
      borderLeft: '2px',
      borderStyle: 'solid',
      borderColor: tokens.colors.primary.value,
    },
    success: {
      color: tokens.colors.success.value,
    },
    error: {
      color: tokens.colors.danger.value,
    },
    subtle: {
      color: tokens.colors.gray['500'].value,
    },
  },
}
