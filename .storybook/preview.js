import { themes } from '@storybook/theming'
import { useDarkMode } from 'storybook-dark-mode'
import theme from '@healform/design-tokens/dist/js/theme'
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
      brandTitle: 'Liquid UI',
      brandUrl: 'https://liquid.healform.de/',
      brandImage: 'https://i.imgur.com/wrLJ6Wx.png',
      fontBase: theme.fonts.fontStack.default.value,
      colorPrimary: theme.colors.secondary.value,
      colorSecondary: theme.colors.primary.value,
      appBg: theme.colors.white.value,
    },
  },
  options: {
    storySort: {
      order: [
        'Introduction', [
          'Welcome'
        ],
        'Features', [
          'Colors',
          'Icons'
        ],
        'Typography', [
          'Typography',
          'Title',
          'Headline',
          'FooterHeadline',
          'SubHeadline',
          'Body',
          'BodyLarge',
          'Anchor',
          'List'
        ],
        'Layout', [
          'Grid',
          'Flex',
          'VStack',
          'HStack',
        ],
        'Components', [
          'Avatar',
          'AvatarGroup',
          'Badge',
          'Button',
          'ButtonGroup',
          'Card',
          'FeatureCard',
          'Hr',
          'Section',
        ],
      ],
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
