import 'jest-localstorage-mock';
import { act, renderHook } from '@testing-library/react-hooks';
import useLocalStorage from './useLocalStorage';

beforeEach(() => {
  window.localStorage.clear();
  jest.resetAllMocks();
});

const STORAGE_KEY = 'test';
const STORAGE_INITIAL_VALUE = '1';
const STORAGE_NEW_VALUE = '2';

function expectSetItemMockCall(key: string, value: string): void {
  expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
  expect(window.localStorage.getItem).toHaveBeenCalledWith(key);
  expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
  expect(window.localStorage.setItem).toHaveBeenCalledWith(
    key,
    JSON.stringify(value),
  );
}

describe('useLocalStorage hook', () => {
  it('retrieves initial value', () => {
    const { result } = renderHook(() =>
      useLocalStorage(STORAGE_KEY, STORAGE_INITIAL_VALUE),
    );
    const [storedValue] = result.current;
    expect(storedValue).toBe('1');
  });

  it('saves a new value', () => {
    const { result } = renderHook(() =>
      useLocalStorage(STORAGE_KEY, STORAGE_INITIAL_VALUE),
    );
    const [, setValue] = result.current;

    act(() => {
      setValue(STORAGE_NEW_VALUE);
    });

    expectSetItemMockCall(STORAGE_KEY, STORAGE_NEW_VALUE);
    expect(result.current[0]).toBe(STORAGE_NEW_VALUE);
  });

  it('saves a new value with callback', () => {
    const { result } = renderHook(() =>
      useLocalStorage(STORAGE_KEY, STORAGE_INITIAL_VALUE),
    );
    const [, setValue] = result.current;

    act(() => {
      setValue(() => STORAGE_NEW_VALUE);
    });

    expectSetItemMockCall(STORAGE_KEY, STORAGE_NEW_VALUE);
    expect(result.current[0]).toBe(STORAGE_NEW_VALUE);
  });
});
