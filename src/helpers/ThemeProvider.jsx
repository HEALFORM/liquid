import { ChakraProvider } from '@chakra-ui/react'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import PropTypes from 'prop-types'
import React from 'react'

import CSSReset from '../styles/CSSReset'
import GlobalFonts from '../styles/GlobalFonts'
import theme from '../theme'

function EmotionCacheProvider({ nonce, children }) {
  const cache = createCache({ key: 'csp', nonce })
  return <CacheProvider value={cache}>{children}</CacheProvider>
}

export const ThemeProvider = ({ children, nonce, ...props }) => {
  return (
    <EmotionCacheProvider nonce={nonce}>
      <ChakraProvider theme={theme} {...props}>
        <CSSReset />
        <GlobalFonts />
        {children}
      </ChakraProvider>
    </EmotionCacheProvider>
  )
}

ThemeProvider.propTypes = {
  nonce: PropTypes.string,
  children: PropTypes.element,
}
