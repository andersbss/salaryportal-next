import { Gender } from '@server/modules/reports/client';

export type PersonalInfoFormInput = {
  age: number | null;
  gender: string;
  genderId: Gender | null;
  county: string;
  countyId: string;
};
