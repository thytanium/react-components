import * as React from 'react';
import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';
import Overlay from '../Overlay/Overlay';
import { OverlayChildrenFunctionParams } from '../../types';

interface ModalProps {
  children?:
    | React.ReactNode
    | ((params: OverlayChildrenFunctionParams) => React.ReactNode);
  isShown?: boolean;
  shouldCloseOnEscPress?: boolean;
  shouldCloseOnOverlayClick?: boolean;
}

function Modal({
  children,
  isShown = false,
  shouldCloseOnEscPress = true,
  shouldCloseOnOverlayClick = true,
}: ModalProps): React.ReactElement | null {
  return (
    <Overlay
      isShown={isShown}
      shouldCloseOnClick={shouldCloseOnOverlayClick}
      shouldCloseOnEscPress={shouldCloseOnEscPress}
    >
      {React.useCallback(
        overlayState => (
          <div className="modal">
            {children instanceof Function ? children(overlayState) : children}
          </div>
        ),
        [children],
      )}
    </Overlay>
  );
}

Modal.Body = ModalBody;
Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;

export default Modal;
