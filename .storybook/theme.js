import { create } from '@storybook/theming';
import tokens from '@healform/design-tokens/dist/js/tokens';
import logo from './static/logo.svg';

export default create({
  base: 'light',
  brandTitle: 'HEALFORM UI Library',
  brandUrl: 'https://healform.de',
  brandImage: logo,
  fontBase: tokens.fonts.fontStack.default.value,
  colorSecondary: tokens.colors.primary.value,
  appBg: tokens.colors.white.value,
});
