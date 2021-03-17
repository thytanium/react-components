import * as React from 'react';
import { render } from '@testing-library/react';
import ModalHeader from './ModalHeader';

describe('ModalHeader', () => {
  it('shows inner content', () => {
    const { container, getByText } = render(<ModalHeader>Test</ModalHeader>);
    expect(getByText('Test')).toBeInTheDocument();
    expect(container.querySelector('[data-trc-modal-header__close]')).toBe(
      null,
    );
  });

  it('shows close button', () => {
    const onClose = () => {
      // empty callback
    };
    const { container } = render(
      <ModalHeader onClose={onClose}>Test</ModalHeader>,
    );

    expect(
      container.querySelector('[data-trc-modal-header__close]'),
    ).toBeInTheDocument();
  });
});
