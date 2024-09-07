import { z } from 'zod';

const updateFarmSchema = z
  .object({
    name: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    totalArea: z.number().optional(),
    cultivableArea: z.number().optional(),
    vegetationArea: z.number().optional(),
    cultures: z.array(z.string()).optional(),
  })
  .optional();

const updateProducerSchema = z.object({
  name: z.string().optional(),
  document: z.string().min(11).max(14).optional(),
  farms: updateFarmSchema,
});

export { updateProducerSchema };
