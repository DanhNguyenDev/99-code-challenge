import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  PORT: z.string().transform(Number),
  POSTGRES_HOST: z.string(),
  POSTGRES_USER: z.string(),
  POSTGRES_DB: z.string(),
  POSTGRES_PASSWORD: z.string(),
  POSTGRES_PORT: z.string().transform(Number),
});

const parsedEnv = envSchema.parse(process.env);

export const ConfigApp = {
  PORT: parsedEnv.PORT,
  POSTGRES_HOST: parsedEnv.POSTGRES_HOST,
  POSTGRES_USER: parsedEnv.POSTGRES_USER,
  POSTGRES_DB: parsedEnv.POSTGRES_DB,
  POSTGRES_PASSWORD: parsedEnv.POSTGRES_PASSWORD,
  POSTGRES_PORT: parsedEnv.POSTGRES_PORT,
};
