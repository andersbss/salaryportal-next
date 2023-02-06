import { Gender } from '@api/reports/dto';

export type PersonalInfoFormInput = {
  age: number | null;
  gender: string;
  genderId: Gender | null;
  county: string;
};
