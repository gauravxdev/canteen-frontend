import { Card, CardContent } from "./ui/card"
import { students as initialStudents } from "../data/students.mock"
import { useStudents } from "../hooks/useStudents"
import StudentTable from "./students/StudentTable"
import AddStudentDialog from "./students/AddStudentDialog"
import StudentsPageHeader from "./students/StudentsPageHeader"

const StudentsPage = () => {
  const { students, isDialogOpen, setIsDialogOpen, addStudent } = useStudents(initialStudents)

  const handleAddStudent = (name: string) => {
    addStudent(name)
  }

  return (
    <div className="container mx-auto py-6">
      <Card className="relative">
        <StudentsPageHeader onAddStudent={() => setIsDialogOpen(true)} />
        <CardContent>
          <StudentTable students={students} />
        </CardContent>
      </Card>

      <AddStudentDialog 
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onAddStudent={handleAddStudent}
      />
    </div>
  )
}

export default StudentsPage