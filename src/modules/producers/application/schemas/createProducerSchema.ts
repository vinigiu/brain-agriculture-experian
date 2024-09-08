import { cnpjValidator } from '@/core/utils/cnpjValidator.utils';
import { cpfValidator } from '@/core/utils/cpfValidator.utils';
import { z } from 'zod';

const cultureSchema = z.object({
  id: z.string(),
  name: z.string(),
});

const createFarmSchema = z.object({
  name: z.string(),
  city: z.string(),
  state: z.string(),
  totalArea: z.number(),
  cultivableArea: z.number(),
  vegetationArea: z.number(),
  cultures: z.array(cultureSchema),
});

const createProducerSchema = z.object({
  name: z.string(),
  document: z
    .string()
    .refine((value) => cpfValidator(value) || cnpjValidator(value), {
      message: 'Invalid document number',
    }),
  farms: z.array(createFarmSchema),
});

export { createProducerSchema };
