import { z } from 'zod';
import { envSchema } from './env';

type Env = z.infer<typeof envSchema>;

export { Env };
