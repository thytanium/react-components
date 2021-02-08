import * as React from 'react';
import { render } from '@testing-library/react';
import ModalBody from './ModalBody';

const FIXED_HEIGHT_CLASS_NAME = 'modal-body--fixed-height';

describe('ModalBody', () => {
  it('shows inner content', () => {
    const { getByText } = render(<ModalBody>Test</ModalBody>);
    expect(getByText('Test')).toBeInTheDocument();
    expect(getByText('Test')).not.toHaveClass(FIXED_HEIGHT_CLASS_NAME);
  });

  it('adds fixed height class', () => {
    const { getByText } = render(<ModalBody hasFixedHeight>Test</ModalBody>);
    expect(getByText('Test')).toHaveClass(FIXED_HEIGHT_CLASS_NAME);
  });
});
