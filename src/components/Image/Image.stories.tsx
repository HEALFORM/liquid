import React from 'react'

import { Image } from './Image'

export default {
  title: 'Components/Image',
  component: Image,
}

const Template = args => <Image {...args} />

export const Base = Template.bind({})
Base.args = { src: 'https://i.imgur.com/gITOD4N.png', alt: 'HEALFORM', width: 200 }
