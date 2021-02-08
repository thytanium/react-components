import { render } from '@testing-library/react';
import * as React from 'react';
import ModalFooter from './ModalFooter';

describe('ModalFooter', () => {
  it('shows inner content', () => {
    const { getByText } = render(<ModalFooter>Test</ModalFooter>);
    expect(getByText('Test')).toBeInTheDocument();
    expect(getByText('Test')).toHaveClass('modal-footer');
  });
});
