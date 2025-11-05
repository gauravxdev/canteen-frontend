import { useState } from "react"
import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

interface AddStudentDialogProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  onAddStudent: (name: string) => void
}

const AddStudentDialog = ({
  isOpen,
  onOpenChange,
  onAddStudent,
}: AddStudentDialogProps) => {
  const [name, setName] = useState("")

  const handleSubmit = () => {
    if (!name.trim()) return
    onAddStudent(name.trim())
    setName("")
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Student</DialogTitle>
          <DialogDescription>
            Enter the student's name and click Add when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
              placeholder="Student name"
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={!name.trim()}
            className="bg-black text-white hover:bg-gray-800"
          >
            Add Student
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AddStudentDialog
