import type { Student } from "../../data/students.mock"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"

interface StudentTableProps {
  students: Student[]
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
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default StudentTable
