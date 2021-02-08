import * as React from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';

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
  const ref = useOutsideClick<T>(onClick);
  return children({ ref });
}
