import { create } from '@storybook/theming';
import theme from '@healform/design-tokens/dist/js/theme';

export default create({
  base: 'light',
  brandTitle: 'HEALFORM UI Library',
  brandUrl: 'https://healform.de',
  brandImage: 'healform_logo.svg',
  fontBase: theme.fonts.fontStack.default.value,
  colorPrimary: theme.colors.primary.value,
  colorSecondary: theme.colors.secondary.value,
  appBg: theme.colors.white.value,
});
