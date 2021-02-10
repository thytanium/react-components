import * as React from 'react';
import { createPortal } from 'react-dom';
import { OverlayChildrenFunctionParams } from '../../types';
import Stack from '../Stack/Stack';

interface OverlayProps {
  children?:
    | React.ReactNode
    | ((params: OverlayChildrenFunctionParams) => React.ReactNode);
  isShown?: boolean;
  shouldCloseOnClick?: boolean;
  shouldCloseOnEscPress?: boolean;
}

export default function Overlay({
  children,
  isShown = false,
  shouldCloseOnClick = true,
  shouldCloseOnEscPress = true,
}: OverlayProps): React.ReactElement | null {
  const [status, setStatus] = React.useState<boolean>(isShown);

  const close = React.useCallback(() => setStatus(false), [setStatus]);

  React.useEffect(() => setStatus(isShown), [isShown]);

  const handleBackdropClick = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target !== event.currentTarget || !shouldCloseOnClick) {
        return;
      }

      close();
    },
    [close, shouldCloseOnClick],
  );

  const handleEscapeKeyDown = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape' && shouldCloseOnEscPress) {
        close();
      }
    },
    [shouldCloseOnEscPress],
  );

  React.useEffect(() => {
    if (status) {
      document.body.addEventListener('keydown', handleEscapeKeyDown, false);
    }
    return () => {
      document.body.removeEventListener('keydown', handleEscapeKeyDown, false);
    };
  });

  if (!status) {
    return null;
  }

  return (
    <Stack>
      {zIndex =>
        createPortal(
          <div
            className="overlay"
            onClick={handleBackdropClick}
            style={{ zIndex }}
          >
            {children instanceof Function
              ? children({ status, close })
              : children}
          </div>,
          document.body,
        )
      }
    </Stack>
  );
}
