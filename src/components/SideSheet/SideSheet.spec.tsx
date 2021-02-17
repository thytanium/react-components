import * as React from 'react';
import { render } from '@testing-library/react';
import SideSheet from './SideSheet';

beforeEach(() => {
  jest.resetAllMocks();
});

describe('SideSheet', () => {
  it('does not show the side sheet', () => {
    const { queryByText } = render(<SideSheet>Test</SideSheet>);
    expect(queryByText('Test')).toBe(null);
  });

  it('shows the side sheet', () => {
    const { getByText } = render(<SideSheet isShown>Test</SideSheet>);
    const elem = getByText('Test');
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveClass('side-sheet__content');
    expect(elem.parentNode).toHaveClass('side-sheet');
  });

  it('accepts a render function', () => {
    const { getByText } = render(
      <SideSheet isShown>{({ state }) => state && 'Open'}</SideSheet>,
    );
    expect(getByText('Open')).toBeInTheDocument();
  });

  it('passes down transition styles', () => {
    const { getByText } = render(
      <SideSheet
        isShown
        transitionStyles={{
          entering: {
            opacity: 0,
          },
          entered: {
            opacity: 1,
          },
          exiting: {
            opacity: 0,
          },
          exited: {
            opacity: 0,
          },
          unmounted: {
            opacity: 1,
          },
        }}
      >
        Test
      </SideSheet>,
    );

    expect(getByText('Test').parentNode).toHaveStyle({ opacity: 0 });
  });
});

describe('SideSheet positioning', () => {
  (['right', 'left', 'top', 'bottom'] as (
    | 'right'
    | 'left'
    | 'top'
    | 'bottom'
  )[]).forEach(position => {
    it(`gets positioned to the ${position}`, () => {
      const { getByText } = render(
        <SideSheet isShown position={position}>
          Test
        </SideSheet>,
      );
      expect(getByText('Test').parentNode).toHaveClass(
        [
          'side-sheet',
          `side-sheet--position-${position}`,
          'side-sheet-appear',
          'side-sheet-appear-active',
        ].join(' '),
      );
    });
  });
});
