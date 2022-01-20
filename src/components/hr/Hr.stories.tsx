import {Hr} from './Hr';
import React from 'react';

export default {
  title: 'Components/hr',
  component: Hr,
  parameters: {
    layout: 'fullscreen',
    controls: { hideNoControlsWarning: true },
  },
};

export const Base = () => <Hr />;
