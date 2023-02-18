import { RouterOutput } from '@client/trpc';

export type Degree = {
  // Required
  name: string;
  graduateYear: number;
  yearsInSchool: number;
  grade: string;

  // Optional
  graduateSchool: string | null;
  averageGrade: string | null;
};

export type EducationFormInput = {
  degrees: Degree[];
};
