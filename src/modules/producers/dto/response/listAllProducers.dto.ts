import { Producer } from '@prisma/client';

class ListAllProducersDto {
  producers: Array<Producer>;
}

export { ListAllProducersDto };
