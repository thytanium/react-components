import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import { TransitionStatus } from 'react-transition-group/Transition';
import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';
import Overlay from '../Overlay/Overlay';
import { OverlayChildrenFunctionParams } from '../../types';

interface ModalProps {
  children?:
    | React.ReactNode
    | ((params: OverlayChildrenFunctionParams) => React.ReactNode);
  defaultStyle?: React.CSSProperties;
  isShown?: boolean;
  onCloseComplete?: () => void;
  shouldCloseOnEscPress?: boolean;
  shouldCloseOnOverlayClick?: boolean;
  transitionDuration?:
    | number
    | { [key in 'appear' | 'enter' | 'exit']: number };
  transitionStyles?: { [key in TransitionStatus]: React.CSSProperties };
}

function Modal({
  children,
  defaultStyle,
  isShown = false,
  onCloseComplete,
  shouldCloseOnEscPress = true,
  shouldCloseOnOverlayClick = true,
  transitionDuration = 300,
  transitionStyles,
}: ModalProps): React.ReactElement | null {
  return (
    <Overlay
      isShown={isShown}
      onExited={onCloseComplete}
      shouldCloseOnClick={shouldCloseOnOverlayClick}
      shouldCloseOnEscPress={shouldCloseOnEscPress}
    >
      {React.useCallback(
        overlayState => (
          <CSSTransition
            appear
            classNames="modal"
            in={isShown && overlayState.state !== 'exiting'}
            timeout={transitionDuration}
            unmountOnExit
          >
            {state => (
              <div
                className="modal"
                style={{
                  ...defaultStyle,
                  ...(transitionStyles && transitionStyles[state]),
                }}
              >
                {children instanceof Function
                  ? children(overlayState)
                  : children}
              </div>
            )}
          </CSSTransition>
        ),
        [children, defaultStyle, transitionDuration, transitionStyles, isShown],
      )}
    </Overlay>
  );
}

Modal.Body = ModalBody;
Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;

export default Modal;
