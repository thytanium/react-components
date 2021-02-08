import { ElementType, ReactNode } from 'react';

export type Appearance = 'default' | 'minimal';

export type BeforeAfterProps = {
  afterComponent?: ElementType;
  afterNode?: ReactNode;
  beforeComponent?: ElementType;
  beforeNode?: ReactNode;
};

export type Intent = 'none' | 'primary' | 'success' | 'warning' | 'danger';
