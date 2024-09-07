import { z } from 'zod';

const createFarmSchema = z.object({
  name: z.string(),
  city: z.string(),
  state: z.string(),
  totalArea: z.number(),
  cultivableArea: z.number(),
  vegetationArea: z.number(),
  cultures: z.array(z.string()),
});

const createProducerSchema = z.object({
  name: z.string(),
  document: z.string().min(11).max(14),
  farms: createFarmSchema,
});

export { createProducerSchema };
