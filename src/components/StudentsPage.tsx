import { Card, CardContent } from "./ui/card"
import { useStudents } from "../hooks/useStudents"
import StudentTable from "./students/StudentTable"
import StudentsPageHeader from "./students/StudentsPageHeader"
import AddStudentDialog from "./students/AddStudentDialog"

const StudentsPage = () => {
  const { students, isDialogOpen, setIsDialogOpen, addStudent } = useStudents()

  return (
    <div className="container mx-auto py-6">
      <Card className="relative">
        <StudentsPageHeader />
        <CardContent>
          <StudentTable students={students} />
        </CardContent>
      </Card>
      <AddStudentDialog
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onAddStudent={addStudent}
      />
    </div>
  )
}

export default StudentsPage