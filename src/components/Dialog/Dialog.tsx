import * as React from 'react';
import { Intent } from '../../types';
import Button from '../Button/Button';
import { Modal } from '../Modal';

type CloseFunction = () => void;

function closeHandler(close: CloseFunction) {
  close();
}

interface DialogProps {
  cancelLabel?: string;
  children?:
    | React.ReactNode
    | (({ close }: { close: CloseFunction }) => React.ReactNode);
  confirmLabel?: string;
  hasCancel?: boolean;
  hasClose?: boolean;
  hasFooter?: boolean;
  hasHeader?: boolean;
  intent?: Intent;
  isCancelDisabled?: boolean;
  isCancelLoading?: boolean;
  isConfirmDisabled?: boolean;
  isConfirmLoading?: boolean;
  isShown?: boolean;
  loadingComponent?: React.ElementType;
  onCancel?: (close: CloseFunction) => void;
  onCloseComplete?: () => void;
  onConfirm?: (close: CloseFunction) => void;
  shouldCloseOnOverlayClick?: boolean;
  title?: React.ReactNode;
}

export default function Dialog({
  cancelLabel = 'Cancel',
  children,
  confirmLabel = 'Confirm',
  hasCancel = true,
  hasClose = true,
  hasFooter = true,
  hasHeader = true,
  intent = 'primary',
  isCancelDisabled = false,
  isCancelLoading = false,
  isConfirmDisabled = false,
  isConfirmLoading = false,
  isShown = false,
  loadingComponent,
  onCancel = closeHandler,
  onCloseComplete,
  onConfirm = closeHandler,
  shouldCloseOnOverlayClick = true,
  title,
}: DialogProps): React.ReactElement {
  const [isOpen, setOpen] = React.useState<boolean>(isShown);

  const close = () => {
    setOpen(false);
    if (onCloseComplete) {
      onCloseComplete();
    }
  };

  const handleCancelClick = React.useCallback(() => onCancel(close), [
    onCancel,
    close,
  ]);

  const handleConfirmClick = React.useCallback(() => onConfirm(close), [
    onConfirm,
    close,
  ]);

  return (
    <Modal
      isShown={isOpen}
      close={shouldCloseOnOverlayClick ? close : undefined}
    >
      {hasHeader && (
        <Modal.Header close={hasClose ? close : undefined}>
          {title}
        </Modal.Header>
      )}
      <Modal.Body>
        {children instanceof Function ? children({ close }) : children}
      </Modal.Body>
      {hasFooter && (
        <Modal.Footer>
          <Button
            disabled={isConfirmDisabled}
            intent={intent}
            isLoading={isConfirmLoading}
            loadingComponent={loadingComponent}
            onClick={handleConfirmClick}
          >
            {confirmLabel}
          </Button>
          {hasCancel && (
            <Button
              disabled={isCancelDisabled}
              intent="none"
              isLoading={isCancelLoading}
              loadingComponent={loadingComponent}
              onClick={handleCancelClick}
            >
              {cancelLabel}
            </Button>
          )}
        </Modal.Footer>
      )}
    </Modal>
  );
}