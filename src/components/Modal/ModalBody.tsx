import * as React from 'react';
import * as classNames from 'classnames';

interface ModalBodyProps {
  children?: React.ReactNode;
  hasFixedHeight?: boolean;
}

export default function ModalBody({
  children,
  hasFixedHeight,
}: ModalBodyProps): React.ReactElement {
  return (
    <div
      className={classNames('modal-body', {
        'modal-body--has-fixed-height': hasFixedHeight,
      })}
    >
      {children}
    </div>
  );
}
