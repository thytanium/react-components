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
    <div data-trc-modal-header="">
      <div data-trc-modal-header__title>{children}</div>
      {close !== undefined && (
        <button data-trc-modal-header__close="" onClick={close}>
          <CloseIcon />
        </button>
      )}
    </div>
  );
}
