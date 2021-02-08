import * as React from 'react';
import * as classNames from 'classnames';
import { Appearance, BeforeAfterProps, Intent } from '../../types';

const appearanceClassMap: Record<Appearance, string> = {
  default: '',
  minimal: 'btn--minimal',
};

const intentClassMap: Record<Intent, string> = {
  none: '',
  primary: 'btn--primary',
  success: 'btn--success',
  warning: 'btn--warning',
  danger: 'btn--danger',
};

export interface ButtonProps
  extends BeforeAfterProps,
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {
  appearance?: Appearance;
  intent?: Intent;
}

export default function Button({
  afterComponent: AfterComponent,
  afterNode,
  beforeComponent: BeforeComponent,
  beforeNode,
  children,
  appearance = 'default',
  intent = 'none',
  ...props
}: ButtonProps): React.ReactElement {
  return (
    <button
      {...(props as React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      >)}
      className={classNames(
        'btn',
        appearanceClassMap[appearance],
        intentClassMap[intent],
      )}
    >
      {BeforeComponent ? <BeforeComponent /> : beforeNode}
      {children}
      {AfterComponent ? <AfterComponent /> : afterNode}
    </button>
  );
}
