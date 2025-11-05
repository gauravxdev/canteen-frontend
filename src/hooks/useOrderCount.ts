import { useMemo } from 'react';

// Mock order counts - in a real app, this would come from an API
const MOCK_ORDER_COUNTS: Record<string, number> = {
  '1': 15,
  '2': 8,
  '3': 22,
  '4': 5,
  '5': 17,
  '6': 12,
  '7': 9,
  '8': 25,
  '9': 13,
  '10': 6,
};

export const useOrderCount = (mealId: string) => {
  return useMemo(() => {
    // Return the pre-defined count if it exists, otherwise generate a random one
    return MOCK_ORDER_COUNTS[mealId] || Math.floor(Math.random() * 50);
  }, [mealId]);
};
