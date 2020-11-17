import useLocalStorage from './useLocalStorage';

export default function useDarkMode(): [boolean, (value: boolean) => void] {
  const [enabledState, setEnabledState] = useLocalStorage<boolean>(
    'dark-mode-enabled',
    false,
  );

  return [enabledState, setEnabledState];
}
