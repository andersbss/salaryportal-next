import { RouterOutput } from '@client/trpc';

export type AverageGrade = keyof RouterOutput['reports']['enums']['averageGrade'];
export type EducationGrade = keyof RouterOutput['reports']['enums']['educationGrade'];

export type Degree = {
  // Required
  name: string;
  graduateYear: number | null;
  yearsInSchool: number | null;
  grade: string;
  gradeId: EducationGrade | null;

  // Optional
  graduateSchool: string | null;
  averageGrade: string | null;
  averageGradeId: AverageGrade | null;
};

export type EducationFormInput = {
  degrees: Degree[];
};
