import * as React from 'react';
import { Transition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import Overlay from '../Overlay/Overlay';
import { OverlayChildrenFunctionParams } from '../../types';

interface SideSheetProps {
  children?:
    | React.ReactNode
    | ((params: OverlayChildrenFunctionParams) => React.ReactNode);
  closeComponent?: React.ElementType;
  defaultStyle?: React.CSSProperties;
  hasClose?: boolean;
  isShown?: boolean;
  onCloseComplete?: () => void;
  onOpenComplete?: () => void;
  position?: 'right' | 'left' | 'top' | 'bottom';
  shouldCloseOnEscPress?: boolean;
  shouldCloseOnOverlayClick?: boolean;
  transitionDuration?:
    | number
    | { [key in 'appear' | 'enter' | 'exit']: number };
  transitionStyles?: { [key in TransitionStatus]: React.CSSProperties };
}

export default function SideSheet({
  children,
  closeComponent: CloseComponent,
  defaultStyle,
  hasClose = true,
  isShown = false,
  onCloseComplete,
  onOpenComplete,
  position = 'right',
  shouldCloseOnEscPress = true,
  shouldCloseOnOverlayClick = true,
  transitionDuration = 300,
  transitionStyles,
}: SideSheetProps): React.ReactElement {
  return (
    <Overlay
      isShown={isShown}
      onEntered={onOpenComplete}
      onExited={onCloseComplete}
      shouldCloseOnClick={shouldCloseOnOverlayClick}
      shouldCloseOnEscPress={shouldCloseOnEscPress}
    >
      {overlayState => (
        <Transition
          appear
          in={isShown && overlayState.state !== 'exiting'}
          timeout={transitionDuration}
          unmountOnExit
        >
          {state => (
            <div
              {...{
                'data-trc-side-sheet': '',
                [`data-trc-side-sheet--${state}`]: '',
                [`data-trc-side-sheet--position-${position}`]: '',
              }}
              style={{
                ...defaultStyle,
                ...(transitionStyles && transitionStyles[state]),
              }}
            >
              {hasClose && (
                <button
                  data-trc-side-sheet__close=""
                  onClick={overlayState.close}
                  type="button"
                >
                  {CloseComponent && <CloseComponent />}
                </button>
              )}
              <div data-trc-side-sheet__content>
                {children instanceof Function
                  ? children(overlayState)
                  : children}
              </div>
            </div>
          )}
        </Transition>
      )}
    </Overlay>
  );
}
