import React from 'react';
import { SubHeadline, SubHeadlineProps } from './SubHeadline';

export default {
  title: 'Typography/SubHeadline',
  component: SubHeadline,
};

export const Base = (args: SubHeadlineProps) => (
  <SubHeadline {...args} noMargin>
    This is a subheadline
  </SubHeadline>
);
