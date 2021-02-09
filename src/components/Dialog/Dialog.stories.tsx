import * as React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Dialog from './Dialog';

export default {
  title: 'Components/Dialog',
  component: Dialog,
};

const Template: Story = args => (
  <Dialog {...args}>
    Biscuit jujubes chocolate bar wafer cookie jujubes. Cake bonbon gingerbread
    sweet pastry. Cupcake cookie icing ice cream croissant toffee.
  </Dialog>
);

export const defaultDialog = Template.bind({});
defaultDialog.args = {
  isShown: true,
  title: 'Example Dialog',
};
