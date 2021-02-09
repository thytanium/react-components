import * as React from 'react';
import { render } from '@testing-library/react';
import ModalHeader from './ModalHeader';

describe('ModalHeader', () => {
  it('shows inner content', () => {
    const { getByText, queryByTestId } = render(
      <ModalHeader>Test</ModalHeader>,
    );
    expect(getByText('Test')).toBeInTheDocument();
    expect(queryByTestId('t-modal-header__close')).toBe(null);
  });

  it('shows close button', () => {
    const close = () => {
      // empty callback
    };
    const { getByTestId } = render(
      <ModalHeader close={close}>Test</ModalHeader>,
    );

    expect(getByTestId('t-modal-header__close')).toBeInTheDocument();
  });
});
