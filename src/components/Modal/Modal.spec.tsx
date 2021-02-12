import * as React from 'react';
import { render } from '@testing-library/react';
import Modal from './Modal';

beforeEach(() => {
  jest.resetAllMocks();
});

describe('Modal', () => {
  it('does not show the modal', () => {
    const { queryByText } = render(<Modal>Test</Modal>);
    expect(queryByText('Test')).toBe(null);
  });

  it('shows the modal', () => {
    const { getByText } = render(<Modal isShown>Test</Modal>);
    const elem = getByText('Test');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveClass('modal');
  });

  it('accepts a render function', () => {
    const { getByText } = render(
      <Modal isShown>{({ state }) => state && 'Open'}</Modal>,
    );
    expect(getByText('Open')).toBeInTheDocument();
  });
});
