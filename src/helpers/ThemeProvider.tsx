import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import PropTypes from 'prop-types'
import React from 'react'

import theme from '../theme'

function EmotionCacheProvider({ children }) {
  const cache = createCache({ key: 'healform' })
  return <CacheProvider value={cache}>{children}</CacheProvider>
}

export const ThemeProvider = ({ children, ...props }) => {
  return (
    <EmotionCacheProvider>
      <ChakraProvider theme={theme} {...props}>
        <CSSReset />
        {children}
      </ChakraProvider>
    </EmotionCacheProvider>
  )
}

ThemeProvider.propTypes = {
  nonce: PropTypes.string,
  children: PropTypes.element,
}
