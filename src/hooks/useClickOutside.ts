import { RefObject, useCallback, useEffect, useRef } from 'react';

export default function useClickOutside<T extends HTMLElement>(
  onClick: () => void,
): RefObject<T> {
  const ref = useRef<T>(null);

  const handleClick = useCallback(
    (event: Event): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClick();
      }
    },
    [ref, onClick],
  );

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return (): void => {
      window.removeEventListener('click', handleClick);
    };
  }, [handleClick]);

  return ref;
}
