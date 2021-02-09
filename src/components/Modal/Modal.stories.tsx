import * as React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Modal from './Modal';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import './Modal.stories.css';
import { Button } from '../Button';

export default {
  title: 'Components/Modal',
  component: Modal,
};

export const defaultModal: Story = () => (
  <Modal isShown>
    <ModalHeader>Modal Title</ModalHeader>
    <ModalBody>
      Donut cupcake danish cake cake marzipan. Cake lollipop bonbon tootsie
      roll. Danish gummies lemon drops. Cake biscuit sesame snaps cookie candy
      canes.
    </ModalBody>
    <ModalFooter>
      <Button intent="primary">Done</Button>
      <Button>Cancel</Button>
    </ModalFooter>
  </Modal>
);

export const withCloseButton: Story = () => (
  <Modal isShown>
    <ModalHeader toggle={() => {}}>Modal Title</ModalHeader>
    <ModalBody>
      Donut cupcake danish cake cake marzipan. Cake lollipop bonbon tootsie
      roll. Danish gummies lemon drops. Cake biscuit sesame snaps cookie candy
      canes.
    </ModalBody>
    <ModalFooter>
      <Button intent="primary">Done</Button>
      <Button>Cancel</Button>
    </ModalFooter>
  </Modal>
);

export const fixedHeightBody: Story = () => (
  <Modal isShown>
    <ModalHeader toggle={() => {}}>Modal Title</ModalHeader>
    <ModalBody hasFixedHeight>
      Powder sweet roll biscuit tart jelly cookie sweet roll. Pastry pastry
      halvah tootsie roll chocolate lollipop biscuit dragée fruitcake. Tootsie
      roll jelly chocolate bar sweet roll pudding jelly-o jujubes sweet. Sweet
      roll cake apple pie jelly-o cotton candy croissant oat cake wafer.
    </ModalBody>
    <ModalFooter>
      <Button intent="primary">Done</Button>
      <Button>Cancel</Button>
    </ModalFooter>
  </Modal>
);

export const noFooterNorHeader = () => (
  <Modal isShown>
    <ModalBody>
      Gingerbread chocolate cake candy canes biscuit candy canes marshmallow
      candy. Halvah bonbon sugar plum. Biscuit toffee candy carrot cake pudding
      cheesecake jelly-o sugar plum chocolate cake.
    </ModalBody>
  </Modal>
);
