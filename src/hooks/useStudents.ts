import { useStudentContext } from '../contexts/StudentContext';

export const useStudents = () => {
  return useStudentContext();
};
