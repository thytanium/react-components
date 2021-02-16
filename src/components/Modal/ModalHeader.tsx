import * as React from 'react';
import CloseIcon from '../Icons/CloseIcon';

interface ModalHeaderProps {
  children?: React.ReactNode;
  close?: () => void;
}

export default function ModalHeader({
  children,
  close,
}: ModalHeaderProps): React.ReactElement {
  return (
    <div className="modal-header">
      <div className="modal-header__title">{children}</div>
      {close !== undefined && (
        <button
          className="modal-header__close"
          data-testid="t-modal-header__close"
          onClick={close}
        >
          <CloseIcon />
        </button>
      )}
    </div>
  );
}
