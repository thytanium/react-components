import * as React from 'react';

interface ModalHeaderProps {
  children?: React.ReactNode;
  toggle?: () => void;
}

export default function ModalHeader({
  children,
  toggle,
}: ModalHeaderProps): React.ReactElement {
  return (
    <div className="modal-header">
      <div className="modal-header__title">{children}</div>
      {toggle !== undefined && (
        <button
          className="modal-header__close"
          onClick={toggle}
          data-testid="t-modal-header__close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      )}
    </div>
  );
}
