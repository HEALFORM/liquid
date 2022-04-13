export const BodyLarge = {
  baseStyle: {
    fontWeight: 'normal',
    fontSize: 'xl',
    lineHeight: 'base',
  },
  variants: {
    highlight: {
      fontWeight: 'bold',
    },
    quote: {
      fontStyle: 'italic',
      paddingLeft: '5',
      borderLeft: '2px',
      borderStyle: 'solid',
      borderColor: 'primary.500',
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
