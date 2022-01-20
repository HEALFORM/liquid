import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Avatar } from '../avatar'
import AvatarGroup, { AvatarGroupProps } from './AvatarGroup'

const meta: Meta = {
  title: 'Components/AvatarGroup',
  component: AvatarGroup,
  argTypes: {
    direction: {
      control: {
        type: 'select',
        options: ['row', 'column'],
      },
    },
    max: {
      control: { type: 'range', min: 1, max: 8, step: 1 },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<AvatarGroupProps> = args => (
  <AvatarGroup {...args}>
    <Avatar name="Christian Blackwell" src="https://www.gravatar.com/avatar/c7bf30cfa851f7fbe1adf852da902457?s=400" />
    <Avatar name="Adriana Lang" src="https://www.gravatar.com/avatar/c7bf30cfa851f7fbe1adf852da902457?s=400" />
    <Avatar name="Yolanda Evans" />
    <Avatar name="Horton Griffin" src="https://www.gravatar.com/avatar/c7bf30cfa851f7fbe1adf852da902457?s=400" />
    <Avatar name="Chrystal Buck" />
    <Avatar name="Lindsay Blanchard" bg="yellow.700" />
    <Avatar name="Parks Hawkins" />
    <Avatar name="Leslie Parsons" />
  </AvatarGroup>
)

export const Default = Template.bind({})

Default.args = {
  max: 5,
}
