import * as React from 'react';
import useClickOutside from '../../hooks/useClickOutside';

interface ClickOutsideParams<T> {
  ref: React.RefObject<T>;
}

interface ClickOutsideProps<T extends HTMLElement> {
  children: (params: ClickOutsideParams<T>) => React.ReactElement;
  onClick: () => void;
}

export default function ClickOutside<T extends HTMLElement>({
  children,
  onClick,
}: ClickOutsideProps<T>): React.ReactElement {
  const ref = useClickOutside<T>(onClick);
  return children({ ref });
}
