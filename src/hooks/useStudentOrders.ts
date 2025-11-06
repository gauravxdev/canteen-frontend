import { useQuery } from '@tanstack/react-query';
import { getStudentOrders } from '../data/mockOrders';
import type { Order } from '../data/mockOrders';

const fetchStudentOrders = async (studentId: string): Promise<Order[]> => {
  // Simulate API call with delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getStudentOrders(studentId));
    }, 500);
  });
};

export const useStudentOrders = (studentId: string) => {
  const { 
    data: orders = [], 
    isLoading: loading, 
    error, 
    refetch 
  } = useQuery<Order[], Error>({
    queryKey: ['studentOrders', studentId],
    queryFn: () => fetchStudentOrders(studentId),
    enabled: !!studentId,
    staleTime: 300000, // 5 minutes
    retry: 1,
  });

  return { 
    orders, 
    loading, 
    error: error?.message || null,
    refetch 
  };
};
