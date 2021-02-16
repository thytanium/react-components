import { useCallback, useState } from 'react';

interface UseNavigationResult {
  selectedIndex?: number;
  setSelectedIndex: (value?: number) => void;
  isCurrentIndex: (index: number) => boolean;
}

export default function useNavigation(
  defaultSelectedIndex?: number,
): UseNavigationResult {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(
    defaultSelectedIndex,
  );

  return {
    selectedIndex,
    setSelectedIndex,
    isCurrentIndex: useCallback(index => selectedIndex === index, [
      selectedIndex,
    ]),
  };
}
