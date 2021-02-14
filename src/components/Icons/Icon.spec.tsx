import { render } from '@testing-library/react';
import * as React from 'react';
import Icon from './Icon';

describe('Icon', () => {
  it('works with default size', () => {
    const { getByText } = render(<Icon>Hello</Icon>);
    expect(getByText('Hello')).toHaveAttribute('width', '16');
    expect(getByText('Hello')).toHaveAttribute('height', '16');
  });

  it('works with different size', () => {
    const { getByText } = render(<Icon size={24}>Hello</Icon>);
    expect(getByText('Hello')).toHaveAttribute('width', '24');
    expect(getByText('Hello')).toHaveAttribute('height', '24');
  });
});
