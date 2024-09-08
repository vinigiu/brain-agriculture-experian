import { cnpjValidator } from '@/core/utils/cnpjValidator.utils';
import { cpfValidator } from '@/core/utils/cpfValidator.utils';
import { z } from 'zod';

const cultureSchema = z.object({
  id: z.string(),
  name: z.string(),
});

const updateFarmSchema = z
  .object({
    name: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    totalArea: z.number().optional(),
    cultivableArea: z.number().optional(),
    vegetationArea: z.number().optional(),
    cultures: z.array(cultureSchema).optional(),
  })
  .optional();

const updateProducerSchema = z.object({
  name: z.string().optional(),
  document: z
    .string()
    .refine((value) => cpfValidator(value) || cnpjValidator(value), {
      message: 'Invalid document number',
    })
    .optional(),
  farms: updateFarmSchema,
});

export { updateProducerSchema };
