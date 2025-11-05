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
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const studentFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
})

type StudentFormValues = z.infer<typeof studentFormSchema>

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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<StudentFormValues>({
    resolver: zodResolver(studentFormSchema),
    defaultValues: {
      name: "",
    },
  })

  const onSubmit = (data: StudentFormValues) => {
    onAddStudent(data.name.trim())
    reset()
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      onOpenChange(open)
      if (!open) reset()
    }}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              <div className="col-span-3 space-y-1">
                <Input
                  id="name"
                  {...register('name')}
                  className={`${errors.name ? 'border-red-500' : ''}`}
                  placeholder="Student name"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-black text-white hover:bg-gray-800"
            >
              {isSubmitting ? 'Adding...' : 'Add Student'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}

export default AddStudentDialog
