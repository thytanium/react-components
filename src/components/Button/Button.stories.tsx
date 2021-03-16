import * as React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Button from './Button';
import './Button.stories.css';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template: Story = args => <Button {...args}>Button</Button>;

export const button = Template.bind({});
button.args = { intent: 'primary' };

export const onClick = Template.bind({});
onClick.args = { onClick: () => alert('Button clicked!') };
