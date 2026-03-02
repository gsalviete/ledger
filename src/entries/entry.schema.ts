import { z } from 'zod';

export const CreateEntrySchema = z.object({
    id: z.uuid().optional(),
    direction: z.enum(['debit', 'credit']),
    account_id: z.uuid(),
    amount: z.number().default(0)
})

export type CreateEntryDto = z.infer<typeof CreateEntrySchema>