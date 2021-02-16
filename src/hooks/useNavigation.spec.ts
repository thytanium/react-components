import { renderHook } from '@testing-library/react-hooks';
import useNavigation from './useNavigation';

describe('useNavigation hook', () => {
  it('initializes default undefined index', () => {
    const { result } = renderHook(() => useNavigation());
    expect(result.current.selectedIndex).toBeUndefined();
  });

  it('holds default index', () => {
    const { result } = renderHook(() => useNavigation(0));
    expect(result.current.selectedIndex).toBe(0);
  });

  it('checks current index', () => {
    const { result } = renderHook(() => useNavigation(0));
    expect(result.current.isCurrentIndex(1)).toBe(false);
  });
});
