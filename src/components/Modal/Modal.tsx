import * as React from 'react';
import { Transition } from 'react-transition-group';
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
  onOpenComplete?: () => void;
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
  onOpenComplete,
  shouldCloseOnEscPress = true,
  shouldCloseOnOverlayClick = true,
  transitionDuration = 300,
  transitionStyles,
}: ModalProps): React.ReactElement | null {
  return (
    <Overlay
      defaultStyle={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      isShown={isShown}
      onEntered={onOpenComplete}
      onExited={onCloseComplete}
      shouldCloseOnClick={shouldCloseOnOverlayClick}
      shouldCloseOnEscPress={shouldCloseOnEscPress}
    >
      {React.useCallback(
        overlayState => (
          <Transition
            appear
            in={isShown && overlayState.state !== 'exiting'}
            timeout={transitionDuration}
            unmountOnExit
          >
            {state => (
              <div
                {...{ 'data-trc-modal': '', [`data-trc-modal--${state}`]: '' }}
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
          </Transition>
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
