import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Avatar } from '../avatar'
import Text from '../typography/Text'
import type { ListProps } from './List'
import List from './List'

const meta: Meta = {
  title: 'Components/List',
  component: List,
  argTypes: {
    direction: {
      control: {
        type: 'select',
        options: ['row', 'column', 'row-reverse', 'column-reverse'],
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<ListProps> = args => (
  <List {...args} gap={2}>
    <List.Item gap={2}>
      <Avatar
        name="Liquid"
        src="https://jeu-bayrou.com/wp-content/uploads/2020/10/Meilleur-Liquid-Build-a-Genshin-Impact.jpg"
        size="xs"
      />
      <Text>Hello Liquid</Text>
    </List.Item>
    <List.Item gap={2}>
      <Avatar
        name="Liquid"
        src="https://jeu-bayrou.com/wp-content/uploads/2020/10/Meilleur-Liquid-Build-a-Genshin-Impact.jpg"
        size="xs"
      />
      <Text>Hello Liquid</Text>
    </List.Item>
  </List>
)

export const Default = Template.bind({})
