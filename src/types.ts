import { ElementType, ReactNode } from 'react';

export type Appearance = 'default' | 'minimal';

export type BeforeAfterProps = {
  afterComponent?: ElementType;
  afterNode?: ReactNode;
  beforeComponent?: ElementType;
  beforeNode?: ReactNode;
};

export type IconProps = {
  className?: string;
  size?: number;
};

export type Intent = 'none' | 'primary' | 'success' | 'warning' | 'danger';

export interface OverlayChildrenFunctionParams {
  status: boolean;
  close: () => void;
}
