import { z } from 'zod';

const envSchema = z.object({
  PORT: z.coerce.number().optional().default(3333),
  NODE_ENV: z.string().default('dev'),
});

export { envSchema };
