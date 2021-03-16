import * as React from 'react';
import { createPortal } from 'react-dom';
import { Transition } from 'react-transition-group';
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
  transitionDuration?:
    | number
    | { [key in 'appear' | 'enter' | 'exit']: number };
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
    [close, shouldCloseOnEscPress],
  );

  const handleEntering = React.useCallback(() => {
    setStatus('entering');
    onEntering();
  }, [onEntering, setStatus]);

  const handleEntered = React.useCallback(() => {
    setStatus('entered');
    onEntered();
  }, [onEntered, setStatus]);

  const handleExiting = React.useCallback(() => {
    setStatus('exiting');
    onExiting();
  }, [onExiting, setStatus]);

  const handleExited = React.useCallback(() => {
    setStatus('exited');
    onExited();
  }, [onExited, setStatus]);

  React.useEffect(() => {
    if (status === 'entering') {
      document.body.addEventListener('keydown', handleEscapeKeyDown, false);
    }

    if (status === 'exiting') {
      document.body.removeEventListener('keydown', handleEscapeKeyDown, false);
    }

    return () => {
      document.body.removeEventListener('keydown', handleEscapeKeyDown, false);
    };
  }, [handleEscapeKeyDown, status]);

  if (status === 'exited') {
    return null;
  }

  return (
    <Stack>
      {zIndex =>
        createPortal(
          <Transition
            appear
            in={isShown && status !== 'exiting'}
            onEntered={handleEntered}
            onEntering={handleEntering}
            onExited={handleExited}
            onExiting={handleExiting}
            timeout={transitionDuration}
            unmountOnExit
          >
            {state => (
              <div // eslint-disable-line jsx-a11y/no-static-element-interactions
                data-trc-overlay=""
                {...{ [`data-trc-overlay--${state}`]: '' }}
                onClick={handleBackdropClick}
                onKeyDown={noop}
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
          </Transition>,
          document.body,
        )
      }
    </Stack>
  );
}
