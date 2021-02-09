import * as React from 'react';
import Overlay from '../Overlay/Overlay';
import ClickOutside from '../ClickOutside/ClickOutside';
import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';

interface ModalProps {
  children?: React.ReactNode;
  isShown?: boolean;
  close?: () => void;
}

function Modal({
  children,
  isShown = false,
  close,
}: ModalProps): React.ReactElement | null {
  const renderFn = React.useCallback(
    (params?: { ref: React.RefObject<HTMLDivElement> }) => (
      <div className="modal" ref={params?.ref}>
        {children}
      </div>
    ),
    [children],
  );

  if (isShown === false) {
    return null;
  }

  return (
    <Overlay>
      {close === undefined ? (
        renderFn()
      ) : (
        <ClickOutside<HTMLDivElement> onClick={close}>{renderFn}</ClickOutside>
      )}
    </Overlay>
  );
}

Modal.Body = ModalBody;
Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;

export default Modal;
