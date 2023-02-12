import z from 'zod';

export const GetKartverketCountiesInputSchema = z.array(
  z.object({
    fylkesnavn: z.string(),
    fylkesnummer: z.string(),
  })
);
export type GetKartverketCountiesInput = z.infer<typeof GetKartverketCountiesInputSchema>;
