import { create } from '@storybook/theming';
import theme from '@healform/design-tokens/dist/js/theme';
import logo from './static/logo.svg';

export default create({
  base: 'light',
  brandTitle: 'HEALFORM UI Library',
  brandUrl: 'https://healform.de',
  brandImage: logo,
  fontBase: theme.fonts.fontStack.default.value,
  colorSecondary: theme.colors.primary.value,
  appBg: theme.colors.white.value,
});
