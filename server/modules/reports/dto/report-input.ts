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

// Re export prisma enums
export { Sector } from '@prisma/client';
export { WorkLocation } from '@prisma/client';
export { WorkFlow } from '@prisma/client';
export { Gender } from '@prisma/client';
export { AverageGrade } from '@prisma/client';
export { EducationGrade } from '@prisma/client';
export { PaymentInterval } from '@prisma/client';
export { CompanySize } from '@prisma/client';

export const CreateReportInputSchema = z.object({
  personalInformation: z.object({
    // Required
    age: z.number(),
    gender: z.enum([Gender.Male, Gender.Female, Gender.Other]),
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
        grade: z.enum([
          EducationGrade.PrimarySchool,
          EducationGrade.HighSchool,
          EducationGrade.CertificateOfApprenticeship,
          EducationGrade.VocationalSchool,
          EducationGrade.Bachelor,
          EducationGrade.Master,
          EducationGrade.PhD,
        ]),

        // Optional
        graduateSchool: z.string().nullable(),
        averageGrade: z
          .enum([AverageGrade.A, AverageGrade.B, AverageGrade.C, AverageGrade.D, AverageGrade.E, AverageGrade.F])
          .nullable(),
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
    workFlow: z.enum([
      WorkFlow.CallGuard,
      WorkFlow.FullTime,
      WorkFlow.PartTime,
      WorkFlow.Freelance,
      WorkFlow.Substitute,
      WorkFlow.Internship,
    ]),
    paymentInterval: z.enum([
      PaymentInterval.Monthly,
      PaymentInterval.Yearly,
      PaymentInterval.Hourly,
      PaymentInterval.Weekly,
      PaymentInterval.Daily,
    ]),
    sector: z.enum([Sector.Private, Sector.Public]),

    // Optional
    leadership: z.boolean().nullable(),
    flexTime: z.boolean().nullable(),
    seniority: z.string().nullable(),
    hourlyWage: z.string().nullable(),
    overtime: z.boolean().nullable(),
    overTimePercentage: z.number().nullable(),
    bonusPercentage: z.number().nullable(),
    stockOptions: z.boolean().nullable(),
    companySize: z.enum([CompanySize.Small, CompanySize.Medium, CompanySize.Large]).nullable(),
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
