import { action } from '@storybook/addon-actions'
import React from 'react'

import { ButtonGroup, ButtonGroupProps } from './ButtonGroup'

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
}

export const Base = (args: ButtonGroupProps): JSX.Element => <ButtonGroup {...args} />

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
}
