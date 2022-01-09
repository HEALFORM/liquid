/** @jsxRuntime classic */

/** @jsx jsx */
import { jsx, ThemeProvider } from '@emotion/react'
import merge from 'deepmerge'
import { FC, useMemo } from 'react'
import { Provider } from 'reakit/Provider'
import invariant from 'tiny-invariant'

import ColorModeProvider from './components/color-mode-provider/ColorModeProvider'
import type { AppColorScheme } from './components/color-mode-provider/context'
import { ToastsContainer } from './components/toast/ToastContainer'
import { useColorMode } from './hooks'
import { CSSReset } from './styles/CSSReset'
import { GlobalFonts } from './styles/GlobalFonts'
import GlobalStyles from './styles/GlobalStyles'
import { LiquidTheme, liquidTheme } from './styles/theme'

interface Props {
  readonly resetCSS?: boolean
  readonly defaultColorMode?: AppColorScheme
  readonly theme?: LiquidTheme
}

type InnerProps = Required<Pick<Props, 'resetCSS' | 'theme'>>

const LiquidProviderInner: FC<InnerProps> = ({ resetCSS = true, theme = liquidTheme, children }) => {
  const { mode } = useColorMode()
  const appTheme = useMemo(() => {
    return merge.all([
      theme,
      {
        currentMode: mode,
        colors: theme.modes[mode],
      },
    ])
  }, [theme, mode])
  return (
    <ThemeProvider theme={appTheme}>
      {resetCSS && <CSSReset />}
      <GlobalStyles />
      <GlobalFonts />
      <ToastsContainer />
      {children}
    </ThemeProvider>
  )
}

export const LiquidProvider: FC<Props> = ({
  resetCSS = true,
  theme = liquidTheme,
  defaultColorMode = 'light',
  children,
}) => {
  invariant(
    ['light', 'dark'].includes(defaultColorMode),
    'The `defaultColorMode` must either be "light" or "dark", but you provided "' + defaultColorMode + '"',
  )
  return (
    <Provider>
      <ColorModeProvider defaultColorMode={defaultColorMode}>
        <LiquidProviderInner resetCSS={resetCSS} theme={theme}>
          {children}
        </LiquidProviderInner>
      </ColorModeProvider>
    </Provider>
  )
}

export default LiquidProvider
