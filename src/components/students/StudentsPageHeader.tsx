import { CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { useStudents } from "../../hooks/useStudents"
import { Plus } from "lucide-react"

const StudentsPageHeader = () => {
  const { setIsDialogOpen } = useStudents()

  return (
    <CardHeader className="flex flex-row items-center justify-between">
      <CardTitle>Student Records</CardTitle>
      <Button 
        onClick={() => setIsDialogOpen(true)}
        className="bg-black text-white hover:bg-gray-800"
      >
        <Plus className="mr-2 h-4 w-4" />
        Add Student
      </Button>
    </CardHeader>
  )
}

export default StudentsPageHeader
