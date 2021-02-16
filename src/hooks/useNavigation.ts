import { useCallback, useState } from 'react';

export default function useNavigation(defaultSelectedIndex?: number) {
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
