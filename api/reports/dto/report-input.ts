import Joi from 'joi';
import { Sector, WorkPlace } from '../constants';

// Get by id
export type GetReportByIdInput = {
  id: string;
};
export const GetReportByIdInputSchema = Joi.object({
  id: Joi.string().required(),
});

// Create
export type CreateReportInput = {
  // Required
  jobTitle: string;
  age: number;
  field: string;
  sector: Sector;
  totalYearlySalary: number;
  county: string;
  workPlace: WorkPlace;
  degrees: string[];
  tags: string[];
  totalYearsExperienceInField: number;
  yearsInCurrentRole: number;
  workTimePercent: number;
  vacationDays: number;
  workFlow: string;

  // Optional
  leaderShipPosition: boolean | null;
  graduateYear: number | null;
  graduateSchool: string | null;
  city: string | null;
  flextime: boolean | null;
  seniority: string | null;
  hourlyWage: string | null;
  overtimePercentage: number | null;
  benefits: string[] | null;
  otherCompensation: string[] | null;
  otherComments: string | null;
};
export const CreateReportInputSchema = Joi.object<CreateReportInput>({
  // Required
  jobTitle: Joi.string().required(),
  age: Joi.number().required(),
  field: Joi.string().required(),
  sector: Joi.string().required(),
  totalYearlySalary: Joi.number().required(),
  county: Joi.string().required(),
  workPlace: Joi.string().required(),
  degrees: Joi.array().items(Joi.string()).required(),
  tags: Joi.array().items(Joi.string()).required(),
  totalYearsExperienceInField: Joi.number().required(),
  yearsInCurrentRole: Joi.number().required(),
  workTimePercent: Joi.number().required(),
  vacationDays: Joi.number().required(),
  workFlow: Joi.string().required(),

  // Optional
  leaderShipPosition: Joi.boolean().allow(null).required(),
  graduateYear: Joi.number().allow(null).required(),
  graduateSchool: Joi.string().allow(null).required(),
  city: Joi.string().allow(null).required(),
  flextime: Joi.boolean().allow(null).required(),
  seniority: Joi.string().allow(null).required(),
  hourlyWage: Joi.string().allow(null).required(),
  overtimePercentage: Joi.number().allow(null).required(),
  benefits: Joi.array().items(Joi.string()).allow(null).required(),
  otherCompensation: Joi.array().items(Joi.string()).allow(null).required(),
  otherComments: Joi.string().allow(null).required(),
});

// Delete
export type DeleteReportInput = {
  id: string;
};
export const DeleteReportInputSchema = Joi.object<DeleteReportInput>({
  id: Joi.string().required(),
});
