import * as React from 'react';
import { render } from '@testing-library/react';
import ModalBody from './ModalBody';

describe('ModalBody', () => {
  it('shows inner content', () => {
    const { getByText } = render(<ModalBody>Test</ModalBody>);
    expect(getByText('Test')).toBeInTheDocument();
    expect(getByText('Test')).not.toHaveAttribute(
      'data-trc-modal-body--fixed-height',
    );
  });

  it('adds fixed height class', () => {
    const { getByText } = render(<ModalBody hasFixedHeight>Test</ModalBody>);
    expect(getByText('Test')).toHaveAttribute(
      'data-trc-modal-body--fixed-height',
    );
  });
});
