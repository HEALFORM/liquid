import tokens from '@healform/design-tokens/dist/js/tokens'

export const BodyLarge = {
  baseStyle: {
    fontWeight: tokens.fonts.fontWeight.regular.value,
    fontSize: tokens.typography.bodyLarge.fontSize.value,
    lineHeight: tokens.typography.bodyLarge.lineHeight.value,
    marginBottom: tokens.spacings.sm.value,
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
