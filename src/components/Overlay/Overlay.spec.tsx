import * as React from 'react';
import { Transition } from 'react-transition-group';
import { fireEvent, render } from '@testing-library/react';
import Overlay from './Overlay';

jest.mock('react', () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...(jest.requireActual('react') as Record<string, any>),
  useState: jest.fn(),
}));

jest.mock('react-transition-group', () => {
  const FakeTransition = jest.fn(props =>
    props.in ? props.children('entering') : null,
  );
  return { Transition: FakeTransition };
});

function pressEsc(container: Element) {
  fireEvent.keyDown(container, {
    key: 'Escape',
    bubbles: true,
  });
}

describe('Overlay', () => {
  beforeEach(() => {
    (React.useState as jest.Mock).mockImplementation(
      jest.requireActual('react').useState,
    );
  });

  it('does not show by default', () => {
    const { queryByText } = render(<Overlay>test</Overlay>);
    expect(queryByText('test')).toBe(null);
  });

  it('shows inner content', () => {
    const { getByText } = render(<Overlay isShown>test</Overlay>);
    expect(getByText('test')).toBeInTheDocument();
  });

  it('closes on click', () => {
    const { getByText, queryByText } = render(<Overlay isShown>test</Overlay>);
    fireEvent.click(getByText('test'));
    expect(queryByText('test')).toBe(null);
  });

  it('closes on esc press', () => {
    const { getByText, queryByText } = render(<Overlay isShown>test</Overlay>);
    pressEsc(getByText('test'));
    expect(queryByText('test')).toBe(null);
  });

  it('disables closing on click', () => {
    const { getByText } = render(
      <Overlay isShown shouldCloseOnClick={false}>
        test
      </Overlay>,
    );

    fireEvent.click(getByText('test'));
    expect(getByText('test')).toBeInTheDocument();
  });

  it('disables closing on esc press', () => {
    const { getByText } = render(
      <Overlay isShown shouldCloseOnEscPress={false}>
        test
      </Overlay>,
    );

    pressEsc(getByText('test'));
    expect(getByText('test')).toBeInTheDocument();
  });

  it('passes down transition styles', () => {
    const { getByText } = render(
      <Overlay
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
      </Overlay>,
    );

    expect(getByText('Test')).toHaveStyle({ opacity: 0 });
  });
});

describe('Overlay callbacks', () => {
  const setState = jest.fn();

  beforeEach(() => {
    (React.useState as jest.Mock).mockImplementation(init => [init, setState]);
    (Transition as jest.Mock).mockImplementation(
      jest.fn(props => {
        if (props.onEntering) props.onEntering();
        if (props.onEntered) props.onEntered();
        if (props.onExiting) props.onExiting();
        if (props.onExited) props.onExited();

        return props.in ? props.children('entering') : null;
      }),
    );
  });

  it('calls onEntering cb', () => {
    const onEntering = jest.fn();
    render(
      <Overlay isShown onEntering={onEntering}>
        Test
      </Overlay>,
    );
    expect(onEntering).toHaveBeenCalledTimes(1);
  });

  it('calls onEntered cb', () => {
    const onEntered = jest.fn();
    render(
      <Overlay isShown onEntered={onEntered}>
        Test
      </Overlay>,
    );
    expect(onEntered).toHaveBeenCalledTimes(1);
  });

  it('calls onExiting cb', () => {
    const onExiting = jest.fn();
    render(
      <Overlay isShown onExiting={onExiting}>
        Test
      </Overlay>,
    );
    expect(onExiting).toHaveBeenCalledTimes(1);
  });

  it('calls onExited cb', () => {
    const onExited = jest.fn();
    render(
      <Overlay isShown onExited={onExited}>
        Test
      </Overlay>,
    );
    expect(onExited).toHaveBeenCalledTimes(1);
  });
});

describe('Overlay unmounting', () => {
  beforeEach(() => {
    (React.useState as jest.Mock).mockImplementation(() => [
      'exited',
      jest.fn(),
    ]);
  });

  it('unmounts on exited state', () => {
    const { queryByText } = render(<Overlay>Test</Overlay>);
    expect(queryByText('Test')).toBeNull();
  });
});
