import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  const buttonText = 'Button Test Text';

  it('renders a left component', () => {
    const LeftComponent = (): React.ReactElement => <span>Left</span>;
    const { getByText } = render(
      <Button leftComponent={LeftComponent}>{buttonText}</Button>,
    );

    expect(getByText('Left')).toBeInTheDocument();
  });

  it('renders a left node', () => {
    const { getByText } = render(
      <Button leftNode={<span>Left</span>}>{buttonText}</Button>,
    );

    expect(getByText('Left')).toBeInTheDocument();
  });

  it('renders a right component', () => {
    const RightComponent = (): React.ReactElement => <span>Right</span>;
    const { getByText } = render(
      <Button leftComponent={RightComponent}>{buttonText}</Button>,
    );

    expect(getByText('Right')).toBeInTheDocument();
  });

  it('renders a right node', () => {
    const { getByText } = render(
      <Button leftNode={<span>Right</span>}>{buttonText}</Button>,
    );

    expect(getByText('Right')).toBeInTheDocument();
  });

  it('handles click event', () => {
    const onClick = jest.fn((): void => {
      // do nothing
    });
    const { getByText } = render(
      <Button onClick={onClick}>{buttonText}</Button>,
    );

    fireEvent(
      getByText(buttonText),
      new MouseEvent('click', {
        bubbles: true,
      }),
    );

    expect(onClick.mock.calls).toHaveLength(1);
  });
});
