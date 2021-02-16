import * as React from 'react';
import { IconProps } from '../../types';

export default function Icon({
  children,
  className,
  size = 16,
}: IconProps & {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <svg
      className={className}
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}
