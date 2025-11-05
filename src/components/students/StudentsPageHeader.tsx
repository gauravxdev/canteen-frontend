import { CardHeader, CardTitle } from "../ui/card"
import AddStudentButton from "./AddStudentButton"

interface StudentsPageHeaderProps {
  onAddStudent: () => void
}

const StudentsPageHeader = ({ onAddStudent }: StudentsPageHeaderProps) => (
  <CardHeader>
    <CardTitle>Student Records</CardTitle>
    <AddStudentButton onClick={onAddStudent} />
  </CardHeader>
)

export default StudentsPageHeader
