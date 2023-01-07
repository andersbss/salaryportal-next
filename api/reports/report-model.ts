import { Schema as MongooseSchema, model, models } from 'mongoose';
import { Sector, WorkFlow, WorkPlace } from './constants';

export interface ReportModel {
  // Required
  id: string;
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
  workFlow: WorkFlow;

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
}

const Schema = new MongooseSchema<ReportModel>({
  jobTitle: {
    type: String,
    required: true,
  },
  field: {
    type: String,
    required: true,
  },
  sector: {
    type: String,
    required: true,
  },
  totalYearlySalary: {
    type: Number,
    required: true,
  },
  county: {
    type: String,
    required: true,
  },
  workPlace: {
    type: String,
    required: true,
  },
  degrees: {
    type: [String],
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  totalYearsExperienceInField: {
    type: Number,
    required: true,
  },
  yearsInCurrentRole: {
    type: Number,
    required: true,
  },
  workTimePercent: {
    type: Number,
    required: true,
  },
  vacationDays: {
    type: Number,
    required: true,
  },
  workFlow: {
    type: String,
    required: true,
  },

  leaderShipPosition: {
    type: Boolean,
    required: false,
  },
  graduateYear: {
    type: Number,
    required: false,
  },
  graduateSchool: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  flextime: {
    type: Boolean,
    required: false,
  },
  seniority: {
    type: String,
    required: false,
  },
  hourlyWage: {
    type: String,
    required: false,
  },
  overtimePercentage: {
    type: Number,
    required: false,
  },
  benefits: {
    type: [String],
    required: false,
  },
  otherCompensation: {
    type: [String],
    required: false,
  },
  otherComments: {
    type: String,
    required: false,
  },
});

const ReportModelSchema = models.Report || model<ReportModel>('Report', Schema);

export default ReportModelSchema;
