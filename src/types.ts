import { ElementType, ReactNode } from 'react';

export type SideProps = {
  leftComponent?: ElementType;
  leftNode?: ReactNode;
  rightComponent?: ElementType;
  rightNode?: ReactNode;
};
