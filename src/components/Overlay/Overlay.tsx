import * as React from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import { OverlayChildrenFunctionParams } from '../../types';
import Stack from '../Stack/Stack';

function noop() {
  // empty callback
}

interface OverlayProps {
  children?:
    | React.ReactNode
    | ((params: OverlayChildrenFunctionParams) => React.ReactNode);
  defaultStyle?: React.CSSProperties;
  isShown?: boolean;
  onEntered?: () => void;
  onEntering?: () => void;
  onExited?: () => void;
  onExiting?: () => void;
  shouldCloseOnClick?: boolean;
  shouldCloseOnEscPress?: boolean;
  transitionDuration?: number;
  transitionStyles?: { [key in TransitionStatus]: React.CSSProperties };
}

export default function Overlay({
  children,
  defaultStyle,
  isShown = false,
  onEntered = noop,
  onEntering = noop,
  onExited = noop,
  onExiting = noop,
  shouldCloseOnClick = true,
  shouldCloseOnEscPress = true,
  transitionDuration = 300,
  transitionStyles,
}: OverlayProps): React.ReactElement | null {
  const [status, setStatus] = React.useState<TransitionStatus>(
    isShown ? 'entering' : 'exiting',
  );

  const close = React.useCallback(() => setStatus('exiting'), [setStatus]);

  React.useEffect(() => {
    if (isShown) {
      setStatus('entering');
    }
  }, [isShown]);

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

  const handleEntering = React.useCallback(() => {
    setStatus('entering');
    onEntering();
  }, [setStatus]);

  const handleEntered = React.useCallback(() => {
    setStatus('entered');
    onEntered();
  }, [setStatus]);

  const handleExiting = React.useCallback(() => {
    setStatus('exiting');
    onExiting();
  }, [setStatus]);

  const handleExited = React.useCallback(() => {
    setStatus('exited');
    onExited();
  }, [setStatus]);

  React.useEffect(() => {
    if (status === 'entering') {
      document.body.addEventListener('keydown', handleEscapeKeyDown, false);
    }

    if (status === 'exiting') {
      document.body.removeEventListener('keydown', handleEscapeKeyDown, false);
    }
  }, [status]);

  React.useEffect(
    () => () => {
      document.body.removeEventListener('keydown', handleEscapeKeyDown, false);
    },
    [],
  );

  if (status === 'exited') {
    return null;
  }

  return (
    <Stack>
      {zIndex =>
        createPortal(
          <CSSTransition
            appear
            classNames="overlay"
            in={isShown && status !== 'exiting'}
            onEntered={handleEntered}
            onEntering={handleEntering}
            onExited={handleExited}
            onExiting={handleExiting}
            timeout={transitionDuration}
            unmountOnExit
          >
            {state => (
              <div
                className="overlay"
                onClick={handleBackdropClick}
                style={{
                  zIndex,
                  ...defaultStyle,
                  ...(transitionStyles && transitionStyles[state]),
                }}
              >
                {children instanceof Function
                  ? children({ state, close })
                  : children}
              </div>
            )}
          </CSSTransition>,
          document.body,
        )
      }
    </Stack>
  );
}
