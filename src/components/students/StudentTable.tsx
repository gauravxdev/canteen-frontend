import { Button } from "../ui/button";
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Student } from "../../data/students.mock";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

interface StudentTableProps {
  students: Student[];
}

const StudentTable = ({ students }: StudentTableProps) => {
  return (
    <Table>
      <TableCaption>A list of students and their spending.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Referral Code</TableHead>
          <TableHead className="text-right">Total Spent (₹)</TableHead>
          <TableHead className="w-[100px] text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {students.map((student) => (
          <TableRow key={student.id}>
            <TableCell className="font-mono text-sm">{student.id}</TableCell>
            <TableCell className="font-medium">{student.name}</TableCell>
            <TableCell className="font-mono">{student.referralCode}</TableCell>
            <TableCell className="text-right font-mono">
              {student.totalSpent.toFixed(2)}
            </TableCell>
            <TableCell className="text-right">
              <Button asChild variant="ghost" size="sm">
                <Link to={`/students/${student.id}`} className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  <span className="sr-only">View</span>
                </Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StudentTable;
