import * as React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  const buttonText = 'Button Test Text';

  it('shows content', () => {
    const { getByText } = render(<Button>Click Me</Button>);
    expect(getByText('Click Me')).toBeInTheDocument();
  });

  it('toggles primary intent', () => {
    const { getByText } = render(<Button intent="primary">Button</Button>);
    expect(getByText('Button')).toHaveAttribute('data-trc-button--primary');
  });

  it('toggles success intent', () => {
    const { getByText } = render(<Button intent="success">Button</Button>);
    expect(getByText('Button')).toHaveAttribute('data-trc-button--success');
  });

  it('toggles warning intent', () => {
    const { getByText } = render(<Button intent="warning">Button</Button>);
    expect(getByText('Button')).toHaveAttribute('data-trc-button--warning');
  });

  it('toggles danger intent', () => {
    const { getByText } = render(<Button intent="danger">Button</Button>);
    expect(getByText('Button')).toHaveAttribute('data-trc-button--danger');
  });

  it('toggles minimal appearance', () => {
    const { getByText } = render(<Button appearance="minimal">Button</Button>);
    expect(getByText('Button')).toHaveAttribute('data-trc-button--minimal');
  });

  it('renders a before component', () => {
    const BeforeComponent = (): React.ReactElement => <span>Before</span>;
    const { getByText } = render(
      <Button beforeComponent={BeforeComponent}>{buttonText}</Button>,
    );

    expect(getByText('Before')).toBeInTheDocument();
    expect(getByText('Before').parentNode).toHaveAttribute(
      'data-trc-button--has-children',
    );
  });

  it('renders a before node', () => {
    const { getByText } = render(
      <Button beforeNode={<span>Before</span>}>{buttonText}</Button>,
    );

    expect(getByText('Before')).toBeInTheDocument();
    expect(getByText('Before').parentNode).toHaveAttribute(
      'data-trc-button--has-children',
    );
  });

  it('renders an after component', () => {
    const AfterComponent = (): React.ReactElement => <span>After</span>;
    const { getByText } = render(
      <Button afterComponent={AfterComponent}>{buttonText}</Button>,
    );

    expect(getByText('After')).toBeInTheDocument();
    expect(getByText('After').parentNode).toHaveAttribute(
      'data-trc-button--has-children',
    );
  });

  it('renders an after node', () => {
    const { getByText } = render(
      <Button afterNode={<span>After</span>}>{buttonText}</Button>,
    );

    expect(getByText('After')).toBeInTheDocument();
    expect(getByText('After').parentNode).toHaveAttribute(
      'data-trc-button--has-children',
    );
  });
});
