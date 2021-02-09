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
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}
