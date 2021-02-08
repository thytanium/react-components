import { render } from '@testing-library/react';
import * as React from 'react';
import Overlay from './Overlay';

describe('Overlay', () => {
  it('shows inner content', () => {
    const { getByText } = render(<Overlay>test</Overlay>);
    expect(getByText('test')).toBeInTheDocument();
  });
});
