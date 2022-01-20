import { Meta, Story } from '@storybook/react'
import React from 'react'

import Avatar, { AvatarProps } from './Avatar'

const meta: Meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<AvatarProps> = args => <Avatar {...args} />

export const Default = Template.bind({})

Default.args = {
  name: 'Domenik Toefflinger',
}

export const WithPicture = Template.bind({})

WithPicture.args = {
  name: 'Domenik Toefflinger',
  src: 'https://www.gravatar.com/avatar/c7bf30cfa851f7fbe1adf852da902457?s=400',
}

export const Squared = Template.bind({})

Squared.args = {
  name: 'Domenik Toefflinger',
  src: 'https://www.gravatar.com/avatar/c7bf30cfa851f7fbe1adf852da902457?s=400',
  squared: true,
}
