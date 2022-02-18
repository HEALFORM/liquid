import tokens from '@healform/design-tokens/dist/js/tokens'

export const BodyLarge = {
  baseStyle: {
    fontWeight: tokens.fonts.fontWeight.regular.value,
    fontSize: tokens.typography.bodyLarge.fontSize.value,
    lineHeight: tokens.typography.bodyLarge.lineHeight.value,
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
    success: ({ colorMode }) => ({
      color: colorMode === 'dark' ? 'green.300' : 'green.500',
    }),
    error: ({ colorMode }) => ({
      color: colorMode === 'dark' ? 'red.300' : 'red.500',
    }),
    subtle: ({ colorMode }) => ({
      color: colorMode === 'dark' ? 'gray.500' : 'gray.400',
    }),
  },
}
