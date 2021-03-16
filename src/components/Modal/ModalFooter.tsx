import * as React from 'react';

interface ModalFooterProps {
  children?: React.ReactNode;
}

export default function ModalFooter({
  children,
}: ModalFooterProps): React.ReactElement {
  return <div data-trc-modal-footer="">{children}</div>;
}
