import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import type { Order } from "../../data/mockOrders";
import { Spinner } from "../ui/spinner";

// Simple date formatter
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

interface OrderListProps {
  orders: Order[];
  loading: boolean;
  error: string | null;
}

export const OrderList = ({ orders, loading, error }: OrderListProps) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center h-40">
        <Spinner className="h-8 w-8" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded-lg text-red-600 text-center">
        {error}
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="bg-gray-50 p-6 rounded-lg text-center text-gray-500">
        No orders found for this student.
      </div>
    );
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Snack</TableHead>
            <TableHead className="text-right">Quantity</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="whitespace-nowrap">
                {formatDate(order.orderDate)}
              </TableCell>
              <TableCell className="font-medium">{order.snackName}</TableCell>
              <TableCell className="text-right">{order.quantity}</TableCell>
              <TableCell className="text-right">₹{order.price.toFixed(2)}</TableCell>
              <TableCell className="text-right font-medium">
                ₹{order.totalAmount.toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
