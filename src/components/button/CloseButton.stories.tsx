import React from 'react'

import { CloseButton } from './CloseButton'

export default {
  title: 'Components/Button/CloseButton',
  parameters: {
    component: CloseButton,
  },
}

export const Base = () => <CloseButton />

Base.args = {
  label: 'Close',
}
