import { action } from '@storybook/addon-actions';

import { ButtonGroup, ButtonGroupProps } from './ButtonGroup';
import React from 'react';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
};

export const Base = (args: ButtonGroupProps): JSX.Element => (
  <ButtonGroup {...args} />
);

Base.args = {
  actions: {
    primary: {
      children: 'Look again',
      onClick: action('Still empty'),
    },
    secondary: {
      children: 'Go elsewhere',
      href: 'https://healform.com',
    },
  },
};
