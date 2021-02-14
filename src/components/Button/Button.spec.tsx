import * as React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

const HAS_ICON_CLASS = 'btn--has-icon';

describe('Button', () => {
  const buttonText = 'Button Test Text';

  it('renders a before component', () => {
    const BeforeComponent = (): React.ReactElement => <span>Before</span>;
    const { getByText } = render(
      <Button beforeComponent={BeforeComponent}>{buttonText}</Button>,
    );

    expect(getByText('Before')).toBeInTheDocument();
    expect(getByText('Before').parentNode).toHaveClass(HAS_ICON_CLASS);
  });

  it('renders a before node', () => {
    const { getByText } = render(
      <Button beforeNode={<span>Before</span>}>{buttonText}</Button>,
    );

    expect(getByText('Before')).toBeInTheDocument();
    expect(getByText('Before').parentNode).toHaveClass(HAS_ICON_CLASS);
  });

  it('renders an after component', () => {
    const AfterComponent = (): React.ReactElement => <span>After</span>;
    const { getByText } = render(
      <Button afterComponent={AfterComponent}>{buttonText}</Button>,
    );

    expect(getByText('After')).toBeInTheDocument();
    expect(getByText('After').parentNode).toHaveClass(HAS_ICON_CLASS);
  });

  it('renders an after node', () => {
    const { getByText } = render(
      <Button afterNode={<span>After</span>}>{buttonText}</Button>,
    );

    expect(getByText('After')).toBeInTheDocument();
    expect(getByText('After').parentNode).toHaveClass(HAS_ICON_CLASS);
  });

  it('shows a loding icon', () => {
    const { container } = render(<Button isLoading>Button</Button>);

    expect(
      container.querySelector('.feather.feather-loader'),
    ).toBeInTheDocument();
  });
});
