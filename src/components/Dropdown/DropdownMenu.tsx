import * as React from 'react';

interface DropdownMenuProps {
  children?: React.ReactNode;
}

export default function DropdownMenu({
  children,
}: DropdownMenuProps): React.ReactElement {
  return <div className="dropdown-menu">{children}</div>;
}
