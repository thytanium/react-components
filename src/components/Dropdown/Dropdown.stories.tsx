import { Story } from '@storybook/react/types-6-0';
import * as React from 'react';
import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
};

const template: Story = () => <Dropdown></Dropdown>;

export const defaultDropdown = template.bind({});
