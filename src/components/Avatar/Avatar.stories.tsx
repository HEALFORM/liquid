import React from 'react'

import { Avatar } from './Avatar'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      name: 'Size',
      type: {name: 'string', required: true},
      description: 'Different sizes of text.',
      table: {
        type: {summary: '2xs|xs|sm|md|lg|xl|2xl'},
      },
      control: {
        type: 'select',
        options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      },
    },
  },
  resetArgs: true
}

export const Base = args => (
  <Avatar {...args} name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
)
