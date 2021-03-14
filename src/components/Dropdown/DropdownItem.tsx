import * as React from 'react';

interface DropdownItemProps {
  children?: React.ReactNode;
  component?: React.ElementType;
}

export default function DropdownItem<ComponentPropsType>({
  children,
  component: Component = 'button',
}: DropdownItemProps): React.ReactElement {
  // const Component = component || 'button';

  return <Component>{children}</Component>;
}
