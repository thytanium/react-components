import * as React from 'react';
import * as classNames from 'classnames';
import { Appearance, BeforeAfterProps, Intent } from '../../types';
import LoadingIcon from '../Icons/LoadingIcon';

const appearanceClassMap: Record<Appearance, string> = {
  default: 'btn--default',
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
  isLoading?: boolean;
  intent?: Intent;
  loadingComponent?: React.ElementType;
}

export default function Button({
  afterComponent: AfterComponent,
  afterNode,
  beforeComponent: BeforeComponent,
  beforeNode,
  children,
  appearance = 'default',
  isLoading = false,
  intent = 'none',
  loadingComponent: LoadingComponent,
  ...props
}: ButtonProps): React.ReactElement {
  if (isLoading) {
    BeforeComponent = LoadingComponent || LoadingIcon;
  }

  return (
    <button
      {...(props as React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      >)}
      className={classNames(
        'btn',
        {
          'btn--has-icon':
            BeforeComponent !== undefined ||
            beforeNode !== undefined ||
            AfterComponent !== undefined ||
            afterNode !== undefined,
        },
        appearanceClassMap[appearance],
        intentClassMap[intent],
      )}
      disabled={isLoading || props.disabled}
    >
      {BeforeComponent ? <BeforeComponent /> : beforeNode}
      {children}
      {AfterComponent ? <AfterComponent /> : afterNode}
    </button>
  );
}
