import tokens from '@healform/design-tokens/dist/js/tokens'

export const Link = {
  baseStyle: {
    display: 'inline',
    textDecoration: 'none',
    outline: 'transparent',
    transition: 'all 0.1s ease-in-out',
    lineHeight: 'base',
    _focus: {
      outlineOffset: '0.25em',
      boxShadow: 'none',
      border: 'none',
      bg: 'none',
      _hover: {
        boxShadow: 'none',
      },
    },
    _hover: {
      textDecoration: 'underline',
    },
    _active: {
      borderRadius: 'none',
      outline: 'none',
    },
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
    primary: {
      color: 'blue.500',
      textDecoration: 'none',
      boxShadow: `${tokens.colors.blue['500'].value} 0 1px 0px 0px`,
      _focus: {
        color: 'blue.700',
        outline: `${tokens.colors.blue['500'].value} auto 1px`,
      },
      _hover: {
        color: 'blue.700',
        bg: 'blue.100',
        textDecoration: 'none',
        boxShadow: `${tokens.colors.blue['500'].value} 0 2px 0px 0px`,
        _active: {
          color: 'blue.900',
          bg: 'blue.300',
          boxShadow: `${tokens.colors.blue['700'].value} 0 2px 0px 0px`,
        },
      },
    },
    reverse: {
      color: 'gray.50',
      boxShadow: `${tokens.colors.gray['400'].value} 0 1px 0px 0px`,
      textDecoration: 'none',
      _focus: {
        color: 'gray.500',
        outline: `${tokens.colors.gray['200'].value} auto 1px`,
      },
      _hover: {
        color: 'gray.50',
        bg: 'gray.600',
        textDecoration: 'none',
        boxShadow: `${tokens.colors.gray['50'].value} 0 2px 0px 0px`,
        _active: {
          color: 'gray.900',
          bg: 'gray.300',
          boxShadow: `${tokens.colors.gray['500'].value} 0 2px 0px 0px`,
        },
      },
    },
    inherit: {
      color: 'inherit',
      _hover: {
        textDecoration: 'underline',
      },
    },
  },
}
