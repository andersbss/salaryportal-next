import z from 'zod';

export const ErrorLogInputSchema = z.object({
  message: z.string(),
  stack: z.string(),
});
export type ErrorLogInput = z.infer<typeof ErrorLogInputSchema>;
