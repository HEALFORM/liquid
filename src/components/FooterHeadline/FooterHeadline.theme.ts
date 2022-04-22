export const FooterHeadline = {
  baseStyle: ({ colorMode }) => ({
    color: colorMode === 'dark' ? 'gray.400' : 'gray.500',
    fontSize: 'md',
    textTransform: 'uppercase',
    letterSpacing: 'widest',
    fontWeight: 'semibold',
    fontFamily: 'body',
  }),
}
