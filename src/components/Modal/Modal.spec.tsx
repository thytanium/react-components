import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
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

  it('calls toggle callback on outside click', () => {
    const toggle = jest.fn(() => {
      // empty callback
    });

    const { getByText } = render(
      <Modal isShown toggle={toggle}>
        Test
      </Modal>,
    );

    const elem = getByText('Test');

    if (elem.parentNode) {
      fireEvent(
        elem.parentNode,
        new MouseEvent('click', {
          bubbles: true,
        }),
      );
    }

    expect(toggle).toHaveBeenCalled();
  });
});
