/* eslint-disable react/jsx-sort-props */
import * as React from 'react';
import { IconProps } from '../../types';
import Icon from './Icon';

export default function CloseIcon({
  size = 16,
}: IconProps): React.ReactElement {
  return (
    <Icon className="feather feather-x" size={size}>
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </Icon>
  );
}
