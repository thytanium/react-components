import * as React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  const buttonText = 'Button Test Text';

  it('renders a before component', () => {
    const BeforeComponent = (): React.ReactElement => <span>Before</span>;
    const { getByText } = render(
      <Button beforeComponent={BeforeComponent}>{buttonText}</Button>,
    );

    expect(getByText('Before')).toBeInTheDocument();
  });

  it('renders a before node', () => {
    const { getByText } = render(
      <Button beforeNode={<span>Before</span>}>{buttonText}</Button>,
    );

    expect(getByText('Before')).toBeInTheDocument();
  });

  it('renders an after component', () => {
    const AfterComponent = (): React.ReactElement => <span>After</span>;
    const { getByText } = render(
      <Button afterComponent={AfterComponent}>{buttonText}</Button>,
    );

    expect(getByText('After')).toBeInTheDocument();
  });

  it('renders an after node', () => {
    const { getByText } = render(
      <Button afterNode={<span>After</span>}>{buttonText}</Button>,
    );

    expect(getByText('After')).toBeInTheDocument();
  });
});
