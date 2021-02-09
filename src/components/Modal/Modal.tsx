import * as React from 'react';
import Overlay from '../Overlay/Overlay';
import ClickOutside from '../ClickOutside/ClickOutside';
import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';
import ModalFooter from './ModalFooter';

interface ModalProps {
  children?: React.ReactNode;
  isShown?: boolean;
  toggle?: () => void;
}

export default function Modal({
  children,
  isShown = false,
  toggle,
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
      {toggle === undefined ? (
        renderFn()
      ) : (
        <ClickOutside<HTMLDivElement> onClick={toggle}>{renderFn}</ClickOutside>
      )}
    </Overlay>
  );
}

// Modal.Body = ModalBody;
// Modal.Header = ModalHeader;
// Modal.Footer = ModalFooter;
