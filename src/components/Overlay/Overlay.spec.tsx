import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Overlay from './Overlay';

function click(container: Element) {
  fireEvent(
    container,
    new MouseEvent('click', {
      bubbles: true,
    }),
  );
}

function pressEsc(container: Element) {
  fireEvent(
    container,
    new KeyboardEvent('keydown', {
      key: 'Escape',
      bubbles: true,
    }),
  );
}

describe('Overlay', () => {
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
    click(getByText('test'));
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

    click(getByText('test'));
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
});
