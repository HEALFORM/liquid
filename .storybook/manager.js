import { addons } from '@storybook/addons';
import healform from './theme';

addons.setConfig({
  theme: healform,
  isFullscreen: false,
  showPanel: true,
  panelPosition: 'bottom',
  isToolshown: true,
});
