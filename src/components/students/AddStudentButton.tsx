import { Button } from "../ui/button"

interface AddStudentButtonProps {
  onClick: () => void
}

const AddStudentButton = ({ onClick }: AddStudentButtonProps) => (
  <div className="absolute right-4 top-4">
    <Button
      onClick={onClick}
      className="bg-black text-white hover:bg-gray-800"
    >
      Add Student
    </Button>
  </div>
)

export default AddStudentButton
