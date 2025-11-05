import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type { Student } from '../data/students.mock';
import { toast } from 'sonner';

const fetchStudents = async (): Promise<Student[]> => [];

const addStudentToApi = async (student: Omit<Student, 'id'>): Promise<Student> => ({
  ...student,
  id: `std-${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`,
});

export const useStudents = (initialStudents: Student[] = []) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const queryClient = useQueryClient();

  const { data: students = initialStudents } = useQuery<Student[]>({
    queryKey: ['students'],
    queryFn: fetchStudents,
    initialData: initialStudents,
    staleTime: 300000, // 5 minutes
  });

  const addStudentMutation = useMutation({
    mutationFn: async (name: string) => {
      const namePart = name.replace(/\s+/g, '').toUpperCase().slice(0, 5);
      const newStudent: Omit<Student, 'id'> = {
        name: name.trim(),
        referralCode: `${namePart}${String(students.length + 1).padStart(2, '0')}`,
        totalSpent: 0,
      };
      return addStudentToApi(newStudent);
    },
    onSuccess: (newStudent) => {
      queryClient.setQueryData<Student[]>(['students'], (old = []) => [...old, newStudent]);
      toast.success('Student added!', {
        description: `${newStudent.name} added with ID: ${newStudent.id}`,
      });
      setIsDialogOpen(false);
    },
    onError: (error) => {
      toast.error('Failed to add student', {
        description: error instanceof Error ? error.message : 'An error occurred',
      });
    },
  });

  return {
    students,
    isDialogOpen,
    setIsDialogOpen,
    addStudent: addStudentMutation.mutate,
    isLoading: addStudentMutation.isPending,
  };
};
