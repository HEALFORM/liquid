export const Body = {
  baseStyle: {
    fontWeight: 'normal',
    fontSize: 'sm',
    lineHeight: 'base',
    letterSpacing: 'tight',
  },
  sizes: {
    one: {
      fontSize: 'md',
    },
    two: {
      fontSize: 'sm',
    },
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
