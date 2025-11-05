import { useState } from "react"
import type { Student } from "../data/students.mock"
import { toast } from "sonner"

export const useStudents = (initialStudents: Student[]) => {
  const [students, setStudents] = useState<Student[]>(initialStudents)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const addStudent = (name: string) => {
    try {
      const newId = `std-${String(students.length + 1).padStart(3, '0')}`
      const namePart = name.replace(/\s+/g, '').toUpperCase().slice(0, 5)
      const idPart = newId.slice(-2)
      const newReferralCode = `${namePart}${idPart}`

      const newStudent: Student = {
        id: newId,
        name: name.trim(),
        referralCode: newReferralCode,
        totalSpent: 0,
      }

      setStudents((prev) => {
        const updatedStudents = [...prev, newStudent]
        // Show success toast with student details
        toast.success('Student added successfully!', {
          description: `${newStudent.name} has been added with ID: ${newStudent.id}`,
        })
        return updatedStudents
      })
    } catch (error) {
      // Show error toast if something goes wrong
      toast.error('Failed to add student', {
        description: 'An error occurred while adding the student. Please try again.',
      })
    }
  }

  return {
    students,
    isDialogOpen,
    setIsDialogOpen,
    addStudent,
  }
}
