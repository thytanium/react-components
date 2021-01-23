import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import 'jest-localstorage-mock';
import useDarkMode from './useDarkMode';

beforeEach(() => {
  jest.resetAllMocks();
  window.localStorage.clear();
});

describe('useDarkMode hook', () => {
  it('retrieves dark mode setting', () => {
    const { result } = renderHook(() => useDarkMode());
    const [darkModeEnabled, setDarkMode] = result.current;

    expect(window.localStorage.getItem).toHaveBeenCalledWith(
      'dark-mode-enabled',
    );
    expect(darkModeEnabled).toBe(false);

    act(() => {
      setDarkMode(true);
    });

    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      'dark-mode-enabled',
      'true', // values are JSON-stringified
    );
    expect(result.current[0]).toBe(true);
  });
});
