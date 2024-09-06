import { BadRequestException, PipeTransform } from '@nestjs/common';
import { ZodError, ZodSchema } from 'zod';
import { fromZodError } from 'zod-validation-error';

class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown) {
    try {
      if (typeof value === 'object') {
        return this.schema.parse(value);
      }
      return value;
    } catch (error) {
      if (error instanceof ZodError) {
        throw new BadRequestException({
          message: 'Validation failed',
          statusCode: 400,
          errors: fromZodError(error),
        });
      }
    }
  }
}

function ZodPipe(schema: ZodSchema) {
  return new ZodValidationPipe(schema);
}

export { ZodPipe };
