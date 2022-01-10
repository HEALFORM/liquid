import { themes } from '@storybook/theming'
import { useDarkMode } from 'storybook-dark-mode'

import LiquidProvider from '../src/LiquidProvider'
import { liquidTheme } from '../src/styles/theme'

export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  darkMode: {
    dark: {
      ...themes.dark,
      appBg: liquidTheme.modes.dark.menu.background,
      appContentBg: liquidTheme.modes.dark.background,
      barBg: liquidTheme.modes.dark.background,
    },
    light: {
      ...themes.normal,
    },
  },
}

const ThemeWrapper = ({ children }) => {
  const isDarkMode = useDarkMode()
  return (
    <LiquidProvider key={isDarkMode ? 'dark' : 'light'} defaultColorMode={isDarkMode ? 'dark' : 'light'}>
      {children}
    </LiquidProvider>
  )
}

export const decorators = [
  Story => (
    <ThemeWrapper>
      <Story />
    </ThemeWrapper>
  ),
]