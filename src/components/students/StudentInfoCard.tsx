import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import type { Student } from "../../data/students.mock";

interface StudentInfoCardProps {
  student: Student;
  totalOrders: number;
  totalSpent: number;
}

export const StudentInfoCard = ({ student, totalOrders, totalSpent }: StudentInfoCardProps) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{student.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Student ID</p>
            <p className="font-medium">{student.id}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Referral Code</p>
            <p className="font-mono">{student.referralCode}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">Total Orders</p>
            <p className="font-medium">{totalOrders}</p>
          </div>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <p className="text-sm text-green-600 font-medium">Total Amount Spent</p>
          <p className="text-2xl font-bold text-green-700">₹{totalSpent.toFixed(2)}</p>
        </div>
      </CardContent>
    </Card>
  );
};
