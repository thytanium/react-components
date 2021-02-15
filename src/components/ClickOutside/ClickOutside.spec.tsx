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
    <ClickOutside<HTMLDivElement> onClick={onClick}>
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
    fireEvent.click(document.body);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not fire callback when clicking inside', () => {
    const { getByText } = render(<Component />);
    fireEvent.click(getByText('My Content'));
    expect(onClick).not.toHaveBeenCalled();
  });
});
