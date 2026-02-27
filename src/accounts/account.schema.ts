import { z } from "zod";

export const CreateAccountSchema = z.object({
  id: z.uuid().optional(),
  name: z.string().optional(),
  direction: z.enum(['debit', 'credit']),
  balance: z.number().optional().default(0)
})

export type CreateAccountDTO = z.infer<typeof CreateAccountSchema>