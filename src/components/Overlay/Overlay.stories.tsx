import * as React from 'react';
import { Story } from '@storybook/react/types-6-0';
import OverlayComponent from './Overlay';
import './Overlay.stories.css';

export default {
  title: 'Components/Overlay',
  component: OverlayComponent,
};

const Template: Story = args => (
  <OverlayComponent {...args}>
    <div className="overlay__content">Overlaid Content</div>
  </OverlayComponent>
);

export const defaultOverlay = Template.bind({});
defaultOverlay.args = {};
