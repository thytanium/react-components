import * as React from 'react';
import { Story } from '@storybook/react/types-6-0';
import SideSheet from './SideSheet';
import './SideSheet.stories.css';

export default {
  title: 'Components/SideSheet',
  component: SideSheet,
};

const Template: Story = args => <SideSheet {...args}>Side Sheet</SideSheet>;

export const defaultSideSheet = Template.bind({});
defaultSideSheet.args = { isShown: true };
