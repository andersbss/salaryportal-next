import { RouterOutput } from '@client/trpc';

//TOOD: Find better enum/literal type solution
export type Gender = keyof RouterOutput['enums']['gender'];

export type PersonalInfoFormInput = {
  age: number | null;
  gender: string;
  genderId: Gender | null;
  county: string;
  countyId: string;
};
