import * as React from 'react';
import Button from '../Button/Button';
import DropdownItem from './DropdownItem';
import DropdownMenu from './DropdownMenu';

function Dropdown() {
  return (
    <div className="dropdown">
      <Button>Dropdown</Button>
    </div>
  );
}

Dropdown.Item = DropdownItem;
Dropdown.Menu = DropdownMenu;

export default Dropdown;
