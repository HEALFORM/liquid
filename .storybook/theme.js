import { create } from '@storybook/theming';
import tokens from '@healform/design-tokens/dist/js/tokens';
import logo from './static/logoLightTheme.svg';

export default create({
  base: 'light',
  brandTitle: 'HEALFORM UI Library',
  brandUrl: 'https://healform.de',
  brandImage: logo,
  fontBase: tokens.fonts.fontStack.body.value,
  colorSecondary: tokens.colors.primary['500'].value,
  appBg: tokens.colors.white.value,
});
