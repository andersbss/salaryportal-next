import z from 'zod';
import {
  Sector,
  WorkLocation,
  WorkFlow,
  Gender,
  AverageGrade,
  EducationGrade,
  PaymentInterval,
  CompanySize,
} from '@prisma/client';

export const CreateReportInputSchema = z.object({
  personalInformation: z.object({
    // Required
    age: z.number(),
    gender: z.nativeEnum(Gender),
    county: z.string(),
  }),

  education: z.object({
    // Required
    degrees: z.array(
      z.object({
        // Required
        name: z.string(),
        graduateYear: z.number(),
        yearsInSchool: z.number(),
        grade: z.nativeEnum(EducationGrade),

        // Optional
        graduateSchool: z.string().nullable(),
        averageGrade: z.nativeEnum(AverageGrade).nullable(),
      })
    ),
  }),

  currentJob: z.object({
    // Required
    jobTitle: z.string(),
    field: z.string(),
    estimatedTotalYearlySalary: z.number(),
    county: z.string(),
    tags: z.array(z.string()),
    years: z.number(),
    workTimePercentage: z.number(),
    vacationDays: z.number(),
    workLocation: z.enum([WorkLocation.Remote, WorkLocation.Office, WorkLocation.Hybrid]),
    workFlow: z.nativeEnum(WorkFlow),
    paymentInterval: z.nativeEnum(PaymentInterval),
    sector: z.nativeEnum(Sector),

    // Optional
    leadership: z.boolean().nullable(),
    flexTime: z.boolean().nullable(),
    seniority: z.string().nullable(),
    hourlyWage: z.string().nullable(),
    overtime: z.boolean().nullable(),
    overTimePercentage: z.number().nullable(),
    bonusPercentage: z.number().nullable(),
    stockOptions: z.boolean().nullable(),
    companySize: z.nativeEnum(CompanySize).nullable(),
    rotation: z.boolean().nullable(),
    shiftWork: z.boolean().nullable(),
    estimatedWeeklyHours: z.number().nullable(),
    otherCompensation: z.array(z.string()).nullable(),
    otherBenefits: z.array(z.string()).nullable(),
    otherComments: z.string().nullable(),
  }),
});
export type CreateReportInput = z.infer<typeof CreateReportInputSchema>;

// Get by id
export const GetReportByIdInputSchema = z.object({
  id: z.string(),
});
export type GetReportByIdInput = z.infer<typeof GetReportByIdInputSchema>;

export const DeleteReportInputSchema = z.object({
  id: z.string(),
});
export type DeleteReportInput = z.infer<typeof DeleteReportInputSchema>;
