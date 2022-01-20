import React from 'react'

import { Hr } from './Hr'

export default {
  title: 'Components/Separator',
  component: Hr,
  parameters: {
    layout: 'fullscreen',
    controls: { hideNoControlsWarning: true },
  },
}

export const Base = () => <Hr />
