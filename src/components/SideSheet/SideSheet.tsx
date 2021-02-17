import * as React from 'react';
import * as classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import Overlay from '../Overlay/Overlay';
import CloseIcon from '../Icons/CloseIcon';
import { OverlayChildrenFunctionParams } from '../../types';

const positionClassMap: Record<'right' | 'left' | 'top' | 'bottom', string> = {
  right: 'side-sheet--position-right',
  left: 'side-sheet--position-left',
  top: 'side-sheet--position-top',
  bottom: 'side-sheet--position-bottom',
};

interface SideSheetProps {
  children?:
    | React.ReactNode
    | ((params: OverlayChildrenFunctionParams) => React.ReactNode);
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
        <CSSTransition
          appear
          classNames="side-sheet"
          in={isShown && overlayState.state !== 'exiting'}
          timeout={transitionDuration}
          unmountOnExit
        >
          {state => (
            <div
              className={classNames('side-sheet', positionClassMap[position])}
              style={{
                ...defaultStyle,
                ...(transitionStyles && transitionStyles[state]),
              }}
            >
              {hasClose && (
                <button
                  className="side-sheet__close"
                  onClick={overlayState.close}
                  type="button"
                >
                  <CloseIcon />
                </button>
              )}
              <div className="side-sheet__content">
                {children instanceof Function
                  ? children(overlayState)
                  : children}
              </div>
            </div>
          )}
        </CSSTransition>
      )}
    </Overlay>
  );
}
