import React from 'react';
import PropTypes from 'prop-types';

import { CastleIcon } from './CastleIcon';
import { HerculesIcon } from './HerculesIcon';

import { colorOptions } from '../../theme/colors.theme';

export const iconList = [
  'castle',
  'hercules',
];

// eslint-disable-next-line no-unused-vars
export const Icon = ({ name, isIndeterminate, isChecked, ...props }) => {
  switch (name) {
    case 'castle':
      return <CastleIcon {...props} />;
    case 'hercules':
      return <HerculesIcon {...props} />;
    default:
      return <HerculesIcon {...props} />;
  }
};

Icon.propTypes = {
  color: PropTypes.oneOf(colorOptions),
  name: PropTypes.oneOf(iconList),
};
