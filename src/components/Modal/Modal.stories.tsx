import * as React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Modal from './Modal';
import './Modal.stories.css';

export default {
  title: 'Components/Modal',
  component: Modal,
};

export const defaultModal: Story = () => (
  <Modal isShown>
    <Modal.Header>Modal Title</Modal.Header>
    <Modal.Body>
      Donut cupcake danish cake cake marzipan. Cake lollipop bonbon tootsie
      roll. Danish gummies lemon drops. Cake biscuit sesame snaps cookie candy
      canes.
    </Modal.Body>
    <Modal.Footer>Modal Footer</Modal.Footer>
  </Modal>
);

export const withCloseButton: Story = () => (
  <Modal isShown>
    <Modal.Header close={() => {}}>Modal Title</Modal.Header>
    <Modal.Body>
      Donut cupcake danish cake cake marzipan. Cake lollipop bonbon tootsie
      roll. Danish gummies lemon drops. Cake biscuit sesame snaps cookie candy
      canes.
    </Modal.Body>
    <Modal.Footer>Modal Footer</Modal.Footer>
  </Modal>
);

export const fixedHeightBody: Story = () => (
  <Modal isShown>
    <Modal.Header close={() => {}}>Modal Title</Modal.Header>
    <Modal.Body hasFixedHeight>
      Powder sweet roll biscuit tart jelly cookie sweet roll. Pastry pastry
      halvah tootsie roll chocolate lollipop biscuit dragée fruitcake. Tootsie
      roll jelly chocolate bar sweet roll pudding jelly-o jujubes sweet. Sweet
      roll cake apple pie jelly-o cotton candy croissant oat cake wafer.
    </Modal.Body>
    <Modal.Footer>Modal Footer</Modal.Footer>
  </Modal>
);

export const noFooterNorHeader = () => (
  <Modal isShown>
    <Modal.Body>
      Gingerbread chocolate cake candy canes biscuit candy canes marshmallow
      candy. Halvah bonbon sugar plum. Biscuit toffee candy carrot cake pudding
      cheesecake jelly-o sugar plum chocolate cake.
    </Modal.Body>
  </Modal>
);
