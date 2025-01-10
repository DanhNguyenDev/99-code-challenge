import { ZodSchema, ZodError } from 'zod'
import { Request, Response, NextFunction } from 'express'

export const validate = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  try {
    schema.parse(req)
    next()
  } catch (error) {
    if (error instanceof ZodError) {
      console.log({ error: error.format() })
      const errorMessage = error.errors.map((details) => `${details.path.join('.')}: ${details.message}`).join(', ')

      res.status(400).send({ message: errorMessage, status: 400 })
    }
    return next(error)
  }
}
