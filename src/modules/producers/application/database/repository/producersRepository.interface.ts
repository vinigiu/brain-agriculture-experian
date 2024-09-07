import {
  CreateProducerDto,
  UpdateProducerDto,
} from '@/modules/producers/dto/request';
import { Prisma, Producer } from '@prisma/client';

interface IProducersRepository {
  create(data: CreateProducerDto): Promise<Producer>;

  findAll(): Promise<Array<Producer>>;

  findById(id: string): Promise<
    Prisma.ProducerGetPayload<{
      include: {
        farms: {
          include: {
            cultures: true;
          };
        };
      };
    }>
  >;

  update(data: UpdateProducerDto, id: string): Promise<Producer>;

  delete(id: string): Promise<{ id: string }>;
}

export { IProducersRepository };
