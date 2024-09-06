import { z } from 'zod';

const envSchema = z.object({
  PORT: z.coerce.number().optional().default(3333),
});

export { envSchema };
