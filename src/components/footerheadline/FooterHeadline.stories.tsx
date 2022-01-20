import React from 'react'

import { FooterHeadline, FooterHeadlineProps } from './FooterHeadline'

export default {
  title: 'Typography/FooterHeadline',
  component: FooterHeadline,
}

export const Base = (args: FooterHeadlineProps) => (
  <FooterHeadline {...args} noMargin>
    This is a footer headline
  </FooterHeadline>
)
