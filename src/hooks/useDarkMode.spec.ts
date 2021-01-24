import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import useDarkMode from './useDarkMode';

beforeEach(() => {
  window.localStorage.clear();
});

describe('useDarkMode hook', () => {
  it('retrieves dark mode setting', () => {
    const { result } = renderHook(() => useDarkMode());
    const [darkModeEnabled, setDarkMode] = result.current;

    expect(darkModeEnabled).toBe(false);

    act(() => {
      setDarkMode(true);
    });

    expect(window.localStorage.getItem('dark-mode-enabled')).toBe('true');
    expect(result.current[0]).toBe(true);
  });
});
