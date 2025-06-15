import { z } from 'zod';

export const patientSchema = z.object({
    name: z.string(),
    id: z.string().uuid().optional(),
});

export type Patient = z.infer<typeof patientSchema>;
