import { MOCK_ORDERS } from './mockOrders';
import { studentData } from './studentData';

export type Student = {
  id: string;
  name: string;
  referralCode: string;
  totalSpent: number;
}

// Helper function to calculate total spent from orders
const calculateTotalSpent = (studentId: string): number => {
  if (!MOCK_ORDERS) return 0;
  return MOCK_ORDERS
    .filter(order => order.studentId === studentId)
    .reduce((sum, order) => sum + order.totalAmount, 0);
};

// Create students with calculated total spent
export const students: Student[] = studentData.map(student => ({
  ...student,
  totalSpent: calculateTotalSpent(student.id)
}));
