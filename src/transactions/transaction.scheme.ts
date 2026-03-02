import { z } from 'zod';
import { CreateEntrySchema } from '../entries/entry.schema';

export const CreateTransactionSchema = z.object({
    id: z.uuid().optional(),
    name: z.string().optional(),
    entries: z.array(CreateEntrySchema)
})

export type CreateTransactionDto = z.infer<typeof CreateTransactionSchema>