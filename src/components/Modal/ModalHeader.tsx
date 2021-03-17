import * as React from 'react';

interface ModalHeaderProps {
  children?: React.ReactNode;
  closeComponent?: React.ElementType;
  closeNode?: React.ReactNode;
  onClose?: () => void;
}

export default function ModalHeader({
  children,
  closeComponent: CloseComponent,
  closeNode,
  onClose,
}: ModalHeaderProps): React.ReactElement {
  return (
    <div data-trc-modal-header="">
      <div data-trc-modal-header__title>{children}</div>
      {onClose !== undefined && (
        <button data-trc-modal-header__close="" onClick={onClose}>
          {CloseComponent ? <CloseComponent /> : closeNode}
        </button>
      )}
    </div>
  );
}
