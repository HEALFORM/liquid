import React from 'react'

import { Divider } from './Divider'

export default {
  title: 'Components/Divider',
  component: Divider,
}

const Template = args => <Divider {...args} />

export const Base = Template.bind({})
Base.args = {}

export const CustomMargin = Template.bind({})
CustomMargin.args = { my: 1 }

export const GrayBackground = Template.bind({})
GrayBackground.args = {}
GrayBackground.parameters = {
  backgrounds: { default: 'dark' },
}
