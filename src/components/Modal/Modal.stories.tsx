import * as React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Modal from './Modal';
import './Modal.stories.css';

export default {
  title: 'Components/Modal',
  component: Modal,
};

const defaultModalTemplate: Story = args => (
  <Modal {...args}>
    <Modal.Header>Modal Title</Modal.Header>
    <Modal.Body>
      Donut cupcake danish cake cake marzipan. Cake lollipop bonbon tootsie
      roll. Danish gummies lemon drops. Cake biscuit sesame snaps cookie candy
      canes.
    </Modal.Body>
    <Modal.Footer>Modal Footer</Modal.Footer>
  </Modal>
);
export const defaultModal = defaultModalTemplate.bind({});
defaultModal.args = { isShown: true };

const withCloseButtonTemplate: Story = args => (
  <Modal {...args}>
    <Modal.Header close={() => alert('Clicked on close')}>
      Modal Title
    </Modal.Header>
    <Modal.Body>
      Donut cupcake danish cake cake marzipan. Cake lollipop bonbon tootsie
      roll. Danish gummies lemon drops. Cake biscuit sesame snaps cookie candy
      canes.
    </Modal.Body>
    <Modal.Footer>Modal Footer</Modal.Footer>
  </Modal>
);
export const withCloseButton = withCloseButtonTemplate.bind({});
withCloseButton.args = { isShown: true };

const fixedHeightBodyTemplate: Story = args => (
  <Modal {...args}>
    <Modal.Header close={() => {
      // empty
    }}>
      Modal Title
    </Modal.Header>
    <Modal.Body hasFixedHeight>
      Powder sweet roll biscuit tart jelly cookie sweet roll. Pastry pastry
      halvah tootsie roll chocolate lollipop biscuit dragée fruitcake. Tootsie
      roll jelly chocolate bar sweet roll pudding jelly-o jujubes sweet. Sweet
      roll cake apple pie jelly-o cotton candy croissant oat cake wafer.
    </Modal.Body>
    <Modal.Footer>Modal Footer</Modal.Footer>
  </Modal>
);
export const fixedHeightBody = fixedHeightBodyTemplate.bind({});
fixedHeightBody.args = { isShown: true };

const noFooterNorHeaderTemplate: Story = args => (
  <Modal {...args}>
    <Modal.Body>
      Gingerbread chocolate cake candy canes biscuit candy canes marshmallow
      candy. Halvah bonbon sugar plum. Biscuit toffee candy carrot cake pudding
      cheesecake jelly-o sugar plum chocolate cake.
    </Modal.Body>
  </Modal>
);
export const noFooterNorHeader = noFooterNorHeaderTemplate.bind({});
noFooterNorHeader.args = { isShown: true };
