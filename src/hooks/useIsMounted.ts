import { RefObject, useEffect, useRef } from 'react';

export default function useIsMounted(): RefObject<boolean> {
  const isMounted = useRef<boolean>(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
}
