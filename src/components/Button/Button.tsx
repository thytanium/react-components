import * as React from 'react';
import { SideProps } from '../../types';

export interface ButtonProps
  extends SideProps,
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {
  isDisabled?: boolean;
}

export default function Button({
  children,
  isDisabled = false,
  leftComponent: LeftComponent,
  leftNode,
  rightComponent: RightComponent,
  rightNode,
  ...props
}: ButtonProps): React.ReactElement {
  return (
    <button
      {...(props as React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      >)}
      disabled={isDisabled}
    >
      {LeftComponent ? <LeftComponent /> : leftNode}
      {children}
      {RightComponent ? <RightComponent /> : rightNode}
    </button>
  );
}
