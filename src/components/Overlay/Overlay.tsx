import * as React from 'react';
import { createPortal } from 'react-dom';
import Stack from '../Stack/Stack';

interface OverlayProps {
  children?: React.ReactNode;
}

export default function Overlay({
  children,
}: OverlayProps): React.ReactElement {
  return (
    <Stack>
      {React.useCallback(
        zIndex =>
          createPortal(
            <div className="overlay" style={{ zIndex }}>
              {children}
            </div>,
            document.body,
          ),
        [children],
      )}
    </Stack>
  );
}
