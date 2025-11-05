import { studentData } from './studentData';

// Sample snack data to use in orders
const SNACKS = [
  { id: 's1', name: 'Veg Sandwich', price: 30 },
  { id: 's2', name: 'Burger', price: 50 },
  { id: 's3', name: 'Pizza Slice', price: 80 },
  { id: 's4', name: 'Samosa', price: 15 },
  { id: 's5', name: 'Cold Drink', price: 25 },
];

export type Order = {
  id: string;
  studentId: string;
  snackId: string;
  snackName: string;
  price: number;
  quantity: number;
  totalAmount: number;
  orderDate: string;
};

// Helper function to generate a simple ID
const generateOrderId = (index: number) => `order-${Date.now()}-${index}`;

// Generate mock orders for the students
const generateMockOrders = (): Order[] => {
  const orders: Order[] = [];
  const currentDate = new Date();
  let orderIndex = 1;
  
  // Generate 3-7 orders per student
  studentData.forEach((student: { id: string }) => {
    const orderCount = Math.floor(Math.random() * 5) + 3; // 3-7 orders per student
    
    for (let i = 0; i < orderCount; i++) {
      const daysAgo = Math.floor(Math.random() * 30); // Orders from last 30 days
      const orderDate = new Date(currentDate);
      orderDate.setDate(orderDate.getDate() - daysAgo);
      
      const snack = SNACKS[Math.floor(Math.random() * SNACKS.length)];
      const quantity = Math.floor(Math.random() * 3) + 1; // 1-3 items per order
      
      orders.push({
        id: generateOrderId(orderIndex++),
        studentId: student.id,
        snackId: snack.id,
        snackName: snack.name,
        price: snack.price,
        quantity,
        totalAmount: snack.price * quantity,
        orderDate: orderDate.toISOString(),
      });
    }
  });
  
  // Sort orders by date (newest first)
  return orders.sort((a, b) => 
    new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime()
  );
};

export const MOCK_ORDERS = generateMockOrders();

// Helper functions
export const getStudentOrders = (studentId: string): Order[] => {
  return MOCK_ORDERS.filter(order => order.studentId === studentId);
};

export const addOrder = (order: Omit<Order, 'id' | 'orderDate'>): Order => {
  const newOrder: Order = {
    ...order,
    id: generateOrderId(MOCK_ORDERS.length + 1),
    orderDate: new Date().toISOString(),
  };
  
  MOCK_ORDERS.unshift(newOrder); // Add to beginning of array
  return newOrder;
};
