import React from 'react';
import { Anchor, AnchorProps } from './Anchor'

export default {
  title: 'Typography/Anchor',
  component: Anchor,
  argTypes: {
    href: { control: 'text' },
    children: { control: 'text' },
    as: { control: 'text' },
  },
}

export const AsLink = (args: AnchorProps) => <Anchor {...args} />

AsLink.args = {
  href: 'https://liquid.healform.de',
  children: "View SumUp's OSS projects",
}

export const AsButton = (args: AnchorProps) => <Anchor {...args} />

AsButton.args = {
  onClick: () => alert('Hello'),
  children: 'Say hello',
}
