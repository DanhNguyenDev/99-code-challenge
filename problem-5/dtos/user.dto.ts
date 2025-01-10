import { z } from 'zod'
export const createUserDto = z.object({
  body: z.object({
    name: z.string(),
    active: z.boolean().optional()
  })
})

export const updateUserDto = z.object({
  params: z.object({ id: z.string().uuid() }),
  body: z.object({
    name: z.string().optional(),
    active: z.boolean().optional()
  })
})
