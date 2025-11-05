import { useEffect, useState } from 'react';
import { getStudentOrders } from '../data/mockOrders';
import type { Order } from '../data/mockOrders';

export const useStudentOrders = (studentId: string) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        // Simulate API call
        const data = await new Promise<Order[]>((resolve) => {
          setTimeout(() => {
            resolve(getStudentOrders(studentId));
          }, 500);
        });
        setOrders(data);
      } catch (err) {
        setError('Failed to fetch orders');
        console.error('Error fetching orders:', err);
      } finally {
        setLoading(false);
      }
    };

    if (studentId) {
      fetchOrders();
    }
  }, [studentId]);

  return { orders, loading, error };
};
