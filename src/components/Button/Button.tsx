import * as React from 'react';
import { dataAttr } from '../../util';
import { Appearance, BeforeAfterProps, Intent } from '../../types';

export interface ButtonProps
  extends BeforeAfterProps,
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {
  appearance?: Appearance;
  intent?: Intent;
  isLoading?: boolean;
  loadingComponent?: React.ElementType;
}

export default function Button({
  afterComponent: AfterComponent,
  afterNode,
  appearance = 'default',
  beforeComponent: BeforeComponent,
  beforeNode,
  children,
  intent = 'none',
  isLoading = false,
  loadingComponent: LoadingComponent,
  ...props
}: ButtonProps): React.ReactElement {
  if (isLoading && LoadingComponent) {
    BeforeComponent = LoadingComponent;
  }

  const hasSideElements =
    BeforeComponent !== undefined ||
    AfterComponent !== undefined ||
    beforeNode !== undefined ||
    afterNode !== undefined;

  const dataAttributes = {
    'data-trc-button': '',
    'data-trc-button--minimal': dataAttr(appearance === 'minimal'),
    'data-trc-button--primary': dataAttr(intent === 'primary'),
    'data-trc-button--success': dataAttr(intent === 'success'),
    'data-trc-button--warning': dataAttr(intent === 'warning'),
    'data-trc-button--danger': dataAttr(intent === 'danger'),
    'data-trc-button--has-children': dataAttr(hasSideElements),
  };

  return (
    <button
      {...(props as React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      >)}
      {...dataAttributes}
      disabled={isLoading || props.disabled}
    >
      {BeforeComponent ? <BeforeComponent /> : beforeNode}
      {children}
      {AfterComponent ? <AfterComponent /> : afterNode}
    </button>
  );
}
