import { renderHook } from '@testing-library/react-hooks';
import useIsMounted from './useIsMounted';

describe('useIsMounted hook', () => {
  it('indicates when the component is mounted', () => {
    const { result, unmount } = renderHook(() => useIsMounted());
    expect(result.current.current).toBe(true);
    unmount();
    expect(result.current.current).toBe(false);
  });
});
