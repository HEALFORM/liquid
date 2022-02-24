import React from 'react'
import { AiOutlineEllipsis } from 'react-icons/all'

import { Button } from '../Button'
import { ButtonGroup } from './ButtonGroup'

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  argTypes: {},
}

const Template = args => <ButtonGroup {...args} />

export const Base = Template.bind({})
Base.args = {
  children: (
    <>
      <Button>Termin vereinbaren</Button>
      <Button>
        <AiOutlineEllipsis />
      </Button>
    </>
  ),
}

export const Attached = args => (
  <>
    <ButtonGroup size="sm" isAttached variant="outline">
      <Button mr="-px" {...args}>
        Termin vereinbaren
      </Button>
      <Button {...args}>
        <AiOutlineEllipsis />
      </Button>
    </ButtonGroup>
  </>
)
