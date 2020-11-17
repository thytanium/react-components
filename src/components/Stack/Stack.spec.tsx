import * as React from 'react';
import { render } from '@testing-library/react';
import Stack from './Stack';

describe('Stack component and context', () => {
  it('passes correct zIndex to children', () => {
    const { getByText } = render(
      <Stack>
        {zIndex0 => (
          <>
            <span>{`zIndex0 = ${zIndex0}`}</span>
            <Stack>{zIndex1 => <span>{`zIndex1 = ${zIndex1}`}</span>}</Stack>
          </>
        )}
      </Stack>,
    );

    expect(getByText('zIndex0 = 1')).toBeInTheDocument();
    expect(getByText('zIndex1 = 2')).toBeInTheDocument();
  });

  it('overrides z-index value with prop', () => {
    const { getByText } = render(
      <Stack value={5}>{zIndex => `zIndex = ${zIndex}`}</Stack>,
    );

    expect(getByText('zIndex = 6')).toBeInTheDocument();
  });

  it('prevents z-index override with prop lower than current value', () => {
    const { getByText } = render(
      <Stack value={5}>
        {() => <Stack value={1}>{zIndex => `zIndex = ${zIndex}`}</Stack>}
      </Stack>,
    );

    expect(getByText('zIndex = 7')).toBeInTheDocument();
  });
});
