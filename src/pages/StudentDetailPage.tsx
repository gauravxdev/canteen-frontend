import { useParams, useNavigate } from 'react-router-dom';
import { useStudentOrders } from '../hooks/useStudentOrders';
import { students } from '../data/students.mock';
import { StudentInfoCard } from '../components/students/StudentInfoCard';
import { OrderList } from '../components/students/OrderList';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';

export const StudentDetailPage = () => {
  const { studentId } = useParams<{ studentId: string }>();
  const navigate = useNavigate();
  const { orders, loading, error } = useStudentOrders(studentId || '');
  
  // Find the student data
  const student = students.find(s => s.id === studentId);
  
  if (!student) {
    return (
      <div className="container mx-auto p-6">
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">
          Student not found
        </div>
      </div>
    );
  }
  
  // Calculate total spent from orders if available, otherwise use the student's totalSpent
  const totalSpent = orders.length > 0 
    ? orders.reduce((sum, order) => sum + order.totalAmount, 0)
    : student.totalSpent;

  return (
    <div className="container mx-auto p-4 md:p-6">
      <Button 
        variant="ghost" 
        onClick={() => navigate(-1)}
        className="mb-4 flex items-center gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Students
      </Button>
      
      <div className="space-y-6">
        <StudentInfoCard 
          student={student}
          totalOrders={orders.length}
          totalSpent={totalSpent}
        />
        
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-lg font-semibold">Order History</h2>
            <Button 
              variant="outline"
              onClick={() => {
                // Navigate to snacks page with student ID in state
                navigate('/snacks', { state: { studentId: student.id } });
              }}
            >
              New Order
            </Button>
          </div>
          <div className="p-4">
            <OrderList 
              orders={orders}
              loading={loading}
              error={error}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetailPage;
