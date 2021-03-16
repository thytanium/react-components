import * as React from 'react';
import { dataAttr } from '../../util';

interface ModalBodyProps {
  children?: React.ReactNode;
  hasFixedHeight?: boolean;
}

export default function ModalBody({
  children,
  hasFixedHeight = false,
}: ModalBodyProps): React.ReactElement {
  return (
    <div
      {...{
        'data-trc-modal-body': '',
        'data-trc-modal-body--fixed-height': dataAttr(hasFixedHeight),
      }}
    >
      {children}
    </div>
  );
}
