import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ClickOutside from './ClickOutside';

beforeEach(() => {
  jest.resetAllMocks();
});

describe('ClickOutside component and hook', () => {
  const onClick = jest.fn((): void => {
    // just a mock
  });

  const Component = (): React.ReactElement => (
    <ClickOutside onClick={onClick}>
      {React.useCallback(
        ({ ref }): React.ReactElement => (
          <div ref={ref}>My Content</div>
        ),
        [],
      )}
    </ClickOutside>
  );

  it('fires callback when clicking outside', () => {
    const { getByText } = render(<Component />);
    expect(getByText('My Content')).toBeInTheDocument();

    fireEvent(
      document.body,
      new MouseEvent('click', {
        bubbles: true,
      }),
    );

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not fire callback when clicking inside', () => {
    const { getByText } = render(<Component />);

    fireEvent(
      getByText('My Content'),
      new MouseEvent('click', {
        bubbles: true,
      }),
    );

    expect(onClick).not.toHaveBeenCalled();
  });
});
